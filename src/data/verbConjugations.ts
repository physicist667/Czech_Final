export interface VerbConjugation {
  verbId: string;
  czech: string;
  russian: string;
  isPerfective: boolean;
  conjugations: {
    present: string[];
    past: string[];
    future: string[];
  };
  pronunciations: {
    present: string[];
    past: string[];
    future: string[];
  };
  notes?: string;
}

export const verbConjugations: VerbConjugation[] = [
  {
    verbId: 'vb1',
    czech: 'Jít',
    russian: 'Идти',
    isPerfective: false,
    conjugations: {
      present: ['jdu', 'jdeš', 'jde', 'jdeme', 'jdete', 'jdou'],
      past: ['šel jsem', 'šel jsi', 'šel', 'šli jsme', 'šli jste', 'šli'],
      future: ['půjdu', 'půjdeš', 'půjde', 'půjdeme', 'půjdete', 'půjdou'],
    },
    pronunciations: {
      present: ['йду', 'йдэш', 'йдэ', 'йдэмэ', 'йдэтэ', 'йдоу'],
      past: ['шэл йэм', 'шэл йси', 'шэл', 'шли йсмэ', 'шли йстэ', 'шли'],
      future: ['пойду', 'пойдэш', 'пойдэ', 'пойдэмэ', 'пойдэтэ', 'пойдоу'],
    },
    notes: 'Неправильный глагол. Прошедшее время от корня jít (šel), будущее — от корня půjdu.',
  },
  {
    verbId: 'vb2',
    czech: 'Běžet',
    russian: 'Бежать',
    isPerfective: false,
    conjugations: {
      present: ['běžím', 'běžíš', 'běží', 'běžíme', 'běžíte', 'běží'],
      past: ['běžel jsem', 'běžel jsi', 'běžel', 'běželi jsme', 'běželi jste', 'běželi'],
      future: ['poběžím', 'poběžíš', 'poběží', 'poběžíme', 'poběžíte', 'poběží'],
    },
    pronunciations: {
      present: ['бжэжим', 'бжэжиш', 'бжэжи', 'бжэжимэ', 'бжэжитэ', 'бжэжи'],
      past: ['бжэжэл йэм', 'бжэжэл йси', 'бжэжэл', 'бжэжэли йсмэ', 'бжэжэли йстэ', 'бжэжэли'],
      future: ['побжэжим', 'побжэжиш', 'побжэжи', 'побжэжимэ', 'побжэжитэ', 'побжэжи'],
    },
    notes: 'Неправильный глагол. Будущее время образуется с приставкой po-.',
  },
  {
    verbId: 'vb3',
    czech: 'Jíst',
    russian: 'Есть (кушать)',
    isPerfective: false,
    conjugations: {
      present: ['jím', 'jíš', 'jí', 'jíme', 'jíte', 'jedí'],
      past: ['jedl jsem', 'jedl jsi', 'jedl', 'jedli jsme', 'jedli jste', 'jedli'],
      future: ['budu jíst', 'budeš jíst', 'bude jíst', 'budeme jíst', 'budete jíst', 'budou jíst'],
    },
    pronunciations: {
      present: ['йим', 'йиш', 'йи', 'йимэ', 'йитэ', 'йэди'],
      past: ['йэдл йэм', 'йэдл йси', 'йэдл', 'йэдли йсмэ', 'йэдли йстэ', 'йэдли'],
      future: ['буду йист', 'будэш йист', 'будэ йист', 'будэмэ йист', 'будэтэ йист', 'будоу йист'],
    },
  },
  {
    verbId: 'vb4',
    czech: 'Pít',
    russian: 'Пить',
    isPerfective: false,
    conjugations: {
      present: ['piju', 'piješ', 'pije', 'pijeme', 'pijete', 'pijí'],
      past: ['pil jsem', 'pil jsi', 'pil', 'pili jsme', 'pili jste', 'pili'],
      future: ['budu pít', 'budeš pít', 'bude pít', 'budeme pít', 'budete pít', 'budou pít'],
    },
    pronunciations: {
      present: ['пийу', 'пиеш', 'пиэ', 'пийэмэ', 'пийэтэ', 'пийи'],
      past: ['пил йэм', 'пил йси', 'пил', 'пили йсмэ', 'пили йстэ', 'пили'],
      future: ['буду пит', 'будэш пит', 'будэ пит', 'будэмэ пит', 'будэтэ пит', 'будоу пит'],
    },
  },
  {
    verbId: 'vb5',
    czech: 'Spát',
    russian: 'Спать',
    isPerfective: false,
    conjugations: {
      present: ['spím', 'spíš', 'spí', 'spíme', 'spíte', 'spí'],
      past: ['spal jsem', 'spal jsi', 'spal', 'spali jsme', 'spali jste', 'spali'],
      future: ['budu spát', 'budeš spát', 'bude spát', 'budeme spát', 'budete spát', 'budou spát'],
    },
    pronunciations: {
      present: ['спим', 'спиш', 'спи', 'спимэ', 'спитэ', 'спи'],
      past: ['спал йэм', 'спал йси', 'спал', 'спали йсмэ', 'спали йстэ', 'спали'],
      future: ['буду спат', 'будэш спат', 'будэ спат', 'будэмэ спат', 'будэтэ спат', 'будоу спат'],
    },
  },
  {
    verbId: 'vb6',
    czech: 'Číst',
    russian: 'Читать',
    isPerfective: false,
    conjugations: {
      present: ['čtu', 'čteš', 'čte', 'čteme', 'čtete', 'čtou'],
      past: ['četl jsem', 'četl jsi', 'četl', 'četli jsme', 'četli jste', 'četli'],
      future: ['budu číst', 'budeš číst', 'bude číst', 'budeme číst', 'budete číst', 'budou číst'],
    },
    pronunciations: {
      present: ['чту', 'чтэш', 'чтэ', 'чтэмэ', 'чтэтэ', 'чтоу'],
      past: ['чтэл йэм', 'чтэл йси', 'чтэл', 'чтэли йсмэ', 'чтэли йстэ', 'чтэли'],
      future: ['буду чист', 'будэш чист', 'будэ чист', 'будэмэ чист', 'будэтэ чист', 'будоу чист'],
    },
    notes: 'Неправильный глагол. Чередование согласных: č-t → četl в прошедшем.',
  },
  {
    verbId: 'vb7',
    czech: 'Psát',
    russian: 'Писать',
    isPerfective: false,
    conjugations: {
      present: ['píšu', 'píšeš', 'píše', 'píšeme', 'píšete', 'píšou'],
      past: ['psal jsem', 'psal jsi', 'psal', 'psali jsme', 'psali jste', 'psali'],
      future: ['budu psát', 'budeš psát', 'bude psát', 'budeme psát', 'budete psát', 'budou psát'],
    },
    pronunciations: {
      present: ['пишу', 'пишэш', 'пишэ', 'пишэмэ', 'пишэтэ', 'пишоу'],
      past: ['псал йэм', 'псал йси', 'псал', 'псали йсмэ', 'псали йстэ', 'псали'],
      future: ['буду псат', 'будэш псат', 'будэ псат', 'будэмэ псат', 'будэтэ псат', 'будоу псат'],
    },
  },
  {
    verbId: 'vb8',
    czech: 'Mluvit',
    russian: 'Говорить',
    isPerfective: false,
    conjugations: {
      present: ['mluvím', 'mluvíš', 'mluví', 'mluvíme', 'mluvíte', 'mluví'],
      past: ['mluvil jsem', 'mluvil jsi', 'mluvil', 'mluvili jsme', 'mluvili jste', 'mluvili'],
      future: ['budu mluvit', 'budeš mluvit', 'bude mluvit', 'budeme mluvit', 'budete mluvit', 'budou mluvit'],
    },
    pronunciations: {
      present: ['млувим', 'млувиш', 'млувим', 'млувимэ', 'млувитэ', 'млувим'],
      past: ['млувил йэм', 'млувил йси', 'млувил', 'млувили йсмэ', 'млувили йстэ', 'млувили'],
      future: ['буду млувит', 'будэш млувит', 'будэ млувит', 'будэмэ млувит', 'будэтэ млувит', 'будоу млувит'],
    },
  },
  {
    verbId: 'vb9',
    czech: 'Slyšet',
    russian: 'Слышать',
    isPerfective: false,
    conjugations: {
      present: ['slyším', 'slyšíš', 'slyší', 'slyšíme', 'slyšíte', 'slyší'],
      past: ['slyšel jsem', 'slyšel jsi', 'slyšel', 'slyšeli jsme', 'slyšeli jste', 'slyšeli'],
      future: ['budu slyšet', 'budeš slyšet', 'bude slyšet', 'budeme slyšet', 'budete slyšet', 'budou slyšet'],
    },
    pronunciations: {
      present: ['слишим', 'слишиш', 'слишим', 'слишимэ', 'слишитэ', 'слишим'],
      past: ['слишэл йэм', 'слишэл йси', 'слишэл', 'слишэли йсмэ', 'слишэли йстэ', 'слишэли'],
      future: ['буду слишэт', 'будэш слишэт', 'будэ слишэт', 'будэмэ слишэт', 'будэтэ слишэт', 'будоу слишэт'],
    },
  },
  {
    verbId: 'vb10',
    czech: 'Vidět',
    russian: 'Видеть',
    isPerfective: false,
    conjugations: {
      present: ['vidím', 'vidíš', 'vidí', 'vidíme', 'vidíte', 'vidí'],
      past: ['viděl jsem', 'viděl jsi', 'viděl', 'viděli jsme', 'viděli jste', 'viděli'],
      future: ['budu vidět', 'budeš vidět', 'bude vidět', 'budeme vidět', 'budete vidět', 'budou vidět'],
    },
    pronunciations: {
      present: ['видим', 'видиш', 'видим', 'видимэ', 'видитэ', 'видим'],
      past: ['видэл йэм', 'видэл йси', 'видэл', 'видэли йсмэ', 'видэли йстэ', 'видэли'],
      future: ['буду видэт', 'будэш видэт', 'будэ видэт', 'будэмэ видэт', 'будэтэ видэт', 'будоу видэт'],
    },
  },
  {
    verbId: 'vb11',
    czech: 'Dělat',
    russian: 'Делать',
    isPerfective: false,
    conjugations: {
      present: ['dělám', 'děláš', 'dělá', 'děláme', 'děláte', 'dělají'],
      past: ['dělál jsem', 'dělál jsi', 'dělál', 'dělali jsme', 'dělali jste', 'dělali'],
      future: ['budu dělat', 'budeš dělat', 'bude dělat', 'budeme dělat', 'budete dělat', 'budou dělat'],
    },
    pronunciations: {
      present: ['дэлам', 'дэлаш', 'дэла', 'дэламэ', 'дэлатэ', 'дэлайи'],
      past: ['дэлал йэм', 'дэлал йси', 'дэлал', 'дэлали йсмэ', 'дэлали йстэ', 'дэлали'],
      future: ['буду дэлат', 'будэш дэлат', 'будэ дэлат', 'будэмэ дэлат', 'будэтэ дэлат', 'будоу дэлат'],
    },
  },
  {
    verbId: 'vb12',
    czech: 'Pracovat',
    russian: 'Работать',
    isPerfective: false,
    conjugations: {
      present: ['pracuji', 'pracuješ', 'pracuje', 'pracujeme', 'pracujete', 'pracují'],
      past: ['pracoval jsem', 'pracoval jsi', 'pracoval', 'pracovali jsme', 'pracovali jste', 'pracovali'],
      future: ['budu pracovat', 'budeš pracovat', 'bude pracovat', 'budeme pracovat', 'budete pracovat', 'budou pracovat'],
    },
    pronunciations: {
      present: ['працуйи', 'працуеш', 'працуэ', 'працуемэ', 'працуютэ', 'працуйи'],
      past: ['працовал йэм', 'працовал йси', 'працовал', 'працовали йсмэ', 'працовали йстэ', 'працовали'],
      future: ['буду працовать', 'будэш працовать', 'будэ працовать', 'будэмэ працовать', 'будэтэ працовать', 'будоу працовать'],
    },
  },
  {
    verbId: 'vb13',
    czech: 'Učit se',
    russian: 'Учиться',
    isPerfective: false,
    conjugations: {
      present: ['učím se', 'učíš se', 'učí se', 'učíme se', 'učíte se', 'učí se'],
      past: ['učil jsem se', 'učil ses', 'učil se', 'učili jsme se', 'učili jste se', 'učili se'],
      future: ['budu se učit', 'budeš se učit', 'bude se učit', 'budeme se učit', 'budete se učit', 'budou se učit'],
    },
    pronunciations: {
      present: ['учим сэ', 'учиш сэ', 'учи сэ', 'учимэ сэ', 'учитэ сэ', 'учи сэ'],
      past: ['учил йэм сэ', 'учил сэс', 'учил сэ', 'учили йсмэ сэ', 'учили йстэ сэ', 'учили сэ'],
      future: ['буду сэ учить', 'будэш сэ учить', 'будэ сэ учить', 'будэмэ сэ учить', 'будэтэ сэ учить', 'будоу сэ учить'],
    },
    notes: 'Возвратный глагол с частицей se. В прошедшем: učil ses (ты), učil jsem se (я).',
  },
  {
    verbId: 'vb14',
    czech: 'Koupit',
    russian: 'Купить',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['koupil jsem', 'koupil jsi', 'koupil', 'koupili jsme', 'koupili jste', 'koupili'],
      future: ['koupím', 'koupíš', 'koupí', 'koupíme', 'koupíte', 'koupí'],
    },
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['коупил йэм', 'коупил йси', 'коупил', 'коупили йсмэ', 'коупили йстэ', 'коупили'],
      future: ['коупим', 'коуипиш', 'коупи', 'коупимэ', 'коупитэ', 'коупи'],
    },
    notes: 'Совершенный вид. Глаголы совершенного вида не имеют настоящего времени. Форма будущего совпадает с формой настоящего несовершенного вида.',
  },
  {
    verbId: 'vb15',
    czech: 'Hledat',
    russian: 'Искать',
    isPerfective: false,
    conjugations: {
      present: ['hledám', 'hledáš', 'hledá', 'hledáme', 'hledáte', 'hledají'],
      past: ['hledal jsem', 'hledal jsi', 'hledal', 'hledali jsme', 'hledali jste', 'hledali'],
      future: ['budu hledat', 'budeš hledat', 'bude hledat', 'budeme hledat', 'budete hledat', 'budou hledat'],
    },
    pronunciations: {
      present: ['глэдам', 'глэдаш', 'глэда', 'глэдамэ', 'глэдатэ', 'глэдайи'],
      past: ['глэдал йэм', 'глэдал йси', 'глэдал', 'глэдали йсмэ', 'глэдали йстэ', 'глэдали'],
      future: ['буду глэдат', 'будэш глэдат', 'будэ глэдат', 'будэмэ глэдат', 'будэтэ глэдат', 'будоу глэдат'],
    },
  },
  {
    verbId: 'vb16',
    czech: 'Bydlet',
    russian: 'Жить / Проживать',
    isPerfective: false,
    conjugations: {
      present: ['bydlím', 'bydlíš', 'bydlí', 'bydlíme', 'bydlíte', 'bydlí'],
      past: ['bydlel jsem', 'bydlel jsi', 'bydlel', 'bydleli jsme', 'bydleli jste', 'bydleli'],
      future: ['budu bydlet', 'budeš bydlet', 'bude bydlet', 'budeme bydlet', 'budete bydlet', 'budou bydlet'],
    },
    pronunciations: {
      present: ['бидлим', 'бидлиш', 'бидли', 'бидлимэ', 'бидлитэ', 'бидли'],
      past: ['бидлэл йэм', 'бидлэл йси', 'бидлэл', 'бидлэли йсмэ', 'бидлэли йстэ', 'бидлэли'],
      future: ['буду бидлэт', 'будэш бидлэт', 'будэ бидлэт', 'будэмэ бидлэт', 'будэтэ бидлэт', 'будоу бидлэт'],
    },
  },
  {
    verbId: 'vb17',
    czech: 'Chtít',
    russian: 'Хотеть',
    isPerfective: false,
    conjugations: {
      present: ['chci', 'chceš', 'chce', 'chceme', 'chcete', 'chtějí'],
      past: ['chtěl jsem', 'chtěl jsi', 'chtěl', 'chtěli jsme', 'chtěli jste', 'chtěli'],
      future: ['budu chtít', 'budeš chtít', 'bude chtít', 'budeme chtít', 'budete chtít', 'budou chtít'],
    },
    pronunciations: {
      present: ['хти', 'хтэш', 'хтэ', 'хтэмэ', 'хтэтэ', 'хтьэйи'],
      past: ['хтэл йэм', 'хтэл йси', 'хтэл', 'хтьэли йсмэ', 'хтьэли йстэ', 'хтьэли'],
      future: ['буду хтит', 'будэш хтит', 'будэ хтит', 'будэмэ хтит', 'будэтэ хтит', 'будоу хтит'],
    },
    notes: 'Неправильный глагол. Настоящее: chci, chceš, chce, chtějí. Прошедшее: chtěl, chtěli.',
  },
  {
    verbId: 'vb18',
    czech: 'Mít',
    russian: 'Иметь',
    isPerfective: false,
    conjugations: {
      present: ['mám', 'máš', 'má', 'máme', 'máte', 'mají'],
      past: ['měl jsem', 'měl jsi', 'měl', 'měli jsme', 'měli jste', 'měli'],
      future: ['budu mít', 'budeš mít', 'bude mít', 'budeme mít', 'budete mít', 'budou mít'],
    },
    pronunciations: {
      present: ['мам', 'маш', 'ма', 'мамэ', 'матэ', 'майи'],
      past: ['мэл йэм', 'мэл йси', 'мэл', 'мэли йсмэ', 'мэли йстэ', 'мэли'],
      future: ['буду мит', 'будэш мит', 'будэ мит', 'будэмэ мит', 'будэтэ мит', 'будоу мит'],
    },
    notes: 'Неправильный глагол. Краткая форма в настоящем: mám, máš, má. 3-е лицо мн.ч.: mají.',
  },
  {
    verbId: 'vb19',
    czech: 'Moct',
    russian: 'Мочь',
    isPerfective: false,
    conjugations: {
      present: ['mohu', 'můžeš', 'může', 'můžeme', 'můžete', 'mohou'],
      past: ['mohl jsem', 'mohl jsi', 'mohl', 'mohli jsme', 'mohli jste', 'mohli'],
      future: ['budu moci', 'budeš moci', 'bude moci', 'budeme moci', 'budete moci', 'budou moci'],
    },
    pronunciations: {
      present: ['могу', 'можэш', 'можэ', 'мувжэмэ', 'мувжэтэ', 'могоу'],
      past: ['мохл йэм', 'мохл йси', 'мохл', 'мохли йсмэ', 'мохли йстэ', 'мохли'],
      future: ['буду моци', 'будэш моци', 'будэ моци', 'будэмэ моци', 'будэтэ моци', 'будоу моци'],
    },
    notes: 'Неправильный глагол. ů в формách můžeme, můžete произносится как «ув».',
  },
  {
    verbId: 'vb20',
    czech: 'Stát',
    russian: 'Стоять / Стоить',
    isPerfective: false,
    conjugations: {
      present: ['stojím', 'stojíš', 'stojí', 'stojíme', 'stojíte', 'stojí'],
      past: ['stál jsem', 'stál jsi', 'stál', 'stáli jsme', 'stáli jste', 'stáli'],
      future: ['budu stát', 'budeš stát', 'bude stát', 'budeme stát', 'budete stát', 'budou stát'],
    },
    pronunciations: {
      present: ['стойим', 'стойиш', 'стойи', 'стоимэ', 'стоитэ', 'стойи'],
      past: ['стал йэм', 'стал йси', 'стал', 'стали йсмэ', 'стали йстэ', 'стали'],
      future: ['буду стат', 'будэш стат', 'будэ стат', 'будэмэ стат', 'будэтэ стат', 'будоу стат'],
    },
    notes: 'Двойное значение: «стоять» (физически) и «стоить» (о цене).',
  },
  {
    verbId: 'vb21',
    czech: 'Dávat',
    russian: 'Давать',
    isPerfective: false,
    conjugations: {
      present: ['dávám', 'dáváš', 'dává', 'dáváme', 'dáváte', 'dávají'],
      past: ['dával jsem', 'dával jsi', 'dával', 'dávali jsme', 'dávali jste', 'dávali'],
      future: ['budu dávat', 'budeš dávat', 'bude dávat', 'budeme dávat', 'budete dávat', 'budou dávat'],
    },
    pronunciations: {
      present: ['давам', 'даваш', 'дава', 'давамэ', 'даватэ', 'давайи'],
      past: ['давал йэм', 'давал йси', 'давал', 'давали йсмэ', 'давали йстэ', 'давали'],
      future: ['буду дават', 'будэш дават', 'будэ дават', 'будэмэ дават', 'будэтэ дават', 'будоу дават'],
    },
  },
  {
    verbId: 'vb22',
    czech: 'Znát',
    russian: 'Знать',
    isPerfective: false,
    conjugations: {
      present: ['znám', 'znáš', 'zná', 'známe', 'znáte', 'znají'],
      past: ['znal jsem', 'znal jsi', 'znal', 'znali jsme', 'znali jste', 'znali'],
      future: ['budu znát', 'budeš znát', 'bude znát', 'budeme znát', 'budete znát', 'budou znát'],
    },
    pronunciations: {
      present: ['знам', 'знаш', 'зна', 'знамэ', 'знатэ', 'знайи'],
      past: ['знал йэм', 'знал йси', 'знал', 'знали йсмэ', 'знали йстэ', 'знали'],
      future: ['буду знат', 'будэш знат', 'будэ знат', 'будэмэ знат', 'будэтэ знат', 'будоу знат'],
    },
    notes: 'Неправильный глагол. Корень zná- в настоящем, znal- в прошедшем.',
  },
  {
    verbId: 'vb23',
    czech: 'Rozumět',
    russian: 'Понимать',
    isPerfective: false,
    conjugations: {
      present: ['rozumím', 'rozumíš', 'rozumí', 'rozumíme', 'rozumíte', 'rozumí'],
      past: ['rozuměl jsem', 'rozuměl jsi', 'rozuměl', 'rozuměli jsme', 'rozuměli jste', 'rozuměli'],
      future: ['budu rozumět', 'budeš rozumět', 'bude rozumět', 'budeme rozumět', 'budete rozumět', 'budou rozumět'],
    },
    pronunciations: {
      present: ['розумим', 'розумиш', 'розуми', 'розумимэ', 'розумитэ', 'розуми'],
      past: ['розумэл йэм', 'розумэл йси', 'розумэл', 'розумэли йсмэ', 'розумэли йстэ', 'розумэли'],
      future: ['буду розумэт', 'будэш розумэт', 'будэ розумэт', 'будэмэ розумэт', 'будэтэ розумэт', 'будоу розумэт'],
    },
  },
  {
    verbId: 'vb24',
    czech: 'Najít',
    russian: 'Найти',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['našel jsem', 'našel jsi', 'našel', 'našli jsme', 'našli jste', 'našli'],
      future: ['najdu', 'najdeš', 'najde', 'najdeme', 'najdete', 'najdou'],
    },
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['нашэл йэм', 'нашэл йси', 'нашэл', 'нашли йсмэ', 'нашли йстэ', 'нашли'],
      future: ['найду', 'найдэш', 'найдэ', 'найдэмэ', 'найдэтэ', 'найдоу'],
    },
    notes: 'Совершенный вид. Глаголы совершенного вида не имеют настоящего времени. Будущее совпадает с формой настоящего несовершенного вида.',
  },
  {
    verbId: 'vb25',
    czech: 'Otevřít',
    russian: 'Открыть',
    isPerfective: true,
    conjugations: {
      present: ['—', '—', '—', '—', '—', '—'],
      past: ['otevřel jsem', 'otevřel jsi', 'otevřel', 'otevřeli jsme', 'otevřeli jste', 'otevřeli'],
      future: ['otevřu', 'otevřeš', 'otevře', 'otevřeme', 'otevřete', 'otevřou'],
    },
    pronunciations: {
      present: ['', '', '', '', '', ''],
      past: ['отэвржэл йэм', 'отэвржэл йси', 'отэвржэл', 'отэвржэли йсмэ', 'отэвржэли йстэ', 'отэвржэли'],
      future: ['отэвржу', 'отэвржэш', 'отэвржэ', 'отэвржэмэ', 'отэвржэтэ', 'отэвржоу'],
    },
    notes: 'Совершенный вид. Глаголы совершенного вида не имеют настоящего времени. Несовершенный пара: otevírat.',
  },
];

export const personLabels = [
  { russian: 'я', czech: 'já' },
  { russian: 'ты', czech: 'ty' },
  { russian: 'он/она/оно', czech: 'on/ona/ono' },
  { russian: 'мы', czech: 'my' },
  { russian: 'вы', czech: 'vy' },
  { russian: 'они', czech: 'oni' },
];

export const tenseLabels = [
  { key: 'present' as const, russian: 'Настоящее', czech: 'Přítomný' },
  { key: 'past' as const, russian: 'Прошлое', czech: 'Minulý' },
  { key: 'future' as const, russian: 'Будущее', czech: 'Budoucí' },
];
