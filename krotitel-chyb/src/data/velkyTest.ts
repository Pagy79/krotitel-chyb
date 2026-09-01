import { DIAGNOSTIC_POOL, MISCONCEPTS } from "@/data/diagnostic";
import { QUESTIONS } from "@/data/questions";
import { VELKY_TEST_QUESTION_COUNT } from "@/lib/velkyTestRules";
import { shuffleArray } from "@/lib/shuffle";
import type { McQuestion, QuizQuestion } from "@/lib/types";

const PER_TOPIC = VELKY_TEST_QUESTION_COUNT / 4;

function fromDiagnostic(): QuizQuestion[] {
  return DIAGNOSTIC_POOL.map((d, i) => {
    const correctIndex = d.options.findIndex((o) => o.c);
    const options = d.options.map((o) => o.t);
    const q: McQuestion = {
      id: 2000 + i,
      topic: "vyrazy",
      type: "mc",
      prompt: d.prompt,
      options,
      correctIndex,
      friendlyHint: MISCONCEPTS[d.misconcept].hint,
      explanation: `Správně: ${options[correctIndex]}.`,
    };
    return q;
  });
}

function pick(bank: QuizQuestion[], count: number) {
  return shuffleArray(bank).slice(0, count);
}

/** Mix 20 úloh: 5 z každého okruhu, pokaždé náhodný výběr. */
export function buildVelkyTest(): QuizQuestion[] {
  return shuffleArray([
    ...pick(fromDiagnostic(), PER_TOPIC),
    ...pick(
      QUESTIONS.filter((q) => q.topic === "procenta"),
      PER_TOPIC,
    ),
    ...pick(
      QUESTIONS.filter((q) => q.topic === "neznama"),
      PER_TOPIC,
    ),
    ...pick(
      QUESTIONS.filter((q) => q.topic === "geometrie"),
      PER_TOPIC,
    ),
  ]);
}
