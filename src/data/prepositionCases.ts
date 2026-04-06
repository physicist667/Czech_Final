export interface PrepositionCaseRule {
  id: string;
  preposition: string;
  prepositionAlt?: string; // alternative form (e.g. "ve" for "v")
  russianName: string;
  cases: {
    case: string;
    caseRussian: string;
    usage: string;
    example: string;
    exampleTranslation: string;
  }[];
  notes?: string;
}

export const prepositionCaseRules: PrepositionCaseRule[] = [
  {
    id: 'prep1',
    preposition: 'v',
    prepositionAlt: 've',
    russianName: 'в / во',
    cases: [
      {
        case: 'Lokál (6. pád)',
        caseRussian: 'Местный (6-й падеж)',
        usage: 'Местонахождение (где?) — нахождение внутри или в пределах чего-либо',
        example: 'Bydlím v Praze. / Jsem ve škole.',
        exampleTranslation: 'Я живу в Праге. / Я в школе.',
      },
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Направление (куда?) — движение внутрь чего-либо; также выражает время (дни недели)',
        example: 'Házím míč v koš. / V pondělí jdu do školy.',
        exampleTranslation: 'Бросаю мяч в корзину. / В понедельник иду в школу.',
      },
    ],
    notes: 'Форма «ve» используется перед словами, начинающимися с v- или f- (ve městě, ve Františkových Lázních). Для направления чаще используется предлог «do» + генитив.',
  },
  {
    id: 'prep2',
    preposition: 'na',
    russianName: 'на',
    cases: [
      {
        case: 'Lokál (6. pád)',
        caseRussian: 'Местный (6-й падеж)',
        usage: 'Местонахождение на поверхности (где?) — положение на чём-либо',
        example: 'Kniha leží na stole. / Čekám na nádraží.',
        exampleTranslation: 'Книга лежит на столе. / Жду на вокзале.',
      },
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Направление на поверхность (куда?) — движение на поверхность чего-либо',
        example: 'Položím knihu na stůl. / Jedu na nádraží.',
        exampleTranslation: 'Положу книгу на стол. / Еду на вокзал.',
      },
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Время (когда?) — назначение даты или времени события',
        example: 'Na pondělí mám schůzku. / Na zítra je pozvaný.',
        exampleTranslation: 'На понедельник у меня встреча. / На завтра он приглашён.',
      },
    ],
    notes: 'Предлог «na» имеет множество значений. Используется для поверхностей (stůl → na stole / na stůl), мероприятий (na koncertě / na koncert), дней (na pondělí), и в устойчивых выражениях (na snídani — за завтраком).',
  },
  {
    id: 'prep3',
    preposition: 'z',
    prepositionAlt: 'ze',
    russianName: 'из / со',
    cases: [
      {
        case: 'Genitiv (2. pád)',
        caseRussian: 'Родительный (2-й падеж)',
        usage: 'Исходная точка (откуда?) — движение изнутри наружу; происхождение, материал',
        example: 'Přijel jsem z Prahy. / Dům je ze dřeva.',
        exampleTranslation: 'Я приехал из Праги. / Дом из дерева.',
      },
    ],
    notes: 'Форма «ze» используется перед словами, начинающимися с z-, s-, ž-, š-, č-, c- (ze školy, ze Zoo). Антоним — «do» (направление).',
  },
  {
    id: 'prep4',
    preposition: 'do',
    russianName: 'в / к',
    cases: [
      {
        case: 'Genitiv (2. pád)',
        caseRussian: 'Родительный (2-й падеж)',
        usage: 'Направление (куда?) — движение внутрь чего-либо; к какому-то лицу',
        example: 'Jedu do Prahy. / Jdu do školy. / Běžím k lékaři.',
        exampleTranslation: 'Еду в Прагу. / Иду в школу. / Бегу к врачу.',
      },
    ],
    notes: 'Предлог «do» — основной предлог направления (куда?). Используется с городами, зданиями, помещениями. Не используется с событиями — для них применяется «na» (na koncert, na návštěvu). Антоним — «z/ze».',
  },
  {
    id: 'prep5',
    preposition: 'od',
    russianName: 'от / с',
    cases: [
      {
        case: 'Genitiv (2. pád)',
        caseRussian: 'Родительный (2-й падеж)',
        usage: 'Исходная точка от лица или объекта (от кого/от чего?) — источник действия, удаление',
        example: 'Dostal jsem dopis od doktora. / Odešel od domova.',
        exampleTranslation: 'Я получил письмо от врача. / Он ушёл из дома.',
      },
    ],
    notes: 'Используется для лиц и конкретных объектов (от кого, от чего). Для движения изнутри используется «z/ze».',
  },
  {
    id: 'prep6',
    preposition: 'pro',
    russianName: 'для',
    cases: [
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Цель, польза, предназначение (для кого/для чего?)',
        example: 'Koupil jsem to pro tebe. / To je pro radost.',
        exampleTranslation: 'Я купил это для тебя. / Это для радости.',
      },
    ],
    notes: 'Предлог «pro» выражает цель и предназначение. Не путать с «protože» (потому что).',
  },
  {
    id: 'prep7',
    preposition: 's',
    prepositionAlt: 'se',
    russianName: 'с / со',
    cases: [
      {
        case: 'Instrumentál (7. pád)',
        caseRussian: 'Творительный (7-й падеж)',
        usage: 'Совместность (с кем/с чем?) — совместное действие, сопровождение',
        example: 'Jdu s kamarádem. / Piju čaj s cukrem.',
        exampleTranslation: 'Я иду с товарищем. / Пью чай с сахаром.',
      },
      {
        case: 'Instrumentál (7. pád)',
        caseRussian: 'Творительный (7-й падеж)',
        usage: 'Инструмент или способ действия (чем/как?)',
        example: 'Píšu perem. / Řezal jsem nožem.',
        exampleTranslation: 'Пишу пером. / Резал ножом.',
      },
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Продолжительность времени — выражение длительности (на протяжении)',
        example: 'Čekal jsem s celý den. / Neviděl jsem ho s týden.',
        exampleTranslation: 'Я ждал целый день. / Не видел его целую неделю.',
      },
    ],
    notes: 'Форма «se» используется перед словами, начинающимися с s-, z-, š-, ž-, č-, c-, t-, d- (se mnou, se sestrou, se synem). «S kým» — самый распространённый вопрос творительного падежа.',
  },
  {
    id: 'prep8',
    preposition: 'o',
    russianName: 'о / об',
    cases: [
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Тема разговора, мышления (о ком/о чём?) — с глаголами mluvit, psát, číst, slyšet',
        example: 'Mluvíme o počasí. / Píšu o Praze.',
        exampleTranslation: 'Мы говорим о погоде. / Пишу о Праге.',
      },
      {
        case: 'Lokál (6. pád)',
        caseRussian: 'Местный (6-й падеж)',
        usage: 'Размышление, мечты (о ком/о чём?) — с глаголами přemýšlet, snít, mluvit (в некоторых контекстах)',
        example: 'Přemýšlím o problému. / Sním o dovolené.',
        exampleTranslation: 'Размышляю о проблеме. / Мечтаю об отпуске.',
      },
    ],
    notes: 'С глаголами mluvit, psát, číst, slyšet, vědět, vyprávět обычно используется аккузатив. С глаголами přemýšlet, snít, diskutovat — локаль.',
  },
  {
    id: 'prep9',
    preposition: 'u',
    russianName: 'у / около',
    cases: [
      {
        case: 'Genitiv (2. pád)',
        caseRussian: 'Родительный (2-й падеж)',
        usage: 'Нахождение рядом, у кого-то (у кого/у чего?) — рядом с объектом, у лица',
        example: 'Stojím u dveří. / Bydlím u okna. / Jsem u doktora.',
        exampleTranslation: 'Стою у двери. / Живу у окна. / Я у врача.',
      },
    ],
    notes: 'Предлог «u» указывает на расположение рядом с чем-то или нахождение у кого-то (у врача, у друзей). Также используется для выражения принадлежности: u Nováků = у Новаковых (дома).',
  },
  {
    id: 'prep10',
    preposition: 'za',
    russianName: 'за',
    cases: [
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Время — через сколько времени (через?)',
        example: 'Budu tam za hodinu. / Zavolám za týden.',
        exampleTranslation: 'Я буду там через час. / Позвоню через неделю.',
      },
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Цена, обмен — за какую цену (за?)',
        example: 'Koupil jsem to za sto korun. / Dostal jsem to za práci.',
        exampleTranslation: 'Я купил это за сто крон. / Я получил это за работу.',
      },
      {
        case: 'Instrumentál (7. pád)',
        caseRussian: 'Творительный (7-й падеж)',
        usage: 'Местонахождение за чем-то (за чем?) — позади чего-либо',
        example: 'Stojím za domem. / Schová se za stromem.',
        exampleTranslation: 'Стою за домом. / Прячется за деревом.',
      },
    ],
    notes: 'Предлог «za» многозначен. Аккузатив: через сколько (za hodinu), за какую цену (za stokorunu). Инструменталь: положение за чем-то (za domem). Также: zaplatil za mě (винительный) = заплатил за меня.',
  },
  {
    id: 'prep11',
    preposition: 'pod',
    russianName: 'под',
    cases: [
      {
        case: 'Instrumentál (7. pád)',
        caseRussian: 'Творительный (7-й падеж)',
        usage: 'Положение под чем-то (под чем?) — нахождение снизу',
        example: 'Kočka spí pod stolem. / Klíče jsou pod polštářem.',
        exampleTranslation: 'Кошка спит под столом. / Ключи под подушкой.',
      },
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Движение под что-то (под что?) — направление вниз',
        example: 'Hodil míč pod stůl. / Schoval se pod postel.',
        exampleTranslation: 'Бросил мяч под стол. Спрятался под кровать.',
      },
    ],
    notes: 'Как и другие пространственные предлоги, «pod» различает положение (инструменталь) и направление движения (аккузатив).',
  },
  {
    id: 'prep12',
    preposition: 'nad',
    russianName: 'над',
    cases: [
      {
        case: 'Instrumentál (7. pád)',
        caseRussian: 'Творительный (7-й падеж)',
        usage: 'Положение над чем-то (над чем?) — нахождение сверху',
        example: 'Létá nad městem. / Obraz visí nad gaučem.',
        exampleTranslation: 'Летает над городом. / Картина висит над диваном.',
      },
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Движение над чем-то (над что?) — направление вверх',
        example: 'Skákal nad plot. / Vznesl se nad oblaka.',
        exampleTranslation: 'Перепрыгнул через забор (над забором). / Поднялся над облаками.',
      },
    ],
    notes: 'Антоним — «pod» (под). Как и «pod», различает инструменталь (положение) и аккузатив (движение).',
  },
  {
    id: 'prep13',
    preposition: 'před',
    russianName: 'перед',
    cases: [
      {
        case: 'Instrumentál (7. pád)',
        caseRussian: 'Творительный (7-й падеж)',
        usage: 'Положение перед чем-то (перед чем?) — нахождение спереди',
        example: 'Auto stojí před domem. / Sedí přede mnou.',
        exampleTranslation: 'Машина стоит перед домом. / Он сидит передо мной.',
      },
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Движение перед что-то (перед что?) — направление вперёд',
        example: 'Vystoupil před dům. / Postav se před zrcadlo.',
        exampleTranslation: 'Вышел перед домом. (Встал перед домом.) / Встань перед зеркалом.',
      },
    ],
    notes: 'Антоним — «za» (за). Временно́е значение (перед чем-то): před večeří (инструменталь) = перед ужином.',
  },
  {
    id: 'prep14',
    preposition: 'mezi',
    russianName: 'между',
    cases: [
      {
        case: 'Instrumentál (7. pád)',
        caseRussian: 'Творительный (7-й падеж)',
        usage: 'Положение между чем-то/кем (между чем?) — нахождение среди',
        example: 'Stojí mezi domy. / Sedí mezi námi.',
        exampleTranslation: 'Стоит между домами. / Сидит между нами.',
      },
      {
        case: 'Akuzativ (4. pád)',
        caseRussian: 'Винительный (4-й падеж)',
        usage: 'Движение между что-то/кого-то (между что?) — направление',
        example: 'Vstoupil mezi lidi. / Hodil to mezi stromy.',
        exampleTranslation: 'Вошёл между людьми. / Бросил это между деревьями.',
      },
    ],
    notes: 'Предлог «mezi» всегда используется с двумя объектами или в значении «среди» (многих). Инструменталь — положение, аккузатив — направление.',
  },
  {
    id: 'prep15',
    preposition: 'bez',
    russianName: 'без',
    cases: [
      {
        case: 'Genitiv (2. pád)',
        caseRussian: 'Родительный (2-й падеж)',
        usage: 'Отсутствие чего-то или кого-то (без кого/без чего?)',
        example: 'Piju kávu bez cukru. / Nemůžu žít bez tebe.',
        exampleTranslation: 'Пью кофе без сахара. / Не могу жить без тебя.',
      },
    ],
    notes: 'Предлог «bez» — один из немногих, который управляет только родительным падежом.',
  },
  {
    id: 'prep16',
    preposition: 'k',
    prepositionAlt: 'ke',
    russianName: 'к / ко',
    cases: [
      {
        case: 'Dativ (3. pád)',
        caseRussian: 'Дательный (3-й падеж)',
        usage: 'Направление к лицу или месту (к кому/к чему?) — приближение',
        example: 'Jdu k lékaři. / Přistoupil ke dveřím.',
        exampleTranslation: 'Иду к врачу. / Подошёл к дверям.',
      },
    ],
    notes: 'Форма «ke» используется перед словами, начинающимися с k- или g- (ke mně, ke dveřím). Предлог «k» указывает на приближение к лицу или месту, но не на вход внутрь (для этого — «do»).',
  },
  {
    id: 'prep17',
    preposition: 'podle',
    russianName: 'согласно',
    cases: [
      {
        case: 'Genitiv (2. pád)',
        caseRussian: 'Родительный (2-й падеж)',
        usage: 'Соответствие, критерий (по чему? / согласно чему?)',
        example: 'Podle mě máš pravdu. / To je podle plánu.',
        exampleTranslation: 'По-моему (согласно мне), ты прав. / Это согласно плану.',
      },
    ],
    notes: 'Предлог «podle» используется для выражения соответствия, источника информации или мнения (podle novin — по газетам, podle doktora — по словам врача).',
  },
  {
    id: 'prep18',
    preposition: 'proti',
    russianName: 'против',
    cases: [
      {
        case: 'Dativ (3. pád)',
        caseRussian: 'Дательный (3-й падеж)',
        usage: 'Противоположность, противодействие (против кого/чего?)',
        example: 'Stojím proti větru. / Hrajeme proti nim.',
        exampleTranslation: 'Стою против ветра. / Мы играем против них.',
      },
    ],
    notes: 'Предлог «proti» используется с дательным падежом для выражения противодействия, оппозиции или в спортивном контексте (играть против команды).',
  },
  {
    id: 'prep19',
    preposition: 'během',
    russianName: 'в течение',
    cases: [
      {
        case: 'Genitiv (2. pád)',
        caseRussian: 'Родительный (2-й падеж)',
        usage: 'Время — в течение какого-то периода (в течение чего?)',
        example: 'Během dne stihl všechno. / Během prázdnin pojedeme k moři.',
        exampleTranslation: 'В течение дня он успел всё. / Во время каникул поедем на море.',
      },
    ],
    notes: 'Предлог «během» всегда управляет родительным падежом. Синоним — «za» (инструменталь) в некоторых контекстах: za války = během války.',
  },
  {
    id: 'prep20',
    preposition: 'kolem',
    russianName: 'вокруг / около',
    cases: [
      {
        case: 'Genitiv (2. pád)',
        caseRussian: 'Родительный (2-й падеж)',
        usage: 'Пространство вокруг чего-то (вокруг чего? / около чего?)',
        example: 'Chodíme kolem jezera. / Kolem města vede silnice.',
        exampleTranslation: 'Мы ходим вокруг озера. / Вокруг города идёт дорога.',
      },
    ],
    notes: 'Предлог «kolem» управляет только родительным падежом. Может означать как «вокруг» (движение вокруг), так и «мимо» (kolem domu — мимо дома).',
  },
];
