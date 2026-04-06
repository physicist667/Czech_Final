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

export interface TrueFalseQuestion {
  id: string;
  czech: string;
  russian: string;
  isCorrect: boolean;
  correctRussian: string;
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
  // Body
  { id: 'mc41', czech: 'Hlava', correctAnswer: 'Голова', options: ['Рука', 'Голова', 'Нога', 'Шея'], category: 'body' },
  { id: 'mc42', czech: 'Srdce', correctAnswer: 'Сердце', options: ['Лёгкие', 'Сердце', 'Желудок', 'Печень'], category: 'body' },
  { id: 'mc43', czech: 'Ruka', correctAnswer: 'Рука', options: ['Нога', 'Палец', 'Рука', 'Плечо'], category: 'body' },
  { id: 'mc44', czech: 'Zuby', correctAnswer: 'Зубы', options: ['Губы', 'Язык', 'Зубы', 'Уши'], category: 'body' },
  { id: 'mc45', czech: 'Krk', correctAnswer: 'Шея', options: ['Голова', 'Спина', 'Шея', 'Грудь'], category: 'body' },
  // Animals
  { id: 'mc46', czech: 'Pes', correctAnswer: 'Собака', options: ['Кошка', 'Собака', 'Лошадь', 'Корова'], category: 'animals' },
  { id: 'mc47', czech: 'Kočka', correctAnswer: 'Кошка', options: ['Собака', 'Мышь', 'Кошка', 'Хорёк'], category: 'animals' },
  { id: 'mc48', czech: 'Kůň', correctAnswer: 'Лошадь', options: ['Осёл', 'Лошадь', 'Корова', 'Свинья'], category: 'animals' },
  { id: 'mc49', czech: 'Vlk', correctAnswer: 'Волк', options: ['Медведь', 'Волк', 'Лиса', 'Заяц'], category: 'animals' },
  { id: 'mc50', czech: 'Medvěd', correctAnswer: 'Медведь', options: ['Волк', 'Медведь', 'Рысь', 'Барсук'], category: 'animals' },
  { id: 'mc51', czech: 'Liška', correctAnswer: 'Лиса', options: ['Заяц', 'Белка', 'Лиса', 'Выдра'], category: 'animals' },
  { id: 'mc52', czech: 'Pták', correctAnswer: 'Птица', options: ['Рыба', 'Насекомое', 'Птица', 'Змея'], category: 'animals' },
  // Nature
  { id: 'mc53', czech: 'Strom', correctAnswer: 'Дерево', options: ['Куст', 'Дерево', 'Цветок', 'Гриб'], category: 'nature' },
  { id: 'mc54', czech: 'Hora', correctAnswer: 'Гора', options: ['Холм', 'Гора', 'Долина', 'Равнина'], category: 'nature' },
  { id: 'mc55', czech: 'Déšť', correctAnswer: 'Дождь', options: ['Снег', 'Дождь', 'Град', 'Туман'], category: 'nature' },
  { id: 'mc56', czech: 'Slunce', correctAnswer: 'Солнце', options: ['Луна', 'Звезда', 'Солнце', 'Облако'], category: 'nature' },
  { id: 'mc57', czech: 'Moře', correctAnswer: 'Море', options: ['Озеро', 'Река', 'Море', 'Океан'], category: 'nature' },
  { id: 'mc58', czech: 'Les', correctAnswer: 'Лес', options: ['Поле', 'Лес', 'Парк', 'Сад'], category: 'nature' },
  // Clothing
  { id: 'mc59', czech: 'Košile', correctAnswer: 'Рубашка', options: ['Футболка', 'Рубашка', 'Свитер', 'Пиджак'], category: 'clothing' },
  { id: 'mc60', czech: 'Kabát', correctAnswer: 'Пальто', options: ['Куртка', 'Пальто', 'Плащ', 'Костюм'], category: 'clothing' },
  { id: 'mc61', czech: 'Boty', correctAnswer: 'Ботинки', options: ['Туфли', 'Ботинки', 'Сапоги', 'Кроссовки'], category: 'clothing' },
  { id: 'mc62', czech: 'Bunda', correctAnswer: 'Куртка', options: ['Пальто', 'Куртка', 'Жилет', 'Плащ'], category: 'clothing' },
  { id: 'mc63', czech: 'Čepice', correctAnswer: 'Шапка', options: ['Шарф', 'Шапка', 'Перчатки', 'Кепка'], category: 'clothing' },
  // Home
  { id: 'mc64', czech: 'Stůl', correctAnswer: 'Стол', options: ['Стул', 'Стол', 'Шкаф', 'Диван'], category: 'home' },
  { id: 'mc65', czech: 'Postel', correctAnswer: 'Кровать', options: ['Диван', 'Кровать', 'Кушетка', 'Тахта'], category: 'home' },
  { id: 'mc66', czech: 'Okno', correctAnswer: 'Окно', options: ['Дверь', 'Окно', 'Стена', 'Потолок'], category: 'home' },
  { id: 'mc67', czech: 'Lednice', correctAnswer: 'Холодильник', options: ['Плита', 'Холодильник', 'Посудомойка', 'Духовка'], category: 'home' },
  { id: 'mc68', czech: 'Klíč', correctAnswer: 'Ключ', options: ['Замок', 'Ключ', 'Дверь', 'Засов'], category: 'home' },
  // Verbs
  { id: 'mc69', czech: 'Jíst', correctAnswer: 'Есть (кушать)', options: ['Пить', 'Есть (кушать)', 'Спать', 'Гулять'], category: 'verbs' },
  { id: 'mc70', czech: 'Číst', correctAnswer: 'Читать', options: ['Писать', 'Слушать', 'Читать', 'Говорить'], category: 'verbs' },
  { id: 'mc71', czech: 'Mluvit', correctAnswer: 'Говорить', options: ['Молчать', 'Кричать', 'Говорить', 'Шептать'], category: 'verbs' },
  { id: 'mc72', czech: 'Dělat', correctAnswer: 'Делать', options: ['Смотреть', 'Делать', 'Думать', 'Ждать'], category: 'verbs' },
  { id: 'mc73', czech: 'Běžet', correctAnswer: 'Бежать', options: ['Идти', 'Бежать', 'Прыгать', 'Летать'], category: 'verbs' },
  { id: 'mc74', czech: 'Vidět', correctAnswer: 'Видеть', options: ['Слышать', 'Чувствовать', 'Видеть', 'Знать'], category: 'verbs' },
  // Professions
  { id: 'mc75', czech: 'Lékař', correctAnswer: 'Врач', options: ['Медсестра', 'Врач', 'Аптекарь', 'Фармацевт'], category: 'professions' },
  { id: 'mc76', czech: 'Učitel', correctAnswer: 'Учитель', options: ['Студент', 'Профессор', 'Учитель', 'Директор'], category: 'professions' },
  { id: 'mc77', czech: 'Programátor', correctAnswer: 'Программист', options: ['Дизайнер', 'Программист', 'Инженер', 'Аналитик'], category: 'professions' },
  // Sports
  { id: 'mc78', czech: 'Fotbal', correctAnswer: 'Футбол', options: ['Баскетбол', 'Футбол', 'Волейбол', 'Регби'], category: 'sports' },
  { id: 'mc79', czech: 'Hokej', correctAnswer: 'Хоккей', options: ['Шахматы', 'Хоккей', 'Теннис', 'Гольф'], category: 'sports' },
  { id: 'mc80', czech: 'Tenis', correctAnswer: 'Теннис', options: ['Бадминтон', 'Теннис', 'Сквош', 'Пинг-понг'], category: 'sports' },
  // Emotions
  { id: 'mc81', czech: 'Štěstí', correctAnswer: 'Счастье', options: ['Грусть', 'Радость', 'Счастье', 'Тревога'], category: 'emotions' },
  { id: 'mc82', czech: 'Láska', correctAnswer: 'Любовь', options: ['Ненависть', 'Любовь', 'Дружба', 'Уважение'], category: 'emotions' },
  { id: 'mc83', czech: 'Strach', correctAnswer: 'Страх', options: ['Храбрость', 'Страх', 'Удивление', 'Спокойствие'], category: 'emotions' },
  // School
  { id: 'mc84', czech: 'Učebnice', correctAnswer: 'Учебник', options: ['Тетрадь', 'Ручка', 'Учебник', 'Дневник'], category: 'school' },
  { id: 'mc85', czech: 'Zkouška', correctAnswer: 'Экзамен', options: ['Урок', 'Контрольная', 'Экзамен', 'Семестр'], category: 'school' },
  { id: 'mc86', czech: 'Třída', correctAnswer: 'Класс', options: ['Коридор', 'Класс', 'Кабинет', 'Зал'], category: 'school' },
  // Travel
  { id: 'mc87', czech: 'Kufr', correctAnswer: 'Чемодан', options: ['Сумка', 'Чемодан', 'Рюкзак', 'Портфель'], category: 'travel' },
  { id: 'mc88', czech: 'Hrad', correctAnswer: 'Замок', options: ['Дворец', 'Музей', 'Замок', 'Церковь'], category: 'travel' },
  { id: 'mc89', czech: 'Letenka', correctAnswer: 'Авиабилет', options: ['Паспорт', 'Виза', 'Авиабилет', 'Бронь'], category: 'travel' },
  // Fruits
  { id: 'mc90', czech: 'Hruška', correctAnswer: 'Груша', options: ['Яблоко', 'Груша', 'Слива', 'Персик'], category: 'fruits' },
  { id: 'mc91', czech: 'Jahoda', correctAnswer: 'Клубника', options: ['Малина', 'Клубника', 'Черника', 'Смородина'], category: 'fruits' },
  { id: 'mc92', czech: 'Meloun', correctAnswer: 'Арбуз', options: ['Дыня', 'Арбуз', 'Тыква', 'Огурец'], category: 'fruits' },
  // Adverbs
  { id: 'mc93', czech: 'Dnes', correctAnswer: 'Сегодня', options: ['Вчера', 'Завтра', 'Сегодня', 'Позавчера'], category: 'adverbs' },
  { id: 'mc94', czech: 'Zítra', correctAnswer: 'Завтра', options: ['Сегодня', 'Завтра', 'Послезавтра', 'Вчера'], category: 'adverbs' },
  { id: 'mc95', czech: 'Velmi', correctAnswer: 'Очень', options: ['Мало', 'Много', 'Очень', 'Едва'], category: 'adverbs' },
  // Furniture
  { id: 'mc96', czech: 'Skříň', correctAnswer: 'Шкаф', options: ['Комод', 'Шкаф', 'Полка', 'Стеллаж'], category: 'furniture' },
  { id: 'mc97', czech: 'Gauč', correctAnswer: 'Диван', options: ['Кровать', 'Кресло', 'Диван', 'Тахта'], category: 'furniture' },
  { id: 'mc98', czech: 'Trouba', correctAnswer: 'Духовка', options: ['Плита', 'Микроволновка', 'Духовка', 'Гриль'], category: 'furniture' },
  // Tech
  { id: 'mc99', czech: 'Telefon', correctAnswer: 'Телефон', options: ['Планшет', 'Телефон', 'Ноутбук', 'Часы'], category: 'tech' },
  // Work and career
  { id: 'mc-wc1', czech: 'Práce', correctAnswer: 'Работа', options: ['Учёба', 'Работа', 'Отдых', 'Путешествие'], category: 'work-career' },
  { id: 'mc-wc2', czech: 'Pohovor', correctAnswer: 'Собеседование', options: ['Экзамен', 'Собеседование', 'Встреча', 'Дискуссия'], category: 'work-career' },
  { id: 'mc-wc3', czech: 'Plat', correctAnswer: 'Зарплата', options: ['Стипендия', 'Пенсия', 'Зарплата', 'Премия'], category: 'work-career' },
  { id: 'mc-wc4', czech: 'Dovolená', correctAnswer: 'Отпуск', options: ['Выходной', 'Отпуск', 'Больничный', 'Командировка'], category: 'work-career' },
  { id: 'mc-wc5', czech: 'Smlouva', correctAnswer: 'Контракт / Договор', options: ['Резюме', 'Рекомендация', 'Контракт / Договор', 'Письмо'], category: 'work-career' },
  // Restaurant
  { id: 'mc-rst1', czech: 'Jídelní lístek', correctAnswer: 'Меню', options: ['Рецепт', 'Меню', 'Счёт', 'Чек'], category: 'restaurant' },
  { id: 'mc-rst2', czech: 'Účet', correctAnswer: 'Счёт', options: ['Меню', 'Чаевые', 'Счёт', 'Бронь'], category: 'restaurant' },
  { id: 'mc-rst3', czech: 'Spropitné', correctAnswer: 'Чаевые', options: ['Счёт', 'Чаевые', 'Десерт', 'Закуска'], category: 'restaurant' },
  { id: 'mc-rst4', czech: 'Předkrm', correctAnswer: 'Закуска', options: ['Основное блюдо', 'Десерт', 'Напиток', 'Закуска'], category: 'restaurant' },
  { id: 'mc-rst5', czech: 'Číšník', correctAnswer: 'Официант', options: ['Повар', 'Официант', 'Менеджер', 'Хостес'], category: 'restaurant' },
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
  // Body
  { id: 'fb23', sentence: 'Bolí mě hlava.', sentenceWithBlank: 'Bolí mě ____.', correctAnswer: 'hlava', options: ['ruka', 'hlava', 'noha', 'záda'], category: 'body', hint: 'Часть тела сверху' },
  { id: 'fb24', sentence: 'Čistím si zuby každý den.', sentenceWithBlank: 'Čistím si ____ každý den.', correctAnswer: 'zuby', options: ['vlasy', 'zuby', 'uši', 'ruce'], category: 'body', hint: 'Во рту' },
  { id: 'fb25', sentence: 'Sport je dobrý pro srdce.', sentenceWithBlank: 'Sport je dobrý pro ____.', correctAnswer: 'srdce', options: ['plíce', 'srdce', 'žaludek', 'mozek'], category: 'body', hint: 'Основной орган кровообращения' },
  // Animals
  { id: 'fb26', sentence: 'Můj pes je velmi přátelský.', sentenceWithBlank: 'Můj ____ je velmi přátelský.', correctAnswer: 'pes', options: ['pes', 'kocour', 'koně', 'pták'], category: 'animals', hint: 'Домашнее животное' },
  { id: 'fb27', sentence: 'Pták zpívá na stromě.', sentenceWithBlank: '____ zpívá na stromě.', correctAnswer: 'pták', options: ['pták', 'květina', 'list', 'vítr'], category: 'animals', hint: 'Летающее существо' },
  { id: 'fb28', sentence: 'Včela dělá med.', sentenceWithBlank: '____ dělá med.', correctAnswer: 'včela', options: ['včela', 'mravenec', 'motýl', 'beruška'], category: 'animals', hint: 'Насекомое, производит мёд' },
  // Nature
  { id: 'fb29', sentence: 'Slunce svítí jasně.', sentenceWithBlank: '____ svítí jasně.', correctAnswer: 'Slunce', options: ['Měsíc', 'Slunce', 'Hvězda', 'Lampa'], category: 'nature', hint: 'Днём на небе' },
  { id: 'fb30', sentence: 'V zimě padá sníh.', sentenceWithBlank: 'V zimě padá ____.', correctAnswer: 'sníh', options: ['déšť', 'sníh', 'kroupy', 'mlha'], category: 'nature', hint: 'Белый, холодный' },
  { id: 'fb31', sentence: 'Řeka protéká městem.', sentenceWithBlank: '____ protéká městem.', correctAnswer: 'Řeka', options: ['Cesta', 'Řeka', 'Ulice', 'Nádraží'], category: 'nature', hint: 'Водоём' },
  // Home
  { id: 'fb32', sentence: 'Na stole stojí váza.', sentenceWithBlank: 'Na ____ stojí váza.', correctAnswer: 'stole', options: ['židli', 'stole', 'posteli', 'okně'], category: 'home', hint: 'Мебель для работы и еды' },
  { id: 'fb33', sentence: 'V lednici je mléko a sýr.', sentenceWithBlank: 'V ____ je mléko a sýr.', correctAnswer: 'lednici', options: ['lednici', 'truhle', 'skříni', 'krabici'], category: 'home', hint: 'Охлаждает продукты' },
  // Clothing
  { id: 'fb34', sentence: 'V zimě nosím teplý kabát.', sentenceWithBlank: 'V zimě nosím teplý ____.', correctAnswer: 'kabát', options: ['kabát', 'tričko', 'šaty', 'plavky'], category: 'clothing', hint: 'Верхняя одежда' },
  { id: 'fb35', sentence: 'Na ruce mám rukavice.', sentenceWithBlank: 'Na ruce mám ____.', correctAnswer: 'rukavice', options: ['rukavice', 'ponožky', 'boty', 'čepici'], category: 'clothing', hint: 'Для рук зимой' },
  // Verbs
  { id: 'fb36', sentence: 'Učím se česky každý den.', sentenceWithBlank: 'Učím se ____ každý den.', correctAnswer: 'česky', options: ['česky', 'anglicky', 'francouzsky', 'německy'], category: 'verbs', hint: 'Язык Чехии' },
  { id: 'fb37', sentence: 'Pracuji v bankě.', sentenceWithBlank: '____ v bankě.', correctAnswer: 'Pracuji', options: ['Studuji', 'Pracuji', 'Bydlím', 'Odpočívám'], category: 'verbs', hint: 'Трудовая деятельность' },
  // Professions
  { id: 'fb38', sentence: 'Můj otec je lékař.', sentenceWithBlank: 'Můj otec je ____.', correctAnswer: 'lékař', options: ['lékař', 'učitel', 'inženýr', 'programátor'], category: 'professions', hint: 'Медицинская профессия' },
  // Emotions
  { id: 'fb39', sentence: 'Cítím velké štěstí.', sentenceWithBlank: 'Cítím velké ____.', correctAnswer: 'štěstí', options: ['štěstí', 'strach', 'smutek', 'zlost'], category: 'emotions', hint: 'Позитивное чувство' },
  // Sports
  { id: 'fb40', sentence: 'Hráli jsme fotbal v parku.', sentenceWithBlank: 'Hráli jsme ____ v parku.', correctAnswer: 'fotbal', options: ['hokej', 'fotbal', 'tenis', 'basketbal'], category: 'sports', hint: 'Популярный командный спорт' },
  // School
  { id: 'fb41', sentence: 'Mám zítra zkoušku z matematiky.', sentenceWithBlank: 'Mám zítra ____ z matematiky.', correctAnswer: 'zkoušku', options: ['hodinu', 'přestávku', 'zkoušku', 'výuku'], category: 'school', hint: 'Проверка знаний' },
  // Travel
  { id: 'fb42', sentence: 'Navštívili jsme krásný hrad.', sentenceWithBlank: 'Navštívili jsme krásný ____.', correctAnswer: 'hrad', options: ['hrad', 'muzeum', 'kostel', 'park'], category: 'travel', hint: 'Средневековое сооружение' },
  // Fruits
  { id: 'fb43', sentence: 'Na trhu koupím čerstvé jahody.', sentenceWithBlank: 'Na trhu koupím čerstvé ____.', correctAnswer: 'jahody', options: ['jablka', 'jahody', 'hrušky', 'švestky'], category: 'fruits', hint: 'Красные садовые ягоды' },
  // Adverbs
  { id: 'fb44', sentence: 'Dnes je krásné počasí.', sentenceWithBlank: '____ je krásné počasí.', correctAnswer: 'Dnes', options: ['Zítra', 'Včera', 'Dnes', 'Vždy'], category: 'adverbs', hint: 'Этот день' },
  // Furniture
  { id: 'fb45', sentence: 'Nový gauč stojí v obýváku.', sentenceWithBlank: 'Nový ____ stojí v obýváku.', correctAnswer: 'gauč', options: ['stůl', 'gauč', 'skříň', 'židle'], category: 'furniture', hint: 'Мягкая мебель для сидения' },
  // Tech
  { id: 'fb46', sentence: 'Počítač je na stole.', sentenceWithBlank: '____ je na stole.', correctAnswer: 'Počítač', options: ['Telefon', 'Počítač', 'Televize', 'Rádio'], category: 'tech', hint: 'Электронное устройство для работы' },
  // Prepositions
  { id: 'fb47', sentence: 'Jsem doma.', sentenceWithBlank: 'Jsem ____ doma.', correctAnswer: 'už', options: ['už', 'ještě', 'ne', 'také'], category: 'adverbs', hint: 'Уже, в значении завершения' },
  // Work and career
  { id: 'fb-wc1', sentence: 'Mám novou práci v Praze.', sentenceWithBlank: 'Mám novou ____ v Praze.', correctAnswer: 'práci', options: ['práci', 'kariéru', 'pozici', 'smlouvu'], category: 'work-career', hint: 'Трудовая деятельность' },
  { id: 'fb-wc2', sentence: 'Dostal jsem vyšší plat.', sentenceWithBlank: 'Dostal jsem vyšší ____.', correctAnswer: 'plat', options: ['účet', 'plat', 'příspěvek', 'výdaj'], category: 'work-career', hint: 'Денежное вознаграждение за труд' },
  { id: 'fb-wc3', sentence: 'Můj šéf je velmi přísný.', sentenceWithBlank: 'Můj ____ je velmi přísný.', correctAnswer: 'šéf', options: ['šéf', 'kolega', 'známý', 'soused'], category: 'work-career', hint: 'Руководитель' },
  { id: 'fb-wc4', sentence: 'Jedu na dovolenou na dva týdny.', sentenceWithBlank: 'Jedu na ____ na dva týdny.', correctAnswer: 'dovolenou', options: ['dovolenou', 'službu', 'cestu', 'akci'], category: 'work-career', hint: 'Время отдыха от работы' },
  { id: 'fb-wc5', sentence: 'Podepsal jsem pracovní smlouvu.', sentenceWithBlank: 'Podepsal jsem pracovní ____.', correctAnswer: 'smlouvu', options: ['smlouvu', 'životopis', 'účet', 'rezervaci'], category: 'work-career', hint: 'Правовой документ о трудоустройстве' },
  // Restaurant
  { id: 'fb-rst1', sentence: 'Prosím, účet!', sentenceWithBlank: 'Prosím, ____!', correctAnswer: 'účet', options: ['účet', 'lístek', 'stůl', 'příbor'], category: 'restaurant', hint: 'Документ с суммой к оплате' },
  { id: 'fb-rst2', sentence: 'Na předkrm si dám salát.', sentenceWithBlank: 'Na ____ si dám salát.', correctAnswer: 'předkrm', options: ['předkrm', 'dezert', 'hlavní chod', 'nápoj'], category: 'restaurant', hint: 'Первое блюдо' },
  { id: 'fb-rst3', sentence: 'Číšník nám přinesl jídlo.', sentenceWithBlank: '____ nám přinesl jídlo.', correctAnswer: 'Číšník', options: ['Číšník', 'Kuchař', 'Šéf', 'Host'], category: 'restaurant', hint: 'Работник, обслуживающий столики' },
  { id: 'fb-rst4', sentence: 'Objednali jsme láhev vína.', sentenceWithBlank: 'Objednali jsme ____ vína.', correctAnswer: 'láhev', options: ['láhev', 'sklenici', 'pórce', 'talíř'], category: 'restaurant', hint: 'Ёмкость для напитков' },
  { id: 'fb-rst5', sentence: 'Tato porce je velmi velká.', sentenceWithBlank: 'Tato ____ je velmi velká.', correctAnswer: 'porce', options: ['porce', 'láhev', 'sklenice', 'předkrm'], category: 'restaurant', hint: 'Размер порции блюда' },
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
  {
    id: 'ms6',
    title: 'Животные',
    pairs: [
      { czech: 'Pes', russian: 'Собака' },
      { czech: 'Kočka', russian: 'Кошка' },
      { czech: 'Kůň', russian: 'Лошадь' },
      { czech: 'Kráva', russian: 'Корова' },
      { czech: 'Prase', russian: 'Свинья' },
      { czech: 'Ovce', russian: 'Овца' },
      { czech: 'Pták', russian: 'Птица' },
      { czech: 'Vlk', russian: 'Волк' },
      { czech: 'Medvěd', russian: 'Медведь' },
      { czech: 'Liška', russian: 'Лиса' },
    ],
  },
  {
    id: 'ms7',
    title: 'Природа',
    pairs: [
      { czech: 'Strom', russian: 'Дерево' },
      { czech: 'Květina', russian: 'Цветок' },
      { czech: 'Řeka', russian: 'Река' },
      { czech: 'Hora', russian: 'Гора' },
      { czech: 'Moře', russian: 'Море' },
      { czech: 'Les', russian: 'Лес' },
      { czech: 'Slunce', russian: 'Солнце' },
      { czech: 'Měsíc', russian: 'Луна' },
      { czech: 'Déšť', russian: 'Дождь' },
      { czech: 'Sníh', russian: 'Снег' },
    ],
  },
  {
    id: 'ms8',
    title: 'Одежда',
    pairs: [
      { czech: 'Košile', russian: 'Рубашка' },
      { czech: 'Kalhoty', russian: 'Брюки' },
      { czech: 'Šaty', russian: 'Платье' },
      { czech: 'Kabát', russian: 'Пальто' },
      { czech: 'Boty', russian: 'Ботинки' },
      { czech: 'Čepice', russian: 'Шапка' },
      { czech: 'Rukavice', russian: 'Перчатки' },
      { czech: 'Bunda', russian: 'Куртка' },
      { czech: 'Mikina', russian: 'Толстовка' },
      { czech: 'Taška', russian: 'Сумка' },
    ],
  },
  {
    id: 'ms9',
    title: 'Дом и быт',
    pairs: [
      { czech: 'Stůl', russian: 'Стол' },
      { czech: 'Židle', russian: 'Стул' },
      { czech: 'Postel', russian: 'Кровать' },
      { czech: 'Okno', russian: 'Окно' },
      { czech: 'Dveře', russian: 'Дверь' },
      { czech: 'Kuchyně', russian: 'Кухня' },
      { czech: 'Koupelna', russian: 'Ванная' },
      { czech: 'Lednice', russian: 'Холодильник' },
      { czech: 'Klíč', russian: 'Ключ' },
      { czech: 'Hodiny', russian: 'Часы' },
    ],
  },
  {
    id: 'ms10',
    title: 'Глаголы',
    pairs: [
      { czech: 'Jít', russian: 'Идти' },
      { czech: 'Běžet', russian: 'Бежать' },
      { czech: 'Jíst', russian: 'Есть (кушать)' },
      { czech: 'Pít', russian: 'Пить' },
      { czech: 'Spát', russian: 'Спать' },
      { czech: 'Číst', russian: 'Читать' },
      { czech: 'Psát', russian: 'Писать' },
      { czech: 'Mluvit', russian: 'Говорить' },
      { czech: 'Vidět', russian: 'Видеть' },
      { czech: 'Dělat', russian: 'Делать' },
    ],
  },
  {
    id: 'ms11',
    title: 'Профессии',
    pairs: [
      { czech: 'Lékař', russian: 'Врач' },
      { czech: 'Učitel', russian: 'Учитель' },
      { czech: 'Programátor', russian: 'Программист' },
      { czech: 'Inženýr', russian: 'Инженер' },
      { czech: 'Sestra', russian: 'Медсестра' },
      { czech: 'Policista', russian: 'Полицейский' },
      { czech: 'Kuchař', russian: 'Повар' },
      { czech: 'Advokát', russian: 'Адвокат' },
      { czech: 'Dentista', russian: 'Стоматолог' },
      { czech: 'Architekt', russian: 'Архитектор' },
    ],
  },
  {
    id: 'ms12',
    title: 'Спорт и хобби',
    pairs: [
      { czech: 'Fotbal', russian: 'Футбол' },
      { czech: 'Hokej', russian: 'Хоккей' },
      { czech: 'Tenis', russian: 'Теннис' },
      { czech: 'Plavání', russian: 'Плавание' },
      { czech: 'Basketbal', russian: 'Баскетбол' },
      { czech: 'Hudba', russian: 'Музыка' },
      { czech: 'Kreslení', russian: 'Рисование' },
      { czech: 'Cvičení', russian: 'Тренировка' },
      { czech: 'Cyklistika', russian: 'Велоспорт' },
      { czech: 'Šachy', russian: 'Шахматы' },
    ],
  },
  {
    id: 'ms13',
    title: 'Чувства и эмоции',
    pairs: [
      { czech: 'Štěstí', russian: 'Счастье' },
      { czech: 'Láska', russian: 'Любовь' },
      { czech: 'Strach', russian: 'Страх' },
      { czech: 'Smutek', russian: 'Грусть' },
      { czech: 'Zlost', russian: 'Гнев' },
      { czech: 'Překvapení', russian: 'Удивление' },
      { czech: 'Radost', russian: 'Радость' },
      { czech: 'Nuda', russian: 'Скука' },
      { czech: 'Úleva', russian: 'Облегчение' },
      { czech: 'Naděje', russian: 'Надежда' },
    ],
  },
  {
    id: 'ms14',
    title: 'Фрукты и овощи',
    pairs: [
      { czech: 'Hruška', russian: 'Груша' },
      { czech: 'Jahoda', russian: 'Клубника' },
      { czech: 'Meloun', russian: 'Арбуз' },
      { czech: 'Broskev', russian: 'Персик' },
      { czech: 'Švestka', russian: 'Слива' },
      { czech: 'Malina', russian: 'Малина' },
      { czech: 'Banán', russian: 'Банан' },
      { czech: 'Okurka', russian: 'Огурец' },
      { czech: 'Rajče', russian: 'Помидор' },
      { czech: 'Mrkev', russian: 'Морковь' },
    ],
  },
  {
    id: 'ms15',
    title: 'Технологии',
    pairs: [
      { czech: 'Telefon', russian: 'Телефон' },
      { czech: 'Počítač', russian: 'Компьютер' },
      { czech: 'Internet', russian: 'Интернет' },
      { czech: 'Televize', russian: 'Телевизор' },
      { czech: 'Tablet', russian: 'Планшет' },
      { czech: 'Kamera', russian: 'Камера' },
      { czech: 'Tiskárna', russian: 'Принтер' },
      { czech: 'Nabíječka', russian: 'Зарядка' },
      { czech: 'Sluchátka', russian: 'Наушники' },
      { czech: 'Klávesnice', russian: 'Клавиатура' },
    ],
  },
  {
    id: 'ms-wc1',
    title: 'Работа и карьера',
    pairs: [
      { czech: 'Práce', russian: 'Работа' },
      { czech: 'Kariéra', russian: 'Карьера' },
      { czech: 'Pohovor', russian: 'Собеседование' },
      { czech: 'Plat', russian: 'Зарплата' },
      { czech: 'Šéf', russian: 'Начальник' },
      { czech: 'Kolega', russian: 'Коллега' },
      { czech: 'Smlouva', russian: 'Контракт' },
      { czech: 'Dovolená', russian: 'Отпуск' },
      { czech: 'Pozice', russian: 'Должность' },
      { czech: 'Životopis', russian: 'Резюме' },
    ],
  },
  {
    id: 'ms-rst1',
    title: 'В ресторане',
    pairs: [
      { czech: 'Jídelní lístek', russian: 'Меню' },
      { czech: 'Účet', russian: 'Счёт' },
      { czech: 'Spropitné', russian: 'Чаевые' },
      { czech: 'Předkrm', russian: 'Закуска' },
      { czech: 'Hlavní chod', russian: 'Основное блюдо' },
      { czech: 'Dezert', russian: 'Десерт' },
      { czech: 'Nápoj', russian: 'Напиток' },
      { czech: 'Rezervace', russian: 'Бронь' },
      { czech: 'Číšník', russian: 'Официант' },
      { czech: 'Sklenice', russian: 'Бокал' },
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
  // Body
  { id: 'sb15', correctSentence: 'Bolí mě hlava.', translation: 'У меня болит голова.', words: ['Bolí', 'mě', 'hlava', '.'], category: 'body' },
  { id: 'sb16', correctSentence: 'Mám zdravé srdce.', translation: 'У меня здоровое сердце.', words: ['Mám', 'zdravé', 'srdce', '.'], category: 'body' },
  // Animals
  { id: 'sb17', correctSentence: 'Můj pes je velký.', translation: 'Моя собака большая.', words: ['Můj', 'pes', 'je', 'velký', '.'], category: 'animals' },
  { id: 'sb18', correctSentence: 'Kočka spí na gauči.', translation: 'Кошка спит на диване.', words: ['Kočka', 'spí', 'na', 'gauči', '.'], category: 'animals' },
  // Nature
  { id: 'sb19', correctSentence: 'Slunce svítí jasně.', translation: 'Солнце светит ярко.', words: ['Slunce', 'svítí', 'jasně', '.'], category: 'nature' },
  { id: 'sb20', correctSentence: 'V zimě padá sníh.', translation: 'Зимой падает снег.', words: ['V', 'zimě', 'padá', 'sníh', '.'], category: 'nature' },
  // Home
  { id: 'sb21', correctSentence: 'Dveře jsou zavřené.', translation: 'Двери закрыты.', words: ['Dveře', 'jsou', 'zavřené', '.'], category: 'home' },
  { id: 'sb22', correctSentence: 'Na stole je váza.', translation: 'На столе стоит ваза.', words: ['Na', 'stole', 'je', 'váza', '.'], category: 'home' },
  // Clothing
  { id: 'sb23', correctSentence: 'Mám nové boty.', translation: 'У меня новые ботинки.', words: ['Mám', 'nové', 'boty', '.'], category: 'clothing' },
  { id: 'sb24', correctSentence: 'V zimě nosím čepici.', translation: 'Зимой я ношу шапку.', words: ['V', 'zimě', 'nosím', 'čepici', '.'], category: 'clothing' },
  // Verbs
  { id: 'sb25', correctSentence: 'Chci jíst.', translation: 'Я хочу есть.', words: ['Chci', 'jíst', '.'], category: 'verbs' },
  { id: 'sb26', correctSentence: 'Musím jít domů.', translation: 'Мне нужно идти домой.', words: ['Musím', 'jít', 'domů', '.'], category: 'verbs' },
  { id: 'sb27', correctSentence: 'Učím se česky.', translation: 'Я учу чешский.', words: ['Učím', 'se', 'česky', '.'], category: 'verbs' },
  { id: 'sb28', correctSentence: 'Vidím velký dům.', translation: 'Я вижу большой дом.', words: ['Vidím', 'velký', 'dům', '.'], category: 'verbs' },
  // Professions
  { id: 'sb29', correctSentence: 'Moje matka je lékařka.', translation: 'Моя мама врач.', words: ['Moje', 'matka', 'je', 'lékařka', '.'], category: 'professions' },
  { id: 'sb30', correctSentence: 'Pracuji jako programátor.', translation: 'Я работаю программистом.', words: ['Pracuji', 'jako', 'programátor', '.'], category: 'professions' },
  // Emotions
  { id: 'sb31', correctSentence: 'Jsem velmi šťastný.', translation: 'Я очень счастлив.', words: ['Jsem', 'velmi', 'šťastný', '.'], category: 'emotions' },
  { id: 'sb32', correctSentence: 'Cítím strach z tmy.', translation: 'Я боюсь темноты.', words: ['Cítím', 'strach', 'z', 'tmy', '.'], category: 'emotions' },
  // Sports
  { id: 'sb33', correctSentence: 'Hraji fotbal každou sobotu.', translation: 'Я играю в футбол каждую субботу.', words: ['Hraji', 'fotbal', 'každou', 'sobotu', '.'], category: 'sports' },
  // School
  { id: 'sb34', correctSentence: 'Mám zkoušku z češtiny.', translation: 'У меня экзамен по чешскому.', words: ['Mám', 'zkoušku', 'z', 'češtiny', '.'], category: 'school' },
  // Travel
  { id: 'sb35', correctSentence: 'Letíme do Prahy.', translation: 'Мы летим в Прагу.', words: ['Letíme', 'do', 'Prahy', '.'], category: 'travel' },
  // Fruits
  { id: 'sb36', correctSentence: 'Jahody jsou velmi sladké.', translation: 'Клубника очень сладкая.', words: ['Jahody', 'jsou', 'velmi', 'sladké', '.'], category: 'fruits' },
  // Tech
  { id: 'sb37', correctSentence: 'Můj telefon je nový.', translation: 'Мой телефон новый.', words: ['Můj', 'telefon', 'je', 'nový', '.'], category: 'tech' },
  // Furniture
  { id: 'sb38', correctSentence: 'Koupili jsme nový gauč.', translation: 'Мы купили новый диван.', words: ['Koupili', 'jsme', 'nový', 'gauč', '.'], category: 'furniture' },
  // Work and career
  { id: 'sb-wc1', correctSentence: 'Mám novou práci v Praze.', translation: 'У меня новая работа в Праге.', words: ['Mám', 'novou', 'práci', 'v', 'Praze', '.'], category: 'work-career' },
  { id: 'sb-wc2', correctSentence: 'Podepsal jsem pracovní smlouvu.', translation: 'Я подписал трудовой контракт.', words: ['Podepsal', 'jsem', 'pracovní', 'smlouvu', '.'], category: 'work-career' },
  { id: 'sb-wc3', correctSentence: 'Můj šéf je velmi přísný.', translation: 'Мой начальник очень строгий.', words: ['Můj', 'šéf', 'je', 'velmi', 'přísný', '.'], category: 'work-career' },
  { id: 'sb-wc4', correctSentence: 'Hledám novou pozici v IT.', translation: 'Я ищу новую должность в IT.', words: ['Hledám', 'novou', 'pozici', 'v', 'IT', '.'], category: 'work-career' },
  { id: 'sb-wc5', correctSentence: 'Jedu na dovolenou na dva týdny.', translation: 'Я еду в отпуск на две недели.', words: ['Jedu', 'na', 'dovolenou', 'na', 'dva', 'týdny', '.'], category: 'work-career' },
  // Restaurant
  { id: 'sb-rst1', correctSentence: 'Prosím o jídelní lístek.', translation: 'Меню, пожалуйста.', words: ['Prosím', 'o', 'jídelní', 'lístek', '.'], category: 'restaurant' },
  { id: 'sb-rst2', correctSentence: 'Číšník nám přinesl jídlo.', translation: 'Официант принёс нам еду.', words: ['Číšník', 'nám', 'přinesl', 'jidlo', '.'], category: 'restaurant' },
  { id: 'sb-rst3', correctSentence: 'Na dezert si dám palačinky.', translation: 'На десерт я возьму блинчики.', words: ['Na', 'dezert', 'si', 'dám', 'palačinky', '.'], category: 'restaurant' },
  { id: 'sb-rst4', correctSentence: 'Chci udělat rezervaci na sedm hodin.', translation: 'Я хочу сделать бронь на семь часов.', words: ['Chci', 'udělat', 'rezervaci', 'na', 'sedm', 'hodin', '.'], category: 'restaurant' },
  { id: 'sb-rst5', correctSentence: 'Chci ochutnat české speciality.', translation: 'Я хочу попробовать чешские деликатесы.', words: ['Chci', 'ochutnat', 'české', 'speciality', '.'], category: 'restaurant' },
];

export const trueFalseQuestions: TrueFalseQuestion[] = [
  // Greetings - mix of correct and incorrect
  { id: 'tf1', czech: 'Dobrý den', russian: 'Добрый день', isCorrect: true, correctRussian: 'Добрый день', category: 'greetings' },
  { id: 'tf2', czech: 'Na shledanou', russian: 'Здравствуйте', isCorrect: false, correctRussian: 'До свидания', category: 'greetings' },
  { id: 'tf3', czech: 'Děkuji', russian: 'Пожалуйста', isCorrect: false, correctRussian: 'Спасибо', category: 'greetings' },
  { id: 'tf4', czech: 'Ahoj', russian: 'Привет', isCorrect: true, correctRussian: 'Привет', category: 'greetings' },
  { id: 'tf5', czech: 'Promiňte', russian: 'Извините', isCorrect: true, correctRussian: 'Извините', category: 'greetings' },
  { id: 'tf6', czech: 'Prosím', russian: 'Спасибо', isCorrect: false, correctRussian: 'Пожалуйста', category: 'greetings' },
  // Food
  { id: 'tf7', czech: 'Chléb', russian: 'Хлеб', isCorrect: true, correctRussian: 'Хлеб', category: 'food' },
  { id: 'tf8', czech: 'Mléko', russian: 'Кофе', isCorrect: false, correctRussian: 'Молоко', category: 'food' },
  { id: 'tf9', czech: 'Brambory', russian: 'Картофель', isCorrect: true, correctRussian: 'Картофель', category: 'food' },
  { id: 'tf10', czech: 'Sýr', russian: 'Масло', isCorrect: false, correctRussian: 'Сыр', category: 'food' },
  { id: 'tf11', czech: 'Kuře', russian: 'Курица', isCorrect: true, correctRussian: 'Курица', category: 'food' },
  { id: 'tf12', czech: 'Rajče', russian: 'Огурец', isCorrect: false, correctRussian: 'Помидор', category: 'food' },
  // Family
  { id: 'tf13', czech: 'Bratr', russian: 'Брат', isCorrect: true, correctRussian: 'Брат', category: 'family' },
  { id: 'tf14', czech: 'Dcera', russian: 'Сестра', isCorrect: false, correctRussian: 'Дочь', category: 'family' },
  { id: 'tf15', czech: 'Dědeček', russian: 'Дедушка', isCorrect: true, correctRussian: 'Дедушка', category: 'family' },
  { id: 'tf16', czech: 'Manželka', russian: 'Мать', isCorrect: false, correctRussian: 'Жена', category: 'family' },
  { id: 'tf17', czech: 'Babička', russian: 'Бабушка', isCorrect: true, correctRussian: 'Бабушка', category: 'family' },
  // Colors
  { id: 'tf18', czech: 'Červená', russian: 'Красный', isCorrect: true, correctRussian: 'Красный', category: 'colors' },
  { id: 'tf19', czech: 'Modrá', russian: 'Зелёный', isCorrect: false, correctRussian: 'Синий', category: 'colors' },
  { id: 'tf20', czech: 'Zelená', russian: 'Зелёный', isCorrect: true, correctRussian: 'Зелёный', category: 'colors' },
  { id: 'tf21', czech: 'Bílá', russian: 'Чёрный', isCorrect: false, correctRussian: 'Белый', category: 'colors' },
  { id: 'tf22', czech: 'Fialová', russian: 'Фиолетовый', isCorrect: true, correctRussian: 'Фиолетовый', category: 'colors' },
  // Transport
  { id: 'tf23', czech: 'Vlak', russian: 'Поезд', isCorrect: true, correctRussian: 'Поезд', category: 'transport' },
  { id: 'tf24', czech: 'Letadlo', russian: 'Вертолёт', isCorrect: false, correctRussian: 'Самолёт', category: 'transport' },
  { id: 'tf25', czech: 'Kolo', russian: 'Велосипед', isCorrect: true, correctRussian: 'Велосипед', category: 'transport' },
  { id: 'tf26', czech: 'Tramvaj', russian: 'Автобус', isCorrect: false, correctRussian: 'Трамвай', category: 'transport' },
  // City
  { id: 'tf27', czech: 'Náměstí', russian: 'Площадь', isCorrect: true, correctRussian: 'Площадь', category: 'city' },
  { id: 'tf28', czech: 'Knihovna', russian: 'Книжный магазин', isCorrect: false, correctRussian: 'Библиотека', category: 'city' },
  { id: 'tf29', czech: 'Lékárna', russian: 'Аптека', isCorrect: true, correctRussian: 'Аптека', category: 'city' },
  { id: 'tf30', czech: 'Divadlo', russian: 'Кино', isCorrect: false, correctRussian: 'Театр', category: 'city' },
  // Numbers
  { id: 'tf31', czech: 'Tři', russian: 'Три', isCorrect: true, correctRussian: 'Три', category: 'numbers' },
  { id: 'tf32', czech: 'Pět', russian: 'Шесть', isCorrect: false, correctRussian: 'Пять', category: 'numbers' },
  { id: 'tf33', czech: 'Deset', russian: 'Десять', isCorrect: true, correctRussian: 'Десять', category: 'numbers' },
  { id: 'tf34', czech: 'Sedm', russian: 'Семь', isCorrect: true, correctRussian: 'Семь', category: 'numbers' },
  { id: 'tf35', czech: 'Devět', russian: 'Восемь', isCorrect: false, correctRussian: 'Девять', category: 'numbers' },
  // Body
  { id: 'tf36', czech: 'Hlava', russian: 'Голова', isCorrect: true, correctRussian: 'Голова', category: 'body' },
  { id: 'tf37', czech: 'Srdce', russian: 'Печень', isCorrect: false, correctRussian: 'Сердце', category: 'body' },
  { id: 'tf38', czech: 'Ruka', russian: 'Рука', isCorrect: true, correctRussian: 'Рука', category: 'body' },
  { id: 'tf39', czech: 'Krk', russian: 'Колено', isCorrect: false, correctRussian: 'Шея', category: 'body' },
  // Animals
  { id: 'tf40', czech: 'Pes', russian: 'Собака', isCorrect: true, correctRussian: 'Собака', category: 'animals' },
  { id: 'tf41', czech: 'Kůň', russian: 'Корова', isCorrect: false, correctRussian: 'Лошадь', category: 'animals' },
  { id: 'tf42', czech: 'Medvěd', russian: 'Медведь', isCorrect: true, correctRussian: 'Медведь', category: 'animals' },
  { id: 'tf43', czech: 'Liška', russian: 'Волк', isCorrect: false, correctRussian: 'Лиса', category: 'animals' },
  // Nature
  { id: 'tf44', czech: 'Déšť', russian: 'Дождь', isCorrect: true, correctRussian: 'Дождь', category: 'nature' },
  { id: 'tf45', czech: 'Slunce', russian: 'Луна', isCorrect: false, correctRussian: 'Солнце', category: 'nature' },
  { id: 'tf46', czech: 'Les', russian: 'Парк', isCorrect: false, correctRussian: 'Лес', category: 'nature' },
  { id: 'tf47', czech: 'Moře', russian: 'Море', isCorrect: true, correctRussian: 'Море', category: 'nature' },
  // Clothing
  { id: 'tf48', czech: 'Kabát', russian: 'Пальто', isCorrect: true, correctRussian: 'Пальто', category: 'clothing' },
  { id: 'tf49', czech: 'Bunda', russian: 'Рубашка', isCorrect: false, correctRussian: 'Куртка', category: 'clothing' },
  { id: 'tf50', czech: 'Čepice', russian: 'Шапка', isCorrect: true, correctRussian: 'Шапка', category: 'clothing' },
  // Home
  { id: 'tf51', czech: 'Stůl', russian: 'Стол', isCorrect: true, correctRussian: 'Стол', category: 'home' },
  { id: 'tf52', czech: 'Postel', russian: 'Диван', isCorrect: false, correctRussian: 'Кровать', category: 'home' },
  { id: 'tf53', czech: 'Lednice', russian: 'Плита', isCorrect: false, correctRussian: 'Холодильник', category: 'home' },
  // Verbs
  { id: 'tf54', czech: 'Jíst', russian: 'Есть (кушать)', isCorrect: true, correctRussian: 'Есть (кушать)', category: 'verbs' },
  { id: 'tf55', czech: 'Číst', russian: 'Писать', isCorrect: false, correctRussian: 'Читать', category: 'verbs' },
  { id: 'tf56', czech: 'Běžet', russian: 'Бежать', isCorrect: true, correctRussian: 'Бежать', category: 'verbs' },
  { id: 'tf57', czech: 'Vidět', russian: 'Слышать', isCorrect: false, correctRussian: 'Видеть', category: 'verbs' },
  // Professions
  { id: 'tf58', czech: 'Lékař', russian: 'Врач', isCorrect: true, correctRussian: 'Врач', category: 'professions' },
  { id: 'tf59', czech: 'Učitel', russian: 'Врач', isCorrect: false, correctRussian: 'Учитель', category: 'professions' },
  // Sports
  { id: 'tf60', czech: 'Fotbal', russian: 'Футбол', isCorrect: true, correctRussian: 'Футбол', category: 'sports' },
  { id: 'tf61', czech: 'Hokej', russian: 'Теннис', isCorrect: false, correctRussian: 'Хоккей', category: 'sports' },
  // Emotions
  { id: 'tf62', czech: 'Štěstí', russian: 'Счастье', isCorrect: true, correctRussian: 'Счастье', category: 'emotions' },
  { id: 'tf63', czech: 'Strach', russian: 'Радость', isCorrect: false, correctRussian: 'Страх', category: 'emotions' },
  { id: 'tf64', czech: 'Láska', russian: 'Любовь', isCorrect: true, correctRussian: 'Любовь', category: 'emotions' },
  // School
  { id: 'tf65', czech: 'Učebnice', russian: 'Учебник', isCorrect: true, correctRussian: 'Учебник', category: 'school' },
  { id: 'tf66', czech: 'Zkouška', russian: 'Урок', isCorrect: false, correctRussian: 'Экзамен', category: 'school' },
  // Travel
  { id: 'tf67', czech: 'Kufr', russian: 'Чемодан', isCorrect: true, correctRussian: 'Чемодан', category: 'travel' },
  { id: 'tf68', czech: 'Hrad', russian: 'Дворец', isCorrect: false, correctRussian: 'Замок', category: 'travel' },
  { id: 'tf69', czech: 'Letenka', russian: 'Авиабилет', isCorrect: true, correctRussian: 'Авиабилет', category: 'travel' },
  // Fruits
  { id: 'tf70', czech: 'Hruška', russian: 'Груша', isCorrect: true, correctRussian: 'Груша', category: 'fruits' },
  { id: 'tf71', czech: 'Jahoda', russian: 'Малина', isCorrect: false, correctRussian: 'Клубника', category: 'fruits' },
  { id: 'tf72', czech: 'Meloun', russian: 'Арбуз', isCorrect: true, correctRussian: 'Арбуз', category: 'fruits' },
  // Adverbs
  { id: 'tf73', czech: 'Dnes', russian: 'Сегодня', isCorrect: true, correctRussian: 'Сегодня', category: 'adverbs' },
  { id: 'tf74', czech: 'Zítra', russian: 'Вчера', isCorrect: false, correctRussian: 'Завтра', category: 'adverbs' },
  // Furniture
  { id: 'tf75', czech: 'Skříň', russian: 'Шкаф', isCorrect: true, correctRussian: 'Шкаф', category: 'furniture' },
  { id: 'tf76', czech: 'Gauč', russian: 'Кровать', isCorrect: false, correctRussian: 'Диван', category: 'furniture' },
  { id: 'tf77', czech: 'Trouba', russian: 'Духовка', isCorrect: true, correctRussian: 'Духовка', category: 'furniture' },
  // Work and career
  { id: 'tf-wc1', czech: 'Práce', russian: 'Работа', isCorrect: true, correctRussian: 'Работа', category: 'work-career' },
  { id: 'tf-wc2', czech: 'Pohovor', russian: 'Отпуск', isCorrect: false, correctRussian: 'Собеседование', category: 'work-career' },
  { id: 'tf-wc3', czech: 'Plat', russian: 'Зарплата', isCorrect: true, correctRussian: 'Зарплата', category: 'work-career' },
  { id: 'tf-wc4', czech: 'Dovolená', russian: 'Командировка', isCorrect: false, correctRussian: 'Отпуск', category: 'work-career' },
  { id: 'tf-wc5', czech: 'Kolega', russian: 'Начальник', isCorrect: false, correctRussian: 'Коллега', category: 'work-career' },
  // Restaurant
  { id: 'tf-rst1', czech: 'Účet', russian: 'Счёт', isCorrect: true, correctRussian: 'Счёт', category: 'restaurant' },
  { id: 'tf-rst2', czech: 'Předkrm', russian: 'Десерт', isCorrect: false, correctRussian: 'Закуска', category: 'restaurant' },
  { id: 'tf-rst3', czech: 'Spropitné', russian: 'Чаевые', isCorrect: true, correctRussian: 'Чаевые', category: 'restaurant' },
  { id: 'tf-rst4', czech: 'Číšník', russian: 'Повар', isCorrect: false, correctRussian: 'Официант', category: 'restaurant' },
  { id: 'tf-rst5', czech: 'Dezert', russian: 'Основное блюдо', isCorrect: false, correctRussian: 'Десерт', category: 'restaurant' },
];
