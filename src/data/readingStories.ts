export interface StoryQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ReadingStory {
  id: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  title: string;
  titleRussian: string;
  text: string;
  textRussian: string;
  vocabulary: { czech: string; russian: string }[];
  questions: StoryQuestion[];
}

export const readingStories: ReadingStory[] = [
  // ===================== A1 STORIES =====================

  // --- Story 1: Jmenuji se Anna ---
  {
    id: 'a1-01',
    level: 'A1',
    title: 'Jmenuji se Anna',
    titleRussian: 'Меня зовут Анна',
    text: `Ahoj! Jmenuji se Anna. Je mi dvacet pět let. Bydlím v Brně. Brno je krásné město. Studuji na univerzitě, studuji český jazyk. Mám ráda čtení, hudbu a cestování. Ve volném čase chodím do kina a ráda vařím.

Moje rodina žije v Ostravě. Máma se jmenuje Marie a táta se jmenuje Petr. Mám bratra Tomáše. Je mu třicet let a pracuje v bance. Každý víkend volám mamince a tatínkovi. Jejich telefonní číslo mám v mobilu.

Ráda piju čaj a kávu. Ráno piju čaj s mlékem. Odpoledne piju kávu. Můj oblíbený jídlo jepizza a salát. Večer sleduji televizi nebo čtu knihu.`,
    textRussian: `Привет! Меня зовут Анна. Мне двадцать пять лет. Я живу в Брно. Брно — красивый город. Я учусь в университете, изучаю чешский язык. Я люблю чтение, музыку и путешествия. В свободное время хожу в кино и люблю готовить.

Моя семья живёт в Остраве. Маму зовут Мария, а папу — Петр. У меня есть брат Томаш. Ему тридцать лет, и он работает в банке. Каждые выходные я звоню маме и папе. Их номер телефона есть в моём мобильном.

Я люблю пить чай и кофе. Утром пью чай с молоком. Днём пью кофе. Моя любимая еда — пицца и салат. Вечером смотрю телевизор или читаю книгу.`,
    vocabulary: [
      { czech: 'jmenovat se', russian: 'называться, зваться' },
      { czech: 'bydlet', russian: 'жить (проживать)' },
      { czech: 'město', russian: 'город' },
      { czech: 'studovat', russian: 'учиться, изучать' },
      { czech: 'volný čas', russian: 'свободное время' },
      { czech: 'vařit', russian: 'готовить' },
      { czech: 'oblíbený', russian: 'любимый' },
    ],
    questions: [
      {
        id: 'a1-01-q1',
        question: 'Сколько лет Анне?',
        options: ['20 лет', '25 лет', '30 лет', '22 года'],
        correctAnswer: 1,
      },
      {
        id: 'a1-01-q2',
        question: 'Где живёт семья Анны?',
        options: ['В Брно', 'В Праге', 'В Остраве', 'В Оломоуце'],
        correctAnswer: 2,
      },
      {
        id: 'a1-01-q3',
        question: 'Что Анна пьёт утром?',
        options: ['Кофе', 'Воду', 'Чай с молоком', 'Сок'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 2: Moje rodina ---
  {
    id: 'a1-02',
    level: 'A1',
    title: 'Moje rodina',
    titleRussian: 'Моя семья',
    text: `Moje rodina není velká, ale je velmi milá. Jsme čtyři — máma, táta, sestra a já.

Moje maminka se jmenuje Eva. Je jí čtyřicet dva let. Pracuje jako učitelka v základní škole. Má ráda květiny a hudbu. Víkendy tráví na zahradě.

Můj táta se jmenuje Pavel. Je mu čtyřicet pět let. Je inženýr. Rád sportuje — hraje fotbal a jezdí na kole. V létě plave v řece.

Moje sestra se jmenuje Kateřina, ale říkáme jí Katka. Je jí osmnáct let. Studuje na gymnáziu. Má ráda tanec a malování. Je velmi šikovná.

Máme doma také psa a kočku. Pes se jmenuje Rex a kočka se jmenuje Míša. Rex je velký a černý. Míša je malá a bílá. Hrají si spolu každý den.`,
    textRussian: `Моя семья небольшая, но очень милая. Нас четверо — мама, папа, сестра и я.

Мою маму зовут Ева. Ей сорок два года. Она работает учительницей в начальной школе. Она любит цветы и музыку. Выходные проводит в саду.

Моего папу зовут Павел. Ему сорок пять лет. Он инженер. Он любит спорт — играет в футбол и ездит на велосипеде. Летом плавает в реке.

Мою сестру зовут Катержина, но мы зовём её Катка. Ей восемнадцать лет. Она учится в гимназии. Она любит танцы и рисование. Она очень способная.

У нас дома также есть собака и кошка. Собаку зовут Рекс, а кошку — Миша. Рекс большой и чёрный. Миша маленькая и белая. Они играют вместе каждый день.`,
    vocabulary: [
      { czech: 'rodina', russian: 'семья' },
      { czech: 'učitelka', russian: 'учительница' },
      { czech: 'základní škola', russian: 'начальная школа' },
      { czech: 'inženýr', russian: 'инженер' },
      { czech: 'zahrada', russian: 'сад' },
      { czech: 'gymnázium', russian: 'гимназия' },
      { czech: 'šikovný', russian: 'способный, ловкий' },
    ],
    questions: [
      {
        id: 'a1-02-q1',
        question: 'Сколько человек в семье?',
        options: ['Трое', 'Четверо', 'Пятеро', 'Шестеро'],
        correctAnswer: 1,
      },
      {
        id: 'a1-02-q2',
        question: 'Кем работает мама?',
        options: ['Врачом', 'Инженером', 'Учительницей', 'Программистом'],
        correctAnswer: 2,
      },
      {
        id: 'a1-02-q3',
        question: 'Как зовут собаку?',
        options: ['Míša', 'Rex', 'Bureš', 'Petr'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 3: V obchodě ---
  {
    id: 'a1-03',
    level: 'A1',
    title: 'V obchodě',
    titleRussian: 'В магазине',
    text: `Je sobota ráno. Já a můj manžel jedeme do obchodu. Potřebujeme nakoupit jídlo na celý týden. Parkujeme auto před supermarketem a jdeme dovnitř.

Nejdřív bereme vozík a jdeme k sekci s ovocem a zeleninou. Bereme jablka, banány, rajčata a okurky. Potom jdeme k pečivu. Bereme chléb a rohlíky. Můj manžel si vezme croissanty, má je velmi rád.

V sekci s mléčnými výrobky bereme mléko, sýr a jogurty. Také potřebujeme máslo a vejce. V mrazáku bereme mraženou pizzu na dnešní večer.

Nakonec jdeme k pokladně. Prodavačka všechno zabalí. Platíme kartou. Celkem to stojí osm set padesát korun. Vracíme se domů a skládáme nákup do lednice a skříně. Večer máme z mražené pizzy výbornou večeři.`,
    textRussian: `Сегодня суббота утром. Мы с мужем едем в магазин. Нам нужно купить еду на всю неделю. Паркуем машину перед супермаркетом и идём внутрь.

Сначала берём тележку и идём к секции с фруктами и овощами. Берём яблоки, бананы, помидоры и огурцы. Потом идём к хлебобулочным изделиям. Берём хлеб и булочки. Мой муж берёт круассаны, он их очень любит.

В секции с молочными продуктами берём молоко, сыр и йогурты. Также нам нужно масло и яйца. В морозилке берём замороженную пиццу на сегодняшний вечер.

Наконец идём к кассе. Продавщица всё упаковывает. Платим картой. Всего это стоит восемьсот пятьдесят крон. Возвращаемся домой и убираем покупки в холодильник и шкаф. Вечером у нас отличная ужин из замороженной пиццы.`,
    vocabulary: [
      { czech: 'obchod', russian: 'магазин' },
      { czech: 'nakupovat', russian: 'покупать' },
      { czech: 'zelenina', russian: 'овощи' },
      { czech: 'pečivo', russian: 'хлебобулочные изделия' },
      { czech: 'rohlík', russian: 'булочка' },
      { czech: 'mléčný výrobek', russian: 'молочный продукт' },
      { czech: 'pokladna', russian: 'касса' },
    ],
    questions: [
      {
        id: 'a1-03-q1',
        question: 'Какой сегодня день недели?',
        options: ['Понедельник', 'Среда', 'Суббота', 'Воскресенье'],
        correctAnswer: 2,
      },
      {
        id: 'a1-03-q2',
        question: 'Что они покупают в секции с фруктами и овощами?',
        options: ['Хлеб и сыр', 'Яблоки и помидоры', 'Молоко и масло', 'Пиццу и круассаны'],
        correctAnswer: 1,
      },
      {
        id: 'a1-03-q3',
        question: 'Сколько стоит покупка?',
        options: ['500 крон', '650 крон', '850 крон', '1000 крон'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 4: Můj pes ---
  {
    id: 'a1-04',
    level: 'A1',
    title: 'Můj pes',
    titleRussian: 'Моя собака',
    text: `Mám doma psa. Jmenuje se Bureš. Je to německý ovčák. Je mu čtyři roky. Bureš je velký pes se zlatou srstí a hnědýma očima.

Bureš má rád dlouhé procházky. Každé ráno s ním chodím do parku. V parku běhá, hraje si s míčem a plave v jezeře. Rád se setkává s ostatními psy. Má psí kamarády — labradora Maxe a jezevčíka Filípka.

Krmím Bureše dvakrát denně. Ráno dostane granule a večer dostane maso s rýží. Jí velmi rád. Jako pamlsek dostává sušené kosti. Vždy, když slyší slovo „pamlsek", začne radostně válat ocasem.

Bureš umí několik triků. Umí sedět, ležet, podávat tlapku a přinášet míč. Náš oblíbený trik je „mrtvý pes" — Bureš leží na zádech a nehne se. Je to velmi chytrý a láskyplný pes.`,
    textRussian: `У меня дома есть собака. Его зовут Буреш. Это немецкая овчарка. Ему четыре года. Буреш — большая собака с золотистой шерстью и карими глазами.

Буреш любит долгие прогулки. Каждое утро я хожу с ним в парк. В парке он бегает, играет с мячиком и плавает в озере. Он любит встречаться с другими собаками. У него есть собачьи друзья — лабрадор Макс и такса Филипек.

Я кормлю Буреша дважды в день. Утром он получает сухой корм, а вечером — мясо с рисом. Он ест с большим удовольствием. В качестве лакомства получает сушёные косточки. Всегда, когда он слышит слово «лакомство», начинает радостно вилять хвостом.

Буреш умеет несколько трюков. Он умеет сидеть, лежать, подавать лапу и приносить мячик. Наш любимый трюк — «мёртвая собака» — Буреш ложится на спину и не шевелится. Он очень умная и ласковая собака.`,
    vocabulary: [
      { czech: 'německý ovčák', russian: 'немецкая овчарка' },
      { czech: 'procházka', russian: 'прогулка' },
      { czech: 'park', russian: 'парк' },
      { czech: 'míč', russian: 'мяч' },
      { czech: 'krmit', russian: 'кормить' },
      { czech: 'granule', russian: 'сухой корм' },
      { czech: 'pamlsek', russian: 'лакомство' },
    ],
    questions: [
      {
        id: 'a1-04-q1',
        question: 'Какой породы собака Буреш?',
        options: ['Лабрадор', 'Такса', 'Немецкая овчарка', 'Пудель'],
        correctAnswer: 2,
      },
      {
        id: 'a1-04-q2',
        question: 'Сколько раз в день кормят Буреша?',
        options: ['Один раз', 'Два раза', 'Три раза', 'Четыре раза'],
        correctAnswer: 1,
      },
      {
        id: 'a1-04-q3',
        question: 'Что делает Буреш, когда слышит слово «pamlsek»?',
        options: ['Лает', 'Бежит', 'Виляет хвостом', 'Прячется'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 5: Doprava ---
  {
    id: 'a1-05',
    level: 'A1',
    title: 'Doprava',
    titleRussian: 'Транспорт',
    text: `Bydlím na okraji města a pracuji v centru. Každý den musím dojíždět do práce. Cesta trvá asi třicet minut.

Ráno vstávám v šest hodin. V šest třicet snídám a v sedm hodin odcházím z domu. Nejdřív jdu na autobusovou zastávku, která je asi pět minut od mého domu. Autobus číslo dvacet dva jede každých deset minut.

V autobuse jedu sedm zastávek. Vystupuji u nádraží. Tam přestupuji na tramvaj číslo jedna. Tramvaj jede přes centrum města. Vystupuji na zastávce „Náměstí Svobody". Odtud je to jen tři minuty chůze do mé kanceláře.

Odpoledne jedu zpět stejnou cestou. Autobusy a tramvaje jezdí od pěti do dvanácti hodin. Jízdenku kupuji v automatu nebo v mobilní aplikaci. Měsíční jízdenka stojí šest set padesát korun. Mám také bicykl, ale do práce nejezdím, protože je to moc daleko.`,
    textRussian: `Я живу на окраине города и работаю в центре. Каждый день мне нужно ездить на работу. Дорога занимает около тридцати минут.

Утром встаю в шесть часов. В шесть тридцать завтракаю и в семь часов выхожу из дома. Сначала иду к автобусной остановке, которая находится примерно в пяти минутах от моего дома. Автобус номер двадцать два ходит каждые десять минут.

В автобусе еду семь остановок. Выхожу у вокзала. Там пересаживаюсь на трамвай номер один. Трамвай едет через центр города. Выхожу на остановке «Площадь Свободы». Оттуда всего три минуты пешком до моего офиса.

Днём еду обратно тем же путём. Автобусы и трамваи ходят с пяти до двенадцати часов. Билет покупаю в автомате или в мобильном приложении. Месячный проездной стоит шестьсот пятьдесят крон. У меня также есть велосипед, но на работу я не езжу, потому что слишком далеко.`,
    vocabulary: [
      { czech: 'doprava', russian: 'транспорт' },
      { czech: 'dojíždět', russian: 'ездить (на работу)' },
      { czech: 'zastávka', russian: 'остановка' },
      { czech: 'přestupovat', russian: 'пересаживаться' },
      { czech: 'tramvaj', russian: 'трамвай' },
      { czech: 'jízdenka', russian: 'билет' },
      { czech: 'bicykl', russian: 'велосипед' },
    ],
    questions: [
      {
        id: 'a1-05-q1',
        question: 'Сколько минут занимает дорога на работу?',
        options: ['15 минут', '20 минут', '30 минут', '45 минут'],
        correctAnswer: 2,
      },
      {
        id: 'a1-05-q2',
        question: 'На какой трамвай пересаживается автор?',
        options: ['На трамвай № 2', 'На трамвай № 1', 'На трамвай № 22', 'На трамвай № 10'],
        correctAnswer: 1,
      },
      {
        id: 'a1-05-q3',
        question: 'Почему автор не ездит на велосипеде на работу?',
        options: ['Плохая погода', 'Нет велодорожки', 'Слишком далеко', 'Нет где оставить'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 6: V restauraci ---
  {
    id: 'a1-06',
    level: 'A1',
    title: 'V restauraci',
    titleRussian: 'В ресторане',
    text: `V pátek večer jdeme s přáteli do restaurace. Restaurace se jmenuje „U Modré kachničky" a je v centru Prahy. Je to velmi oblíbená česká restaurace.

Obsluha nás přivítá a ukáže nám stůl u okna. Dostáváme jídelní lístek. Já si vybírám tradiční českou polévku — bramboračku. Jako hlavní jídlo si dávám svíčkovou s knedlíkem. Můj kamarád Martin si dává vepřové koleno se zelím. Naše kamarádka Lenka si objednává smažený sýr s bramborovým salátem.

K jídlu pijeme pivo. V Česku je pivo velmi dobré a levné. Lenka pije bílé víno a Martin pije nealkoholické pivo.

Po jídle si dáváme dezert — palačinky se zmrzlinou. Obsluha přináší účet. Platíme hotově. Celkem platíme tisíc dvě stě korun. Dáváme obsluze spropitné — deset procent. Jídlo bylo výborné!`,
    textRussian: `В пятницу вечером мы с друзьями идём в ресторан. Ресторан называется «У Синей уточки» и находится в центре Праги. Это очень популярный чешский ресторан.

Обслуживающий персонал приветствует нас и показывает столик у окна. Мы получаем меню. Я выбираю традиционный чешский суп — картофельный суп. В качестве главного блюда я беру гуляш из говядины с кнедликом. Мой друг Мартин берёт свиную рульку с капустой. Наша подруга Ленка заказывает жареный сыр с картофельным салатом.

К еде мы пьём пиво. В Чехии пиво очень вкусное и недорогое. Ленка пьёт белое вино, а Мартин пьёт безалкогольное пиво.

После еды мы берём десерт — блинчики с мороженым. Официант приносит счёт. Мы платим наличными. Всего мы платим тысячу двести крон. Оставляем чаевые — десять процентов. Еда была отличной!`,
    vocabulary: [
      { czech: 'restaurace', russian: 'ресторан' },
      { czech: 'obsluha', russian: 'обслуживающий персонал, официант' },
      { czech: 'jídelní lístek', russian: 'меню' },
      { czech: 'polévka', russian: 'суп' },
      { czech: 'hlavní jídlo', russian: 'главное блюдо' },
      { czech: 'dezert', russian: 'десерт' },
      { czech: 'spropitné', russian: 'чаевые' },
    ],
    questions: [
      {
        id: 'a1-06-q1',
        question: 'Как называется ресторан?',
        options: ['U Zlaté hvězdy', 'U Modré kachničky', 'U Červeného lva', 'U Bílého koně'],
        correctAnswer: 1,
      },
      {
        id: 'a1-06-q2',
        question: 'Что заказывает Ленка в качестве главного блюда?',
        options: ['Свиная рулька', 'Гуляш с кнедликом', 'Жареный сыр', 'Картофельный суп'],
        correctAnswer: 2,
      },
      {
        id: 'a1-06-q3',
        question: 'Сколько процентов чаевых они оставляют?',
        options: ['5%', '10%', '15%', '20%'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 7: Můj den ---
  {
    id: 'a1-07',
    level: 'A1',
    title: 'Můj den',
    titleRussian: 'Мой день',
    text: `Rád vám povím o svém obyčejném dni. Vstávám v pondělí až pátek v šest hodin ráno. Nejprve si půjčím sprchu a obléknu se. Potom dělám ranní cvičení — deset minut. Snídám v kuchyni. Jím chléb se sýrem a piju čaj.

V sedm třicet odcházím z domu. Do práce jedu autobusem. Pracuji v kanceláři od osmi do šestnácti hodin. V práci mám přestávku na oběd od dvanácti do třinácti hodin. Na oběd jdu do jídelny. Obědvám polévku a maso s přílohou.

Po práci jedu domů. V sedmnáct hodin jsem doma. Nejdřív si odpočinu a podívám se na zprávy v televizi. V šest hodin vařím večeři. Večeřím v sedm hodin. Po večeři čtu knihu nebo pracuji na počítači.

Jdu spát v deset hodin. Před spaním si čistím zuby a čtu ještě dvacet minut. V pátek večer nechodím spát tak brzy — někdy sleduji film nebo se setkávám s přáteli.`,
    textRussian: `Рад рассказать вам о своём обычном дне. С понедельника по пятницу встаю в шесть часов утра. Сначала принимаю душ и одеваюсь. Потом делаю утреннюю гимнастику — десять минут. Завтракаю на кухне. Ем хлеб с сыром и пью чай.

В семь тридцать выхожу из дома. На работу еду на автобусе. Работаю в офисе с восьми до шестнадцати часов. На работе у меня перерыв на обед с двенадцати до тринадцати часов. На обед хожу в столовую. Обедаю супом и мясом с гарниром.

После работы еду домой. В семнадцать часов я дома. Сначала отдыхаю и смотрю новости по телевизору. В шесть часов готовлю ужин. Ужинаю в семь часов. После ужина читаю книгу или работаю за компьютером.

Ложусь спать в десять часов. Перед сном чистлю зубы и ещё двадцать минут читаю. В пятницу вечером ложусь спать не так рано — иногда смотрю фильм или встречаюсь с друзьями.`,
    vocabulary: [
      { czech: 'vstávat', russian: 'вставать' },
      { czech: 'oblékat se', russian: 'одеваться' },
      { czech: 'snídat', russian: 'завтракать' },
      { czech: 'přestávka', russian: 'перерыв' },
      { czech: 'oběd', russian: 'обед' },
      { czech: 'odpočívat', russian: 'отдыхать' },
      { czech: 'chodit spát', russian: 'ложиться спать' },
    ],
    questions: [
      {
        id: 'a1-07-q1',
        question: 'Во сколько автор встаёт в будние дни?',
        options: ['В 5:00', 'В 6:00', 'В 6:30', 'В 7:00'],
        correctAnswer: 1,
      },
      {
        id: 'a1-07-q2',
        question: 'Где автор обедает?',
        options: ['Дома', 'В ресторане', 'В столовой', 'В кафе'],
        correctAnswer: 2,
      },
      {
        id: 'a1-07-q3',
        question: 'Сколько минут автор читает перед сном?',
        options: ['10 минут', '20 минут', '30 минут', '40 минут'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 8: Počasí ---
  {
    id: 'a1-08',
    level: 'A1',
    title: 'Počasí',
    titleRussian: 'Погода',
    text: `V České republice jsou čtyři roční období — jaro, léto, podzim a zima. Každé období má své počasí.

Na jaře je počasí měnivé. Ráno je často chladno, ale odpoledne je teplo. Prší a fouká vítr. Stromy a květiny začínají kvést. Ptáci zpívají. Lidé chodí na procházky do přírody.

V létě je velmi teplo. Teploty jsou mezi dvaceti pěti a třiceti stupni. Slunce svítí a obloha je modrá. Lidé jezdí na koupaliště, k vodě a do zahraničí. Na léto mám rád moře a pláž. Děti mají prázdniny.

Na podzim je chladněji. Listy na stromech se mění barvu — jsou žluté, červené a hnědé. Padají ze stromů. Často prší a je zataženo. Lidé nosí bundy a deštníky.

V zimě je zima a sníh. Teploty jsou pod nulou. Padá sníh a je mlha. Děti si staví sněhuláka a jezdí na saních. Vánoce jsou v prosinci — to je nejkrásnější čas v roce.`,
    textRussian: `В Чешской Республике четыре времени года — весна, лето, осень и зима. Каждое время года имеет свою погоду.

Весной погода переменчивая. Утром часто прохладно, но днём тепло. Идёт дождь и дует ветер. Деревья и цветы начинают цвести. Птицы поют. Люди ходят на прогулки на природу.

Летом очень тепло. Температуры от двадцати пяти до тридцати градусов. Светит солнце, небо голубое. Люди ездят на купальни, к воде и за границу. На лето я люблю море и пляж. У детей каникулы.

Осенью прохладнее. Листья на деревьях меняют цвет — они жёлтые, красные и коричневые. Они падают с деревьев. Часто идёт дождь и пасмурно. Люди носят куртки и зонтики.

Зимой холодно и идёт снег. Температуры ниже нуля. Падает снег, бывает туман. Дети строят снеговика и катаются на санках. Рождество в декабре — это самое красивое время в году.`,
    vocabulary: [
      { czech: 'roční období', russian: 'время года' },
      { czech: 'jaro', russian: 'весна' },
      { czech: 'počasí', russian: 'погода' },
      { czech: 'teplota', russian: 'температура' },
      { czech: 'pršet', russian: 'идти (о дожде)' },
      { czech: 'listí', russian: 'листва' },
      { czech: 'sníh', russian: 'снег' },
    ],
    questions: [
      {
        id: 'a1-08-q1',
        question: 'Сколько времён года в Чехии?',
        options: ['Два', 'Три', 'Четыре', 'Пять'],
        correctAnswer: 2,
      },
      {
        id: 'a1-08-q2',
        question: 'Какая температура летом?',
        options: ['10–15 градусов', '15–20 градусов', '25–30 градусов', '30–35 градусов'],
        correctAnswer: 2,
      },
      {
        id: 'a1-08-q3',
        question: 'Что дети делают зимой?',
        options: ['Купаются', 'Строят снеговика', 'Едут на море', 'Собирают листья'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 9: Na poště ---
  {
    id: 'a1-09',
    level: 'A1',
    title: 'Na poště',
    titleRussian: 'На почте',
    text: `Dnes potřebuji poslat balíček kamarádovi, který žije v Německu. Moje kamarádka Jana má narozeniny a chci jí poslat dárek — české cukroví a knihu v češtině.

Jdu na poštu, která je na hlavní třídě. Je deset hodin dopoledne a na poště je fronta. Čekám asi patnáct minut. Přijdou na řadu a jdou k přepážce.

Dobrý den, říkám prodavačce. Potřebuji poslat balíček do Německa. Prosím, dejte balíček na váhu, říká prodavačka. Vážím balíček. Váží dva kilogramy.

Balíček do Německa stojí dvě stě osmdesát korun, říká prodavačka. Chci poslat balíček jako doporučený zásilku. To stojí o padesát korun víc.

Platím kartou. Dostávám stvrzenku a číslo zásilky. Můžu sledovat balíček na internetu. Jsem rád, že je dárek cestou. Doufám, že Jana bude mít radost!`,
    textRussian: `Сегодня мне нужно отправить посылку другу, который живёт в Германии. У моей подруги Яны день рождения, и я хочу отправить ей подарок — чешское печенье и книгу на чешском языке.

Я иду на почту, которая находится на главной улице. Сейчас десять часов утра, и на почте очередь. Жду около пятнадцати минут. Подходит моя очередь, и я подхожу к прилавку.

«Добрый день», — говорю продавщице. «Мне нужно отправить посылку в Германию». «Пожалуйста, поставьте посылку на весы», — говорит продавщица. Взвешиваю посылку. Она весит два килограмма.

«Посылка в Германию стоит двести восемьдесят крон», — говорит продавщица. Я хочу отправить посылку как заказное отправление. Это стоит на пятьдесят крон дороже.

Плачу картой. Получаю квитанцию и номер отправления. Я могу отслеживать посылку в интернете. Я рад, что подарок уже в пути. Надеюсь, Яна обрадуется!`,
    vocabulary: [
      { czech: 'pošta', russian: 'почта' },
      { czech: 'balíček', russian: 'посылка' },
      { czech: 'dárek', russian: 'подарок' },
      { czech: 'fronta', russian: 'очередь' },
      { czech: 'přepážka', russian: 'прилавок, окно' },
      { czech: 'vážit', russian: 'весить' },
      { czech: 'stvrzenka', russian: 'квитанция' },
    ],
    questions: [
      {
        id: 'a1-09-q1',
        question: 'Куда автор отправляет посылку?',
        options: ['В Словакию', 'В Польшу', 'В Германию', 'В Австрию'],
        correctAnswer: 2,
      },
      {
        id: 'a1-09-q2',
        question: 'Сколько весит посылка?',
        options: ['1 кг', '2 кг', '3 кг', '5 кг'],
        correctAnswer: 1,
      },
      {
        id: 'a1-09-q3',
        question: 'Как автор хочет отправить посылку?',
        options: ['Обычной бандеролью', 'Заказным отправлением', 'Экспресс-доставкой', 'Электронной посылкой'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 10: Víkend u babičky ---
  {
    id: 'a1-10',
    level: 'A1',
    title: 'Víkend u babičky',
    titleRussian: 'Выходные у бабушки',
    text: `Každý měsíc jezdím na víkend za babičkou. Babička bydlí v malé vesnici na Moravě. Její dům má velkou zahradu s ovocnými stromy.

V sobotu ráno přijíždím vlakem. Babička mě čeká na nádraží. Je velmi ráda, že vidí. Domů jdeme pěšky — je to jen deset minut.

Babička hned vaří oběd. Vaří mé oblíbené jídlo — svíčkovou. Na oběd mluvíme o rodině, o práci a o životě. Po obědě pijeme kávu a jedeme babiččin koláč.

Odpoledne pomáhám babičce v zahradě. zalévám květiny a sbírám jablka ze stromů. Babička má také zeleninovou zahradu — pěstuje rajčata, okurky a mrkev. Všichni si odnášíme čerstvou zeleninu domů.

V neděli ráno děláme snídani společně. Babička peče buchty — je to rodinný recept. Odpoledne se vracím vlakem do města. Babička mi dá balíček s koláčem a zeleninou. Už se těším na další víkend!`,
    textRussian: `Каждый месяц я езжу на выходные к бабушке. Бабушка живёт в маленькой деревне в Моравии. Её дом имеет большой сад с фруктовыми деревьями.

В субботу утром приезжаю на поезде. Бабушка ждёт меня на вокзале. Она очень рада меня видеть. Домой мы идём пешком — это всего десять минут.

Бабушка сразу же готовит обед. Она готовит моё любимое блюдо — гуляш из говядины. За обедом мы говорим о семье, о работе и о жизни. После обеда пьём кофе и едим бабушкин пирог.

Днём помогаю бабушке в саду. Поливаю цветы и собираю яблоки с деревьев. У бабушки также есть огород — она выращивает помидоры, огурцы и морковь. Все уносим свежие овощи домой.

В воскресенье утром вместе готовим завтрак. Бабушка печёт булочки — это семейный рецепт. Днём возвращаюсь на поезде в город. Бабушка даёт мне пакет с пирогом и овощами. Уже жду следующих выходных!`,
    vocabulary: [
      { czech: 'babička', russian: 'бабушка' },
      { czech: 'vesnice', russian: 'деревня' },
      { czech: 'zahrada', russian: 'сад' },
      { czech: 'koláč', russian: 'пирог' },
      { czech: 'zalévat', russian: 'поливать' },
      { czech: 'sbírat', russian: 'собирать' },
      { czech: 'pekat', russian: 'печь' },
    ],
    questions: [
      {
        id: 'a1-10-q1',
        question: 'Где живёт бабушка?',
        options: ['В городе', 'В деревне на Мораве', 'В Праге', 'В горах'],
        correctAnswer: 1,
      },
      {
        id: 'a1-10-q2',
        question: 'Как бабушка добирается до вокзала?',
        options: ['На автобусе', 'На машине', 'Идёт пешком', 'На велосипеде'],
        correctAnswer: 2,
      },
      {
        id: 'a1-10-q3',
        question: 'Что бабушка печёт в воскресенье утром?',
        options: ['Кекс', 'Булочки', 'Хлеб', 'Печенье'],
        correctAnswer: 1,
      },
    ],
  },

  // ===================== A2 STORIES =====================

  // --- Story 11: Cesta do Prahy ---
  {
    id: 'a2-01',
    level: 'A2',
    title: 'Cesta do Prahy',
    titleRussian: 'Поездка в Прагу',
    text: `Minulý víkend jsme se rozhodli jet na výlet do Prahy. Jeli jsme vlakem z Brna. Vlak odjel v devět hodin ráno z hlavního nádraží. Cesta trvala dvě a půl hodiny.

V Praze jsme vystoupili na hlavním nádraží a šli jsme do centra města. Nejprve jsme šli na Václavské náměstí. Náměstí bylo plné lidí a turistů. Vzpomněl jsem si na historii — tady se konaly důležité události v roce 1989.

Potom jsme šli přes Staroměstské náměstí. Viděli jsme Staroměstský orloj, který každou celou hodinu ukazuje apostoly. Bylo to velmi zajímavé. Další zastávkou byl Karlův most. Na mostě bylo mnoho umělců a hudebníků. Prodávali obrazy a sochy.

Na oběd jsme šli do malé české hospody. Dal jsem si guláš s knedlíkem a pivo. Jídlo bylo výborné. Odpoledne jsme se prošli Pražským hradem a zahradami.

Večer jsme jeli domů. Byli jsme unavení, ale velmi spokojení. Praha je nádherné město a já se tam chci vrátit znovu.`,
    textRussian: `В прошлые выходные мы решили поехать на экскурсию в Прагу. Мы ехали на поезде из Брно. Поезд отправился в девять часов утра с главного вокзала. Дорога заняла два с половиной часа.

В Праге мы вышли на главном вокзале и пошли в центр города. Сначала мы пошли на Вацлавскую площадь. Площадь была полна людей и туристов. Я вспомнил историю — здесь происходили важные события в 1989 году.

Потом мы прошли через Староместскую площадь. Мы увидели Староместские куранты, которые каждый полный час показывают апостолов. Это было очень интересно. Следующей остановкой был Карлов мост. На мосту было много художников и музыкантов. Они продавали картины и скульптуры.

На обед мы зашли в маленькую чешскую таверну. Я заказал гуляш с кнедликом и пиво. Еда была великолепной. Днём мы прогулялись по Пражскому замку и садам.

Вечером мы поехали домой. Мы были уставшими, но очень довольными. Прага — прекрасный город, и я хочу туда вернуться снова.`,
    vocabulary: [
      { czech: 'výlet', russian: 'экскурсия, поездка' },
      { czech: 'vzpomínat si', russian: 'вспоминать' },
      { czech: 'událost', russian: 'событие' },
      { czech: 'orloj', russian: 'куранты (астрономические часы)' },
      { czech: 'umělec', russian: 'художник' },
      { czech: 'hospoda', russian: 'таверна, пивная' },
      { czech: 'unavený', russian: 'уставший' },
      { czech: 'nádherný', russian: 'прекрасный' },
    ],
    questions: [
      {
        id: 'a2-01-q1',
        question: 'Откуда они ехали в Прагу?',
        options: ['Из Остравы', 'Из Брно', 'Из Оломоуца', 'Из Пльзени'],
        correctAnswer: 1,
      },
      {
        id: 'a2-01-q2',
        question: 'Что показывают Староместские куранты каждый полный час?',
        options: ['Циферблат', 'Апостолов', 'Короля', 'Луну и солнце'],
        correctAnswer: 1,
      },
      {
        id: 'a2-01-q3',
        question: 'Что автор заказал на обед?',
        options: ['Свиное колено', 'Гуляш с кнедликом', 'Жареный сыр', 'Филе'],
        correctAnswer: 1,
      },
      {
        id: 'a2-01-q4',
        question: 'Что автор чувствовал по возвращении домой?',
        options: ['Разочарован', 'Голоден', 'Уставший, но довольный', 'Злой'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 12: Můj nový byt ---
  {
    id: 'a2-02',
    level: 'A2',
    title: 'Můj nový byt',
    titleRussian: 'Моя новая квартира',
    text: `Před měsícem jsem se přestěhoval do nového bytu. Byt se nachází ve třetím patře moderního domu na okraji města. Má tři pokoje, kuchyň, koupelnu a malý balkon.

Obývací pokoj je největší místnost. Je tam rozkládací pohovka, konferenční stolek a velká televize. Na zdi mám obraz s krajinou. V rohu stojí knihovna plná knih. K obývacímu pokoji patří také jídelní kout s diningovým stolem a čtyřmi židlemi.

Ložnice je menší, ale velmi útulná. Mám tam velkou postel, noční stolky a lampičky. Šatní skříň je dost velká na všechno moje oblečení. Okno směřuje na východ, takže ráno do pokoje svítí slunce.

Druhý pokoj používám jako pracovnu. Stojí tam můj počítařský stůl, židle a police s dokumenty. V budoucnu bych chtěl tam dát ještě malou pohovku pro hosty.

Kuchyně je vybavená novými spotřebiči — lednicí, troubou, myčkou nádobí a mikrovlnkou. Koupelna má vanu, sprchu a pračku. Balkon je malý, ale na jaře a v létě tam rád sedím s kávou.`,
    textRussian: `Месяц назад я переехал в новую квартиру. Квартира находится на третьем этаже современного дома на окраине города. В ней три комнаты, кухня, ванная и небольшой балкон.

Гостиная — самая большая комната. Там раскладной диван, журнальный столик и большой телевизор. На стене у меня картина с пейзажем. В углу стоит книжный шкаф, полный книг. К гостиной также относится обеденный уголок с обеденным столом и четырьмя стульями.

Спальня меньше, но очень уютная. Там большая кровать, прикроватные тумбочки и лампочки. Шкаф для одежды достаточно большой для всей моей одежды. Окно выходит на восток, поэтому утром в комнату светит солнце.

Вторую комнату я использую как кабинет. Там стоит мой компьютерный стол, стул и полки с документами. В будущем я хотел бы поставить туда ещё маленький диван для гостей.

Кухня оборудована новой техникой — холодильником, духовкой, посудомоечной машиной и микроволновкой. В ванной есть ванна, душ и стиральная машина. Балкон небольшой, но весной и летом я люблю там сидеть с кофе.`,
    vocabulary: [
      { czech: 'přestěhovat se', russian: 'переехать' },
      { czech: 'obývací pokoj', russian: 'гостиная' },
      { czech: 'pohovka', russian: 'диван' },
      { czech: 'pracovna', russian: 'кабинет' },
      { czech: 'útulný', russian: 'уютный' },
      { czech: 'směřovat', russian: 'выходить (окном), быть обращённым' },
      { czech: 'spotřebič', russian: 'бытовой прибор' },
      { czech: 'pračka', russian: 'стиральная машина' },
    ],
    questions: [
      {
        id: 'a2-02-q1',
        question: 'На каком этаже находится квартира?',
        options: ['На первом', 'На втором', 'На третьем', 'На четвёртом'],
        correctAnswer: 2,
      },
      {
        id: 'a2-02-q2',
        question: 'Какую комнату автор использует как кабинет?',
        options: ['Первую', 'Вторую', 'Спальню', 'Кухню'],
        correctAnswer: 1,
      },
      {
        id: 'a2-02-q3',
        question: 'В какую сторону выходит окно спальни?',
        options: ['На запад', 'На север', 'На юг', 'На восток'],
        correctAnswer: 3,
      },
      {
        id: 'a2-02-q4',
        question: 'Что автор хотел бы добавить в кабинет в будущем?',
        options: ['Шкаф', 'Маленький диван', 'Телевизор', 'Книжный шкаф'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 13: U lékaře ---
  {
    id: 'a2-03',
    level: 'A2',
    title: 'U lékaře',
    titleRussian: 'У врача',
    text: `Minulý týden jsem onemocněl. V pondělí ráno jsem se probudil s vysokou horečkou, bolela mě hlava a měl jsem bolesti v krku. Nemohl jsem vstát z postele. Volal jsem do práce a řekl jsem, že nemůžu přijít.

Můj spolubydlící šel do lékárny a koupil mi léky — prášky na bolest a kapky do nosu. Další den se mi ale nelepšilo, a tak jsem se rozhodl jít k lékaři.

Objednal jsem se k doktoru Novákovi. V čekárně bylo dost pacientů, čekal jsem asi čtyřicet minut. Konečně přišel na řadu. Doktor se mě zeptal na mé příznaky, prohlédl mě a změřil mi teplotu. Měl jsem třicet osm a pět.

Doktor řekl, že mám chřipku. Napsal mi předpis na antibiotika a léky na snížení horečky. Řekl, abych zůstal doma alespoň tři dny, hodně odpočíval a pil hodně tekutin.

Koupil jsem léky v lékárně. Doma jsem ležel v posteli a četl si knihu. Po třech dnech se mi začalo zlepšovat. Po týdnu jsem byl úplně zdravý a vrátil jsem se do práce.`,
    textRussian: `На прошлой неделе я заболел. В понедельник утром я проснулся с высокой температурой, у меня болела голова и болело горло. Я не мог встать с постели. Позвонил на работу и сказал, что не смогу прийти.

Мой сосед по квартире сходил в аптеку и купил мне лекарства — таблетки от боли и капли для носа. На следующий день мне не стало лучше, и я решил пойти к врачу.

Я записался к доктору Новаку. В приёмной было много пациентов, я ждал около сорока минут. Наконец подошла моя очередь. Доктор спросил меня о симптомах, осмотрел меня и измерил температуру. У меня было тридцать восемь и пять.

Доктор сказал, что у меня грипп. Он выписал мне рецепт на антибиотики и лекарства для снижения температуры. Он сказал, чтобы я оставался дома минимум три дня, много отдыхал и пил много жидкости.

Я купил лекарства в аптеке. Дома лежал в постели и читал книгу. Через три дня мне стало лучше. Через неделю я был полностью здоров и вернулся на работу.`,
    vocabulary: [
      { czech: 'onemocnět', russian: 'заболеть' },
      { czech: 'horečka', russian: 'температура, лихорадка' },
      { czech: 'lékárna', russian: 'аптека' },
      { czech: 'lékař', russian: 'врач' },
      { czech: 'příznak', russian: 'симптом' },
      { czech: 'chřipka', russian: 'грипп' },
      { czech: 'antibiotika', russian: 'антибиотики' },
      { czech: 'předpis', russian: 'рецепт' },
    ],
    questions: [
      {
        id: 'a2-03-q1',
        question: 'Какие симптомы были у автора?',
        options: ['Кашель и насморк', 'Температура, головная боль и боль в горле', 'Боль в спине', 'Боль в животе'],
        correctAnswer: 1,
      },
      {
        id: 'a2-03-q2',
        question: 'Сколько минут автор ждал у врача?',
        options: ['20 минут', '30 минут', '40 минут', '60 минут'],
        correctAnswer: 2,
      },
      {
        id: 'a2-03-q3',
        question: 'Какой диагноз поставил доктор?',
        options: ['Ангина', 'Простуда', 'Грипп', 'Бронхит'],
        correctAnswer: 2,
      },
      {
        id: 'a2-03-q4',
        question: 'Как долго автор болел в общей сложности?',
        options: ['3 дня', '5 дней', 'Неделю', 'Две недели'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 14: Práce a škola ---
  {
    id: 'a2-04',
    level: 'A2',
    title: 'Práce a škola',
    titleRussian: 'Работа и учёба',
    text: `Jmenuji se Lukáš a jsem dvacet tři let. Momentálně kombinuji práci a studium na univerzitě. Není to snadné, ale doufám, že se to vyplatí.

Pracuji jako asistent v malé IT firmě. Pracuji částečný úvazek — dvacet hodin týdně. Chodím do práce od pondělí do středy. Můj plat není vysoký, ale stačí na platbu za byt a jídlo. V práci dělám databáze a pomáhám kolegům s technickými problémy.

Na univerzitě studuji informatiku. Je to můj třetí ročník. Vyučuje se tam programování, matematika a počítačové sítě. Přednášky mám čtvrtky a pátky. Zbylé dny trávím učením doma nebo v knihovně.

Nejtěžší je najít čas na odpočinek a koníčky. Někdy jsem tak zaneprázdněný, že nemám čas setkat se s přáteli. V létě mám prázdniny a chci odjet na dovolenou. Taky bych chtěl najít lepší práci po ukončení studia.

Moje maminka říká, že jsem moc pracovitý. Můj otec mi pomáhá finančně. Jsem jim vděčný za jejich podporu.`,
    textRussian: `Меня зовут Лукаш, мне двадцать три года. В настоящее время я совмещаю работу и учёбу в университете. Это нелегко, но я надеюсь, что это окупится.

Я работаю ассистентом в небольшой IT-фирме. Работаю неполный рабочий день — двадцать часов в неделю. Хожу на работу с понедельника по среду. Моя зарплата небольшая, но её хватает на оплату квартиры и еду. На работе я занимаюсь базами данных и помогаю коллегам с техническими проблемами.

В университете я изучаю информатику. Это мой третий курс. Там преподаются программирование, математика и компьютерные сети. Лекции у меня по четвергам и пятницам. Остальные дни провожу за учёбой дома или в библиотеке.

Самое сложное — найти время для отдыха и хобби. Иногда я так занят, что нет времени встретиться с друзьями. Летом у меня каникулы, и я хочу поехать в отпуск. Также я хотел бы найти лучшую работу после окончания учёбы.

Моя мама говорит, что я слишком трудолюбивый. Мой отец помогает мне финансово. Я благодарен им за их поддержку.`,
    vocabulary: [
      { czech: 'kombinovat', russian: 'совмещать' },
      { czech: 'částečný úvazek', russian: 'неполный рабочий день' },
      { czech: 'informatika', russian: 'информатика' },
      { czech: 'přednáška', russian: 'лекция' },
      { czech: 'zaneprázdněný', russian: 'занятой' },
      { czech: 'pracovitý', russian: 'трудолюбивый' },
      { czech: 'vděčný', russian: 'благодарный' },
      { czech: 'ukončení', russian: 'окончание' },
    ],
    questions: [
      {
        id: 'a2-04-q1',
        question: 'Сколько часов в неделю работает Лукаш?',
        options: ['10 часов', '15 часов', '20 часов', '30 часов'],
        correctAnswer: 2,
      },
      {
        id: 'a2-04-q2',
        question: 'На каком курсе учится Лукаш?',
        options: ['На первом', 'На втором', 'На третьем', 'На четвёртом'],
        correctAnswer: 2,
      },
      {
        id: 'a2-04-q3',
        question: 'В какие дни у Лукаша лекции?',
        options: ['Понедельник и вторник', 'Среда и четверг', 'Четверг и пятница', 'Пятница и суббота'],
        correctAnswer: 2,
      },
      {
        id: 'a2-04-q4',
        question: 'Кто помогает Лукашу финансово?',
        options: ['Мама', 'Отец', 'Дедушка', 'Друг'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 15: Dovolená na horách ---
  {
    id: 'a2-05',
    level: 'A2',
    title: 'Dovolená na horách',
    titleRussian: 'Отпуск в горах',
    text: `V únoru jsme s rodinou jeli na dovolenou do hor. Jeli jsme do Krkonoš, nejvyšších hor v Česku. Ubytovali jsme se v malém hotelu ve městě Špindlerův Mlýn.

Hlavním cílem naší dovolené bylo lyžování. V pondělí ráno jsme si půjčili lyže a vybavení v půjčovně. Ceny byly docela vysoké, ale vybavení bylo velmi dobré. Poprvé jsem lyžoval před třemi lety a od té doby se zlepšuji.

Na sjezdovce bylo hodně lidí, ale my jsme si to užili. Největší sjezdovka měla délku tři kilometry a vedla až na vrchol hory. Můj otec je velmi dobrý lyžař, jezdí velmi rychle. Moje sestra teprve začíná, takže jsme jeli pomalu.

Odpoledne jsme odpočívali v hotelu. Pili jsme horký čaj a jedli štrúdl. Večer jsme hráli karty a hráli jsme deskové hry.

Jednoho dne jsme udělali výšlap na Sněžku, nejvyšší horu Česka. Výstup trval čtyři hodiny. Na vrcholu bylo krásné počasí a výhled na celé Krkonoše byl úžasný. Byla to naše nejlepší dovolená!`,
    textRussian: `В феврале мы с семьёй поехали в отпуск в горы. Мы поехали в Крконоше, самые высокие горы в Чехии. Мы остановились в маленьком отеле в городе Шпиндлерув Млин.

Главной целью нашего отпуска было катание на лыжах. В понедельник утром мы взяли лыжи и снаряжение в прокате. Цены были довольно высокими, но снаряжение было очень хорошим. Впервые я катался на лыжах три года назад, и с тех пор улучшаюсь.

На склоне было много людей, но мы отлично провели время. Самый большой склон имел длину три километра и вёл до вершины горы. Мой отец — очень хороший лыжник, он ездит очень быстро. Моя сестра только начала, поэтому мы ехали медленно.

Днём мы отдыхали в отеле. Пили горячий чай и ели штрудель. Вечером играли в карты и настольные игры.

Однажды мы совершили восхождение на Снежку, самую высокую гору Чехии. Подъём занял четыре часа. На вершине была прекрасная погода, и вид на весь Крконоше был потрясающим. Это был наш лучший отпуск!`,
    vocabulary: [
      { czech: 'dovolená', russian: 'отпуск' },
      { czech: 'Krkonoše', russian: 'Крконоше' },
      { czech: 'lyžování', russian: 'катание на лыжах' },
      { czech: 'sjezdovka', russian: 'горнолыжный склон' },
      { czech: 'výšlap', russian: 'восхождение, поход' },
      { czech: 'Sněžka', russian: 'Снежка' },
      { czech: 'výhled', russian: 'вид, панорама' },
      { czech: 'úžasný', russian: 'потрясающий' },
    ],
    questions: [
      {
        id: 'a2-05-q1',
        question: 'Где находится Шпиндлерув Млин?',
        options: ['В Шумаве', 'В Крконошах', 'В Бескидах', 'В Карпатах'],
        correctAnswer: 1,
      },
      {
        id: 'a2-05-q2',
        question: 'Какова длина самого большого склона?',
        options: ['1 км', '2 км', '3 км', '5 км'],
        correctAnswer: 2,
      },
      {
        id: 'a2-05-q3',
        question: 'Сколько часов занял подъём на Снежку?',
        options: ['Два часа', 'Три часа', 'Четыре часа', 'Пять часов'],
        correctAnswer: 2,
      },
      {
        id: 'a2-05-q4',
        question: 'Что они делали вечером в отеле?',
        options: ['Смотрели телевизор', 'Играли в карты и настольные игры', 'Гуляли', 'Плавали в бассейне'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 16: Moje koníčky ---
  {
    id: 'a2-06',
    level: 'A2',
    title: 'Moje koníčky',
    titleRussian: 'Мои хобби',
    text: `Mám tři hlavní koníčky, které mě baví a odpočívám: vaření, jízdu na kole a čtení.

Začal jsem vařit před dvěma roky, když jsem se přestěhoval z rodičovského domu. Nejprve jsem neuměl vařit vůbec nic — jenom vařil jsem těstoviny a dělal sendviče. Postupně jsem se ale zlepšoval. Teď umím vařit česká i italská jídla. Můj oblíbený recept je domácí pizza. Každou neděli vařím oběd pro své přátele.

Jízda na kole je můj letní koníček. V létě jezdím na kole třikrát týdně, obvykle večer po práci. Jezdím po cyklostezkách podél řeky. Nejdelší trasa, kterou jsem kdy jel, měla šedesát kilometrů. Koupil jsem si nové silniční kolo — je lehké a rychlé.

Čtení je můj zimní koníček. V zimě, kdy je venku zima a tma, si sedám do křesla a čtu knihy. Mám rád českou literaturu — čtu knihy od Karla Čapka, Bohumila Hrabala a Jaroslava Seiferta. Také čtu detektivky. Minulý měsíc jsem přečetl pět knih.

Takové koníčky mi dávají energii a pomáhají mi relaxovat po náročném dni.`,
    textRussian: `У меня три основных хобби, которые меня увлекают и помогают отдыхать: готовка, езда на велосипеде и чтение.

Я начал готовить два года назад, когда переехал из родительского дома. Сначала я вообще не умел готовить — только варил макароны и делал сэндвичи. Постепенно я улучшался. Теперь умею готовить чешские и итальянские блюда. Мой любимый рецепт — домашняя пицца. Каждое воскресенье готовлю обед для своих друзей.

Езда на велосипеде — моё летнее хобби. Летом катаюсь на велосипеде три раза в неделю, обычно вечером после работы. Катаюсь по велодорожкам вдоль реки. Самый длинный маршрут, который я когда-либо проезжал, был шестьдесят километров. Я купил новый шоссейный велосипед — он лёгкий и быстрый.

Чтение — моё зимнее хобби. Зимой, когда на улице холодно и темно, я сажусь в кресло и читаю книги. Я люблю чешскую литературу — читаю книги Карела Чапека, Богумила Грабала и Ярослава Сейферта. Также читаю детективы. В прошлом месяце я прочитал пять книг.

Такие хобби дают мне энергию и помогают расслабиться после трудного дня.`,
    vocabulary: [
      { czech: 'koníček', russian: 'хобби' },
      { czech: 'vařit', russian: 'готовить' },
      { czech: 'cyklostezka', russian: 'велодорожка' },
      { czech: 'silniční kolo', russian: 'шоссейный велосипед' },
      { czech: 'literatura', russian: 'литература' },
      { czech: 'detektivka', russian: 'детектив' },
      { czech: 'relaxovat', russian: 'расслабляться' },
      { czech: 'náročný', russian: 'трудный, напряжённый' },
    ],
    questions: [
      {
        id: 'a2-06-q1',
        question: 'Когда автор начал готовить?',
        options: ['Год назад', 'Два года назад', 'Три года назад', 'Пять лет назад'],
        correctAnswer: 1,
      },
      {
        id: 'a2-06-q2',
        question: 'Какой самый длинный маршрут проезжал автор на велосипеде?',
        options: ['30 км', '40 км', '50 км', '60 км'],
        correctAnswer: 3,
      },
      {
        id: 'a2-06-q3',
        question: 'Чьи книги автор любит читать?',
        options: ['Франца Кафки', 'Карела Чапека', 'Милана Кундеры', 'Яна Неремчешкого'],
        correctAnswer: 1,
      },
      {
        id: 'a2-06-q4',
        question: 'Сколько книг автор прочитал в прошлом месяце?',
        options: ['Три', 'Четыре', 'Пять', 'Шесть'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 17: V Českém Krumlově ---
  {
    id: 'a2-07',
    level: 'A2',
    title: 'V Českém Krumlově',
    titleRussian: 'В Чешском Крумлове',
    text: `Naposledy jsme jeli na výlet do Českého Krumlova. Je to jedno z nejkrásnějších měst v Česku a je zapsané na seznamu UNESCO. Jeli jsme autem — cesta z Brna trvala asi tři hodiny.

Krumlov je malé město, ale má bohatou historii. Hlavní památkou je krumlovský zámek, který je druhý největší zámek v Česku. Prošli jsme si zámeckou zahradu a nádvoří. Z věže zámku byl krásný výhled na celé město a řeku Vltavu.

Pak jsme šli do historického centra. Ulice jsou úzké a domy mají krásné fasády. Návštěvou místního muzea jsme se dozvěděli o historii města — Krumlov založil rod Rožmberků ve třináctém století.

Na oběd jsme si sedli do restaurace na náměstí. Objednali jsme si tradiční česká jídla — já dal vepřové koleno a moje přítelkyně dala svíčkovou. Jídlo bylo vynikající.

Odpoledne jsme se projeli na lodičce po řece Vltavě. Bylo to velmi příjemné. Slunce svítilo a kolem řeky bylo zeleno. Večer jsme si dali zmrzlinu a odjeli domů. Byl to krásný den.`,
    textRussian: `В последний раз мы ездили на экскурсию в Чешский Крумлов. Это один из красивейших городов Чехии, и он внесён в список ЮНЕСКО. Мы ехали на машине — дорога из Брно заняла около трёх часов.

Крумлов — небольшой город, но с богатой историей. Главная достопримечательность — крумловский замок, второй по величине замок в Чехии. Мы прогулялись по замковому саду и двору. С башни замка открывался прекрасный вид на весь город и реку Влтаву.

Затем мы пошли в исторический центр. Улицы узкие, а дома имеют красивые фасады. Посетив местный музей, мы узнали об истории города — Крумлов основал род Розмберков в тринадцатом веке.

На обед мы сели в ресторан на площади. Заказали традиционные чешские блюда — я заказал свиную рульку, а моя девушка — гуляш из говядины. Еда была великолепной.

Днём мы покатались на лодочке по реке Влтаве. Это было очень приятно. Светило солнце, и вокруг реки было зелено. Вечером мы съели мороженое и уехали домой. Это был прекрасный день.`,
    vocabulary: [
      { czech: 'památka', russian: 'достопримечательность' },
      { czech: 'zámek', russian: 'замок' },
      { czech: 'nádvoří', russian: 'двор' },
      { czech: 'fasáda', russian: 'фасад' },
      { czech: 'století', russian: 'век, столетие' },
      { czech: 'přítelkyně', russian: 'девушка' },
      { czech: 'lodička', russian: 'лодочка' },
      { czech: 'vynikající', russian: 'великолепный' },
    ],
    questions: [
      {
        id: 'a2-07-q1',
        question: 'Кем был основан Чешский Крумлов?',
        options: ['Родом Лихтенштейнов', 'Родом Розмберков', 'Родом Шварценбергов', 'Родом Колowратов'],
        correctAnswer: 1,
      },
      {
        id: 'a2-07-q2',
        question: 'Какой по величине Крумловский замок?',
        options: ['Третий', 'Второй', 'Первый', 'Четвёртый'],
        correctAnswer: 1,
      },
      {
        id: 'a2-07-q3',
        question: 'Что автор делал днём на реке?',
        options: ['Плавал', 'Катался на лодочке', 'Рыбалачил', 'Бегал вдоль реки'],
        correctAnswer: 1,
      },
      {
        id: 'a2-07-q4',
        question: 'В какой список внесён Чешский Крумлов?',
        options: ['Список европейских городов', 'Список UNESCO', 'Список замков Чехии', 'Список мировых рекордов'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 18: Narozeniny mé sestry ---
  {
    id: 'a2-08',
    level: 'A2',
    title: 'Narozeniny mé sestry',
    titleRussian: 'День рождения моей сестры',
    text: `Minulý týden měla moje sestra Lenka narozeniny. Bylo jí dvacet let a my jsme jí chtěli udělat velké překvapení. Plánovali jsme oslavu už měsíc dopředu.

Sestra si myslela, že na její narozeniny pojedeme jen do restaurace na večeři. My jsme ale připravili tajnou párty doma! Ráno jsem s maminkou nakoupili — koupili jsme dort, balónky, dekorační papír a nápoje.

Odpoledne, když Lenka byla ve škole, jsme začali připravovat dům. Maminka udělala catering — připravila chlebíčky, saláty a sladkosti. Tatínek nafoukl balónky a pověsil girlandy. Já jsem připravil hudbu a hry pro hosty.

Večer Lenka přijela domů a byla velmi překvapená! Křičela radostí a měla slzy v očích. Pak přišli hosté — její kamarádky z gymnázia a naši příbuzní. Celkem nás bylo patnáct.

Měli jsme hodně zábavy. Hráli jsme hry, tancovali a zpívali. Lenka dostala krásné dárky — knihy, oblečení a nový telefon, který jsme jí koupili společně. K půlnoci jsme snědli dort se svíčkami a zazpívali jsme jí „Hodně štěstí, zdraví".

Lenka řekla, že to byly její nejlepší narozeniny. Byli jsme všichni velmi šťastní.`,
    textRussian: `На прошлой неделе у моей сестры Ленки был день рождения. Ей исполнилось двадцать лет, и мы хотели сделать ей большой сюрприз. Мы планировали празднование уже за месяц.

Сестра думала, что на свой день рождения мы поедем только в ресторан на ужин. Но мы приготовили тайную вечеринку дома! Утром мы с мамой сходили за покупками — купили торт, шарики, декоративную бумагу и напитки.

Днём, когда Ленка была в школе, мы начали готовить дом. Мама организовала угощения — приготовила канапе, салаты и сладости. Папа надул шарики и повесил гирлянды. Я подготовил музыку и игры для гостей.

Вечером Ленка пришла домой и была очень удивлена! Она кричала от радости, и у неё были слёзы на глазах. Потом пришли гости — её подруги из гимназии и наши родственники. Нас всего было пятнадцать.

Мы отлично провели время. Играли в игры, танцевали и пели. Ленка получила красивые подарки — книги, одежду и новый телефон, который мы купили ей вместе. В полночь мы съели торт со свечками и спели ей «Happy Birthday».

Ленка сказала, что это были её лучшие дни рождения. Мы все были очень счастливы.`,
    vocabulary: [
      { czech: 'narozeniny', russian: 'день рождения' },
      { czech: 'překvapení', russian: 'сюрприз' },
      { czech: 'balónky', russian: 'шарики' },
      { czech: 'dekorace', russian: 'украшения' },
      { czech: 'catering', russian: 'угощения' },
      { czech: 'girlanda', russian: 'гирлянда' },
      { czech: 'příbuzný', russian: 'родственник' },
      { czech: 'šťastný', russian: 'счастливый' },
    ],
    questions: [
      {
        id: 'a2-08-q1',
        question: 'Сколько лет исполнилось Ленке?',
        options: ['18 лет', '19 лет', '20 лет', '21 год'],
        correctAnswer: 2,
      },
      {
        id: 'a2-08-q2',
        question: 'Давно они планировали праздник?',
        options: ['Неделю', 'Две недели', 'Месяц', 'Два месяца'],
        correctAnswer: 2,
      },
      {
        id: 'a2-08-q3',
        question: 'Сколько человек было на вечеринке?',
        options: ['10', '12', '15', '20'],
        correctAnswer: 2,
      },
      {
        id: 'a2-08-q4',
        question: 'Какой подарок они купили Ленке вместе?',
        options: ['Книги', 'Одеежду', 'Новый телефон', 'Торт'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 19: Zápas v Kopřivnici ---
  {
    id: 'a2-09',
    level: 'A2',
    title: 'Zápas v Kopřivnici',
    titleRussian: 'Матч в Копрживнице',
    text: `V sobotu odpoledne jsem šel na fotbalový zápas. Hrálo se v Kopřivnici, domácí tým TJ Tatran Kopřivnice hrál proti týmu FC Hradec Králové. Jel jsem tam s kamarádem Martinem, který je velký fanoušek fotbalu.

Stadion nebyl velký, ale byl plný lidí. Na tribunách bylo asi tisíc diváků. Atmosféra byla skvělá — lidé fandili, zpívali a mávali vlajkami. My jsme si koupili pivo a párky a zaujali místa na hlavní tribuně.

Zápas začal ve třetině hodiny odpoledne. První poločas byl vyrovnaný, oba týmy měly šance, ale nikdo nedal gól. V šedesáté minutě domácí tým vstřelil první gól. Stadion explodoval radostí! Lidé skákali a tleskali.

Hosté ale nedali pokoj. V osmdesáté minutě vyrovnali na jednu jedničku. V poslední minutě zápasu dal domácí tým vítězný gól! Konečný výsledek byl dva jedna.

Byli jsme velmi šťastní. Po zápase jsme šli do hospody u stadionu, kde jsme oslavovali vítězství. Pili jsme pivo a diskutovali o zápasu. Bylo to skvělé odpoledne.`,
    textRussian: `В субботу днём я пошёл на футбольный матч. Игра проходила в Копрживнице, домашняя команда ТЕ Tatran Копрживница играла против команды ФК Градец-Кралове. Я поехал туда с другом Мартином, который большой фанат футбола.

Стадион был небольшой, но полным людей. На трибунах было около тысячи зрителей. Атмосфера была потрясающей — люди болели, пели и махали флагами. Мы купили пиво и сосиски и заняли места на главной трибуне.

Матч начался в половине четвёртого дня. Первый тайм был равным, у обеих команд были шансы, но никто не забил гол. На шестидесятой минуте домашняя команда забила первый гол. Стадион взорвался от радости! Люди прыгали и хлопали.

Но гости не сдались. На восьмидесятой минуте они сравняли счёт — один-один. В последнюю минуту матча домашняя команда забила победный гол! Итоговый счёт — два-один.

Мы были очень счастливы. После матча мы зашли в пивную у стадиона, где праздновали победу. Пили пиво и обсуждали матч. Это было отличное времяпрепровождение.`,
    vocabulary: [
      { czech: 'zápas', russian: 'матч' },
      { czech: 'domácí tým', russian: 'домашняя команда' },
      { czech: 'tribuna', russian: 'трибуна' },
      { czech: 'divák', russian: 'зритель' },
      { czech: 'fandit', russian: 'болеть' },
      { czech: 'poločas', russian: 'тайм' },
      { czech: 'vstřelit gól', russian: 'забить гол' },
      { czech: 'vítězství', russian: 'победа' },
    ],
    questions: [
      {
        id: 'a2-09-q1',
        question: 'Против какой команды играл домашний клуб?',
        options: ['FC Ostrava', 'FC Hradec Králové', 'FC Brno', 'FC Plzeň'],
        correctAnswer: 1,
      },
      {
        id: 'a2-09-q2',
        question: 'Примерно сколько зрителей было на стадионе?',
        options: ['500', '1000', '2000', '5000'],
        correctAnswer: 1,
      },
      {
        id: 'a2-09-q3',
        question: 'На какой минуте был забит победный гол?',
        options: ['На 60-й', 'На 80-й', 'На 90-й', 'На 45-й'],
        correctAnswer: 2,
      },
      {
        id: 'a2-09-q4',
        question: 'Каков был итоговый счёт матча?',
        options: ['1:0', '2:1', '2:0', '3:1'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 20: Vánoce u nás ---
  {
    id: 'a2-10',
    level: 'A2',
    title: 'Vánoce u nás',
    titleRussian: 'Рождество у нас',
    text: `Vánoce jsou u nás nejdůležitější svátek v roce. Slavíme je dvacet čtvrtého až dvacet šestého prosince. Každý rok se scházíme celá rodina.

Přípravy na Vánoce začínají už v prosinci. Maminka peče vánoční cukroví — vanilkové rohlíčky, linecké cukroví, medovníčky a pavlovy. Cukroví ukládáme do plechových krabic. Tatínek kupuje kapra — toho máme na Štědrý večer.

Dvacátého čtvrtého prosince, na Štědrý den, se celá rodina schází u nás doma. Večer sedáme ke stolu. Pod stolem máme ořechy a jablka — to je stará tradice. Na stole je štědrovečerní večeře: rybí polévka, smažený kapr s bramborovým salátem a vánoční kynutý knedlík.

Po večeři jdeme k vánočnímu stromečku. Stromeček je krásně zdobený — má vánoční koule, svíčky a cukroví. Pod stromečkem jsou dárky. Rozbalujeme je a všichni jsme nadšení. Jako děti jsme dostávali hračky, teď dostáváme knihy, oblečení a elektroniku.

O půlnoci někteří lidé chodí na půlnoční mši do kostela. My zůstáváme doma, sledujeme pohádky v televizi a pijeme svařené víno. Dvacátého pátého a šestého navštěvujeme příbuzné a přátele. Je to čas klidu, lásky a rodinného štěstí.`,
    textRussian: `Рождество — самый важный праздник у нас в году. Мы празднуем его с двадцать четвёртого по двадцать шестое декабря. Каждый год собирается вся семья.

Подготовки к Рождеству начинаются уже в декабре. Мама печёт рождественское печенье — ванильные рожки, линцское печенье, медовики и павловы. Печенье храним в жестяных коробках. Папа покупает карпа — его мы едим в Сочельник.

Двадцать четвёртого декабря, в Сочельник, вся семья собирается у нас дома. Вечером мы садимся за стол. Под столом у нас орехи и яблоки — это старая традиция. На столе рождественский ужин: рыбный суп, жареный карп с картофельным салатом и рождественский дрожжевой кнедлик.

После ужина мы идём к рождественской ёлке. Ёлка красиво украшена — на ней рождественские шары, свечи и печенье. Под ёлкой лежат подарки. Мы их раскрываем, и все в восторге. В детстве мы получали игрушки, теперь получаем книги, одежду и электронику.

В полночь некоторые люди ходят на полуночную мессу в церковь. Мы остаёмся дома, смотрим сказки по телевизору и пьём глинтвейн. Двадцать пятого и двадцать шестого посещаем родственников и друзей. Это время покоя, любви и семейного счастья.`,
    vocabulary: [
      { czech: 'Vánoce', russian: 'Рождество' },
      { czech: 'cukroví', russian: 'печенье' },
      { czech: 'kapr', russian: 'карп' },
      { czech: 'Štědrý den', russian: 'Сочельник' },
      { czech: 'štědrovečerní večeře', russian: 'рождественский ужин' },
      { czech: 'vánoční stromeček', russian: 'рождественская ёлка' },
      { czech: 'rozbalovat', russian: 'раскрывать (подарки)' },
      { czech: 'svařené víno', russian: 'глинтвейн' },
    ],
    questions: [
      {
        id: 'a2-10-q1',
        question: 'Какое печенье печёт мама?',
        options: ['Только пряники', 'Ванильные рожки и медовики', 'Только блинчики', 'Штрудель'],
        correctAnswer: 1,
      },
      {
        id: 'a2-10-q2',
        question: 'Что находится под столом в Сочельник по традиции?',
        options: ['Подарки', 'Орехи и яблоки', 'Деньги', 'Свечи'],
        correctAnswer: 1,
      },
      {
        id: 'a2-10-q3',
        question: 'Какое главное блюдо на рождественском ужине?',
        options: ['Гусь', 'Жареный карп с картофельным салатом', 'Гуляш', 'Свиная рулька'],
        correctAnswer: 1,
      },
      {
        id: 'a2-10-q4',
        question: 'Что семья делает после ужина?',
        options: ['Идёт в церковь', 'Идёт к рождественской ёлке за подарками', 'Едет к родственникам', 'Играет в настольные игры'],
        correctAnswer: 1,
      },
    ],
  },
];
