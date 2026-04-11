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

  // --- Story 11: Můj kamarád ---
  {
    id: 'a1-11',
    level: 'A1',
    title: 'Můj kamarád',
    titleRussian: 'Мой друг',
    text: `Mám kamaráda. Jmenuje se Martin. Je mu dvacet let. Bydlí v Praze, ale pochází z Brna. Martin je velmi milý a zábavný člověk. Má modré oči a tmavé vlasy.

Martin studuje ekonomii na univerzitě. Ráno chodí do školy a odpoledne pracuje v kavárně. Má rád hudbu a hraje na kytaru. Víkendy tráví s přáteli nebo čte knihy.

Každý měsíc si voláme a povídáme si. Martin má dobrý smysl pro humor. Rád dělá vtipy a směje se. Je to můj nejlepší kamarád.`,
    textRussian: `У меня есть друг. Его зовут Мартин. Ему двадцать лет. Он живёт в Праге, но родом из Брно. Мартин — очень милый и весёлый человек. У него голубые глаза и тёмные волосы.

Мартин изучает экономику в университете. Утром он ходит в школу, а днём работает в кафе. Он любит музыку и играет на гитаре. Выходные он проводит с друзьями или читает книги.

Каждый месяц мы звоним друг другу и разговариваем. У Мартина хорошее чувство юмора. Он любит шутить и смеяться. Это мой лучший друг.`,
    vocabulary: [
      { czech: 'kamarád', russian: 'друг, товарищ' },
      { czech: 'pocházet', russian: 'быть родом (из)' },
      { czech: 'milý', russian: 'милый, приятный' },
      { czech: 'zábavný', russian: 'весёлый, забавный' },
      { czech: 'ekonomie', russian: 'экономика' },
      { czech: 'smysl pro humor', russian: 'чувство юмора' },
      { czech: 'vtip', russian: 'шутка' },
    ],
    questions: [
      {
        id: 'a1-11-q1',
        question: 'Откуда родом Мартин?',
        options: ['Из Праги', 'Из Брно', 'Из Остравы', 'Из Пльзеня'],
        correctAnswer: 1,
      },
      {
        id: 'a1-11-q2',
        question: 'Где Мартин работает?',
        options: ['В школе', 'В банке', 'В кафе', 'В магазине'],
        correctAnswer: 2,
      },
      {
        id: 'a1-11-q3',
        question: 'На каком инструменте играет Мартин?',
        options: ['На пианино', 'На скрипке', 'На гитаре', 'На барабанах'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 12: V zoo ---
  {
    id: 'a1-12',
    level: 'A1',
    title: 'V zoo',
    titleRussian: 'В зоопарке',
    text: `V sobotu jedeme s rodinou do zoo. Zoo je v centru města. Je tam velký park s mnoha zvířaty. Vstupenka stojí dvě stě korun. Děti mají vstup zdarma.

Nejprve jdeme vidět slony. Sloni jsou velmi velcí a chytří. Jedí listy a ovoce. Potom jdeme k lvům. Lvi odpočívají na slunci. Je velmi horko.

Děti chtějí vidět opice. Opice jsou velmi zábavné. Skáčou po stromech a hrají si. Na závěr jdeme k vodním ptákům. Krmíme kachny malým chlebem. Je to krásný den.`,
    textRussian: `В субботу мы с семьёй едем в зоопарк. Зоопарк находится в центре города. Там большой парк с множеством животных. Билет стоит двести крон. Дети входят бесплатно.

Сначала мы идём смотреть слонов. Слоны очень большие и умные. Они едят листья и фрукты. Потом мы идём к львам. Львы отдыхают на солнце. Очень жарко.

Дети хотят посмотреть обезьян. Обезьяны очень забавные. Они прыгают по деревьям и играют. В конце мы идём к водоплавающим птицам. Кормим уток маленьким хлебом. Это прекрасный день.`,
    vocabulary: [
      { czech: 'zoo', russian: 'зоопарк' },
      { czech: 'vstupenka', russian: 'билет (входной)' },
      { czech: 'zvíře', russian: 'животное' },
      { czech: 'slon', russian: 'слон' },
      { czech: 'opice', russian: 'обезьяна' },
      { czech: 'skákat', russian: 'прыгать' },
      { czech: 'krmit', russian: 'кормить' },
    ],
    questions: [
      {
        id: 'a1-12-q1',
        question: 'Сколько стоит билет в зоопарк?',
        options: ['100 крон', '200 крон', '300 крон', '150 крон'],
        correctAnswer: 1,
      },
      {
        id: 'a1-12-q2',
        question: 'Что делают львы в зоопарке?',
        options: ['Бегают', 'Отдыхают на солнце', 'Едят', 'Плавают'],
        correctAnswer: 1,
      },
      {
        id: 'a1-12-q3',
        question: 'Кого дети кормят хлебом?',
        options: ['Слонов', 'Обезьян', 'Уток', 'Львов'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 13: Na nádraží ---
  {
    id: 'a1-13',
    level: 'A1',
    title: 'Na nádraží',
    titleRussian: 'На вокзале',
    text: `Dnes jedu na vlaku do Olomouce. Jsem na hlavním nádraží v Brně. Nádraží je velké a plné lidí. Hledám svůj nástupiště. Nástupiště číslo pět je vpravo.

Kupuji jízdenku v pokladně. Jízdenka do Olomouce stojí sto padesát korun. Vlak odjíždí v deset hodin. Mám ještě třicet minut. Jdu do bufetu a kupuji kávu a rohlík.

Na nástupišti stojí můj vlak. Je to rychlík. Vlakový průvodčí kontroluje jízdenky. Sedám si u okna a čtu knihu. Cesta trvá jednu hodinu. Těším se na Olomouc.`,
    textRussian: `Сегодня я еду на поезде в Оломоуц. Я на главном вокзале в Брно. Вокзал большой и полный людей. Я ищу свою платформу. Платформа номер пять — направо.

Покупаю билет в кассе. Билет до Оломоуца стоит сто пятьдесят крон. Поезд отправляется в десять часов. У меня ещё тридцать минут. Я иду в буфет и покупаю кофе и булочку.

На платформе стоит мой поезд. Это скорый поезд. Проводник проверяет билеты. Я сажусь у окна и читаю книгу. Дорога занимает один час. Я с нетерпением жду Оломоуца.`,
    vocabulary: [
      { czech: 'nádraží', russian: 'вокзал, станция' },
      { czech: 'nástupiště', russian: 'платформа' },
      { czech: 'jízdenka', russian: 'билет' },
      { czech: 'pokladna', russian: 'касса' },
      { czech: 'rychlík', russian: 'скорый поезд' },
      { czech: 'průvodčí', russian: 'проводник' },
      { czech: 'těšit se', russian: 'с нетерпением ждать' },
    ],
    questions: [
      {
        id: 'a1-13-q1',
        question: 'Куда едет герой?',
        options: ['В Прагу', 'В Остраву', 'В Оломоуц', 'В Пльзень'],
        correctAnswer: 2,
      },
      {
        id: 'a1-13-q2',
        question: 'Сколько стоит билет?',
        options: ['100 крон', '150 крон', '200 крон', '250 крон'],
        correctAnswer: 1,
      },
      {
        id: 'a1-13-q3',
        question: 'Сколько длится поездка?',
        options: ['30 минут', '45 минут', '1 час', '2 часа'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 14: Moje škola ---
  {
    id: 'a1-14',
    level: 'A1',
    title: 'Moje škola',
    titleRussian: 'Моя школа',
    text: `Moje škola se jmenuje Základní škola Husova. Je na ulici Husova v centru města. Budova je stará, ale velmi krásná. Má tři patra a velkou zahradu.

Ve škole je dvacet tříd a sto pět set žáků. Učitelé jsou velmi milí a pracovití. Moje oblíbená učitelka je paní Nováková. Učí matematiku. Matematika je obtížná, ale paní Nováková výborně vysvětluje.

Moje třída je ve druhém patře. V třídě je dvacet žáků. Máme hodiny češtiny, matematiky, angličtiny a tělesné výchovy. Přestávky trvají patnáct minut. Na přestávce hrajeme fotbal nebo povídáme s kamarády.`,
    textRussian: `Моя школа называется Начальная школа Гусова. Она находится на улице Гусова в центре города. Здание старое, но очень красивое. В нём три этажа и большой сад.

В школе двадцать классов и полторы тысячи учеников. Учителя очень милые и трудолюбивые. Моя любимая учительница — пани Новакова. Она преподаёт математику. Математика сложная, но пани Новакова отлично объясняет.

Мой класс на втором этаже. В классе двадцать учеников. У нас уроки чешского, математики, английского и физкультуры. Перемены длятся пятнадцать минут. На перемене мы играем в футбол или разговариваем с друзьями.`,
    vocabulary: [
      { czech: 'základní škola', russian: 'начальная школа' },
      { czech: 'budova', russian: 'здание' },
      { czech: 'žák', russian: 'ученик' },
      { czech: 'učitelka', russian: 'учительница' },
      { czech: 'obtížný', russian: 'сложный, трудный' },
      { czech: 'přestávka', russian: 'перемена' },
      { czech: 'tělesná výchova', russian: 'физкультура' },
    ],
    questions: [
      {
        id: 'a1-14-q1',
        question: 'Как зовут любимую учительницу героя?',
        options: ['Пани Новакова', 'Пани Дворжакова', 'Пани Сватова', 'Пани Кральова'],
        correctAnswer: 0,
      },
      {
        id: 'a1-14-q2',
        question: 'На каком этаже находится класс героя?',
        options: ['На первом', 'На втором', 'На третьем', 'В подвале'],
        correctAnswer: 1,
      },
      {
        id: 'a1-14-q3',
        question: 'Сколько длятся перемены?',
        options: ['10 минут', '15 минут', '20 минут', '30 минут'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 15: V sobotu ---
  {
    id: 'a1-15',
    level: 'A1',
    title: 'V sobotu',
    titleRussian: 'В субботу',
    text: `V sobotu ráno vstávám pozdě. Vstavám v devět hodin. Dělám si snídani. Jím chléb se sýrem a piju čaj. Potom se sprchuji a oblékám se.

Odpoledne jdu do parku s kamarádem Petrem. Počasí je hezké. Svítí slunce a je teplý vzduch. Chodíme po parku a děláme si fotografie. Petr má nový foťák.

Večer jdeme do kina. Dáváme český film. Film je velmi zajímavý a vtipný. Po filmu jdeme do restaurace. Dám si pizzu a Petr dá si těstoviny. Vrátíme se domů v jedenáct hodin večer. Je to skvělý den.`,
    textRussian: `В субботу утром я встаю поздно. Встаю в девять часов. Готовлю себе завтрак. Ем хлеб с сыром и пью чай. Потом принимаю душ и одеваюсь.

Днём я иду в парк с другом Петром. Погода хорошая. Светит солнце и тёплый воздух. Мы гуляем по парку и делаем фотографии. У Петра новый фотоаппарат.

Вечером мы идём в кино. Идёт чешский фильм. Фильм очень интересный и забавный. После фильма мы идём в ресторан. Я беру пиццу, а Петр — макароны. Возвращаемся домой в одиннадцать часов вечера. Это отличный день.`,
    vocabulary: [
      { czech: 'vstávat', russian: 'вставать' },
      { czech: 'snídaně', russian: 'завтрак' },
      { czech: 'sprchovat se', russian: 'принимать душ' },
      { czech: 'oblekat se', russian: 'одеваться' },
      { czech: 'počasí', russian: 'погода' },
      { czech: 'foťák', russian: 'фотоаппарат' },
      { czech: 'těstoviny', russian: 'макароны, паста' },
    ],
    questions: [
      {
        id: 'a1-15-q1',
        question: 'Во сколько герой встаёт в субботу?',
        options: ['В семь часов', 'В восемь часов', 'В девять часов', 'В десять часов'],
        correctAnswer: 2,
      },
      {
        id: 'a1-15-q2',
        question: 'Куда друзья идут вечером?',
        options: ['В театр', 'В кино', 'На концерт', 'В музей'],
        correctAnswer: 1,
      },
      {
        id: 'a1-15-q3',
        question: 'Что Петр ест в ресторане?',
        options: ['Пиццу', 'Салат', 'Макароны', 'Суп'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 16: Lékař ---
  {
    id: 'a1-16',
    level: 'A1',
    title: 'Lékař',
    titleRussian: 'Врач',
    text: `Dnes nejsem zdravý. Bolí mě hlava a mám rýmu. Volám mamince a říkám jí o svém zdraví. Maminka říká: „Jdi k lékaři!" Svolávám si schůzku s doktorem.

Jdu do nemocnice na ulici Palackého. Čekárna je plná lidí. Čekám třicet minut. Pak přijde sestra a volá moje jméno. Jdu do ordinace. Doktor se jmenuje pan Dvořák.

Doktor se mě ptá na mé potíže. Ptá se: „Kdy to začalo?" Říkám: „Včera večer." Doktor mě prohlíží a měří teplotu. Mám teplotu třicet sedm a pět. Doktor říká, že to není vážné. Píše mi recept na léky. Léky si beru v lékárně.`,
    textRussian: `Сегодня я не здоров. У меня болит голова и насморк. Звоню маме и рассказываю о своём здоровье. Мама говорит: «Иди к врачу!» Записываюсь на приём к доктору.

Я иду в больницу на улице Палацкого. Приёмная полна людей. Жду тридцать минут. Потом приходит медсестра и вызывает моё имя. Я вхожу в кабинет. Доктора зовут пан Дворжак.

Доктор спрашивает меня о моих жалобах. Спрашивает: «Когда это началось?» Я отвечаю: «Вчера вечером.» Доктор осматривает меня и измеряет температуру. У меня температура тридцать семь и пять. Доктор говорит, что это не серьёзно. Пишет мне рецепт на лекарства. Лекарства я беру в аптеке.`,
    vocabulary: [
      { czech: 'zdravý', russian: 'здоровый' },
      { czech: 'bolí mě hlava', russian: 'у меня болит голова' },
      { czech: 'rýma', russian: 'насморк' },
      { czech: 'lékař', russian: 'врач, доктор' },
      { czech: 'nemocnice', russian: 'больница' },
      { czech: 'ordinace', russian: 'кабинет (врачебный)' },
      { czech: 'recept', russian: 'рецепт' },
    ],
    questions: [
      {
        id: 'a1-16-q1',
        question: 'На что жалуется герой?',
        options: ['Болит живот и горло', 'Болит голова и насморк', 'Болит спина', 'Болит нога'],
        correctAnswer: 1,
      },
      {
        id: 'a1-16-q2',
        question: 'Сколько минут он ждёт в приёмной?',
        options: ['15 минут', '20 минут', '30 минут', '45 минут'],
        correctAnswer: 2,
      },
      {
        id: 'a1-16-q3',
        question: 'Какова температура героя?',
        options: ['36,5', '37,0', '37,5', '38,0'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 17: Dům a zahrada ---
  {
    id: 'a1-17',
    level: 'A1',
    title: 'Dům a zahrada',
    titleRussian: 'Дом и сад',
    text: `Náš dům stojí na okraji města. Je to malý dům se zahradou. Dům má podkroví, přízemí a malou garáž. Před domem je malá zahrada s květinami a stromy.

V přízemí je obývací pokoj, kuchyně a koupelna. Obývací pokoj je velký a světlý. V kuchyni vaří maminka. Má ráda vaření a pečení. V koupelně je vana a sprcha.

V podkroví jsou dvě ložnice a moje pracovna. V ložnici mám postel, skříň a stůl. Z okna vidím zahradu. V zahradě rostou jablka, hrušky a třešně. Na jaře kvetou a na podzim sbíráme ovoce.`,
    textRussian: `Наш дом стоит на окраине города. Это маленький дом с садом. У дома есть мансарда, первый этаж и маленький гараж. Перед домом небольшой сад с цветами и деревьями.

На первом этаже гостиная, кухня и ванная. Гостиная большая и светлая. На кухне готовит мама. Она любит готовить и печь. В ванной есть ванна и душ.

На мансарде две спальни и мой кабинет. В спальне у меня кровать, шкаф и стол. Из окна я вижу сад. В саду растут яблоки, груши и вишни. Весной они цветут, а осенью мы собираем фрукты.`,
    vocabulary: [
      { czech: 'dům', russian: 'дом' },
      { czech: 'zahrada', russian: 'сад' },
      { czech: 'okraj města', russian: 'окраина города' },
      { czech: 'podkroví', russian: 'мансарда' },
      { czech: 'obývací pokoj', russian: 'гостиная' },
      { czech: 'ložnice', russian: 'спальня' },
      { czech: 'sbírat', russian: 'собирать' },
    ],
    questions: [
      {
        id: 'a1-17-q1',
        question: 'Где стоит дом?',
        options: ['В центре города', 'На окраине города', 'В деревне', 'На горе'],
        correctAnswer: 1,
      },
      {
        id: 'a1-17-q2',
        question: 'Что находится в кухне?',
        options: ['Постель и шкаф', 'Ванна и душ', 'Стол и стул', 'Не указано'],
        correctAnswer: 3,
      },
      {
        id: 'a1-17-q3',
        question: 'Какие фрукты растут в саду?',
        options: ['Яблоки, груши и вишни', 'Апельсины и лимоны', 'Клубника и малина', 'Сливы и абрикосы'],
        correctAnswer: 0,
      },
    ],
  },

  // --- Story 18: Na trhu ---
  {
    id: 'a1-18',
    level: 'A1',
    title: 'Na trhu',
    titleRussian: 'На рынке',
    text: `Každou sobotu chodím na trh. Trh je na hlavním náměstí. Je tam mnoho stánků s ovocem, zeleninou a pečivem. Prodejci jsou velmi přátelští a usměvaví.

Dnes kupuji jablka, banány a rajčata. Jablka stojí padesát korun za kilogram. Banány jsou levnější, stojí třicet korun. Rajčata jsou čerstvá a krásně červená. Také kupuji chléb a rohlíky od pekaře.

Na trhu je také stánek s květinami. Kupuji malou kytici růží pro maminku. Maminka má ráda červené růže. Jejich vůně je velmi příjemná. Z trhu odcházím s plnou taškou jídla a s květinami.`,
    textRussian: `Каждую субботу я хожу на рынок. Рынок находится на главной площади. Там много прилавков с фруктами, овощами и выпечкой. Продавцы очень дружелюбные и улыбчивые.

Сегодня покупаю яблоки, бананы и помидоры. Яблоки стоят пятьдесят крон за килограмм. Бананы дешевле, стоят тридцать крон. Помидоры свежие и красиво красные. Также покупаю хлеб и булочки у пекаря.

На рынке есть ещё прилавок с цветами. Покупаю маленький букет роз для мамы. Мама любит красные розы. Их аромат очень приятный. С рынка ухожу с полной сумкой еды и цветами.`,
    vocabulary: [
      { czech: 'trh', russian: 'рынок' },
      { czech: 'náměstí', russian: 'площадь' },
      { czech: 'stánek', russian: 'прилавок, палатка' },
      { czech: 'zelenina', russian: 'овощи' },
      { czech: 'prodejce', russian: 'продавец' },
      { czech: 'kytice', russian: 'букет' },
      { czech: 'vůně', russian: 'аромат, запах' },
    ],
    questions: [
      {
        id: 'a1-18-q1',
        question: 'Где находится рынок?',
        options: ['На улице', 'В торговом центре', 'На главной площади', 'В парке'],
        correctAnswer: 2,
      },
      {
        id: 'a1-18-q2',
        question: 'Сколько стоят бананы за килограмм?',
        options: ['20 крон', '30 крон', '40 крон', '50 крон'],
        correctAnswer: 1,
      },
      {
        id: 'a1-18-q3',
        question: 'Что герой покупает для мамы?',
        options: ['Хлеб', 'Букет роз', 'Фрукты', 'Овощи'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 19: Sport ---
  {
    id: 'a1-19',
    level: 'A1',
    title: 'Sport',
    titleRussian: 'Спорт',
    text: `Mám rád sport. Každý den dělám cvičení. Ráno běhám v parku třicet minut. Běhání je velmi zdravé. Po běhání se sprchuji a snídám.

Dvakrát týdně hraju fotbal s kamarády. Hrajeme na sportovišti u školy. Máme dva týmy. Můj tým se jmenuje „Tigři". Často vyhráváme, ale někdy prohráváme.

V zimě jezdím lyžovat. Jezdíme s rodinou do hor. Lyžování je velmi zábavné, ale také obtížné. V létě plavu v bazénu. Plavání je můj oblíbený sport. Sport dělá lidi zdravé a šťastné.`,
    textRussian: `Я люблю спорт. Каждый день делаю зарядку. Утром бегаю в парке тридцать минут. Бег очень полезен для здоровья. После бега принимаю душ и завтракаю.

Два раза в неделю играю в футбол с друзьями. Играем на спортплощадке у школы. У нас две команды. Моя команда называется «Тигры». Мы часто выигрываем, но иногда проигрываем.

Зимой катаюсь на лыжах. Мы ездим с семьёй в горы. Катание на лыжах очень весёлое, но и сложное. Летом плаваю в бассейне. Плавание — мой любимый спорт. Спорт делает людей здоровыми и счастливыми.`,
    vocabulary: [
      { czech: 'sport', russian: 'спорт' },
      { czech: 'běhat', russian: 'бегать' },
      { czech: 'sportoviště', russian: 'спортплощадка' },
      { czech: 'tým', russian: 'команда' },
      { czech: 'vyhrávat', russian: 'выигрывать' },
      { czech: 'lyžovat', russian: 'кататься на лыжах' },
      { czech: 'plavat', russian: 'плавать' },
    ],
    questions: [
      {
        id: 'a1-19-q1',
        question: 'Сколько минут герой бегает утром?',
        options: ['15 минут', '20 минут', '30 минут', '45 минут'],
        correctAnswer: 2,
      },
      {
        id: 'a1-19-q2',
        question: 'Как называется команда героя?',
        options: ['„Sokol"', '„Orli"', '„Tigři"', '„Levi"'],
        correctAnswer: 2,
      },
      {
        id: 'a1-19-q3',
        question: 'Какой любимый спорт героя?',
        options: ['Футбол', 'Бег', 'Плавание', 'Лыжи'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 20: V létě ---
  {
    id: 'a1-20',
    level: 'A1',
    title: 'V létě',
    titleRussian: 'Летом',
    text: `Léto je moje oblíbené roční období. Je velmi teplo a slunečno. Každý den svítí slunce. Nechci sedět doma. Chci být venku s přáteli.

V létě chodím na koupaliště. Koupaliště je nedaleko našeho domu. Voda je čistá a příjemná. Koupám se a opaluji se na dece. Také hraju volejbal na písku s kamarády.

Na prázdniny jedeme s rodinou k moři. Bydlíme v malém hotelu u pláže. Každý den plaveme v moři a chodíme na procházky. Večer jedeme do restaurace a jíme mořské plody. Léto je krásné.`,
    textRussian: `Лето — моё любимое время года. Очень тепло и солнечно. Каждый день светит солнце. Не хочу сидеть дома. Хочу быть на улице с друзьями.

Летом я хожу на купальню. Купальня недалеко от нашего дома. Вода чистая и приятная. Я купаюсь и загораю на покрывале. Также играю в волейбол на песке с друзьями.

На каникулы мы с семьёй едем к морю. Живём в маленьком отеле у пляжа. Каждый день купаемся в море и ходим на прогулки. Вечером ездим в ресторан и едим морепродукты. Лето прекрасное.`,
    vocabulary: [
      { czech: 'léto', russian: 'лето' },
      { czech: 'roční období', russian: 'время года' },
      { czech: 'koupaliště', russian: 'купальня, пляж (пресн.)' },
      { czech: 'opalovat se', russian: 'загорать' },
      { czech: 'prázdniny', russian: 'каникулы' },
      { czech: 'moře', russian: 'море' },
      { czech: 'mořské plody', russian: 'морепродукты' },
    ],
    questions: [
      {
        id: 'a1-20-q1',
        question: 'Какое любимое время года героя?',
        options: ['Весна', 'Лето', 'Осень', 'Зима'],
        correctAnswer: 1,
      },
      {
        id: 'a1-20-q2',
        question: 'Во что герой играет на песке?',
        options: ['В футбол', 'В теннис', 'В волейбол', 'В баскетбол'],
        correctAnswer: 2,
      },
      {
        id: 'a1-20-q3',
        question: 'Что семья ест в ресторане вечером?',
        options: ['Пиццу', 'Морепродукты', 'Макароны', 'Салат'],
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

  // --- Story a2-11: Na letišti ---
  {
    id: 'a2-11',
    level: 'A2',
    title: 'Na letišti',
    titleRussian: 'В аэропорту',
    text: `Vloni v létě jsem letěl na dovolenou do Španělska. Na letiště v Praze Ruzyni jsem přijel autobusem asi dvě hodiny před odletem. Chtěl jsem mít dost času na odbavení a kontrolu.
Na letišti bylo plno lidí. Nejdřív jsem šel k automatu na odbavení, kde jsem si vytiskl palubní lístek. Pak jsem si dal zavazadlo na pás a šel do bezpečnostní kontroly. Musel jsem vyndat notebook a tekutiny z batohu. Kontrola trvala asi patnáct minut.
Protože jsem měl ještě hodinu času, posadil jsem se do kavárny. Dal jsem si kávu a croissant a četl si noviny. Pak jsem šel k bráně, kde už čekali ostatní cestující. Letuška nás přivítala a ukázala nám místa v letadle.
Let trval asi tři hodiny. Přistáli jsme v Barceloně, kde bylo třicet pět stupňů. Byl jsem rád, že jsem přiletěl, a hned šel na hotel.`,
    textRussian: `В прошлом летом я летел в отпуск в Испанию. В аэропорт Праги Рузине я приехал на автобусе примерно за два часа до вылета. Я хотел иметь достаточно времени на регистрацию и досмотр.
В аэропорту было полно людей. Сначала я подошёл к автомату регистрации, где распечатал посадочный талон. Затем я сдал багаж на ленту и пошёл к досмотровой зоне. Мне пришлось достать ноутбук и жидкости из рюкзака. Досмотр занял около пятнадцати минут.
Поскольку у меня был ещё час времени, я сел в кафе. Выпил кофе, съел круассан и читал газету. Потом я пошёл к выходу на посадку, где уже ждали остальные пассажиры. Стюардесса приветствовала нас и показала места в самолёте.
Полёт длился около трёх часов. Мы приземлились в Барселоне, где было тридцать пять градусов. Я был рад, что прилетел, и сразу отправился в отель.`,
    vocabulary: [
      { czech: 'letiště', russian: 'аэропорт' },
      { czech: 'odlet', russian: 'вылет' },
      { czech: 'odbavení', russian: 'регистрация' },
      { czech: 'palubní lístek', russian: 'посадочный талон' },
      { czech: 'zavazadlo', russian: 'багаж' },
      { czech: 'bezpečnostní kontrola', russian: 'досмотр (безопасность)' },
      { czech: 'letuška', russian: 'стюардесса' },
      { czech: 'přistát', russian: 'приземлиться' },
    ],
    questions: [
      {
        id: 'a2-11-q1',
        question: 'Сколько времени до вылета автор приехал в аэропорт?',
        options: ['За полчаса', 'За час', 'За два часа', 'За три часа'],
        correctAnswer: 2,
      },
      {
        id: 'a2-11-q2',
        question: 'Что автор сделал в кафе?',
        options: ['Поел суп', 'Выпил кофе и съел круассан', 'Подождал друзей', 'Купил сувениры'],
        correctAnswer: 1,
      },
      {
        id: 'a2-11-q3',
        question: 'Какая была температура в Барселоне?',
        options: ['20 градусов', '25 градусов', '30 градусов', '35 градусов'],
        correctAnswer: 3,
      },
      {
        id: 'a2-11-q4',
        question: 'Сколько длился полёт?',
        options: ['Два часа', 'Три часа', 'Четыре часа', 'Пять часов'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story a2-12: Stěhování ---
  {
    id: 'a2-12',
    level: 'A2',
    title: 'Stěhování',
    titleRussian: 'Переезд',
    text: `Minulý měsíc se moje kamarádka Lenka rozhodla přestěhovat. Do té doby bydlela v malém bytě na okraji města, ale našla si větší byt blíže centru. Já jsem jí slíbil, že jí pomůžu s přesunem věcí.
V sobotu ráno jsem přijel k ní v devět hodin. Lenka už měla všechny krabice připravené. Většinu věcí jsme nesli po schodech, protože v domě nebyl výtah. Bylo to náročné, zvláště když jsme nesli těžký nábytek. Kamarád Martin přijel s dodávkou, takže jsme menší věci mohli vozit.
Kolem poledne jsme měli všechno naložené. Jeli jsme na novou adresu, která byla asi deset minut daleko. Nový byt je ve čtvrtém patře, ale tentokrát tam výtah je. Rozkládání věcí trvalo celé odpoledne. Lenka systematicky vybalovala jednu krabici za druhou a určovala, kam každá věc patří.
Večer jsme byli všichni úplně vyčerpaní, ale spokojení. Lenka objednala pizzu pro všechny, kteří jí pomáhali. Seděli jsme v prázdném obývacím pokoji, jedli pizzu a plánovali, jak bude nový byt vypadat, až ho Lenka zařídí.`,
    textRussian: `В прошлом месяце моя подруга Ленка решила переехать. До этого она жила в маленькой квартире на окраине города, но нашла себе квартиру побольше ближе к центру. Я обещал ей помочь с перевозкой вещей.
В субботу утром я приехал к ней в девять часов. Ленка уже подготовила все коробки. Большинство вещей мы несли по лестнице, потому что в доме не было лифта. Это было тяжело, особенно когда мы несли тяжёлую мебель. Друг Мартин приехал с фургоном, поэтому мелкие вещи мы могли перевозить.
Около полудня мы всё погрузили. Мы поехали на новый адрес, который был примерно в десяти минутах езды. Новая квартира на четвёртом этаже, но на этот раз там есть лифт. Разбор вещей занял всё вторую половину дня. Ленка систематически распаковывала одну коробку за другой и определяла, куда относится каждая вещь.
Вечером мы все были совершенно измождены, но довольны. Ленка заказала пиццу для всех, кто ей помогал. Мы сидели в пустой гостиной, ели пиццу и планировали, как будет выглядеть новая квартира, когда Ленка её обставит.`,
    vocabulary: [
      { czech: 'stěhování', russian: 'переезд' },
      { czech: 'přestěhovat se', russian: 'переехать' },
      { czech: 'krabice', russian: 'коробка' },
      { czech: 'nábytek', russian: 'мебель' },
      { czech: 'dodávka', russian: 'фургон' },
      { czech: 'rozkládat', russian: 'разбирать, раскладывать' },
      { czech: 'vyčerpaný', russian: 'измождённый, истощённый' },
      { czech: 'zařídit', russian: 'обставить, оборудовать' },
    ],
    questions: [
      {
        id: 'a2-12-q1',
        question: 'Почему переезд был тяжёлым?',
        options: ['Был дождь', 'Не было лифта в старом доме', 'Было очень жарко', 'Ленка жила далеко'],
        correctAnswer: 1,
      },
      {
        id: 'a2-12-q2',
        question: 'На каком этаже находится новая квартира?',
        options: ['На втором', 'На третьем', 'На четвёртом', 'На пятом'],
        correctAnswer: 2,
      },
      {
        id: 'a2-12-q3',
        question: 'Чем закончился день переезда?',
        options: ['Ужином в ресторане', 'Пиццей в пустой гостиной', 'Поездкой в парк', 'Просмотром фильма'],
        correctAnswer: 1,
      },
      {
        id: 'a2-12-q4',
        question: 'На чём перевозили вещи?',
        options: ['На автобусе', 'На личной машине', 'На фургоне Мартина', 'На поезде'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story a2-13: Hudební koncert ---
  {
    id: 'a2-13',
    level: 'A2',
    title: 'Hudební koncert',
    titleRussian: 'Музыкальный концерт',
    text: `Už dlouho jsem chtěl jít na živý koncert a minulý měsíc se mi to konečně podařilo. Moje oblíbená česká kapela Chinaski vystupovala v pražské O2 areně. Vstupenky jsem si koupil už v lednu, protože jsem věděl, že se rychle vyprodají.
S kamarádem Petrem jsme se sešli u metra v sedm hodin večer. V hale arény bylo plno lidí — prodávali se suvenýry, trička a plakáty. Já jsem si koupil tričko s logem kapely. Před začátkem koncertu jsme si dali něco k pití a poslouchali předkapelu, která hrála asi třicet minut.
Když vyšla hlavní kapela, celá aréna začala ječet. Hráli své nejznámější písně, publikum zpívalo a tleskalo. Atmosféra byla neuvěřitelná. Během koncertu zaznělo i několik nových písní z jejich posledního alba. Zvuk i světelné efekty byly skvělé.
Koncert skončil kolem jedenácté hodiny. Lidé pomalu odcházeli, ale stále se bavili a zpívali. Cestou domů jsme s Petrem probírali, která píseň se nám líbila nejvíc. Byl to nezapomenutelný večer a já se už těším na další koncert.`,
    textRussian: `Давно хотел пойти на живой концерт, и в прошлом месяце мне это наконец-то удалось. Моя любимая чешская группа Chinaski выступала в пражской арене O2. Билеты я купил ещё в январе, потому что знал, что они быстро распродадутся.
С другом Петром мы встретились у метро в семь часов вечера. В фойе арены было полно людей — продавались сувениры, футболки и плакаты. Я купил футболку с логотипом группы. Перед началом концерта мы выпили чего-нибудь и слушали группу на разогреве, которая играла около тридцати минут.
Когда вышла главная группа, вся арена взорвалась криками. Они играли свои самые известные песни, публика пела и хлопала. Атмосфера была невероятной. Во время концерта прозвучало также несколько новых песен с их последнего альбома. Звук и световые эффекты были великолепными.
Концерт закончился около одиннадцати часов. Люди медленно расходились, но всё ещё веселились и пели. По дороге домой мы с Петром обсуждали, какая песня понравилась больше всего. Это был незабываемый вечер, и я уже жду следующий концерт.`,
    vocabulary: [
      { czech: 'koncert', russian: 'концерт' },
      { czech: 'vstupenka', russian: 'билет' },
      { czech: 'vyprodat se', russian: 'распродаться' },
      { czech: 'aréna', russian: 'арена' },
      { czech: 'předkapela', russian: 'группа на разогреве' },
      { czech: 'publikum', russian: 'публика' },
      { czech: 'světelný efekt', russian: 'световой эффект' },
      { czech: 'nezapomenutelný', russian: 'незабываемый' },
    ],
    questions: [
      {
        id: 'a2-13-q1',
        question: 'Где проходил концерт?',
        options: ['В театре', 'В клубе', 'В O2 арене', 'На стадионе'],
        correctAnswer: 2,
      },
      {
        id: 'a2-13-q2',
        question: 'Почему автор купил билеты заранее?',
        options: ['Они были дешевле', 'Они быстро распродаются', 'Он хотел лучшие места', 'Был лимит на продажу'],
        correctAnswer: 1,
      },
      {
        id: 'a2-13-q3',
        question: 'Что автор купил в фойе?',
        options: ['Постер', 'CD с альбомом', 'Футболку с логотипом группы', 'Книгу'],
        correctAnswer: 2,
      },
      {
        id: 'a2-13-q4',
        question: 'Во сколько закончился концерт?',
        options: ['В 9 часов', 'В 10 часов', 'В 11 часов', 'В полночь'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story a2-14: Na výstavě ---
  {
    id: 'a2-14',
    level: 'A2',
    title: 'Na výstavě',
    titleRussian: 'На выставке',
    text: `Minulý týden jsem navštívil zajímavou výstavu v Národním muzeu v Praze. Výstava se jmenovala „Starověký Egypt" a představovala artefakty, které byly přivezeny z egyptských muzeí. Vstupenku jsem si rezervoval přes internet už týden předem.
Když jsem přišel k muzeu, fronta byla dlouhá, ale já jsem měl rezervaci, takže jsem šel rovnou dovnitř. První sál byl věnován faraonům — viděl jsem sochy, šperky a hrobky. U jedné vitríny stál průvodce, který vyprávěl o Tutanchamonovi. Poslouchal jsem ho asi dvacet minut a dozvěděl jsem se mnoho zajímavého.
Druhá část výstavy ukazovala každodenní život starověkých Egypťanů. Byly tam modely domů, nářadí, nádobí a dokonce i mumie. Každý exponát měl popisek v češtině a angličtině. Měl jsem u sebe audioprůvodce, takže jsem si mohl přehrávat doplňující informace.
Návštěva výstavy trvala asi dvě a půl hodiny. Na konci jsem si koupil knihu o starověkém Egyptě v muzejním obchodě. Byla to fascinující zkušenost a rozhodně chci navštívit i další výstavy, které Národní muzeum nabízí.`,
    textRussian: `На прошлой неделе я посетил интересную выставку в Национальном музее в Праге. Выставка называлась «Древний Египет» и представляла артефакты, которые были привезены из египетских музеев. Билет я забронировал через интернет ещё за неделю.
Когда я пришёл к музею, очередь была длинная, но у меня была бронь, поэтому я прошёл прямо внутрь. Первый зал был посвящён фараонам — я видел статуи, украшения и гробницы. У одной витрины стоял экскурсовод, который рассказывал о Тутанхамоне. Я слушал его около двадцати минут и узнал много интересного.
Вторая часть выставки показывала повседневную жизнь древних египтян. Там были модели домов, орудия труда, посуда и даже мумии. Каждый экспонат имел подпись на чешском и английском языках. У меня был с собой аудиогид, поэтому я мог прослушивать дополнительную информацию.
Посещение выставки длилось около двух с половиной часов. В конце я купил книгу о древнем Египте в музейном магазине. Это был захватывающий опыт, и я определённо хочу посетить и другие выставки, которые предлагает Национальный музей.`,
    vocabulary: [
      { czech: 'výstava', russian: 'выставка' },
      { czech: 'artefakt', russian: 'артефакт' },
      { czech: 'rezervace', russian: 'бронь' },
      { czech: 'faraon', russian: 'фараон' },
      { czech: 'průvodce', russian: 'экскурсовод' },
      { czech: 'exponát', russian: 'экспонат' },
      { czech: 'audioprůvodce', russian: 'аудиогид' },
      { czech: 'fascinující', russian: 'захватывающий' },
    ],
    questions: [
      {
        id: 'a2-14-q1',
        question: 'Как называлась выставка?',
        options: ['Staré Praha', 'Starověký Egypt', 'Římská říše', 'Pražský hrad'],
        correctAnswer: 1,
      },
      {
        id: 'a2-14-q2',
        question: 'Почему автор не стоял в очереди?',
        options: ['Был ранний утро', 'У него была бронь', 'Очередь была короткая', 'Он пришёл после обеда'],
        correctAnswer: 1,
      },
      {
        id: 'a2-14-q3',
        question: 'О ком рассказывал экскурсовод?',
        options: ['О Клеопатре', 'О Рамзесе', 'О Тутанхамоне', 'Об Александрии'],
        correctAnswer: 2,
      },
      {
        id: 'a2-14-q4',
        question: 'Что автор купил в музее?',
        options: ['Сувенир', 'Книгу о древнем Египте', 'Картину', 'CD с аудиогидом'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story a2-15: Sportovní den ---
  {
    id: 'a2-15',
    level: 'A2',
    title: 'Sportovní den',
    titleRussian: 'Спортивный день',
    text: `Naše firma uspořádala sportovní den pro všechny zaměstnance. Konal se minulou sobotu v sportovním areálu na okraji města. Účast nebyla povinná, ale většina kolegů se přihlásila, protože slíbili zajímavý program a občerstvení.
Ráno jsme se sešli v devět hodin. Program začal rozcvičkou, kterou vedl profesionální trenér. Potom nás rozdělili do čtyř týmů. Každý tým měl jinou barvu — my jsme byli v modrém týmu. První disciplína byl běh na překážkách. Museli jsme přelézt stěnu, proběhnout tunelem a přeskakovat pneumatiky. Bylo to vyčerpávající, ale zábavné.
Po obědě, který jsme měli v areálu, následoval turnaj v volejbalu a poté překážková dráha na vodě. Modrý tým nevyhrál, ale skončil jsme na druhém místě, což nás potěšilo. Nejlepší moment dne byl závod v canoe, kde náš tým předvedl skvělou spolupráci.
Večer proběhlo vyhlášení výsledků a předání cen. Všichni dostali pamětní tričko a medaili za účast. Byli jsme unavení, ale spokojení. Tento sportovní den nás všechny přiblížil a já si uvědomil, že potřebuji víc sportovat.`,
    textRussian: `Наша компания организовала спортивный день для всех сотрудников. Он прошёл в прошлую субботу в спортивном комплексе на окраине города. Участие не было обязательным, но большинство коллег записались, потому что пообещали интересную программу и угощение.
Утром мы встретились в девять часов. Программа началась с разминки, которую проводил профессиональный тренер. Потом нас разделили на четыре команды. Каждая команда имела свой цвет — мы были в синей команде. Первой дисциплиной был бег с препятствиями. Нам нужно было перелезть через стену, пробежать по туннелю и перепрыгивать через покрышки. Это было изнурительно, но весело.
После обеда, который был в комплексе, последовал турнир по волейболу, а затем водная полоса препятствий. Синяя команда не победила, но мы заняли второе место, что нас порадовало. Лучший момент дня — гонка на каноэ, где наша команда показала отличное взаимодействие.
Вечером прошло подведение итогов и вручение наград. Все получили памятную футболку и медаль за участие. Мы были уставшими, но довольными. Этот спортивный день сблизил нас всех, и я осознал, что мне нужно больше заниматься спортом.`,
    vocabulary: [
      { czech: 'zaměstnanec', russian: 'сотрудник' },
      { czech: 'rozcvička', russian: 'разминка' },
      { czech: 'disciplína', russian: 'дисциплина' },
      { czech: 'běh na překážkách', russian: 'бег с препятствиями' },
      { czech: 'turnaj', russian: 'турнир' },
      { czech: 'spolupráce', russian: 'взаимодействие, сотрудничество' },
      { czech: 'vyhlášení', russian: 'подведение итогов' },
      { czech: 'pamětní', russian: 'памятный' },
    ],
    questions: [
      {
        id: 'a2-15-q1',
        question: 'В каком цвете была команда автора?',
        options: ['Красном', 'Зелёном', 'Синем', 'Жёлтом'],
        correctAnswer: 2,
      },
      {
        id: 'a2-15-q2',
        question: 'Какое место заняла команда автора?',
        options: ['Первое', 'Второе', 'Третье', 'Четвёртое'],
        correctAnswer: 1,
      },
      {
        id: 'a2-15-q3',
        question: 'Что было лучшим моментом дня по мнению автора?',
        options: ['Бег с препятствиями', 'Волейбольный турнир', 'Гонка на каноэ', 'Разминка утром'],
        correctAnswer: 2,
      },
      {
        id: 'a2-15-q4',
        question: 'Что каждый получил в конце дня?',
        options: ['Денежную премию', 'Памятную футболку и медаль', 'Билет на матч', 'Книгу о спорте'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story a2-16: Návštěva muzea ---
  {
    id: 'a2-16',
    level: 'A2',
    title: 'Návštěva muzea',
    titleRussian: 'Посещение музея',
    text: `V neděli jsem se rozhodl navštívit Národní technické muzeum v Praze. Už dlouho jsem o tom slyšel, ale nikdy jsem tam nebyl. Muzeum se nachází blízko Výstaviště Holešovice a je v krásné budově z počátku dvacátého století.
Koupil jsem si rodinnou vstupenku, protože jel i se svým synem, kterému je deset let. Hned u vchodu nás přivítal velký model parního vlaku, který syna zaujal na první pohled. První patro bylo věnováno dopravě — viděli jsme staré automobily, motocyly a jízdní kola. Syn si mohl sednout do repliky historického letadla.
Ve druhém patře byla expozice „Architektura a stavitelství". Viděli jsme modely slavných českých staveb a dozvěděli jsme se o historii české architektury. V dalším sále nás zaujala expozice o vesmíru — viděli jsme model raket, skafandr astronauta a dokonce i kousek meteoritu.
Návštěva muzea trvala přes tři hodiny, ale syn se ani chvíli nenudil. Na konci jsme šli do muzejní kavárny, kde jsme si dali koláč a limonádu. Domů jsme odjeli spokojení a plni nových vědomostí. Syn už teď chce jít znovu.`,
    textRussian: `В воскресенье я решил посетить Национальный технический музей в Праге. Я давно о нём слышал, но никогда там не был. Музей находится рядом с Выставищем Голешовице и расположен в красивом здании начала двадцатого века.
Я купил семейный билет, потому что поехал с сыном, которому десять лет. Прямо у входа нас приветствовала большая модель паровоза, которая сразу привлекла сына. Первый этаж был посвящён транспорту — мы видели старые автомобили, мотоциклы и велосипеды. Сын мог сесть в копию исторического самолёта.
На втором этаже была экспозиция «Архитектура и строительство». Мы видели модели известных чешских зданий и узнали об истории чешской архитектуры. В следующем зале нас заинтересовала экспозиция о космосе — мы видели модель ракет, скафандр астронавта и даже кусок метеорита.
Посещение музея длилось более трёх часов, но сын ни разу не заскучал. В конце мы пошли в музейное кафе, где съели пирог и выпили лимонад. Домой мы уехали довольные и полные новых знаний. Сын уже сейчас хочет пойти туда снова.`,
    vocabulary: [
      { czech: 'technické muzeum', russian: 'технический музей' },
      { czech: 'parní vlak', russian: 'паровоз' },
      { czech: 'replika', russian: 'копия, реплика' },
      { czech: 'expozice', russian: 'экспозиция' },
      { czech: 'architektura', russian: 'архитектура' },
      { czech: 'vesmír', russian: 'космос' },
      { czech: 'skafandr', russian: 'скафандр' },
      { czech: 'meteorit', russian: 'метеорит' },
    ],
    questions: [
      {
        id: 'a2-16-q1',
        question: 'С кем автор пошёл в музей?',
        options: ['С женой', 'С другом', 'С сыном', 'Один'],
        correctAnswer: 2,
      },
      {
        id: 'a2-16-q2',
        question: 'Что было на первом этаже музея?',
        options: ['Экспозиция о космосе', 'Экспозиция о транспорте', 'Экспозиция об архитектуре', 'Кинотеатр'],
        correctAnswer: 1,
      },
      {
        id: 'a2-16-q3',
        question: 'Сколько длилось посещение музея?',
        options: ['Около часа', 'Около двух часов', 'Более трёх часов', 'Полдня'],
        correctAnswer: 2,
      },
      {
        id: 'a2-16-q4',
        question: 'Что сын делал в конце?',
        options: ['Хотел уйти', 'Заснул', 'Захотел прийти снова', 'Плакал'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story a2-17: Dovolená u moře ---
  {
    id: 'a2-17',
    level: 'A2',
    title: 'Dovolená u moře',
    titleRussian: 'Отпуск на море',
    text: `Letos v létě jsme s manželkou strávili dva týdny na dovolené v Chorvatsku. Ubytování jsme si rezervovali v malém apartmánu v pobřežním městečku Split. Měli jsme výhled na moře a pláž byla jen pět minut chůze od našeho apartmánu.
První týden bylo počasí dokonalé — každý den svítilo slunce a teplota dosahovala třiceti dvou stupňů. Ráno jsme snídali na balkoně s výhledem na moře. Potom jsme šli na pláž, kde jsme plavali, četli knihy a opalovali se. Odpoledne jsme chodili procházky po historickém centru Splitu a navštívili jsme Dioklecianův palác.
Druhý týden jsme si půjčili auto a podnikli jsme několik výletů. Jeli jsme do národního parku Krka, kde jsme viděli krásné vodopády. Další den jsme jeli do městečka Trogir, které je na seznamu UNESCO. Procházeli jsme úzkými uličkami a ochutnávali chorvatské specialty v místních restauracích.
Návrat domů byl smutný — nechtěli jsme opustit tohle krásné místo. Ale vzali jsme si spoustu fotek a vzpomínek. Už teď plánujeme, kam pojedeme příští rok. Chorvatsko nás nadchlo a určitě se tam chceme vrátit.`,
    textRussian: `Этим летом мы с женой провели две недели в отпуске в Хорватии. Жильё мы забронировали в маленькой квартире в прибрежном городке Сплит. У нас был вид на море, а пляж находился всего в пяти минутах ходьбы от нашей квартиры.
Первая неделя — погода была идеальной — каждый день светило солнце, а температура достигала тридцати двух градусов. Утром мы завтракали на балконе с видом на море. Потом шли на пляж, где плавали, читали книги и загорали. Днём мы гуляли по историческому центру Сплита и посетили Дворец Диоклетиана.
На вторую неделю мы арендовали машину и совершили несколько экскурсий. Мы поехали в национальный парк Крка, где увидели красивые водопады. На следующий день поехали в городок Трогир, который входит в список ЮНЕСКО. Мы гуляли по узким улочкам и пробовали хорватские деликатесы в местных ресторанах.
Возвращение домой было грустным — мы не хотели покидать это прекрасное место. Но мы привезли множество фотографий и воспоминаний. Уже сейчас планируем, куда поедем в следующем году. Хорватия нас очаровала, и мы определённо хотим туда вернуться.`,
    vocabulary: [
      { czech: 'apartmán', russian: 'квартира (сдаваемая в аренду)' },
      { czech: 'výhled', russian: 'вид' },
      { czech: 'opalovat se', russian: 'загорать' },
      { czech: 'národní park', russian: 'национальный парк' },
      { czech: 'vodopád', russian: 'водопад' },
      { czech: 'specialita', russian: 'деликатес, фирменное блюдо' },
      { czech: 'vzpomínka', russian: 'воспоминание' },
      { czech: 'nadchnout', russian: 'очаровать, восхитить' },
    ],
    questions: [
      {
        id: 'a2-17-q1',
        question: 'Где семья провела отпуск?',
        options: ['В Италии', 'В Черногории', 'В Хорватии', 'В Греции'],
        correctAnswer: 2,
      },
      {
        id: 'a2-17-q2',
        question: 'Что они посетили в Сплите?',
        options: ['Замок', 'Дворец Диоклетиана', 'Аквариум', 'Церковь'],
        correctAnswer: 1,
      },
      {
        id: 'a2-17-q3',
        question: 'Что делала семья на второй неделе?',
        options: ['Отдыхала на пляже', 'Арендовала машину и ездила на экскурсии', 'Занималась серфингом', 'Училась хорватскому языку'],
        correctAnswer: 1,
      },
      {
        id: 'a2-17-q4',
        question: 'Какая была температура в первую неделю?',
        options: ['25 градусов', '28 градусов', '32 градуса', '35 градусов'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story a2-18: Domácí mazlíčci ---
  {
    id: 'a2-18',
    level: 'A2',
    title: 'Domácí mazlíčci',
    titleRussian: 'Домашние питомцы',
    text: `Naše rodina má dva domácí mazlíčky — psa a kočku. Pes se jmenuje Hafík a je to zlatý retrívr. Je mu pět let a je to velmi energické zvíře, které miluje pohyb a hračky. Kočka se jmenuje Minka, je jí tři roky a je to perská kočka s dlouhou bílou srstí.
Když jsme si pořídili Hafíka, bylo mu jen dva měsíce. Museli jsme ho naučit základní povely — sedni, lehni, ke mně a zůstaň. Chodili jsme s ním na psí školu, kde cvičitel pomáhal s výchovou. Hafík se rychle učil a dnes je to velmi poslušný pes. Ráno si s ním běhám v parku, což je dobré pro nás oba.
Minka přišla do naší rodiny o rok později. Na rozdíl od Hafíka je to klidné zvíře, které tráví většinu dne spánkem. Ráda sedí na parapetu a sleduje ptáčky za oknem. Jednou denně si s ní hraji — má ráda hračky s peřím a malé míčky. Jejím oblíbeným místem v bytě je můj pracovní stůl, kam mi leze, když pracuji na počítači.
Hafík a Minka spolu vycházejí docela dobře, i když si občas hrají. Když Hafík příliš štěká, Minka ho upozorní tím, že ho uhodí tlapkou. Je vtipné je sledovat. Doma bez nich by bylo smutno — přinášejí nám spoustu radosti.`,
    textRussian: `В нашей семье два домашних питомца — собака и кошка. Собаку зовут Хафик, это золотистый ретривер. Ему пять лет, и это очень энергичное животное, которое любит движение и игрушки. Кошку зовут Минка, ей три года, и это персидская кошка с длинной белой шерстью.
Когда мы завели Хафика, ему было всего два месяца. Нам нужно было научить его основным командам — «сидеть», «лежать», «ко мне» и «место». Мы ходили с ним на собачью школу, где дрессировщик помогал с воспитанием. Хафик быстро учился, и сейчас он очень послушная собака. По утрам я бегаю с ним в парке, что полезно для нас обоих.
Минка появилась в нашей семье на год позже. В отличие от Хафика, это спокойное животное, которое проводит большую часть дня во сне. Она любит сидеть на подоконнике и следить за птичками за окном. Раз в день я играю с ней — ей нравятся игрушки с перьями и маленькие мячики. Её любимое место в квартире — мой рабочий стол, куда она забирается, когда я работаю за компьютером.
Хафик и Минка довольно хорошо ладят, хотя иногда и играют. Когда Хафик слишком лает, Минка даёт ему понять, хлопнув его лапой. Забавно за ними наблюдать. Дома без них было бы грустно — они приносят нам много радости.`,
    vocabulary: [
      { czech: 'domácí mazlíček', russian: 'домашний питомец' },
      { czech: 'retrívr', russian: 'ретривер' },
      { czech: 'pořídit si', russian: 'завести (животное)' },
      { czech: 'povel', russian: 'команда (собачья)' },
      { czech: 'cvičitel', russian: 'дрессировщик, тренер' },
      { czech: 'výchova', russian: 'воспитание' },
      { czech: 'parapet', russian: 'подоконник' },
      { czech: 'vycházet spolu', russian: 'ладить друг с другом' },
    ],
    questions: [
      {
        id: 'a2-18-q1',
        question: 'Сколько питомцев в семье?',
        options: ['Одна собака', 'Одна кошка', 'Собака и кошка', 'Две собаки'],
        correctAnswer: 2,
      },
      {
        id: 'a2-18-q2',
        question: 'Породы какого типа собака и кошка?',
        options: ['Овчарка и сиамская', 'Ретривер и персидская', 'Пудель и британская', 'Лабрадор и мейн-кун'],
        correctAnswer: 1,
      },
      {
        id: 'a2-18-q3',
        question: 'Что делает Минка, когда автор работает за компьютером?',
        options: ['Спит на кровати', 'Сидит на подоконнике', 'Лезет на рабочий стол', 'Играет с Хафиком'],
        correctAnswer: 2,
      },
      {
        id: 'a2-18-q4',
        question: 'Как Минка реагирует, когда Хафик слишком лает?',
        options: ['Прячется', 'Лает тоже', 'Хлопает его лапой', 'Бежит к хозяину'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story a2-19: V knihkupectví ---
  {
    id: 'a2-19',
    level: 'A2',
    title: 'V knihkupectví',
    titleRussian: 'В книжном магазине',
    text: `V sobotu odpoledne jsem šel do velkého knihkupectví v centru města. Potřeboval jsem si koupit učebnici češtiny a knížku, kterou mi doporučil kamarád. Knihkupectví se jmenovalo „Kosmas" a mělo tři patra plná knih.
Nejdřív jsem šel do sekce s učebnicemi cizích jazyků. Hledal jsem učebnici pro úroveň B1, protože A2 už jsem zvládl. Nakonec jsem si vybral učebnici s názvem „Čeština pro cizince — krok za krokem". Vedle učebnice jsem našel i pracovní sešit, takže jsem vzal oboje.
Potom jsem sešel do přízemí, kde byla sekce beletrie. Hledal jsem román, který mi doporučil kamarád — „Život je jinak" od českého autora Karla Čapka. Vzal jsem do ruky několik dalších knih a prohlížel jsem si je. Nakonec jsem koupil tři knihy — učebnici, pracovní sešit a Čapkův román.
U pokladny mě překvapila cena — celkem to stálo devět set padesát korun. Zvýhodnil jsem si věrnostní kartou, takže jsem ušetřil deset procent. Prodavač mi knihy zabalil a popřál mi hezké čtení. Domů jsem šel spokojený s plným igelitem knih.`,
    textRussian: `В субботу днём я пошёл в большой книжный магазин в центре города. Мне нужно было купить учебник чешского языка и книжку, которую порекомендовал друг. Книжный магазин назывался «Kosmas» и имел три этажа, полных книг.
Сначала я пошёл в секцию с учебниками иностранных языков. Я искал учебник для уровня B1, потому что A2 я уже освоил. В конце концов я выбрал учебник под названием «Чешский для иностранцев — шаг за шагом». Рядом с учебником я нашёл и рабочую тетрадь, поэтому взял оба.
Потом я спустился на первый этаж, где была секция художественной литературы. Я искал роман, который порекомендовал друг — «Жизнь иначе» чешского автора Карела Чапека. Я взял в руки несколько других книг и просматривал их. В итоге я купил три книги — учебник, рабочую тетрадь и роман Чапека.
У кассы меня удивила цена — всего это стоило девятьсот пятьдесят крон. Я воспользовался дисконтной картой, поэтому сэкономил десять процентов. Продавец упаковал мне книги и пожелал приятного чтения. Домой я пошёл довольный с полным пакетом книг.`,
    vocabulary: [
      { czech: 'knihkupectví', russian: 'книжный магазин' },
      { czech: 'učebnice', russian: 'учебник' },
      { czech: 'pracovní sešit', russian: 'рабочая тетрадь' },
      { czech: 'beletrie', russian: 'художественная литература' },
      { czech: 'román', russian: 'роман' },
      { czech: 'věrnostní karta', russian: 'дисконтная карта' },
      { czech: 'zabalit', russian: 'упаковать' },
      { czech: 'igelit', russian: 'пакет (полиэтиленовый)' },
    ],
    questions: [
      {
        id: 'a2-19-q1',
        question: 'Для какого уровня автор искал учебник?',
        options: ['A1', 'A2', 'B1', 'B2'],
        correctAnswer: 2,
      },
      {
        id: 'a2-19-q2',
        question: 'Сколько этажей было в книжном магазине?',
        options: ['Один', 'Два', 'Три', 'Четыре'],
        correctAnswer: 2,
      },
      {
        id: 'a2-19-q3',
        question: 'Сколько книг в итоге купил автор?',
        options: ['Одну', 'Две', 'Три', 'Четыре'],
        correctAnswer: 2,
      },
      {
        id: 'a2-19-q4',
        question: 'Сколько процентов скидки дал дисконтная карта?',
        options: ['5%', '10%', '15%', '20%'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story a2-20: České Vánoce ---
  {
    id: 'a2-20',
    level: 'A2',
    title: 'České vánoční tradice',
    titleRussian: 'Чешские рождественские традиции',
    text: `Vánoce jsou v Česku nejdůležitější svátek v roce. Připravují se na ně už od začátku prosince, kdy se začínají zdobit ulice a obchody. Lidé peklí vánoční cukroví a kupují dárky pro své blízké. V Česku se slaví hlavně 24. prosince, který se nazývá Štědrý den.
Na Štědrý den se rodina sejde u společného stolu. Podle tradice se na stůl dává extra talíř pro případného hosta, který by přišel. Jídlo musí být postní — tradičně se podává smažený kapr s bramborovým salátem a vánoční polévka s houby. Po večeři se chodí zpívat koledy.
Jednou z nejznámějších českých vánočních tradic je házení ořechového mušle. Po večeři si každý vybere ořech, rozbije ho a podívá se na vnitřní stranu mušle. Pokud je zdravá a celá, znamená to štěstí a zdraví pro další rok. Další tradicí je pouštění lodiček ze skořápek ořechů — na dřevěné míse s vodou se zjišťuje, kdo bude mít v příštím roce štěstí.
Po večeři se rodina přesune k vánočnímu stromku, kde čekají dárky. Podle české tradice dárky přináší Ježíšek, nikoliv Santa Claus nebo Děda Mráz. Děti s nadšením rozbalují dárky, zatímco dospělí pijí svařené víno a jedli vánoční cukroví. Celá atmosféra Vánoc je plná klidu, lásky a rodinné pohody.`,
    textRussian: `Рождество в Чехии — самый важный праздник в году. К нему начинают готовиться с начала декабря, когда начинают украшать улицы и магазины. Люди пекут рождественское печенье и покупают подарки для своих близких. В Чехии главным образом празднуется 24 декабря, который называется Сочельник.
В Сочельник семья собирается за общим столом. По традиции на стол ставят дополнительную тарелку на случай нежданного гостя. Еда должна быть постной — традиционно подают жареного карпа с картофельным салатом и рождественский суп с грибами. После ужина ходят петь колядки.
Одна из самых известных чешских рождественских традиций — гадание по грецкому ореху. После ужина каждый выбирает орех, раскалывает его и смотрит на внутреннюю часть скорлупы. Если она целая и здоровая, это означает счастье и здоровье на следующий год. Ещё одна традиция — запускание лодочек из скорлупок грецких орехов — на деревянной миске с водой узнают, кому повезёт в следующем году.
После ужина семья переходит к рождественской ёлке, где ждут подарки. По чешской традиции подарки приносит Малыш Иисус, а не Санта-Клаус или Дед Мороз. Дети с восторгом распаковывают подарки, а взрослые пьют глинтвейн и едят рождественское печенье. Вся атмосфера Рождества наполнена покоем, любовью и семейным уютом.`,
    vocabulary: [
      { czech: 'cukroví', russian: 'печенье (рождественское)' },
      { czech: 'Štědrý den', russian: 'Сочельник' },
      { czech: 'postní jídlo', russian: 'постная еда' },
      { czech: 'kapr', russian: 'карп' },
      { czech: 'koleda', russian: 'колядка' },
      { czech: 'mušle ořechu', russian: 'скорлупа ореха' },
      { czech: 'Ježíšek', russian: 'Малыш Иисус (чешский Дед Мороз)' },
      { czech: 'rodinná pohoda', russian: 'семейный уют' },
    ],
    questions: [
      {
        id: 'a2-20-q1',
        question: 'Когда в Чехии отмечается главный рождественский день?',
        options: ['23 декабря', '24 декабря', '25 декабря', '31 декабря'],
        correctAnswer: 1,
      },
      {
        id: 'a2-20-q2',
        question: 'Что означает гадание по скорлупе ореха?',
        options: ['Богатство', 'Здоровье и счастье', 'Любовь', 'Путешествие'],
        correctAnswer: 1,
      },
      {
        id: 'a2-20-q3',
        question: 'Кто приносит подарки детям по чешской традиции?',
        options: ['Дед Мороз', 'Санта-Клаус', 'Малыш Иисус', 'Волшебник'],
        correctAnswer: 2,
      },
      {
        id: 'a2-20-q4',
        question: 'Зачем ставят дополнительную тарелку на стол?',
        options: ['Для украшения', 'Для гостя, который может прийти', 'Для питомца', 'Это старая традиция без смысла'],
        correctAnswer: 1,
      },
    ],
  },
];
