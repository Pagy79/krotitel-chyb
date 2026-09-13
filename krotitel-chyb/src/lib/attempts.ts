import { DEFAULT_WILDNESS } from "@/data/topics";
import { loadSession } from "@/lib/session";
import { getSupabase } from "@/lib/supabase/client";
import type { TopicId } from "@/lib/types";

const TOPIC_IDS = new Set(Object.keys(DEFAULT_WILDNESS) as TopicId[]);

const KEY = "krotitel-attempts-v1";
const ANSWERS_KEY = "krotitel-answers-v1";
const LEGACY_BEST_KEY = "krotitel-velky-test-best";

export type AttemptMode = "practice" | "full" | "mistakes";

export type TestAttempt = {
  mode: AttemptMode;
  category: TopicId | null;
  percentage: number;
  createdAt: string;
};

export type AttemptAnswer = {
  questionId: string;
  category: TopicId;
  isCorrect: boolean;
  selectedIndex?: number | null;
  hintUsed?: boolean;
  pointsEarned?: number;
  createdAt: string;
};

export type SaveAttemptInput = Omit<TestAttempt, "createdAt"> & {
  score?: number;
  maxScore?: number;
  questionCount?: number;
  answeredCount?: number;
  timeExpired?: boolean;
  answers?: Omit<AttemptAnswer, "createdAt">[];
};

export type WeakestArea = {
  category: TopicId;
  correct: number;
  total: number;
  percentage: number;
};

export type TestProgress = {
  lastByTopic: Record<TopicId, number | null>;
  fullBestPct: number | null;
  fullLastPct: number | null;
  categoryStats: Partial<Record<TopicId, WeakestArea>>;
  weakestArea: WeakestArea | null;
  mistakeQuestionIds: string[];
  hasPractice: boolean;
};

function emptyLastByTopic(): Record<TopicId, number | null> {
  return Object.fromEntries(Object.keys(DEFAULT_WILDNESS).map((id) => [id, null])) as Record<
    TopicId,
    number | null
  >;
}

