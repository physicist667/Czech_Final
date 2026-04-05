export interface MultipleChoiceQuestion {
  id: string;
  czech: string;
  correctAnswer: string;
  options: string[];
  category: string;
}

export interface FillBlankQuestion {
  id: string;
  sentence: string;
  sentenceWithBlank: string;
  correctAnswer: string;
  options: string[];
  category: string;
  hint: string;
}

export interface MatchingPair {
  czech: string;
  russian: string;
}

export interface MatchingSet {
  id: string;
  title: string;
  pairs: MatchingPair[];
}

export interface SentenceBuildingExercise {
  id: string;
  correctSentence: string;
  translation: string;
  words: string[];
  category: string;
}

export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  // Greetings
  { id: 'mc1', czech: 'Dobrý den', correctAnswer: 'Добрый день', options: ['Добрый вечер', 'Добрый день', 'Доброе утро', 'Спокойной ночи'], category: 'greetings' },
  { id: 'mc2', czech: 'Na shledanou', correctAnswer: 'До свидания', options: ['Привет', 'Спасибо', 'До свидания', 'Пожалуйста'], category: 'greetings' },
  { id: 'mc3', czech: 'Děkuji', correctAnswer: 'Спасибо', options: ['Пожалуйста', 'Спасибо', 'Извините', 'Да'], category: 'greetings' },
  { id: 'mc4', czech: 'Promiňte', correctAnswer: 'Извините', options: ['Привет', 'Спасибо', 'Извините', 'Нет'], category: 'greetings' },
  { id: 'mc5', czech: 'Ahoj', correctAnswer: 'Привет', options: ['Пока', 'Привет', 'Добрый день', 'Здравствуйте'], category: 'greetings' },
  // Food
  { id: 'mc6', czech: 'Chléb', correctAnswer: 'Хлеб', options: ['Молоко', 'Хлеб', 'Мясо', 'Сыр'], category: 'food' },
  { id: 'mc7', czech: 'Mléko', correctAnswer: 'Молоко', options: ['Вода', 'Молоко', 'Чай', 'Кофе'], category: 'food' },
  { id: 'mc8', czech: 'Pivo', correctAnswer: 'Пиво', options: ['Вино', 'Пиво', 'Водка', 'Сок'], category: 'food' },
  { id: 'mc9', czech: 'Brambory', correctAnswer: 'Картофель', options: ['Морковь', 'Картофель', 'Лук', 'Чеснок'], category: 'food' },
  { id: 'mc10', czech: 'Sýr', correctAnswer: 'Сыр', options: ['Масло', 'Сыр', 'Молоко', 'Яйцо'], category: 'food' },
  // Family
  { id: 'mc11', czech: 'Bratr', correctAnswer: 'Брат', options: ['Сын', 'Отец', 'Брат', 'Дядя'], category: 'family' },
  { id: 'mc12', czech: 'Dcera', correctAnswer: 'Дочь', options: ['Сестра', 'Дочь', 'Мать', 'Тётя'], category: 'family' },
  { id: 'mc13', czech: 'Babička', correctAnswer: 'Бабушка', options: ['Мать', 'Бабушка', 'Дочь', 'Сестра'], category: 'family' },
  { id: 'mc14', czech: 'Manželka', correctAnswer: 'Жена', options: ['Подруга', 'Жена', 'Мать', 'Сестра'], category: 'family' },
  { id: 'mc15', czech: 'Dědeček', correctAnswer: 'Дедушка', options: ['Отец', 'Дедушка', 'Брат', 'Дядя'], category: 'family' },
  // Colors
  { id: 'mc16', czech: 'Červená', correctAnswer: 'Красный', options: ['Синий', 'Зелёный', 'Красный', 'Жёлтый'], category: 'colors' },
  { id: 'mc17', czech: 'Modrá', correctAnswer: 'Синий', options: ['Фиолетовый', 'Синий', 'Зелёный', 'Голубой'], category: 'colors' },
  { id: 'mc18', czech: 'Zelená', correctAnswer: 'Зелёный', options: ['Жёлтый', 'Красный', 'Зелёный', 'Оранжевый'], category: 'colors' },
  { id: 'mc19', czech: 'Bílá', correctAnswer: 'Белый', options: ['Чёрный', 'Серый', 'Белый', 'Серебряный'], category: 'colors' },
  { id: 'mc20', czech: 'Žlutá', correctAnswer: 'Жёлтый', options: ['Оранжевый', 'Жёлтый', 'Золотой', 'Коричневый'], category: 'colors' },
  // Transport
  { id: 'mc21', czech: 'Vlak', correctAnswer: 'Поезд', options: ['Автобус', 'Поезд', 'Самолёт', 'Трамвай'], category: 'transport' },
  { id: 'mc22', czech: 'Letadlo', correctAnswer: 'Самолёт', options: ['Вертолёт', 'Корабль', 'Самолёт', 'Поезд'], category: 'transport' },
  { id: 'mc23', czech: 'Kolo', correctAnswer: 'Велосипед', options: ['Мотоцикл', 'Велосипед', 'Самокат', 'Скейт'], category: 'transport' },
  { id: 'mc24', czech: 'Tramvaj', correctAnswer: 'Трамвай', options: ['Автобус', 'Троллейбус', 'Трамвай', 'Метро'], category: 'transport' },
  { id: 'mc25', czech: 'Nádraží', correctAnswer: 'Вокзал', options: ['Аэропорт', 'Порт', 'Вокзал', 'Станция'], category: 'transport' },
  // City
  { id: 'mc26', czech: 'Náměstí', correctAnswer: 'Площадь', options: ['Улица', 'Площадь', 'Парк', 'Мост'], category: 'city' },
  { id: 'mc27', czech: 'Knihovna', correctAnswer: 'Библиотека', options: ['Школа', 'Библиотека', 'Музей', 'Кинотеатр'], category: 'city' },
  { id: 'mc28', czech: 'Lékárna', correctAnswer: 'Аптека', options: ['Больница', 'Аптека', 'Поликлиника', 'Клиника'], category: 'city' },
  { id: 'mc29', czech: 'Kostel', correctAnswer: 'Церковь', options: ['Мечеть', 'Церковь', 'Музей', 'Театр'], category: 'city' },
  { id: 'mc30', czech: 'Divadlo', correctAnswer: 'Театр', options: ['Кино', 'Цирк', 'Театр', 'Концертный зал'], category: 'city' },
  // Time
  { id: 'mc31', czech: 'Pondělí', correctAnswer: 'Понедельник', options: ['Вторник', 'Среда', 'Понедельник', 'Четверг'], category: 'time' },
  { id: 'mc32', czech: 'Červenec', correctAnswer: 'Июль', options: ['Июнь', 'Июль', 'Август', 'Сентябрь'], category: 'time' },
  { id: 'mc33', czech: 'Středa', correctAnswer: 'Среда', options: ['Вторник', 'Среда', 'Четверг', 'Пятница'], category: 'time' },
  { id: 'mc34', czech: 'Prosinec', correctAnswer: 'Декабрь', options: ['Ноябрь', 'Декабрь', 'Январь', 'Февраль'], category: 'time' },
  { id: 'mc35', czech: 'Sobota', correctAnswer: 'Суббота', options: ['Пятница', 'Суббота', 'Воскресенье', 'Понедельник'], category: 'time' },
  // Numbers
  { id: 'mc36', czech: 'Tři', correctAnswer: 'Три', options: ['Два', 'Три', 'Четыре', 'Пять'], category: 'numbers' },
  { id: 'mc37', czech: 'Sedm', correctAnswer: 'Семь', options: ['Шесть', 'Семь', 'Восемь', 'Девять'], category: 'numbers' },
  { id: 'mc38', czech: 'Dvanáct', correctAnswer: 'Двенадцать', options: ['Одиннадцать', 'Двенадцать', 'Тринадцать', 'Десять'], category: 'numbers' },
  { id: 'mc39', czech: 'Sto', correctAnswer: 'Сто', options: ['Десять', 'Пятьдесят', 'Сто', 'Тысяча'], category: 'numbers' },
  { id: 'mc40', czech: 'Deset', correctAnswer: 'Десять', options: ['Восемь', 'Девять', 'Десять', 'Одиннадцать'], category: 'numbers' },
];

