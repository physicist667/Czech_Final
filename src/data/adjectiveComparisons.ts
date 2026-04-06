export interface AdjectiveComparison {
  id: string;
  positive: {
    czech: string;
    russian: string;
    pronunciation: string;
  };
  comparative: {
    czech: string;
    russian: string;
    pronunciation: string;
  };
  superlative: {
    czech: string;
    russian: string;
    pronunciation: string;
  };
  notes?: string;
}

export const adjectiveComparisons: AdjectiveComparison[] = [
  {
    id: 'ac1',
    positive: { czech: 'velký', russian: 'большой', pronunciation: 'велки' },
    comparative: { czech: 'větší', russian: 'больше', pronunciation: 'вьэтши' },
    superlative: { czech: 'největší', russian: 'самый большой', pronunciation: 'нэйвьэтши' },
  },
  {
    id: 'ac2',
    positive: { czech: 'malý', russian: 'маленький', pronunciation: 'мали' },
    comparative: { czech: 'menší', russian: 'меньше', pronunciation: 'мьэнши' },
    superlative: { czech: 'nejmenší', russian: 'самый маленький', pronunciation: 'нэймьэнши' },
  },
  {
    id: 'ac3',
    positive: { czech: 'krásný', russian: 'красивый', pronunciation: 'красни' },
    comparative: { czech: 'krásnější', russian: 'красивее', pronunciation: 'красньэйши' },
    superlative: { czech: 'nejkrásnější', russian: 'самый красивый', pronunciation: 'нэйкрасньэйши' },
  },
  {
    id: 'ac4',
    positive: { czech: 'drahý', russian: 'дорогой', pronunciation: 'драги' },
    comparative: { czech: 'dražší', russian: 'дороже', pronunciation: 'дражши' },
    superlative: { czech: 'nejdražší', russian: 'самый дорогой', pronunciation: 'нэйдражши' },
  },
  {
    id: 'ac5',
    positive: { czech: 'levný', russian: 'дешёвый', pronunciation: 'левни' },
    comparative: { czech: 'levnější', russian: 'дешевле', pronunciation: 'левньэйши' },
    superlative: { czech: 'nejlevnější', russian: 'самый дешёвый', pronunciation: 'нэйлевньэйши' },
  },
  {
    id: 'ac6',
    positive: { czech: 'dobrý', russian: 'хороший', pronunciation: 'добри' },
    comparative: { czech: 'lepší', russian: 'лучше', pronunciation: 'лэпши' },
    superlative: { czech: 'nejlepší', russian: 'лучший', pronunciation: 'нэйлэпши' },
    notes: 'Неправильное прилагательное. Положительная степень: dobrý, сравнительная: lepší, превосходная: nejlepší. Суперлатив имеет форму "лучший", а не "самый хороший".',
  },
  {
    id: 'ac7',
    positive: { czech: 'špatný', russian: 'плохой', pronunciation: 'шпатни' },
    comparative: { czech: 'horší', russian: 'хуже', pronunciation: 'горши' },
    superlative: { czech: 'nejhorší', russian: 'самый плохой', pronunciation: 'нэйгорши' },
    notes: 'Неправильное прилагательное. Положительная степень: špatný, сравнительная: horší, превосходная: nejhorší.',
  },
  {
    id: 'ac8',
    positive: { czech: 'dlouhý', russian: 'длинный', pronunciation: 'длоуги' },
    comparative: { czech: 'delší', russian: 'длиннее', pronunciation: 'дэльши' },
    superlative: { czech: 'nejdelší', russian: 'самый длинный', pronunciation: 'нэйдэльши' },
  },
  {
    id: 'ac9',
    positive: { czech: 'krátký', russian: 'короткий', pronunciation: 'кратки' },
    comparative: { czech: 'kratší', russian: 'короче', pronunciation: 'крачши' },
    superlative: { czech: 'nejkratší', russian: 'самый короткий', pronunciation: 'нэйкрачши' },
  },
  {
    id: 'ac10',
    positive: { czech: 'starý', russian: 'старый', pronunciation: 'стари' },
    comparative: { czech: 'starší', russian: 'старше', pronunciation: 'старши' },
    superlative: { czech: 'nejstarší', russian: 'самый старый', pronunciation: 'нэйстарши' },
  },
  {
    id: 'ac11',
    positive: { czech: 'mladý', russian: 'молодой', pronunciation: 'млади' },
    comparative: { czech: 'mladší', russian: 'моложе', pronunciation: 'младши' },
    superlative: { czech: 'nejmladší', russian: 'самый молодой', pronunciation: 'нэймладши' },
  },
  {
    id: 'ac12',
    positive: { czech: 'silný', russian: 'сильный', pronunciation: 'силни' },
    comparative: { czech: 'silnější', russian: 'сильнее', pronunciation: 'силньэйши' },
    superlative: { czech: 'nejsilnější', russian: 'самый сильный', pronunciation: 'нэйсилньэйши' },
  },
  {
    id: 'ac13',
    positive: { czech: 'slabý', russian: 'слабый', pronunciation: 'слаби' },
    comparative: { czech: 'slabší', russian: 'слабее', pronunciation: 'слабши' },
    superlative: { czech: 'nejslabší', russian: 'самый слабый', pronunciation: 'нэйслабши' },
  },
  {
    id: 'ac14',
    positive: { czech: 'rychlý', russian: 'быстрый', pronunciation: 'рыхли' },
    comparative: { czech: 'rychlejší', russian: 'быстрее', pronunciation: 'рыхлэйши' },
    superlative: { czech: 'nejrychlejší', russian: 'самый быстрый', pronunciation: 'нэйрыхлэйши' },
  },
  {
    id: 'ac15',
    positive: { czech: 'pomalý', russian: 'медленный', pronunciation: 'помали' },
    comparative: { czech: 'pomalejší', russian: 'медленнее', pronunciation: 'помалэйши' },
    superlative: { czech: 'nejpomalejší', russian: 'самый медленный', pronunciation: 'нэйпомалэйши' },
  },
  {
    id: 'ac16',
    positive: { czech: 'těžký', russian: 'тяжёлый', pronunciation: 'тьэжки' },
    comparative: { czech: 'těžší', russian: 'тяжелее', pronunciation: 'тьэжши' },
    superlative: { czech: 'nejtěžší', russian: 'самый тяжёлый', pronunciation: 'нэйтьэжши' },
  },
  {
    id: 'ac17',
    positive: { czech: 'lehký', russian: 'лёгкий', pronunciation: 'лэги' },
    comparative: { czech: 'lehčí', russian: 'легче', pronunciation: 'лэхчи' },
    superlative: { czech: 'nejlehčí', russian: 'самый лёгкий', pronunciation: 'нэйлэхчи' },
  },
  {
    id: 'ac18',
    positive: { czech: 'teplý', russian: 'тёплый', pronunciation: 'тэпли' },
    comparative: { czech: 'teplejší', russian: 'теплее', pronunciation: 'тэплэйши' },
    superlative: { czech: 'nejteplejší', russian: 'самый тёплый', pronunciation: 'нэйтэплэйши' },
  },
  {
    id: 'ac19',
    positive: { czech: 'chladný', russian: 'холодный', pronunciation: 'хладни' },
    comparative: { czech: 'chladnější', russian: 'холоднее', pronunciation: 'хладньэйши' },
    superlative: { czech: 'nejchladnější', russian: 'самый холодный', pronunciation: 'нэйхладньэйши' },
  },
  {
    id: 'ac20',
    positive: { czech: 'bohatý', russian: 'богатый', pronunciation: 'богати' },
    comparative: { czech: 'bohatší', russian: 'богаче', pronunciation: 'богахши' },
    superlative: { czech: 'nejbohatší', russian: 'самый богатый', pronunciation: 'нэйбогахши' },
  },
  {
    id: 'ac21',
    positive: { czech: 'chudý', russian: 'бедный', pronunciation: 'худи' },
    comparative: { czech: 'chudší', russian: 'беднее', pronunciation: 'худши' },
    superlative: { czech: 'nejchudší', russian: 'самый бедный', pronunciation: 'нэйхудши' },
  },
  {
    id: 'ac22',
    positive: { czech: 'nový', russian: 'новый', pronunciation: 'нови' },
    comparative: { czech: 'novější', russian: 'новее', pronunciation: 'новэйши' },
    superlative: { czech: 'nejnovější', russian: 'самый новый', pronunciation: 'нэйновэйши' },
  },
  {
    id: 'ac23',
    positive: { czech: 'zajímavý', russian: 'интересный', pronunciation: 'заимави' },
    comparative: { czech: 'zajímavější', russian: 'интереснее', pronunciation: 'заимавэйши' },
    superlative: { czech: 'nejzajímavější', russian: 'самый интересный', pronunciation: 'нэйзаимавэйши' },
  },
  {
    id: 'ac24',
    positive: { czech: 'nudný', russian: 'скучный', pronunciation: 'нудни' },
    comparative: { czech: 'nudnější', russian: 'скучнее', pronunciation: 'нудньэйши' },
    superlative: { czech: 'nejnudnější', russian: 'самый скучный', pronunciation: 'нэйнудньэйши' },
  },
  {
    id: 'ac25',
    positive: { czech: 'tichý', russian: 'тихий', pronunciation: 'тихи' },
    comparative: { czech: 'tišší', russian: 'тише', pronunciation: 'тишши' },
    superlative: { czech: 'nejtišší', russian: 'самый тихий', pronunciation: 'нэйтишши' },
  },
  {
    id: 'ac26',
    positive: { czech: 'hlučný', russian: 'шумный', pronunciation: 'глучни' },
    comparative: { czech: 'hlučnější', russian: 'шумнее', pronunciation: 'глучнэйши' },
    superlative: { czech: 'nejhlučnější', russian: 'самый шумный', pronunciation: 'нэйглучнэйши' },
  },
  {
    id: 'ac27',
    positive: { czech: 'čistý', russian: 'чистый', pronunciation: 'чисти' },
    comparative: { czech: 'čistší', russian: 'чище', pronunciation: 'чистши' },
    superlative: { czech: 'nejčistší', russian: 'самый чистый', pronunciation: 'нэйчистши' },
  },
  {
    id: 'ac28',
    positive: { czech: 'špinavý', russian: 'грязный', pronunciation: 'шпинави' },
    comparative: { czech: 'špinavější', russian: 'грязнее', pronunciation: 'шпинавэйши' },
    superlative: { czech: 'nejšpinavější', russian: 'самый грязный', pronunciation: 'нэйшпинавэйши' },
  },
  {
    id: 'ac29',
    positive: { czech: 'zdravý', russian: 'здоровый', pronunciation: 'здрави' },
    comparative: { czech: 'zdravější', russian: 'здоровее', pronunciation: 'здравэйши' },
    superlative: { czech: 'nejzdravější', russian: 'самый здоровый', pronunciation: 'нэйздравэйши' },
  },
  {
    id: 'ac30',
    positive: { czech: 'šťastný', russian: 'счастливый', pronunciation: 'штastни' },
    comparative: { czech: 'šťastnější', russian: 'счастливее', pronunciation: 'штastньэйши' },
    superlative: { czech: 'nejšťastnější', russian: 'самый счастливый', pronunciation: 'нэйштastньэйши' },
  },
  {
    id: 'ac31',
    positive: { czech: 'hubený', russian: 'худой', pronunciation: 'губэни' },
    comparative: { czech: 'hubenější', russian: 'худее', pronunciation: 'губэнэйши' },
    superlative: { czech: 'nejhubenější', russian: 'самый худой', pronunciation: 'нэйгубэнэйши' },
  },
  {
    id: 'ac32',
    positive: { czech: 'tlustý', russian: 'толстый', pronunciation: 'тлусти' },
    comparative: { czech: 'tlustší', russian: 'толще', pronunciation: 'тлустши' },
    superlative: { czech: 'nejtlustší', russian: 'самый толстый', pronunciation: 'нэйтлустши' },
  },
  {
    id: 'ac33',
    positive: { czech: 'vysoký', russian: 'высокий', pronunciation: 'високи' },
    comparative: { czech: 'vyšší', russian: 'выше', pronunciation: 'вишши' },
    superlative: { czech: 'nejvyšší', russian: 'самый высокий', pronunciation: 'нэйвишши' },
  },
  {
    id: 'ac34',
    positive: { czech: 'nízký', russian: 'низкий', pronunciation: 'низки' },
    comparative: { czech: 'nižší', russian: 'ниже', pronunciation: 'нишши' },
    superlative: { czech: 'nejnížší', russian: 'самый низкий', pronunciation: 'нэйнишши' },
  },
  {
    id: 'ac35',
    positive: { czech: 'široký', russian: 'широкий', pronunciation: 'широки' },
    comparative: { czech: 'širší', russian: 'шире', pronunciation: 'ширши' },
    superlative: { czech: 'nejširší', russian: 'самый широкий', pronunciation: 'нэйширши' },
  },
  {
    id: 'ac36',
    positive: { czech: 'úzký', russian: 'узкий', pronunciation: 'уузки' },
    comparative: { czech: 'užší', russian: 'уже', pronunciation: 'ужши' },
    superlative: { czech: 'nejužší', russian: 'самый узкий', pronunciation: 'нэйужши' },
  },
  {
    id: 'ac37',
    positive: { czech: 'hluboký', russian: 'глубокий', pronunciation: 'глубоки' },
    comparative: { czech: 'hlubší', russian: 'глубже', pronunciation: 'глубши' },
    superlative: { czech: 'nejhlubší', russian: 'самый глубокий', pronunciation: 'нэйглубши' },
  },
  {
    id: 'ac38',
    positive: { czech: 'měkký', russian: 'мягкий', pronunciation: 'мьэкки' },
    comparative: { czech: 'měkčí', russian: 'мягче', pronunciation: 'мьэкчи' },
    superlative: { czech: 'nejměkčí', russian: 'самый мягкий', pronunciation: 'нэймьэкчи' },
  },
  {
    id: 'ac39',
    positive: { czech: 'tvrdý', russian: 'твёрдый', pronunciation: 'твърди' },
    comparative: { czech: 'tvrdší', russian: 'твёрже', pronunciation: 'твърдши' },
    superlative: { czech: 'nejtvrdší', russian: 'самый твёрдый', pronunciation: 'нэйтвърдши' },
  },
  {
    id: 'ac40',
    positive: { czech: 'bezpečný', russian: 'безопасный', pronunciation: 'бэздпэчни' },
    comparative: { czech: 'bezpečnější', russian: 'безопаснее', pronunciation: 'бэздпэчнэйши' },
    superlative: { czech: 'nejbezpečnější', russian: 'самый безопасный', pronunciation: 'нэйбэздпэчнэйши' },
  },
];