function readAttempts(): TestAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as TestAttempt[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAttempts(attempts: TestAttempt[]) {
  localStorage.setItem(KEY, JSON.stringify(attempts.slice(0, 200)));
}

function readAnswers(): AttemptAnswer[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ANSWERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as AttemptAnswer[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAnswers(answers: AttemptAnswer[]) {
  localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers.slice(0, 5000)));
}

function computeCategoryStats(answers: AttemptAnswer[]) {
  const byCat: Partial<Record<TopicId, { correct: number; total: number }>> = {};
  for (const answer of answers) {
    if (!answer?.category) continue;
    if (!byCat[answer.category]) byCat[answer.category] = { correct: 0, total: 0 };
    const bucket = byCat[answer.category]!;
    bucket.total += 1;
    if (answer.isCorrect) bucket.correct += 1;
  }
  const stats: Partial<Record<TopicId, WeakestArea>> = {};
  for (const [category, { correct, total }] of Object.entries(byCat) as [
    TopicId,
    { correct: number; total: number },
  ][]) {
    stats[category] = {
      category,
      correct,
      total,
      percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
    };
  }
  return stats;
}

function pickWeakestArea(categoryStats: Partial<Record<TopicId, WeakestArea>>) {
  const list = Object.values(categoryStats).filter(Boolean) as WeakestArea[];
  list.sort((a, b) => a.percentage - b.percentage || b.total - a.total);
  return list[0] ?? null;
}

function latestOutcomeByQuestion(answers: AttemptAnswer[]) {
  const sorted = [...answers].sort(
    (a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime(),
  );
  const map = new Map<string, AttemptAnswer>();
  for (const answer of sorted) {
    if (!answer.questionId || map.has(answer.questionId)) continue;
    map.set(answer.questionId, answer);
  }
  return map;
}

function asTopicId(value: string | null | undefined): TopicId | null {
  if (value && TOPIC_IDS.has(value as TopicId)) return value as TopicId;
  return null;
}

function buildProgress(attempts: TestAttempt[], answers: AttemptAnswer[]): TestProgress {
  const lastByTopic = emptyLastByTopic();

  for (const topicId of Object.keys(lastByTopic) as TopicId[]) {
    const last = attempts.find((a) => a.mode === "practice" && a.category === topicId);
    if (last) lastByTopic[topicId] = Math.round(last.percentage);
  }

  const full = attempts.filter((a) => a.mode === "full" && Number.isFinite(a.percentage));
  let fullBestPct: number | null = full.length
    ? Math.round(Math.max(...full.map((a) => a.percentage)))
    : null;
  const fullLastPct = full.length ? Math.round(full[0].percentage) : null;

  if (fullBestPct == null && typeof window !== "undefined") {
    try {
      const legacy = localStorage.getItem(LEGACY_BEST_KEY);
      if (legacy) fullBestPct = Number(legacy);
    } catch {
      /* ignore */
    }
  }

  const categoryStats = computeCategoryStats(answers);
  const weakestArea = pickWeakestArea(categoryStats);
  const mistakeQuestionIds = [...latestOutcomeByQuestion(answers).entries()]
    .filter(([, answer]) => !answer.isCorrect)
    .map(([id]) => id);

  return {
    lastByTopic,
    fullBestPct,
    fullLastPct,
    categoryStats,
    weakestArea,
    mistakeQuestionIds,
    hasPractice: answers.length > 0,
  };
}

export async function saveAttempt(attempt: SaveAttemptInput) {
  const createdAt = new Date().toISOString();
  const answers = attempt.answers ?? [];
  const questionCount = attempt.questionCount ?? answers.length;
  const answeredCount = attempt.answeredCount ?? answers.length;
  const maxScore = attempt.maxScore ?? Math.max(questionCount * 2, 1);
  const score =
    attempt.score ??
    answers.reduce((sum, answer) => sum + (answer.pointsEarned ?? (answer.isCorrect ? 2 : 0)), 0);

  const row: TestAttempt = {
    mode: attempt.mode,
    category: attempt.category,
    percentage: attempt.percentage,
    createdAt,
  };
  writeAttempts([row, ...readAttempts()]);

  if (answers.length) {
    const rows: AttemptAnswer[] = answers.map((answer) => ({
      ...answer,
      createdAt,
    }));
    writeAnswers([...rows, ...readAnswers()]);
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("krotitel-attempts"));
  }

  const session = loadSession();
  const supabase = getSupabase();
  if (!supabase || !session.userId) return;

  const attemptId = crypto.randomUUID();
  const { error: attemptError } = await supabase.from("attempts").insert({
    id: attemptId,
    user_id: session.userId,
    mode: attempt.mode,
    category: attempt.category,
    score,
    max_score: maxScore,
    question_count: questionCount,
    answered_count: answeredCount,
    percentage: attempt.percentage,
    time_expired: !!attempt.timeExpired,
  });

  if (attemptError) {
    console.warn("Uložení pokusu do Supabase selhalo:", attemptError.message);
    return;
  }

  if (!answers.length) return;

  const { error: answersError } = await supabase.from("attempt_answers").insert(
    answers.map((answer) => ({
      attempt_id: attemptId,
      user_id: session.userId,
      question_id: answer.questionId,
      category: answer.category,
      is_correct: !!answer.isCorrect,
      selected_index: answer.selectedIndex ?? null,
      hint_used: !!answer.hintUsed,
      points_earned: answer.pointsEarned ?? 0,
    })),
  );
  if (answersError) {
    console.warn("Uložení odpovědí do Supabase selhalo:", answersError.message);
  }
}

export function loadTestProgress(): TestProgress {
  return buildProgress(readAttempts(), readAnswers());
}

export async function loadProgressMerged(): Promise<TestProgress> {
  const local = loadTestProgress();
  const session = loadSession();
  const supabase = getSupabase();
  if (!supabase || !session.userId) return local;

  const [{ data: remoteAttempts, error: attemptError }, { data: remoteAnswers, error: answersError }] =
    await Promise.all([
      supabase
        .from("attempts")
        .select("mode, category, percentage, created_at")
        .eq("user_id", session.userId)
        .order("created_at", { ascending: false })
        .limit(80),
      supabase
        .from("attempt_answers")
        .select("question_id, category, is_correct, created_at")
        .eq("user_id", session.userId)
        .order("created_at", { ascending: false })
        .limit(3000),
    ]);

  if (attemptError) console.warn("Načtení pokusů ze Supabase:", attemptError.message);
  if (answersError) console.warn("Načtení odpovědí ze Supabase:", answersError.message);

  const attempts: TestAttempt[] = (remoteAttempts ?? []).map((row) => ({
    mode: row.mode as TestAttempt["mode"],
    category: asTopicId(row.category),
    percentage: Number(row.percentage),
    createdAt: row.created_at,
  }));
  const answers: AttemptAnswer[] = (remoteAnswers ?? [])
    .map((row) => {
      const category = asTopicId(row.category);
      if (!category) return null;
      return {
        questionId: row.question_id,
        category,
        isCorrect: !!row.is_correct,
        createdAt: row.created_at,
      };
    })
    .filter((row): row is AttemptAnswer => row != null);

  if (attempts.length === 0 && answers.length === 0) return local;
  return buildProgress(attempts, answers);
}

export function pctTone(percentage: number | null) {
  if (percentage == null || percentage <= 0) return "#6B6458";
  if (percentage >= 70) return "#059669";
  if (percentage >= 50) return "#FF6B35";
  return "#FF521B";
}