export const fillBlankQuestions: FillBlankQuestion[] = [
  // Grammar - být
  { id: 'fb1', sentence: 'Jsem student.', sentenceWithBlank: '____ student.', correctAnswer: 'Jsem', options: ['Jsem', 'Jsme', 'Je', 'Jste'], category: 'grammar', hint: '1 лицо, ед. ч.' },
  { id: 'fb2', sentence: 'On je učitel.', sentenceWithBlank: 'On ____ učitel.', correctAnswer: 'je', options: ['jsem', 'jsi', 'je', 'jsou'], category: 'grammar', hint: '3 лицо, ед. ч.' },
  { id: 'fb3', sentence: 'Jsme přátelé.', sentenceWithBlank: '____ přátelé.', correctAnswer: 'Jsme', options: ['Jsem', 'Jsme', 'Jste', 'Jsou'], category: 'grammar', hint: '1 лицо, мн. ч.' },
  { id: 'fb4', sentence: 'Oni jsou doma.', sentenceWithBlank: 'Oni ____ doma.', correctAnswer: 'jsou', options: ['je', 'jsou', 'jsme', 'jsi'], category: 'grammar', hint: '3 лицо, мн. ч.' },
  { id: 'fb5', sentence: 'Jsi unavený?', sentenceWithBlank: '____ unavený?', correctAnswer: 'Jsi', options: ['Jsem', 'Jsi', 'Je', 'Jste'], category: 'grammar', hint: '2 лицо, ед. ч.' },
  // Grammar - cases
  { id: 'fb6', sentence: 'Vidím muže.', sentenceWithBlank: 'Vidím ____.', correctAnswer: 'muže', options: ['muž', 'muže', 'mužem', 'muži'], category: 'grammar', hint: 'Акузатив (Винительный п.)' },
  { id: 'fb7', sentence: 'Mluvíme o městě.', sentenceWithBlank: 'Mluvíme o ____.', correctAnswer: 'městě', options: ['město', 'města', 'městě', 'městem'], category: 'grammar', hint: 'Локаль (Местный п.)' },
  { id: 'fb8', sentence: 'Jedu s mužem.', sentenceWithBlank: 'Jedu s ____.', correctAnswer: 'mužem', options: ['muž', 'muže', 'mužem', 'muži'], category: 'grammar', hint: 'Инструменталь (Творительный п.)' },
  { id: 'fb9', sentence: 'Nemám bratra.', sentenceWithBlank: 'Nemám ____.', correctAnswer: 'bratra', options: ['bratr', 'bratra', 'bratrem', 'bratrovi'], category: 'grammar', hint: 'Генитив (Родительный п.)' },
  { id: 'fb10', sentence: 'Dám ženě květinu.', sentenceWithBlank: 'Dám ____ květinu.', correctAnswer: 'ženě', options: ['žena', 'ženy', 'ženě', 'ženou'], category: 'grammar', hint: 'Датив (Дательный п.)' },
  // Grammar - word order
  { id: 'fb11', sentence: 'Čtu knihu.', sentenceWithBlank: '____ knihu.', correctAnswer: 'Čtu', options: ['Čtu', 'Čte', 'Čteme', 'Čtou'], category: 'grammar', hint: '1 лицо, ед. ч., наст. вр.' },
  { id: 'fb12', sentence: 'Ona mluví česky.', sentenceWithBlank: 'Ona ____ česky.', correctAnswer: 'mluví', options: ['mluví', 'mluvím', 'mluvíš', 'mluvíme'], category: 'grammar', hint: '3 лицо, ед. ч.' },
  // Vocabulary in context
  { id: 'fb13', sentence: 'Koupil jsem čerstvý chléb.', sentenceWithBlank: 'Koupil jsem čerstvý ____.', correctAnswer: 'chléb', options: ['chléb', 'máslo', 'sýr', 'maso'], category: 'food', hint: 'Пекарное изделие' },
  { id: 'fb14', sentence: 'Voda je velmi důležitá.', sentenceWithBlank: '____ je velmi důležitá.', correctAnswer: 'Voda', options: ['Voda', 'Káva', 'Čaj', 'Pivo'], category: 'food', hint: 'Напиток, H₂O' },
  { id: 'fb15', sentence: 'Moje matka pracuje jako učitelka.', sentenceWithBlank: 'Moje ____ pracuje jako učitelka.', correctAnswer: 'matka', options: ['matka', 'sestra', 'dcera', 'teta'], category: 'family', hint: 'Родитель' },
  { id: 'fb16', sentence: 'Auto je červené.', sentenceWithBlank: '____ je červené.', correctAnswer: 'Auto', options: ['Auto', 'Vlak', 'Kolo', 'Autobus'], category: 'transport', hint: 'Личный транспорт' },
  { id: 'fb17', sentence: 'Bydlím v Praze.', sentenceWithBlank: 'Bydlím v ____.', correctAnswer: 'Praze', options: ['Praze', 'Brně', 'Olomouci', 'Ostravě'], category: 'city', hint: 'Столица Чехии' },
  { id: 'fb18', sentence: 'Dnes je pondělí.', sentenceWithBlank: 'Dnes je ____.', correctAnswer: 'pondělí', options: ['pondělí', 'úterý', 'středa', 'čtvrtek'], category: 'time', hint: 'Первый день недели' },
  { id: 'fb19', sentence: 'Tráva je zelená.', sentenceWithBlank: 'Tráva je ____.', correctAnswer: 'zelená', options: ['červená', 'modrá', 'zelená', 'žlutá'], category: 'colors', hint: 'Цвет травы' },
  { id: 'fb20', sentence: 'Vlasy jsou černé.', sentenceWithBlank: 'Vlasy jsou ____.', correctAnswer: 'černé', options: ['bílé', 'černé', 'šedé', 'růžové'], category: 'colors', hint: 'Самый тёмный цвет' },
  { id: 'fb21', sentence: 'Petře, pojď sem!', sentenceWithBlank: '____, pojď sem!', correctAnswer: 'Petře', options: ['Petr', 'Petře', 'Petra', 'Petru'], category: 'grammar', hint: 'Звательный падеж (Vokativ)' },
  { id: 'fb22', sentence: 'Píšu perem.', sentenceWithBlank: 'Píšu ____.', correctAnswer: 'perem', options: ['pero', 'pera', 'perem', 'peru'], category: 'grammar', hint: 'Инструменталь (Творительный п.)' },
];

