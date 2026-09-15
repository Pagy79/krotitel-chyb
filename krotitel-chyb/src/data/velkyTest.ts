import { DIAGNOSTIC_POOL, MISCONCEPTS } from "@/data/diagnostic";
import { QUESTIONS } from "@/data/questions";
import { VELKY_TEST_QUESTION_COUNT } from "@/lib/velkyTestRules";
import { shuffleArray } from "@/lib/shuffle";
import type { McQuestion, QuizQuestion } from "@/lib/types";

function fromDiagnostic(): McQuestion[] {
  return DIAGNOSTIC_POOL.map((d, i) => {
    const correctIndex = d.options.findIndex((o) => o.c);
    const options = d.options.map((o) => o.t);
    return {
      id: 2000 + i,
      topic: "vyrazy" as const,
      type: "mc" as const,
      workingText: d.workingText,
      prompt: d.prompt,
      options,
      correctIndex,
      friendlyHint: MISCONCEPTS[d.misconcept].hint,
      explanation: `Správně: ${options[correctIndex]}.`,
    };
  }).filter((q) => q.options.length === 4 && q.correctIndex >= 0);
}

function shuffleMc(q: McQuestion): McQuestion {
  const indexed = q.options.map((text, i) => ({ text, correct: i === q.correctIndex }));
  const shuffled = shuffleArray(indexed);
  return {
    ...q,
    options: shuffled.map((o) => o.text),
    correctIndex: shuffled.findIndex((o) => o.correct),
  };
}

/** Draws exactly `count` items; cycles the pool if it is shorter, without immediate repeats. */
function drawQuestions(pool: McQuestion[], count: number): McQuestion[] {
  if (pool.length === 0) return [];
  const result: McQuestion[] = [];
  let bag = shuffleArray(pool);
  while (result.length < count) {
    if (bag.length === 0) bag = shuffleArray(pool);
    let candidate = bag.shift();
    if (!candidate) break;
    if (pool.length > 1 && result.length > 0 && candidate.id === result[result.length - 1]?.id && bag.length > 0) {
      bag.push(candidate);
      candidate = bag.shift() ?? candidate;
    }
    result.push(candidate);
  }
  return result;
}

/** Timed mock exam like Czech: 30 A–D questions, shuffled options, mix from the whole bank. */
export function buildVelkyTest(): QuizQuestion[] {
  const pool = [
    ...fromDiagnostic(),
    ...QUESTIONS.filter((q): q is McQuestion => q.type === "mc" && q.options.length === 4),
  ];
  return drawQuestions(pool, VELKY_TEST_QUESTION_COUNT).map(shuffleMc);
}
