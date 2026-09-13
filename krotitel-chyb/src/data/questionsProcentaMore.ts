import type { QuizQuestion } from "@/lib/types";

export const QUESTIONS_PROCENTA_MORE: QuizQuestion[] = [
  {
    id: 51,
    topic: "procenta",
    type: "open",
    workingText:
      "Po zápase prali ve školní prádelně 60 dresů. Ostřikem z hřiště bylo ušpiněných 18 dresů, ostatní stačilo jen osvěžit. Vedoucí evidence chce podíl špinavých dresů.",
    prompt: "Kolik procent dresů bylo ušpiněných? Napiš jen číslo.",
    friendlyHint: "18 z 60. Nejdřív zkrať zlomkem.",
    accept: ["30"],
    explanation:
      "18 ÷ 60 = 0,30, tedy 30 %. Past: 18 %, nebo 60 − 18 = 42, nebo 18/60 zapsat jako 3.",
  },
  {
    id: 52,
    topic: "procenta",
    type: "mc",
    workingText:
      "Jízdenka na MHD stála 16 Kč. Od nového jízdního řádu ji dopravní podnik zdražil o 25 %. Přestupní doba zůstala stejná, mění se jen cena.",
    prompt: "Kolik stojí jízdenka teď?",
    options: ["20 Kč", "21 Kč", "12 Kč", "41 Kč"],
    correctIndex: 0,
    friendlyHint: "Čtvrtinu z 16 přičti k 16.",
    explanation:
      "25 % z 16 Kč je 4 Kč, nová cena 20 Kč. 21 Kč je 16 + 5. 12 Kč je sleva místo zdražení. 41 Kč je 16 + 25.",
  },
  {
    id: 53,
    topic: "procenta",
    type: "open",
    workingText:
      "Z kapesného šlo na školní charitu 24 Kč. Babička řekla, že to je přesně 8 % celého týdenního kapesného. Zbytek si nechal na obědy.",
    prompt: "Kolik korun je celé týdenní kapesné? Napiš jen číslo.",
    friendlyHint: "24 je 8 setin celku.",
    accept: ["300"],
    explanation:
      "24 ÷ 0,08 = 300 Kč. Past: 24 · 0,08 = 1,92, nebo 24 + 8 = 32, nebo 24 · 8 = 192.",
  },
  {
    id: 54,
    topic: "procenta",
    type: "mc",
    workingText:
      "Kabát v obchodě stál 2 500 Kč. Na páteční akci ho zlevnili o 20 %. V sobotu ráno visela další cedule: ještě 10 % z už zlevněné ceny. Pokladna slevy skládá.",
    prompt: "Kolik kabát stojí po obou slevách?",
    options: ["1 750 Kč", "1 800 Kč", "2 000 Kč", "2 250 Kč"],
    correctIndex: 1,
    friendlyHint: "Nejdřív 80 % z 2 500, z toho výsledku pak 90 %.",
    explanation:
      "Po první slevě 2 000 Kč, po druhé 1 800 Kč. 1 750 Kč je past jedné slevy 30 %. 2 000 Kč je jen pátek. 2 250 Kč je jen 10 % z původku.",
  },
  {
    id: 55,
    topic: "procenta",
    type: "open",
    workingText:
      "Útočník dal loni 16 gólů. Letos jich má 20 a sezona ještě neskončila, ale statistiku už srovnávají. Trenér se ptá, o kolik procent má letos víc gólů než loni.",
    prompt: "O kolik procent dal letos víc gólů? Napiš jen číslo.",
    friendlyHint: "Rozdíl 4 góly vztahuj k loňským 16.",
    accept: ["25"],
    explanation:
      "4 ÷ 16 = 0,25, tedy o 25 % víc. Past: 4/20 = 20 % (špatný základ), nebo 4, nebo 20 − 16 = 4 zapsat jako 4 %.",
  },
  {
    id: 56,
    topic: "procenta",
    type: "mc",
    workingText:
      "Půjčovna lyží A: den 2 000 Kč, nováčkovská sleva 30 %. Půjčovna B: den 1 600 Kč, sleva 10 %. Výbava je srovnatelná, počítají jen cenu za den.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A zaplatí o 40 Kč méně než v B.",
      "V B zaplatí o 40 Kč méně než v A.",
      "Obě půjčovny vyjdou stejně.",
      "V A zaplatí o 400 Kč méně než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej 70 % z 2 000 a 90 % z 1 600.",
    explanation:
      "A: 1 400 Kč. B: 1 440 Kč. A je levnější o 40 Kč. 400 Kč je rozdíl původních cen. „Stejně“ vznikne hrubým odhadem.",
  },
  {
    id: 57,
    topic: "procenta",
    type: "open",
    workingText:
      "Mládežnický zápas se hraje 80 minut čistého času. Rozhodčí měl přerušení dohromady 16 minut (ošetření, diskuze). Zbytek se opravdu hrálo.",
    prompt: "Kolik procent hrací doby spolykala přerušení? Napiš jen číslo.",
    friendlyHint: "16 z 80.",
    accept: ["20"],
    explanation:
      "16 ÷ 80 = 0,20, tedy 20 %. Past: 16 %, nebo 80 − 16 = 64, nebo 16/80 zapsat jako 5.",
  },
  {
    id: 58,
    topic: "procenta",
    type: "mc",
    workingText:
      "Notebook stál 16 000 Kč. Nejdřív ho zlevnili o 25 %. O týden později ještě o 20 % z už nové ceny. Doprava je zdarma, jiné slevy nejsou.",
    prompt: "Kolik notebook stojí teď?",
    options: ["9 600 Kč", "8 000 Kč", "12 000 Kč", "11 200 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív tři čtvrtiny z 16 000, z toho pak čtyři pětiny.",
    explanation:
      "Po 25 % zbývá 12 000 Kč, po dalších 20 % zbývá 9 600 Kč. 8 000 Kč je past jedné slevy 50 %. 12 000 Kč je jen první sleva. 11 200 Kč je 30 % z 16 000 najednou.",
  },
  {
    id: 59,
    topic: "procenta",
    type: "open",
    workingText:
      "Džbán limonády má 2,5 litru. Podle receptu je 40 % objemu pomerančový džus a zbytek perlivá voda. Na táborové nástěnce chtějí jen objem džusu.",
    prompt: "Kolik litrů džusu je ve džbánu? Napiš jen číslo.",
    friendlyHint: "40 % z 2,5 je totéž jako 0,4 · 2,5.",
    accept: ["1"],
    explanation:
      "0,40 · 2,5 = 1 litr. Past: 0,4 l, nebo 2,5 − 0,4 = 2,1, nebo 40.",
  },
  {
    id: 60,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cena obědu ve školní jídelně je 100 Kč. Vedoucí chce zdražit o 10 % teď a za měsíc zase o 10 % z nové ceny. Kuchařka říká, že to bude 120 Kč, „protože 10 + 10 je 20“.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Po obou zdraženích bude oběd stát 120 Kč.",
      "Po obou zdraženích bude oběd stát 121 Kč.",
      "Po obou zdraženích bude oběd stát 110 Kč.",
      "Po obou zdraženích bude oběd stát 100 Kč.",
    ],
    correctIndex: 1,
    friendlyHint: "100 · 1,10 · 1,10.",
    explanation:
      "Po prvním zdražení 110 Kč, po druhém 121 Kč. 120 Kč je past sčítání procent. 110 Kč je jen jedno zdražení.",
  },
  {
    id: 61,
    topic: "procenta",
    type: "open",
    workingText:
      "Na vkladní knížce leží 2 500 Kč. Banka připíše jednoduchý úrok 6 % za rok a nic neskládá. Babička se ptá, kolik korun za ten rok přibude, ne kolik tam bude celkem.",
    prompt: "Kolik korun přibude za jeden rok? Napiš jen číslo.",
    friendlyHint: "6 % z 2 500.",
    accept: ["150"],
    explanation:
      "0,06 · 2 500 = 150 Kč. Past: zapsat 2 650 (zůstatek), nebo 6, nebo 2 500 · 6 = 15 000.",
  },
  {
    id: 62,
    topic: "procenta",
    type: "open",
    workingText:
      "Kino má sál na 180 míst. Na odpolední představení přišlo 135 lidí. Pokladní hlásí, z kolika procent byl sál plný, ne kolik židlí zelo prázdnem.",
    prompt: "Na kolik procent byl sál obsazený? Napiš jen číslo.",
    friendlyHint: "135 z 180. Obojí jde dělit 45.",
    accept: ["75"],
    explanation:
      "135 ÷ 180 = 0,75, tedy 75 %. Past: 25 % (volná místa), nebo 135, nebo 180 − 135 = 45.",
  },
  {
    id: 63,
    topic: "procenta",
    type: "mc",
    workingText:
      "Skateboard po slevě 30 % stojí 560 Kč. Původní cena z výlohy zmizela. Prodavač říká jen „třicet procent dolů“ a ukazuje na 560 Kč na kase.",
    prompt: "Jaká byla původní cena?",
    options: ["800 Kč", "590 Kč", "728 Kč", "392 Kč"],
    correctIndex: 0,
    friendlyHint: "560 Kč je 70 % původní ceny.",
    explanation:
      "560 ÷ 0,70 = 800 Kč. 590 Kč je 560 + 30. 728 Kč je 560 · 1,30 (přičetli 30 % k nové ceně). 392 Kč je 70 % z 560.",
  },
  {
    id: 64,
    topic: "procenta",
    type: "open",
    workingText:
      "Desková hra stála 800 Kč. V pátek sleva 25 %, v sobotu další sleva 20 % z už zlevněné ceny. Kamarádi ji berou v sobotu odpoledne.",
    prompt: "Kolik korun za hru zaplatí? Napiš jen číslo.",
    friendlyHint: "Po pátku zbývá 600 Kč. Z nich ještě 80 %.",
    accept: ["480"],
    explanation:
      "800 · 0,75 = 600, 600 · 0,80 = 480 Kč. Past: 45 % najednou → 440 Kč, nebo 800 − 25 − 20 = 755, nebo 600 Kč (jen první sleva).",
  },
  {
    id: 65,
    topic: "procenta",
    type: "mc",
    workingText:
      "Aplikaci si v pondělí stáhlo 50 lidí. V úterý jen 40 lidí. Vývojář píše do chatu, o kolik procent úterní stažení klesla proti pondělku.",
    prompt: "O kolik procent bylo úterních stažení méně?",
    options: ["20 %", "25 %", "10 %", "80 %"],
    correctIndex: 0,
    friendlyHint: "Úbytek 10 vztahuj k pondělním 50.",
    explanation:
      "10 ÷ 50 = 20 %. 25 % je past 10/40. 10 % zamění kusy za procenta. 80 % je 40/50 (podíl úterka, ne o kolik méně).",
  },
  {
    id: 66,
    topic: "procenta",
    type: "open",
    workingText:
      "V kroužku robotiky je 24 dětí. Chlapci a dívky jsou v poměru 5 : 3. Vedoucí chce na přihlášku napsat, kolik procent kroužku tvoří chlapci.",
    prompt: "Kolik procent dětí v kroužku jsou chlapci? Napiš jen číslo.",
    friendlyHint: "Nejdřív počet chlapců z poměru, pak procenta z 24.",
    accept: ["62.5", "62,5"],
    explanation:
      "5 + 3 = 8 dílů, jeden díl jsou 3 děti, chlapci 15. 15 ÷ 24 = 0,625, tedy 62,5 %. Past: 5/8 = 62,5 zapsat jako 5, nebo dívky 37,5 %, nebo 5/3 ≈ 167 %.",
  },
  {
    id: 67,
    topic: "procenta",
    type: "mc",
    workingText:
      "Dva příklady v testu: 25 % ze 120 korun a 20 % ze 160 korun. Honza křičí, že 25 % musí vyjít víc. Petra počítá obě částky.",
    prompt: "Které tvrzení platí?",
    options: [
      "25 % ze 120 je větší částka.",
      "20 % ze 160 je o 2 Kč větší částka.",
      "Obě částky jsou stejné.",
      "20 % ze 160 je o 10 Kč větší částka.",
    ],
    correctIndex: 1,
    friendlyHint: "Spočítej 0,25 · 120 a 0,20 · 160.",
    explanation:
      "30 Kč a 32 Kč, druhé je o 2 Kč větší. Past: větší procento = větší výsledek. Stejnost vznikne při 25 % ze 128.",
  },
  {
    id: 68,
    topic: "procenta",
    type: "open",
    workingText:
      "Ve skladu je neznámý počet krabic. Skladník řekl, že 15 % skladu je 45 krabic a že ty jdou na výdej. Zbytek nechávají na inventuru.",
    prompt: "Kolik krabic je ve skladu celkem? Napiš jen číslo.",
    friendlyHint: "45 je 15 setin celku.",
    accept: ["300"],
    explanation:
      "45 ÷ 0,15 = 300. Past: 45 · 0,15 = 6,75, nebo 45 + 15 = 60, nebo 45 · 15 = 675.",
  },
  {
    id: 69,
    topic: "procenta",
    type: "mc",
    workingText:
      "Cena jedné „akcie“ školního minipodniku byla 500 Kč. Nejdřív stoupla o 20 %. Pak klesla o 20 % z nové ceny. Žáci se hádají, jestli jsou zase na pětistovce.",
    prompt: "Jaká je cena po obou změnách?",
    options: ["500 Kč", "480 Kč", "400 Kč", "520 Kč"],
    correctIndex: 1,
    friendlyHint: "500 · 1,20, z toho výsledku 80 %.",
    explanation:
      "Po růstu 600 Kč, po poklesu 480 Kč. Past: +20 % a −20 % se vyruší. 400 Kč je −20 % z 500. 520 Kč je 500 + 20.",
  },
  {
    id: 70,
    topic: "procenta",
    type: "open",
    workingText:
      "Večerní blok seriálu trvá 200 minut včetně reklam. Stanice hlásí, že reklamy tvoří 15 % bloku. Zbytek jsou díly seriálu.",
    prompt: "Kolik minut zabraly reklamy? Napiš jen číslo.",
    friendlyHint: "15 % z 200.",
    accept: ["30"],
    explanation:
      "0,15 · 200 = 30 min. Past: 15 min, nebo 200 − 15 = 185, nebo 15 % z 200 zapsat jako 3.",
  },
  {
    id: 71,
    topic: "procenta",
    type: "mc",
    workingText:
      "Účtenka z drogerie ukazuje 363 Kč včetně DPH 10 %. Cena bez daně na papíře není. Ve škole mají spočítat základ.",
    prompt: "Jaká je cena bez DPH?",
    options: ["330 Kč", "353 Kč", "273 Kč", "399 Kč"],
    correctIndex: 0,
    friendlyHint: "363 Kč je 110 % základu.",
    explanation:
      "363 ÷ 1,10 = 330 Kč. 353 Kč je 363 − 10. 273 Kč je 75 % z 363. 399 Kč je 363 + 10 %.",
  },
  {
    id: 72,
    topic: "procenta",
    type: "open",
    workingText:
      "Na druhém stupni je 240 žáků. Odpolední kroužky navštěvuje 25 % z nich. Zbytek jde po vyučování rovnou domů.",
    prompt: "Kolik žáků nejde na kroužek? Napiš jen číslo.",
    friendlyHint: "Nejdřív čtvrtina z 240, pak zbytek do 240.",
    accept: ["180"],
    explanation:
      "Na kroužku 60, domů 180. Past: zapsat 60, nebo 25, nebo 240 − 25 = 215.",
  },
  {
    id: 73,
    topic: "procenta",
    type: "mc",
    workingText:
      "Pytel brambor váží 20 kg. Skladník odhadl, že 15 % je nahnilých a půjde pryč. Zbytek jde do školní kuchyně.",
    prompt: "Kolik kilogramů brambor je ještě dobrých?",
    options: ["17 kg", "15 kg", "3 kg", "18 kg"],
    correctIndex: 0,
    friendlyHint: "15 % z 20 odečti od 20.",
    explanation:
      "Nahnilých 3 kg, dobrých 17 kg. 15 kg zamění procenta za kila. 3 kg je jen odpad. 18 kg je 10 % odpadu.",
  },
  {
    id: 74,
    topic: "procenta",
    type: "open",
    workingText:
      "Vstupné do muzea je 150 Kč. Školní skupina má slevu 40 % na každou vstupenku. Jdou čtyři žáci, učitel má volný vstup a do součtu se nepočítá.",
    prompt: "Kolik korun zaplatí čtyři žáci dohromady? Napiš jen číslo.",
    friendlyHint: "Nejdřív cena jednoho po slevě, pak krát čtyři.",
    accept: ["360"],
    explanation:
      "Jeden lístek 90 Kč, čtyři 360 Kč. Past: 4 · 150 = 600 a 40 % z 600 = 240 jako platba (to je jen sleva), nebo 4 · 150 · 0,40 = 240.",
  },
  {
    id: 75,
    topic: "procenta",
    type: "mc",
    workingText:
      "Číslo na tabuli je 80. Učitel ho nechá zvětšit o 50 % a hned zmenšit o 50 % z nového výsledku. Třída sází, že bude zase 80.",
    prompt: "Jaké číslo zbude na tabuli?",
    options: ["80", "60", "40", "100"],
    correctIndex: 1,
    friendlyHint: "80 · 1,50, z toho polovinu.",
    explanation:
      "80 · 1,5 = 120, pak 120 · 0,5 = 60. Past: +50 % a −50 % se vyruší. 40 je −50 % z 80. 100 je 80 + 20.",
  },
  {
    id: 76,
    topic: "procenta",
    type: "open",
    workingText:
      "Sáček čaje v bufetu stál 40 Kč. Po prázdninách ho přecenili na 50 Kč. Prodavač říká „je to jen desetikoruna“, ale v sešitě chtějí procenta zdražení.",
    prompt: "O kolik procent čaj zdražil? Napiš jen číslo.",
    friendlyHint: "Deset korun ze čtyřiceti, ne z padesáti.",
    accept: ["25"],
    explanation:
      "10 ÷ 40 = 0,25, tedy o 25 %. Past: 20 % (10/50), nebo 10, nebo 125 (nová cena jako 125 % původní).",
  },
  {
    id: 77,
    topic: "procenta",
    type: "mc",
    workingText:
      "Sběr papíru za jeden den: třída A 40 kg, třída B 35 kg, třída C 25 kg. Jiné třídy ten den nesbíraly. Ředitel chce podíl třídy B na denním sběru.",
    prompt: "Jaký díl denního sběru dodala třída B?",
    options: ["25 %", "35 %", "40 %", "65 %"],
    correctIndex: 1,
    friendlyHint: "Nejdřív sečti 40 + 35 + 25, pak 35 z toho součtu.",
    explanation:
      "Celkem 100 kg, B má 35 %, tedy 35 %. 25 % je třída C. 40 % je A. 65 % je A + C.",
  },
  {
    id: 78,
    topic: "procenta",
    type: "open",
    workingText:
      "Na účet dali 4 000 Kč. Smlouva: jednoduchý úrok 5 % za rok, úrok se k jistině nepřipočítává. Peníze tam nechají tři roky. Zajímají je jen úroky, ne zůstatek.",
    prompt: "Kolik korun bude čistý úrok za tři roky? Napiš jen číslo.",
    friendlyHint: "Za jeden rok 5 % z 4 000, za tři roky třikrát tolik.",
    accept: ["600"],
    explanation:
      "Ročně 200 Kč, za tři roky 600 Kč. Past: zůstatek 4 600 Kč, nebo složený úrok, nebo 5 · 3 = 15 Kč.",
  },
  {
    id: 79,
    topic: "procenta",
    type: "mc",
    workingText:
      "Kniha stojí 360 Kč. E-shop dává slevu 25 % na knihu. Balné je 30 Kč a sleva se na něj nevztahuje. Nejdřív zlevní knihu, pak přičtou balné.",
    prompt: "Kolik zaplatíš celkem?",
    options: ["270 Kč", "300 Kč", "330 Kč", "390 Kč"],
    correctIndex: 1,
    friendlyHint: "Čtvrtinu z 360 odečti, potom přičti 30.",
    explanation:
      "Zlevněná kniha 270 Kč + 30 Kč = 300 Kč. 270 Kč zapomíná balné. 330 Kč je 360 − 30. 390 Kč přičetlo 25 % místo odečtení a ještě balné.",
  },
  {
    id: 80,
    topic: "procenta",
    type: "open",
    workingText:
      "Obec má na nové hřiště 15 000 Kč. Starosta řekl, že 1 % z této částky půjde na tabuli s pravidly u vchodu. Zbytek na povrch a koše.",
    prompt: "Kolik korun půjde na tabuli? Napiš jen číslo.",
    friendlyHint: "1 % je setina z 15 000.",
    accept: ["150"],
    explanation:
      "15 000 ÷ 100 = 150 Kč. Past: 15 Kč, nebo 1 500, nebo 15 000 − 1 = 14 999.",
  },
  {
    id: 81,
    topic: "procenta",
    type: "mc",
    workingText:
      "Bunda po dvou slevách za sebou (vždy 20 % z právě platné ceny) stojí 512 Kč. Původní cena z webu zmizela. Chceš ji dopočítat zpětným chodem.",
    prompt: "Jaká byla původní cena?",
    options: ["800 Kč", "640 Kč", "768 Kč", "6400 Kč"],
    correctIndex: 0,
    friendlyHint: "Dvakrát vyděl 0,80. Začni od 512 Kč.",
    explanation:
      "512 ÷ 0,80 = 640, 640 ÷ 0,80 = 800 Kč. 640 Kč je jen jeden krok zpět. 768 Kč je 512 + 50 %. 6 400 Kč je 512 ÷ 0,08.",
  },
  {
    id: 82,
    topic: "procenta",
    type: "open",
    workingText:
      "Petra namalovala na jarmark 15 plakátů. Adam říká, že jich má o 20 % víc než Petra. Počítají jen počet plakátů, ne velikost.",
    prompt: "Kolik plakátů namaloval Adam? Napiš jen číslo.",
    friendlyHint: "Pětinu z 15 přičti k 15.",
    accept: ["18"],
    explanation:
      "20 % z 15 je 3, Adam 18. Past: 15 + 20 = 35, nebo 15 · 0,20 = 3 (jen navýšení), nebo 12.",
  },
  {
    id: 83,
    topic: "procenta",
    type: "mc",
    workingText:
      "Jablka na trhu stojí 40 Kč za kilogram. Rodina bere 3 kg. Na ovocný nákup je dnes sleva 10 %. Váha je přesná.",
    prompt: "Kolik zaplatí za ta 3 kg?",
    options: ["108 Kč", "90 Kč", "120 Kč", "100 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 3 · 40, teprve z té sumy sleva 10 %.",
    explanation:
      "120 Kč bez slevy, po slevě 108 Kč. 90 Kč je 25 % sleva. 120 Kč je bez slevy. 100 Kč je 120 − 20.",
  },
  {
    id: 84,
    topic: "procenta",
    type: "open",
    workingText:
      "V kuchyni mají láhev 500 ml octa. Na etiketě je 8 % kyseliny, zbytek je voda. Učitel chemie se ptá jen na objem kyseliny v lahvi.",
    prompt: "Kolik mililitrů kyseliny je v lahvi? Napiš jen číslo.",
    friendlyHint: "8 % z 500.",
    accept: ["40"],
    explanation:
      "0,08 · 500 = 40 ml. Past: 8 ml, nebo 500 − 8 = 492, nebo 500 · 8 = 4 000.",
  },
  {
    id: 85,
    topic: "procenta",
    type: "mc",
    workingText:
      "Leták slibuje „dvě slevy 20 % za sebou, jako když dáme 40 %“. Kamarád to ověřuje na ceně 500 Kč a porovnává obě cesty.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Dvě slevy 20 % za sebou nechají z 500 Kč částku 300 Kč.",
      "Dvě slevy 20 % za sebou nechají z 500 Kč částku 320 Kč.",
      "Dvě slevy 20 % za sebou nechají z 500 Kč částku 400 Kč.",
      "Dvě slevy 20 % za sebou jsou totéž jako jedna sleva 40 %.",
    ],
    correctIndex: 1,
    friendlyHint: "500 · 0,8 · 0,8 srovnej s 500 · 0,6.",
    explanation:
      "0,8 · 0,8 = 0,64, zbývá 320 Kč (sleva 36 %). Jedna sleva 40 % nechá 300 Kč. 400 Kč je jen jedna sleva 20 %.",
  },
  {
    id: 86,
    topic: "procenta",
    type: "open",
    workingText:
      "Písemka měla 25 úloh, každá za stejný počet bodů. Oliver měl 20 úloh správně a žádné půlbody. Učitelka převádí úspěšnost na procenta.",
    prompt: "Na kolik procent Oliver písemku napsal? Napiš jen číslo.",
    friendlyHint: "20 z 25 je čtyři pětiny.",
    accept: ["80"],
    explanation:
      "20 ÷ 25 = 0,80, tedy 80 %. Past: 20 %, nebo 5 %, nebo 25 − 20 = 5.",
  },
  {
    id: 87,
    topic: "procenta",
    type: "mc",
    workingText:
      "Poplatek za kroužek šachů byl 600 Kč za pololetí. Od února ho vedoucí zvedá o 25 %, protože zdražil pronájem sálu. Jiné slevy nejsou.",
    prompt: "Jaký je nový pololetní poplatek?",
    options: ["625 Kč", "750 Kč", "450 Kč", "150 Kč"],
    correctIndex: 1,
    friendlyHint: "Čtvrtinu z 600 přičti k 600.",
    explanation:
      "25 % z 600 Kč je 150 Kč, nově 750 Kč. 625 Kč je 600 + 25. 450 Kč je sleva. 150 Kč je jen výše zdražení.",
  },
  {
    id: 88,
    topic: "procenta",
    type: "open",
    workingText:
      "V přepravce bylo 80 meruněk. 20 % bylo nezralých a šlo stranou. Ze zralých snědli hned polovinu na svačinu. Zbytek dali do kompotu.",
    prompt: "Kolik meruněk snědli na svačinu? Napiš jen číslo.",
    friendlyHint: "Nejdřív zralé (80 % z 80), teprve z nich polovina.",
    accept: ["32"],
    explanation:
      "Zralých 64, svačina 32. Past: polovina z 80 = 40 (špatný základ), nebo 20 % z 80 = 16, nebo 50 % z 20 = 10.",
  },
  {
    id: 89,
    topic: "procenta",
    type: "mc",
    workingText:
      "Bunda v eshopu klesla z 400 Kč na 320 Kč. V recenzi někdo píše „sleva 80 Kč, tedy 25 %“. Jiný oponuje, že základ má být původních 400 Kč.",
    prompt: "O kolik procent bunda zlevnila?",
    options: ["20 %", "25 %", "80 %", "320 %"],
    correctIndex: 0,
    friendlyHint: "80 Kč ze 400 Kč.",
    explanation:
      "80 ÷ 400 = 0,20, tedy o 20 %. 25 % je past 80/320. 80 % zamění koruny za procenta. 320 % plete novou cenu.",
  },
  {
    id: 90,
    topic: "procenta",
    type: "open",
    workingText:
      "Účtenka z kavárny: bageta 45 Kč, džus 35 Kč, muffin 20 Kč. Na věrnostní kartě je sleva 15 % na celý účet. Spropitné nepočítají.",
    prompt: "Kolik korun zaplatíš za celý účet? Napiš jen číslo.",
    friendlyHint: "Nejdřív sečti tři položky, pak vezmi 85 %.",
    accept: ["85"],
    explanation:
      "Součet 100 Kč, po slevě 85 Kč. Past: 15, nebo 100 − 15 % špatně jako 85 z jedné položky, nebo 45 + 35 + 20 − 15 = 85 náhodou z muffinů.",
  },
  {
    id: 91,
    topic: "procenta",
    type: "open",
    workingText:
      "Ve školním pařeništi bylo 36 sazenic rajčat. Po mrazíku jich 25 % uhynulo. Zahradník počítá, kolik sazenic ještě žije a půjde ven.",
    prompt: "Kolik sazenic ještě žije? Napiš jen číslo.",
    friendlyHint: "Nejdřív čtvrtina z 36, pak zbytek.",
    accept: ["27"],
    explanation:
      "Uhynulo 9, žije 27. Past: zapsat 9, nebo 25, nebo 36 − 25 = 11.",
  },
  {
    id: 92,
    topic: "procenta",
    type: "open",
    workingText:
      "Z brigády šlo 54 Kč na třídní fond. To bylo přesně 9 % celého výdělku. Zbytek si nechal na kolo.",
    prompt: "Kolik korun byl celý výdělek? Napiš jen číslo.",
    friendlyHint: "54 je 9 setin celku.",
    accept: ["600"],
    explanation:
      "54 ÷ 0,09 = 600 Kč. Past: 54 · 0,09 = 4,86, nebo 54 + 9 = 63, nebo 54 · 9 = 486.",
  },
  {
    id: 93,
    topic: "procenta",
    type: "mc",
    workingText:
      "Stejné sluchátka stojí v obchodě 640 Kč. Na eshopu je mají za 480 Kč, bez dalších slev. Marek počítá, o kolik procent je eshop levnější, základ je cena v obchodě.",
    prompt: "O kolik procent je eshop levnější?",
    options: ["25 %", "33 %", "160 %", "75 %"],
    correctIndex: 0,
    friendlyHint: "Rozdíl 160 Kč vztahuj k 640 Kč.",
    explanation:
      "160 ÷ 640 = 25 %. 33 % je past 160/480. 160 % zamění koruny za procenta. 75 % je podíl eshopové ceny.",
  },
  {
    id: 94,
    topic: "procenta",
    type: "open",
    workingText:
      "Směna v cukrárně trvá 8 hodin, tedy 480 minut. Přestávky na svačinu a úklid daly dohromady 48 minut. Vedoucí chce vědět, jaký díl směny se „nepeklo“.",
    prompt: "Kolik procent směny zabraly přestávky? Napiš jen číslo.",
    friendlyHint: "48 z 480. Obě čísla jdou krátit deseti.",
    accept: ["10"],
    explanation:
      "48 ÷ 480 = 0,10, tedy 10 %. Past: 48 %, nebo 8 hodin − 48 minut zmatek v jednotkách, nebo 480 ÷ 48 = 10 zapsat bez procentní úvahy jako minuty.",
  },
  {
    id: 95,
    topic: "procenta",
    type: "mc",
    workingText:
      "Svítilna v eshopu stojí 250 Kč bez DPH. V košíku se přičte DPH 20 %. Doprava je zdarma. Zákazník chce konečnou cenu s daní.",
    prompt: "Kolik stojí svítilna včetně DPH?",
    options: ["270 Kč", "300 Kč", "200 Kč", "50 Kč"],
    correctIndex: 1,
    friendlyHint: "Pětinu z 250 přičti k 250.",
    explanation:
      "20 % z 250 Kč je 50 Kč, s daní 300 Kč. 270 Kč je 250 + 20. 200 Kč je sleva. 50 Kč je jen daň.",
  },
  {
    id: 96,
    topic: "procenta",
    type: "open",
    workingText:
      "Sportovní klub má 80 členů. Snížený poplatek platí 35 % členů (žáci a senioři). Zbytek platí plnou cenu. Pokladní potřebuje počet plných poplatků.",
    prompt: "Kolik členů platí plný poplatek? Napiš jen číslo.",
    friendlyHint: "Nejdřív 35 % z 80, pak zbytek.",
    accept: ["52"],
    explanation:
      "Snížený poplatek má 28 členů, plný 52. Past: zapsat 28, nebo 35, nebo 80 − 35 = 45.",
  },
  {
    id: 97,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na nákup za 200 Kč jsou dvě nabídky. První: sleva 15 %. Druhá: kupón −40 Kč, procenta se nepočítají. Nelze je kombinovat. Srovnávají, která cesta je výhodnější.",
    prompt: "Které tvrzení platí?",
    options: [
      "Procentní sleva ušetří víc.",
      "Kupón ušetří o 10 Kč víc než procentní sleva.",
      "Obě nabídky ušetří stejně.",
      "Kupón ušetří o 25 Kč víc.",
    ],
    correctIndex: 1,
    friendlyHint: "15 % z 200 srovnej se 40 Kč.",
    explanation:
      "15 % z 200 Kč je 30 Kč. Kupón šetří 40 Kč, tedy o 10 Kč víc. „Stejně“ vznikne, když 15 % spočítáš jako 40. 25 Kč je 15 + 10 zmatek.",
  },
  {
    id: 98,
    topic: "procenta",
    type: "open",
    workingText:
      "V malé obci žilo loni 400 obyvatel. Letos se přistěhovali lidé a počet stoupl o 5 %. Starosta hlásí nový počet, ne přírůstek.",
    prompt: "Kolik obyvatel má obec letos? Napiš jen číslo.",
    friendlyHint: "5 % ze 400 přičti ke 400.",
    accept: ["420"],
    explanation:
      "5 % je 20 obyvatel, letos 420. Past: zapsat 20, nebo 405, nebo 400 · 5 = 2 000.",
  },
  {
    id: 99,
    topic: "procenta",
    type: "open",
    workingText:
      "Do mísy nasypali 4 kg kávové směsi. Podle receptu je 25 % směsi arabica a zbytek robusta. Barista chce vědět jen hmotnost arabicy.",
    prompt: "Kolik kilogramů arabicy je ve směsi? Napiš jen číslo.",
    friendlyHint: "Čtvrtina ze 4 kg.",
    accept: ["1"],
    explanation:
      "0,25 · 4 = 1 kg. Past: 0,25 kg, nebo 4 − 25, nebo 25 kg.",
  },
  {
    id: 100,
    topic: "procenta",
    type: "open",
    workingText:
      "Na sbírku na psí útulek vybrali 1 200 Kč. Čtvrtina (25 %) jde na krmení. Zbytek jde na opravu boudy. Počítají jen částku na boudu.",
    prompt: "Kolik korun půjde na boudu? Napiš jen číslo.",
    friendlyHint: "Nejdřív čtvrtinu z 1 200, pak zbytek.",
    accept: ["900"],
    explanation:
      "Na krmení 300 Kč, na boudu 900 Kč. Past: zapsat 300, nebo 25, nebo 1 200 − 25 = 1 175.",
  },
];
