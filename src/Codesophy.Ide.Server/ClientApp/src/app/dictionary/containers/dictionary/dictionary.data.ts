import { Term } from "../../models";

const TERMS: Array<string> = [
  "Аба",
  "Абажур",
  "Абаз",
  "Абаим",
  "Абака",
  "Абанат",
  "Аббат",
  "Аббревиация",
  "Абдал",
  "Абдикация",
  "Абдраган",
  "Абевега",
  "Аберрация",
  "Абня",
  "Або",
  "Абодье",
  "Абонировывать",
  "Абордаж",
  "Абориген",
  "Абракадабра",
  "Абрамка",
  "Абрек",
  "Абрикос",
  "Абрис",
  "Абсолютный",
  "Абстрактный",
  "Абсцесс",
  "Абсцисса",
  "Абуконь",
  "Абутор",
  "Абцуг",
  "Абшнит",
  "Абы",
  "Абыз",
  "Авава",
  "Авангард",
  "Авантюрин",
  "Авария",
  "Авва",
  "Авгит",
  "Август",
  "Авдан-сыры",
  "Авдотьи-малиновки",
  "Аверьян",
  "Авиз",
  "Авизо",
  "Аводь",
  "Авось",
  "Авраамово",
  "Аерево",
  "Аврал",
  "Авран",
  "Аврикула",
  "Аврипигмент",
  "Аврора",
  "Аврынь",
  "Авсень",
  "Австерия",
  "Австральный",
  "Автограф",
  "Автодафе",
  "Автор",
  "Ага",
  "Агава",
  "Агальматолит",
  "Агама",
  "Агарь",
  "Агат",
  "Агафии-коровятницы",
  "Агач",
  "Аггел",
  "Агент",
  "Агиасма",
  "Агитация",
  "Аглень",
  "Аглывать",
  "Агнец",
  "Аговеть",
  "Агония",
  "Агонь",
  "Аграманты",
  "Feed",
  "User",
  "Ubiquitous language",
  "z",
  "Z boson",
  "Z chart",
  "Z list",
  "Z particle",
  "Z's",
  "z-axis",
  "Z-bed",
  "za",
  "Zaandam",
  "Zaanstad",
  "zabaglione",
  "zabaione",
  "zabeta",
  "zabra",
  "Zabrze",
  "zabtieh",
  "Zabulon",
  "Zacatecas",
  "zacaton",
  "Zachariah",
  "Zacharias",
  "Zachary",
  "zack",
  "Zacynthus",
  "zaddick",
  "zaddik",
  "zaffer",
  "zaftig",
  "zag",
  "Zagazig",
  "Zaghlul",
  "Zagreb",
  "Zagreus",
  "Zagros Mountains",
  "Zahir-ud-din Muhammad",
  "zaibatsu",
  "zaikai",
  "zaire",
  "Zaïrian",
  "zaitech",
  "zakat",
  "Zákinthos",
  "zakouska",
  "zakuska",
  "zakuski",
  "Zakynthos",
  "zalambdodont",
  "Zama",
  "zaman",
];

export const DICTIONARY: Array<Term> = TERMS.map((term, i) => ({id: i+``, label: term}));