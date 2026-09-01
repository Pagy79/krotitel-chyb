import { DIAGNOSTIC_MORE } from "@/data/diagnosticMore";
import type { DiagnosticQuestion, MisconceptId } from "@/lib/types";

export const MISCONCEPTS: Record<
  MisconceptId,
  { name: string; hint: string; diagnosis: string }
> = {
  M1: {
    name: "Znaménka a závorky",
    hint: "Mínus před závorkou otočí znaménko všemu uvnitř. Nejdřív roznásob, teprve potom sčítej.",
    diagnosis: "Tvor sebou šije kvůli znaménkům a závorkám.",
  },
  M2: {
    name: "Druhá mocnina",
    hint: "(a + b)² je (a + b)·(a + b), ne a² + b². A (2x)² je 4x², ne 2x².",
    diagnosis: "Tvor sebou šije kvůli umocňování.",
  },
  M3: {
    name: "Krácení a zlomky",
    hint: "Dělíš celý výraz, ne jen jeden člen. U rovnice vynásob obě strany stejným číslem.",
    diagnosis: "Tvor sebou šije kvůli krácení a zlomkům.",
  },
  M4: {
    name: "Úprava rovnice",
    hint: "Rovnice je váha. Člen převádíš na druhou stranu s opačným znaménkem. Co uděláš vlevo, udělej i vpravo.",
    diagnosis: "Tvor sebou šije kvůli převádění členů v rovnici.",
  },
};

