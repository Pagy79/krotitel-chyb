import { DIAGNOSTIC_POOL, MISCONCEPTS } from "@/data/diagnostic";
import { QUESTIONS } from "@/data/questions";
import { shuffleArray } from "@/lib/shuffle";
import type { DiagnosticQuestion, QuizQuestion, TopicId } from "@/lib/types";

export function questionKey(topic: TopicId, id: number | string) {
  return `${topic}:${id}`;
}

export function diagnosticToQuiz(question: DiagnosticQuestion): QuizQuestion {
  const options = question.options.map((o) => o.t);
  const correctIndex = Math.max(
    0,
    question.options.findIndex((o) => o.c),
  );
  return {
    id: 0,
    topic: "vyrazy",
    type: "mc",
    workingText: question.workingText,
    prompt: question.prompt,
    options,
    correctIndex,
    friendlyHint: MISCONCEPTS[question.misconcept].hint,
    explanation: MISCONCEPTS[question.misconcept].hint,
  };
}

export function resolveQuestionKey(question: QuizQuestion) {
  if (question.topic === "vyrazy") {
    const match = DIAGNOSTIC_POOL.find((item) => item.prompt === question.prompt);
    if (match) return questionKey("vyrazy", match.id);
  }
  return questionKey(question.topic, question.id);
}

export function getQuestionByKey(key: string): QuizQuestion | null {
  const sep = key.indexOf(":");
  if (sep < 0) return null;
  const topic = key.slice(0, sep) as TopicId;
  const id = key.slice(sep + 1);
  if (topic === "vyrazy") {
    const diagnostic = DIAGNOSTIC_POOL.find((item) => item.id === id);
    if (diagnostic) return diagnosticToQuiz(diagnostic);
  }
  const numericId = Number(id);
  if (!Number.isFinite(numericId)) return null;
  return QUESTIONS.find((item) => item.topic === topic && item.id === numericId) ?? null;
}

export function pickMistakesQuestions(openIds: string[], preferIds: string[] = [], cap: number) {
  const seen = new Set<string>();
  const ordered: string[] = [];
  for (const id of [...preferIds, ...openIds]) {
    if (!id || seen.has(id)) continue;
    seen.add(id);
    ordered.push(id);
  }
  const pool = ordered.map((id) => ({ id, question: getQuestionByKey(id) })).filter((row) => row.question);
  const preferCount = preferIds.filter((id) => pool.some((row) => row.id === id)).length;
  const prefer = shuffleArray(pool.slice(0, preferCount));
  const rest = shuffleArray(pool.slice(preferCount));
  return [...prefer, ...rest].slice(0, cap);
}
