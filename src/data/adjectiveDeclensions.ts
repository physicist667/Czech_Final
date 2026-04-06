// =============================================================================
// СКЛОНЕНИЕ ПРИЛАГАТЕЛЬНЫХ (Adjective Declensions)
// =============================================================================

/**
 * Each row represents one case across all genders/numbers.
 * forms[] has 7 slots:
 *   [0] = masculine animate   singular
 *   [1] = masculine inanimate singular
 *   [2] = feminine            singular
 *   [3] = neuter              singular
 *   [4] = masculine           plural  (anim + inan merge)
 *   [5] = feminine            plural
 *   [6] = neuter              plural
 */
export interface AdjCell {
  czech: string;
  pron: string; // Russian transliteration
}

export interface AdjDeclRow {
  caseLabel: string; // e.g. "Nominativ (кто? что?)"
  forms: AdjCell[];
}

export interface AdjDeclension {
  id: string;
  pattern: string;           // 'hard' | 'soft' | 'possessive' | 'demonstrative'
  description: string;       // Czech description
  descriptionRussian: string;// Russian description
  example: string;           // e.g. "mladý"
  exampleRussian: string;    // e.g. "молодой"
  genderLabels: string[];    // column headers: 7 labels
  rows: AdjDeclRow[];
  notes?: string;
}

// ---------------------------------------------------------------------------
// Comparison
// ---------------------------------------------------------------------------
export interface AdjectiveComparison {
  adjective: string;
  russian: string;
  comparative: string;
  superlative: string;
  comparativePron: string;
  superlativePron: string;
  isIrregular: boolean;
}

// ---------------------------------------------------------------------------
// Shared column labels (used by most patterns)
// ---------------------------------------------------------------------------
const standardGenderLabels: string[] = [
  'm. živý (ед.)',   // masculine animate singular
  'm. neživý (ед.)',  // masculine inanimate singular
  'ženský (ед.)',     // feminine singular
  'střední (ед.)',    // neuter singular
  'm. množné',        // masculine plural
  'ženské množné',    // feminine plural
  'střední množné',   // neuter plural
];

const possessiveGenderLabels: string[] = [
  'm. živý (ед.)',
  'm. neživý (ед.)',
  'ženský (ед.)',
  'střední (ед.)',
  'všechna množné', // possessive merges in plural
  '—',
  '—',
];

const demonstrativeGenderLabels: string[] = [
  'm. živý (ед.)',
  'm. neživý (ед.)',
  'ženský (ед.)',
  'střední (ед.)',
  'm. množné',
  'ženské množné',
  'střední množné',
];

// =============================================================================
// 1. HARD ADJECTIVE: "mladý" (молодой)
// =============================================================================