export const DIAGNOSTIC_CORE: DiagnosticQuestion[] = [
  {
    id: "m1-1",
    misconcept: "M1",
    prompt: "Uprav výraz: 5 − 2(x − 3)",
    options: [
      { t: "11 − 2x", c: true },
      { t: "−2x − 1", m: "M1" },
      { t: "5 − 2x", m: null },
      { t: "5 − 2x − 6", m: null },
    ],
  },
  {
    id: "m1-2",
    misconcept: "M1",
    prompt: "Uprav výraz: 3 − (2x − 5)",
    options: [
      { t: "8 − 2x", c: true },
      { t: "−2x − 2", m: "M1" },
      { t: "3 − 2x − 5", m: "M1" },
      { t: "3 − 2x", m: null },
    ],
  },
  {
    id: "m1-3",
    misconcept: "M1",
    prompt: "Uprav výraz: 2(x + 4) − (x − 1)",
    options: [
      { t: "x + 9", c: true },
      { t: "x + 7", m: "M1" },
      { t: "3x + 3", m: null },
      { t: "2x + 5", m: null },
    ],
  },
  {
    id: "m1-4",
    misconcept: "M1",
    prompt: "Uprav výraz: 4x − 3(x + 2)",
    options: [
      { t: "x − 6", c: true },
      { t: "x + 6", m: "M1" },
      { t: "x − 2", m: null },
      { t: "7x − 6", m: null },
    ],
  },
  {
    id: "m1-5",
    misconcept: "M1",
    prompt: "Řeš rovnici: 12 − 3(x + 1) = 0",
    options: [
      { t: "x = 3", c: true },
      { t: "x = 5", m: "M1" },
      { t: "x = 4", m: null },
      { t: "x = −3", m: null },
    ],
  },
  {
    id: "m1-6",
    misconcept: "M1",
    prompt: "Uprav výraz: 7 − 2(3 − x)",
    options: [
      { t: "2x + 1", c: true },
      { t: "1 − 2x", m: "M1" },
      { t: "13 − 2x", m: null },
      { t: "2x − 13", m: null },
    ],
  },
  {
    id: "m1-7",
    misconcept: "M1",
    prompt: "Uprav výraz: −3(x + 4) + 2",
    options: [
      { t: "−3x − 10", c: true },
      { t: "−3x + 14", m: "M1" },
      { t: "−3x − 12", m: null },
      { t: "3x − 10", m: null },
    ],
  },
  {
    id: "m2-1",
    misconcept: "M2",
    prompt: "Uprav výraz: (x + 4)²",
    options: [
      { t: "x² + 8x + 16", c: true },
      { t: "x² + 16", m: "M2" },
      { t: "x² + 4", m: null },
      { t: "2x² + 16", m: null },
    ],
  },
  {
    id: "m2-2",
    misconcept: "M2",
    prompt: "Uprav výraz: (x − 3)²",
    options: [
      { t: "x² − 6x + 9", c: true },
      { t: "x² + 9", m: "M2" },
      { t: "x² − 9", m: "M2" },
      { t: "x² − 3", m: null },
    ],
  },
  {
    id: "m2-3",
    misconcept: "M2",
    prompt: "Uprav výraz: (2x)²",
    options: [
      { t: "4x²", c: true },
      { t: "2x²", m: "M2" },
      { t: "4x", m: null },
      { t: "2x", m: null },
    ],
  },
  {
    id: "m2-4",
    misconcept: "M2",
    prompt: "Uprav výraz: 3(x − 2)²",
    options: [
      { t: "3x² − 12x + 12", c: true },
      { t: "3x² − 12", m: "M2" },
      { t: "(3x − 6)²", m: "M2" },
      { t: "3x² − 6x + 12", m: null },
    ],
  },
  {
    id: "m2-5",
    misconcept: "M2",
    prompt: "Který výraz se rovná (y + 1)²?",
    options: [
      { t: "y² + 2y + 1", c: true },
      { t: "y² + 1", m: "M2" },
      { t: "y² + y + 1", m: null },
      { t: "2y + 1", m: null },
    ],
  },
  {
    id: "m2-6",
    misconcept: "M2",
    prompt: "Uprav výraz: (x + 2)(x + 5)",
    options: [
      { t: "x² + 7x + 10", c: true },
      { t: "x² + 10", m: "M2" },
      { t: "x² + 7x", m: null },
      { t: "2x + 7", m: null },
    ],
  },
  {
    id: "m3-1",
    misconcept: "M3",
    prompt: "Uprav výraz: (3x + 9) / 3",
    options: [
      { t: "x + 3", c: true },
      { t: "x + 9", m: "M3" },
      { t: "3x + 3", m: "M3" },
      { t: "3x + 9", m: null },
    ],
  },
  {
    id: "m3-2",
    misconcept: "M3",
    prompt: "Uprav výraz: (6x + 4) / 2",
    options: [
      { t: "3x + 2", c: true },
      { t: "6x + 2", m: "M3" },
      { t: "3x + 4", m: "M3" },
      { t: "5x", m: null },
    ],
  },
  {
    id: "m3-3",
    misconcept: "M3",
    prompt: "Uprav výraz: (2x − 8) / 2",
    options: [
      { t: "x − 4", c: true },
      { t: "x − 8", m: "M3" },
      { t: "2x − 4", m: "M3" },
      { t: "x + 4", m: null },
    ],
  },
  {
    id: "m3-4",
    misconcept: "M3",
    prompt: "Řeš rovnici: (x + 6) / 2 = 5",
    options: [
      { t: "x = 4", c: true },
      { t: "x = −1", m: "M3" },
      { t: "x = 10", m: null },
      { t: "x = 16", m: null },
    ],
  },
  {
    id: "m3-5",
    misconcept: "M3",
    prompt: "Řeš rovnici: 2x / 4 = 3",
    options: [
      { t: "x = 6", c: true },
      { t: "x = 12", m: "M3" },
      { t: "x = 1,5", m: "M3" },
      { t: "x = 5", m: null },
    ],
  },
  {
    id: "m3-6",
    misconcept: "M3",
    prompt: "Uprav výraz: 8(x + 1) / 4",
    options: [
      { t: "2x + 2", c: true },
      { t: "2x + 1", m: "M3" },
      { t: "8x + 1", m: "M3" },
      { t: "2(x + 1) / 4", m: null },
    ],
  },
  {
    id: "m4-1",
    misconcept: "M4",
    prompt: "Řeš rovnici: x + 7 = 15",
    options: [
      { t: "x = 8", c: true },
      { t: "x = 22", m: "M4" },
      { t: "x = 15", m: null },
      { t: "x = −8", m: null },
    ],
  },
  {
    id: "m4-2",
    misconcept: "M4",
    prompt: "Řeš rovnici: 3x = 18",
    options: [
      { t: "x = 6", c: true },
      { t: "x = 15", m: "M4" },
      { t: "x = 54", m: "M4" },
      { t: "x = 21", m: null },
    ],
  },
  {
    id: "m4-3",
    misconcept: "M4",
    prompt: "Řeš rovnici: 2x + 5 = 17",
    options: [
      { t: "x = 6", c: true },
      { t: "x = 12", m: "M4" },
      { t: "x = 11", m: null },
      { t: "x = 22", m: "M4" },
    ],
  },
  {
    id: "m4-4",
    misconcept: "M4",
    prompt: "Řeš rovnici: 5x − 3 = 2x + 9",
    options: [
      { t: "x = 4", c: true },
      { t: "x = 2", m: "M4" },
      { t: "x = 6", m: null },
      { t: "x = 12", m: null },
    ],
  },
  {
    id: "m4-5",
    misconcept: "M4",
    prompt: "Řeš rovnici: 4(x − 1) = 2x + 6",
    options: [
      { t: "x = 5", c: true },
      { t: "x = 3,5", m: "M1" },
      { t: "x = 2", m: "M4" },
      { t: "x = 7", m: null },
    ],
  },
  {
    id: "m4-6",
    misconcept: "M4",
    prompt: "Řeš rovnici: 3 − x = 2x + 9",
    options: [
      { t: "x = −2", c: true },
      { t: "x = −6", m: "M4" },
      { t: "x = 2", m: null },
      { t: "x = 6", m: null },
    ],
  },
  {
    id: "m4-7",
    misconcept: "M4",
    prompt: "Řeš rovnici: x − 4 = 2x + 1",
    options: [
      { t: "x = −5", c: true },
      { t: "x = 5", m: "M4" },
      { t: "x = −3", m: null },
      { t: "x = 3", m: "M4" },
    ],
  },
  {
    id: "m1-8",
    misconcept: "M1",
    prompt: "Uprav výraz: 8 − (3x + 2)",
    options: [
      { t: "6 − 3x", c: true },
      { t: "8 − 3x + 2", m: "M1" },
      { t: "10 − 3x", m: "M1" },
      { t: "8 − 3x", m: null },
    ],
  },
  {
    id: "m1-9",
    misconcept: "M1",
    prompt: "Uprav výraz: 5(x − 1) − 2(x + 3)",
    options: [
      { t: "3x − 11", c: true },
      { t: "3x − 1", m: "M1" },
      { t: "7x − 11", m: null },
      { t: "3x + 1", m: null },
    ],
  },
  {
    id: "m1-10",
    misconcept: "M1",
    prompt: "Uprav výraz: −(x − 7)",
    options: [
      { t: "−x + 7", c: true },
      { t: "−x − 7", m: "M1" },
      { t: "x − 7", m: null },
      { t: "x + 7", m: null },
    ],
  },
  {
    id: "m1-11",
    misconcept: "M1",
    prompt: "Řeš rovnici: 4 − 2(x − 1) = 0",
    options: [
      { t: "x = 3", c: true },
      { t: "x = 1", m: "M1" },
      { t: "x = 2", m: null },
      { t: "x = −1", m: null },
    ],
  },
  {
    id: "m1-12",
    misconcept: "M1",
    prompt: "Uprav výraz: 2x − (x − 6)",
    options: [
      { t: "x + 6", c: true },
      { t: "x − 6", m: "M1" },
      { t: "3x − 6", m: "M1" },
      { t: "x + 6x", m: null },
    ],
  },
  {
    id: "m1-13",
    misconcept: "M1",
    prompt: "Uprav výraz: 9 − 3(2 − x)",
    options: [
      { t: "3x + 3", c: true },
      { t: "3 − 3x", m: "M1" },
      { t: "9 − 6 − x", m: null },
      { t: "15 − 3x", m: null },
    ],
  },
  {
    id: "m2-7",
    misconcept: "M2",
    prompt: "Uprav výraz: (3x)²",
    options: [
      { t: "9x²", c: true },
      { t: "3x²", m: "M2" },
      { t: "6x²", m: "M2" },
      { t: "9x", m: null },
    ],
  },
  {
    id: "m2-8",
    misconcept: "M2",
    prompt: "Uprav výraz: (x + 6)²",
    options: [
      { t: "x² + 12x + 36", c: true },
      { t: "x² + 36", m: "M2" },
      { t: "x² + 6x + 36", m: null },
      { t: "2x + 12", m: null },
    ],
  },
  {
    id: "m2-9",
    misconcept: "M2",
    prompt: "Uprav výraz: 2(x + 3)²",
    options: [
      { t: "2x² + 12x + 18", c: true },
      { t: "2x² + 18", m: "M2" },
      { t: "(2x + 6)²", m: "M2" },
      { t: "2x² + 6x + 9", m: null },
    ],
  },
  {
    id: "m2-10",
    misconcept: "M2",
    prompt: "Uprav výraz: (x − 4)(x + 4)",
    options: [
      { t: "x² − 16", c: true },
      { t: "x² + 16", m: "M2" },
      { t: "x² − 8x − 16", m: null },
      { t: "2x", m: null },
    ],
  },
  {
    id: "m2-11",
    misconcept: "M2",
    prompt: "Uprav výraz: (5x)²",
    options: [
      { t: "25x²", c: true },
      { t: "5x²", m: "M2" },
      { t: "10x²", m: "M2" },
      { t: "25x", m: null },
    ],
  },
  {
    id: "m2-12",
    misconcept: "M2",
    prompt: "Uprav výraz: (2x + 1)²",
    options: [
      { t: "4x² + 4x + 1", c: true },
      { t: "4x² + 1", m: "M2" },
      { t: "2x² + 1", m: "M2" },
      { t: "4x² + 2x + 1", m: null },
    ],
  },
  {
    id: "m2-13",
    misconcept: "M2",
    prompt: "Uprav výraz: (x − 2)(x + 6)",
    options: [
      { t: "x² + 4x − 12", c: true },
      { t: "x² − 12", m: "M2" },
      { t: "x² + 4x + 12", m: null },
      { t: "x² − 8", m: null },
    ],
  },
  {
    id: "m3-7",
    misconcept: "M3",
    prompt: "Uprav výraz: (4x + 8) / 4",
    options: [
      { t: "x + 2", c: true },
      { t: "x + 8", m: "M3" },
      { t: "4x + 2", m: "M3" },
      { t: "x + 4", m: null },
    ],
  },
  {
    id: "m3-8",
    misconcept: "M3",
    prompt: "Uprav výraz: (9x − 3) / 3",
    options: [
      { t: "3x − 1", c: true },
      { t: "9x − 1", m: "M3" },
      { t: "3x − 3", m: "M3" },
      { t: "6x", m: null },
    ],
  },
  {
    id: "m3-9",
    misconcept: "M3",
    prompt: "Řeš rovnici: x / 2 + 3 = 7",
    options: [
      { t: "x = 8", c: true },
      { t: "x = 4", m: "M3" },
      { t: "x = 20", m: "M3" },
      { t: "x = 10", m: null },
    ],
  },
  {
    id: "m3-10",
    misconcept: "M3",
    prompt: "Řeš rovnici: 3x / 6 = 2",
    options: [
      { t: "x = 4", c: true },
      { t: "x = 1", m: "M3" },
      { t: "x = 12", m: "M3" },
      { t: "x = 2", m: null },
    ],
  },
  {
    id: "m3-11",
    misconcept: "M3",
    prompt: "Uprav výraz: (5x + 10) / 5",
    options: [
      { t: "x + 2", c: true },
      { t: "x + 10", m: "M3" },
      { t: "5x + 2", m: "M3" },
      { t: "x + 5", m: null },
    ],
  },
  {
    id: "m3-12",
    misconcept: "M3",
    prompt: "Řeš rovnici: (4x − 12) / 2 = 6",
    options: [
      { t: "x = 6", c: true },
      { t: "x = 3", m: "M3" },
      { t: "x = 12", m: null },
      { t: "x = 0", m: "M3" },
    ],
  },
  {
    id: "m4-8",
    misconcept: "M4",
    prompt: "Řeš rovnici: x + 12 = 5",
    options: [
      { t: "x = −7", c: true },
      { t: "x = 17", m: "M4" },
      { t: "x = 7", m: "M4" },
      { t: "x = −12", m: null },
    ],
  },
  {
    id: "m4-9",
    misconcept: "M4",
    prompt: "Řeš rovnici: 7x = 21",
    options: [
      { t: "x = 3", c: true },
      { t: "x = 14", m: "M4" },
      { t: "x = 28", m: "M4" },
      { t: "x = 147", m: null },
    ],
  },
  {
    id: "m4-10",
    misconcept: "M4",
    prompt: "Řeš rovnici: 3x + 4 = 19",
    options: [
      { t: "x = 5", c: true },
      { t: "x = 23", m: "M4" },
      { t: "x = 15", m: null },
      { t: "x = 7", m: "M4" },
    ],
  },
  {
    id: "m4-11",
    misconcept: "M4",
    prompt: "Řeš rovnici: 6x − 2 = 4x + 8",
    options: [
      { t: "x = 5", c: true },
      { t: "x = 3", m: "M4" },
      { t: "x = 10", m: null },
      { t: "x = −5", m: "M4" },
    ],
  },
  {
    id: "m4-12",
    misconcept: "M4",
    prompt: "Řeš rovnici: 2(x + 3) = x + 9",
    options: [
      { t: "x = 3", c: true },
      { t: "x = 6", m: "M4" },
      { t: "x = 1", m: null },
      { t: "x = 12", m: "M1" },
    ],
  },
];

export const DIAGNOSTIC_POOL: DiagnosticQuestion[] = [...DIAGNOSTIC_CORE, ...DIAGNOSTIC_MORE];
