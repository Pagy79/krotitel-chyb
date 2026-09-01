import { MISCONCEPTS } from "@/data/diagnostic";
import type { TopicId } from "@/lib/types";

export type TahakItem = { title: string; hint: string; example: string };

export const TAHAKY: Record<TopicId, TahakItem[]> = {
  vyrazy: [
    {
      title: MISCONCEPTS.M1.name,
      hint: MISCONCEPTS.M1.hint,
      example: "5 − 2(x − 3) = 5 − 2x + 6 = 11 − 2x",
    },
    {
      title: MISCONCEPTS.M2.name,
      hint: MISCONCEPTS.M2.hint,
      example: "(x − 3)² = x² − 6x + 9    ·    (2x)² = 4x²",
    },
    {
      title: MISCONCEPTS.M3.name,
      hint: MISCONCEPTS.M3.hint,
      example: "(6x + 4) / 2 = 3x + 2    ·    (x + 6) / 2 = 5 → x = 4",
    },
    {
      title: MISCONCEPTS.M4.name,
      hint: MISCONCEPTS.M4.hint,
      example: "5x − 3 = 2x + 9 → 3x = 12 → x = 4",
    },
  ],
  procenta: [
    {
      title: "Co je procento",
      hint: "1 % je jedna setina. 100 % je celek.",
      example: "25 % ze 80 = 80 ÷ 4 = 20",
    },
    {
      title: "Zvýšení o procenta",
      hint: "Nejdřív spočítej tolik procent z původní ceny, pak to přičti.",
      example: "400 Kč + 10 % → 40 Kč → nová cena 440 Kč",
    },
    {
      title: "Snížení o procenta",
      hint: "Spočítej procenta z původní hodnoty a odečti je. Nenech se zmást tím, že 10 % z nové ceny je něco jiného.",
      example: "400 Kč − 10 % → 40 Kč → nová cena 360 Kč",
    },
  ],
  neznama: [
    {
      title: "Úlohy o pohybu",
      hint: "dráha = rychlost × čas. Když jdou proti sobě, rychlosti sečti. Když se honí, odečti.",
      example: "4 km/h a 6 km/h proti sobě → k sobě 10 km/h",
    },
    {
      title: "Společná práce",
      hint: "Spočítej, kolik práce udělá každý za 1 hodinu, a sečti díly.",
      example: "A za 6 h, B za 3 h → za 1 h udělají 1/6 + 1/3 = 1/2 práce",
    },
    {
      title: "Věk a tabulky",
      hint: "Zapiš neznámé, vztahy do rovnice nebo do tabulky. Závislost čti po řádcích.",
      example: "Otec je o 24 let starší. Syn má x, otec x + 24.",
    },
  ],
  geometrie: [
    {
      title: "Obvod a obsah",
      hint: "Obvod je cesta kolem dokola. Obsah je plocha uvnitř.",
      example: "Obdélník 3 × 5 → obvod 16, obsah 15",
    },
    {
      title: "Úhly a Pythagorova věta",
      hint: "Součet úhlů v trojúhelníku je 180°. V pravoúhlém platí a² + b² = c².",
      example: "3² + 4² = 5² → 9 + 16 = 25",
    },
    {
      title: "Tělesa",
      hint: "Objem je, kolik se vejde dovnitř. Povrch je součet všech stěn.",
      example: "Krychle a = 3 → V = 27, S = 54",
    },
  ],
};