const mladyDeclension: AdjDeclension = {
  id: 'adj-hard-mlady',
  pattern: 'hard',
  description: 'Tvrdé přídavné jméno (mladý)',
  descriptionRussian: 'Твёрдое прилагательное (молодой)',
  example: 'mladý',
  exampleRussian: 'молодой',
  genderLabels: standardGenderLabels,
  rows: [
    {
      caseLabel: 'Nominativ (jaký? jaká? jaké?)',
      forms: [
        { czech: 'mladý', pron: 'млади' },
        { czech: 'mladý', pron: 'млади' },
        { czech: 'mladá', pron: 'млада' },
        { czech: 'mladé', pron: 'младэ' },
        { czech: 'mladí', pron: 'млади' },
        { czech: 'mladé', pron: 'младэ' },
        { czech: 'mladá', pron: 'млада' },
      ],
    },
    {
      caseLabel: 'Genitiv (jakého? jaké? jakých?)',
      forms: [
        { czech: 'mladého', pron: 'младэго' },
        { czech: 'mladého', pron: 'младэго' },
        { czech: 'mladé', pron: 'младэ' },
        { czech: 'mladého', pron: 'младэго' },
        { czech: 'mladých', pron: 'младых' },
        { czech: 'mladých', pron: 'младых' },
        { czech: 'mladých', pron: 'младых' },
      ],
    },
    {
      caseLabel: 'Dativ (jakému? jaké? jakým?)',
      forms: [
        { czech: 'mladému', pron: 'младэму' },
        { czech: 'mladému', pron: 'младэму' },
        { czech: 'mladé', pron: 'младэ' },
        { czech: 'mladému', pron: 'младэму' },
        { czech: 'mladým', pron: 'младим' },
        { czech: 'mladým', pron: 'младим' },
        { czech: 'mladým', pron: 'младим' },
      ],
    },
    {
      caseLabel: 'Akuzativ (jakého? jakou? jaká?)',
      forms: [
        { czech: 'mladého', pron: 'младэго' }, // anim = gen
        { czech: 'mladý', pron: 'млади' },      // inanim = nom
        { czech: 'mladou', pron: 'младоу' },
        { czech: 'mladé', pron: 'младэ' },
        { czech: 'mladé', pron: 'младэ' },      // pl anim = gen
        { czech: 'mladé', pron: 'младэ' },
        { czech: 'mladá', pron: 'млада' },
      ],
    },
    {
      caseLabel: 'Vokativ (jaký! jaká! jaké!)',
      forms: [
        { czech: 'mladý', pron: 'млади' },
        { czech: 'mladý', pron: 'млади' },
        { czech: 'mladá', pron: 'млада' },
        { czech: 'mladé', pron: 'младэ' },
        { czech: 'mladí', pron: 'млади' },
        { czech: 'mladé', pron: 'младэ' },
        { czech: 'mladá', pron: 'млада' },
      ],
    },
    {
      caseLabel: 'Lokál (jakém? jaké? jakých?)',
      forms: [
        { czech: 'mladém', pron: 'младэм' },
        { czech: 'mladém', pron: 'младэм' },
        { czech: 'mladé', pron: 'младэ' },
        { czech: 'mladém', pron: 'младэм' },
        { czech: 'mladých', pron: 'младых' },
        { czech: 'mladých', pron: 'младых' },
        { czech: 'mladých', pron: 'младых' },
      ],
    },
    {
      caseLabel: 'Instrumentál (jakým? jakou? jakými?)',
      forms: [
        { czech: 'mladým', pron: 'младим' },
        { czech: 'mladým', pron: 'младим' },
        { czech: 'mladou', pron: 'младоу' },
        { czech: 'mladým', pron: 'младим' },
        { czech: 'mladými', pron: 'младими' },
        { czech: 'mladými', pron: 'младими' },
        { czech: 'mladými', pron: 'младими' },
      ],
    },
  ],
  notes: 'Твёрдое склонение — основная модель прилагательных мужского рода на -ý (krásný, vysoký, nový). В винительном падеже: одушевлённый = родительный, неодушевлённый = именительный.',
};

// =============================================================================
// 2. SOFT ADJECTIVE: "cizí" (чужой / иностранный)
// =============================================================================

