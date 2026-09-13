import type { QuizQuestion } from "@/lib/types";
import { QUESTIONS_GEOMETRIE } from "@/data/questionsGeometrie";
import { QUESTIONS_GEOMETRIE_MORE } from "@/data/questionsGeometrieMore";
import { QUESTIONS_GEOMETRIE_EXTRA } from "@/data/questionsGeometrieExtra";
import { QUESTIONS_GEOMETRIE_PLUS } from "@/data/questionsGeometriePlus";
import { QUESTIONS_NEZNAMA } from "@/data/questionsNeznama";
import { QUESTIONS_NEZNAMA_MORE } from "@/data/questionsNeznamaMore";
import { QUESTIONS_NEZNAMA_EXTRA } from "@/data/questionsNeznamaExtra";
import { QUESTIONS_NEZNAMA_PLUS } from "@/data/questionsNeznamaPlus";
import { QUESTIONS_PROCENTA_MORE } from "@/data/questionsProcentaMore";
import { QUESTIONS_PROCENTA_EXTRA } from "@/data/questionsProcentaExtra";
import { QUESTIONS_PROCENTA_PLUS } from "@/data/questionsProcentaPlus";

export const QUESTIONS_PROCENTA: QuizQuestion[] = [
  {
    id: 1,
    topic: "procenta",
    type: "open",
    workingText:
      "V 9.B je 28 žáků. Třídní učitelka zapisuje, kdo jede na lyžařský výcvik. Přihlásilo se 21 žáků, zbytek zůstává ve škole a píše náhradní program.",
    prompt: "Kolik procent žáků třídy jede na lyžařský výcvik? Napiš jen číslo.",
    friendlyHint: "Část vyděl celkem a výsledek vynásob stem. 21 a 28 jdou krátit.",
    accept: ["75"],
    explanation:
      "21 z 28 je 21 ÷ 28 = 0,75, tedy 75 %. Past: spočítat 28 − 21 = 7 a zapsat 7 nebo 25 (to je podíl těch, kteří nejedou).",
  },
  {
    id: 2,
    topic: "procenta",
    type: "mc",
    workingText:
      "Po večeři v pizzerii leží na stole účtenka 360 Kč. Parta se dohodla, že kuchařům nechá spropitné 15 % z této částky. Peníze dávají stranou v hotovosti, účet platí kartou.",
    prompt: "Kolik korun dají na spropitné?",
    options: ["54 Kč", "36 Kč", "540 Kč", "45 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 10 % z 360, pak ještě polovinu z toho deseti procent.",
    explanation:
      "10 % z 360 Kč je 36 Kč, 5 % je 18 Kč, dohromady 54 Kč. 36 Kč je jen 10 %. 540 Kč vznikne, když vynásobíš 360 · 15 a zapomeneš dělit 100. 45 Kč je 12,5 %.",
  },
  {
    id: 3,
    topic: "procenta",
    type: "open",
    workingText:
      "Na okresní matematickou soutěž jelo z jedné školy 18 žáků. Vedoucí kroužku řekl, že to je přesně 20 % všech žáků školy. Zbytek ten den měl normální vyučování.",
    prompt: "Kolik žáků má škola celkem? Napiš jen číslo.",
    friendlyHint: "18 je pětina celku. Celek spočítáš jako 18 ÷ 0,20.",
    accept: ["90"],
    explanation:
      "20 % z celku = 18, celek = 18 ÷ 0,20 = 90. Past: 18 · 0,20 = 3,6, nebo 18 + 20 = 38, nebo 18 · 20 = 360.",
  },
  {
    id: 4,
    topic: "procenta",
    type: "mc",
    workingText:
      "Městské kino mělo lístek na večerní film za 250 Kč. Od září zdražilo vstup o 20 % kvůli novým sedačkám. Cena nápojů u pultu zůstala stejná.",
    prompt: "Kolik teď stojí jeden lístek?",
    options: ["270 Kč", "300 Kč", "200 Kč", "50 Kč"],
    correctIndex: 1,
    friendlyHint: "20 % spočítáš z původních 250 Kč a přičteš je k 250.",
    explanation:
      "20 % z 250 Kč je 50 Kč, nová cena 250 + 50 = 300 Kč. 270 Kč je past 250 + 20. 200 Kč je sleva místo zdražení. 50 Kč je jen výše zdražení, ne nová cena.",
  },
  {
    id: 5,
    topic: "procenta",
    type: "open",
    workingText:
      "Školník vážil sběrový papír. V pondělí odvezli 80 kg. V úterý byla polovina kontejneru prázdná a odvezli jen 60 kg. Srovnává úterní svoz s pondělním.",
    prompt: "O kolik procent odvezli v úterý méně než v pondělí? Napiš jen číslo.",
    friendlyHint: "Rozdíl vztáhni k pondělním 80 kg, ne k úterním 60 kg.",
    accept: ["25"],
    explanation:
      "Úbytek je 20 kg. 20 z 80 je 25 %. Past: 20 z 60 ≈ 33 %, nebo zapsat 20, nebo 60/80 = 75 (to je podíl úterka, ne o kolik méně).",
  },
  {
    id: 6,
    topic: "procenta",
    type: "mc",
    workingText:
      "Pár bot ve výprodejním skladu stál 600 Kč. V červnu zdražili o 10 %. V červenci zdražili znovu o 10 %, tentokrát z už nové červnové ceny. Krabice na polici má pořád původní cedulku 600 Kč.",
    prompt: "Jaká je cena bot po obou zdraženích?",
    options: ["720 Kč", "660 Kč", "726 Kč", "612 Kč"],
    correctIndex: 2,
    friendlyHint: "Druhých 10 % ber z 660 Kč, ne z původních 600 Kč.",
    explanation:
      "Po prvním zdražení 600 · 1,10 = 660 Kč. Po druhém 660 · 1,10 = 726 Kč. 720 Kč je past „10 + 10 = 20 % najednou“. 660 Kč zapomíná na druhé zdražení. 612 Kč je 600 + 12.",
  },
  {
    id: 7,
    topic: "procenta",
    type: "open",
    workingText:
      "Na e-shopu stojí sluchátka 200 Kč bez daně. V košíku se zvlášť přičte DPH 21 %. Doprava je zdarma. Klienta zajímá jen výše daně, ne konečná cena.",
    prompt: "Kolik korun je samotná DPH? Napiš jen číslo.",
    friendlyHint: "21 % z 200 spočítáš jako 21 · 2.",
    accept: ["42"],
    explanation:
      "21 % z 200 Kč = 0,21 · 200 = 42 Kč. Past: zapsat 242 (cena s daní) nebo 21, nebo 200 · 21 = 4200 bez dělení stem.",
  },
  {
    id: 8,
    topic: "procenta",
    type: "mc",
    workingText:
      "Turistický batoh stál 1 200 Kč. V pátek na něj dali slevu 25 %. V sobotu ráno visela další cedule: „Ještě 20 % z už zlevněné ceny.“ Pokladna slevy skládá, nesčítá.",
    prompt: "Kolik batoh stojí po obou slevách?",
    options: ["720 Kč", "660 Kč", "900 Kč", "960 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív tři čtvrtiny z 1 200, z toho výsledku pak čtyři pětiny.",
    explanation:
      "Po 25 % zbývá 900 Kč. Z 900 Kč dalších 20 % je 180 Kč, zbývá 720 Kč. 660 Kč je past jedné slevy 45 %. 900 Kč je jen první sleva. 960 Kč je 20 % z 1 200 a zapomenutá první sleva.",
  },
  {
    id: 9,
    topic: "procenta",
    type: "open",
    workingText:
      "Dokumentární film ve škole trvá 120 minut včetně znělky. Samotná znělka a závěrečné titulky zabraly dohromady 15 minut. Zbytek je záznam z terénu.",
    prompt: "Kolik procent stopáže tvoří znělka s titulky? Napiš jen číslo.",
    friendlyHint: "15 z 120. Může vyjít desetinné číslo.",
    accept: ["12.5", "12,5"],
    explanation:
      "15 ÷ 120 = 0,125, tedy 12,5 %. Past: 15 − 12 = 3, nebo 15 % (zapomeneš vydělit celkem), nebo 120 ÷ 15 = 8.",
  },
  {
    id: 10,
    topic: "procenta",
    type: "mc",
    workingText:
      "Dva obchody mají stejný skate. V A stojí 800 Kč a dnes je sleva 25 %. V B stojí 700 Kč a sleva je 10 %. Eliška porovnává, kde zaplatí méně, a o kolik.",
    prompt: "Které tvrzení platí?",
    options: [
      "V A je o 30 Kč levněji než v B.",
      "V B je o 30 Kč levněji než v A.",
      "V obou zaplatí stejně.",
      "V A je o 100 Kč levněji než v B.",
    ],
    correctIndex: 0,
    friendlyHint: "Spočítej obě konečné ceny a teprve pak je odečti.",
    explanation:
      "A: 75 % z 800 = 600 Kč. B: 90 % ze 700 = 630 Kč. A je levnější o 30 Kč. Past 100 Kč bere rozdíl původních cen 800 − 700. „Stejně“ vznikne, když slevy jen odhadneš.",
  },
  {
    id: 11,
    topic: "procenta",
    type: "open",
    workingText:
      "V autě je nádrž na ostřikovače o objemu 40 litrů. Nalili směs, která má 25 % nemrznoucí složky a zbytek je voda. Řidič chce vědět, kolik litrů té nemrznoucí složky v nádrži je.",
    prompt: "Kolik litrů nemrznoucí složky je v nádrži? Napiš jen číslo.",
    friendlyHint: "Čtvrtina ze 40.",
    accept: ["10"],
    explanation:
      "25 % ze 40 l = 10 l. Past: 40 − 25 = 15, nebo 25 l, nebo 40 · 25 = 1 000.",
  },
  {
    id: 12,
    topic: "procenta",
    type: "mc",
    workingText:
      "Dva stánky na jarmarku počítají slevy jinak. První bere 20 % z tržby 150 Kč. Druhý bere 15 % z tržby 200 Kč. Oba tvrdí, že „jejich sleva je větší“.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "První stánek sleví víc korun.",
      "Druhý stánek sleví víc korun.",
      "Oba sleví stejně korun.",
      "Nedá se to porovnat, protože procenta jsou jiná.",
    ],
    correctIndex: 2,
    friendlyHint: "Spočítej koruny, ne jen porovnávej 20 a 15.",
    explanation:
      "20 % ze 150 = 30 Kč. 15 % z 200 = 30 Kč. Stejně. Past je říct, že 20 % je automaticky víc, nebo že různá procenta nejdou srovnat.",
  },
  {
    id: 13,
    topic: "procenta",
    type: "open",
    workingText:
      "Babička dala na spořicí účet 5 000 Kč. Banka připisuje jednoduchý úrok 4 % za rok, nic se neskládá. Po roce chce vědět, kolik peněz na účtu uvidí včetně úroku.",
    prompt: "Kolik korun bude na účtu po jednom roce? Napiš jen číslo.",
    friendlyHint: "Nejdřív 4 % z 5 000, pak přičti k vkladu.",
    accept: ["5200"],
    explanation:
      "Úrok 0,04 · 5 000 = 200 Kč, zůstatek 5 200 Kč. Past: zapsat jen 200, nebo 5 004, nebo 5 000 · 4 = 20 000.",
  },
  {
    id: 14,
    topic: "procenta",
    type: "open",
    workingText:
      "Školní aula má 200 sedadel. Na koncert přišlo 160 lidí, 40 židlí zůstalo prázdných. Pořadatelé hlásí obsazenost i volná místa zvlášť.",
    prompt: "Kolik procent sedadel zůstalo volných? Napiš jen číslo.",
    friendlyHint: "Volných je 40 z 200. Nepočítej obsazená místa.",
    accept: ["20"],
    explanation:
      "40 ÷ 200 = 0,20, tedy 20 %. Past: 80 % (obsazenost), nebo 40, nebo 160/200 = 80 zapsané omylem jako odpověď.",
  },
  {
    id: 15,
    topic: "procenta",
    type: "mc",
    workingText:
      "V second-handu visela bunda se slevou 20 %. Pokladna natukala 480 Kč, což už je cena po slevě. Původní cedulka někde odpadla a Tereza ji chce dopočítat.",
    prompt: "Jaká byla původní cena bundy?",
    options: ["600 Kč", "576 Kč", "500 Kč", "400 Kč"],
    correctIndex: 0,
    friendlyHint: "480 Kč je 80 % původní ceny, ne 80 % z 480.",
    explanation:
      "480 = 0,80 · původní, původní = 480 ÷ 0,80 = 600 Kč. 576 Kč je 480 + 20 % z 480 (špatný základ). 400 Kč je 480 − 80. 500 Kč je odhad.",
  },
  {
    id: 16,
    topic: "procenta",
    type: "open",
    workingText:
      "Mikina v obchodě stála 500 Kč. Nejdřív ji zlevnili o 20 %. Za dva dny visela druhá sleva 10 % z už zlevněné ceny. U pokladny se obě slevy aplikují po sobě.",
    prompt: "Kolik korun za mikinu zaplatíš? Napiš jen číslo.",
    friendlyHint: "Po první slevě zbývá 400 Kč. Z nich vezmi ještě 90 %.",
    accept: ["360"],
    explanation:
      "500 · 0,80 = 400, pak 400 · 0,90 = 360 Kč. Past: 30 % najednou → 350 Kč, nebo 500 − 20 − 10 = 470, nebo 450.",
  },
  {
    id: 17,
    topic: "procenta",
    type: "mc",
    workingText:
      "Loni v červnu ušla trenérka s dětmi 12 km. Letos stejnou trasu prodloužili a ušli 15 km. Rodiče se ptají, o kolik procent byla letošní trasa delší než loňská.",
    prompt: "O kolik procent byla letos trasa delší?",
    options: ["20 %", "25 %", "3 %", "80 %"],
    correctIndex: 1,
    friendlyHint: "Rozdíl 3 km vztahuj k loňským 12 km.",
    explanation:
      "3 ÷ 12 = 0,25, tedy o 25 % víc. 20 % je past 3/15 (špatný základ — nové číslo). 3 % zamění kilometry za procenta. 80 % je 12/15.",
  },
  {
    id: 18,
    topic: "procenta",
    type: "open",
    workingText:
      "V kroužku keramiky je 30 dětí. Chlapci a dívky jsou v poměru 3 : 2. Vedoucí chce na nástěnku napsat, kolik procent kroužku tvoří dívky.",
    prompt: "Kolik procent dětí v kroužku jsou dívky? Napiš jen číslo.",
    friendlyHint: "Nejdřív z poměru 3 : 2 spočítej počet dívek, pak procenta z 30.",
    accept: ["40"],
    explanation:
      "3 + 2 = 5 dílů, jeden díl je 6 dětí, dívky 12. 12 z 30 je 40 %. Past: 2/3 ≈ 67 %, nebo 2/5 = 40 zapsat jako 2, nebo zaměnit chlapce a dívky (60 %).",
  },
  {
    id: 19,
    topic: "procenta",
    type: "mc",
    workingText:
      "Krabice pastelek stála v září 200 Kč. V říjnu ji obchod zvedl na 250 Kč. Na letáku je jen nová cena, bez vysvětlení, o kolik procent zdražili.",
    prompt: "O kolik procent pastelky zdražily?",
    options: ["20 %", "25 %", "50 %", "125 %"],
    correctIndex: 1,
    friendlyHint: "Padesátikorunu vztahuj k původním 200 Kč.",
    explanation:
      "Nárůst 50 Kč z 200 Kč je 25 %. 20 % je 50/250 (špatný základ). 50 % zamění koruny za procenta. 125 % je 250/200, tedy „na kolik %“, ne „o kolik %“.",
  },
  {
    id: 20,
    topic: "procenta",
    type: "open",
    workingText:
      "Ve spíži stál pytel mouky 25 kg. Za víkend spotřebovali 40 % pytle na pečení. Zbytek chtějí nechat na příští týden a potřebují vědět, kolik kilogramů zbývá.",
    prompt: "Kolik kilogramů mouky zbývá? Napiš jen číslo.",
    friendlyHint: "Neptají se, kolik spotřebovali, ale kolik zbylo.",
    accept: ["15"],
    explanation:
      "Spotřeba 10 kg, zbývá 15 kg (60 % z 25). Past: zapsat 10 (spotřeba), nebo 40, nebo 25 − 40 = −15.",
  },
  {
    id: 21,
    topic: "procenta",
    type: "mc",
    workingText:
      "Dva úkoly v sešitě: „30 % ze 80 bodů“ a „40 % z 50 bodů“. Marek tvrdí, že druhé číslo musí být větší, protože 40 je víc než 30. Lucka chce spočítat koruny — tady body — poctivě.",
    prompt: "Které tvrzení platí?",
    options: [
      "Oba výsledky jsou stejné.",
      "30 % ze 80 je o 4 víc než 40 % z 50.",
      "40 % z 50 je o 4 víc než 30 % ze 80.",
      "40 % z 50 je o 10 víc.",
    ],
    correctIndex: 1,
    friendlyHint: "Spočítej 0,30 · 80 a 0,40 · 50.",
    explanation:
      "24 a 20, první je o 4 větší. Past: větší procento = větší výsledek. Stejnost vznikne, když si pleteš 30 % z 80 s 40 % z 60.",
  },
  {
    id: 22,
    topic: "procenta",
    type: "open",
    workingText:
      "V pokladničce na třídní výlet je nějaká částka. Pokladní řekla, že 12 % kasy je 36 Kč a že to půjde na pohlednice. Zbytek nechávají na autobus.",
    prompt: "Kolik korun je v kase celkem? Napiš jen číslo.",
    friendlyHint: "36 je 12 setin celku.",
    accept: ["300"],
    explanation:
      "Celek = 36 ÷ 0,12 = 300 Kč. Past: 36 · 0,12 = 4,32, nebo 36 + 12 = 48, nebo 36 · 12 = 432.",
  },
  {
    id: 23,
    topic: "procenta",
    type: "mc",
    workingText:
      "Brigádník měl výplatu 20 000 Kč. V květnu mu přidali 10 %. V červnu mu z nového platu 10 % zase ubrali, protože skončila sezónní prémie. Ptá se, jestli je zase na 20 000 Kč.",
    prompt: "Jaká je červnová výplata?",
    options: ["20 000 Kč", "19 800 Kč", "18 000 Kč", "22 000 Kč"],
    correctIndex: 1,
    friendlyHint: "Druhých 10 % se bere z 22 000 Kč, ne z 20 000 Kč.",
    explanation:
      "Květen: 22 000 Kč. Červen: 22 000 · 0,90 = 19 800 Kč. Past: +10 % a −10 % se vyruší → 20 000 Kč. 18 000 Kč je −10 % z původku. 22 000 Kč zapomíná na snížení.",
  },
  {
    id: 24,
    topic: "procenta",
    type: "open",
    workingText:
      "Trénink florbalu trvá 80 minut. Trenér řekl, že první čtvrtina času je jen rozcvička a strečink. Pak teprve hrají hru.",
    prompt: "Kolik minut trvá rozcvička? Napiš jen číslo.",
    friendlyHint: "25 % z 80 je čtvrtina.",
    accept: ["20"],
    explanation:
      "0,25 · 80 = 20 min. Past: 25 min, nebo 80 − 25 = 55, nebo 4 minuty (80 ÷ 25).",
  },
  {
    id: 25,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na účtence z drogerie je konečná cena 242 Kč včetně DPH 10 %. Holka chce vědět cenu zboží bez daně, protože ve škole počítali „základ daně“.",
    prompt: "Jaká je cena bez DPH?",
    options: ["220 Kč", "232 Kč", "252 Kč", "218 Kč"],
    correctIndex: 0,
    friendlyHint: "242 Kč je 110 % základu. Základ = 242 ÷ 1,10.",
    explanation:
      "242 ÷ 1,1 = 220 Kč. 232 Kč je 242 − 10 (odečetli 10 Kč, ne 10 %). 252 Kč je 242 + 10. 218 Kč je odhad.",
  },
  {
    id: 26,
    topic: "procenta",
    type: "open",
    workingText:
      "Na druhém stupni je 100 žáků. Na hory jede 35 % z nich. Zbytek má ten týden školu v přírodě jinak — zůstávají ve městě.",
    prompt: "Kolik žáků zůstává ve městě? Napiš jen číslo.",
    friendlyHint: "Nejdřív 35 ze 100, pak zbytek do sta.",
    accept: ["65"],
    explanation:
      "Na hory 35, ve městě 65. Past: zapsat 35, nebo 65 % jako 0,65, nebo 100 − 35 % špatně jako 100 − 0,35.",
  },
  {
    id: 27,
    topic: "procenta",
    type: "mc",
    workingText:
      "Do školní tomboly dali krabici bonbonů o hmotnosti 5 kg. Na etiketě stojí, že 40 % hmotnosti je čokoláda a zbytek je želé. Počítají, kolik čokolády v krabici je.",
    prompt: "Kolik kilogramů čokolády je v krabici?",
    options: ["1,5 kg", "2 kg", "2,5 kg", "4 kg"],
    correctIndex: 1,
    friendlyHint: "40 % z 5 kg.",
    explanation:
      "0,40 · 5 = 2 kg. 2,5 kg je polovina. 1,5 kg je 30 %. 4 kg je 80 % (zbytek želé by bylo 3 kg, ne 4).",
  },
  {
    id: 28,
    topic: "procenta",
    type: "open",
    workingText:
      "Vstupné na školní představení je 400 Kč. Studenti mají slevu 25 % na každou vstupenku. Kamarádi kupují tři studentské lístky najednou, bez dalších slev.",
    prompt: "Kolik korun zaplatí za tři lístky dohromady? Napiš jen číslo.",
    friendlyHint: "Nejdřív cena jednoho po slevě, pak krát tři.",
    accept: ["900"],
    explanation:
      "Jeden lístek 300 Kč, tři 900 Kč. Past: 25 % ze 1 200 = 300 a zaplatit 1 200 − 300 = 900 — tohle vyjde stejně, ale 3 · 400 − 25 = 1 175 je typická chyba. Nebo 3 · 400 · 0,25 = 300 (jen sleva).",
  },
  {
    id: 29,
    topic: "procenta",
    type: "mc",
    workingText:
      "Obchodník zvedl cenu hračky o 50 %. Za týden ji zase snížil o 50 %, ale z té nové, vyšší ceny. Začal na 200 Kč. Zákazník se hádá, že „je to zase dvoustovka“.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Konečná cena je zase 200 Kč.",
      "Konečná cena je 150 Kč.",
      "Konečná cena je 100 Kč.",
      "Konečná cena je 250 Kč.",
    ],
    correctIndex: 1,
    friendlyHint: "200 → nejdřív +50 %, pak z té částky −50 %.",
    explanation:
      "200 · 1,50 = 300, pak 300 · 0,50 = 150 Kč. Past: +50 % a −50 % se vyruší. 100 Kč je −50 % z původku. 250 Kč je 200 + 50 − 0.",
  },
  {
    id: 30,
    topic: "procenta",
    type: "open",
    workingText:
      "Sešit v papírnictví stál 80 Kč. Po prázdninách ho přecenili na 100 Kč. Prodavačka říká, že „to je jen dvacítka“, ale ve škole chtějí odpověď v procentech zdražení.",
    prompt: "O kolik procent sešit zdražil? Napiš jen číslo.",
    friendlyHint: "Dvacet korun z osmdesáti, ne z sta.",
    accept: ["25"],
    explanation:
      "20 ÷ 80 = 0,25, tedy o 25 %. Past: 20 % (20/100), nebo 20, nebo 125 (nová cena jako 125 % původní — to je „na kolik“, ne „o kolik“).",
  },
  {
    id: 31,
    topic: "procenta",
    type: "mc",
    workingText:
      "Stánek zapisoval prodej limonády jen za tři dny: pondělí 12 lahví, úterý 18 lahví, středa 10 lahví. Jiné dny zavřeno. Majitel chce vědět podíl úterka na těchto třech dnech.",
    prompt: "Jaký díl prodeje za ty tři dny připadá na úterý?",
    options: ["18 %", "40 %", "45 %", "55 %"],
    correctIndex: 2,
    friendlyHint: "Nejdřív sečti 12 + 18 + 10, pak 18 z toho součtu.",
    explanation:
      "Celkem 40 lahví, 18/40 = 45 %. 18 % zamění kusy za procenta. 40 % je podíl „nějak okolo“. 55 % je (12+10)/40, tedy pondělí se středou.",
  },
  {
    id: 32,
    topic: "procenta",
    type: "open",
    workingText:
      "Na účet dali 3 000 Kč. Smlouva říká jednoduchý úrok 5 % za každý rok, úrok se k jistině nepřidává. Peníze tam nechají dva roky. Zajímají je jen vydělané úroky, ne zůstatek.",
    prompt: "Kolik korun bude čistý úrok za dva roky? Napiš jen číslo.",
    friendlyHint: "Za jeden rok 5 % z 3 000, za dva roky dvakrát tolik.",
    accept: ["300"],
    explanation:
      "Ročně 150 Kč, za dva roky 300 Kč. Past: 3 000 · 1,05² (složený úrok) ≈ 307,5, nebo zůstatek 3 300, nebo 5 · 2 = 10 Kč.",
  },
  {
    id: 33,
    topic: "procenta",
    type: "mc",
    workingText:
      "Mikrovlnka v eshopu stojí 1 000 Kč. Dnes je sleva 15 %. Dovoz na vesnici stojí 50 Kč a sleva se na něj nevztahuje. Pokladna nejdřív zlevní zboží, pak přičte dovoz.",
    prompt: "Kolik zaplatíš celkem?",
    options: ["850 Kč", "900 Kč", "950 Kč", "1 150 Kč"],
    correctIndex: 1,
    friendlyHint: "15 % z 1 000 odečti, potom přičti 50.",
    explanation:
      "Zlevněná mikrovlnka 850 Kč + dovoz 50 Kč = 900 Kč. 850 Kč zapomíná dovoz. 950 Kč je 1 000 − 15 − 35 odhad. 1 150 Kč přičetlo 15 % místo odečtení.",
  },
  {
    id: 34,
    topic: "procenta",
    type: "open",
    workingText:
      "Rozpočet školního výletu je 8 000 Kč. Třídní řekla, že 1 % z rozpočtu dají průvodci jako poděkování. Zbytek jde na vlak a jídlo.",
    prompt: "Kolik korun dostane průvodce? Napiš jen číslo.",
    friendlyHint: "1 % je setina.",
    accept: ["80"],
    explanation:
      "8 000 ÷ 100 = 80 Kč. Past: 8 Kč, nebo 800, nebo 8 000 − 1 = 7 999.",
  },
  {
    id: 35,
    topic: "procenta",
    type: "mc",
    workingText:
      "Televize po dvou stejných slevách za sebou (vždy 10 % z právě platné ceny) stojí 810 Kč. Původní cena na webu zmizela. Chceš ji dopočítat.",
    prompt: "Jaká byla původní cena?",
    options: ["1 000 Kč", "900 Kč", "891 Kč", "810 Kč"],
    correctIndex: 0,
    friendlyHint: "Dvakrát vyděl 0,90. Začni od 810 Kč.",
    explanation:
      "810 ÷ 0,90 = 900, 900 ÷ 0,90 = 1 000 Kč. 900 Kč je jen jeden krok zpět. 891 Kč je 810 + 10 %. 810 Kč je omyl „slevy se nepočítají“.",
  },
  {
    id: 36,
    topic: "procenta",
    type: "open",
    workingText:
      "Klára ušla o víkendu 8 km. Tomáš hlásí, že ušel o 25 % víc než Klára. Šli každý jinou stezkou, jen porovnávají vzdálenost.",
    prompt: "Kolik kilometrů ušel Tomáš? Napiš jen číslo.",
    friendlyHint: "Čtvrtinu z 8 přičti k osmi.",
    accept: ["10"],
    explanation:
      "25 % z 8 km je 2 km, Tomáš 10 km. Past: 8 + 25 = 33, nebo 8 · 0,25 = 2 (jen navýšení), nebo 8 − 2 = 6.",
  },
  {
    id: 37,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na trhu berou sýr 80 Kč za kilogram. Rodina kupuje 2 kg. Na celý nákup sýra je dnes sleva 25 %. Váha je přesná, žádné zaokrouhlování.",
    prompt: "Kolik zaplatí za ty 2 kg?",
    options: ["120 Kč", "80 Kč", "160 Kč", "135 Kč"],
    correctIndex: 0,
    friendlyHint: "Nejdřív 2 · 80, teprve z té sumy sleva 25 %.",
    explanation:
      "2 · 80 = 160 Kč, po slevě 120 Kč. 80 Kč je cena jednoho kila po slevě nebo bez druhého kila. 160 Kč je bez slevy. 135 Kč je 160 − 25.",
  },
  {
    id: 38,
    topic: "procenta",
    type: "open",
    workingText:
      "V laboratoři mají láhev 250 ml roztoku. Na štítku je 20 % účinné látky, zbytek je voda. Asistent má odměřit, kolik mililitrů té účinné látky v lahvi je.",
    prompt: "Kolik mililitrů účinné látky je v lahvi? Napiš jen číslo.",
    friendlyHint: "Pětina z 250.",
    accept: ["50"],
    explanation:
      "0,20 · 250 = 50 ml. Past: 20 ml, nebo 230 ml, nebo 250 · 20 = 5 000.",
  },
  {
    id: 39,
    topic: "procenta",
    type: "mc",
    workingText:
      "Leták křičí „sleva 20 % a hned další sleva 20 % — skoro jako 40 %!“. Kamarád tomu nevěří a bere si jako příklad cenu 1 000 Kč. Počítá obě cesty.",
    prompt: "Které tvrzení je pravda?",
    options: [
      "Dvě slevy 20 % za sebou jsou totéž jako jedna sleva 40 %.",
      "Z 1 000 Kč zbude 640 Kč, ne 600 Kč.",
      "Z 1 000 Kč zbude 600 Kč.",
      "Z 1 000 Kč zbude 800 Kč.",
    ],
    correctIndex: 1,
    friendlyHint: "1 000 · 0,8 · 0,8 srovnej s 1 000 · 0,6.",
    explanation:
      "0,8 · 0,8 = 0,64, zbývá 640 Kč (sleva 36 %). Jedna sleva 40 % nechá 600 Kč. 800 Kč je jen jedna sleva 20 %.",
  },
  {
    id: 40,
    topic: "procenta",
    type: "open",
    workingText:
      "Čtvrtletní práce měla maximum 40 bodů. Anička získala 32 bodů. Učitel převádí body na procenta úspěšnosti, zaokrouhlovat nemusí.",
    prompt: "Na kolik procent Anička práci napsala? Napiš jen číslo.",
    friendlyHint: "32 z 40.",
    accept: ["80"],
    explanation:
      "32 ÷ 40 = 0,80, tedy 80 %. Past: 32 %, nebo 8 %, nebo 40 − 32 = 8 zapsat jako 8 %.",
  },
  {
    id: 41,
    topic: "procenta",
    type: "mc",
    workingText:
      "Nájem za kroužek keramiky byl 8 000 Kč za rok. Vedoucí od září zdražuje o 15 %, protože zdražila hlína. Měsíční zálohy přepočítají podle nové roční ceny.",
    prompt: "Jaká je nová roční cena?",
    options: ["8 015 Kč", "8 800 Kč", "9 200 Kč", "6 800 Kč"],
    correctIndex: 2,
    friendlyHint: "15 % z 8 000 přičti k 8 000.",
    explanation:
      "15 % je 1 200 Kč, nově 9 200 Kč. 8 015 Kč je 8 000 + 15. 8 800 Kč je +10 %. 6 800 Kč je omyl se slevou.",
  },
  {
    id: 42,
    topic: "procenta",
    type: "open",
    workingText:
      "V bedně bylo 200 jablek. 30 % bylo červivých a šlo pryč. Ze zbylých zdravých jablek šlo 10 % do školního koláče. Zbytek dali na svačiny.",
    prompt: "Kolik jablek šlo do koláče? Napiš jen číslo.",
    friendlyHint: "Nejdřív zdravá jablka (70 % z 200), teprve z nich 10 %.",
    accept: ["14"],
    explanation:
      "Zdravých 140, do koláče 14. Past: 10 % z 200 = 20 (špatný základ), nebo 30 % z 200 = 60, nebo 10 % z 30 = 3.",
  },
  {
    id: 43,
    topic: "procenta",
    type: "mc",
    workingText:
      "Hra na webu zlevnila z 250 Kč na 200 Kč. V recenzi někdo píše, že je to „sleva 50 Kč, tedy 25 %“. Jiný oponuje, že základ má být původní cena.",
    prompt: "O kolik procent hra zlevnila?",
    options: ["20 %", "25 %", "50 %", "80 %"],
    correctIndex: 0,
    friendlyHint: "50 Kč z 250 Kč.",
    explanation:
      "50 ÷ 250 = 0,20, tedy o 20 %. 25 % je past 50/200. 50 % zamění koruny za procenta. 80 % je nová cena jako podíl původní.",
  },
  {
    id: 44,
    topic: "procenta",
    type: "open",
    workingText:
      "Účtenka z večerky: chléb 32 Kč, máslo 48 Kč, mléko 20 Kč. Na celý nákup je dnes sleva 10 %. Tašky neúčtují.",
    prompt: "Kolik korun zaplatíš za celý nákup? Napiš jen číslo.",
    friendlyHint: "Nejdřív sečti tři ceny, pak vezmi 90 %.",
    accept: ["90"],
    explanation:
      "Součet 100 Kč, po slevě 90 Kč. Past: 10 % jen z jednoho kusu, nebo 100 − 10 % špatně jako 100 − 10 = 90 z chleba samotného, nebo 32 + 48 + 20 − 10 = 90 náhodou — ale 90 − 10 = 80 když slevu odečtou dvakrát.",
  },
  {
    id: 45,
    topic: "procenta",
    type: "open",
    workingText:
      "V bedně od dodavatele je 48 lahví limonády. Skladník spočítal, že 75 % lahví je plných a zbytek došel prázdný kvůli prasklému uzávěru.",
    prompt: "Kolik lahví je plných? Napiš jen číslo.",
    friendlyHint: "Tři čtvrtiny z 48.",
    accept: ["36"],
    explanation:
      "0,75 · 48 = 36. Past: 12 (prázdné), nebo 75, nebo 48 − 75.",
  },
  {
    id: 46,
    topic: "procenta",
    type: "open",
    workingText:
      "Na den otevřených dveří přišlo 60 návštěvníků. Ředitelka řekla, že to bylo 12 % kapacity auly. Chce vědět, kolik lidí by aula utáhla, kdyby byla plná.",
    prompt: "Jaká je kapacita auly? Napiš jen číslo.",
    friendlyHint: "60 je 12 % celku.",
    accept: ["500"],
    explanation:
      "60 ÷ 0,12 = 500. Past: 60 · 0,12 = 7,2, nebo 60 + 12 = 72, nebo 60 · 12 = 720.",
  },
  {
    id: 47,
    topic: "procenta",
    type: "open",
    workingText:
      "Stejná bunda stojí v kamenném obchodě 400 Kč. Na webu stejné značky ji mají za 300 Kč, bez dalších slev. Ema počítá, o kolik procent je web levnější než obchod, základ je cena v obchodě.",
    prompt: "O kolik procent je web levnější? Napiš jen číslo.",
    friendlyHint: "Rozdíl 100 Kč vztahuj ke 400 Kč.",
    accept: ["25"],
    explanation:
      "100 ÷ 400 = 25 %. Past: 100/300 ≈ 33 % (špatný základ — nová cena), nebo zapsat 100, nebo 75 % (podíl webové ceny).",
  },
  {
    id: 48,
    topic: "procenta",
    type: "open",
    workingText:
      "Pracovní týden v dílně má 40 hodin. Mistr spočítal, že 8 hodin z toho padlo na porady. Zbytek stály u ponků. Chce na tabuli napsat, jaký díl týdne se prokecal.",
    prompt: "Kolik procent pracovního týdne zabraly porady? Napiš jen číslo.",
    friendlyHint: "8 z 40 je pětina.",
    accept: ["20"],
    explanation:
      "8 ÷ 40 = 0,20, tedy 20 %. Past: 8 %, nebo 40 − 8 = 32 zapsat jako 32, nebo 8 · 40 = 320.",
  },
  {
    id: 49,
    topic: "procenta",
    type: "mc",
    workingText:
      "Na účtence z hobbymarketu je 480 Kč včetně DPH 20 %. Kluk chce znát základ bez daně, protože ve škole počítali „cenu před daní“. DPH je už v těch 480 Kč započítaná.",
    prompt: "Jaká je cena bez DPH?",
    options: ["400 Kč", "460 Kč", "384 Kč", "576 Kč"],
    correctIndex: 0,
    friendlyHint: "480 Kč je 120 % základu. Základ = 480 ÷ 1,20.",
    explanation:
      "480 ÷ 1,2 = 400 Kč. 460 Kč je 480 − 20. 384 Kč je 80 % z 480 (spletl si slevu). 576 Kč je 480 + 20 %.",
  },
  {
    id: 50,
    topic: "procenta",
    type: "open",
    workingText:
      "Školní knihovna má 150 knih ve volném výběru. Knihovnice hlásí, že 40 % je právě půjčených. Zbytek stojí na regálech a čeká na čtenáře.",
    prompt: "Kolik knih zbývá na regálech? Napiš jen číslo.",
    friendlyHint: "Nejdřív 40 % z 150, pak zbytek.",
    accept: ["90"],
    explanation:
      "Půjčeno 60 knih, na regálech 90. Past: zapsat 60, nebo 40, nebo 150 − 40 = 110.",
  },
];

export const QUESTIONS: QuizQuestion[] = [
  ...QUESTIONS_PROCENTA,
  ...QUESTIONS_PROCENTA_MORE,
  ...QUESTIONS_PROCENTA_EXTRA,
  ...QUESTIONS_PROCENTA_PLUS,
  ...QUESTIONS_NEZNAMA,
  ...QUESTIONS_NEZNAMA_MORE,
  ...QUESTIONS_NEZNAMA_EXTRA,
  ...QUESTIONS_NEZNAMA_PLUS,
  ...QUESTIONS_GEOMETRIE,
  ...QUESTIONS_GEOMETRIE_MORE,
  ...QUESTIONS_GEOMETRIE_EXTRA,
  ...QUESTIONS_GEOMETRIE_PLUS,
];
