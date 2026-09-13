export type TopicId = "vyrazy" | "procenta" | "neznama" | "geometrie";
export type CreatureSymbol = "=" | "%" | "x" | "△";
export type Mood = "happy" | "curious" | "wary" | "calm";
export type MisconceptId = "M1" | "M2" | "M3" | "M4";
export type FlagStatus = "none" | "soft" | "hard";

export type Topic = {
  id: TopicId;
  name: string;
  symbol: CreatureSymbol;
  desc: string;
};

type QuestionBase = {
  id: number;
  topic: TopicId;
  workingText?: string;
  prompt: string;
  friendlyHint: string;
  explanation: string;
};

export type OpenQuestion = QuestionBase & {
  type: "open";
  accept: string[];
};

export type McQuestion = QuestionBase & {
  type: "mc";
  options: string[];
  correctIndex: number;
};

export type QuizQuestion = OpenQuestion | McQuestion;

export type DiagnosticOption = {
  t: string;
  c?: boolean;
  m?: MisconceptId | null;
};

export type DiagnosticQuestion = {
  id: string;
  misconcept: MisconceptId;
  workingText?: string;
  prompt: string;
  options: DiagnosticOption[];
};

export type ShuffledOption = {
  text: string;
  correct: boolean;
  tag: MisconceptId | null;
};

export type WildnessMap = Record<TopicId, number>;
