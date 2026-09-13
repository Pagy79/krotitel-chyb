import type { QuizQuestion } from "@/lib/types";

export const QUESTIONS_PROCENTA_PLUS: QuizQuestion[] = [
  {
    id: 601,
    topic: "procenta",
    type: "open",
    workingText:
      "Noční pozorování na hvězdárně trvá 50 minut čistého času. Obsluha dalekohledu potřebovala 8 minut na kalibraci, zbytek se opravdu pozorovalo.",
    prompt: "Kolik procent pozorovací doby spolykala kalibrace? Napiš jen číslo.",
    friendlyHint: "8 z 50. Nejdřív zkrať zlomkem.",
    accept: ["16"],
    explanation:
      "8 ÷ 50 = 0,16, tedy 16 %. Past: 8 %, nebo 50 − 8 = 42, nebo 8/50 zapsat jako 6,25.",
  },
  {
    id: 602,
    topic: "procenta",
    type: "mc",
    workingText:
      "Kompas v turistické prodejně stál 240 Kč. Od začátku sezony ho zdražili o 25 %, pouzdro zůstalo stejně drahé a do ceny se nepočítá.",
    prompt: "Kolik stojí kompas teď?",
    options: ["300 Kč", "265 Kč", "180 Kč", "60 Kč"],
    correctIndex: 0,
    friendlyHint: "Čtvrtinu z 240 přičti k 240.",
    explanation:
      "25 % z 240 Kč je 60 Kč, nová cena 300 Kč. 265 Kč je 240 + 25. 180 Kč je sleva místo zdražení. 60 Kč je jen výše zdražení.",
  },
  {
    id: 603,
    topic: "procenta",
    type: "open",
    workingText:
      "Na opravu veslařské loděnice vybrali 42 Kč. Pokladník řekl, že to je přesně 14 % celé potřebné částky. Zbytek se bude vybírat na regatě.",
    prompt: "Kolik korun je celá potřebná částka? Napiš jen číslo.",
    friendlyHint: "42 je 14 setin celku.",
    accept: ["300"],
    explanation:
      "42 ÷ 0,14 = 300 Kč. Past: 42 · 0,14, nebo 42 + 14 = 56, nebo 42 · 14 = 588.",
  },
  {
    id: 604,
    topic: "procenta",
    type: "mc",
    workingText:
      "Pláštěnka v outdoorovém obchodě stála 2 000 Kč. Nejdřív ji zlevnili o 15 %. Za týden ještě o 20 % z už nové ceny. Pokladna slevy skládá.",
    prompt: "Kolik pláštěnka stojí po obou slevách?",
    options: ["1 360 Kč", "1 300 Kč", "1 700 Kč", "1 600 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 85 % z 2 000, z toho pak 80 %.",
    explanation:
      "Po 15 % zbývá 1 700 Kč, po dalších 20 % zbývá 1 360 Kč. 1 300 Kč je past jedné slevy 35 %. 1 700 Kč je jen první sleva. 1 600 Kč je 20 % z původku.",
  },
  {
    id: 605,
    topic: "procenta",
    type: "open",
    workingText:
      "V květnu přišlo do městské galerie 24 školních skupin. V červnu jich bylo 30. Kurátor srovnává červen s květnem, ne naopak.",
    prompt: "O kolik procent přišlo v červnu víc skupin než v květnu? Napiš jen číslo.",
    friendlyHint: "Rozdíl 6 skupin vztahuj ke květnovým 24.",
    accept: ["25"],
    explanation:
      "6 ÷ 24 = 0,25, tedy o 25 % víc. Past: 6/30 = 20 % (špatný základ), nebo 6, nebo 30 − 24 zapsat jako 6 %.",
  },
  {
    id: 606,
    topic: "procenta",
    type: "mc",
    workingText:
      "Půjčovna A: paddleboard na den 800 Kč, sleva pro klub 25 %. Půjčovna B: den 720 Kč, sleva 10 %. Prkna jsou srovnatelná, počítají jen cenu za den.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 48 Kč méně než v B.",
      "V B zaplatí o 48 Kč méně než v A.",
      "Obě půjčovny vyjdou stejně.",
      "V A zaplatí o 80 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 75 % z 800 a 90 % z 720.",
    explanation:
      "A: 600 Kč. B: 648 Kč. A je levnější o 48 Kč. 80 Kč je rozdíl původních cen. „Stejně“ vznikne hrubým odhadem.",
  },
  {
    id: 607,
    topic: "procenta",
    type: "open",
    workingText:
      "Na kozí farmě namíchali 16 kg krmné směsi. Podle receptu je 25 % hmotnosti vojtěška a zbytek ječmen. Na ceduli chtějí jen hmotnost vojtěšky.",
    prompt: "Kolik kilogramů vojtěšky je ve směsi? Napiš jen číslo.",
    friendlyHint: "25 % z 16 je totéž jako čtvrtina z 16.",
    accept: ["4"],
    explanation: "0,25 · 16 = 4 kg. Past: 25, nebo 16 − 25, nebo 0,25 kg.",
  },
  {
    id: 608,
    topic: "procenta",
    type: "mc",
    workingText:
      "Účtenka za nové notové stojany ukazuje 3 630 Kč včetně DPH 21 %. Cena bez daně na faktuře chybí. Účetní ji chce dopočítat, DPH se počítá z ceny bez daně.",
    prompt: "Jaká byla cena bez DPH?",
    options: ["3 000 Kč", "3 609 Kč", "762 Kč", "2 868 Kč"],
    correctIndex: 0,
    friendlyHint: "3 630 je 121 % základu. Základ = 3 630 ÷ 1,21.",
    explanation:
      "3 630 ÷ 1,21 = 3 000 Kč. 3 609 Kč je 3 630 − 21. 762 Kč je 21 % z částky s daní. 2 868 Kč je 3 630 − 762.",
  },
  {
    id: 609,
    topic: "procenta",
    type: "open",
    workingText:
      "Na tabuli je číslo 250. Nejdřív ho žáci zvětší o 20 %. Pak to nové číslo zmenší o 20 %. Ptají se, jaké číslo zbude, ne jaká byla změna.",
    prompt: "Jaké číslo zbude na tabuli? Napiš jen číslo.",
    friendlyHint: "Druhých 20 % ber z 300, ne z 250.",
    accept: ["240"],
    explanation:
      "Po zvětšení 300, po zmenšení 240. Past: 250 (plus a minus se „zruší“), nebo 200, nebo 300.",
  },
  {
    id: 610,
    topic: "procenta",
    type: "open",
    workingText:
      "Záloha na prohlídku jeskyně je 56 Kč na žáka. Průvodce řekl, že záloha je přesně 16 % celé ceny. Zbytek se doplatí u pokladny v podzemí.",
    prompt: "Kolik korun stojí celá prohlídka na jednoho žáka? Napiš jen číslo.",
    friendlyHint: "56 je 16 setin celku.",
    accept: ["350"],
    explanation:
      "56 ÷ 0,16 = 350 Kč. Past: 56 · 0,16, nebo 56 + 16 = 72, nebo 56 · 16 = 896.",
  },
  {
    id: 611,
    topic: "procenta",
    type: "open",
    workingText:
      "Ranní relace školního rádia trvá 40 minut. Zpravodajství z družiny zabralo 6 minut, zbytek byly písničky a hlášení o ztrátách.",
    prompt: "Kolik procent relace spolykalo zpravodajství? Napiš jen číslo.",
    friendlyHint: "6 ze 40.",
    accept: ["15"],
    explanation: "6 ÷ 40 = 0,15, tedy 15 %. Past: 6 %, nebo 40 − 6 = 34, nebo 6/40 zapsat jako 6,7.",
  },
  {
    id: 612,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na nástěnce je číslo 400. Nejdřív ho zvětší o 25 %. Pak to nové číslo zmenší o 20 %. Jeden žák tvrdí, že vyjde zase 400, protože 25 − 20 je 5.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Výsledek je zase 400.",
      "Výsledek je 380.",
      "Výsledek je 420.",
      "Výsledek je 320.",
    ],
    correctIndex: 0,
    friendlyHint: "Nejdřív 125 % ze 400, z toho pak 80 %.",
    explanation:
      "Po zvětšení 500, po zmenšení 400. Tentokrát to opravdu sedí, protože 1,25 · 0,80 = 1. 380 je 400 − 5 %. 420 je 400 + 5 %. 320 je 400 − 20 %.",
  },
  {
    id: 613,
    topic: "procenta",
    type: "open",
    workingText:
      "Dalekohled v bazaru stál 4 800 Kč. Před výletem ho zlevnili o 25 %. Stojánek je zvlášť a do ceny se nepočítá.",
    prompt: "Kolik dalekohled stojí po slevě? Napiš jen číslo.",
    friendlyHint: "Zbývá 75 % z 4 800.",
    accept: ["3600", "3 600"],
    explanation:
      "0,75 · 4 800 = 3 600 Kč. Past: 4 800 − 25 = 4 775, nebo 1 200 (jen sleva), nebo 4 800 · 0,25.",
  },
  {
    id: 614,
    topic: "procenta",
    type: "mc",
    workingText:
      "Obchod A: sada strun 360 Kč, sleva 30 %. Obchod B: stejná sada 300 Kč, sleva 10 %. Struny jsou stejné, počítají jen cenu sady.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 18 Kč méně než v B.",
      "V B zaplatí o 18 Kč méně než v A.",
      "Oba obchody vyjdou stejně.",
      "V A zaplatí o 60 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 70 % ze 360 a 90 % ze 300.",
    explanation:
      "A: 252 Kč. B: 270 Kč. A je levnější o 18 Kč. 60 Kč je rozdíl původních cen. „Stejně“ vznikne hrubým odhadem.",
  },
  {
    id: 615,
    topic: "procenta",
    type: "open",
    workingText:
      "Včelař loni stočil 40 kg medu. Letos stočil 52 kg. Srovnává letošek s loňskem, ne naopak, a ptá se na procenta, ne na kilogramy.",
    prompt: "O kolik procent stočil letos víc medu než loni? Napiš jen číslo.",
    friendlyHint: "Rozdíl 12 kg vztahuj k loňským 40 kg.",
    accept: ["30"],
    explanation:
      "12 ÷ 40 = 0,30, tedy o 30 % víc. Past: 12/52 (špatný základ), nebo 12, nebo 52 − 40 zapsat jako 12 %.",
  },
  {
    id: 616,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cena sady řezbářských dlát bez DPH je 4 000 Kč. DPH je 21 % a počítá se z ceny bez daně. Pokladna chce cenu včetně daně.",
    prompt: "Kolik stojí sada včetně DPH?",
    options: ["4 840 Kč", "4 021 Kč", "840 Kč", "3 160 Kč"],
    correctIndex: 0,
    friendlyHint: "Přičti 21 % ze 4 000, tedy násob 1,21.",
    explanation:
      "4 000 · 1,21 = 4 840 Kč. 4 021 Kč je 4 000 + 21. 840 Kč je jen DPH. 3 160 Kč je 4 000 − 21 %.",
  },
  {
    id: 617,
    topic: "procenta",
    type: "open",
    workingText:
      "Na účtu klubu modelářů leží 800 Kč. Banka připíše 10 % za první rok a dalších 10 % z už nového zůstatku za druhý rok. Ptají se na zůstatek po dvou letech.",
    prompt: "Kolik korun bude na účtu po dvou letech? Napiš jen číslo.",
    friendlyHint: "800 · 1,10 · 1,10. Druhých 10 % ber z 880.",
    accept: ["968"],
    explanation:
      "Po roce 880 Kč, po dvou letech 968 Kč. Past: 960 (sčítání 10 + 10), nebo 880, nebo 1 600.",
  },
  {
    id: 618,
    topic: "procenta",
    type: "mc",
    workingText:
      "Exkurze v akváriu trvá 90 minut. Přesuny mezi pavilony spolykaly 18 minut. Zbytek žáci stáli u nádrží.",
    prompt: "Kolik procent exkurze spolykaly přesuny?",
    options: ["20 %", "18 %", "72 %", "5 %"],
    correctIndex: 0,
    friendlyHint: "18 z 90.",
    explanation: "18 ÷ 90 = 0,20, tedy 20 %. 18 % je zapsání minut jako procent. 72 % je zbytek. 5 je 90/18.",
  },
  {
    id: 619,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové partitury sbor vybral 63 Kč. Sbormistryně řekla, že to je přesně 21 % celé ceny not. Zbytek doplatí z fondu sboru.",
    prompt: "Kolik korun stojí celé partitury? Napiš jen číslo.",
    friendlyHint: "63 je 21 setin celku.",
    accept: ["300"],
    explanation: "63 ÷ 0,21 = 300 Kč. Past: 63 · 0,21, nebo 63 + 21 = 84, nebo 63 · 21.",
  },
  {
    id: 620,
    topic: "procenta",
    type: "mc",
    workingText:
      "Kanoe v bazaru stála 9 000 Kč. Nejdřív ji zlevnili o 20 %. O týden později ještě o 10 % z už nové ceny. Pádla jsou zvlášť.",
    prompt: "Kolik kanoe stojí teď?",
    options: ["6 480 Kč", "6 300 Kč", "7 200 Kč", "8 100 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 80 % z 9 000, z toho pak 90 %.",
    explanation:
      "Po 20 % zbývá 7 200 Kč, po dalších 10 % zbývá 6 480 Kč. 6 300 Kč je past jedné slevy 30 %. 7 200 Kč je jen první sleva. 8 100 Kč je 10 % z původku.",
  },
  {
    id: 621,
    topic: "procenta",
    type: "open",
    workingText:
      "V čajovně namíchali 5 litrů ledového čaje. Podle receptu je 20 % objemu citronová šťáva a zbytek čaj. Na tabuli chtějí jen objem šťávy.",
    prompt: "Kolik litrů šťávy je v nádobě? Napiš jen číslo.",
    friendlyHint: "20 % z 5 je totéž jako 0,2 · 5.",
    accept: ["1"],
    explanation: "0,20 · 5 = 1 litr. Past: 0,2 l, nebo 5 − 0,2 = 4,8, nebo 20.",
  },
  {
    id: 622,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na nástěnce je číslo 160. Žáci ho mají zmenšit o 25 %. Jeden tvrdí, že vyjde 120. Druhý 135. Třetí 40. Čtvrtý 185.",
    prompt: "Které tvrzení je pravda?",
    options: ["Nové číslo je 120.", "Nové číslo je 135.", "Nové číslo je 40.", "Nové číslo je 185."],
    correctIndex: 0,
    friendlyHint: "Zbývá 75 % ze 160.",
    explanation: "0,75 · 160 = 120. 135 je 160 − 25. 40 je jen úbytek. 185 je zvětšení.",
  },
  {
    id: 623,
    topic: "procenta",
    type: "open",
    workingText:
      "Do ornitologické stanice přišlo loni 50 kroužkovaných ptáků. Letos jich přišlo 40. Vedoucí srovnává letošek s loňskem a chce pokles v procentech.",
    prompt: "O kolik procent přišlo letos méně ptáků než loni? Napiš jen číslo.",
    friendlyHint: "Rozdíl 10 ptáků vztahuj k loňským 50.",
    accept: ["20"],
    explanation:
      "10 ÷ 50 = 0,20, tedy o 20 % méně. Past: 10/40 = 25 % (špatný základ), nebo 10, nebo 50 − 40 zapsat jako 10 %.",
  },
  {
    id: 624,
    topic: "procenta",
    type: "mc",
    workingText:
      "Půjčovna A: horolezecký úvazek 1 600 Kč, sleva 25 %. Půjčovna B: stejný úvazek 1 400 Kč, sleva 10 %. Výbava je srovnatelná, počítají jen cenu.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 60 Kč méně než v B.",
      "V B zaplatí o 60 Kč méně než v A.",
      "Obě půjčovny vyjdou stejně.",
      "V A zaplatí o 200 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 75 % z 1 600 a 90 % z 1 400.",
    explanation:
      "A: 1 200 Kč. B: 1 260 Kč. A je levnější o 60 Kč. 200 Kč je rozdíl původních cen. „Stejně“ vznikne odhadem.",
  },
  {
    id: 625,
    topic: "procenta",
    type: "open",
    workingText:
      "Faktura za tiskařský lis ukazuje 7 260 Kč včetně DPH 21 %. Cena bez daně chybí. DPH se počítá z ceny bez daně.",
    prompt: "Jaká byla cena bez DPH? Napiš jen číslo.",
    friendlyHint: "7 260 je 121 % základu. Základ = 7 260 ÷ 1,21.",
    accept: ["6000", "6 000"],
    explanation:
      "7 260 ÷ 1,21 = 6 000 Kč. Past: 7 260 − 21, nebo 7 260 · 0,21, nebo 7 260 − 726.",
  },
  {
    id: 626,
    topic: "procenta",
    type: "mc",
    workingText:
      "Vstupenka na noční prohlídku hradu stála 200 Kč. V květnu ji zdražili o 15 %. V červnu ještě o 20 % z už nové květnové ceny. Pokladna změny skládá.",
    prompt: "Jaká je cena po obou zdraženích?",
    options: ["276 Kč", "270 Kč", "230 Kč", "240 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 115 % z 200, z toho pak 120 %.",
    explanation:
      "Po 15 % je 230 Kč, po dalších 20 % je 276 Kč. 270 Kč je past jedné změny 35 %. 230 Kč je jen první krok. 240 Kč je 20 % z původku.",
  },
  {
    id: 627,
    topic: "procenta",
    type: "open",
    workingText:
      "V geocachingovém klubu je 90 keší. Do konce týdne jich 27 našli, ostatní ještě čekají v terénu. Vedoucí zapisuje podíl nalezených.",
    prompt: "Kolik procent keší už našli? Napiš jen číslo.",
    friendlyHint: "27 z 90.",
    accept: ["30"],
    explanation: "27 ÷ 90 = 0,30, tedy 30 %. Past: 27 %, nebo 90 − 27 = 63, nebo 27/90 zapsat jako 3.",
  },
  {
    id: 628,
    topic: "procenta",
    type: "mc",
    workingText:
      "Keramická dílna namíchala 20 kg hlíny. Podle receptu je 40 % hmotnosti ostřivo a zbytek plastická hlína. Na ceduli chtějí jen hmotnost ostřiva.",
    prompt: "Kolik kilogramů ostřiva je ve směsi?",
    options: ["8 kg", "40 kg", "12 kg", "0,4 kg"],
    correctIndex: 0,
    friendlyHint: "40 % z 20.",
    explanation: "0,40 · 20 = 8 kg. 40 kg je zapsání procent jako kilogramů. 12 kg je zbytek. 0,4 kg je 40 % jako 0,4.",
  },
  {
    id: 629,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové pádlo vybrali 80 Kč. Vedoucí řekl, že to je přesně 20 % celé ceny. Zbytek doplatí z pokladny klubu.",
    prompt: "Kolik korun stojí celé pádlo? Napiš jen číslo.",
    friendlyHint: "80 je 20 setin celku.",
    accept: ["400"],
    explanation: "80 ÷ 0,20 = 400 Kč. Past: 80 · 0,20 = 16, nebo 80 + 20 = 100, nebo 80 · 20 = 1 600.",
  },
  {
    id: 630,
    topic: "procenta",
    type: "open",
    workingText:
      "Trénink na horolezecké stěně trvá 75 minut. Instruktáž uzlů zabrala 15 minut, zbytek lezli.",
    prompt: "Kolik procent tréninku spolykala instruktáž? Napiš jen číslo.",
    friendlyHint: "15 ze 75.",
    accept: ["20"],
    explanation: "15 ÷ 75 = 0,20, tedy 20 %. Past: 15 %, nebo 75 − 15 = 60, nebo 15/75 zapsat jako 5.",
  },
  {
    id: 631,
    topic: "procenta",
    type: "open",
    workingText:
      "Tkalcovský stav v antikvariátu stál 6 000 Kč. Nejdřív ho zlevnili o 25 %. Pak ještě o 20 % z už nové ceny. Doprava je zdarma.",
    prompt: "Kolik stav stojí po obou slevách? Napiš jen číslo.",
    friendlyHint: "Nejdřív 75 % z 6 000, z toho pak 80 %.",
    accept: ["3600", "3 600"],
    explanation:
      "Po 25 % zbývá 4 500 Kč, po dalších 20 % zbývá 3 600 Kč. Past: 3 300 (jedna sleva 45 %), nebo 4 500, nebo 4 800.",
  },
  {
    id: 632,
    topic: "procenta",
    type: "mc",
    workingText:
      "Vstupenka na loutkové představení stála 200 Kč. Zdražili ji o 10 % a za měsíc zase o 10 % z nové ceny. Pokladní říká, že to bude 240 Kč, „protože 10 + 10 je 20“.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Po obou zdraženích bude vstupenka stát 242 Kč.",
      "Po obou zdraženích bude vstupenka stát 240 Kč.",
      "Po obou zdraženích bude vstupenka stát 220 Kč.",
      "Po obou zdraženích bude vstupenka stát 200 Kč.",
    ],
    correctIndex: 0,
    friendlyHint: "200 · 1,10 · 1,10.",
    explanation:
      "Po prvním zdražení 220 Kč, po druhém 242 Kč. 240 Kč je past sčítání procent. 220 Kč je jen jedno zdražení.",
  },
  {
    id: 633,
    topic: "procenta",
    type: "open",
    workingText:
      "První týden ujel cyklistický kroužek 28 km. Druhý týden 35 km. Vedoucí srovnává druhý týden s prvním.",
    prompt: "O kolik procent ujeli druhý týden víc než první? Napiš jen číslo.",
    friendlyHint: "Rozdíl 7 km vztahuj k prvním 28 km.",
    accept: ["25"],
    explanation:
      "7 ÷ 28 = 0,25, tedy o 25 % víc. Past: 7/35 = 20 % (špatný základ), nebo 7, nebo 35 − 28 zapsat jako 7 %.",
  },
  {
    id: 634,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sada akvarelových barev stála 3 200 Kč. Před prázdninami ji zlevnili o 25 %. Pokladna slevu bere z původní ceny.",
    prompt: "Kolik sada stojí po slevě?",
    options: ["2 400 Kč", "3 175 Kč", "800 Kč", "2 975 Kč"],
    correctIndex: 0,
    friendlyHint: "Zbývá 75 % z 3 200.",
    explanation:
      "25 % z 3 200 Kč je 800 Kč, nová cena 2 400 Kč. 3 175 Kč i 2 975 Kč vzniknou odečtením 25 místo 25 %. 800 Kč je jen výše slevy.",
  },
  {
    id: 635,
    topic: "procenta",
    type: "open",
    workingText:
      "Pěstitelé namíchali 25 kg substrátu pro sukulenty. Podle receptu je 36 % hmotnosti hrubý písek a zbytek rašelina. Na ceduli chtějí jen hmotnost písku.",
    prompt: "Kolik kilogramů písku je ve směsi? Napiš jen číslo.",
    friendlyHint: "36 % z 25 je totéž jako 0,36 · 25.",
    accept: ["9"],
    explanation: "0,36 · 25 = 9 kg. Past: 36, nebo 25 − 36, nebo 0,36 kg.",
  },
  {
    id: 636,
    topic: "procenta",
    type: "mc",
    workingText:
      "Obchod A: sada šipek 500 Kč, sleva 20 %. Obchod B: stejná sada 450 Kč, sleva 10 %. Šipky jsou stejné, počítají jen cenu sady.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 5 Kč méně než v B.",
      "V B zaplatí o 5 Kč méně než v A.",
      "Oba obchody vyjdou stejně.",
      "V A zaplatí o 50 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 80 % z 500 a 90 % ze 450.",
    explanation:
      "A: 400 Kč. B: 405 Kč. A je levnější o 5 Kč. 50 Kč je rozdíl původních cen. „Stejně“ vznikne odhadem.",
  },
  {
    id: 637,
    topic: "procenta",
    type: "open",
    workingText:
      "Cena bez DPH za nové mikroskopy je 6 000 Kč. DPH je 21 % a počítá se z ceny bez daně. Účetní chce jen výši daně, ne cenu s daní.",
    prompt: "Kolik korun je samotné DPH? Napiš jen číslo.",
    friendlyHint: "21 % z 6 000.",
    accept: ["1260", "1 260"],
    explanation:
      "0,21 · 6 000 = 1 260 Kč. Past: zapsat 7 260 (cena s daní), nebo 21, nebo 6 000 · 21 = 126 000.",
  },
  {
    id: 638,
    topic: "procenta",
    type: "mc",
    workingText:
      "Vlakový výlet za minerály trvá 150 minut. Čekání na přípoj spolykalo 24 minut. Zbytek jeli.",
    prompt: "Kolik procent výletu spolykalo čekání?",
    options: ["16 %", "24 %", "84 %", "6 %"],
    correctIndex: 0,
    friendlyHint: "24 ze 150. Zkrať 24/150.",
    explanation: "24 ÷ 150 = 0,16, tedy 16 %. 24 % je zapsání minut. 84 % je zbytek. 6 je 150/24 zaokrouhleně.",
  },
  {
    id: 639,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové činely vybrali 84 Kč. Vedoucí kapely řekl, že to je přesně 21 % celé ceny. Zbytek doplatí z koncertní kasy.",
    prompt: "Kolik korun stojí celé činely? Napiš jen číslo.",
    friendlyHint: "84 je 21 setin celku.",
    accept: ["400"],
    explanation: "84 ÷ 0,21 = 400 Kč. Past: 84 · 0,21, nebo 84 + 21 = 105, nebo 84 · 21.",
  },
  {
    id: 640,
    topic: "procenta",
    type: "mc",
    workingText:
      "Stan na víkend stál 5 000 Kč. V dubnu ho zdražili o 10 %. V květnu zlevnili o 20 % z už nové dubnové ceny. Pokladna změny skládá.",
    prompt: "Jaká je cena po obou změnách?",
    options: ["4 400 Kč", "4 500 Kč", "5 500 Kč", "4 000 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 110 % z 5 000, z toho pak 80 %.",
    explanation:
      "Po zdražení 5 500 Kč, po slevě 4 400 Kč. 4 500 Kč je past „−10 % celkem“. 5 500 Kč je jen zdražení. 4 000 Kč je 20 % sleva z původku.",
  },
  {
    id: 641,
    topic: "procenta",
    type: "open",
    workingText:
      "V září navštívilo skatepark 36 skupin. V říjnu jich bylo 45. Správce srovnává říjen se zářím.",
    prompt: "O kolik procent přišlo v říjnu víc skupin než v září? Napiš jen číslo.",
    friendlyHint: "Rozdíl 9 skupin vztahuj k zářijovým 36.",
    accept: ["25"],
    explanation:
      "9 ÷ 36 = 0,25, tedy o 25 % víc. Past: 9/45 = 20 % (špatný základ), nebo 9, nebo 45 − 36 zapsat jako 9 %.",
  },
  {
    id: 642,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cukrář namíchal 4 kg polevy. Podle receptu je 25 % hmotnosti kakao a zbytek máslo s cukrem. Učeň říká, že kakaa je 1 kg. Druhý že 25 kg. Třetí že 3 kg. Čtvrtý že 0,25 kg.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Kakaa je 1 kg.",
      "Kakaa je 25 kg.",
      "Kakaa je 3 kg.",
      "Kakaa je 0,25 kg.",
    ],
    correctIndex: 0,
    friendlyHint: "Čtvrtina ze 4 kg.",
    explanation: "0,25 · 4 = 1 kg. 25 kg je zapsání procent. 3 kg je zbytek. 0,25 kg je 25 % jako 0,25.",
  },
  {
    id: 643,
    topic: "procenta",
    type: "open",
    workingText:
      "V únikovém sále mají 70 šifer. Do poledne jich 21 rozlouskli, ostatní ještě visí na zdech. Vedoucí zapisuje podíl vyřešených.",
    prompt: "Kolik procent šifer už vyřešili? Napiš jen číslo.",
    friendlyHint: "21 ze 70.",
    accept: ["30"],
    explanation: "21 ÷ 70 = 0,30, tedy 30 %. Past: 21 %, nebo 70 − 21 = 49, nebo 21/70 zapsat jako 3.",
  },
  {
    id: 644,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cena bez DPH za sadu rýsovacích potřeb je 1 000 Kč. Nejdřív přičtou DPH 21 %. Pak dají žákovskou slevu 10 % z už ceny s daní.",
    prompt: "Kolik žák zaplatí?",
    options: ["1 089 Kč", "1 090 Kč", "1 210 Kč", "900 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 1 000 · 1,21, z toho pak 90 %.",
    explanation:
      "S DPH 1 210 Kč, po slevě 1 089 Kč. 1 090 Kč je hrubý odhad. 1 210 Kč je jen daň. 900 Kč je sleva z ceny bez daně.",
  },
  {
    id: 645,
    topic: "procenta",
    type: "open",
    workingText:
      "Na tabuli je číslo 480. Nejdřív ho zvětší o 25 %. Pak to nové číslo zmenší o 20 %. Ptají se, jaké číslo zbude.",
    prompt: "Jaké číslo zbude na tabuli? Napiš jen číslo.",
    friendlyHint: "1,25 · 0,80 = 1, takže výsledek se vrátí.",
    accept: ["480"],
    explanation:
      "Po zvětšení 600, po zmenšení 480. Past: 500, nebo 384 (obrácené pořadí nestačí odhadnout), nebo 456.",
  },
  {
    id: 646,
    topic: "procenta",
    type: "mc",
    workingText:
      "Obchod A: lumino-lampa 2 400 Kč, sleva 40 %. Obchod B: stejná lampa 1 800 Kč, sleva 15 %. Lampy jsou stejné, počítají jen cenu.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 90 Kč méně než v B.",
      "V B zaplatí o 90 Kč méně než v A.",
      "Oba obchody vyjdou stejně.",
      "V A zaplatí o 600 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 60 % z 2 400 a 85 % z 1 800.",
    explanation:
      "A: 1 440 Kč. B: 1 530 Kč. A je levnější o 90 Kč. 600 Kč je rozdíl původních cen. „Stejně“ vznikne odhadem.",
  },
  {
    id: 647,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové jevištní světlo vybrali 90 Kč. Technik řekl, že to je přesně 15 % celé ceny. Zbytek doplatí z fondu ochotníků.",
    prompt: "Kolik korun stojí celé světlo? Napiš jen číslo.",
    friendlyHint: "90 je 15 setin celku.",
    accept: ["600"],
    explanation: "90 ÷ 0,15 = 600 Kč. Past: 90 · 0,15 = 13,5, nebo 90 + 15 = 105, nebo 90 · 15 = 1 350.",
  },
  {
    id: 648,
    topic: "procenta",
    type: "mc",
    workingText:
      "V laboratoři namíchali 50 litrů čisticího roztoku. Podle návodu je 8 % objemu ocet a zbytek voda. Na štítek chtějí jen objem octa.",
    prompt: "Kolik litrů octa je v roztoku?",
    options: ["4 l", "8 l", "46 l", "0,8 l"],
    correctIndex: 0,
    friendlyHint: "8 % z 50.",
    explanation: "0,08 · 50 = 4 l. 8 l je zapsání procent. 46 l je zbytek. 0,8 l je 8 % jako 0,8.",
  },
  {
    id: 649,
    topic: "procenta",
    type: "open",
    workingText:
      "Dílna v dílenské hale trvá 50 minut. Úvodní bezpečnostní pokyny zabraly 8 minut, zbytek se řezalo a brousilo.",
    prompt: "Kolik procent dílny spolykaly pokyny? Napiš jen číslo.",
    friendlyHint: "8 z 50.",
    accept: ["16"],
    explanation: "8 ÷ 50 = 0,16, tedy 16 %. Past: 8 %, nebo 50 − 8 = 42, nebo 8/50 zapsat jako 6.",
  },
  {
    id: 650,
    topic: "procenta",
    type: "open",
    workingText:
      "V dubnu upekli v peci 80 bochníků. V květnu 92. Pekař srovnává květen s dubnem.",
    prompt: "O kolik procent upekli v květnu víc bochníků než v dubnu? Napiš jen číslo.",
    friendlyHint: "Rozdíl 12 bochníků vztahuj k dubnovým 80.",
    accept: ["15"],
    explanation:
      "12 ÷ 80 = 0,15, tedy o 15 % víc. Past: 12/92 (špatný základ), nebo 12, nebo 92 − 80 zapsat jako 12 %.",
  },
  {
    id: 651,
    topic: "procenta",
    type: "open",
    workingText:
      "Účtenka za nové stojany na mapy ukazuje 4 840 Kč včetně DPH 21 %. Cena bez daně chybí. DPH se počítá z ceny bez daně.",
    prompt: "Jaká byla cena bez DPH? Napiš jen číslo.",
    friendlyHint: "4 840 je 121 % základu. Základ = 4 840 ÷ 1,21.",
    accept: ["4000", "4 000"],
    explanation:
      "4 840 ÷ 1,21 = 4 000 Kč. Past: 4 840 − 21, nebo 4 840 · 0,21, nebo 4 840 − 484.",
  },
  {
    id: 652,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na tabuli je číslo 160. Nejdřív ho zvětší o 25 %. Pak to nové číslo zvětší ještě o 20 %. Ptají se na výsledek, ne na součet procent.",
    prompt: "Jaké číslo zbude na tabuli?",
    options: ["240", "232", "200", "192"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 125 % ze 160, z toho pak 120 %.",
    explanation:
      "Po 25 % je 200, po dalších 20 % je 240. 232 je past jedné změny 45 %. 200 je jen první krok. 192 je 20 % z 160.",
  },
  {
    id: 653,
    topic: "procenta",
    type: "open",
    workingText:
      "V radioamatérském kroužku je 110 relací v archivu. Do pátku jich 33 přepsali do deníku, ostatní ještě čekají. Vedoucí zapisuje podíl přepsaných.",
    prompt: "Kolik procent relací už přepsali? Napiš jen číslo.",
    friendlyHint: "33 ze 110. Nejdřív zkrať zlomkem.",
    accept: ["30"],
    explanation: "33 ÷ 110 = 0,30, tedy 30 %. Past: 33 %, nebo 110 − 33 = 77, nebo 33/110 zapsat jako 3.",
  },
  {
    id: 654,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na tabuli je číslo 80. Nejdřív ho zvětší o 50 %. Pak to nové číslo zmenší o 50 %. Jeden žák říká, že vyjde zase 80.",
    prompt: "Které tvrzení je pravda?",
    options: ["Zbude 60.", "Zbude 80.", "Zbude 40.", "Zbude 120."],
    correctIndex: 0,
    friendlyHint: "Druhých 50 % ber ze 120, ne z 80.",
    explanation:
      "Po zvětšení 120, po zmenšení 60. 80 je past zrušení změn. 40 je 80 − 50 %. 120 je jen první krok.",
  },
  {
    id: 655,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové skleněné destičky do herbáře vybrali 48 Kč. Botanik řekl, že to je přesně 12 % celé ceny. Zbytek doplatí z fondu kroužku.",
    prompt: "Kolik korun stojí celé destičky? Napiš jen číslo.",
    friendlyHint: "48 je 12 setin celku.",
    accept: ["400"],
    explanation: "48 ÷ 0,12 = 400 Kč. Past: 48 · 0,12, nebo 48 + 12 = 60, nebo 48 · 12 = 576.",
  },
  {
    id: 656,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sada pečetidel stála 1 800 Kč. Na jarmarku ji zlevnili o 15 %. Pokladna slevu bere z původní ceny.",
    prompt: "Kolik sada stojí po slevě?",
    options: ["1 530 Kč", "1 785 Kč", "270 Kč", "1 650 Kč"],
    correctIndex: 0,
    friendlyHint: "Zbývá 85 % z 1 800.",
    explanation:
      "15 % z 1 800 Kč je 270 Kč, nová cena 1 530 Kč. 1 785 Kč je 1 800 − 15. 270 Kč je jen sleva. 1 650 Kč je 150 Kč „od oka“.",
  },
  {
    id: 657,
    topic: "procenta",
    type: "open",
    workingText:
      "Mlynář namíchal 40 kg krmné směsi pro ovce. Podle receptu je 15 % hmotnosti lněné semínko a zbytek oves. Na ceduli chtějí jen hmotnost semínka.",
    prompt: "Kolik kilogramů semínka je ve směsi? Napiš jen číslo.",
    friendlyHint: "15 % ze 40.",
    accept: ["6"],
    explanation: "0,15 · 40 = 6 kg. Past: 15, nebo 40 − 15 = 25, nebo 0,15 kg.",
  },
  {
    id: 658,
    topic: "procenta",
    type: "mc",
    workingText:
      "Dokument o jeskyních trvá 120 minut. Úvodní titulky a závěrečné titulky spolykaly dohromady 30 minut. Zbytek běžel film.",
    prompt: "Kolik procent stopáže spolykaly titulky?",
    options: ["25 %", "30 %", "90 %", "4 %"],
    correctIndex: 0,
    friendlyHint: "30 ze 120.",
    explanation: "30 ÷ 120 = 0,25, tedy 25 %. 30 % je zapsání minut. 90 % je zbytek po odečtení 30. 4 je 120/30.",
  },
  {
    id: 659,
    topic: "procenta",
    type: "open",
    workingText:
      "Cena vstupenky na hvězdárnu byla 500 Kč. Nejdřív ji zdražili o 10 %. Pak zlevnili o 10 % z už nové ceny. Pokladna změny skládá.",
    prompt: "Jaká je cena po obou změnách? Napiš jen číslo.",
    friendlyHint: "Nejdřív 110 % z 500, z toho pak 90 %.",
    accept: ["495"],
    explanation:
      "Po zdražení 550 Kč, po slevě 495 Kč. Past: 500 (zrušení změn), nebo 450, nebo 550.",
  },
  {
    id: 660,
    topic: "procenta",
    type: "mc",
    workingText:
      "Půjčovna A: metaldetektor 1 200 Kč na den, sleva 25 %. Půjčovna B: den 1 050 Kč, sleva 10 %. Přístroje jsou srovnatelné, počítají jen cenu.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 45 Kč méně než v B.",
      "V B zaplatí o 45 Kč méně než v A.",
      "Obě půjčovny vyjdou stejně.",
      "V A zaplatí o 150 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 75 % z 1 200 a 90 % z 1 050.",
    explanation:
      "A: 900 Kč. B: 945 Kč. A je levnější o 45 Kč. 150 Kč je rozdíl původních cen. „Stejně“ vznikne odhadem.",
  },
  {
    id: 661,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nový buben do souboru vybrali 125 Kč. Vedoucí řekl, že to je přesně 25 % celé ceny. Zbytek doplatí po vystoupení.",
    prompt: "Kolik korun stojí celý buben? Napiš jen číslo.",
    friendlyHint: "125 je čtvrtina celku.",
    accept: ["500"],
    explanation: "125 ÷ 0,25 = 500 Kč. Past: 125 · 0,25 = 31,25, nebo 125 + 25 = 150, nebo 125 · 25.",
  },
  {
    id: 662,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cena bez DPH za sadu archeologických štětečků je 2 000 Kč. DPH je 21 %. Účetní chce jen výši daně, ne cenu s daní.",
    prompt: "Kolik korun je samotné DPH?",
    options: ["420 Kč", "21 Kč", "1 580 Kč", "2 021 Kč"],
    correctIndex: 0,
    friendlyHint: "21 % z 2 000.",
    explanation:
      "0,21 · 2 000 = 420 Kč. 21 Kč je zapsání sazby. 1 580 Kč je 2 000 − 21 %. 2 021 Kč je 2 000 + 21.",
  },
  {
    id: 663,
    topic: "procenta",
    type: "open",
    workingText:
      "První sobotu přišlo na jarmark řemesel 15 stánků. Druhou sobotu 18. Organizátor srovnává druhou sobotu s první.",
    prompt: "O kolik procent přišlo druhou sobotu víc stánků než první? Napiš jen číslo.",
    friendlyHint: "Rozdíl 3 stánky vztahuj k prvním 15.",
    accept: ["20"],
    explanation:
      "3 ÷ 15 = 0,20, tedy o 20 % víc. Past: 3/18 = 16,7 % (špatný základ), nebo 3, nebo 18 − 15 zapsat jako 3 %.",
  },
  {
    id: 664,
    topic: "procenta",
    type: "mc",
    workingText:
      "Teleskop v bazaru stál 2 500 Kč. Nejdřív ho zlevnili o 20 %. Pak ještě o 15 % z už nové ceny. Stojánek je v ceně.",
    prompt: "Kolik teleskop stojí po obou slevách?",
    options: ["1 700 Kč", "1 625 Kč", "2 000 Kč", "2 125 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 80 % z 2 500, z toho pak 85 %.",
    explanation:
      "Po 20 % zbývá 2 000 Kč, po dalších 15 % zbývá 1 700 Kč. 1 625 Kč je past jedné slevy 35 %. 2 000 Kč je jen první sleva. 2 125 Kč je 15 % z původku.",
  },
  {
    id: 665,
    topic: "procenta",
    type: "open",
    workingText:
      "V laboratoři namíchali 10 litrů živného roztoku. Podle návodu je 30 % objemu živný koncentrát a zbytek destilovaná voda. Na štítek chtějí jen objem koncentrátu.",
    prompt: "Kolik litrů koncentrátu je v roztoku? Napiš jen číslo.",
    friendlyHint: "30 % z 10.",
    accept: ["3"],
    explanation: "0,30 · 10 = 3 l. Past: 30, nebo 10 − 30, nebo 0,3 l.",
  },
  {
    id: 666,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sada razítek stála 450 Kč. Na akci ji zlevnili o 20 %. Jeden žák říká, že nová cena je 360 Kč. Druhý 430 Kč. Třetí 90 Kč. Čtvrtý 540 Kč.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Nová cena je 360 Kč.",
      "Nová cena je 430 Kč.",
      "Nová cena je 90 Kč.",
      "Nová cena je 540 Kč.",
    ],
    correctIndex: 0,
    friendlyHint: "Zbývá 80 % ze 450.",
    explanation: "0,80 · 450 = 360 Kč. 430 Kč je 450 − 20. 90 Kč je jen sleva. 540 Kč je zdražení.",
  },
  {
    id: 667,
    topic: "procenta",
    type: "open",
    workingText:
      "Sborová zkouška trvá 96 minut. Rozezpívání zabralo 24 minut, zbytek zpívali repertoár.",
    prompt: "Kolik procent zkoušky spolykalo rozezpívání? Napiš jen číslo.",
    friendlyHint: "24 z 96.",
    accept: ["25"],
    explanation: "24 ÷ 96 = 0,25, tedy 25 %. Past: 24 %, nebo 96 − 24 = 72, nebo 24/96 zapsat jako 4.",
  },
  {
    id: 668,
    topic: "procenta",
    type: "mc",
    workingText:
      "Denní jízdenka na lanovku stála 360 Kč. Od nového jízdního řádu ji zdražili o 20 %. Jízda nahoru a dolů zůstala stejná, mění se jen cena.",
    prompt: "Kolik stojí jízdenka teď?",
    options: ["432 Kč", "380 Kč", "288 Kč", "72 Kč"],
    correctIndex: 0,
    friendlyHint: "Pětinu ze 360 přičti k 360.",
    explanation:
      "20 % ze 360 Kč je 72 Kč, nová cena 432 Kč. 380 Kč je 360 + 20. 288 Kč je sleva. 72 Kč je jen výše zdražení.",
  },
  {
    id: 669,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové pletací jehlice vybrali 54 Kč. Vedoucí dílny řekl, že to je přesně 15 % celé ceny. Zbytek doplatí příští týden.",
    prompt: "Kolik korun stojí celé jehlice? Napiš jen číslo.",
    friendlyHint: "54 je 15 setin celku.",
    accept: ["360"],
    explanation: "54 ÷ 0,15 = 360 Kč. Past: 54 · 0,15, nebo 54 + 15 = 69, nebo 54 · 15 = 810.",
  },
  {
    id: 670,
    topic: "procenta",
    type: "open",
    workingText:
      "Batoh v outdooru stál 1 000 Kč. Nejdřív ho zlevnili o 10 %. Pak ještě o 20 % z už nové ceny. Pláštěnka na batoh je zvlášť.",
    prompt: "Kolik batoh stojí po obou slevách? Napiš jen číslo.",
    friendlyHint: "Nejdřív 90 % z 1 000, z toho pak 80 %.",
    accept: ["720"],
    explanation:
      "Po 10 % zbývá 900 Kč, po dalších 20 % zbývá 720 Kč. Past: 700 (jedna sleva 30 %), nebo 800, nebo 900.",
  },
  {
    id: 671,
    topic: "procenta",
    type: "open",
    workingText:
      "V červnu přišlo do observatoře 50 nočních skupin. V červenci jich bylo 65. Správce srovnává červenec s červnem.",
    prompt: "O kolik procent přišlo v červenci víc skupin než v červnu? Napiš jen číslo.",
    friendlyHint: "Rozdíl 15 skupin vztahuj k červnovým 50.",
    accept: ["30"],
    explanation:
      "15 ÷ 50 = 0,30, tedy o 30 % víc. Past: 15/65 (špatný základ), nebo 15, nebo 65 − 50 zapsat jako 15 %.",
  },
  {
    id: 672,
    topic: "procenta",
    type: "mc",
    workingText:
      "Obchod A: sada rydel 900 Kč, sleva 30 %. Obchod B: stejná sada 750 Kč, sleva 10 %. Nástroje jsou stejné, počítají jen cenu.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 45 Kč méně než v B.",
      "V B zaplatí o 45 Kč méně než v A.",
      "Oba obchody vyjdou stejně.",
      "V A zaplatí o 150 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 70 % z 900 a 90 % ze 750.",
    explanation:
      "A: 630 Kč. B: 675 Kč. A je levnější o 45 Kč. 150 Kč je rozdíl původních cen. „Stejně“ vznikne odhadem.",
  },
  {
    id: 673,
    topic: "procenta",
    type: "open",
    workingText:
      "Účtenka za nové vitríny v muzeu ukazuje 1 210 Kč včetně DPH 21 %. Cena bez daně chybí. DPH se počítá z ceny bez daně.",
    prompt: "Jaká byla cena bez DPH? Napiš jen číslo.",
    friendlyHint: "1 210 je 121 % základu. Základ = 1 210 ÷ 1,21.",
    accept: ["1000", "1 000"],
    explanation:
      "1 210 ÷ 1,21 = 1 000 Kč. Past: 1 210 − 21, nebo 1 210 · 0,21, nebo 1 210 − 121.",
  },
  {
    id: 674,
    topic: "procenta",
    type: "mc",
    workingText:
      "Zahradník namíchal 24 kg směsi pro truhlíky. Podle receptu je 25 % hmotnosti kompost a zbytek zemina. Na ceduli chtějí jen hmotnost kompostu.",
    prompt: "Kolik kilogramů kompostu je ve směsi?",
    options: ["6 kg", "25 kg", "18 kg", "0,25 kg"],
    correctIndex: 0,
    friendlyHint: "Čtvrtina z 24.",
    explanation: "0,25 · 24 = 6 kg. 25 kg je zapsání procent. 18 kg je zbytek. 0,25 kg je 25 % jako 0,25.",
  },
  {
    id: 675,
    topic: "procenta",
    type: "open",
    workingText:
      "V archivu mají 90 map. Do pátku jich 18 zrestaurovali, ostatní ještě čekají. Vedoucí zapisuje podíl zrestaurovaných.",
    prompt: "Kolik procent map už zrestaurovali? Napiš jen číslo.",
    friendlyHint: "18 z 90.",
    accept: ["20"],
    explanation: "18 ÷ 90 = 0,20, tedy 20 %. Past: 18 %, nebo 90 − 18 = 72, nebo 18/90 zapsat jako 5.",
  },
  {
    id: 676,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cena denního vstupu do motýlího pavilonu byla 300 Kč. Zdražili ho o 20 % a pak zlevnili o 10 % z už nové ceny.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Po obou změnách je vstup 324 Kč.",
      "Po obou změnách je vstup 330 Kč.",
      "Po obou změnách je vstup 270 Kč.",
      "Po obou změnách je vstup 300 Kč.",
    ],
    correctIndex: 0,
    friendlyHint: "Nejdřív 120 % z 300, z toho pak 90 %.",
    explanation:
      "Po zdražení 360 Kč, po slevě 324 Kč. 330 Kč je past „+10 % celkem“. 270 Kč je 10 % sleva z původku. 300 Kč je zrušení změn.",
  },
  {
    id: 677,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové stojany k notám vybrali 81 Kč. Sbormistr řekl, že to je přesně 18 % celé ceny. Zbytek doplatí z fondu.",
    prompt: "Kolik korun stojí celé stojany? Napiš jen číslo.",
    friendlyHint: "81 je 18 setin celku.",
    accept: ["450"],
    explanation: "81 ÷ 0,18 = 450 Kč. Past: 81 · 0,18, nebo 81 + 18 = 99, nebo 81 · 18.",
  },
  {
    id: 678,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sada tiskařských válců stála 5 600 Kč. Před stěhováním dílny ji zlevnili o 25 %. Pokladna slevu bere z původní ceny.",
    prompt: "Kolik sada stojí po slevě?",
    options: ["4 200 Kč", "5 575 Kč", "1 400 Kč", "4 480 Kč"],
    correctIndex: 0,
    friendlyHint: "Zbývá 75 % z 5 600.",
    explanation:
      "25 % z 5 600 Kč je 1 400 Kč, nová cena 4 200 Kč. 5 575 Kč je 5 600 − 25. 1 400 Kč je jen sleva. 4 480 Kč je 20 % sleva.",
  },
  {
    id: 679,
    topic: "procenta",
    type: "open",
    workingText:
      "Hodina ve fotografickém kroužku trvá 60 minut. Nastavování světel zabralo 9 minut, zbytek fotili.",
    prompt: "Kolik procent hodiny spolykalo nastavování světel? Napiš jen číslo.",
    friendlyHint: "9 ze 60.",
    accept: ["15"],
    explanation: "9 ÷ 60 = 0,15, tedy 15 %. Past: 9 %, nebo 60 − 9 = 51, nebo 9/60 zapsat jako 6,7.",
  },
  {
    id: 680,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na tabuli je číslo 250. Nejdřív ho zvětší o 10 %. Pak to nové číslo zvětší ještě o 20 %. Ptají se na výsledek.",
    prompt: "Jaké číslo zbude na tabuli?",
    options: ["330", "325", "275", "300"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 110 % z 250, z toho pak 120 %.",
    explanation:
      "Po 10 % je 275, po dalších 20 % je 330. 325 je past jedné změny 30 %. 275 je jen první krok. 300 je 20 % z 250.",
  },
  {
    id: 681,
    topic: "procenta",
    type: "open",
    workingText:
      "V čajovně namíchali 7,5 kg sypané směsi. Podle receptu je 40 % hmotnosti jasmín a zbytek zelený čaj. Na ceduli chtějí jen hmotnost jasmínu.",
    prompt: "Kolik kilogramů jasmínu je ve směsi? Napiš jen číslo.",
    friendlyHint: "40 % z 7,5 je totéž jako 0,4 · 7,5.",
    accept: ["3"],
    explanation: "0,40 · 7,5 = 3 kg. Past: 0,4 kg, nebo 7,5 − 0,4 = 7,1, nebo 40.",
  },
  {
    id: 682,
    topic: "procenta",
    type: "mc",
    workingText:
      "Loni měl taneční soubor 20 vystoupení. Letos jich má 26. Vedoucí srovnává letošek s loňskem. Jeden tvrdí, že je to o 30 % víc. Druhý o 6 %. Třetí o 23 %. Čtvrtý o 26 %.",
    prompt: "Které tvrzení je pravda?",
    options: ["Letos je to o 30 % víc.", "Letos je to o 6 % víc.", "Letos je to o 23 % víc.", "Letos je to o 26 % víc."],
    correctIndex: 0,
    friendlyHint: "Rozdíl 6 vystoupení vztahuj k loňským 20.",
    explanation:
      "6 ÷ 20 = 0,30, tedy o 30 % víc. 6 % je zapsání rozdílu. 23 % je 6/26 (špatný základ). 26 % je letošní počet jako procenta.",
  },
  {
    id: 683,
    topic: "procenta",
    type: "open",
    workingText:
      "Cena bez DPH za nové stojany v galerii je 2 500 Kč. DPH je 21 % a počítá se z ceny bez daně. Pokladna chce cenu včetně daně.",
    prompt: "Kolik stojí stojany včetně DPH? Napiš jen číslo.",
    friendlyHint: "2 500 · 1,21.",
    accept: ["3025", "3 025"],
    explanation:
      "2 500 · 1,21 = 3 025 Kč. Past: 2 521 (2 500 + 21), nebo 525 (jen DPH), nebo 1 975 (sleva 21 %).",
  },
  {
    id: 684,
    topic: "procenta",
    type: "mc",
    workingText:
      "Půjčovna A: kajak na den 2 000 Kč, sleva 15 %. Půjčovna B: den 1 900 Kč, sleva 10 %. Lodě jsou srovnatelné, počítají jen cenu za den.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 10 Kč méně než v B.",
      "V B zaplatí o 10 Kč méně než v A.",
      "Obě půjčovny vyjdou stejně.",
      "V A zaplatí o 100 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 85 % z 2 000 a 90 % z 1 900.",
    explanation:
      "A: 1 700 Kč. B: 1 710 Kč. A je levnější o 10 Kč. 100 Kč je rozdíl původních cen. „Stejně“ vznikne odhadem.",
  },
  {
    id: 685,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové skleněné baňky do laboratoře vybrali 108 Kč. Učitel řekl, že to je přesně 36 % celé ceny. Zbytek doplatí z kabinetu.",
    prompt: "Kolik korun stojí celé baňky? Napiš jen číslo.",
    friendlyHint: "108 je 36 setin celku.",
    accept: ["300"],
    explanation: "108 ÷ 0,36 = 300 Kč. Past: 108 · 0,36, nebo 108 + 36 = 144, nebo 108 · 36.",
  },
  {
    id: 686,
    topic: "procenta",
    type: "mc",
    workingText:
      "Kovadlina v kovářské dílně stála 8 000 Kč. Nejdřív ji zlevnili o 15 %. Pak ještě o 20 % z už nové ceny. Kleště jsou zvlášť.",
    prompt: "Kolik kovadlina stojí po obou slevách?",
    options: ["5 440 Kč", "5 200 Kč", "6 800 Kč", "6 400 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 85 % z 8 000, z toho pak 80 %.",
    explanation:
      "Po 15 % zbývá 6 800 Kč, po dalších 20 % zbývá 5 440 Kč. 5 200 Kč je past jedné slevy 35 %. 6 800 Kč je jen první sleva. 6 400 Kč je 20 % z původku.",
  },
  {
    id: 687,
    topic: "procenta",
    type: "open",
    workingText:
      "V březnu přišlo do antikvariátu 80 školních skupin. V dubnu jich bylo 68. Majitel srovnává duben s březnem a chce pokles v procentech.",
    prompt: "O kolik procent přišlo v dubnu méně skupin než v březnu? Napiš jen číslo.",
    friendlyHint: "Rozdíl 12 skupin vztahuj k březnovým 80.",
    accept: ["15"],
    explanation:
      "12 ÷ 80 = 0,15, tedy o 15 % méně. Past: 12/68 (špatný základ), nebo 12, nebo 80 − 68 zapsat jako 12 %.",
  },
  {
    id: 688,
    topic: "procenta",
    type: "mc",
    workingText:
      "Celodenní program v zoo trvá 200 minut. Obědová pauza spolykala 50 minut. Zbytek chodili po výbězích.",
    prompt: "Kolik procent programu spolykala pauza?",
    options: ["25 %", "50 %", "150 %", "4 %"],
    correctIndex: 0,
    friendlyHint: "50 ze 200.",
    explanation: "50 ÷ 200 = 0,25, tedy 25 %. 50 % je zapsání minut. 150 % je zbytek jako nesmysl. 4 je 200/50.",
  },
  {
    id: 689,
    topic: "procenta",
    type: "open",
    workingText:
      "Na tabuli je číslo 80. Nejdřív ho zvětší o 20 %. Pak to nové číslo zvětší ještě o 25 %. Ptají se na výsledek.",
    prompt: "Jaké číslo zbude na tabuli? Napiš jen číslo.",
    friendlyHint: "Nejdřív 120 % z 80, z toho pak 125 %.",
    accept: ["120"],
    explanation:
      "Po 20 % je 96, po dalších 25 % je 120. Past: 116 (jedna změna 45 %), nebo 96, nebo 100.",
  },
  {
    id: 690,
    topic: "procenta",
    type: "open",
    workingText:
      "V apatyce namíchali 12,5 kg bylinné směsi. Podle receptu je 40 % hmotnosti máta a zbytek meduňka. Na ceduli chtějí jen hmotnost máty.",
    prompt: "Kolik kilogramů máty je ve směsi? Napiš jen číslo.",
    friendlyHint: "40 % z 12,5 je totéž jako 0,4 · 12,5.",
    accept: ["5"],
    explanation: "0,40 · 12,5 = 5 kg. Past: 0,4 kg, nebo 12,5 − 0,4, nebo 40.",
  },
  {
    id: 691,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové skleněné čočky do kroužku optiky vybrali 45 Kč. Vedoucí řekl, že to je přesně 9 % celé ceny. Zbytek doplatí z kabinetu fyziky.",
    prompt: "Kolik korun stojí celé čočky? Napiš jen číslo.",
    friendlyHint: "45 je 9 setin celku.",
    accept: ["500"],
    explanation: "45 ÷ 0,09 = 500 Kč. Past: 45 · 0,09 = 4,05, nebo 45 + 9 = 54, nebo 45 · 9 = 405.",
  },
  {
    id: 692,
    topic: "procenta",
    type: "mc",
    workingText:
      "Účtenka za nové vitríny ukazuje 2 420 Kč včetně DPH 21 %. Čtyři tvrzení: A) cena bez daně je 2 000 Kč. B) cena bez daně je 2 399 Kč. C) DPH je 2 420 Kč. D) cena bez daně je 2 420 · 0,21.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Cena bez DPH je 2 000 Kč.",
      "Cena bez DPH je 2 399 Kč.",
      "Samotné DPH je 2 420 Kč.",
      "Cena bez DPH je 2 420 · 0,21.",
    ],
    correctIndex: 0,
    friendlyHint: "2 420 je 121 % základu, ne 100 % + 21 Kč.",
    explanation:
      "2 420 ÷ 1,21 = 2 000 Kč. 2 399 Kč je 2 420 − 21. DPH je 420 Kč, ne 2 420 Kč. 2 420 · 0,21 je daň z částky s daní, ne základ.",
  },
  {
    id: 693,
    topic: "procenta",
    type: "open",
    workingText:
      "Sada raznic v kovovýrobě stála 720 Kč. Na páteční akci ji zlevnili o 25 %. Pokladna slevu bere z původní ceny.",
    prompt: "Kolik sada stojí po slevě? Napiš jen číslo.",
    friendlyHint: "Zbývá 75 % ze 720.",
    accept: ["540"],
    explanation: "0,75 · 720 = 540 Kč. Past: 720 − 25 = 695, nebo 180 (jen sleva), nebo 695.",
  },
  {
    id: 694,
    topic: "procenta",
    type: "mc",
    workingText:
      "Obchod A: sada šablon 400 Kč, sleva 25 %. Obchod B: stejná sada 360 Kč, sleva 10 %. Šablony jsou stejné, počítají jen cenu.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 24 Kč méně než v B.",
      "V B zaplatí o 24 Kč méně než v A.",
      "Oba obchody vyjdou stejně.",
      "V A zaplatí o 40 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 75 % ze 400 a 90 % ze 360.",
    explanation:
      "A: 300 Kč. B: 324 Kč. A je levnější o 24 Kč. 40 Kč je rozdíl původních cen. „Stejně“ vznikne odhadem.",
  },
  {
    id: 695,
    topic: "procenta",
    type: "open",
    workingText:
      "Blok v kroužku animace trvá 48 minut. Střih ukázek zabral 12 minut, zbytek kreslili.",
    prompt: "Kolik procent bloku spolykala střihová část? Napiš jen číslo.",
    friendlyHint: "12 ze 48.",
    accept: ["25"],
    explanation: "12 ÷ 48 = 0,25, tedy 25 %. Past: 12 %, nebo 48 − 12 = 36, nebo 12/48 zapsat jako 4.",
  },
  {
    id: 696,
    topic: "procenta",
    type: "mc",
    workingText:
      "V dílně namíchali 30 litrů mořidla. Podle návodu je 20 % objemu pigment a zbytek ředidlo. Na štítek chtějí jen objem pigmentu.",
    prompt: "Kolik litrů pigmentu je v mořidle?",
    options: ["6 l", "20 l", "24 l", "0,2 l"],
    correctIndex: 0,
    friendlyHint: "20 % z 30.",
    explanation: "0,20 · 30 = 6 l. 20 l je zapsání procent. 24 l je zbytek. 0,2 l je 20 % jako 0,2.",
  },
  {
    id: 697,
    topic: "procenta",
    type: "open",
    workingText:
      "Harfa v bazaru stála 480 Kč. Nejdřív ji zlevnili o 20 %. Pak ještě o 25 % z už nové ceny. Struny jsou v ceně.",
    prompt: "Kolik harfa stojí po obou slevách? Napiš jen číslo.",
    friendlyHint: "Nejdřív 80 % ze 480, z toho pak 75 %.",
    accept: ["288"],
    explanation:
      "Po 20 % zbývá 384 Kč, po dalších 25 % zbývá 288 Kč. Past: 264 (jedna sleva 45 %), nebo 384, nebo 360.",
  },
  {
    id: 698,
    topic: "procenta",
    type: "mc",
    workingText:
      "V září ujel běžecký kroužek 40 km. V říjnu 50 km. Vedoucí srovnává říjen se zářím. Jeden tvrdí o 25 % víc. Druhý o 10 %. Třetí o 20 %. Čtvrtý o 50 %.",
    prompt: "Které tvrzení je pravda?",
    options: ["V říjnu je to o 25 % víc.", "V říjnu je to o 10 % víc.", "V říjnu je to o 20 % víc.", "V říjnu je to o 50 % víc."],
    correctIndex: 0,
    friendlyHint: "Rozdíl 10 km vztahuj k zářijovým 40 km.",
    explanation:
      "10 ÷ 40 = 0,25, tedy o 25 % víc. 10 % je zapsání rozdílu. 20 % je 10/50 (špatný základ). 50 % je říjnový počet jako procenta.",
  },
  {
    id: 699,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové filtry do kroužku temné komory vybrali 66 Kč. Vedoucí řekl, že to je přesně 22 % celé ceny. Zbytek doplatí z fondu kroužku.",
    prompt: "Kolik korun stojí celé filtry? Napiš jen číslo.",
    friendlyHint: "66 je 22 setin celku.",
    accept: ["300"],
    explanation: "66 ÷ 0,22 = 300 Kč. Past: 66 · 0,22, nebo 66 + 22 = 88, nebo 66 · 22.",
  },
  {
    id: 700,
    topic: "procenta",
    type: "open",
    workingText:
      "Cena denní jízdenky na přívoz byla 600 Kč. Nejdřív ji zdražili o 10 %. Pak zlevnili o 10 % z už nové ceny. Pokladna změny skládá.",
    prompt: "Jaká je cena po obou změnách? Napiš jen číslo.",
    friendlyHint: "Nejdřív 110 % z 600, z toho pak 90 %.",
    accept: ["594"],
    explanation:
      "Po zdražení 660 Kč, po slevě 594 Kč. Past: 600 (plus a minus se „zruší“), nebo 540, nebo 660.",
  },
];
