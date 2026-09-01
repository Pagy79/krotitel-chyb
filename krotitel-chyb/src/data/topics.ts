import type { Topic } from "@/lib/types";

export const TOPICS: Topic[] = [
  {
    id: "procenta",
    name: "Čísla a procenta",
    symbol: "%",
    desc: "Zlomky, procenta, desetinná čísla, poměry a základní operace.",
  },
  {
    id: "vyrazy",
    name: "Výrazy a rovnice",
    symbol: "=",
    desc: "Úpravy výrazů, vzorce, řešení rovnic a soustav.",
  },
  {
    id: "neznama",
    name: "Slovní úlohy a logika",
    symbol: "x",
    desc: "Pohyb, společná práce, věk, tabulky a logické závislosti.",
  },
  {
    id: "geometrie",
    name: "Geometrie a tělesa",
    symbol: "△",
    desc: "Obvody, obsahy, úhly, Pythagorova věta, tělesa.",
  },
];

export const DEFAULT_WILDNESS = Object.fromEntries(
  TOPICS.map((t) => [t.id, 1]),
) as Record<(typeof TOPICS)[number]["id"], number>;