const ciziDeclension: AdjDeclension = {
  id: 'adj-soft-cizi',
  pattern: 'soft',
  description: 'Měkké přídavné jméno (cizí)',
  descriptionRussian: 'Мягкое прилагательное (cizí — иностранный)',
  example: 'cizí',
  exampleRussian: 'иностранный',
  genderLabels: standardGenderLabels,
  rows: [
    {
      caseLabel: 'Nominativ (jaký? jaká? jaké?)',
      forms: [
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
      ],
    },
    {
      caseLabel: 'Genitiv (jakého? jaké? jakých?)',
      forms: [
        { czech: 'cizího', pron: 'цижего' },
        { czech: 'cizího', pron: 'цижего' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizího', pron: 'цижего' },
        { czech: 'cizích', pron: 'цижих' },
        { czech: 'cizích', pron: 'цижих' },
        { czech: 'cizích', pron: 'цижих' },
      ],
    },
    {
      caseLabel: 'Dativ (jakému? jaké? jakým?)',
      forms: [
        { czech: 'cizímu', pron: 'цижиму' },
        { czech: 'cizímu', pron: 'цижиму' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizímu', pron: 'цижиму' },
        { czech: 'cizím', pron: 'цижим' },
        { czech: 'cizím', pron: 'цижим' },
        { czech: 'cizím', pron: 'цижим' },
      ],
    },
    {
      caseLabel: 'Akuzativ (jakého? jakou? jaká?)',
      forms: [
        { czech: 'cizího', pron: 'цижего' }, // anim = gen
        { czech: 'cizí', pron: 'цижи' },      // inanim = nom
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },      // pl
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
      ],
    },
    {
      caseLabel: 'Vokativ (jaký! jaká! jaké!)',
      forms: [
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizí', pron: 'цижи' },
      ],
    },
    {
      caseLabel: 'Lokál (jakém? jaké? jakých?)',
      forms: [
        { czech: 'cizím', pron: 'цижим' },
        { czech: 'cizím', pron: 'цижим' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizím', pron: 'цижим' },
        { czech: 'cizích', pron: 'цижих' },
        { czech: 'cizích', pron: 'цижих' },
        { czech: 'cizích', pron: 'цижих' },
      ],
    },
    {
      caseLabel: 'Instrumentál (jakým? jakou? jakými?)',
      forms: [
        { czech: 'cizím', pron: 'цижим' },
        { czech: 'cizím', pron: 'цижим' },
        { czech: 'cizí', pron: 'цижи' },
        { czech: 'cizím', pron: 'цижим' },
        { czech: 'cizími', pron: 'цижими' },
        { czech: 'cizími', pron: 'цижими' },
        { czech: 'cizími', pron: 'цижими' },
      ],
    },
  ],
  notes: 'Мягкое склонение — прилагательные на -í (cizí, jarní, moderní, šťastný). Во многих формах окончания совпадают. Родительный муж./ср. ед.: -ího, творительный ед.: -ím.',
};

// =============================================================================
// 3. DEMONSTRATIVE ADJECTIVE: "tento" (этот)
// =============================================================================

const tentoDeclension: AdjDeclension = {
  id: 'adj-dem-tento',
  pattern: 'demonstrative',
  description: 'Ukazovací zájmeno / přídavné jméno (tento)',
  descriptionRussian: 'Указательное местоимение-прилагательное (tento — этот)',
  example: 'tento',
  exampleRussian: 'этот',
  genderLabels: demonstrativeGenderLabels,
  rows: [
    {
      caseLabel: 'Nominativ (jaký? jaká? jaké?)',
      forms: [
        { czech: 'tento', pron: 'тэсто' },
        { czech: 'tento', pron: 'тэсто' },
        { czech: 'tato', pron: 'тата' },
        { czech: 'toto', pron: 'тото' },
        { czech: 'tito', pron: 'тито' },
        { czech: 'tyto', pron: 'тисто' },
        { czech: 'tato', pron: 'тата' },
      ],
    },
    {
      caseLabel: 'Genitiv (jakého? jaké? jakých?)',
      forms: [
        { czech: 'tohoto', pron: 'тогото' },
        { czech: 'tohoto', pron: 'тогото' },
        { czech: 'této', pron: 'тэто' },
        { czech: 'tohoto', pron: 'тогото' },
        { czech: 'těchto', pron: 'техто' },
        { czech: 'těchto', pron: 'техто' },
        { czech: 'těchto', pron: 'техто' },
      ],
    },
    {
      caseLabel: 'Dativ (jakému? jaké? jakým?)',
      forms: [
        { czech: 'tomuto', pron: 'томуто' },
        { czech: 'tomuto', pron: 'томуто' },
        { czech: 'této', pron: 'тэто' },
        { czech: 'tomuto', pron: 'томуто' },
        { czech: 'těmto', pron: 'тэмто' },
        { czech: 'těmto', pron: 'тэмто' },
        { czech: 'těmto', pron: 'тэмто' },
      ],
    },
    {
      caseLabel: 'Akuzativ (jakého? jakou? jaká?)',
      forms: [
        { czech: 'tento', pron: 'тэсто' },  // anim masc = gen
        { czech: 'tento', pron: 'тэсто' },  // inanim = nom
        { czech: 'tuto', pron: 'туту' },
        { czech: 'toto', pron: 'тото' },
        { czech: 'tyto', pron: 'тисто' },   // pl masc
        { czech: 'tyto', pron: 'тисто' },
        { czech: 'tato', pron: 'тата' },
      ],
    },
    {
      caseLabel: 'Vokativ (jaký! jaká! jaké!)',
      forms: [
        { czech: 'tento', pron: 'тэсто' },
        { czech: 'tento', pron: 'тэсто' },
        { czech: 'tato', pron: 'тата' },
        { czech: 'toto', pron: 'тото' },
        { czech: 'tito', pron: 'тито' },
        { czech: 'tyto', pron: 'тисто' },
        { czech: 'tato', pron: 'тата' },
      ],
    },
    {
      caseLabel: 'Lokál (jakém? jaké? jakých?)',
      forms: [
        { czech: 'tomuto', pron: 'томуто' },
        { czech: 'tomuto', pron: 'томуто' },
        { czech: 'této', pron: 'тэто' },
        { czech: 'tomuto', pron: 'томуто' },
        { czech: 'těchto', pron: 'техто' },
        { czech: 'těchto', pron: 'техто' },
        { czech: 'těchto', pron: 'техто' },
      ],
    },
    {
      caseLabel: 'Instrumentál (jakým? jakou? jakými?)',
      forms: [
        { czech: 'tímto', pron: 'тимто' },
        { czech: 'tímto', pron: 'тимто' },
        { czech: 'touto', pron: 'тоуто' },
        { czech: 'tímto', pron: 'тимто' },
        { czech: 'těmito', pron: 'тэмито' },
        { czech: 'těmito', pron: 'тэмито' },
        { czech: 'těmito', pron: 'тэмито' },
      ],
    },
  ],
  notes: 'Указательное прилагательное «tento» (этот). Склоняется как прилагательное, но с показательным элементом -to. Женский род: tato/tuto. Средний: toto. Множественное число: tito (муж.), tyto (жен./ср.).',
};

// =============================================================================
// 3b. DEMONSTRATIVE ADJECTIVE: "ten" (тот)
// =============================================================================

const tenDeclension: AdjDeclension = {
  id: 'adj-dem-ten',
  pattern: 'demonstrative',
  description: 'Ukazovací zájmeno (ten)',
  descriptionRussian: 'Указательное местоимение (ten — тот)',
  example: 'ten',
  exampleRussian: 'тот',
  genderLabels: demonstrativeGenderLabels,
  rows: [
    {
      caseLabel: 'Nominativ (jaký? jaká? jaké?)',
      forms: [
        { czech: 'ten', pron: 'тэн' },
        { czech: 'ten', pron: 'тэн' },
        { czech: 'ta', pron: 'та' },
        { czech: 'to', pron: 'то' },
        { czech: 'ti', pron: 'ти' },
        { czech: 'ty', pron: 'ти' },
        { czech: 'ta', pron: 'та' },
      ],
    },
    {
      caseLabel: 'Genitiv (jakého? jaké? jakých?)',
      forms: [
        { czech: 'toho', pron: 'того' },
        { czech: 'toho', pron: 'того' },
        { czech: 'té', pron: 'тэ' },
        { czech: 'toho', pron: 'того' },
        { czech: 'těch', pron: 'тех' },
        { czech: 'těch', pron: 'тех' },
        { czech: 'těch', pron: 'тех' },
      ],
    },
    {
      caseLabel: 'Dativ (jakému? jaké? jakým?)',
      forms: [
        { czech: 'tomu', pron: 'тому' },
        { czech: 'tomu', pron: 'тому' },
        { czech: 'té', pron: 'тэ' },
        { czech: 'tomu', pron: 'тому' },
        { czech: 'těm', pron: 'тэм' },
        { czech: 'těm', pron: 'тэм' },
        { czech: 'těm', pron: 'тэм' },
      ],
    },
    {
      caseLabel: 'Akuzativ (jakého? jakou? jaká?)',
      forms: [
        { czech: 'toho', pron: 'того' }, // anim = gen
        { czech: 'ten', pron: 'тэн' },   // inanim = nom
        { czech: 'tu', pron: 'ту' },
        { czech: 'to', pron: 'то' },
        { czech: 'ty', pron: 'ти' },     // pl
        { czech: 'ty', pron: 'ти' },
        { czech: 'ta', pron: 'та' },
      ],
    },
    {
      caseLabel: 'Vokativ (jaký! jaká! jaké!)',
      forms: [
        { czech: 'ten', pron: 'тэн' },
        { czech: 'ten', pron: 'тэн' },
        { czech: 'ta', pron: 'та' },
        { czech: 'to', pron: 'то' },
        { czech: 'ti', pron: 'ти' },
        { czech: 'ty', pron: 'ти' },
        { czech: 'ta', pron: 'та' },
      ],
    },
    {
      caseLabel: 'Lokál (jakém? jaké? jakých?)',
      forms: [
        { czech: 'tom', pron: 'том' },
        { czech: 'tom', pron: 'том' },
        { czech: 'té', pron: 'тэ' },
        { czech: 'tom', pron: 'том' },
        { czech: 'těch', pron: 'тех' },
        { czech: 'těch', pron: 'тех' },
        { czech: 'těch', pron: 'тех' },
      ],
    },
    {
      caseLabel: 'Instrumentál (jakým? jakou? jakými?)',
      forms: [
        { czech: 'tím', pron: 'тим' },
        { czech: 'tím', pron: 'тим' },
        { czech: 'tou', pron: 'тоу' },
        { czech: 'tím', pron: 'тим' },
        { czech: 'těmi', pron: 'тэми' },
        { czech: 'těmi', pron: 'тэми' },
        { czech: 'těmi', pron: 'тэми' },
      ],
    },
  ],
  notes: 'Указательное местоимение «ten» (тот). Короче чем «tento», используется чаще. Женский: ta/tu, средний: to. Мн.ч.: ti (муж.), ty (жен./ср.).',
};

// =============================================================================
// 3c. DEMONSTRATIVE ADJECTIVE: "tenhle" (вон тот / этот)
// =============================================================================

const tenhleDeclension: AdjDeclension = {
  id: 'adj-dem-tenhle',
  pattern: 'demonstrative',
  description: 'Ukazovací zájmeno (tenhle)',
  descriptionRussian: 'Указательное местоимение (tenhle — вот этот)',
  example: 'tenhle',
  exampleRussian: 'вот этот',
  genderLabels: demonstrativeGenderLabels,
  rows: [
    {
      caseLabel: 'Nominativ (jaký? jaká? jaké?)',
      forms: [
        { czech: 'tenhle', pron: 'тэнхлэ' },
        { czech: 'tenhle', pron: 'тэнхлэ' },
        { czech: ' tahle', pron: 'тахлэ' },
        { czech: 'tohle', pron: 'тохлэ' },
        { czech: 'ti', pron: 'ти' },
        { czech: 'ty', pron: 'ти' },
        { czech: 'ta', pron: 'та' },
      ],
    },
    {
      caseLabel: 'Genitiv (jakého? jaké? jakých?)',
      forms: [
        { czech: 'tohohle', pron: 'тохохлэ' },
        { czech: 'tohohle', pron: 'тохохлэ' },
        { czech: 'téhle', pron: 'тэхлэ' },
        { czech: 'tohohle', pron: 'тохохлэ' },
        { czech: 'těchle', pron: 'техлэ' },
        { czech: 'těchle', pron: 'техлэ' },
        { czech: 'těchle', pron: 'техлэ' },
      ],
    },
    {
      caseLabel: 'Dativ (jakému? jaké? jakým?)',
      forms: [
        { czech: 'tomuhle', pron: 'томухлэ' },
        { czech: 'tomuhle', pron: 'томухлэ' },
        { czech: 'téhle', pron: 'тэхлэ' },
        { czech: 'tomuhle', pron: 'томухлэ' },
        { czech: 'těmle', pron: 'тэмлэ' },
        { czech: 'těmle', pron: 'тэмлэ' },
        { czech: 'těmle', pron: 'тэмлэ' },
      ],
    },
    {
      caseLabel: 'Akuzativ (jakého? jakou? jaká?)',
      forms: [
        { czech: 'tohohle', pron: 'тохохлэ' },
        { czech: 'tenhle', pron: 'тэнхлэ' },
        { czech: 'tuhle', pron: 'тухлэ' },
        { czech: 'tohle', pron: 'тохлэ' },
        { czech: 'ty', pron: 'ти' },
        { czech: 'ty', pron: 'ти' },
        { czech: 'ta', pron: 'та' },
      ],
    },
    {
      caseLabel: 'Vokativ (jaký! jaká! jaké!)',
      forms: [
        { czech: 'tenhle', pron: 'тэнхлэ' },
        { czech: 'tenhle', pron: 'тэнхлэ' },
        { czech: 'tahle', pron: 'тахлэ' },
        { czech: 'tohle', pron: 'тохлэ' },
        { czech: 'ti', pron: 'ти' },
        { czech: 'ty', pron: 'ти' },
        { czech: 'ta', pron: 'та' },
      ],
    },
    {
      caseLabel: 'Lokál (jakém? jaké? jakých?)',
      forms: [
        { czech: 'tomhle', pron: 'томхлэ' },
        { czech: 'tomhle', pron: 'томхлэ' },
        { czech: 'téhle', pron: 'тэхлэ' },
        { czech: 'tomhle', pron: 'томхлэ' },
        { czech: 'těchle', pron: 'техлэ' },
        { czech: 'těchle', pron: 'техлэ' },
        { czech: 'těchle', pron: 'техлэ' },
      ],
    },
    {
      caseLabel: 'Instrumentál (jakým? jakou? jakými?)',
      forms: [
        { czech: 'tímhle', pron: 'тимхлэ' },
        { czech: 'tímhle', pron: 'тимхлэ' },
        { czech: 'touhle', pron: 'тоухлэ' },
        { czech: 'tímhle', pron: 'тимхлэ' },
        { czech: 'těma', pron: 'тэма' },
        { czech: 'těma', pron: 'тэма' },
        { czech: 'těma', pron: 'тэма' },
      ],
    },
  ],
  notes: 'Разговорное указательное местоимение «tenhle» (вот этот). Склоняется как «ten» + частица -hle. Во множественном числе обычно совпадает с «ten». Женский: tahle/tuhle, средний: tohle.',
};

// =============================================================================
// 4. POSSESSIVE ADJECTIVE: "matčin" (мамин)
// =============================================================================

const matcinDeclension: AdjDeclension = {
  id: 'adj-poss-matcin',
  pattern: 'possessive',
  description: 'Přivlastňovací přídavné jméno (matčin)',
  descriptionRussian: 'Притяжательное прилагательное (matčin — мамин)',
  example: 'matčin',
  exampleRussian: 'мамин',
  genderLabels: possessiveGenderLabels,
  rows: [
    {
      caseLabel: 'Nominativ (čí?)',
      forms: [
        { czech: 'matčin', pron: 'матчин' },
        { czech: 'matčin', pron: 'матчин' },
        { czech: 'matčina', pron: 'матчина' },
        { czech: 'matčino', pron: 'матчино' },
        { czech: 'matčiny', pron: 'матчини' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Genitiv (čeho?)',
      forms: [
        { czech: 'matčina', pron: 'матчина' },
        { czech: 'matčina', pron: 'матчина' },
        { czech: 'matčiny', pron: 'матчини' },
        { czech: 'matčina', pron: 'матчина' },
        { czech: 'matčiných', pron: 'матчиныx' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Dativ (čemu?)',
      forms: [
        { czech: 'matčinovi', pron: 'матчинови' },
        { czech: 'matčinu', pron: 'матчину' },
        { czech: 'matčině', pron: 'матчинэ' },
        { czech: 'matčinu', pron: 'матчину' },
        { czech: 'matčinům', pron: 'матчином' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Akuzativ (koho? co?)',
      forms: [
        { czech: 'matčina', pron: 'матчина' }, // anim = gen
        { czech: 'matčin', pron: 'матчин' },   // inanim = nom
        { czech: 'matčinu', pron: 'матчину' },
        { czech: 'matčino', pron: 'матчино' },
        { czech: 'matčiny', pron: 'матчини' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Vokativ (čí!)',
      forms: [
        { czech: 'matčine', pron: 'матчинэ' },
        { czech: 'matčine', pron: 'матчинэ' },
        { czech: 'matčino', pron: 'матчино' },
        { czech: 'matčino', pron: 'матчино' },
        { czech: 'matčiny', pron: 'матчини' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Lokál (čím?)',
      forms: [
        { czech: 'matčinovi', pron: 'матчинови' },
        { czech: 'matčině', pron: 'матчинэ' },
        { czech: 'matčině', pron: 'матчинэ' },
        { czech: 'matčině', pron: 'матчинэ' },
        { czech: 'matčiných', pron: 'матчиныx' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Instrumentál (čím?)',
      forms: [
        { czech: 'matčinem', pron: 'матчинэм' },
        { czech: 'matčinem', pron: 'матчинэм' },
        { czech: 'matčinou', pron: 'матчиноу' },
        { czech: 'matčinem', pron: 'матчинэм' },
        { czech: 'matčinými', pron: 'матчиними' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
  ],
  notes: 'Притяжательные прилагательные от материнского корня (matka → matčin). Образуются суффиксом -in/-inů. Дательный муж. одуш.: matčinovi, неодуш.: matčinu. Во множественном все формы общие.',
};

// =============================================================================
// 4b. POSSESSIVE ADJECTIVE: "otcův" (папин)
// =============================================================================

const otcuvDeclension: AdjDeclension = {
  id: 'adj-poss-otcuv',
  pattern: 'possessive',
  description: 'Přivlastňovací přídavné jméno (otcův)',
  descriptionRussian: 'Притяжательное прилагательное (otcův — папин)',
  example: 'otcův',
  exampleRussian: 'папин',
  genderLabels: possessiveGenderLabels,
  rows: [
    {
      caseLabel: 'Nominativ (čí?)',
      forms: [
        { czech: 'otcův', pron: 'отцув' },
        { czech: 'otcův', pron: 'отцув' },
        { czech: 'otcova', pron: 'отцова' },
        { czech: 'otcovo', pron: 'отцово' },
        { czech: 'otcovy', pron: 'отцови' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Genitiv (čeho?)',
      forms: [
        { czech: 'otcova', pron: 'отцова' },
        { czech: 'otcova', pron: 'отцова' },
        { czech: 'otcovy', pron: 'отцови' },
        { czech: 'otcova', pron: 'отцова' },
        { czech: 'otcových', pron: 'отцовых' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Dativ (čemu?)',
      forms: [
        { czech: 'otcovu', pron: 'отцову' },
        { czech: 'otcovu', pron: 'отцову' },
        { czech: 'otcově', pron: 'отцовэ' },
        { czech: 'otcovu', pron: 'отцову' },
        { czech: 'otcovům', pron: 'отцовом' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Akuzativ (koho? co?)',
      forms: [
        { czech: 'otcova', pron: 'отцова' }, // anim = gen
        { czech: 'otcův', pron: 'отцув' },   // inanim = nom
        { czech: 'otcovu', pron: 'отцову' },
        { czech: 'otcovo', pron: 'отцово' },
        { czech: 'otcovy', pron: 'отцови' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Vokativ (čí!)',
      forms: [
        { czech: 'otcův', pron: 'отцув' },
        { czech: 'otcův', pron: 'отцув' },
        { czech: 'otcova', pron: 'отцова' },
        { czech: 'otcovo', pron: 'отцово' },
        { czech: 'otcovy', pron: 'отцови' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Lokál (čím?)',
      forms: [
        { czech: 'otcově', pron: 'отцовэ' },
        { czech: 'otcově', pron: 'отцовэ' },
        { czech: 'otcově', pron: 'отцовэ' },
        { czech: 'otcově', pron: 'отцовэ' },
        { czech: 'otcových', pron: 'отцовых' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
    {
      caseLabel: 'Instrumentál (čím?)',
      forms: [
        { czech: 'otcovem', pron: 'отцовэм' },
        { czech: 'otcovem', pron: 'отцовэм' },
        { czech: 'otcovou', pron: 'отцовоу' },
        { czech: 'otcovem', pron: 'отцовэм' },
        { czech: 'otcovými', pron: 'отцовыми' },
        { czech: '—', pron: '' },
        { czech: '—', pron: '' },
      ],
    },
  ],
  notes: 'Притяжательные прилагательные от отцовского корня (otec → otcův). Окончание -ův в именительном муж. рода. Склонение похоже на matčin, но с твёрдыми основами.',
};

// =============================================================================
// 5. COMPARISON FORMS
// =============================================================================

export const adjectiveComparisons: AdjectiveComparison[] = [
  // --- Правильные (regular) ---
  {
    adjective: 'mladý',
    russian: 'молодой',
    comparative: 'mladší',
    superlative: 'nejmladší',
    comparativePron: 'младши',
    superlativePron: 'нэймладши',
    isIrregular: false,
  },
  {
    adjective: 'starý',
    russian: 'старый',
    comparative: 'starší',
    superlative: 'nejstarší',
    comparativePron: 'старши',
    superlativePron: 'нэйстарши',
    isIrregular: false,
  },
  {
    adjective: 'velký',
    russian: 'большой',
    comparative: 'větší',
    superlative: 'největší',
    comparativePron: 'вэтши',
    superlativePron: 'нэйвэтши',
    isIrregular: false,
  },
  {
    adjective: 'malý',
    russian: 'маленький',
    comparative: 'menší',
    superlative: 'nejmenší',
    comparativePron: 'мэнши',
    superlativePron: 'нэймэнши',
    isIrregular: true,
  },
  {
    adjective: 'dobrý',
    russian: 'хороший',
    comparative: 'lepší',
    superlative: 'nejlepší',
    comparativePron: 'лэпши',
    superlativePron: 'нэйлэпши',
    isIrregular: true,
  },
  {
    adjective: 'špatný',
    russian: 'плохой',
    comparative: 'horší',
    superlative: 'nejhorší',
    comparativePron: 'горши',
    superlativePron: 'нэйгорши',
    isIrregular: true,
  },
  {
    adjective: 'krásný',
    russian: 'красивый',
    comparative: 'krásnější',
    superlative: 'nejkrásnější',
    comparativePron: 'краснэйши',
    superlativePron: 'нэйкраснэйши',
    isIrregular: false,
  },
  {
    adjective: 'inteligentní',
    russian: 'умный',
    comparative: 'inteligentnější',
    superlative: 'nejinteligentnější',
    comparativePron: 'интэлигэнтнэйши',
    superlativePron: 'нэйинтэлигэнтнэйши',
    isIrregular: false,
  },
  {
    adjective: 'drahý',
    russian: 'дорогой',
    comparative: 'dražší',
    superlative: 'nejdražší',
    comparativePron: 'дражши',
    superlativePron: 'нэйдражши',
    isIrregular: false,
  },
  {
    adjective: 'levný',
    russian: 'дешёвый',
    comparative: 'levnější',
    superlative: 'nejlevnější',
    comparativePron: 'левнэйши',
    superlativePron: 'нэйлевнэйши',
    isIrregular: false,
  },
  {
    adjective: 'teplý',
    russian: 'тёплый',
    comparative: 'teplejší',
    superlative: 'nejteplejší',
    comparativePron: 'тэплэйши',
    superlativePron: 'нэйтэплэйши',
    isIrregular: false,
  },
  {
    adjective: 'studený',
    russian: 'холодный',
    comparative: 'chladnější',
    superlative: 'nejchladnější',
    comparativePron: 'хладнэйши',
    superlativePron: 'нэйхладнэйши',
    isIrregular: true,
  },
  {
    adjective: 'dlouhý',
    russian: 'длинный',
    comparative: 'delší',
    superlative: 'nejdelší',
    comparativePron: 'дэлши',
    superlativePron: 'нэйдэлши',
    isIrregular: true,
  },
  {
    adjective: 'krátký',
    russian: 'короткий',
    comparative: 'kratší',
    superlative: 'nejkratší',
    comparativePron: 'кратши',
    superlativePron: 'нэйкратши',
    isIrregular: false,
  },
  {
    adjective: 'vysoký',
    russian: 'высокий',
    comparative: 'vyšší',
    superlative: 'nejvyšší',
    comparativePron: 'виши',
    superlativePron: 'нэйвиши',
    isIrregular: true,
  },
  {
    adjective: 'nízký',
    russian: 'низкий',
    comparative: 'nižší',
    superlative: 'nejnižší',
    comparativePron: 'ниши',
    superlativePron: 'нэйниши',
    isIrregular: true,
  },
  {
    adjective: 'silný',
    russian: 'сильный',
    comparative: 'silnější',
    superlative: 'nejsilnější',
    comparativePron: 'силнэйши',
    superlativePron: 'нэйсилнэйши',
    isIrregular: false,
  },
  {
    adjective: 'slabý',
    russian: 'слабый',
    comparative: 'slabší',
    superlative: 'nejslabší',
    comparativePron: 'слабши',
    superlativePron: 'нэйслабши',
    isIrregular: false,
  },
  {
    adjective: 'rychlý',
    russian: 'быстрый',
    comparative: 'rychlejší',
    superlative: 'nejrychlejší',
    comparativePron: 'рихлэйши',
    superlativePron: 'нэйрихлэйши',
    isIrregular: false,
  },
  {
    adjective: 'pomalý',
    russian: 'медленный',
    comparative: 'pomalejší',
    superlative: 'nejpomalejší',
    comparativePron: 'помалэйши',
    superlativePron: 'нэйпомалэйши',
    isIrregular: false,
  },
  {
    adjective: 'bohatý',
    russian: 'богатый',
    comparative: 'bohatší',
    superlative: 'nejbohatší',
    comparativePron: 'богатши',
    superlativePron: 'нэйбогатши',
    isIrregular: false,
  },
  {
    adjective: 'chudý',
    russian: 'бедный',
    comparative: 'chudší',
    superlative: 'nejchudší',
    comparativePron: 'худши',
    superlativePron: 'нэйхудшши',
    isIrregular: false,
  },
  {
    adjective: 'zajímavý',
    russian: 'интересный',
    comparative: 'zajímavější',
    superlative: 'nejzajímavější',
    comparativePron: 'зайимавэйши',
    superlativePron: 'нэйзайимавэйши',
    isIrregular: false,
  },
  {
    adjective: 'těžký',
    russian: 'тяжёлый',
    comparative: 'těžší',
    superlative: 'nejtěžší',
    comparativePron: 'тяжши',
    superlativePron: 'нэйтяжши',
    isIrregular: false,
  },
  {
    adjective: 'lehký',
    russian: 'лёгкий',
    comparative: 'lehčí',
    superlative: 'nejlehčí',
    comparativePron: 'лехчи',
    superlativePron: 'нэйлехчи',
    isIrregular: true,
  },
];

// =============================================================================
// EXPORT ALL
// =============================================================================

export const adjectiveDeclensions: AdjDeclension[] = [
  mladyDeclension,
  ciziDeclension,
  tentoDeclension,
  tenDeclension,
  tenhleDeclension,
  matcinDeclension,
  otcuvDeclension,
];

/**
 * Comparison formation rules (for reference / display):
 *
 * ОБРАЗОВАНИЕ СРАВНИТЕЛЬНОЙ СТЕПЕНИ:
 *
 * 1. Твёрдые прилагательные (hard):
 *    - Суффикс -ší:    krásný → krásnější, silný → silnější
 *    - Суффикс -ější:   rychlý → rychlejší, pomalý → pomalejší
 *    - После ě:        dlouhý → delší, dlouhá → delší (чередование ou → e)
 *
 * 2. Мягкие прилагательные (soft):
 *    - Суффикс -ější:   inteligentní → inteligentnější
 *    - на -cký:        hezký → hezčí
 *
 * 3. ПРЕВОСХОДНАЯ СТЕПЕНЬ (superlative):
 *    - Префикc nej-:    mladší → nejmladší
 *
 * 4. НЕПРАВИЛЬНЫЕ (irregular):
 *    - dobrý  → lepší   → nejlepší     (хороший → лучше → лучший)
 *    - špatný → horší   → nejhorší     (плохой → хуже → худший)
 *    - malý   → menší   → nejmenší     (маленький → меньше → наименьший)
 *    - dlouhý → delší   → nejdelší     (длинный → длиннее → самый длинный)
 *    - vysoký → vyšší   → nejvyšší     (высокий → выше → самый высокий)
 *    - nízký  → nižší   → nejnižší     (низкий → ниже → самый низкий)
 *    - lehký  → lehčí   → nejlehčí     (лёгкий → легче → самый лёгкий)
 *    - studený→ chladnější → nejchladnější (холодный → холоднее)
 */