export const matchingSets: MatchingSet[] = [
  {
    id: 'ms1',
    title: 'Приветствия',
    pairs: [
      { czech: 'Dobrý den', russian: 'Добрый день' },
      { czech: 'Na shledanou', russian: 'До свидания' },
      { czech: 'Děkuji', russian: 'Спасибо' },
      { czech: 'Prosím', russian: 'Пожалуйста' },
      { czech: 'Promiňte', russian: 'Извините' },
      { czech: 'Ahoj', russian: 'Привет' },
      { czech: 'Ano', russian: 'Да' },
      { czech: 'Ne', russian: 'Нет' },
      { czech: 'Dobré ráno', russian: 'Доброе утро' },
      { czech: 'Dobrou noc', russian: 'Спокойной ночи' },
    ],
  },
  {
    id: 'ms2',
    title: 'Еда',
    pairs: [
      { czech: 'Chléb', russian: 'Хлеб' },
      { czech: 'Maso', russian: 'Мясо' },
      { czech: 'Mléko', russian: 'Молоко' },
      { czech: 'Voda', russian: 'Вода' },
      { czech: 'Pivo', russian: 'Пиво' },
      { czech: 'Káva', russian: 'Кофе' },
      { czech: 'Sýr', russian: 'Сыр' },
      { czech: 'Brambory', russian: 'Картофель' },
      { czech: 'Rýže', russian: 'Рис' },
      { czech: 'Polévka', russian: 'Суп' },
    ],
  },
  {
    id: 'ms3',
    title: 'Семья',
    pairs: [
      { czech: 'Matka', russian: 'Мать' },
      { czech: 'Otec', russian: 'Отец' },
      { czech: 'Bratr', russian: 'Брат' },
      { czech: 'Sestra', russian: 'Сестра' },
      { czech: 'Syn', russian: 'Сын' },
      { czech: 'Dcera', russian: 'Дочь' },
      { czech: 'Dědeček', russian: 'Дедушка' },
      { czech: 'Babička', russian: 'Бабушка' },
      { czech: 'Manžel', russian: 'Муж' },
      { czech: 'Manželka', russian: 'Жена' },
    ],
  },
  {
    id: 'ms4',
    title: 'Цвета',
    pairs: [
      { czech: 'Červená', russian: 'Красный' },
      { czech: 'Modrá', russian: 'Синий' },
      { czech: 'Zelená', russian: 'Зелёный' },
      { czech: 'Žlutá', russian: 'Жёлтый' },
      { czech: 'Černá', russian: 'Чёрный' },
      { czech: 'Bílá', russian: 'Белый' },
      { czech: 'Hnědá', russian: 'Коричневый' },
      { czech: 'Oranžová', russian: 'Оранжевый' },
      { czech: 'Fialová', russian: 'Фиолетовый' },
      { czech: 'Růžová', russian: 'Розовый' },
    ],
  },
  {
    id: 'ms5',
    title: 'Транспорт',
    pairs: [
      { czech: 'Auto', russian: 'Машина' },
      { czech: 'Vlak', russian: 'Поезд' },
      { czech: 'Autobus', russian: 'Автобус' },
      { czech: 'Letadlo', russian: 'Самолёт' },
      { czech: 'Metro', russian: 'Метро' },
      { czech: 'Kolo', russian: 'Велосипед' },
      { czech: 'Taxi', russian: 'Такси' },
      { czech: 'Tramvaj', russian: 'Трамвай' },
      { czech: 'Nádraží', russian: 'Вокзал' },
      { czech: 'Letiště', russian: 'Аэропорт' },
    ],
  },
];

