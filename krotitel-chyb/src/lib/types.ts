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

export type OpenQuestion = {
  id: number;
  topic: TopicId;
  type: "open";
  prompt: string;
  friendlyHint: string;
  accept: string[];
  explanation: string;
};

export type McQuestion = {
  id: number;
  topic: TopicId;
  type: "mc";
  prompt: string;
  options: string[];
  correctIndex: number;
  friendlyHint: string;
  explanation: string;
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
  prompt: string;
  options: DiagnosticOption[];
};

export type ShuffledOption = {
  text: string;
  correct: boolean;
  tag: MisconceptId | null;
};

export type WildnessMap = Record<TopicId, number>;
