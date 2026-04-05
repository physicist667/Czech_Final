export interface AlphabetLetter {
  id: number;
  upper: string;
  lower: string;
  ipa: string;
  exampleCzech: string;
  exampleRussian: string;
  note: string;
  isSpecial: boolean;
  group: 'vowel' | 'consonant' | 'special';
}

export const czechAlphabet: AlphabetLetter[] = [
  { id: 1, upper: 'A', lower: 'a', ipa: '/a/', exampleCzech: 'auto', exampleRussian: 'автомобиль', note: 'Так же, как в русском. Одинаковое звучание.', isSpecial: false, group: 'vowel' },
  { id: 2, upper: 'Á', lower: 'á', ipa: '/aː/', exampleCzech: 'nádraží', exampleRussian: 'вокзал', note: 'Долгий звук «а». В русском нет аналога. Произносится как «аа».', isSpecial: true, group: 'vowel' },
  { id: 3, upper: 'B', lower: 'b', ipa: '/b/', exampleCzech: 'bratr', exampleRussian: 'брат', note: 'Так же, как русская «б».', isSpecial: false, group: 'consonant' },
  { id: 4, upper: 'C', lower: 'c', ipa: '/ts/', exampleCzech: 'co', exampleRussian: 'что', note: 'Произносится как русская «ц» (не «к»!)', isSpecial: false, group: 'consonant' },
  { id: 5, upper: 'Č', lower: 'č', ipa: '/tʃ/', exampleCzech: 'čaj', exampleRussian: 'чай', note: 'Произносится как русская «ч». Специфическая буква чешского языка.', isSpecial: true, group: 'consonant' },
  { id: 6, upper: 'D', lower: 'd', ipa: '/d/', exampleCzech: 'den', exampleRussian: 'день', note: 'Так же, как русская «д».', isSpecial: false, group: 'consonant' },
  { id: 7, upper: 'Ď', lower: 'ď', ipa: '/ɟ/', exampleCzech: 'ďábel', exampleRussian: 'дьявол', note: 'Мягкая «дь». Произносится как «д» + «й».', isSpecial: true, group: 'consonant' },
  { id: 8, upper: 'E', lower: 'e', ipa: '/ɛ/', exampleCzech: 'èekat', exampleRussian: 'ждать', note: 'Похоже на русскую «э». Не путайте с «е»!', isSpecial: false, group: 'vowel' },
  { id: 9, upper: 'É', lower: 'é', ipa: '/eː/', exampleCzech: 'léto', exampleRussian: 'лето', note: 'Долгий звук «э». Произносится как «ээ».', isSpecial: true, group: 'vowel' },
  { id: 10, upper: 'Ě', lower: 'ě', ipa: '/jɛ/', exampleCzech: 'město', exampleRussian: 'город', note: 'Звук «йэ». Уникальная чешская буква! Произносится «йэ».', isSpecial: true, group: 'vowel' },
  { id: 11, upper: 'F', lower: 'f', ipa: '/f/', exampleCzech: 'filtr', exampleRussian: 'фильтр', note: 'Так же, как русская «ф».', isSpecial: false, group: 'consonant' },
  { id: 12, upper: 'G', lower: 'g', ipa: '/ɡ/', exampleCzech: 'gram', exampleRussian: 'грамм', note: 'Так же, как русская «г».', isSpecial: false, group: 'consonant' },
  { id: 13, upper: 'H', lower: 'h', ipa: '/ɦ/', exampleCzech: 'hrad', exampleRussian: 'замок', note: 'Придыхательная «г». Произносится мягче русской «г».', isSpecial: false, group: 'consonant' },
  { id: 14, upper: 'Ch', lower: 'ch', ipa: '/x/', exampleCzech: 'chléb', exampleRussian: 'хлеб', note: 'Это одна буква! Произносится как русская «х».', isSpecial: true, group: 'consonant' },
  { id: 15, upper: 'I', lower: 'i', ipa: '/ɪ/', exampleCzech: 'ino', exampleRussian: 'ино', note: 'Похоже на русскую «и», но короче.', isSpecial: false, group: 'vowel' },
  { id: 16, upper: 'Í', lower: 'í', ipa: '/iː/', exampleCzech: 'říct', exampleRussian: 'сказать', note: 'Долгий звук «и». Произносится как «ии».', isSpecial: true, group: 'vowel' },
  { id: 17, upper: 'J', lower: 'j', ipa: '/j/', exampleCzech: 'jazyk', exampleRussian: 'язык', note: 'Произносится как русская «й» (не «дж»!)', isSpecial: false, group: 'consonant' },
  { id: 18, upper: 'K', lower: 'k', ipa: '/k/', exampleCzech: 'kniha', exampleRussian: 'книга', note: 'Так же, как русская «к».', isSpecial: false, group: 'consonant' },
  { id: 19, upper: 'L', lower: 'l', ipa: '/l/', exampleCzech: 'lev', exampleRussian: 'лев', note: 'Так же, как русская «л» (твёрдая).', isSpecial: false, group: 'consonant' },
  { id: 20, upper: 'M', lower: 'm', ipa: '/m/', exampleCzech: 'muž', exampleRussian: 'мужчина', note: 'Так же, как русская «м».', isSpecial: false, group: 'consonant' },
  { id: 21, upper: 'N', lower: 'n', ipa: '/n/', exampleCzech: 'noc', exampleRussian: 'ночь', note: 'Так же, как русская «н».', isSpecial: false, group: 'consonant' },
  { id: 22, upper: 'Ň', lower: 'ň', ipa: '/ɲ/', exampleCzech: 'ňuma', exampleRussian: 'нюхать', note: 'Мягкая «нь». Произносится как «н» + «й».', isSpecial: true, group: 'consonant' },
  { id: 23, upper: 'O', lower: 'o', ipa: '/o/', exampleCzech: 'okno', exampleRussian: 'окно', note: 'Так же, как русская «о».', isSpecial: false, group: 'vowel' },
  { id: 24, upper: 'Ó', lower: 'ó', ipa: '/oː/', exampleCzech: 'óda', exampleRussian: 'ода', note: 'Долгий звук «о». Встречается редко, в заимствованиях.', isSpecial: true, group: 'vowel' },
  { id: 25, upper: 'P', lower: 'p', ipa: '/p/', exampleCzech: 'pes', exampleRussian: 'собака', note: 'Так же, как русская «п».', isSpecial: false, group: 'consonant' },
  { id: 26, upper: 'Q', lower: 'q', ipa: '/kʷ/', exampleCzech: 'kvíz', exampleRussian: 'викторина', note: 'Встречается только в заимствованиях, обычно с «u».', isSpecial: false, group: 'consonant' },
  { id: 27, upper: 'R', lower: 'r', ipa: '/r/', exampleCzech: 'ruka', exampleRussian: 'рука', note: 'Так же, как русская «р». Чешская «р» раскатистая.', isSpecial: false, group: 'consonant' },
  { id: 28, upper: 'Ř', lower: 'ř', ipa: '/r̯/', exampleCzech: 'řeka', exampleRussian: 'река', note: 'Самая сложная буква! Раскатистая «рж». Уникальна для чешского языка.', isSpecial: true, group: 'consonant' },
  { id: 29, upper: 'S', lower: 's', ipa: '/s/', exampleCzech: 'slunce', exampleRussian: 'солнце', note: 'Так же, как русская «с».', isSpecial: false, group: 'consonant' },
  { id: 30, upper: 'Š', lower: 'š', ipa: '/ʃ/', exampleCzech: 'škola', exampleRussian: 'школа', note: 'Произносится как русская «ш». Специфическая буква.', isSpecial: true, group: 'consonant' },
  { id: 31, upper: 'T', lower: 't', ipa: '/t/', exampleCzech: 'tužka', exampleRussian: 'карандаш', note: 'Так же, как русская «т».', isSpecial: false, group: 'consonant' },
  { id: 32, upper: 'Ť', lower: 'ť', ipa: '/c/', exampleCzech: 'ťukat', exampleRussian: 'стучать', note: 'Мягкая «ть». Произносится как «т» + «й».', isSpecial: true, group: 'consonant' },
  { id: 33, upper: 'U', lower: 'u', ipa: '/u/', exampleCzech: 'ulice', exampleRussian: 'улица', note: 'Так же, как русская «у».', isSpecial: false, group: 'vowel' },
  { id: 34, upper: 'Ú', lower: 'ú', ipa: '/uː/', exampleCzech: 'úterý', exampleRussian: 'вторник', note: 'Долгий звук «у». Произносится как «уу».', isSpecial: true, group: 'vowel' },
  { id: 35, upper: 'Ů', lower: 'ů', ipa: '/uː/', exampleCzech: 'dům', exampleRussian: 'дом', note: 'Тот же звук, что и «ú» (долгое «у»), но пишется в корне слова.', isSpecial: true, group: 'vowel' },
  { id: 36, upper: 'V', lower: 'v', ipa: '/v/', exampleCzech: 'voda', exampleRussian: 'вода', note: 'Похоже на русскую «в». В конце слова оглушается в «ф».', isSpecial: false, group: 'consonant' },
  { id: 37, upper: 'W', lower: 'w', ipa: '/v/', exampleCzech: 'watt', exampleRussian: 'ватт', note: 'Встречается только в заимствованиях. Звучит как «в».', isSpecial: false, group: 'consonant' },
  { id: 38, upper: 'X', lower: 'x', ipa: '/ks/', exampleCzech: 'xylofon', exampleRussian: 'ксилофон', note: 'Встречается только в заимствованиях. Звучит как «кс».', isSpecial: false, group: 'consonant' },
  { id: 39, upper: 'Y', lower: 'y', ipa: '/ɪ/', exampleCzech: 'byt', exampleRussian: 'квартира', note: 'Звучит так же, как «i», но влияет на предыдущую согласную.', isSpecial: false, group: 'vowel' },
  { id: 40, upper: 'Ý', lower: 'ý', ipa: '/iː/', exampleCzech: 'obývka', exampleRussian: 'гостиная', note: 'Долгий звук, как «í». Влияет на предыдущую согласную.', isSpecial: true, group: 'vowel' },
  { id: 41, upper: 'Z', lower: 'z', ipa: '/z/', exampleCzech: 'země', exampleRussian: 'земля', note: 'Так же, как русская «з».', isSpecial: false, group: 'consonant' },
  { id: 42, upper: 'Ž', lower: 'ž', ipa: '/ʒ/', exampleCzech: 'žena', exampleRussian: 'женщина', note: 'Произносится как русская «ж». Специфическая буква.', isSpecial: true, group: 'consonant' },
];