export const sentenceBuildingExercises: SentenceBuildingExercise[] = [
  { id: 'sb1', correctSentence: 'Jsem student.', translation: 'Я студент.', words: ['Jsem', 'student', '.'], category: 'grammar' },
  { id: 'sb2', correctSentence: 'Ona je krásná.', translation: 'Она красивая.', words: ['Ona', 'je', 'krásná', '.'], category: 'grammar' },
  { id: 'sb3', correctSentence: 'Čtu knihu.', translation: 'Я читаю книгу.', words: ['Čtu', 'knihu', '.'], category: 'grammar' },
  { id: 'sb4', correctSentence: 'Bydlím v Praze.', translation: 'Я живу в Праге.', words: ['Bydlím', 'v', 'Praze', '.'], category: 'grammar' },
  { id: 'sb5', correctSentence: 'Mám rád čokoládu.', translation: 'Я люблю шоколад.', words: ['Mám', 'rád', 'čokoládu', '.'], category: 'grammar' },
  { id: 'sb6', correctSentence: 'On je můj bratr.', translation: 'Он мой брат.', words: ['On', 'je', 'můj', 'bratr', '.'], category: 'grammar' },
  { id: 'sb7', correctSentence: 'Piju čaj ráno.', translation: 'Я пью чай утром.', words: ['Piju', 'čaj', 'ráno', '.'], category: 'grammar' },
  { id: 'sb8', correctSentence: 'To je moje kniha.', translation: 'Это моя книга.', words: ['To', 'je', 'moje', 'kniha', '.'], category: 'grammar' },
  { id: 'sb9', correctSentence: 'Jdeme do školy.', translation: 'Мы идём в школу.', words: ['Jdeme', 'do', 'školy', '.'], category: 'grammar' },
  { id: 'sb10', correctSentence: 'Vidím to auto.', translation: 'Я вижу ту машину.', words: ['Vidím', 'to', 'auto', '.'], category: 'grammar' },
  { id: 'sb11', correctSentence: 'Dnes je pondělí.', translation: 'Сегодня понедельник.', words: ['Dnes', 'je', 'pondělí', '.'], category: 'grammar' },
  { id: 'sb12', correctSentence: 'Mluví česky a rusky.', translation: 'Он говорит по-чешски и по-русски.', words: ['Mluví', 'česky', 'a', 'rusky', '.'], category: 'grammar' },
  { id: 'sb13', correctSentence: 'Kde je nádraží?', translation: 'Где вокзал?', words: ['Kde', 'je', 'nádraží', '?'], category: 'grammar' },
  { id: 'sb14', correctSentence: 'Nerozumím česky.', translation: 'Я не понимаю по-чешски.', words: ['Nerozumím', 'česky', '.'], category: 'grammar' },
];
