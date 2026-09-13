import type { TopicId } from "@/lib/types";

export type TahakSection = {
  title: string;
  rule?: string[];
  steps?: string[];
  groups?: { label: string; items: string }[];
  tip?: string;
  trap?: string;
  examples?: string[];
  practice?: { prompt: string; answer: string }[];
};

export const TAHAKY: Record<TopicId, TahakSection[]> = {
  procenta: [
    {
      title: "1. Nejdřív: co je celek",
      rule: [
        "Celek je „všechno dohromady“ — 100 %. Část je kousek z toho celku. Než začneš počítat, vždy si řekni: Co je tady celek? A co hledám — část, nebo celek, nebo kolik procent?",
        "Když to nevíš, úloha se rozpadne. Celek může být původní cena, celá třída, celá cesta, celé těsto.",
      ],
      steps: [
        "Přečti zadání a podtrhni, z čeho počítáš (to je celek = 100 %).",
        "Zjisti, jestli hledáš část (kolik Kč / kg / žáků), celek (původní cenu), nebo procenta (kolik % to je).",
        "Teprve potom sáhni po vzorečku. Bez této věty počítáš naslepo.",
      ],
      tip: "Když si nejsi jistý, nakresli si čtverec nebo úsečku a rozděl ji na 100 dílků. I hrubý náčrt zachrání spoustu chyb.",
      trap: "Často si lidé spletou „novou cenu“ s celkem. Po slevě už 400 Kč není 100 %, pokud zadání mluví o původní ceně.",
      examples: [
        "„20 % z 80 žáků“ → celek je 80 žáků.",
        "„Cena klesla o 20 % na 80 Kč“ → 80 Kč je nová cena, ne celek.",
        "„Kolik % je 15 z 60?“ → celek je 60, část je 15.",
      ],
      practice: [
        { prompt: "V obchodě: „sleva 30 % z 500 Kč“. Co je celek?", answer: "500 Kč (původní cena)" },
        { prompt: "„15 z 60 žáků chybělo. Kolik %?“ Co je celek?", answer: "60 žáků" },
      ],
    },
    {
      title: "2. Zlomky, desetinná čísla a procenta — jeden svět",
      rule: [
        "Je to pořád totéž číslo, jen jinak zapsané. 50 % = 1/2 = 0,5. 25 % = 1/4 = 0,25. 10 % = 1/10 = 0,1. 1 % = 1/100 = 0,01.",
        "Když umíš přepínat mezi těmito zápisy, procenta přestanou být magie.",
      ],
      groups: [
        { label: "1 %", items: "1/100 = 0,01" },
        { label: "5 %", items: "1/20 = 0,05" },
        { label: "10 %", items: "1/10 = 0,1" },
        { label: "20 %", items: "1/5 = 0,2" },
        { label: "25 %", items: "1/4 = 0,25" },
        { label: "50 %", items: "1/2 = 0,5" },
        { label: "75 %", items: "3/4 = 0,75" },
        { label: "100 %", items: "1/1 = 1" },
      ],
      steps: [
        "Z procent na desetinné: posuň čárku o dvě místa doleva. 7 % = 0,07. 35 % = 0,35. 120 % = 1,20.",
        "Z desetinného na procenta: posuň čárku o dvě místa doprava. 0,4 = 40 %. 1,5 = 150 %.",
        "Ze zlomku na procenta: vyřeš zlomek (vyděl) a pak × 100. 3/5 = 0,6 = 60 %.",
      ],
      trap: "7 % není 0,7. To by bylo 70 %. Jedno nula navíc nebo méně a výsledek je desetkrát jiný.",
      examples: [
        "8 % = 0,08 = 8/100 = 2/25",
        "0,03 = 3 %",
        "2/5 = 0,4 = 40 %",
      ],
      practice: [
        { prompt: "Přepiš 12 % jako desetinné číslo.", answer: "0,12" },
        { prompt: "Přepiš 0,07 na procenta.", answer: "7 %" },
        { prompt: "Kolik % je 3/4?", answer: "75 %" },
      ],
    },
    {
      title: "3. Jak spočítat 1 % (nejbezpečnější metoda)",
      rule: [
        "Když nevíš, kudy do toho, spočítej nejdřív 1 %. To je celek vydělený stem. Pak už jen násobíš, kolik těch procent potřebuješ.",
        "1 % z čísla A = A ÷ 100. 17 % z A = 17 × (A ÷ 100).",
      ],
      steps: [
        "Celek vyděl 100 → máš 1 %.",
        "Vynásob počtem procent, které chceš.",
        "Zkontroluj odhadem: 10 % je desetina, 50 % polovina. Když ti 20 % z 200 vyjde 80, je to moc (má být 40).",
      ],
      tip: "U pěkných čísel můžeš i zkratky: 10 % = posun čárky doleva o jedno místo (200 → 20). 5 % je polovina z 10 %. 20 % je dvojnásobek 10 %.",
      examples: [
        "1 % z 400 = 4. Takže 7 % z 400 = 7 × 4 = 28.",
        "1 % z 80 = 0,8. 25 % z 80 = 25 × 0,8 = 20. (Nebo rovnou čtvrtina.)",
        "10 % z 350 = 35. 15 % = 35 + 17,5 = 52,5.",
      ],
      practice: [
        { prompt: "Spočítej 1 % z 250.", answer: "2,5" },
        { prompt: "Kolik je 8 % z 250? (přes 1 %)", answer: "20" },
        { prompt: "Kolik je 15 % z 80?", answer: "12" },
      ],
    },
    {
      title: "4. „Kolik je x % z čísla“ — hledáme část",
      rule: [
        "Tohle je nejčastější úloha. Vzorec: část = celek × procenta ÷ 100.",
        "Slovy: vezmi celek, spočítej z něj ta procenta. Výsledek je menší než celek, pokud je méně než 100 % (a větší, pokud je víc než 100 %).",
      ],
      steps: [
        "Napiš: hledám část.",
        "Dosad: část = 80 × 25 / 100.",
        "Spočítej: 80 × 0,25 = 20. Nebo 80 / 4 = 20.",
      ],
      trap: "Nenásob procenta „jen tak“ bez dělení stem. 80 × 25 = 2000, to není 25 % z 80. Chybí ÷ 100.",
      examples: [
        "25 % ze 80 = 20",
        "120 % z 50 = 60 (víc než celek — v pořádku, je to víc než 100 %)",
        "2,5 % z 400 = 10",
      ],
      practice: [
        { prompt: "Kolik je 30 % ze 90?", answer: "27" },
        { prompt: "Kolik je 120 % z 40?", answer: "48" },
      ],
    },
    {
      title: "5. „Kolik procent je A z B“ — hledáme procenta",
      rule: [
        "Tady už část i celek znáš, neznáš jen ta procenta. Vzorec: procenta = část ÷ celek × 100.",
        "Příklad: 15 z 60. 15/60 = 0,25. 0,25 × 100 = 25 %. Takže 15 je 25 % z 60.",
      ],
      steps: [
        "Zeptej se: „15 je kolik setin z 60?“",
        "Vyděl část celkem: 15 ÷ 60 = 0,25.",
        "Vynásob stem: 25 %.",
      ],
      trap: "Pozor na pořadí. „Kolik % je 60 z 15“ je nesmysl v běžné úloze (vyšlo by 400 %). Celek je to větší „z čeho“, část je „kolik z toho“.",
      examples: [
        "32 správně z 40 úloh → 32/40 = 0,8 = 80 %",
        "15 Kč z 50 Kč → 30 %",
        "3 dny z týdne (7) → 3/7 ≈ 42,9 %",
      ],
      practice: [
        { prompt: "V testu 40 úloh, správně 32. Úspěšnost?", answer: "80 %" },
        { prompt: "Kolik % je 9 z 36?", answer: "25 %" },
      ],
    },
    {
      title: "6. „Znám část i procenta, chci celek“",
      rule: [
        "Třeba: „30 % z neznámé ceny je 60 Kč. Jaká byla původní cena?“ Část a procenta znáš, celek ne.",
        "Vzorec: celek = část ÷ procenta × 100. Nebo: když 30 % = 60, pak 1 % = 2, a 100 % = 200.",
      ],
      steps: [
        "Řekni si: 30 % odpovídá 60.",
        "Spočítej 1 %: 60 ÷ 30 = 2.",
        "Spočítej 100 %: 2 × 100 = 200. To je celek.",
      ],
      trap: "Nenásob 60 × 30. To by byl nesmysl. Tady naopak z části „vylezeš“ na celek dělením.",
      examples: [
        "20 % z ceny je 80 Kč → 1 % = 4 → celek 400 Kč",
        "480 Kč je 120 % (cena s DPH) → 1 % = 4 → 100 % = 400 Kč",
      ],
      practice: [
        { prompt: "25 % z čísla je 15. Jaké je to číslo?", answer: "60" },
        { prompt: "480 Kč je 120 % ceny. Cena bez daně?", answer: "400 Kč" },
      ],
    },
    {
      title: "7. Zvýšení a snížení (sleva, zdražení)",
      rule: [
        "Zvýšení o 10 % znamená: vezmi původní hodnotu a přidej k ní 10 % z NÍ. Nová hodnota = 110 % původní = původní × 1,10.",
        "Snížení o 10 % = zůstane 90 % = původní × 0,90. Odečítáš 10 % z původní ceny, ne „desetinu z hlavy od oka“.",
      ],
      steps: [
        "Zvýšení o p % → vynásob (1 + p/100). +10 % → × 1,10. +20 % → × 1,20.",
        "Snížení o p % → vynásob (1 − p/100). −10 % → × 0,90. −25 % → × 0,75.",
        "Nebo po staru: spočítej p % a přičti / odečti.",
      ],
      groups: [
        { label: "+10 %", items: "× 1,10" },
        { label: "+20 %", items: "× 1,20" },
        { label: "−10 %", items: "× 0,90" },
        { label: "−20 %", items: "× 0,80" },
        { label: "−25 %", items: "× 0,75" },
        { label: "+100 %", items: "× 2 (zdvojnásobení)" },
      ],
      trap: "Sleva 10 % a pak sleva dalších 10 % NENÍ sleva 20 %. Druhá sleva bere z už snížené ceny. 100 × 0,9 × 0,9 = 81, ne 80.",
      examples: [
        "400 Kč + 10 % = 440 Kč",
        "400 Kč − 10 % = 360 Kč",
        "Po +10 % a −10 % z 100: 100 → 110 → 99. Nevrátíš se na 100.",
      ],
      practice: [
        { prompt: "Triko 400 Kč zdražilo o 10 %. Nová cena?", answer: "440 Kč" },
        { prompt: "400 Kč se snížilo o 10 %. Kolik teď?", answer: "360 Kč" },
        { prompt: "100 Kč +10 % a hned −10 %. Kolik zbude?", answer: "99 Kč" },
      ],
    },
    {
      title: "8. Dvě změny po sobě a „o kolik % víc“",
      rule: [
        "Když se číslo změní dvakrát, vždy násobíš postupně. 200 + 10 % a znovu +10 %: 200 × 1,1 × 1,1 = 242. Ne 200 + 20 % = 240.",
        "„O kolik % je A větší než B?“ = (A − B) / B × 100. Pozor: záleží, vůči čemu. „O kolik % je B menší než A“ má jiného jmenovatele (A).",
      ],
      steps: [
        "Napiš každou změnu jako koeficient a vynásob je.",
        "U porovnání si řekni: vůči čemu? To je jmenovatel.",
        "Rozdíl dělený tím „vůči čemu“, krát 100.",
      ],
      trap: "„A je o 25 % větší než B“ neznamená, že B je o 25 % menší než A. Když B = 80 a A = 100, A je o 25 % větší než B, ale B je o 20 % menší než A.",
      examples: [
        "200 se dvakrát zvětšilo o 10 % → 242",
        "80 → 100 je nárůst o 25 % (přidali jsme 20 z 80)",
        "100 → 80 je pokles o 20 % (ubrali jsme 20 ze 100)",
      ],
      practice: [
        { prompt: "200 + 10 % a znovu +10 %. Výsledek?", answer: "242" },
        { prompt: "Z 80 na 100. O kolik % to vzrostlo?", answer: "25 %" },
      ],
    },
    {
      title: "9. Poměr a úměra (když je to „na 3 díly“)",
      rule: [
        "Poměr 2 : 3 říká: celek se rozdělí na 2 + 3 = 5 dílů. První dostane 2/5, druhý 3/5.",
        "Když víš jeden díl, ostatní dopočítáš. Když víš celek, vydělíš počtem dílů.",
      ],
      steps: [
        "Sečti díly v poměru (2 + 3 = 5).",
        "Celek vyděl 5 → hodnota jednoho dílu.",
        "Vynásob, kolik dílů kdo má.",
      ],
      tip: "Poměr jde krátit jako zlomek: 4 : 6 = 2 : 3. Tím si úlohu zjednodušíš.",
      examples: [
        "600 Kč v poměru 2 : 3 → díl 120 Kč → 240 Kč a 360 Kč",
        "Mapa 1 : 100 000 → 1 cm na mapě je 1 km ve skutečnosti",
      ],
      practice: [
        { prompt: "Rozděl 80 v poměru 1 : 3.", answer: "20 a 60" },
        { prompt: "Kolik dílů má poměr 2 : 5 dohromady?", answer: "7" },
      ],
    },
  ],
  vyrazy: [
    {
      title: "1. Co je výraz a co je rovnice",
      rule: [
        "Výraz je „návod na číslo“, ale ještě to není hotová rovnost. Třeba 3x + 2. Můžeš ho jen upravovat (zjednodušit), ne „vyřešit x“.",
        "Rovnice má rovnítko a říká: levá strana se rovná pravé. Třeba 3x + 2 = 11. Tady x hledáš.",
        "Když někdo řekne „vyřeš 3(x − 2)“, jde o úpravu výrazu. Když řekne „vyřeš 3(x − 2) = 9“, jde o rovnici.",
      ],
      groups: [
        { label: "výraz", items: "2x + 5,  (a + b)²,  3(x − 2)" },
        { label: "rovnice", items: "2x + 5 = 11,  3(x − 2) = 9" },
      ],
      trap: "U výrazu nemá smysl psát „x = …“. Ještě nemáš rovnítko. Upravuješ, nezjišťuješ neznámou.",
      examples: [
        "Uprav výraz 2x + 3x → 5x  (pořád výraz)",
        "Řeš 2x + 3x = 20 → 5x = 20 → x = 4  (rovnice)",
      ],
      practice: [
        { prompt: "Je „4x − 1“ výraz, nebo rovnice?", answer: "výraz" },
        { prompt: "Je „4x − 1 = 11“ výraz, nebo rovnice?", answer: "rovnice" },
      ],
    },
    {
      title: "2. Členy a „stejné sčítat“",
      rule: [
        "Člen je kousek oddělený + nebo −. V 5x − 3 + 2x jsou členy 5x, −3, 2x.",
        "Sčítat smíš jen stejný druh: x s x, čísla s čísly, x² s x². 5x + 2 = 5x + 2, to nejde slít do jednoho čísla.",
      ],
      steps: [
        "Označ si stejné členy (třeba všechny s x).",
        "Sečti jejich koeficienty: 5x + 2x = 7x.",
        "Čísla zvlášť: −3 + 8 = 5. Výsledek 7x + 5.",
      ],
      tip: "Koeficient je číslo před písmenem. U x je koeficient 1, u −x je −1. Ne „nic“.",
      trap: "3x + 3 není 6x. To bys přičetl jablka k hruškám. 3x + 3x by bylo 6x.",
      examples: [
        "7x − 2x + 4 = 5x + 4",
        "x + x + x = 3x",
        "4a + 3 − a + 1 = 3a + 4",
      ],
      practice: [
        { prompt: "Uprav: 5x − 3 + 2x", answer: "7x − 3" },
        { prompt: "Uprav: 4a + 3 − a + 1", answer: "3a + 4" },
      ],
    },
    {
      title: "3. Závorka a roznásobení",
      rule: [
        "Číslo před závorkou násobí KAŽDÝ člen uvnitř. 3(x + 4) = 3·x + 3·4 = 3x + 12.",
        "Když je před závorkou minus, je to jako násobení −1: −(x + 4) = −x − 4. Otočíš znaménko všemu.",
      ],
      steps: [
        "Vidíš a(b + c)? Napiš a·b + a·c.",
        "Vidíš minus před závorkou? Nejdřív si představ −1·(…).",
        "Pak teprve sčítej s tím, co je venku.",
      ],
      trap: "5 − 2(x − 3): dvojka násobí celou závorku, a uvnitř je ještě minus. 2·x = 2x, 2·(−3) = −6, a před tím je minus? Pozor: je to 5 − [2·(x − 3)] = 5 − (2x − 6) = 5 − 2x + 6 = 11 − 2x. Spousta lidí napíše 5 − 2x − 3.",
      examples: [
        "3(x − 2) = 3x − 6",
        "−(3x − 4) = −3x + 4",
        "5 − 2(x − 3) = 11 − 2x",
      ],
      practice: [
        { prompt: "Uprav: 3(x + 4)", answer: "3x + 12" },
        { prompt: "Uprav: 5 − 2(x − 3)", answer: "11 − 2x" },
        { prompt: "Uprav: −(3x − 4)", answer: "−3x + 4" },
      ],
    },
    {
      title: "4. Druhá mocnina a vzorce",
      rule: [
        "n² znamená n · n. (2x)² = 2x · 2x = 4x². Ne 2x².",
        "(a + b)² není a² + b². Je to (a + b)(a + b) = a² + 2ab + b². Prostřední člen 2ab se nesmí ztratit.",
        "(a − b)² = a² − 2ab + b². (a + b)(a − b) = a² − b².",
      ],
      groups: [
        { label: "(a+b)²", items: "a² + 2ab + b²" },
        { label: "(a−b)²", items: "a² − 2ab + b²" },
        { label: "a²−b²", items: "(a + b)(a − b)" },
        { label: "(2x)²", items: "4x²" },
      ],
      steps: [
        "U (x − 3)² si napiš (x − 3)(x − 3).",
        "Roznásob: x·x + x·(−3) + (−3)·x + (−3)·(−3) = x² − 3x − 3x + 9 = x² − 6x + 9.",
        "Nebo rovnou vzorec: a = x, b = 3 → x² − 2·x·3 + 9.",
      ],
      trap: "Dvě klasické pasti: (a + b)² = a² + b² a (2x)² = 2x². Obě jsou špatně.",
      examples: [
        "(x − 3)² = x² − 6x + 9",
        "(2x)² = 4x²",
        "3(x − 2)² = 3(x² − 4x + 4) = 3x² − 12x + 12",
      ],
      practice: [
        { prompt: "(x − 3)² = ?", answer: "x² − 6x + 9" },
        { prompt: "(2x)² = ?", answer: "4x²" },
        { prompt: "3(x − 2)² = ?", answer: "3x² − 12x + 12" },
      ],
    },
    {
      title: "5. Zlomky ve výrazech a rovnicích",
      rule: [
        "Zlomek (6x + 4) / 2 znamená: celý součet nahoře se dělí dvěma. Krátíš OBA členy: 6x/2 + 4/2 = 3x + 2.",
        "V rovnici (x + 6)/2 = 5 nekrátíš jen x. Nejčistší: vynásob OBE strany dvěma. Pak x + 6 = 10, x = 4.",
      ],
      steps: [
        "U úpravy výrazu: rozděl zlomek na dva, nebo vytkni.",
        "U rovnice: vynásob obě strany jmenovatelem, ať zlomky zmizí.",
        "Dosaď x zpátky a zkontroluj.",
      ],
      trap: "(x + 6)/2 = 5 není x + 3 = 5. To bys vydělil jen část. Správně x + 6 = 10.",
      examples: [
        "(6x + 4) / 2 = 3x + 2",
        "(x + 6) / 2 = 5 → x = 4",
        "x/3 + 1 = 5 → x/3 = 4 → x = 12",
      ],
      practice: [
        { prompt: "(6x + 4) / 2 = ?", answer: "3x + 2" },
        { prompt: "(x + 6) / 2 = 5 → x = ?", answer: "4" },
      ],
    },
    {
      title: "6. Jak řešit lineární rovnici (váha)",
      rule: [
        "Rovnice je váha. Co uděláš vlevo, musíš udělat i vpravo, jinak se vychýlí.",
        "Cíl: osamostatnit x. Převeď členy s x na jednu stranu, čistá čísla na druhou. Pak vyděl koeficientem u x.",
      ],
      steps: [
        "Rozeber závorky a sluč, co jde.",
        "Přičti nebo odečti stejné číslo na obou stranách, ať x „zůstane“ na jedné straně.",
        "Vyděl (nebo vynásob), aby u x zbyla jednička.",
        "Dosaď výsledek do původní rovnice. Když to nesedí, někde jsi změnil jen jednu stranu.",
      ],
      tip: "Radši piš každý krok zvlášť. Ve hlavě se ztratí znaménko.",
      examples: [
        "x + 7 = 15 → x = 8",
        "5x − 3 = 2x + 9 → 5x − 2x = 9 + 3 → 3x = 12 → x = 4",
        "2(x − 1) = 10 → x − 1 = 5 → x = 6",
      ],
      practice: [
        { prompt: "x + 7 = 15 → x = ?", answer: "8" },
        { prompt: "5x − 3 = 2x + 9 → x = ?", answer: "4" },
        { prompt: "2(x − 1) = 10 → x = ?", answer: "6" },
      ],
    },
    {
      title: "7. Záporná čísla a „převod na druhou stranu“",
      rule: [
        "Převod na druhou stranu je jen zkratka za „přičti opačné“. 5x − 3 = 2x + 9: přičti 3 → 5x = 2x + 12. Odečti 2x → 3x = 12.",
        "Minus krát minus je plus. −(−4) = +4. To platí i uvnitř závorky.",
      ],
      steps: [
        "Když převádíš −3, na druhé straně bude +3.",
        "Když převádíš +2x, na druhé straně bude −2x.",
        "U násobení/dělení záporným číslem otočíš nerovnost — ale u obyčejné rovnice s = jen počítáš dál.",
      ],
      trap: "5x − 3 = 2x + 9. Když „přehodíš“ −3 jako −3, zůstane ti 5x = 2x + 6 a je to špatně. Znaménko se musí otočit.",
      examples: [
        "x − 8 = 3 → x = 11",
        "−2x = 10 → x = −5",
        "4 − x = 1 → −x = −3 → x = 3",
      ],
      practice: [
        { prompt: "x − 8 = 3 → x = ?", answer: "11" },
        { prompt: "−2x = 10 → x = ?", answer: "−5" },
      ],
    },
    {
      title: "8. Soustava dvou rovnic (jednoduše)",
      rule: [
        "Dvě neznámé (x a y) potřebují dvě rovnice. Cíl: jednu neznámou vypustit.",
        "Dosazovací metoda: z jedné rovnice vyjádři třeba y, dosaď do druhé, vyřeš x, pak se vrať pro y.",
        "Sčítací metoda: rovnice vynásob tak, aby se při sečtení jedno písmeno zrušilo.",
      ],
      steps: [
        "Vyber jednodušší rovnici a vyjádři jednu neznámou (y = …).",
        "Dosaď do druhé rovnice. Teď máš jen x.",
        "Vyřeš x, dosaď zpátky, spočítej y.",
        "Oba výsledky dosaď do OBSAH dvou původních rovnic.",
      ],
      examples: [
        "x + y = 10, x = 3 → y = 7",
        "2x + y = 7, y = 1 → 2x = 6 → x = 3",
      ],
      practice: [
        { prompt: "x + y = 10 a x = 4. Kolik je y?", answer: "6" },
        { prompt: "y = 2x, x + y = 9. x = ?", answer: "3" },
      ],
    },
    {
      title: "9. Kontrola: jak poznáš, že to sedí",
      rule: [
        "Správný výsledek po dosazení vyrovná obě strany. Když ne, je v postupu chyba — ne „skoro dobře“.",
        "U výrazu kontroluješ dosazením čísla: uprav předtím i potom, musí vyjít stejné číslo.",
      ],
      steps: [
        "Dosaď x do levé strany, spočítej.",
        "Dosaď x do pravé strany, spočítej.",
        "Čísla se musí rovnat. Když ne, hledej znaménko nebo závorku.",
      ],
      tip: "Zkus dosadit i „hezké“ číslo do výrazu, když si nejsi jistý úpravou. Třeba x = 2.",
      examples: [
        "x = 4 v 5x − 3 = 2x + 9: vlevo 17, vpravo 17. OK.",
        "Kdyby x = 3: vlevo 12, vpravo 15. Špatně.",
      ],
      practice: [
        { prompt: "Je x = 8 řešením x + 7 = 15?", answer: "Ano, 15 = 15" },
        { prompt: "Je x = 3 řešením 5x − 3 = 2x + 9?", answer: "Ne (12 ≠ 15)" },
      ],
    },
  ],
  neznama: [
    {
      title: "1. Slovní úloha = příběh, který přepíšeš na matematiku",
      rule: [
        "Nezačínej násobit první dvě čísla, která uvidíš. Nejdřív zjisti, na co se ptají a co je neznámé.",
        "Neznámá x je to, co hledáš — nebo to, od čeho se všechno odvíjí (věk syna, čas, počet jablek).",
        "Každá věta v zadání je skoro vždy jeden vztah: „o 24 víc“, „spolu“, „za 3 hodiny“, „dvakrát tolik“.",
      ],
      steps: [
        "Přečti úlohu dvakrát. Podtrhni otázku.",
        "Vypiš dané a hledané. Přidej jednotky (km, h, Kč).",
        "Zvol x a napiš ostatní věci pomocí x.",
        "Sestav rovnici nebo tabulku. Vyřeš. Zeptej se: dává číslo smysl?",
      ],
      tip: "Když se ztratíš, řekni úlohu vlastními slovy spolužákovi (nebo nahlas sobě). Jakmile to umíš říct, rovnice už jde.",
      trap: "Čísla v zadání nemusí jít sčítat. 4 km/h a 6 km/h se sčítají jen tehdy, když jdou proti sobě. Jinak je to jiný vztah.",
      examples: [
        "„O 24 let starší“ → x a x + 24",
        "„Dvakrát tolik“ → 2x",
        "„O 3 méně“ → x − 3",
      ],
      practice: [
        { prompt: "Syn má x let, otec je o 24 let starší. Věk otce?", answer: "x + 24" },
        { prompt: "Pavel má o 3 kuličky méně než 2× to, co má Ola (o). Pavel?", answer: "2o − 3" },
      ],
    },
    {
      title: "2. Pohyb: s = v · t",
      rule: [
        "Dráha = rychlost × čas. Z toho: čas = dráha ÷ rychlost, rychlost = dráha ÷ čas.",
        "Jednotky musí sedět. Když je rychlost v km/h, čas ber v hodinách. 30 minut = 0,5 h, ne 30.",
      ],
      groups: [
        { label: "s", items: "dráha (km, m)" },
        { label: "v", items: "rychlost (km/h, m/s)" },
        { label: "t", items: "čas (h, s) — stejný řád jako u v" },
      ],
      steps: [
        "Sjednoť jednotky.",
        "Napiš vzorec a zakroužkuj, co chybí.",
        "Dosad a spočítej. Na konci zkontroluj jednotku výsledku.",
      ],
      trap: "15 minut není 15 hodin. 15 min = 15/60 = 0,25 h. Tohle kazí skoro každou pohybovou úlohu.",
      examples: [
        "60 km rychlostí 40 km/h → t = 60/40 = 1,5 h = 90 min",
        "3 h rychlostí 5 km/h → s = 15 km",
      ],
      practice: [
        { prompt: "Kolik hodin trvá 120 km rychlostí 40 km/h?", answer: "3 h" },
        { prompt: "Kolik je 30 minut v hodinách?", answer: "0,5 h" },
      ],
    },
    {
      title: "3. Proti sobě, za sebou, tam a zpět",
      rule: [
        "Proti sobě (nebo k sobě z dvou měst): rychlosti SEČTEŠ. Za hodinu ukrojí z mezery součet obou rychlostí.",
        "Stejným směrem (honička): rychlosti ODEČTEŠ. Dojíždějící ukrajuje jen rozdíl.",
        "Tam a zpět: dráhy sečti, časy sečti. Průměrná rychlost NENÍ průměr ze dvou rychlostí, když časy nejsou stejné.",
      ],
      steps: [
        "Nakresli šipky. Jdou proti sobě, nebo stejně?",
        "Slož rychlost: součet, nebo rozdíl.",
        "t = vzdálenost / ta složená rychlost.",
      ],
      trap: "Když se potkají, neřešíš „každý ušel polovinu“, pokud nemají stejnou rychlost. Rychlejší ujde víc.",
      examples: [
        "4 km/h a 6 km/h proti sobě, mezera 20 km → k sobě 10 km/h → 2 h",
        "Auto 80 km/h, motorka 100 km/h stejný směr, náskok 40 km → 20 km/h → 2 h",
      ],
      practice: [
        { prompt: "4 km/h a 6 km/h proti sobě. Relativní rychlost?", answer: "10 km/h" },
        { prompt: "20 km k sobě rychlostí 10 km/h. Čas?", answer: "2 h" },
      ],
    },
    {
      title: "4. Společná práce",
      rule: [
        "Nepřemýšlej v „hodinách dohromady od oka“. Přepni se na výkon: kolik práce za 1 hodinu.",
        "Když A zvládne práci za 6 h, za 1 h udělá 1/6. B za 3 h → za 1 h 1/3. Spolu 1/6 + 1/3 = 1/2 za hodinu, takže celou práci za 2 h.",
      ],
      steps: [
        "Ke každému napiš zlomkem: 1 / (jeho čas).",
        "Sečti zlomky = společný výkon za 1 h.",
        "Čas spolu = 1 ÷ ten součet.",
      ],
      trap: "Průměr časů (6 a 3 → 4,5) je špatně. Rychlejší táhne víc, časy se neprůměrují.",
      examples: [
        "A 6 h, B 3 h → 1/6 + 1/3 = 1/2 → spolu 2 h",
        "A 4 h, B 4 h → 1/4 + 1/4 = 1/2 → spolu 2 h",
      ],
      practice: [
        { prompt: "A za 6 h, B za 3 h. Za jak dlouho spolu?", answer: "2 h" },
        { prompt: "Oba stejně, každý 10 h. Spolu?", answer: "5 h" },
      ],
    },
    {
      title: "5. Věk — tabulka zachrání hlavu",
      rule: [
        "Věk plyne všem stejně. Za 5 let přičteš 5 ke KAŽDÉmu, ne jen k jednomu.",
        "„Otec je teď 3× starší než syn“ je o NYNÍ. „Za 5 let bude 2× starší“ je o BUDOUCNU. To jsou dvě různé rovnice.",
      ],
      steps: [
        "Sloupečky: teď / za … let. Řádky: syn, otec.",
        "Teď syn = x, otec = vztah z první věty (třeba x + 24 nebo 3x).",
        "Za 5 let: x + 5 a otec + 5. Z druhé věty rovnice.",
      ],
      tip: "Když vyjde, že synovi je −2 roky, zvolil jsi špatný vztah. Věk musí dávat smysl.",
      examples: [
        "Teď: syn x, otec x + 24. Za 6 let: x + 6 a x + 30.",
        "Když má být otec za 6 let 2× starší: x + 30 = 2(x + 6) → x + 30 = 2x + 12 → x = 18.",
      ],
      practice: [
        { prompt: "Syn x, otec o 24 víc. Otec teď?", answer: "x + 24" },
        { prompt: "Za 5 let syn?", answer: "x + 5" },
      ],
    },
    {
      title: "6. Tabulky, přímá úměra, „čím víc, tím víc“",
      rule: [
        "Přímá úměra: 3 sešity stojí 90 Kč → 1 sešit 30 Kč → 7 sešitů 210 Kč. Dělíš na jednotku, pak násobíš.",
        "Nepřímá úměra: víc lidí, méně času (na stejnou práci). 4 lidé 6 h → 1 člověk 24 h práce → 8 lidí 3 h.",
      ],
      steps: [
        "Je to „čím víc, tím víc“ (přímá), nebo „čím víc, tím míň“ (nepřímá)?",
        "Spočítej jednotku (1 kus, 1 člověk, 1 km).",
        "Vynásob nebo vyděl podle otázky.",
      ],
      trap: "Tři čísla v tabulce nesčítej. Tabulka ukazuje vztah, ne součet.",
      examples: [
        "2 kg → 70 Kč, 5 kg → ?  Jedno kg 35 Kč → 175 Kč",
        "6 kohoutků naplní nádrž za 4 h. 3 kohoutky → 8 h (polovina výkonu, dvojnásobek času)",
      ],
      practice: [
        { prompt: "3 sešity 90 Kč. Kolik 7 sešitů?", answer: "210 Kč" },
        { prompt: "4 lidé 6 h. Kolik hodin 8 lidí (stejná práce)?", answer: "3 h" },
      ],
    },
    {
      title: "7. Peníze, směsi, „o kolik / kolikrát“",
      rule: [
        "„O kolik víc“ je rozdíl (odečti). „Kolikrát víc“ je podíl (vyděl). Tohle se plete úplně nejvíc.",
        "U peněz piš, kdo kolik má na začátku a po předání. Předání je + u jednoho a − u druhého, součet peněz se nemění.",
      ],
      steps: [
        "Najdi slova o / krát / dvakrát / polovina.",
        "Rozdíl, nebo poměr?",
        "Napiš to jako x − y, nebo x / y, nebo 2x.",
      ],
      trap: "12 je o 4 víc než 8, ale jen 1,5× víc než 8. „O kolik“ a „kolikrát“ nejsou totéž.",
      examples: [
        "Anna 50 Kč, Ben 30 Kč. Anna má o 20 Kč víc, 5/3 krát víc.",
        "Převede-li Anna Benovi 5 Kč: 45 a 35, dohromady pořád 80.",
      ],
      practice: [
        { prompt: "12 oproti 8. O kolik víc?", answer: "o 4" },
        { prompt: "12 oproti 8. Kolikrát víc?", answer: "1,5×" },
      ],
    },
    {
      title: "8. Logika: čti pomalu a hlídej slova",
      rule: [
        "„Nejméně 3“ znamená 3, 4, 5… „Nejvýše 3“ znamená 0, 1, 2, 3. „Právě 3“ je jen 3.",
        "„A“ platí obojí najednou. „Nebo“ stačí jedno. Zápor převrací výrok.",
        "U tabulky čti pořádky: jeden řádek = jedna situace. Neskládej čísla z různých řádků, pokud to zadání neřekne.",
      ],
      steps: [
        "Podtrhni malá slova: jen, aspoň, nejvýše, každý, některý, žádný.",
        "Zkus jeden konkrétní příklad, který tvrzení splňuje, a jeden, který ne.",
        "Teprve pak vyber odpověď.",
      ],
      tip: "Když jsou možnosti A–D, nejdřív vyřaď ty, které už na první pohled kazí jednotka nebo směr (víc/míň).",
      examples: [
        "„Všichni, kdo hrají fotbal, sportují.“ Z toho NEVYPLÝVÁ, že všichni sportovci hrají fotbal.",
        "Nejméně 2 sourozenci → 2, 3, 4… ne 1.",
      ],
      practice: [
        { prompt: "„Nejvýše 2 chyby“ — smí mít 2 chyby?", answer: "Ano" },
        { prompt: "„Nejméně 2 chyby“ — smí mít 1 chybu?", answer: "Ne" },
      ],
    },
    {
      title: "9. Zkouška smyslu (poslední krok, který všichni skipují)",
      rule: [
        "Číslo musí pasovat do světa. Čas záporný není. Rychlost 800 km/h u kola není. Syn starší než otec není.",
        "Zkontroluj otázku: ptali se na minuty, a ty máš hodiny? Ptali se na jednoho, a ty máš součet?",
      ],
      steps: [
        "Přečti otázku znovu.",
        "Porovnej výsledek s odhadem (má to být spíš 2 h, nebo 20 h?).",
        "Dosaď do původní věty a poslechni, jestli to zní pravdivě.",
      ],
      trap: "Správný výpočet špatné věci. Spočítal jsi čas, ale ptali se na dráhu. Bod za to není.",
      examples: [
        "Potkají se za 2 h a vzdálenost byla 20 km → dohromady 10 km/h. Dává smysl u chůze.",
        "Kdyby ti vyšlo 0,02 h na 20 km pěšky, jednotky jsou špatně.",
      ],
      practice: [
        { prompt: "Úloha se ptala na minuty, vyšlo 1,5 h. Co odevzdáš?", answer: "90 minut" },
      ],
    },
  ],
  geometrie: [
    {
      title: "1. Obvod není obsah",
      rule: [
        "Obvod je plot — cesta dokola, jednotky cm, m, km (délka).",
        "Obsah je trávník uvnitř — plocha, jednotky cm², m².",
        "Když si je spleteš, číslo může vypadat „hezky“, ale je to jiná veličina. U obdélníku 3 a 5: obsah 15, obvod 16. Skoro stejné číslo, úplně jiný význam.",
      ],
      groups: [
        { label: "obvod", items: "součet stran, „dokola“, cm / m" },
        { label: "obsah", items: "plocha uvnitř, cm² / m²" },
        { label: "objem", items: "vnitřek tělesa, cm³ / m³" },
      ],
      steps: [
        "Přečti, na co se ptají: dokola / plocha / dovnitř krabice.",
        "Vyber vzorec.",
        "Napiš jednotku do odpovědi. Bez ní je to poloviční práce.",
      ],
      trap: "„Kolik metráží pletiva“ je obvod. „Kolik m² koberce“ je obsah. Slovo v zadání tě navede.",
      examples: [
        "Obdélník 3 × 5: obvod 2·(3+5) = 16, obsah 3·5 = 15",
        "Čtverec se stranou 4: obvod 16, obsah 16 — stejné číslo, jiné jednotky",
      ],
      practice: [
        { prompt: "Obdélník 3 × 5. Obvod?", answer: "16" },
        { prompt: "Obdélník 3 × 5. Obsah?", answer: "15" },
      ],
    },
    {
      title: "2. Obdélník, čtverec, trojúhelník",
      rule: [
        "Obdélník: strany a, b. Obvod O = 2(a + b). Obsah S = a · b.",
        "Čtverec je obdélník se všemi stranami stejnými. O = 4a, S = a².",
        "Trojúhelník: obsah S = a · v / 2, kde v je výška kolmá na stranu a. Ne jen „tři strany vynásob“.",
      ],
      steps: [
        "Vypiš strany. U trojúhelníku najdi, která výška patří ke které straně.",
        "Dosad do vzorce. U trojúhelníku nezapomeň dělit dvěma.",
        "Když máš jen tři strany a pravý úhel, obsah je polovina obdélníka z odvěsen.",
      ],
      tip: "Pravoúhlý trojúhelník s odvěsnami 3 a 4 má obsah 3·4/2 = 6. Přepona na obsah nepotřebuješ.",
      examples: [
        "Čtverec a = 6 → O = 24, S = 36",
        "Trojúhelník základna 10, výška 4 → S = 20",
        "Pravoúhlý 5 a 12 → S = 30",
      ],
      practice: [
        { prompt: "Čtverec a = 5. Obsah?", answer: "25" },
        { prompt: "Trojúhelník a = 8, v = 3. Obsah?", answer: "12" },
      ],
    },
    {
      title: "3. Složené obrazce (obdélník s vystřiženým kusem)",
      rule: [
        "Velký obsah minus díra, nebo sečti kousky. Nakresli čáry tak, ať vzniknou obdélníky / trojúhelníky, které umíš.",
        "Obvod složeného obrazce NENÍ součet obvodů kousků — vnitřní řezy se nepočítají do plotu.",
      ],
      steps: [
        "Rozřež tužkou na známé tvary.",
        "Spočítej obsah každého a sečti (nebo odečti díru).",
        "Obvod: jdi prstem po vnější hraně a sčítej jen ty úseky.",
      ],
      trap: "Když z velkého obdélníka vystřihneš čtverec, obsah odečteš. Obvod se ale změní jinak — přibydou stěny díry, nebo ne, podle toho, jestli díra leží uvnitř, nebo na kraji.",
      examples: [
        "L-obrazec: velký 8×6 minus malý 3×2 → obsah 48 − 6 = 42",
        "Dva obdélníky vedle sebe 4×3 a 4×5 → obsah 12 + 20 = 32",
      ],
      practice: [
        { prompt: "Obdélník 8×6, vystřižený čtverec 2×2 uprostřed. Obsah?", answer: "44" },
      ],
    },
    {
      title: "4. Úhly, které musíš umět spatit",
      rule: [
        "Přímý úhel = 180° (rovná čára). Plný = 360°. Pravý = 90°.",
        "V trojúhelníku je součet vnitřních úhlů vždy 180°. Chybějící = 180 minus zbylé dva.",
        "Vedlejší úhly na přímce dají 180°. Vrcholové (protilehlé u křížení) jsou stejné.",
      ],
      groups: [
        { label: "ostrý", items: "menší než 90°" },
        { label: "pravý", items: "přesně 90°" },
        { label: "tupý", items: "mezi 90° a 180°" },
        { label: "přímý", items: "180°" },
      ],
      steps: [
        "Je úhel na přímce? Doplň do 180°.",
        "Je v trojúhelníku? Doplň do 180° se zbylými.",
        "Jsou dvě přímky křížené? Protější úhly si rovny.",
      ],
      trap: "Trojúhelník nemůže mít dva pravé úhly. 90 + 90 + něco už přetéká 180°.",
      examples: [
        "Úhly 40° a 70° → třetí 70°",
        "Na přímce 125° → vedlejší 55°",
        "50° a 60° → třetí 70°",
      ],
      practice: [
        { prompt: "Úhly 50° a 60°. Třetí v trojúhelníku?", answer: "70°" },
        { prompt: "Na přímce je 110°. Vedlejší?", answer: "70°" },
      ],
    },
    {
      title: "5. Pythagorova věta — jen pravoúhlý trojúhelník",
      rule: [
        "Platí JEN když je tam pravý úhel. a² + b² = c². c je přepona — strana NAPROTI pravému úhlu, vždy nejdelší.",
        "Odvěsny a, b svírají pravý úhel. Přepona je ta šikmá.",
      ],
      steps: [
        "Najdi pravý úhel. Protější strana = c.",
        "Chybí přepona? c = odmocnina(a² + b²).",
        "Chybí odvěsna? a = odmocnina(c² − b²). Odečítáš, nesčítáš.",
        "Zkouška: trojice 3-4-5, 5-12-13, 6-8-10 (dvojnásobek 3-4-5).",
      ],
      trap: "Když znáš odvěsnu a přeponu a chceš druhou odvěsnu, NEPŘIČÍTEJ čtverce. Musíš odečíst.",
      examples: [
        "3 a 4 → c = 5, protože 9 + 16 = 25",
        "Přepona 13, odvěsna 5 → druhá odvěsna 12 (169 − 25 = 144)",
        "6 a 8 → 10",
      ],
      practice: [
        { prompt: "Odvěsny 3 a 4. Přepona?", answer: "5" },
        { prompt: "Přepona 10, odvěsna 6. Druhá odvěsna?", answer: "8" },
      ],
    },
    {
      title: "6. Kružnice a kruh (obvod a obsah)",
      rule: [
        "Poloměr r je ze středu na kraj. Průměr d = 2r (celá čára přes střed).",
        "Obvod (délka kružnice) O = 2πr = πd. Obsah kruhu S = πr². π bereš většinou 3,14 nebo 22/7.",
        "Pozor: πr² je r · r · π, ne 2πr. To druhé je obvod.",
      ],
      steps: [
        "Máš průměr? Nejdřív r = d/2.",
        "Obvod: 2 · π · r.",
        "Obsah: π · r · r.",
      ],
      trap: "S = πd² je špatně. Do obsahu patří poloměr, ne průměr. Kdybys dal průměr, bude to 4× víc.",
      examples: [
        "r = 7, π = 22/7 → O = 44, S = 154",
        "d = 10, r = 5 → O = 10π, S = 25π",
      ],
      practice: [
        { prompt: "Průměr 10. Poloměr?", answer: "5" },
        { prompt: "r = 5. Obsah? (nech π)", answer: "25π" },
      ],
    },
    {
      title: "7. Krychle a kvádr — objem a povrch",
      rule: [
        "Objem = kolik se vejde dovnitř (vody, písku). Krychle V = a³. Kvádr V = a · b · c.",
        "Povrch = součet obsahů všech stěn. Krychle S = 6a² (šest stejných čtverců). Kvádr S = 2(ab + ac + bc).",
      ],
      steps: [
        "Vypiš tři rozměry. U krychle jsou všechny a.",
        "Objem: vynásob je.",
        "Povrch: spočítej každou dvojici stěn (přední, boční, horní) a vynásob dvěma.",
      ],
      groups: [
        { label: "krychle V", items: "a³" },
        { label: "krychle S", items: "6a²" },
        { label: "kvádr V", items: "abc" },
        { label: "kvádr S", items: "2(ab + ac + bc)" },
      ],
      trap: "Povrch krychle není a³. a³ je objem. Pro a = 3: V = 27, S = 54. Kdo napíše 27 jako povrch, spletl vzorec.",
      examples: [
        "Krychle a = 3 → V = 27, S = 54",
        "Kvádr 2×3×4 → V = 24, S = 2(6+8+12) = 52",
      ],
      practice: [
        { prompt: "Krychle a = 3. Objem a povrch?", answer: "V = 27, S = 54" },
        { prompt: "Kvádr 2×3×4. Objem?", answer: "24" },
      ],
    },
    {
      title: "8. Jednotky, které kazí celou písemku",
      rule: [
        "Délka: 1 m = 100 cm = 1000 mm. 1 km = 1000 m.",
        "Obsah: 1 m² = 100 × 100 = 10 000 cm². Ne 100 cm².",
        "Objem: 1 m³ = 100 × 100 × 100 = 1 000 000 cm³. 1 litr = 1 dm³ = 1000 cm³.",
      ],
      steps: [
        "Převeď všechno na jednu jednotku NEŽ dosadíš do vzorce.",
        "U plochy je posun o DVA řády na každé číslo strany (10²).",
        "U objemu o TŘI řády (10³).",
      ],
      trap: "2 m × 30 cm. Ne 2 × 30 = 60. Buď 200 cm × 30 cm = 6000 cm², nebo 2 m × 0,3 m = 0,6 m².",
      examples: [
        "50 cm = 0,5 m",
        "1 m² = 10 000 cm²",
        "1 litr vody = krychlička 10 cm × 10 cm × 10 cm",
      ],
      practice: [
        { prompt: "Kolik cm² je 1 m²?", answer: "10 000" },
        { prompt: "2 m a 30 cm. Součin jako obsah v m²?", answer: "0,6 m²" },
      ],
    },
    {
      title: "9. Rychlý checklist před odevzdáním",
      rule: [
        "Tři otázky: 1) Mám správný vzorec (obvod / obsah / objem)? 2) Sedí jednotky? 3) Je v trojúhelníku pravý úhel, když tahám Pythagora?",
        "Odhad: krychle o hraně 3 cm nemá objem 300. Spíš kolem 30. Když ti vyjde 27000, zkontroluj centimetry vs milimetry.",
      ],
      steps: [
        "Přečti otázku poslední větou.",
        "Koukni na jednotku ve výsledku.",
        "U Pythagora ověř a² + b² = c² dosazením.",
      ],
      tip: "Když nevíš vzorec povrchu kvádru, rozlož ho na 6 obdélníků a sečti. Pomalé, ale neprůstřelné.",
      examples: [
        "Pythagoras 5-12-13: 25 + 144 = 169. OK.",
        "Krychle 10 cm: V = 1000 cm³ = 1 litr. Představa pomáhá.",
      ],
      practice: [
        { prompt: "Chceš pletivo kolem zahrady 6×4 m. Obvod, nebo obsah?", answer: "obvod (20 m)" },
        { prompt: "Chceš trávník do zahrady 6×4 m. Obvod, nebo obsah?", answer: "obsah (24 m²)" },
      ],
    },
  ],
};