export const alphabetGroups = {
  vowels: czechAlphabet.filter(l => l.group === 'vowel'),
  consonants: czechAlphabet.filter(l => l.group === 'consonant'),
  special: czechAlphabet.filter(l => l.isSpecial),
};

export const russianComparison = [
  { czech: 'A, Á', russian: 'А', note: 'Á — долгая версия А' },
  { czech: 'B', russian: 'Б', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'C', russian: 'Ц', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'Č', russian: 'Ч', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'D', russian: 'Д', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'E, É', russian: 'Э', note: 'É — долгая версия Э. Не путайте с Е!' },
  { czech: 'Ě', russian: '—', note: 'Нет аналога. Звучит «йэ»' },
  { czech: 'G', russian: 'Г', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'H', russian: 'Г', note: 'Чешская H — придыхательная, мягче Г' },
  { czech: 'Ch', russian: 'Х', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'I, Í', russian: 'И', note: 'Í — долгая версия И' },
  { czech: 'J', russian: 'Й', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'N', russian: 'Н', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'O, Ó', russian: 'О', note: 'Ó — долгая версия О' },
  { czech: 'P', russian: 'П', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'R, Ř', russian: 'Р', note: 'Ř — раскатистая «рж», уникальный звук!' },
  { czech: 'S', russian: 'С', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'Š', russian: 'Ш', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'T', russian: 'Т', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'U, Ú, Ů', russian: 'У', note: 'Ú и Ů — долгая версия У. Одинаковый звук, разное написание' },
  { czech: 'V', russian: 'В', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'Y, Ý', russian: 'Ы', note: 'Звучит как «И», но влияет на согласные' },
  { czech: 'Z', russian: 'З', note: 'Разные буквы, одинаковое звучание' },
  { czech: 'Ž', russian: 'Ж', note: 'Разные буквы, одинаковое звучание' },
];
