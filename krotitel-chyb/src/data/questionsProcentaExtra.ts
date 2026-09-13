import type { QuizQuestion } from "@/lib/types";

export const QUESTIONS_PROCENTA_EXTRA: QuizQuestion[] = [
  {
    id: 301,
    topic: "procenta",
    type: "open",
    workingText:
      "Ve školním skleníku mají 80 sazenic rajčat. Do konce května vykvetlo 24 z nich, ostatní ještě jen poupata. Zahradník zapisuje podíl vykvetlých, ne počet poupat.",
    prompt: "Kolik procent sazenic už vykvetlo? Napiš jen číslo.",
    friendlyHint: "24 z 80. Nejdřív zkrať zlomkem.",
    accept: ["30"],
    explanation:
      "24 ÷ 80 = 0,30, tedy 30 %. Past: 24 %, nebo 80 − 24 = 56, nebo 24/80 zapsat jako 3.",
  },
  {
    id: 302,
    topic: "procenta",
    type: "mc",
    workingText:
      "Ptačí krmítko stálo v hobbymarketu 160 Kč. Od října ho zdražili o 25 %, protože zdražilo dřevo. Stojánek a semínka se nepočítají.",
    prompt: "Kolik stojí krmítko teď?",
    options: ["200 Kč", "185 Kč", "120 Kč", "40 Kč"],
    correctIndex: 0,
    friendlyHint: "Čtvrtinu ze 160 přičti k 160.",
    explanation:
      "25 % ze 160 Kč je 40 Kč, nová cena 200 Kč. 185 Kč je 160 + 25. 120 Kč je sleva místo zdražení. 40 Kč je jen výše zdražení.",
  },
  {
    id: 303,
    topic: "procenta",
    type: "open",
    workingText:
      "Na školní výlet do planetária zaplatila třída zálohu 36 Kč na žáka. Vedoucí řekl, že záloha je přesně 12 % celé ceny výletu. Zbytek se doplatí v den odjezdu.",
    prompt: "Kolik korun stojí celý výlet na jednoho žáka? Napiš jen číslo.",
    friendlyHint: "36 je 12 setin celku.",
    accept: ["300"],
    explanation:
      "36 ÷ 0,12 = 300 Kč. Past: 36 · 0,12 = 4,32, nebo 36 + 12 = 48, nebo 36 · 12 = 432.",
  },
  {
    id: 304,
    topic: "procenta",
    type: "mc",
    workingText:
      "Horské kolo v bazaru stálo 12 000 Kč. Nejdřív ho zlevnili o 15 %. Za týden ještě o 20 % z už nové ceny. Servis je v ceně, jiné slevy nejsou.",
    prompt: "Kolik kolo stojí po obou slevách?",
    options: ["8 160 Kč", "7 800 Kč", "10 200 Kč", "9 600 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 85 % z 12 000, z toho pak 80 %.",
    explanation:
      "Po 15 % zbývá 10 200 Kč, po dalších 20 % zbývá 8 160 Kč. 7 800 Kč je past jedné slevy 35 %. 10 200 Kč je jen první sleva. 9 600 Kč je 20 % z původku.",
  },
  {
    id: 305,
    topic: "procenta",
    type: "open",
    workingText:
      "Školní družina nasbírala v září 40 kg kaštanů. V říjnu nasbírali 50 kg. Vedoucí srovnává říjen se zářím, ne naopak.",
    prompt: "O kolik procent nasbírali v říjnu víc než v září? Napiš jen číslo.",
    friendlyHint: "Rozdíl 10 kg vztahuj k zářijovým 40 kg.",
    accept: ["25"],
    explanation:
      "10 ÷ 40 = 0,25, tedy o 25 % víc. Past: 10/50 = 20 % (špatný základ), nebo 10, nebo 50 − 40 zapsat jako 10 %.",
  },
  {
    id: 306,
    topic: "procenta",
    type: "mc",
    workingText:
      "Obchod A: sada štětců 400 Kč, sleva 30 %. Obchod B: stejná sada 320 Kč, sleva 10 %. Barvy jsou stejné, počítají jen cenu sady.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 8 Kč méně než v B.",
      "V B zaplatí o 8 Kč méně než v A.",
      "Oba obchody vyjdou stejně.",
      "V A zaplatí o 80 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 70 % ze 400 a 90 % ze 320.",
    explanation:
      "A: 280 Kč. B: 288 Kč. A je levnější o 8 Kč. 80 Kč je rozdíl původních cen. „Stejně“ vznikne hrubým odhadem.",
  },
  {
    id: 307,
    topic: "procenta",
    type: "open",
    workingText:
      "Dokumentární film ve školním sále trvá 90 minut. Reklamy a upoutávky spolykaly 18 minut. Zbytek běžel samotný film.",
    prompt: "Kolik procent stopáže spolykaly reklamy? Napiš jen číslo.",
    friendlyHint: "18 z 90.",
    accept: ["20"],
    explanation:
      "18 ÷ 90 = 0,20, tedy 20 %. Past: 18 %, nebo 90 − 18 = 72, nebo 18/90 zapsat jako 5.",
  },
  {
    id: 308,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na tabuli je číslo 200. Nejdřív ho žáci zvětší o 10 %. Pak to nové číslo zmenší o 10 %. Ptají se, jaké číslo zbude, ne jaká byla změna.",
    prompt: "Jaké číslo zbude na tabuli?",
    options: ["198", "200", "180", "220"],
    correctIndex: 0,
    friendlyHint: "Druhých 10 % ber z 220, ne z 200.",
    explanation:
      "Po zvětšení 220, po zmenšení 198. 200 je past „plus a minus se zruší“. 180 je 200 − 10 %. 220 je jen první krok.",
  },
  {
    id: 309,
    topic: "procenta",
    type: "open",
    workingText:
      "Pěstitelé namíchali 5 kg krmné směsi pro králíky. Podle receptu je 40 % hmotnosti oves a zbytek ječmen. Na ceduli chtějí jen hmotnost ovsa.",
    prompt: "Kolik kilogramů ovsa je ve směsi? Napiš jen číslo.",
    friendlyHint: "40 % z 5 je totéž jako 0,4 · 5.",
    accept: ["2"],
    explanation: "0,40 · 5 = 2 kg. Past: 0,4 kg, nebo 5 − 0,4 = 4,6, nebo 40.",
  },
  {
    id: 310,
    topic: "procenta",
    type: "mc",
    workingText:
      "Číslo 80 na nástěnce zvětšili o 25 %. Jeden žák tvrdí, že nové číslo je 100. Druhý říká 105. Třetí že 60. Čtvrtý že 20.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Nové číslo je 100.",
      "Nové číslo je 105.",
      "Nové číslo je 60.",
      "Nové číslo je 20.",
    ],
    correctIndex: 0,
    friendlyHint: "25 % z 80 přičti k 80.",
    explanation:
      "25 % z 80 je 20, nové číslo 100. 105 je 80 + 25. 60 je zmenšení. 20 je jen přírůstek.",
  },
  {
    id: 311,
    topic: "procenta",
    type: "open",
    workingText:
      "Účtenka za školní tiskárnu ukazuje 2 420 Kč včetně DPH 21 %. Cena bez daně na faktuře chybí. Účetní ji chce dopočítat, DPH se počítá z ceny bez daně.",
    prompt: "Jaká byla cena bez DPH? Napiš jen číslo.",
    friendlyHint: "2 420 je 121 % základu. Základ = 2 420 ÷ 1,21.",
    accept: ["2000", "2 000"],
    explanation:
      "2 420 ÷ 1,21 = 2 000 Kč. Past: 2 420 − 21, nebo 2 420 · 0,21, nebo 2 420 − 242.",
  },
  {
    id: 312,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sada sešitů ve školním bufetu stála 2 400 Kč. Před prázdninami ji zlevnili o 25 %. Pokladna slevu bere z původní ceny, jiné akce nejsou.",
    prompt: "Kolik sada stojí po slevě?",
    options: ["1 800 Kč", "2 375 Kč", "1 775 Kč", "600 Kč"],
    correctIndex: 0,
    friendlyHint: "Zbývá 75 % z 2 400.",
    explanation:
      "25 % z 2 400 Kč je 600 Kč, nová cena 1 800 Kč. 2 375 Kč i 1 775 Kč vzniknou odečtením 25 místo 25 %. 600 Kč je jen výše slevy.",
  },
  {
    id: 313,
    topic: "procenta",
    type: "open",
    workingText:
      "V 8.A je 32 žáků. Na odpolední dílnu keramiky jde 25 % třídy. Zbytek má běžné vyučování v kmenové učebně.",
    prompt: "Kolik žáků jde na dílnu? Napiš jen číslo.",
    friendlyHint: "Čtvrtina z 32.",
    accept: ["8"],
    explanation: "0,25 · 32 = 8. Past: 25, nebo 32 − 25 = 7, nebo 32 · 25 = 800.",
  },
  {
    id: 314,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cena vstupenky na výstavu byla 2 000 Kč. V květnu ji zdražili o 10 %. V červnu zlevnili o 10 % z už nové květnové ceny. Pokladna změny skládá.",
    prompt: "Jaká je cena po obou změnách?",
    options: ["1 980 Kč", "2 000 Kč", "1 800 Kč", "2 200 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 110 % z 2 000, z toho pak 90 %.",
    explanation:
      "Po zdražení 2 200 Kč, po slevě 1 980 Kč. 2 000 Kč je past zrušení změn. 1 800 Kč je jen 10 % sleva z původku. 2 200 Kč je jen zdražení.",
  },
  {
    id: 315,
    topic: "procenta",
    type: "open",
    workingText:
      "Do školní kuchyně dovezli 20 kg jablek. Skladník odhadl, že 15 % je otlačených a půjde do kompotu. Zbytek jde na svačiny syrový.",
    prompt: "Kolik kilogramů jablek je otlačených? Napiš jen číslo.",
    friendlyHint: "15 % z 20.",
    accept: ["3"],
    explanation: "0,15 · 20 = 3 kg. Past: 15, nebo 20 − 15 = 5, nebo 17 (zbytek).",
  },
  {
    id: 316,
    topic: "procenta",
    type: "mc",
    workingText:
      "Fitness A: měsíční karta 800 Kč, sleva pro žáky 25 %. Fitness B: karta 660 Kč, sleva 10 %. Posilovna je srovnatelná, počítají jen cenu karty.",
    prompt: "Které tvrzení platí?",
    options: [
      "V B zaplatí o 6 Kč méně než v A.",
      "V A zaplatí o 6 Kč méně než v B.",
      "Obě karty vyjdou stejně.",
      "V A zaplatí o 140 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 75 % z 800 a 90 % z 660.",
    explanation:
      "A: 600 Kč. B: 594 Kč. B je levnější o 6 Kč. 140 Kč je rozdíl původních cen. „Stejně“ vznikne hrubým odhadem.",
  },
  {
    id: 317,
    topic: "procenta",
    type: "open",
    workingText:
      "Šachový kroužek vybral na nové hodiny 48 Kč. Vedoucí řekl, že to je přesně 16 % celé potřebné částky. Zbytek se bude vybírat příští týden.",
    prompt: "Kolik korun je celá potřebná částka? Napiš jen číslo.",
    friendlyHint: "48 je 16 setin celku.",
    accept: ["300"],
    explanation: "48 ÷ 0,16 = 300 Kč. Past: 48 · 0,16, nebo 48 + 16 = 64, nebo 48 · 16.",
  },
  {
    id: 318,
    topic: "procenta",
    type: "mc",
    workingText:
      "Elektrická kytara stála 2 800 Kč. Nejdřív ji zdražili o 20 %. Pak dali slevu 10 % z už nové ceny. Struny a pouzdro se nepočítají.",
    prompt: "Jaká je cena po obou změnách?",
    options: ["3 024 Kč", "2 800 Kč", "3 080 Kč", "2 520 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 120 % z 2 800, z toho pak 90 %.",
    explanation:
      "Po zdražení 3 360 Kč, po slevě 3 024 Kč. 2 800 Kč je past zrušení. 3 080 Kč je 2 800 + 280. 2 520 Kč je jen 10 % sleva z původku.",
  },
  {
    id: 319,
    topic: "procenta",
    type: "open",
    workingText:
      "Včelařský kroužek stočil loni 80 sklenic medu. Letos stočili 100 sklenic. Vedoucí se ptá, o kolik procent měli letos víc než loni.",
    prompt: "O kolik procent stočili letos víc? Napiš jen číslo.",
    friendlyHint: "Rozdíl 20 sklenic vztahuj k loňským 80.",
    accept: ["25"],
    explanation:
      "20 ÷ 80 = 0,25, tedy o 25 % víc. Past: 20/100 = 20 % (špatný základ), nebo 20, nebo 100 − 80 zapsat jako 20 %.",
  },
  {
    id: 320,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sada modelářských barev stojí 800 Kč bez DPH. DPH je 15 %. Pokladna chce cenu včetně daně, ne výši daně samotné.",
    prompt: "Kolik stojí sada včetně DPH?",
    options: ["920 Kč", "815 Kč", "680 Kč", "120 Kč"],
    correctIndex: 0,
    friendlyHint: "15 % z 800 přičti k 800.",
    explanation:
      "15 % z 800 Kč je 120 Kč, s daní 920 Kč. 815 Kč je 800 + 15. 680 Kč je sleva. 120 Kč je jen daň.",
  },
  {
    id: 321,
    topic: "procenta",
    type: "open",
    workingText:
      "Hodinová hodina sboru trvá 60 minut. Rozepívání zabralo 24 minut. Zbytek zkoušeli skladby na akademii.",
    prompt: "Kolik procent hodiny spolykalo rozepívání? Napiš jen číslo.",
    friendlyHint: "24 z 60.",
    accept: ["40"],
    explanation: "24 ÷ 60 = 0,40, tedy 40 %. Past: 24 %, nebo 60 − 24 = 36, nebo 24/60 zapsat jako 2,5.",
  },
  {
    id: 322,
    topic: "procenta",
    type: "mc",
    workingText:
      "V 8 kg pískové směsi do dílny je 25 % jílu a zbytek písek. Jeden žák říká, že jílu je 2 kg. Druhý 2,5 kg. Třetí 6 kg. Čtvrtý 25 kg.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Jílu je 2 kg.",
      "Jílu je 2,5 kg.",
      "Jílu je 6 kg.",
      "Jílu je 25 kg.",
    ],
    correctIndex: 0,
    friendlyHint: "Čtvrtina z 8 kg.",
    explanation: "0,25 · 8 = 2 kg. 2,5 kg je 8 · 0,3. 6 kg je zbytek. 25 kg je záměna čísla 25.",
  },
  {
    id: 323,
    topic: "procenta",
    type: "open",
    workingText:
      "Na účtu spolku bylo 4 000 Kč. Nejdřív utratili 25 % zůstatku za plakáty. Z toho, co zbylo, šlo ještě 20 % na lepenku. Ptají se, kolik korun zbývá.",
    prompt: "Kolik korun zbývá po obou výdajích? Napiš jen číslo.",
    friendlyHint: "Nejdřív 75 % ze 4 000, z toho pak 80 %.",
    accept: ["2400", "2 400"],
    explanation:
      "Po prvním výdaji 3 000 Kč, po druhém 2 400 Kč. Past: 4 000 · 0,55 = 2 200 (sčítání 25 + 20), nebo 3 000, nebo 800.",
  },
  {
    id: 324,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cena sešitu 40 Kč vzrostla o 25 % a pak klesla o 20 % z nové ceny. Čtyři žáci napsali čtyři různé závěry.",
    prompt: "Které tvrzení platí?",
    options: [
      "Sešit zase stojí 40 Kč.",
      "Sešit stojí 50 Kč.",
      "Sešit stojí 32 Kč.",
      "Sešit stojí 45 Kč.",
    ],
    correctIndex: 0,
    friendlyHint: "40 · 1,25 · 0,80.",
    explanation:
      "Po zdražení 50 Kč, po slevě 40 Kč. 50 Kč je jen první krok. 32 Kč je 40 − 20 %. 45 Kč je 40 + 5.",
  },
  {
    id: 325,
    topic: "procenta",
    type: "open",
    workingText:
      "Na charitativní běh vybrali 180 Kč. Třídní řekla, že to je přesně 45 % cíle. Zbytek chtějí vybrat příští pátek.",
    prompt: "Kolik korun je celý cíl sbírky? Napiš jen číslo.",
    friendlyHint: "180 je 45 setin celku.",
    accept: ["400"],
    explanation: "180 ÷ 0,45 = 400 Kč. Past: 180 · 0,45, nebo 180 + 45 = 225, nebo 180 · 45.",
  },
  {
    id: 326,
    topic: "procenta",
    type: "mc",
    workingText:
      "Hrozny stály 80 Kč/kg. V pátek na ně dali slevu 20 %. Rodina kupuje právě 3 kg. Váha je přesná, jiné slevy nejsou.",
    prompt: "Kolik zaplatí za ta 3 kg?",
    options: ["192 Kč", "240 Kč", "180 Kč", "48 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív nová cena za kilogram, pak krát 3.",
    explanation:
      "Nová cena 64 Kč/kg, za 3 kg je 192 Kč. 240 Kč je bez slevy. 180 Kč je 3 · 60. 48 Kč je jen sleva ze 240.",
  },
  {
    id: 327,
    topic: "procenta",
    type: "open",
    workingText:
      "Na školní akademii bylo 75 žáků. Zpěvem vystoupilo 45 z nich. Zbytek dělal techniku a šatnu. Vedoucí chce podíl zpěváků.",
    prompt: "Kolik procent žáků vystoupilo zpěvem? Napiš jen číslo.",
    friendlyHint: "45 z 75. Obojí jde dělit 15.",
    accept: ["60"],
    explanation: "45 ÷ 75 = 0,60, tedy 60 %. Past: 45 %, nebo 75 − 45 = 30, nebo 45/75 zapsat jako 1,6.",
  },
  {
    id: 328,
    topic: "procenta",
    type: "mc",
    workingText:
      "Stolní lampa stála 1 600 Kč. Nejdřív sleva 25 %. Pak ještě 10 % z už zlevněné ceny. Doprava je zdarma.",
    prompt: "Kolik lampa stojí teď?",
    options: ["1 080 Kč", "1 040 Kč", "1 200 Kč", "1 440 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív tři čtvrtiny z 1 600, z toho pak 90 %.",
    explanation:
      "Po 25 % zbývá 1 200 Kč, po dalších 10 % zbývá 1 080 Kč. 1 040 Kč je past 35 % najednou. 1 200 Kč je jen první sleva. 1 440 Kč je jen 10 % z původku.",
  },
  {
    id: 329,
    topic: "procenta",
    type: "open",
    workingText:
      "Na vkladní knížce spolku leží 8 000 Kč. Banka připíše jednoduchý úrok 5 % za rok a nic neskládá. Pokladník chce jen výši úroku, ne nový zůstatek.",
    prompt: "Kolik korun přibude za jeden rok? Napiš jen číslo.",
    friendlyHint: "5 % z 8 000.",
    accept: ["400"],
    explanation: "0,05 · 8 000 = 400 Kč. Past: zapsat 8 400 (zůstatek), nebo 5, nebo 8 000 · 5.",
  },
  {
    id: 330,
    topic: "procenta",
    type: "mc",
    workingText:
      "V pondělí odvezli 50 kg tříděného papíru. V úterý jen 40 kg. Srovnávají úterý s pondělím: o kolik procent méně.",
    prompt: "O kolik procent bylo úterních kilogramů méně?",
    options: ["20 %", "25 %", "10 %", "80 %"],
    correctIndex: 0,
    friendlyHint: "Úbytek 10 kg vztahuj k pondělním 50 kg.",
    explanation:
      "10 ÷ 50 = 0,20, tedy o 20 % méně. 25 % je 10/40 (špatný základ). 10 % je zapsaný rozdíl. 80 % je podíl úterka.",
  },
  {
    id: 331,
    topic: "procenta",
    type: "open",
    workingText:
      "Džbán čaje má 2,5 litru. Podle receptu je 20 % objemu sirup a zbytek horká voda. Na nástěnce chtějí jen objem sirupu.",
    prompt: "Kolik litrů sirupu je ve džbánu? Napiš jen číslo.",
    friendlyHint: "20 % z 2,5 je totéž jako 0,2 · 2,5.",
    accept: ["0.5", "0,5"],
    explanation: "0,20 · 2,5 = 0,5 litru. Past: 0,2 l, nebo 2,5 − 0,2 = 2,3, nebo 20.",
  },
  {
    id: 332,
    topic: "procenta",
    type: "mc",
    workingText:
      "Po slevě 20 % stojí výtvarná deska 640 Kč. Pokladní se ptá na původní cenu, ne na výši slevy.",
    prompt: "Jaká byla původní cena?",
    options: ["800 Kč", "768 Kč", "512 Kč", "660 Kč"],
    correctIndex: 0,
    friendlyHint: "640 je 80 % původku. Původek = 640 ÷ 0,80.",
    explanation:
      "640 ÷ 0,80 = 800 Kč. 768 Kč je 640 + 20 %. 512 Kč je dalších 20 % sleva. 660 Kč je 640 + 20.",
  },
  {
    id: 333,
    topic: "procenta",
    type: "open",
    workingText:
      "Dvouhodinovka přírodopisu trvá 120 minut. Samostatná práce v teráriu zabrala 36 minut. Zbytek byla výklad a zápis.",
    prompt: "Kolik procent dvouhodinovky zabrala práce v teráriu? Napiš jen číslo.",
    friendlyHint: "36 z 120.",
    accept: ["30"],
    explanation: "36 ÷ 120 = 0,30, tedy 30 %. Past: 36 %, nebo 120 − 36 = 84, nebo 36/120 zapsat jako 3.",
  },
  {
    id: 334,
    topic: "procenta",
    type: "mc",
    workingText:
      "Půjčovna A: den kajaku 1 500 Kč, sleva 40 %. Půjčovna B: den 1 200 Kč, sleva 20 %. Lodě jsou stejné, počítají jen cenu za den.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 60 Kč méně než v B.",
      "V B zaplatí o 60 Kč méně než v A.",
      "Obě půjčovny vyjdou stejně.",
      "V A zaplatí o 300 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 60 % z 1 500 a 80 % z 1 200.",
    explanation:
      "A: 900 Kč. B: 960 Kč. A je levnější o 60 Kč. 300 Kč je rozdíl původních cen. „Stejně“ vznikne hrubým odhadem.",
  },
  {
    id: 335,
    topic: "procenta",
    type: "open",
    workingText:
      "Na váze leží 35 kg dýní. Do školní kuchyně vybrali 14 kg těch nejhezčích. Zbytek jde na kompost a semínka.",
    prompt: "Kolik procent dýní šlo do kuchyně? Napiš jen číslo.",
    friendlyHint: "14 z 35. Obojí jde dělit 7.",
    accept: ["40"],
    explanation: "14 ÷ 35 = 0,40, tedy 40 %. Past: 14 %, nebo 35 − 14 = 21, nebo 14/35 zapsat jako 2,5.",
  },
  {
    id: 336,
    topic: "procenta",
    type: "mc",
    workingText:
      "Svítilna do laboratoře stojí 500 Kč bez DPH. DPH je 21 %. Účetní chce cenu včetně daně.",
    prompt: "Kolik stojí svítilna včetně DPH?",
    options: ["605 Kč", "521 Kč", "479 Kč", "105 Kč"],
    correctIndex: 0,
    friendlyHint: "21 % z 500 přičti k 500.",
    explanation:
      "21 % z 500 Kč je 105 Kč, s daní 605 Kč. 521 Kč je 500 + 21. 479 Kč je 500 − 21. 105 Kč je jen daň.",
  },
  {
    id: 337,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nový mikroskop vybrali 63 Kč. Učitelka řekla, že to je přesně 9 % ceny. Zbytek doplatí z fondu třídy.",
    prompt: "Kolik korun stojí mikroskop? Napiš jen číslo.",
    friendlyHint: "63 je 9 setin celku.",
    accept: ["700"],
    explanation: "63 ÷ 0,09 = 700 Kč. Past: 63 · 0,09, nebo 63 + 9 = 72, nebo 63 · 9.",
  },
  {
    id: 338,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na tabuli je číslo 200. Nejdřív ho zvětší o 50 %. Pak to nové číslo zmenší o 50 %. Ptají se, co zbude.",
    prompt: "Jaké číslo zbude na tabuli?",
    options: ["150", "200", "100", "250"],
    correctIndex: 0,
    friendlyHint: "Druhých 50 % ber z 300, ne z 200.",
    explanation:
      "Po zvětšení 300, po zmenšení 150. 200 je past zrušení. 100 je 200 − 50 %. 250 je 200 + 50.",
  },
  {
    id: 339,
    topic: "procenta",
    type: "open",
    workingText:
      "V kroužku robotiky je 45 dětí. Na víkendový kemp jede 27 z nich. Zbytek zůstává a dokončuje projekty ve škole.",
    prompt: "Kolik procent dětí jede na kemp? Napiš jen číslo.",
    friendlyHint: "27 z 45. Obojí jde dělit 9.",
    accept: ["60"],
    explanation: "27 ÷ 45 = 0,60, tedy 60 %. Past: 27 %, nebo 45 − 27 = 18, nebo 40 (ti, co nejedou).",
  },
  {
    id: 340,
    topic: "procenta",
    type: "mc",
    workingText:
      "Blok papíru stojí 150 Kč. Nabídka C: tři bloky za cenu dvou. Nabídka D: sleva 30 % na každý blok. Počítají cenu za tři bloky.",
    prompt: "Které tvrzení platí?",
    options: [
      "Nabídka C vyjde o 15 Kč levněji než D.",
      "Nabídka D vyjde o 15 Kč levněji než C.",
      "Obě nabídky vyjdou stejně.",
      "Nabídka C vyjde o 150 Kč levněji než D.",
    ],
    correctIndex: 0,
    friendlyHint: "C: zaplatíš 300 Kč za 3 kusy. D: 70 % ze 450.",
    explanation:
      "C: 300 Kč. D: 0,70 · 450 = 315 Kč. C je levnější o 15 Kč. 150 Kč je cena jednoho bloku. „Stejně“ je hrubý odhad.",
  },
  {
    id: 341,
    topic: "procenta",
    type: "open",
    workingText:
      "Vstupenka na školní koncert stojí 1 800 Kč. Pořadatelé přidávají servisní poplatek 15 % z této ceny. Poplatek platí zvlášť v hotovosti.",
    prompt: "Kolik korun je servisní poplatek? Napiš jen číslo.",
    friendlyHint: "15 % z 1 800. Nejdřív 10 %, pak ještě polovinu z toho.",
    accept: ["270"],
    explanation: "0,15 · 1 800 = 270 Kč. Past: 180 (jen 10 %), nebo 1 800 · 15, nebo 15.",
  },
  {
    id: 342,
    topic: "procenta",
    type: "mc",
    workingText:
      "Šicí stroj stál 3 600 Kč. Nejdřív ho zlevnili o 10 %. Pak ještě o 10 % z už nové ceny. Jehly jsou v ceně.",
    prompt: "Kolik stroj stojí po obou slevách?",
    options: ["2 916 Kč", "2 880 Kč", "3 240 Kč", "2 520 Kč"],
    correctIndex: 0,
    friendlyHint: "3 600 · 0,90 · 0,90.",
    explanation:
      "Po první slevě 3 240 Kč, po druhé 2 916 Kč. 2 880 Kč je past 20 % najednou. 3 240 Kč je jen první sleva. 2 520 Kč je 30 % z původku.",
  },
  {
    id: 343,
    topic: "procenta",
    type: "open",
    workingText:
      "Knihovna evidovala v březnu 48 výpůjček deskových her. V dubnu jich bylo 60. Knihovnice srovnává duben s březnem.",
    prompt: "O kolik procent bylo dubnových výpůjček víc? Napiš jen číslo.",
    friendlyHint: "Rozdíl 12 vztahuj k březnovým 48.",
    accept: ["25"],
    explanation:
      "12 ÷ 48 = 0,25, tedy o 25 % víc. Past: 12/60 = 20 % (špatný základ), nebo 12, nebo 60 − 48 zapsat jako 12 %.",
  },
  {
    id: 344,
    topic: "procenta",
    type: "mc",
    workingText:
      "Číslo 50 na tabuli zvětšili o 20 % a hned zmenšili o 20 % z nového čísla. Čtyři žáci napsali čtyři výsledky.",
    prompt: "Které tvrzení platí?",
    options: [
      "Na tabuli zbude 48.",
      "Na tabuli zbude 50.",
      "Na tabuli zbude 40.",
      "Na tabuli zbude 60.",
    ],
    correctIndex: 0,
    friendlyHint: "50 · 1,20 · 0,80.",
    explanation:
      "Po zvětšení 60, po zmenšení 48. 50 je past zrušení. 40 je 50 − 20 %. 60 je jen první krok.",
  },
  {
    id: 345,
    topic: "procenta",
    type: "open",
    workingText:
      "Do krmítka nasypali 16 kg zimní směsi. Podle receptu je 25 % slunečnice a zbytek proso. Ornitolog chce jen hmotnost slunečnice.",
    prompt: "Kolik kilogramů slunečnice je ve směsi? Napiš jen číslo.",
    friendlyHint: "Čtvrtina z 16.",
    accept: ["4"],
    explanation: "0,25 · 16 = 4 kg. Past: 25, nebo 16 − 25, nebo 12 (zbytek).",
  },
  {
    id: 346,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nástup do jídelny přišlo 80 žáků. Pozdě o pět minut přišlo 15 % z nich. Zbytek stál ve frontě včas.",
    prompt: "Kolik žáků přišlo pozdě? Napiš jen číslo.",
    friendlyHint: "15 % z 80.",
    accept: ["12"],
    explanation: "0,15 · 80 = 12. Past: 15, nebo 80 − 15 = 65, nebo 68 (včas).",
  },
  {
    id: 347,
    topic: "procenta",
    type: "open",
    workingText:
      "Krátký test v chemii trval 36 minut. Výpočet titrace zabral 9 minut. Zbytek byly otázky z teorie.",
    prompt: "Kolik procent testu zabral výpočet? Napiš jen číslo.",
    friendlyHint: "9 z 36.",
    accept: ["25"],
    explanation: "9 ÷ 36 = 0,25, tedy 25 %. Past: 9 %, nebo 36 − 9 = 27, nebo 9/36 zapsat jako 4.",
  },
  {
    id: 348,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové stojany do dílny dali 80 Kč. Učitel řekl, že to je přesně 16 % celé objednávky. Zbytek dojde z fondu školy.",
    prompt: "Kolik korun stojí celá objednávka? Napiš jen číslo.",
    friendlyHint: "80 je 16 setin celku.",
    accept: ["500"],
    explanation: "80 ÷ 0,16 = 500 Kč. Past: 80 · 0,16, nebo 80 + 16 = 96, nebo 80 · 16.",
  },
  {
    id: 349,
    topic: "procenta",
    type: "open",
    workingText:
      "Ve školní pokladně bylo 6 000 Kč. Nejdřív šlo 20 % na ceny do soutěže. Z toho, co zbylo, šlo ještě 10 % na diplomy. Ptají se, kolik zbývá.",
    prompt: "Kolik korun zbývá po obou výdajích? Napiš jen číslo.",
    friendlyHint: "Nejdřív 80 % z 6 000, z toho pak 90 %.",
    accept: ["4320", "4 320"],
    explanation:
      "Po prvním výdaji 4 800 Kč, po druhém 4 320 Kč. Past: 6 000 · 0,70 = 4 200 (sčítání 20 + 10), nebo 4 800.",
  },
  {
    id: 350,
    topic: "procenta",
    type: "open",
    workingText:
      "Mrkev stála 40 Kč/kg. Od pondělí zdražila o 25 %. Kuchařka kupuje 6 kg na polévku. Váha je přesná, jiné přirážky nejsou.",
    prompt: "Kolik korun zaplatí za těch 6 kg? Napiš jen číslo.",
    friendlyHint: "Nejdřív nová cena za kilogram, pak krát 6.",
    accept: ["300"],
    explanation: "Nová cena 50 Kč/kg, za 6 kg je 300 Kč. Past: 6 · 40 = 240, nebo 6 · 65, nebo 50.",
  },
  {
    id: 351,
    topic: "procenta",
    type: "open",
    workingText:
      "V planetáriu je 64 sedadel. Na školní představení obsadili 48 míst. Uváděč hlásí obsazenost v procentech, ne počet prázdných židlí.",
    prompt: "Na kolik procent byl sál obsazený? Napiš jen číslo.",
    friendlyHint: "48 z 64. Obojí jde dělit 16.",
    accept: ["75"],
    explanation: "48 ÷ 64 = 0,75, tedy 75 %. Past: 25 % (volná místa), nebo 48, nebo 64 − 48 = 16.",
  },
  {
    id: 352,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sada magnetů do fyziky stála 720 Kč. Dodavatel ji zdražil o 25 %. Krabice na polici má pořád starou cedulku.",
    prompt: "Kolik sada stojí teď?",
    options: ["900 Kč", "745 Kč", "540 Kč", "180 Kč"],
    correctIndex: 0,
    friendlyHint: "Čtvrtinu ze 720 přičti k 720.",
    explanation:
      "25 % ze 720 Kč je 180 Kč, nová cena 900 Kč. 745 Kč je 720 + 25. 540 Kč je sleva. 180 Kč je jen zdražení.",
  },
  {
    id: 353,
    topic: "procenta",
    type: "open",
    workingText:
      "Na autobus k botanické zahradě vybrali 54 Kč. Průvodce řekl, že to je přesně 18 % jízdného na žáka. Zbytek se platí v den odjezdu.",
    prompt: "Kolik korun je celé jízdné na žáka? Napiš jen číslo.",
    friendlyHint: "54 je 18 setin celku.",
    accept: ["300"],
    explanation: "54 ÷ 0,18 = 300 Kč. Past: 54 · 0,18, nebo 54 + 18 = 72, nebo 54 · 18.",
  },
  {
    id: 354,
    topic: "procenta",
    type: "mc",
    workingText:
      "Teleskop v bazaru stál 4 800 Kč. Nejdřív sleva 20 %. Pak ještě 15 % z už zlevněné ceny. Statív je v ceně.",
    prompt: "Kolik teleskop stojí po obou slevách?",
    options: ["3 264 Kč", "3 120 Kč", "3 840 Kč", "4 080 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 80 % ze 4 800, z toho pak 85 %.",
    explanation:
      "Po 20 % zbývá 3 840 Kč, po dalších 15 % zbývá 3 264 Kč. 3 120 Kč je past 35 % najednou. 3 840 Kč je jen první sleva. 4 080 Kč je 15 % z původku.",
  },
  {
    id: 355,
    topic: "procenta",
    type: "open",
    workingText:
      "Pěvecký sbor měl loni 36 členů. Letos jich je 45. Sbormistr srovnává letošek s loňskem.",
    prompt: "O kolik procent mají letos víc členů? Napiš jen číslo.",
    friendlyHint: "Rozdíl 9 vztahuj k loňským 36.",
    accept: ["25"],
    explanation:
      "9 ÷ 36 = 0,25, tedy o 25 % víc. Past: 9/45 = 20 % (špatný základ), nebo 9, nebo 45 − 36 zapsat jako 9 %.",
  },
  {
    id: 356,
    topic: "procenta",
    type: "mc",
    workingText:
      "Penzion E: noc 2 000 Kč, sleva pro školy 20 %. Penzion F: noc 1 800 Kč, sleva 10 %. Snídaně je v obou cenách, počítají jen noc.",
    prompt: "Které tvrzení platí?",
    options: [
      "V E zaplatí o 20 Kč méně než ve F.",
      "Ve F zaplatí o 20 Kč méně než v E.",
      "Oba penziony vyjdou stejně.",
      "V E zaplatí o 200 Kč méně než ve F.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 80 % z 2 000 a 90 % z 1 800.",
    explanation:
      "E: 1 600 Kč. F: 1 620 Kč. E je levnější o 20 Kč. 200 Kč je rozdíl původních cen. „Stejně“ je hrubý odhad.",
  },
  {
    id: 357,
    topic: "procenta",
    type: "open",
    workingText:
      "Laboratorní cvičení trvá 70 minut. Úvodní bezpečnost zabrala 21 minut. Zbytek žáci pipetovali.",
    prompt: "Kolik procent cvičení zabrala bezpečnost? Napiš jen číslo.",
    friendlyHint: "21 z 70.",
    accept: ["30"],
    explanation: "21 ÷ 70 = 0,30, tedy 30 %. Past: 21 %, nebo 70 − 21 = 49, nebo 21/70 zapsat jako 3.",
  },
  {
    id: 358,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na tabuli je číslo 800. Nejdřív ho zvětší o 20 %. Pak to nové číslo zmenší o 25 %. Ptají se, co zbude.",
    prompt: "Jaké číslo zbude na tabuli?",
    options: ["720", "800", "600", "960"],
    correctIndex: 0,
    friendlyHint: "800 · 1,20 · 0,75.",
    explanation:
      "Po zvětšení 960, po zmenšení 720. 800 je past zrušení. 600 je 800 − 25 %. 960 je jen první krok.",
  },
  {
    id: 359,
    topic: "procenta",
    type: "open",
    workingText:
      "Do terária nasypali 12 kg podestýlky. Podle návodu je 25 % kokosové vlákno a zbytek hobliny. Chovatel chce jen hmotnost vlákna.",
    prompt: "Kolik kilogramů vlákna je ve směsi? Napiš jen číslo.",
    friendlyHint: "Čtvrtina z 12.",
    accept: ["3"],
    explanation: "0,25 · 12 = 3 kg. Past: 25, nebo 12 − 25, nebo 9 (zbytek).",
  },
  {
    id: 360,
    topic: "procenta",
    type: "mc",
    workingText:
      "Číslo 60 zvětšili o 50 %. Jeden žák říká, že výsledek je 90. Druhý 110. Třetí 30. Čtvrtý 50.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Nové číslo je 90.",
      "Nové číslo je 110.",
      "Nové číslo je 30.",
      "Nové číslo je 50.",
    ],
    correctIndex: 0,
    friendlyHint: "Polovinu z 60 přičti k 60.",
    explanation: "50 % z 60 je 30, nové číslo 90. 110 je 60 + 50. 30 je jen přírůstek. 50 je záměna procent.",
  },
  {
    id: 361,
    topic: "procenta",
    type: "open",
    workingText:
      "Faktura za dataprojektor ukazuje 3 630 Kč včetně DPH 21 %. Cena bez daně chybí. Účetní ji dopočítává z částky s daní.",
    prompt: "Jaká byla cena bez DPH? Napiš jen číslo.",
    friendlyHint: "3 630 je 121 % základu. Základ = 3 630 ÷ 1,21.",
    accept: ["3000", "3 000"],
    explanation: "3 630 ÷ 1,21 = 3 000 Kč. Past: 3 630 − 21, nebo 3 630 · 0,21, nebo 3 630 − 363.",
  },
  {
    id: 362,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sada atlasů stála 3 600 Kč. Před inventurou ji zlevnili o 15 %. Pokladna slevu bere z původní ceny.",
    prompt: "Kolik sada stojí po slevě?",
    options: ["3 060 Kč", "3 585 Kč", "3 240 Kč", "540 Kč"],
    correctIndex: 0,
    friendlyHint: "Zbývá 85 % z 3 600.",
    explanation:
      "15 % z 3 600 Kč je 540 Kč, nová cena 3 060 Kč. 3 585 Kč je 3 600 − 15. 3 240 Kč je 10 % z původku. 540 Kč je jen výše slevy.",
  },
  {
    id: 363,
    topic: "procenta",
    type: "open",
    workingText:
      "V 7.C je 40 žáků. Do školního sboru se přihlásilo 35 % třídy. Zbytek má v tu dobu tělocvik.",
    prompt: "Kolik žáků jde do sboru? Napiš jen číslo.",
    friendlyHint: "35 % ze 40.",
    accept: ["14"],
    explanation: "0,35 · 40 = 14. Past: 35, nebo 40 − 35 = 5, nebo 26 (zbytek).",
  },
  {
    id: 364,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cena vstupenky na hvězdárnu byla 1 600 Kč. Nejdřív ji zdražili o 25 %. Pak dali slevu 20 % z už nové ceny. Pokladna změny skládá.",
    prompt: "Jaká je cena po obou změnách?",
    options: ["1 600 Kč", "2 000 Kč", "1 280 Kč", "1 920 Kč"],
    correctIndex: 0,
    friendlyHint: "1 600 · 1,25 · 0,80.",
    explanation:
      "Po zdražení 2 000 Kč, po slevě zase 1 600 Kč. 2 000 Kč je jen první krok. 1 280 Kč je 1 600 − 20 %. 1 920 Kč je 1 600 + 320.",
  },
  {
    id: 365,
    topic: "procenta",
    type: "open",
    workingText:
      "Do skladu dovezli 40 kg červené řepy. Skladník vyřadil 20 % jako scvrklé. Zbytek jde do školní kuchyně. Ptají se, kolik kilogramů ještě zbývá k jídlu.",
    prompt: "Kolik kilogramů řepy je ještě dobrých? Napiš jen číslo.",
    friendlyHint: "Zbývá 80 % ze 40.",
    accept: ["32"],
    explanation: "0,80 · 40 = 32 kg. Past: 8 (vyřazené), nebo 20, nebo 40 − 20 = 20.",
  },
  {
    id: 366,
    topic: "procenta",
    type: "mc",
    workingText:
      "Obchod G: jablka 80 Kč/kg, sleva 25 %. Obchod H: jablka 70 Kč/kg, sleva 10 %. Rodina porovnává cenu za 1 kg.",
    prompt: "Které tvrzení platí?",
    options: [
      "V G zaplatí o 3 Kč/kg méně než v H.",
      "V H zaplatí o 3 Kč/kg méně než v G.",
      "Oba obchody vyjdou stejně.",
      "V G zaplatí o 10 Kč/kg méně než v H.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 75 % z 80 a 90 % ze 70.",
    explanation:
      "G: 60 Kč/kg. H: 63 Kč/kg. G je levnější o 3 Kč. 10 Kč je rozdíl původních cen. „Stejně“ je hrubý odhad.",
  },
  {
    id: 367,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové noty pro orchestr vybrali 72 Kč. Dirigent řekl, že to je přesně 24 % potřebné částky. Zbytek se vybere příští zkoušku.",
    prompt: "Kolik korun je celá potřebná částka? Napiš jen číslo.",
    friendlyHint: "72 je 24 setin celku.",
    accept: ["300"],
    explanation: "72 ÷ 0,24 = 300 Kč. Past: 72 · 0,24, nebo 72 + 24 = 96, nebo 72 · 24.",
  },
  {
    id: 368,
    topic: "procenta",
    type: "mc",
    workingText:
      "Keramická pec stála 4 500 Kč. Nejdřív sleva 30 %. Pak ještě 10 % z už zlevněné ceny. Dovážka je zdarma.",
    prompt: "Kolik pec stojí teď?",
    options: ["2 835 Kč", "2 700 Kč", "3 150 Kč", "4 050 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 70 % ze 4 500, z toho pak 90 %.",
    explanation:
      "Po 30 % zbývá 3 150 Kč, po dalších 10 % zbývá 2 835 Kč. 2 700 Kč je past 40 % najednou. 3 150 Kč je jen první sleva. 4 050 Kč je jen 10 % z původku.",
  },
  {
    id: 369,
    topic: "procenta",
    type: "open",
    workingText:
      "Sběr papíru v listopadu vynesl 120 kg. V prosinci 150 kg. Školník srovnává prosinec s listopadem.",
    prompt: "O kolik procent nasbírali v prosinci víc? Napiš jen číslo.",
    friendlyHint: "Rozdíl 30 kg vztahuj k listopadovým 120 kg.",
    accept: ["25"],
    explanation:
      "30 ÷ 120 = 0,25, tedy o 25 % víc. Past: 30/150 = 20 % (špatný základ), nebo 30, nebo 150 − 120 zapsat jako 30 %.",
  },
  {
    id: 370,
    topic: "procenta",
    type: "mc",
    workingText:
      "Laboratorní lampa stojí 1 400 Kč bez DPH. DPH je 21 %. Účetní chce cenu včetně daně.",
    prompt: "Kolik stojí lampa včetně DPH?",
    options: ["1 694 Kč", "1 421 Kč", "1 379 Kč", "294 Kč"],
    correctIndex: 0,
    friendlyHint: "21 % z 1 400 přičti k 1 400.",
    explanation:
      "21 % z 1 400 Kč je 294 Kč, s daní 1 694 Kč. 1 421 Kč je 1 400 + 21. 1 379 Kč je 1 400 − 21. 294 Kč je jen daň.",
  },
  {
    id: 371,
    topic: "procenta",
    type: "open",
    workingText:
      "Trénink florbalu trvá 75 minut. Rozehřátí zabralo 15 minut. Zbytek hráli na dvě branky.",
    prompt: "Kolik procent tréninku zabralo rozehřátí? Napiš jen číslo.",
    friendlyHint: "15 z 75.",
    accept: ["20"],
    explanation: "15 ÷ 75 = 0,20, tedy 20 %. Past: 15 %, nebo 75 − 15 = 60, nebo 15/75 zapsat jako 5.",
  },
  {
    id: 372,
    topic: "procenta",
    type: "mc",
    workingText:
      "V 10 kg betonové směsi do dílny je 40 % cementu a zbytek písek. Čtyři žáci zapsali čtyři hmotnosti cementu.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Cementu je 4 kg.",
      "Cementu je 4,4 kg.",
      "Cementu je 6 kg.",
      "Cementu je 40 kg.",
    ],
    correctIndex: 0,
    friendlyHint: "40 % z 10 kg.",
    explanation: "0,40 · 10 = 4 kg. 4,4 kg je 10 · 0,44. 6 kg je zbytek. 40 kg je záměna čísla 40.",
  },
  {
    id: 373,
    topic: "procenta",
    type: "open",
    workingText:
      "Ve fondu výletu bylo 8 000 Kč. Nejdřív šlo 15 % na zálohu za bus. Z toho, co zbylo, šlo ještě 20 % na pojištění. Ptají se, kolik zbývá.",
    prompt: "Kolik korun zbývá po obou platbách? Napiš jen číslo.",
    friendlyHint: "Nejdřív 85 % z 8 000, z toho pak 80 %.",
    accept: ["5440", "5 440"],
    explanation:
      "Po záloze 6 800 Kč, po pojištění 5 440 Kč. Past: 8 000 · 0,65 = 5 200 (sčítání 15 + 20), nebo 6 800.",
  },
  {
    id: 374,
    topic: "procenta",
    type: "mc",
    workingText:
      "Měsíční karta do plaveckého bazénu stojí 100 Kč. Správa chce zdražit o 10 % teď a za měsíc zase o 10 % z nové ceny. Plavčík říká, že to bude 120 Kč, „protože 10 + 10 je 20“.",
    prompt: "Které tvrzení platí?",
    options: [
      "Po obou zdraženích bude karta stát 121 Kč.",
      "Po obou zdraženích bude karta stát 120 Kč.",
      "Po obou zdraženích bude karta stát 110 Kč.",
      "Po obou zdraženích bude karta stát 100 Kč.",
    ],
    correctIndex: 0,
    friendlyHint: "100 · 1,10 · 1,10.",
    explanation:
      "Po prvním zdražení 110 Kč, po druhém 121 Kč. 120 Kč je past sčítání procent. 110 Kč je jen jedno zdražení.",
  },
  {
    id: 375,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové stojany do knihovny dali 96 Kč. Knihovnice řekla, že to je přesně 32 % objednávky. Zbytek dojde z rozpočtu školy.",
    prompt: "Kolik korun stojí celá objednávka? Napiš jen číslo.",
    friendlyHint: "96 je 32 setin celku.",
    accept: ["300"],
    explanation: "96 ÷ 0,32 = 300 Kč. Past: 96 · 0,32, nebo 96 + 32 = 128, nebo 96 · 32.",
  },
  {
    id: 376,
    topic: "procenta",
    type: "mc",
    workingText:
      "Třešně stály 64 Kč/kg. V sobotu na ně dali slevu 25 %. Rodina kupuje právě 5 kg. Váha je přesná.",
    prompt: "Kolik zaplatí za ta 5 kg?",
    options: ["240 Kč", "320 Kč", "192 Kč", "80 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív nová cena za kilogram, pak krát 5.",
    explanation:
      "Nová cena 48 Kč/kg, za 5 kg je 240 Kč. 320 Kč je bez slevy. 192 Kč je 4 · 48. 80 Kč je jen sleva ze 320.",
  },
  {
    id: 377,
    topic: "procenta",
    type: "open",
    workingText:
      "V kroužku fotografů je 24 dětí. Na výstavu do města jde 18 z nich. Zbytek dokončuje zvětšeniny ve škole.",
    prompt: "Kolik procent dětí jde na výstavu? Napiš jen číslo.",
    friendlyHint: "18 z 24. Obojí jde dělit 6.",
    accept: ["75"],
    explanation: "18 ÷ 24 = 0,75, tedy 75 %. Past: 18 %, nebo 24 − 18 = 6, nebo 25 (ti, co nejdou).",
  },
  {
    id: 378,
    topic: "procenta",
    type: "mc",
    workingText:
      "Skříň do kabinetu stála 2 000 Kč. Nejdřív sleva 10 %. Pak ještě 20 % z už zlevněné ceny. Montáž je v ceně.",
    prompt: "Kolik skříň stojí teď?",
    options: ["1 440 Kč", "1 400 Kč", "1 800 Kč", "1 600 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 90 % z 2 000, z toho pak 80 %.",
    explanation:
      "Po 10 % zbývá 1 800 Kč, po dalších 20 % zbývá 1 440 Kč. 1 400 Kč je past 30 % najednou. 1 800 Kč je jen první sleva. 1 600 Kč je 20 % z původku.",
  },
  {
    id: 379,
    topic: "procenta",
    type: "open",
    workingText:
      "Na spořicím účtu kroužku leží 6 000 Kč. Banka připíše jednoduchý úrok 4 % za rok. Pokladník chce jen výši úroku, ne nový zůstatek.",
    prompt: "Kolik korun přibude za jeden rok? Napiš jen číslo.",
    friendlyHint: "4 % z 6 000.",
    accept: ["240"],
    explanation: "0,04 · 6 000 = 240 Kč. Past: zapsat 6 240 (zůstatek), nebo 4, nebo 6 000 · 4.",
  },
  {
    id: 380,
    topic: "procenta",
    type: "mc",
    workingText:
      "V květnu prodali 80 vstupenek na školní jarmark. V červnu jen 64. Srovnávají červen s květnem: o kolik procent méně.",
    prompt: "O kolik procent bylo červnových vstupenek méně?",
    options: ["20 %", "25 %", "16 %", "80 %"],
    correctIndex: 0,
    friendlyHint: "Úbytek 16 vztahuj ke květnovým 80.",
    explanation:
      "16 ÷ 80 = 0,20, tedy o 20 % méně. 25 % je 16/64 (špatný základ). 16 % je zapsaný rozdíl. 80 % je podíl června.",
  },
  {
    id: 381,
    topic: "procenta",
    type: "open",
    workingText:
      "Konev hnojiva má 3,5 litru. Podle návodu je 40 % objemu koncentrát a zbytek voda. Na ceduli chtějí jen objem koncentrátu.",
    prompt: "Kolik litrů koncentrátu je v konvi? Napiš jen číslo.",
    friendlyHint: "40 % z 3,5 je totéž jako 0,4 · 3,5.",
    accept: ["1.4", "1,4"],
    explanation: "0,40 · 3,5 = 1,4 litru. Past: 0,4 l, nebo 3,5 − 0,4 = 3,1, nebo 40.",
  },
  {
    id: 382,
    topic: "procenta",
    type: "mc",
    workingText:
      "Po slevě 25 % stojí sada paliček 900 Kč. Pokladní se ptá na původní cenu, ne na výši slevy.",
    prompt: "Jaká byla původní cena?",
    options: ["1 200 Kč", "1 125 Kč", "675 Kč", "925 Kč"],
    correctIndex: 0,
    friendlyHint: "900 je 75 % původku. Původek = 900 ÷ 0,75.",
    explanation:
      "900 ÷ 0,75 = 1 200 Kč. 1 125 Kč je 900 + 25 %. 675 Kč je dalších 25 % sleva. 925 Kč je 900 + 25.",
  },
  {
    id: 383,
    topic: "procenta",
    type: "open",
    workingText:
      "Dvouhodinovka dějepisu trvá 90 minut. Práce s mapou zabrala 27 minut. Zbytek byl výklad a zápis.",
    prompt: "Kolik procent dvouhodinovky zabrala práce s mapou? Napiš jen číslo.",
    friendlyHint: "27 z 90.",
    accept: ["30"],
    explanation: "27 ÷ 90 = 0,30, tedy 30 %. Past: 27 %, nebo 90 − 27 = 63, nebo 27/90 zapsat jako 3.",
  },
  {
    id: 384,
    topic: "procenta",
    type: "mc",
    workingText:
      "Obchod J: stan 2 400 Kč, sleva 25 %. Obchod K: stan 2 100 Kč, sleva 10 %. Stany jsou srovnatelné, počítají jen cenu.",
    prompt: "Které tvrzení platí?",
    options: [
      "V J zaplatí o 90 Kč méně než v K.",
      "V K zaplatí o 90 Kč méně než v J.",
      "Oba obchody vyjdou stejně.",
      "V J zaplatí o 300 Kč méně než v K.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 75 % z 2 400 a 90 % z 2 100.",
    explanation:
      "J: 1 800 Kč. K: 1 890 Kč. J je levnější o 90 Kč. 300 Kč je rozdíl původních cen. „Stejně“ je hrubý odhad.",
  },
  {
    id: 385,
    topic: "procenta",
    type: "open",
    workingText:
      "V 6.B je 25 žáků. Na odpolední dílnu smaltu jde 15 z nich. Zbytek má běžné vyučování.",
    prompt: "Kolik procent třídy jde na dílnu? Napiš jen číslo.",
    friendlyHint: "15 z 25.",
    accept: ["60"],
    explanation: "15 ÷ 25 = 0,60, tedy 60 %. Past: 15 %, nebo 25 − 15 = 10, nebo 40 (ti, co nejdou).",
  },
  {
    id: 386,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sada zkumavek stojí 400 Kč bez DPH. DPH je 21 %. Účetní chce cenu včetně daně.",
    prompt: "Kolik stojí sada včetně DPH?",
    options: ["484 Kč", "421 Kč", "379 Kč", "84 Kč"],
    correctIndex: 0,
    friendlyHint: "21 % ze 400 přičti ke 400.",
    explanation:
      "21 % ze 400 Kč je 84 Kč, s daní 484 Kč. 421 Kč je 400 + 21. 379 Kč je 400 − 21. 84 Kč je jen daň.",
  },
  {
    id: 387,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové pálky do tělocviku vybrali 42 Kč. Tělocvikář řekl, že to je přesně 12 % ceny. Zbytek doplatí z fondu TV.",
    prompt: "Kolik korun stojí pálky? Napiš jen číslo.",
    friendlyHint: "42 je 12 setin celku.",
    accept: ["350"],
    explanation: "42 ÷ 0,12 = 350 Kč. Past: 42 · 0,12, nebo 42 + 12 = 54, nebo 42 · 12.",
  },
  {
    id: 388,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na tabuli je číslo 400. Nejdřív ho zvětší o 25 %. Pak to nové číslo zmenší o 20 %. Ptají se, co zbude.",
    prompt: "Jaké číslo zbude na tabuli?",
    options: ["400", "500", "320", "480"],
    correctIndex: 0,
    friendlyHint: "400 · 1,25 · 0,80.",
    explanation:
      "Po zvětšení 500, po zmenšení 400. 500 je jen první krok. 320 je 400 − 20 %. 480 je 400 + 80.",
  },
  {
    id: 389,
    topic: "procenta",
    type: "open",
    workingText:
      "Na váze leží 55 kg dýní a cuket dohromady. Do kuchyně šlo 33 kg. Zbytek zůstává ve sklepě.",
    prompt: "Kolik procent zeleniny šlo do kuchyně? Napiš jen číslo.",
    friendlyHint: "33 z 55. Obojí jde dělit 11.",
    accept: ["60"],
    explanation: "33 ÷ 55 = 0,60, tedy 60 %. Past: 33 %, nebo 55 − 33 = 22, nebo 40 (sklep).",
  },
  {
    id: 390,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sešit stojí 90 Kč. Nabídka L: tři sešity za cenu dvou. Nabídka M: sleva 40 % na každý sešit. Počítají cenu za tři sešity.",
    prompt: "Které tvrzení platí?",
    options: [
      "Nabídka M vyjde o 18 Kč levněji než L.",
      "Nabídka L vyjde o 18 Kč levněji než M.",
      "Obě nabídky vyjdou stejně.",
      "Nabídka M vyjde o 90 Kč levněji než L.",
    ],
    correctIndex: 0,
    friendlyHint: "L: zaplatíš 180 Kč za 3 kusy. M: 60 % ze 270.",
    explanation:
      "L: 180 Kč. M: 0,60 · 270 = 162 Kč. M je levnější o 18 Kč. 90 Kč je cena jednoho sešitu. „Stejně“ je hrubý odhad.",
  },
  {
    id: 391,
    topic: "procenta",
    type: "open",
    workingText:
      "Účet za školní výlet na observatoř je 2 400 Kč. Průvodce si účtuje servis 12,5 % z této částky. Poplatek platí zvlášť.",
    prompt: "Kolik korun je servisní poplatek? Napiš jen číslo.",
    friendlyHint: "12,5 % je osmina. Osmina z 2 400.",
    accept: ["300"],
    explanation: "0,125 · 2 400 = 300 Kč. Past: 240 (10 %), nebo 2 400 · 12,5, nebo 12,5.",
  },
  {
    id: 392,
    topic: "procenta",
    type: "mc",
    workingText:
      "Bubínek do orchestru stál 2 200 Kč. Nejdřív sleva 20 %. Pak ještě 10 % z už zlevněné ceny. Palice jsou v ceně.",
    prompt: "Kolik bubínek stojí po obou slevách?",
    options: ["1 584 Kč", "1 540 Kč", "1 760 Kč", "1 980 Kč"],
    correctIndex: 0,
    friendlyHint: "2 200 · 0,80 · 0,90.",
    explanation:
      "Po 20 % zbývá 1 760 Kč, po dalších 10 % zbývá 1 584 Kč. 1 540 Kč je past 30 % najednou. 1 760 Kč je jen první sleva. 1 980 Kč je jen 10 % z původku.",
  },
  {
    id: 393,
    topic: "procenta",
    type: "open",
    workingText:
      "Klub deskových her měl v září 32 večerů. V říjnu jich bylo 40. Vedoucí srovnává říjen se zářím.",
    prompt: "O kolik procent měli v říjnu víc večerů? Napiš jen číslo.",
    friendlyHint: "Rozdíl 8 vztahuj k zářijovým 32.",
    accept: ["25"],
    explanation:
      "8 ÷ 32 = 0,25, tedy o 25 % víc. Past: 8/40 = 20 % (špatný základ), nebo 8, nebo 40 − 32 zapsat jako 8 %.",
  },
  {
    id: 394,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cena kompasu 80 Kč klesla o 25 % a pak stoupla o 20 % z nové ceny. Čtyři žáci napsali čtyři závěry.",
    prompt: "Které tvrzení platí?",
    options: [
      "Kompas teď stojí 72 Kč.",
      "Kompas zase stojí 80 Kč.",
      "Kompas teď stojí 60 Kč.",
      "Kompas teď stojí 96 Kč.",
    ],
    correctIndex: 0,
    friendlyHint: "80 · 0,75 · 1,20.",
    explanation:
      "Po slevě 60 Kč, po zdražení 72 Kč. 80 Kč je past zrušení. 60 Kč je jen první krok. 96 Kč je 80 + 20 %.",
  },
  {
    id: 395,
    topic: "procenta",
    type: "open",
    workingText:
      "Do krmné směsi pro holuby namíchali 20 kg zrna. Podle receptu je 15 % hrách a zbytek pšenice. Chovatel chce jen hmotnost hrachu.",
    prompt: "Kolik kilogramů hrachu je ve směsi? Napiš jen číslo.",
    friendlyHint: "15 % z 20.",
    accept: ["3"],
    explanation: "0,15 · 20 = 3 kg. Past: 15, nebo 17 (zbytek), nebo 20 − 15 = 5.",
  },
  {
    id: 396,
    topic: "procenta",
    type: "open",
    workingText:
      "Na školní akademii bylo 60 žáků. Techniku zvuku zajišťovalo 20 % z nich. Zbytek vystupoval na jevišti.",
    prompt: "Kolik žáků zajišťovalo techniku? Napiš jen číslo.",
    friendlyHint: "20 % z 60.",
    accept: ["12"],
    explanation: "0,20 · 60 = 12. Past: 20, nebo 60 − 20 = 40, nebo 48 (jeviště).",
  },
  {
    id: 397,
    topic: "procenta",
    type: "open",
    workingText:
      "Krátký test z fyziky trval 48 minut. Pokus s kyvadlem zabral 12 minut. Zbytek byly početní úlohy.",
    prompt: "Kolik procent testu zabral pokus? Napiš jen číslo.",
    friendlyHint: "12 z 48.",
    accept: ["25"],
    explanation: "12 ÷ 48 = 0,25, tedy 25 %. Past: 12 %, nebo 48 − 12 = 36, nebo 12/48 zapsat jako 4.",
  },
  {
    id: 398,
    topic: "procenta",
    type: "open",
    workingText:
      "Na nové dalekohledy dali 105 Kč. Učitelka řekla, že to je přesně 15 % objednávky. Zbytek dojde z fondu přírodopisu.",
    prompt: "Kolik korun stojí celá objednávka? Napiš jen číslo.",
    friendlyHint: "105 je 15 setin celku.",
    accept: ["700"],
    explanation: "105 ÷ 0,15 = 700 Kč. Past: 105 · 0,15, nebo 105 + 15 = 120, nebo 105 · 15.",
  },
  {
    id: 399,
    topic: "procenta",
    type: "open",
    workingText:
      "Ve fondu školy bylo 10 000 Kč. Nejdřív šlo 25 % na opravu skleníku. Z toho, co zbylo, šlo ještě 20 % na nové truhlíky. Ptají se, kolik zbývá.",
    prompt: "Kolik korun zbývá po obou výdajích? Napiš jen číslo.",
    friendlyHint: "Nejdřív 75 % z 10 000, z toho pak 80 %.",
    accept: ["6000", "6 000"],
    explanation:
      "Po opravě 7 500 Kč, po truhlících 6 000 Kč. Past: 10 000 · 0,55 = 5 500 (sčítání 25 + 20), nebo 7 500.",
  },
  {
    id: 400,
    topic: "procenta",
    type: "open",
    workingText:
      "Cibule stála 80 Kč/kg. Od úterý zdražila o 10 %. Kuchařka kupuje 5 kg na guláš. Váha je přesná, jiné přirážky nejsou.",
    prompt: "Kolik korun zaplatí za těch 5 kg? Napiš jen číslo.",
    friendlyHint: "Nejdřív nová cena za kilogram, pak krát 5.",
    accept: ["440"],
    explanation: "Nová cena 88 Kč/kg, za 5 kg je 440 Kč. Past: 5 · 80 = 400, nebo 5 · 90 = 450, nebo 88.",
  },
];
