import type { ReadingStory } from './readingStories';

export const readingStoriesB1B2: ReadingStory[] = [
  // ===================== B1 STORIES =====================

  // --- Story 1: Hledání práce ---
  {
    id: 'b1-01',
    level: 'B1',
    title: 'Hledání práce',
    titleRussian: 'Поиск работы',
    text: `Před třemi měsíci jsem se rozhodl, že si najdu novou práci. Mé předchozí zaměstnání se mi nelíbilo — plat byl nízký a kolegové byli neslušní. Začal jsem hledat na internetu. Každý den jsem prohlížel pracovní portály a posílal životopisy.

Po dvou týdnech jsem dostal pozvánku na pohovor do střední firmy, která prodává software. Byl jsem nervózní, ale připravil jsem si odpovědi na běžné otázky. Personalistka se mě ptala na mé zkušenosti, silné stránky a důvody, proč chci pracovat u nich. Odpovídal jsem upřímně a klidně.

Po týdnu mi zavolali a sdělili mi dobrou zprávu — dostal jsem místo! Nabídli mi dobrý plat, pět týdnů dovolené a flexibilní pracovní dobu. Moje nová práce mě moc baví. Kolegové jsou přátelští a pomáhají mi, když něco nevím.

Užívám si každý den v práci. Rád přicházím do kanceláře a vím, že jsem udělal správné rozhodnutí.`,
    textRussian: `Три месяца назад я решил, что найду себе новую работу. Моя предыдущая работа мне не нравилась — зарплата была низкой, а коллеги — невежливыми. Я начал искать в интернете. Каждый день просматривал сайты вакансий и отправлял резюме.

Через две недели я получил приглашение на собеседование в среднюю компанию, которая продаёт программное обеспечение. Я был нервным, но подготовил ответы на типичные вопросы. Кадровик спрашивала меня об опыте, сильных сторонах и причинах, почему я хочу у них работать. Я отвечал честно и спокойно.

Через неделю мне позвонили и сообщили хорошую новость — я получил место! Мне предложили хорошую зарплату, пять недель отпуска и гибкий график. Моя новая работа мне очень нравится. Коллеги дружелюбные и помогают, когда я чего-то не знаю.

Я наслаждаюсь каждым днём на работе. Мне нравится приходить в офис, и я знаю, что принял правильное решение.`,
    vocabulary: [
      { czech: 'zaměstnání', russian: 'работа, занятость' },
      { czech: 'životopis', russian: 'резюме' },
      { czech: 'pohovor', russian: 'собеседование' },
      { czech: 'nervózní', russian: 'нервный' },
      { czech: 'personalistka', russian: 'кадровик' },
      { czech: 'silná stránka', russian: 'сильная сторона' },
      { czech: 'flexibilní', russian: 'гибкий' },
    ],
    questions: [
      {
        id: 'b1-01-q1',
        question: 'Почему автор решил сменить работу?',
        options: ['Переехал в другой город', 'Низкая зарплата и грубые коллеги', 'Хотел работать из дома', 'Закончился контракт'],
        correctAnswer: 1,
      },
      {
        id: 'b1-01-q2',
        question: 'Как автор искал работу?',
        options: ['Через знакомых', 'В газете', 'На интернет-порталах', 'В центре занятости'],
        correctAnswer: 2,
      },
      {
        id: 'b1-01-q3',
        question: 'Что спросила кадровик на собеседовании?',
        options: ['О здоровье', 'Об опыте и сильных сторонах', 'О семейном положении', 'О хобби'],
        correctAnswer: 1,
      },
      {
        id: 'b1-01-q4',
        question: 'Сколько недель отпуска предложили?',
        options: ['Три недели', 'Четыре недели', 'Пять недель', 'Шесть недель'],
        correctAnswer: 2,
      },
      {
        id: 'b1-01-q5',
        question: 'Как автор чувствует себя на новой работе?',
        options: ['Ему скучно', 'Он устаёт', 'Ему очень нравится', 'Он хочет уйти'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 2: Stěhování ---
  {
    id: 'b1-02',
    level: 'B1',
    title: 'Stěhování',
    titleRussian: 'Переезд',
    text: `Minulý měsíc jsem se rozhodl přestěhovat. Můj starý byt byl příliš malý a hlučný. Potřeboval jsem větší prostor, protože jsem začal pracovat z domova. Hledal jsem nový byt tři týdny. Prohlížel jsem inzeráty na internetu a chodil na prohlídky.

Konečně jsem našel krásný byt v nové čtvrti. Má dvě pokoje, velkou kuchyň a balkon s výhledem do parku. Majitel byl velmi milý a souhlasil s mými podmínkami. podepsali jsme nájemní smlouvu na jeden rok.

Pak začalo nejhorší — stěhování. Musel jsem zabalit všechny své věci do krabic. Knihy měly nejvíce, měl jsem jich přes sto. Kamarádi mi pomohli s přesunem. V sobotu ráno jsme naložili krabice do auta a odjeli na novou adresu. Celý den jsme nosili věci nahoru do třetího patra.

Večer, když jsem všechno rozbalil, jsem si udělal čaj a sedl si na balkon. Nová čtvrť byla tichá a příjemná. Byl jsem unavený, ale šťastný. Teď mám svůj nový domov.`,
    textRussian: `В прошлом месяце я решил переехать. Моя старая квартира была слишком маленькой и шумной. Мне нужно было больше пространства, потому что я начал работать из дома. Я искал новую квартиру три недели. Просматривал объявления в интернете и ходил на просмотры.

Наконец я нашёл красивую квартиру в новом районе. В ней две комнаты, большая кухня и балкон с видом на парк. Хозяин был очень милым и согласился с моими условиями. Мы подписали договор аренды на один год.

Потом началось самое тяжёлое — переезд. Мне нужно было упаковать все свои вещи в коробки. Больше всего было книг, их у меня было больше ста. Друзья помогли мне с перевозкой. В субботу утром мы погрузили коробки в машину и поехали по новому адресу. Весь день мы носили вещи наверх на третий этаж.

Вечером, когда я всё распаковал, я сделал себе чай и сел на балкон. Новый район был тихим и приятным. Я был уставшим, но счастливым. Теперь у меня мой новый дом.`,
    vocabulary: [
      { czech: 'stěhování', russian: 'переезд' },
      { czech: 'inzerát', russian: 'объявление' },
      { czech: 'nájemní smlouva', russian: 'договор аренды' },
      { czech: 'zabalit', russian: 'упаковать' },
      { czech: 'krabice', russian: 'коробка' },
      { czech: 'rozebrat', russian: 'распаковать' },
      { czech: 'tichý', russian: 'тихий' },
    ],
    questions: [
      {
        id: 'b1-02-q1',
        question: 'Почему автор решил переехать?',
        options: ['Квартира была дорогой', 'Квартира была маленькой и шумной', 'Соседи ему не нравились', 'Он переехал в другой город'],
        correctAnswer: 1,
      },
      {
        id: 'b1-02-q2',
        question: 'Сколько комнат в новой квартире?',
        options: ['Одна', 'Две', 'Три', 'Четыре'],
        correctAnswer: 1,
      },
      {
        id: 'b1-02-q3',
        question: 'На какой срок подписали договор аренды?',
        options: ['На полгода', 'На один год', 'На два года', 'Без срока'],
        correctAnswer: 1,
      },
      {
        id: 'b1-02-q4',
        question: 'Что было самым сложным при переезде?',
        options: ['Поиск квартиры', 'Упаковка вещей', 'Подписание договора', 'Оплата аренды'],
        correctAnswer: 1,
      },
      {
        id: 'b1-02-q5',
        question: 'На каком этаже находится новая квартира?',
        options: ['На первом', 'На втором', 'На третьем', 'На четвёртом'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 3: Cyklovýlet ---
  {
    id: 'b1-03',
    level: 'B1',
    title: 'Cyklovýlet',
    titleRussian: 'Велосипедная поездка',
    text: `V létě jsem se vydal na cyklovýlet s kamarádem Markem. Vybrali jsme si trasu z Brna do Mikulova. Je to asi šedesát pět kilometrů podél řeky Dyje. Cesta vedla krásnou přírodou — políčky, vinicemi a lesy.

Ráno jsme vyjeli v sedm hodin. Počasí bylo ideální — slunečno, ale ne příliš horko. První zastávka byla v Ivančicích, kde jsme si dali kávu a koláč. Potom jsme pokračovali přes Věstonickou nádrž. Voda v jezeře byla modrá a kolem ní bylo plno ptáků.

Odpoledne jsme dorazili do Mikulova. Městečko je velmi pěkné — má zámecký kopec a úzké uličky. Ubytovali jsme se v kempu pod hradem. Večer jsme šli do restaurace a dali si moravská vína a nakonec guláš. Bylo to skvělé.

Druhý den jsme jeli zpět vlakem, protože jsme byli unavení z předchozího dne. Cyklovýlet byl nádherný a už se těším na další.`,
    textRussian: `Летом я отправился в велосипедную поездку с другом Мареком. Мы выбрали маршрут из Брно в Микулов. Это около шестидесяти пяти километров вдоль реки Дия. Дорога проходила через красивую природу — поля, виноградники и леса.

Утром мы выехали в семь часов. Погода была идеальной — солнечно, но не слишком жарко. Первая остановка была в Иванчицах, где мы выпили кофе и съели пирог. Потом мы продолжили путь через Вежоницкое водохранилище. Вода в озере была синей, и вокруг было много птиц.

Днём мы приехали в Микулов. Городок очень красивый — у него есть замковый холм и узкие улочки. Мы разместились в кемпинге под замком. Вечером мы пошли в ресторан, выпили моравские вина и заказали гуляш. Это было великолепно.

На следующий день мы вернулись на поезде, потому что устали с предыдущего дня. Велосипедная поездка была прекрасной, и я уже жду следующей.`,
    vocabulary: [
      { czech: 'cyklovýlet', russian: 'велосипедная поездка' },
      { czech: 'trasa', russian: 'маршрут' },
      { czech: 'vinice', russian: 'виноградник' },
      { czech: 'nádrž', russian: 'водохранилище' },
      { czech: 'ubytovat se', russian: 'разместиться' },
      { czech: 'kemp', russian: 'кемпинг' },
      { czech: 'zámecký kopec', russian: 'замковый холм' },
    ],
    questions: [
      {
        id: 'b1-03-q1',
        question: 'Какова длина маршрута?',
        options: ['Около 40 км', 'Около 65 км', 'Около 100 км', 'Около 130 км'],
        correctAnswer: 1,
      },
      {
        id: 'b1-03-q2',
        question: 'Где сделали первую остановку?',
        options: ['В Микулове', 'В Брно', 'В Иванчицах', 'У водохранилища'],
        correctAnswer: 2,
      },
      {
        id: 'b1-03-q3',
        question: 'Где они остановились на ночлег?',
        options: ['В гостинице', 'У друзей', 'В кемпинге', 'В хостеле'],
        correctAnswer: 2,
      },
      {
        id: 'b1-03-q4',
        question: 'Как они вернулись обратно?',
        options: ['На велосипедах', 'На автобусе', 'На поезде', 'На машине'],
        correctAnswer: 2,
      },
      {
        id: 'b1-03-q5',
        question: 'Какая была погода?',
        options: ['Дождливо', 'Облачно', 'Идеальная — солнечно, но не жарко', 'Очень жарко'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 4: Česká kuchyně ---
  {
    id: 'b1-04',
    level: 'B1',
    title: 'Česká kuchyně',
    titleRussian: 'Чешская кухня',
    text: `Když jsem přišel do Česka, nevěděl jsem vůbec vařit. Jídlo jsem si objednával v restauracích a rychlém občerstvení. To ale bylo drahé a nezdravé. Rozhodl jsem se naučit vařit česká jídla.

Můj kamarád Tomáš mi poradil, že začneme něčím jednoduchým — bramboračkou. Je to tradiční česká bramborová polévka s houbami. Ukázal mi recept a vařili jsme spolu. Polévka se povedla a chutnala skvěle.

Další jídlo, které jsem se naučil, byla svíčková na smetaně. Je to asi nejslavnější české jídlo. Maso se dlouho dusí a omáčka se dělá ze smetany, zeleniny a koření. Podává se s houskovými knedlíky, které jsem se také naučil dělat. Těsto na knedlíky musí být správně husté.

Teď vařím doma téměř každý den. Vaření mě baví a je to dobrý způsob, jak poznat českou kulturu. Mé oblíbené jídlo je už svíčková, ale rád dělám i smažený sýr a řízky.`,
    textRussian: `Когда я приехал в Чехию, я совсем не умел готовить. Еду я заказывал в ресторанах и фастфуде. Но это было дорого и нездорово. Я решил научиться готовить чешские блюда.

Мой друг Томаш посоветовал начать с чего-нибудь простого — брамборачки. Это традиционный чешский картофельный суп с грибами. Он показал мне рецепт, и мы готовили вместе. Суп получился и был великолепным на вкус.

Следующее блюдо, которому я научился, — свичкова на сметане. Это, пожалуй, самое знаменитое чешское блюдо. Мясо долго тушится, а соус делается из сметаны, овощей и специй. Подаётся с булочными кнедликами, которые я тоже научился делать. Тесто для кнедликов должно быть правильно густым.

Теперь я готовлю дома почти каждый день. Готовка мне нравится, и это хороший способ познакомиться с чешской культурой. Моё любимое блюдо — это свичкова, но я также люблю делать жареный сыр и отбивные.`,
    vocabulary: [
      { czech: 'bramboračka', russian: 'картофельный суп с грибами' },
      { czech: 'svíčková na smetaně', russian: 'зажарка в сметане (гуляш)' },
      { czech: 'dusit', russian: 'тушить' },
      { czech: 'omáčka', russian: 'соус' },
      { czech: 'houskový knedlík', russian: 'булочный кнедлик' },
      { czech: 'těsto', russian: 'тесто' },
      { czech: 'smažený sýr', russian: 'жареный сыр' },
    ],
    questions: [
      {
        id: 'b1-04-q1',
        question: 'Почему автор решил научиться готовить?',
        options: ['Ему было скучно', 'Рестораны были дороги и нездоровы', 'Он хотел стать поваром', 'Так посоветовала мама'],
        correctAnswer: 1,
      },
      {
        id: 'b1-04-q2',
        question: 'С какого блюда они начали?',
        options: ['Свицкова', 'Брамборачка', 'Жареный сыр', 'Отбивные'],
        correctAnswer: 1,
      },
      {
        id: 'b1-04-q3',
        question: 'Из чего делается соус для свичковой?',
        options: ['Из томатов', 'Из сметаны, овощей и специй', 'Из муки и воды', 'Из бульона'],
        correctAnswer: 1,
      },
      {
        id: 'b1-04-q4',
        question: 'С чем подаётся свичкова?',
        options: ['С рисом', 'С картофелем', 'С макаронами', 'С кнедликами'],
        correctAnswer: 3,
      },
      {
        id: 'b1-04-q5',
        question: 'Какое любимое блюдо автора?',
        options: ['Брамборачка', 'Свицкова на сметане', 'Жареный сыр', 'Отбивные'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 5: Recyklace ---
  {
    id: 'b1-05',
    level: 'B1',
    title: 'Recyklace',
    titleRussian: 'Переработка',
    text: `V poslední době si všímám, že lidé více myslí na životní prostředí. V Česku je třídění odpadu velmi běžné. V každém městě jsou barevné kontejnery — modré na papír, zelené na sklo, žluté na plasty a bílé na kartony.

Doma máme čtyři koše a každý člen rodiny třídit odpad naučil. Plastové láhve mačkáme, abychom ušetřili místo. Papír skládáme rovně. Sklo třídíme podle barvy — bílé a barevné. Bioodpad dáváme do hnědé nádoby na kompost.

Nedávno jsem se zúčastnil dobrovolnické akce — úklidu řeky. S kamarády jsme šli k řece a sbírali odpadky, které tam lidé zanechali. Nasbírali jsme několik pytlů plastů, plechovek a láhví. Bylo mi smutno, když jsem viděl, jak lidé znečišťují přírodu.

Doma se snažíme omezit plasty. Nakupujeme s látkovými taškami a používáme znovu láhve na vodu. Malé kroky, ale myslím, že každý může přispět k ochraně planety.`,
    textRussian: `В последнее время я замечаю, что люди больше думают об окружающей среде. В Чехии сортировка мусора очень распространена. В каждом городе есть цветные контейнеры — синие для бумаги, зелёные для стекла, жёлтые для пластика и белые для картона.

Дома у нас четыре корзины, и каждый член семьи научился сортировать мусор. Пластиковые бутылки мы сплющиваем, чтобы сэкономить место. Бумагу складываем ровно. Стекло сортируем по цвету — белое и цветное. Пищевые отходы складываем в коричневую ёмкость для компоста.

Недавно я участвовал в волонтёрской акции — уборке реки. С друзьями мы пошли к реке и собирали мусор, который люди там оставили. Мы собрали несколько мешков пластика, жестяных банок и бутылок. Мне было грустно видеть, как люди загрязняют природу.

Дома мы стараемся сократить использование пластика. Ходим за покупками с тканевыми сумками и повторно используем бутылки для воды. Маленькие шаги, но я думаю, что каждый может внести вклад в защиту планеты.`,
    vocabulary: [
      { czech: 'životní prostředí', russian: 'окружающая среда' },
      { czech: 'třídit odpad', russian: 'сортировать мусор' },
      { czech: 'kontejner', russian: 'контейнер' },
      { czech: 'plast', russian: 'пластик' },
      { czech: 'bioodpad', russian: 'пищевые отходы' },
      { czech: 'kompost', russian: 'компост' },
      { czech: 'znečišťovat', russian: 'загрязнять' },
    ],
    questions: [
      {
        id: 'b1-05-q1',
        question: 'Для чего предназначен синий контейнер?',
        options: ['Для стекла', 'Для пластика', 'Для бумаги', 'Для картона'],
        correctAnswer: 2,
      },
      {
        id: 'b1-05-q2',
        question: 'Что делают с пластиковыми бутылками перед выбросом?',
        options: ['Моют', 'Сплющивают', 'Разрезают', 'Сжигают'],
        correctAnswer: 1,
      },
      {
        id: 'b1-05-q3',
        question: 'В какой акции участвовал автор?',
        options: ['Посадка деревьев', 'Уборка реки', 'Очистка парка', 'Покраска забора'],
        correctAnswer: 1,
      },
      {
        id: 'b1-05-q4',
        question: 'Что автор делает, чтобы сократить пластик?',
        options: ['Покупает меньше воды', 'Использует тканевые сумки', 'Не пьёт из бутылок', 'Выбрасывает пластик в другом месте'],
        correctAnswer: 1,
      },
      {
        id: 'b1-05-q5',
        question: 'Какой контейнер для картона?',
        options: ['Синий', 'Зелёный', 'Жёлтый', 'Белый'],
        correctAnswer: 3,
      },
    ],
  },

  // --- Story 6: Nový soused ---
  {
    id: 'b1-06',
    level: 'B1',
    title: 'Nový soused',
    titleRussian: 'Новый сосед',
    text: `Před dvěma měsíci se do vedlejšího bytu přistěhoval nový soused. Jmenuje se Ahmed a pochází ze Sýrie. Když jsem ho potkal na chodbě, usmál se a řekl „Dobrý den" v dokonalé češtině. Byl jsem překvapený.

Následující týden jsem ho pozval na kávu. Povídali jsme si o jeho životě. Ahmed je lékař. V Sýrii pracoval v nemocnici, ale musel odejít kvůli válce. V Česku žije už dva roky. Nejprve bydlel v azylovém domě, chodil na kurzy češtiny a teď pracuje v nemocnici v Brně.

Ahmed mi ukázal fotky své rodiny. Má ženu a dvě děti, kteří zatím zůstali v Turecku. Doufá, že se k němu brzy připojí. Je vidět, že mu chybí, ale nevzdává se.

Pozval mě na tradiční syrskou večeři. Uvařil kibbeh — mleté maso s bulgure — a hummus. Bylo to výborné. Ahmed je velmi přátelský a vřelý člověk. Jsem rád, že mám takového souseda.`,
    textRussian: `Два месяца назад в соседнюю квартиру переехал новый сосед. Его зовут Ахмед, и он из Сирии. Когда я встретил его в коридоре, он улыбнулся и сказал «Добрый день» на идеальном чешском. Я был удивлён.

На следующей неделе я пригласил его на кофе. Мы поговорили о его жизни. Ахмед — врач. В Сирии он работал в больнице, но был вынужден уехать из-за войны. В Чехии он живёт уже два года. Сначала он жил в приюте для беженцев, ходил на курсы чешского, а теперь работает в больнице в Брно.

Ахмед показал мне фотографии своей семьи. У него жена и двое детей, которые пока остались в Турции. Он надеется, что они скоро к нему присоединятся. Видно, что он скучает по ним, но не сдаётся.

Он пригласил меня на традиционный сирийский ужин. Он приготовил киббех — фарш с булгуром — и хумус. Это было восхитительно. Ахмед — очень дружелюбный и тёплый человек. Я рад, что у меня такой сосед.`,
    vocabulary: [
      { czech: 'soused', russian: 'сосед' },
      { czech: 'pocházet', russian: 'происходить, быть родом' },
      { czech: 'lékař', russian: 'врач' },
      { czech: 'válka', russian: 'война' },
      { czech: 'azylový dům', russian: 'приют для беженцев' },
      { czech: 'přátelský', russian: 'дружелюбный' },
      { czech: 'vřelý', russian: 'тёплый, сердечный' },
    ],
    questions: [
      {
        id: 'b1-06-q1',
        question: 'Откуда новый сосед?',
        options: ['Из Турции', 'Из Ирака', 'Из Сирии', 'Из Афганистана'],
        correctAnswer: 2,
      },
      {
        id: 'b1-06-q2',
        question: 'Кем работает Ахмед?',
        options: ['Учителем', 'Инженером', 'Врачом', 'Переводчиком'],
        correctAnswer: 2,
      },
      {
        id: 'b1-06-q3',
        question: 'Почему Ахмед покинул свою страну?',
        options: ['Из-за войны', 'Из-за работы', 'Из-за учёбы', 'Из-за семьи'],
        correctAnswer: 0,
      },
      {
        id: 'b1-06-q4',
        question: 'Где находится семья Ахмеда сейчас?',
        options: ['В Сирии', 'В Чехии', 'В Германии', 'В Турции'],
        correctAnswer: 3,
      },
      {
        id: 'b1-06-q5',
        question: 'Что Ахмед приготовил на ужин?',
        options: ['Свицкову', 'Киббех и хумус', 'Пиццу', 'Плов'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 7: Univerzita ---
  {
    id: 'b1-07',
    level: 'B1',
    title: 'Univerzita',
    titleRussian: 'Университет',
    text: `Studuji na Masarykově univerzitě v Brně. Už jsem ve třetím ročníku a studuji ekonomii. Studentský život je zajímavý, ale náročný.

Každý týden mám asi patnáct hodin přednášek a seminářů. Přednášky jsou v velkých učebnách na dvě stě studentů. Semináře jsou menší — jen dvacet studentů, a tam více diskutujeme. Nejoblíbenější předmět je statistika, protože vyučující vysvětluje všechno srozumitelně.

Bydlím na kolejích ve čtvrti Vinohrady. Pokoj je malý, ale stačí. Sdílím kuchyň a koupelnu se třemi dalšími studenty. Ze začátku to bylo těžké, ale teď jsme dobří přátelé. Společně vaříme a sledujeme filmy.

Nejtěžší jsou zkouškové období. Každý semestr mám čtyři až pět zkoušek. Musím se hodně učit — někdy i celé dny v knihovně. Ale když dostanu známku, cítím velkou úlevu.

Po studiu chci pracovat v bance nebo ve firmě. Věřím, že se mi to podaří.`,
    textRussian: `Я учусь в Масариковом университете в Брно. Я уже на третьем курсе и изучаю экономику. Студенческая жизнь интересная, но demanding.

Каждую неделю у меня около пятнадцати часов лекций и семинаров. Лекции проходят в больших аудиториях на двести студентов. Семинары меньше — только двадцать студентов, и там мы больше обсуждаем. Любимый предмет — статистика, потому что преподаватель объясняет всё понятно.

Я живу в общежитии в районе Винограды. Комната маленькая, но достаточная. Я делю кухню и ванную с тремя другими студентами. Поначалу было тяжело, но теперь мы хорошие друзья. Вместе готовим и смотрим фильмы.

Самое сложное — экзаменационные периоды. Каждый семестр у меня четыре-пять экзаменов. Мне нужно много учиться — иногда целыми днями в библиотеке. Но когда получаю оценку, чувствую большое облегчение.

После учёбы хочу работать в банке или компании. Верю, что у меня получится.`,
    vocabulary: [
      { czech: 'ročník', russian: 'курс' },
      { czech: 'přednáška', russian: 'лекция' },
      { czech: 'seminář', russian: 'семинар' },
      { czech: 'koleje', russian: 'общежитие' },
      { czech: 'zkouškové období', russian: 'экзаменационный период' },
      { czech: 'úleva', russian: 'облегчение' },
      { czech: 'známka', russian: 'оценка' },
    ],
    questions: [
      {
        id: 'b1-07-q1',
        question: 'На каком курсе учится автор?',
        options: ['На первом', 'На втором', 'На третьем', 'На четвёртом'],
        correctAnswer: 2,
      },
      {
        id: 'b1-07-q2',
        question: 'Какой любимый предмет автора?',
        options: ['Математика', 'Статистика', 'Экономика', 'История'],
        correctAnswer: 1,
      },
      {
        id: 'b1-07-q3',
        question: 'С кем автор делит кухню и ванную?',
        options: ['С одним студентом', 'С двумя студентами', 'С тремя студентами', 'Живёт один'],
        correctAnswer: 2,
      },
      {
        id: 'b1-07-q4',
        question: 'Сколько экзаменов каждый семестр?',
        options: ['Два-три', 'Четыре-пять', 'Шесть-семь', 'Восемь'],
        correctAnswer: 1,
      },
      {
        id: 'b1-07-q5',
        question: 'Где автор хочет работать после учёбы?',
        options: ['В школе', 'В банке или компании', 'В больнице', 'В ресторане'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 8: Cizí jazyky ---
  {
    id: 'b1-08',
    level: 'B1',
    title: 'Cizí jazyky',
    titleRussian: 'Иностранные языки',
    text: `Už od dětství mě zajímaly cizí jazyky. Na základní škole jsem začal učit angličtinu. Byl jsem na tom dost dobře — mluvil jsem plynule a četl knihy v angličtině. Na střední škole jsem přidal němčinu, protože Německo je blízko Česka a mnoho firem hledá lidi, kteří umí německy.

Když jsem v osmnácti letech poprvé vyjel do zahraničí, uvědomil jsem si, jak důležité jsou jazyky. V Londýně jsem se bez angličtiny nedokázal vůbec orientovat. Na nádraží, v restauraci, v obchodě — všude jsem potřeboval angličtinu.

Teď se učím češtinu, protože žiju v Česku. Čeština je těžká — gramatika je složitá a máme sedm pádů. Ale postupně se zlepšuji. Už dokážu vést běžnou konverzaci, číst noviny a sledovat filmy s titulky.

Myslím, že každý by se měl učit aspoň jeden cizí jazyk. Otevírá to dveře do nového světa, umožňuje cestovat a poznávat jiné kultury. Jazyk není jen slova — je to způsob myšlení.`,
    textRussian: `С детства меня интересовели иностранные языки. В начальной школе я начал учить английский. У меня было довольно хорошо — я говорил бегло и читал книги на английском. В средней школе я добавил немецкий, потому что Германия рядом с Чехией и многие компании ищут людей, знающих немецкий.

Когда в восемнадцать лет я впервые поехал за границу, я осознал, насколько важны языки. В Лондоне без английского я вообще не мог ориентироваться. На вокзале, в ресторане, в магазине — везде мне нужен был английский.

Теперь я учу чешский, потому что живу в Чехии. Чешский сложный — грамматика трудная, у нас семь падежей. Но я постепенно улучшаюсь. Уже могу вести обычную беседу, читать газеты и смотреть фильмы с субтитрами.

Я думаю, что каждый должен учить хотя бы один иностранный язык. Это открывает двери в новый мир, позволяет путешествовать и знакомиться с другими культурами. Язык — это не только слова, это образ мышления.`,
    vocabulary: [
      { czech: 'cizí jazyk', russian: 'иностранный язык' },
      { czech: 'plynný', russian: 'беглый' },
      { czech: 'orientovat se', russian: 'ориентироваться' },
      { czech: 'gramatika', russian: 'грамматика' },
      { czech: 'pád', russian: 'падеж' },
      { czech: 'konverzace', russian: 'беседа, разговор' },
      { czech: 'titulky', russian: 'субтитры' },
    ],
    questions: [
      {
        id: 'b1-08-q1',
        question: 'С какого языка начал автор?',
        options: ['С немецкого', 'С русского', 'С английского', 'С французского'],
        correctAnswer: 2,
      },
      {
        id: 'b1-08-q2',
        question: 'Почему автор выучил немецкий?',
        options: ['Нравится Германия', 'Германия рядом и нужен на работе', 'Родители попросили', 'Легкий язык'],
        correctAnswer: 1,
      },
      {
        id: 'b1-08-q3',
        question: 'Сколько падежей в чешском языке?',
        options: ['Пять', 'Шесть', 'Семь', 'Восемь'],
        correctAnswer: 2,
      },
      {
        id: 'b1-08-q4',
        question: 'В каком городе автор понял важность языков?',
        options: ['В Париже', 'В Берлине', 'В Лондоне', 'В Вене'],
        correctAnswer: 2,
      },
      {
        id: 'b1-08-q5',
        question: 'Что автор умеет делать на чешском?',
        options: ['Только читать', 'Вести беседу, читать, смотреть фильмы с субтитрами', 'Только писать', 'Только говорить'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 9: Svatba ---
  {
    id: 'b1-09',
    level: 'B1',
    title: 'Svatba',
    titleRussian: 'Свадьба',
    text: `Minulý měsíc jsem byl na svatbě mého kamaráda Petra. Svatba se konala v malém kostele ve vesnici na Moravě. Bylo to krásné a dojemné.

Nejprve proběhl obřad v kostele. Nevěsta měla bílé šaty a ženich oblek. Mluvil farář a mladý pár si vyměnil prstýnky. Poté zazněla svatební hudba a hosté tleskali. Bylo mi dojemno, když vidím, jak se Petr dívá na svou nevěstu.

Po obřadu jsme všichni šli do restaurace, kde probíhala svatební hostina. Stoly byly krásně prostřené a na každém stole byly květiny a svíčky. Jídlo bylo vynikající — polévka, hlavní chod, dezert a spousta vína.

Po jídle přišla zábava. Hrála kapela a lidé tancovali. Tradicí je, že ženich musí probít talíř — je to symbol štěstí. Pak hosté házeli mince a rýže na mladý pár. Večer bylo ještě programu — kvíz o páru, soutěže a taneční floor.

Svatba skončila kolem půlnoci. Byl jsem unavený, ale velmi šťastný. Petr a jeho žena vypadali spokojeně.`,
    textRussian: `В прошлом месяце я был на свадьбе моего друга Петра. Свадьба состоялась в маленькой церкви в деревне в Моравии. Это было красиво и трогательно.

Сначала прошла церемония в церкви. Невеста была в белом платье, а жених — в костюме. Говорил священник, и молодожёны обменялись кольцами. Потом зазвучала свадебная музыка, и гости хлопали. Мне было трогательно видеть, как Петр смотрит на свою невесту.

После церемонии все пошли в ресторан, где проходил свадебный пир. Столы были красиво накрыты, и на каждом столе были цветы и свечи. Еда была превосходной — суп, главное блюдо, десерт и много вина.

После еды началось веселье. Играла группа, и люди танцевали. Традиция — жених должен разбить тарелку — это символ счастья. Потом гости бросали монеты и рис на молодожёнов. Вечером было ещё развлечений — викторина о паре, конкурсы и танцпол.

Свадьба закончилась около полуночи. Я был уставшим, но очень счастливым. Петр и его жена выглядели довольными.`,
    vocabulary: [
      { czech: 'svatba', russian: 'свадьба' },
      { czech: 'obřad', russian: 'церемония' },
      { czech: 'nevěsta', russian: 'невеста' },
      { czech: 'ženich', russian: 'жених' },
      { czech: 'hostina', russian: 'пир, угощение' },
      { czech: 'svatební tradice', russian: 'свадебная традиция' },
      { czech: 'dojemný', russian: 'трогательный' },
    ],
    questions: [
      {
        id: 'b1-09-q1',
        question: 'Где проходила свадьба?',
        options: ['В городе', 'В костеле в деревне на Мораве', 'На пляже', 'В ресторане'],
        correctAnswer: 1,
      },
      {
        id: 'b1-09-q2',
        question: 'Что жених должен разбить по традиции?',
        options: ['Бокал', 'Тарелку', 'Зеркало', 'Цветочный горшок'],
        correctAnswer: 1,
      },
      {
        id: 'b1-09-q3',
        question: 'Что гости бросали на молодожёнов?',
        options: ['Цветы', 'Монеты и рис', 'Конфетти', 'Бумажки'],
        correctAnswer: 1,
      },
      {
        id: 'b1-09-q4',
        question: 'Что происходило после еды?',
        options: ['Все разошлись', 'Началось веселье с музыкой и танцами', 'Гости ушли домой', 'Обед повторили'],
        correctAnswer: 1,
      },
      {
        id: 'b1-09-q5',
        question: 'Во сколько закончилась свадьба?',
        options: ['В 20:00', 'В 22:00', 'Около полуночи', 'В 2:00'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 10: Zdravý život ---
  {
    id: 'b1-10',
    level: 'B1',
    title: 'Zdravý život',
    titleRussian: 'Здоровый образ жизни',
    text: `Před rokem jsem se rozhodl změnit svůj životní styl. Dříve jsem moc nesportoval, jedl rychlé občerstvení a měl jsem nadváhu. Lékař mi řekl, že si musím dát pozor na zdraví.

Začal jsem běhat. Nejprve to bylo těžké — po pěti minutách jsem byl zadýchaný. Ale nepřestal jsem. Každý týden jsem přidával pár minut. Po třech měsících jsem dokázal uběhnout pět kilometrů. Teď běhám třikrát týdně a mám z toho velkou radost.

Změnil jsem i stravování. Přestal jsem jíst fast food a začal vařit doma. Jím více zeleniny, ovoce a celozrnného chleba. Omezil jsem cukr a sladké nápoje. Místo coly piju vodu a bylinné čaje.

Výsledky se brzy ukázaly. Zhubl jsem deset kilogramů, mám více energie a cítím se mnohem lépe. Spím lépe a ráno se budím svěží. Mí přátelé si všimli změny a někteří se přidali ke mně.

Zdravý životní styl není těžký. Stačí začít pomalu a nedávat se.`,
    textRussian: `Год назад я решил изменить свой образ жизни. Раньше я мало занимался спортом, ел фастфуд и имел лишний вес. Врач сказал мне, что мне нужно следить за здоровьем.

Я начал бегать. Сначала было тяжело — через пять минут я уже запыхался. Но я не сдался. Каждую неделю я добавлял по несколько минут. Через три месяца я смог пробежать пять километров. Теперь я бегаю три раза в неделю и получаю от этого большое удовольствие.

Я изменил и питание. Перестал есть фастфуд и начал готовить дома. Я ем больше овощей, фруктов и цельнозернового хлеба. Сократил сахар и сладкие напитки. Вместо колы пью воду и травяные чаи.

Результаты скоро проявились. Я похудел на десять килограммов, у меня больше энергии, и я чувствую себя намного лучше. Я сплю лучше и просыпаюсь свежим утром. Мои друзья заметили изменения, и некоторые присоединились ко мне.

Здоровый образ жизни — несложный. Главное — начать медленно и не сдаваться.`,
    vocabulary: [
      { czech: 'životní styl', russian: 'образ жизни' },
      { czech: 'nadváha', russian: 'лишний вес' },
      { czech: 'běhat', russian: 'бегать' },
      { czech: 'zadýchaný', russian: 'запыхавшийся' },
      { czech: 'stravování', russian: 'питание' },
      { czech: 'celozrnný', russian: 'цельнозерновой' },
      { czech: 'zhubnout', russian: 'похудеть' },
    ],
    questions: [
      {
        id: 'b1-10-q1',
        question: 'Почему автор решил изменить образ жизни?',
        options: ['Хотел стать спортсменом', 'Врач посоветовал следить за здоровьем', 'Друзья уговорили', 'Это было модно'],
        correctAnswer: 1,
      },
      {
        id: 'b1-10-q2',
        question: 'Сколько километров автор смог пробежать через три месяца?',
        options: ['Три километра', 'Пять километров', 'Десять километров', 'Пятнадцать километров'],
        correctAnswer: 1,
      },
      {
        id: 'b1-10-q3',
        question: 'Что автор пьёт вместо колы?',
        options: ['Сок', 'Кофе', 'Воду и травяные чаи', 'Молоко'],
        correctAnswer: 2,
      },
      {
        id: 'b1-10-q4',
        question: 'Сколько килограммов автор похудел?',
        options: ['Пять', 'Десять', 'Пятнадцать', 'Двадцать'],
        correctAnswer: 1,
      },
      {
        id: 'b1-10-q5',
        question: 'Как часто автор бегает сейчас?',
        options: ['Один раз в неделю', 'Два раза в неделю', 'Три раза в неделю', 'Каждый день'],
        correctAnswer: 2,
      },
    ],
  },

  // ===================== B2 STORIES =====================

  // --- Story 11: Budoucnost dopravy ---
  {
    id: 'b2-01',
    level: 'B2',
    title: 'Budoucnost dopravy',
    titleRussian: 'Будущее транспорта',
    text: `Ve městech se doprava rychle mění. Elektromobily jsou stále populárnější a vláda podporuje jejich nákup dotacemi. Na českých silnicích je stále více nabíjecích stanic, ale infrastruktura ještě není dokonalá. Mnoho lidí váhá, protože elektromobil je drahý a baterie se nedojezdí tak daleko jako benzínové auto.

Odborníci se shodují, že budoucnost patří spíše hromadné dopravě. V Praze se chystá rozšíření metra a nové tramvajové linky. Moderní města investují do cyklostezek, sdílených kol a elektrokoloběžek. Videa ukazují, že mladí lidé dnes často vůbec nevlastní auto — používají kombinaci MHD, sdílených prostředků a chůze.

Problematická je doprava na venkově. Tam je veřejná doprava omezená a auta jsou nutností. Pokud chceme snížit emise, musíme najít řešení i pro venkovské oblasti. Některé obce experimentují s autobusy na objednávku nebo sdílenými elektromobily pro místní obyvatele.

Doprava ovlivňuje nejen životní prostředí, ale i kvalitu života ve městech. Méně aut znamená čistší vzduch, tišší ulice a bezpečnější prostor pro chodce. Otázka zní, jestli jsme ochotní změnit své návyky pro lepší budoucnost.`,
    textRussian: `Транспорт в городах быстро меняется. Электромобили становятся всё популярнее, и правительство поддерживает их покупку субсидиями. На чешских дорогах появляется всё больше зарядных станций, но инфраструктура ещё не совершенна. Многие люди сомневаются, потому что электромобиль дорогой, а батарея не позволяет проехать так далеко, как бензиновый автомобиль.

Эксперты сходятся во мнении, что будущее принадлежит скорее общественному транспорту. В Праге планируется расширение метро и новых трамвайных линий. Современные города инвестируют в велодорожки,-shared велосипеды и электросамокаты. Данные показывают, что молодые люди сегодня часто вообще не имеют автомобиля — они используют комбинацию общественного транспорта, shared средств и ходьбы.

Проблематичен транспорт в сельской местности. Там общественный транспорт ограничен, и автомобили — необходимость. Если мы хотим снизить выбросы, мы должны найти решение и для сельских районов. Некоторые общины экспериментируют с автобусами по заказу или общими электромобилями для местных жителей.

Транспорт влияет не только на окружающую среду, но и на качество жизни в городах. Меньше машин означает более чистый воздух, более тихие улицы и более безопасное пространство для пешеходов. Вопрос в том, готовы ли мы изменить свои привычки ради лучшего будущего.`,
    vocabulary: [
      { czech: 'elektromobil', russian: 'электромобиль' },
      { czech: 'dotace', russian: 'субсидия, дотация' },
      { czech: 'nabíjecí stanice', russian: 'зарядная станция' },
      { czech: 'infrastruktura', russian: 'инфраструктура' },
      { czech: 'hromadná doprava', russian: 'общественный транспорт' },
      { czech: 'emise', russian: 'выбросы' },
      { czech: 'sdílený prostředek', russian: 'shared средство передвижения' },
      { czech: 'návyk', russian: 'привычка' },
    ],
    questions: [
      {
        id: 'b2-01-q1',
        question: 'Почему многие люди сомневаются покупать электромобиль?',
        options: ['Они не любят новый дизайн', 'Высокая цена и ограниченный запас хода', 'Нет парковочных мест', 'Слишком шумные'],
        correctAnswer: 1,
      },
      {
        id: 'b2-01-q2',
        question: 'Что, по мнению экспертов, является будущим транспорта?',
        options: ['Личные электромобили', 'Общественный транспорт', 'Самолёты', 'Такси'],
        correctAnswer: 1,
      },
      {
        id: 'b2-01-q3',
        question: 'Какая проблема существует в сельской местности?',
        options: ['Слишком много машин', 'Ограниченный общественный транспорт', 'Дорогие билеты', 'Плохие дороги'],
        correctAnswer: 1,
      },
      {
        id: 'b2-01-q4',
        question: 'Что не означает меньше машин в городе?',
        options: ['Чище воздух', 'Тише улицы', 'Больше рабочих мест', 'Безопаснее для пешеходов'],
        correctAnswer: 2,
      },
      {
        id: 'b2-01-q5',
        question: 'Что экспериментируют некоторые общины в сельской местности?',
        options: ['Строят метро', 'Автобусы по заказу и общие электромобили', 'Запрещают все автомобили', 'Строят аэропорты'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 12: Vzdělávání ---
  {
    id: 'b2-02',
    level: 'B2',
    title: 'Vzdělávání',
    titleRussian: 'Образование',
    text: `Český vzdělávací systém prochází zásadními změnami. Pandemie ukázala, že tradiční způsob výuky není jediný možný. Online výuka, která byla původně jen nouzovým řešením, se stala běžnou součástí vzdělávání. Mnoho univerzit dnes nabízí hybridní programy, kde si studenti vybírají, zda chtějí docházet osobně nebo se učit doma.

Kritici upozorňují, že online výuka má své nevýhody. Chybí osobní kontakt s vyučujícím a spolužáky. Studenti se cítí izolovaně a motivace klesá. Na druhé straně online výuka umožňuje studovat lidem, kteří by jinak neměli možnost — například rodičům na mateřské dovolené, lidem s postižením nebo těm, kteří žijí na venkově daleko od škol.

Reforma se týká také obsahu výuky. Moderní svět vyžaduje nové dovednosti — digitální gramotnost, kritické myšlení a schopnost učit se celý život. Školy by neměly jen předávat fakta, ale učit studenty, jak samostatně řešit problémy.

Otázka zní, jestli je český systém připraven na tyto změny. Učitelé potřebují lepší vzdělávání a školy potřebují moderní vybavení. Vzdělávání je investice do budoucnosti a jako taková si zaslouží dostatečné financování.`,
    textRussian: `Чешская система образования проходит фундаментальные изменения. Пандемия показала, что традиционный способ обучения — не единственный возможный. Онлайн-обучение, которое изначально было лишь экстренным решением, стало обычной частью образования. Многие университеты сегодня предлагают гибридные программы, где студенты могут выбирать, ходить лично или учиться дома.

Критики указывают, что онлайн-обучение имеет свои недостатки. Отсутствует личный контакт с преподавателем и одноклассниками. Студенты чувствуют себя изолированными, и мотивация падает. С другой стороны, онлайн-обучение позволяет учиться тем, кто иначе не имел бы возможности — например, родителям в декрете, людям с инвалидностью или тем, кто живёт в сельской местности далеко от школ.

Реформа касается также содержания обучения. Современный мир требует новых навыков — цифровой грамотности, критического мышления и способности учиться всю жизнь. Школы не должны просто передавать факты, а должны учить студентов самостоятельно решать проблемы.

Вопрос в том, готова ли чешская система к этим изменениям. Учителям нужно лучшее образование, а школам — современное оборудование. Образование — это инвестиция в будущее, и как таковая оно заслуживает достаточного финансирования.`,
    vocabulary: [
      { czech: 'vzdělávací systém', russian: 'система образования' },
      { czech: 'online výuka', russian: 'онлайн-обучение' },
      { czech: 'hybridní program', russian: 'гибридная программа' },
      { czech: 'izolovaný', russian: 'изолированный' },
      { czech: 'digitální gramotnost', russian: 'цифровая грамотность' },
      { czech: 'kritické myšlení', russian: 'критическое мышление' },
      { czech: 'financování', russian: 'финансирование' },
      { czech: 'reforma', russian: 'реформа' },
    ],
    questions: [
      {
        id: 'b2-02-q1',
        question: 'Что пандемия показала в отношении образования?',
        options: ['Школы не нужны', 'Традиционный способ обучения — не единственный', 'Все хотят учиться онлайн', 'Учителя не нужны'],
        correctAnswer: 1,
      },
      {
        id: 'b2-02-q2',
        question: 'Какая проблема онлайн-обучения, по мнению критиков?',
        options: ['Слишком дорого', 'Отсутствие личного контакта и изоляция', 'Плохой интернет', 'Мало предметов'],
        correctAnswer: 1,
      },
      {
        id: 'b2-02-q3',
        question: 'Кому онлайн-обучение даёт новые возможности?',
        options: ['Только детям', 'Родителям в декрете, людям с инвалидностью', 'Только пожилым', 'Только учителям'],
        correctAnswer: 1,
      },
      {
        id: 'b2-02-q4',
        question: 'Какие навыки требует современный мир?',
        options: ['Только математику', 'Цифровую грамотность и критическое мышление', 'Только иностранные языки', 'Только физические навыки'],
        correctAnswer: 1,
      },
      {
        id: 'b2-02-q5',
        question: 'Чего, по мнению автора, нуждаются учителя и школы?',
        options: ['Больше выходных', 'Лучшее образование и современное оборудование', 'Меньше учеников', 'Выше зарплату'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 13: Migrantka ---
  {
    id: 'b2-03',
    level: 'B2',
    title: 'Migrantka',
    titleRussian: 'Мигрантка',
    text: `Olena přijela do Česka z Ukrajiny v březnu 2022. Když začala válka, musela s dcerami náhle opustit svůj domov v Charkově. Její manžel zůstal v Ukrajině a bojuje. Cesta do Česka byla dlouhá a vyčerpávající — strávili tři dny ve vlaku s mnoha dalšími uprchlíky.

V Praze je čekali dobrovolníci, kteří jim nabídli ubytování a jídlo. Olena říká, že český lid byl velmi vstřícný a pomáhal jim v těžké situaci. První týdny byly nejtěžší — nevěděla, co bude dál, a měla strach o svého manžela.

Postupně se začala adaptoval. Navštěvovala kurzy češtiny a našla práci v pekárně. Její dcery začaly chodit do české školy. Nejstarší se rychle naučila česky a udělala si nové kamarády. Mladší měla zpočátku potíže — plakala a nechtěla jít do školy. Ale učitelka jí pomohla a teď se tam cítí dobře.

Olena se snaží žít normální život, ale každý den myslí na Ukrajinu. Volá manželovi, sleduje zprávy a modlí se, aby válka skončila. Říká, že Česko se stalo jejím druhým domovem, ale její srdce zůstává na Ukrajině. Doufá, že se jednou vrátí.`,
    textRussian: `Олена приехала в Чехию из Украины в марте 2022 года. Когда началась война, она должна была с дочерьми внезапно покинуть свой дом в Харькове. Её муж остался в Украине и воюет. Дорога в Чехию была долгой и изматывающей — они провели три дня в поезде со многими другими беженцами.

В Праге их ждали волонтёры, которые предложили им жильё и еду. Олена говорит, что чешский народ был очень welcoming и помог им в трудной ситуации. Первые недели были самыми тяжёлыми — она не знала, что будет дальше, и боялась за своего мужа.

Постепенно она начала адаптироваться. Посещала курсы чешского и нашла работу в пекарне. Её дочери пошли в чешскую школу. Старшая быстро выучила чешский и завела новых друзей. У младшей сначала были трудности — она плакала и не хотела идти в школу. Но учительница ей помогла, и теперь она чувствует себя там хорошо.

Олена старается жить нормальной жизнью, но каждый день думает об Украине. Звонит мужу, следит за новостями и молится, чтобы война закончилась. Она говорит, что Чехия стала её вторым домом, но её сердце осталось в Украине. Она надеется однажды вернуться.`,
    vocabulary: [
      { czech: 'uprchlík', russian: 'беженец' },
      { czech: 'vyčerpávající', russian: 'изматывающий' },
      { czech: 'vstřícný', russian: 'отзывчивый, гостеприимный' },
      { czech: 'adaptovat se', russian: 'адаптироваться' },
      { czech: 'pekařna', russian: 'пекарня' },
      { czech: 'modlit se', russian: 'молиться' },
      { czech: 'dobrovolník', russian: 'волонтёр' },
      { czech: 'návrat', russian: 'возвращение' },
    ],
    questions: [
      {
        id: 'b2-03-q1',
        question: 'Откуда Олена?',
        options: ['Из Киева', 'Из Львова', 'Из Харькова', 'Из Одессы'],
        correctAnswer: 2,
      },
      {
        id: 'b2-03-q2',
        question: 'Сколько дней они ехали в Чехию?',
        options: ['Один день', 'Два дня', 'Три дня', 'Пять дней'],
        correctAnswer: 2,
      },
      {
        id: 'b2-03-q3',
        question: 'Где Олена нашла работу?',
        options: ['В ресторане', 'В больнице', 'В пекарне', 'В школе'],
        correctAnswer: 2,
      },
      {
        id: 'b2-03-q4',
        question: 'Какая трудность была у младшей дочери?',
        options: ['Не нравилась еда', 'Плакала и не хотела идти в школу', 'Болела', 'Не нравилась погода'],
        correctAnswer: 1,
      },
      {
        id: 'b2-03-q5',
        question: 'Что Олена говорит о Чехии?',
        options: ['Не нравится ей', 'Не хочет там жить', 'Стала вторым домом', 'Хочет уехать в другую страну'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 14: Technologie ---
  {
    id: 'b2-04',
    level: 'B2',
    title: 'Technologie',
    titleRussian: 'Технологии',
    text: `Sociální sítě dramaticky změnily náš způsob komunikace. Dnes trávíme v průměru více než dvě hodiny denně na telefonech, prohlížíme příspěvky, sledujeme videa a komunikujeme s přáteli. Podle průzkumů si většina lidí ani neuvědomuje, kolik času na sítích stráví.

Umělá inteligence je dalším velkým tématem. AI už dnes dokáže psát texty, překládat jazyky, generovat obrázky a pomáhat s programováním. Někteří lidé se obávají, že AI nahradí lidskou práci, zejména v sektoru služeb a administrativy. Jiní vidí příležitost — AI může zefektivnit práci a uvolnit čas pro kreativnější činnosti.

Otázka soukromí je stále aktuálnější. Aplikace shromažďují obrovské množství dat o uživatelích — kam chodí, co kupují, s kým se setkávají. Tyto informace se často prodávají reklamním společnostem. Většina lidí souhlasí s podmínkami používání aniž by je přečetla.

Je naší odpovědností používat technologie uvážlivě. Měli bychom si chránit osobní údaje, omezovat čas na sítích a uvažovat kriticky o informacích, které denně konzumujeme.`,
    textRussian: `Социальные сети драматически изменили наш способ общения. Сегодня мы проводим в среднем более двух часов в день на телефонах, просматриваем публикации, смотрим видео и общаемся с друзьями. По опросам, большинство людей даже не осознаёт, сколько времени проводят в сетях.

Искусственный интеллект — следующая большая тема. ИИ уже сегодня умеет писать тексты, переводить языки, генерировать изображения и помогать с программированием. Некоторые люди опасаются, что ИИ заменит человеческий труд, особенно в сфере услуг и администрирования. Другие видят возможность — ИИ может повысить эффективность работы и освободить время для более творческой деятельности.

Вопрос конфиденциальности становится всё актуальнее. Приложения собирают огромное количество данных о пользователях — куда они ходят, что покупают, с кем встречаются. Эта информация часто продаётся рекламным компаниям. Большинство людей соглашается с условиями использования, не читая их.

Это наша ответственность использовать технологии осознанно. Мы должны защищать личные данные, ограничивать время в сетях и критически мыслить об информации, которую ежедневно потребляем.`,
    vocabulary: [
      { czech: 'sociální síť', russian: 'социальная сеть' },
      { czech: 'umělá inteligence', russian: 'искусственный интеллект' },
      { czech: 'soukromí', russian: 'конфиденциальность, частная жизнь' },
      { czech: 'shromažďovat data', russian: 'собирать данные' },
      { czech: 'zefektivnit', russian: 'повысить эффективность' },
      { czech: 'uvážlivě', russian: 'осознанно, благоразумно' },
      { czech: 'konzumovat', russian: 'потреблять' },
      { czech: 'podmínky používání', russian: 'условия использования' },
    ],
    questions: [
      {
        id: 'b2-04-q1',
        question: 'Сколько в среднем времени люди проводят в телефоне?',
        options: ['Меньше часа', 'Более двух часов', 'Пять часов', 'Полдня'],
        correctAnswer: 1,
      },
      {
        id: 'b2-04-q2',
        question: 'Что уже умеет делать ИИ?',
        options: ['Только считать', 'Писать тексты, переводить, генерировать изображения', 'Только переводить', 'Только играть в шахматы'],
        correctAnswer: 1,
      },
      {
        id: 'b2-04-q3',
        question: 'Что происходит с данными пользователей?',
        options: ['Они удаляются', 'Они продаются рекламным компаниям', 'Они хранятся в музее', 'Они бесплатно раздаются'],
        correctAnswer: 1,
      },
      {
        id: 'b2-04-q4',
        question: 'Что大多数人 людей не делает с условиями использования?',
        options: ['Не сохраняет их', 'Не читает их', 'Не принимает их', 'Не понимает их'],
        correctAnswer: 1,
      },
      {
        id: 'b2-04-q5',
        question: 'Чего, по мнению автора, мы не должны делать с технологиями?',
        options: ['Использовать их вообще', 'Относиться к ним осознанно', 'Покупать смартфоны', 'Общаться в интернете'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 15: Rozhodnutí ---
  {
    id: 'b2-05',
    level: 'B2',
    title: 'Rozhodnutí',
    titleRussian: 'Решение',
    text: `Stojím před nejtěžším rozhodnutím svého života. Dostal jsem nabídku na skvělou práci v Německu — v Mnichově. Firma je mezinárodní, plat je vysoký a perspektivy jsou výborné. Na druhé straně mám v Česku rodinu, přátele a život, který jsem si postavil.

Rozhodnutí komplikuje moje přítelkyně Markéta. Ona pracuje v Praze a miluje svou práci. Pokud odjedu, bude to znamenat vzdálený vztah, nebo by musela opustit všechno a jet se mnou. Oboje je těžké.

Rozmýšlím o svých prioritách. Kariéra je pro mě důležitá — chci se profesně rozvíjet a vydělávat více peněz. Ale rodina a osobní vztahy jsou důležitější. Minulý víkend jsem mluvil s otcem. Řekl mi: „Peníze nevrátí čas, který strávíš daleko od lidí, které miluješ." Slova mě moc zasáhla.

Nakonec jsem se rozhodl zůstat. Nabídku jsem odmítl s poděkováním. Bylo to těžké, ale cítím se dobře. Moje přítelkyně se usmála a řekla, že je na mě hrdá. Někdy je nejdůležitější být tam, kde vás milují.`,
    textRussian: `Я стою перед самым трудным решением в своей жизни. Я получил предложение на отличную работу в Германии — в Мюнхене. Компания международная, зарплата высокая, и перспективы отличные. С другой стороны, у меня в Чехии семья, друзья и жизнь, которую я себе построил.

Решение осложняет моя девушка Маркета. Она работает в Праге и любит свою работу. Если я уеду, это будет означать отношения на расстоянии, или ей придётся бросить всё и поехать со мной. Оба варианта трудные.

Я размышляю о своих приоритетах. Карьера для меня важна — я хочу профессионально развиваться и зарабатывать больше денег. Но семья и личные отношения важнее. В прошлые выходные я говорил с отцом. Он сказал мне: «Деньги не вернут время, проведённое далеко от людей, которых вы любите». Эти слова очень меня задели.

В итоге я решил остаться. Предложение отклонил с благодарностью. Это было тяжело, но я чувствую себя хорошо. Моя девушка улыбнулась и сказала, что гордится мной. Иногда самое важное — быть там, где вас любят.`,
    vocabulary: [
      { czech: 'rozhodnutí', russian: 'решение' },
      { czech: 'perspektiva', russian: 'перспектива' },
      { czech: 'vzdálený vztah', russian: 'отношения на расстоянии' },
      { czech: 'priorita', russian: 'приоритет' },
      { czech: 'profesně se rozvíjet', russian: 'профессионально развиваться' },
      { czech: 'odmítnout', russian: 'отклонить, отказаться' },
      { czech: 'být hrdý na někoho', russian: 'гордиться кем-то' },
      { czech: 'zasáhnout', russian: 'задеть, поразить' },
    ],
    questions: [
      {
        id: 'b2-05-q1',
        question: 'Какую работу предложили автору?',
        options: ['В Праге', 'В Мюнхене', 'В Вене', 'В Берлине'],
        correctAnswer: 1,
      },
      {
        id: 'b2-05-q2',
        question: 'Что осложняет решение?',
        options: ['Плохая зарплата', 'Девушка работает в Праге и любит свою работу', 'Нет жилья в Германии', 'Плохой немецкий'],
        correctAnswer: 1,
      },
      {
        id: 'b2-05-q3',
        question: 'Что сказал отец автора?',
        options: ['Уезжай, это хороший шанс', 'Деньги не вернут время с любимыми', 'Останься, работа не важна', 'Езди каждую неделю'],
        correctAnswer: 1,
      },
      {
        id: 'b2-05-q4',
        question: 'Какое решение в итоге принял автор?',
        options: ['Уехал в Германию', 'Остался в Чехии', 'Уехал в другую страну', 'Пока не решил'],
        correctAnswer: 1,
      },
      {
        id: 'b2-05-q5',
        question: 'Какая главная мысль истории?',
        options: ['Карьера важнее всего', 'Семья и любовь важнее денег', 'Нужно всегда уезжать за работой', 'Отношения на расстоянии не работают'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 16: Média ---
  {
    id: 'b2-06',
    level: 'B2',
    title: 'Média',
    titleRussian: 'СМИ',
    text: `Žijeme v době, kdy je informací nepřeberně množství. Každý den se setkáváme s články, videi a příspěvky, které tvrdí různé věci. Problém je v tom, že ne všechny informace jsou pravdivé. Fenomén fake news, tedy dezinformací, se stal vážnou hrozbou pro společnost.

Dezinformace se šíří na sociálních sítích neuvěřitelnou rychlostí. Lidé sdílí články, které ani nečetli, jen proto, že má atraktivní nadpis nebo odpovídá jejich názorům. Algoritmy platforem pak tyto příspěvky ještě více propagují, protože vyvolávají emoce a zvyšují aktivitu uživatelů.

Jak se bránit? Odborníci doporučují několik pravidel. Vždy zkontrolujte zdroj — kdo článek napsal a kde byl publikován. Hledejte stejné informace v ověřených médiích. Buďte opatrní vůči příspěvkům, které vyvolávají silné emoce — strach nebo hněv. A především si dávejte čas na rozmyšlenou předtím, než něco nasdílíte.

Mediální gramotnost by měla být součástí vzdělávání od útlého dětství. Kdo umí číst informace kriticky, je méně zranitelný vůči manipulaci.`,
    textRussian: `Мы живём в эпоху, когда информации невероятно много. Каждый день мы сталкиваемся со статьями, видео и публикациями, которые утверждают разные вещи. Проблема в том, что не все情報ции правдивы. Феномен фейковых новостей, то есть дезинформации, стал серьёзной угрозой для общества.

Дезинформация распространяется в социальных сетях с невероятной скоростью. Люди делятся статьями, которые даже не читали, только потому, что у них привлекательный заголовок или они соответствуют их мнению. Алгоритмы платформ затем ещё больше продвигают эти публикации, потому что они вызывают эмоции и повышают активность пользователей.

Как защищаться? Эксперты рекомендуют несколько правил. Всегда проверяйте источник — кто написал статью и где она была опубликована. Ищите ту же информацию в проверенных СМИ. Будьте осторожны с публикациями, которые вызывают сильные эмоции — страх или гнев. И прежде всего давайте себе время подумать, прежде чем что-то поделиться.

Медиаграмотность должна быть частью образования с раннего детства. Кто умеет критически читать информацию, менее уязвим к манипуляции.`,
    vocabulary: [
      { czech: 'dezinformace', russian: 'дезинформация' },
      { czech: 'fake news', russian: 'фейковые новости' },
      { czech: 'algoritmus', russian: 'алгоритм' },
      { czech: 'ověřené médium', russian: 'проверенное СМИ' },
      { czech: 'mediální gramotnost', russian: 'медиаграмотность' },
      { czech: 'manipulace', russian: 'манипуляция' },
      { czech: 'zranitelný', russian: 'уязвимый' },
      { czech: 'nepřeberný', russian: 'несметный, необъятный' },
    ],
    questions: [
      {
        id: 'b2-06-q1',
        question: 'Что такое fake news?',
        options: ['Настоящие новости', 'Дезинформация, ложные новости', 'Старые статьи', 'Реклама'],
        correctAnswer: 1,
      },
      {
        id: 'b2-06-q2',
        question: 'Почему люди делятся статьями, которые не читали?',
        options: ['Им платят', 'Привлекательный заголовок или совпадает с мнением', 'Их заставляют', 'Для развлечения'],
        correctAnswer: 1,
      },
      {
        id: 'b2-06-q3',
        question: 'Что рекомендуется делать в первую очередь?',
        options: ['Сразу поделиться', 'Проверить источник', 'Написать комментарий', 'Удалить аккаунт'],
        correctAnswer: 1,
      },
      {
        id: 'b2-06-q4',
        question: 'К каким публикациям нужно быть особенно осторожным?',
        options: ['К длинным статьям', 'К тем, что вызывают сильные эмоции', 'К статьям с фотографиями', 'К научным статьям'],
        correctAnswer: 1,
      },
      {
        id: 'b2-06-q5',
        question: 'С какого возраста должна преподаваться медиаграмотность?',
        options: ['Со средней школы', 'С университета', 'С раннего детства', 'Не нужна'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 17: Inflace ---
  {
    id: 'b2-07',
    level: 'B2',
    title: 'Inflace',
    titleRussian: 'Инфляция',
    text: `V posledních dvou letech se ceny v Česku výrazně zvýšily. Inflace dosáhla rekordních hodnot a postihla všechny oblasti života. Potraviny, energie, nájemné i služby — všechno stojí více než dříve. Průměrná rodina musí měsíčně vynaložit několik tisíc korun navíc na stejné položky jako před dvěma lety.

Důsledky inflace jsou vidět na každém rohu. Lidé omezují výdaje, méně jezdí na dovolené a šetří na běžném nákupu. Mnoho rodin si nemůže dovolit nový spotřebič nebo opravu auta. Senioři jsou zvláště zranitelní — jejich důchody se sice valorizují, ale často nestačí na pokrytí rostoucích nákladů.

Na druhé straně mzdy rostou pomaleji než ceny, což znamená reálný pokles životní úrovně. Podnikatelé bojují s rostoucími náklady na suroviny a energie. Některé firmy byly nuceny zvednout ceny, což dále prohlubuje inflační spirálu.

Ekonomové se neshodují, kdy inflace klesne. Vláda nabízí různá opatření — slevy na energie, dotace pro rodiny nebo snížení daní. Otázkou zůstává, jestli tyto kroky budou dostatečné a jak dlouho budou trvat.`,
    textRussian: `За последние два года цены в Чехии значительно выросли. Инфляция достигла рекордных значений и затронула все сферы жизни. Продукты, энергия, аренда и услуги — всё стоит больше, чем раньше. Средняя семья должна ежемесячно тратить на несколько тысяч крон больше на те же товары, что и два года назад.

Последствия инфляции видны на каждом углу. Люди сокращают расходы, меньше ездят в отпуск и экономят на повседневных покупках. Многие семьи не могут позволить себе новую технику или ремонт автомобиля. Пенсионеры особенно уязвимы — их пенсии индексируются, но часто не хватает на покрытие растущих расходов.

С другой стороны, зарплаты растут медленнее цен, что означает реальное снижение уровня жизни. Предприниматели борются с растущими затратами на сырьё и энергию. Некоторые компании были вынуждены повысить цены, что дальше углубляет инфляционную спираль.

Экономисты не сходятся во мнениях, когда инфляция снизится. Правительство предлагает различные меры — скидки на энергию, субсидии для семей или снижение налогов. Осталось открытым вопрос, будут ли эти шаги достаточными и как долго они продлятся.`,
    vocabulary: [
      { czech: 'inflace', russian: 'инфляция' },
      { czech: 'náklady', russian: 'расходы, затраты' },
      { czech: 'valorizace', russian: 'индексация' },
      { czech: 'důchod', russian: 'пенсия' },
      { czech: 'mzda', russian: 'зарплата' },
      { czech: ' inflační spirála', russian: 'инфляционная спираль' },
      { czech: 'opatření', russian: 'мера' },
      { czech: 'reálný pokles', russian: 'реальное снижение' },
    ],
    questions: [
      {
        id: 'b2-07-q1',
        question: 'Что произошло с ценами в Чехии за последние два года?',
        options: ['Они снизились', 'Они остались прежними', 'Они значительно выросли', 'Они немного снизились'],
        correctAnswer: 2,
      },
      {
        id: 'b2-07-q2',
        question: 'Как на инфляцию реагируют люди?',
        options: ['Больше тратят', 'Сокращают расходы и экономят', 'Покупают больше недвижимости', 'Не замечают разницу'],
        correctAnswer: 1,
      },
      {
        id: 'b2-07-q3',
        question: 'Почему пенсионеры особенно уязвимы?',
        options: ['Они много путешествуют', 'Их пенсии не всегда покрывают растущие расходы', 'Они не умеют экономить', 'Они живут в дорогих городах'],
        correctAnswer: 1,
      },
      {
        id: 'b2-07-q4',
        question: 'Что происходит с зарплатами по сравнению с ценами?',
        options: ['Растут быстрее', 'Растут медленнее', 'Не меняются', 'Растут одинаково'],
        correctAnswer: 1,
      },
      {
        id: 'b2-07-q5',
        question: 'Какие меры предлагает правительство?',
        options: ['Повысить цены', 'Скидки на энергию, субсидии, снижение налогов', 'Закрыть границы', 'Запретить покупки'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 18: Umění ---
  {
    id: 'b2-08',
    level: 'B2',
    title: 'Umění',
    titleRussian: 'Искусство',
    text: `Role umění v společnosti je často podceňována. Mnoho lidí považuje galerie a muzea za nudná místa, která nejsou určena běžným lidem. Přitom umění odráží naši kulturu, historii a emoce. Bez něj bychom žili v šedém, jednotvárném světě.

V posledních letech se ale umění stává přístupnějším. Street art, tedy umění na ulici, přináší kreativitu do každodenního života obyčejných lidí. V Praze i v jiných českých městech najdete na zdech barevné muraly, které proměňují obyčejné budovy ve výstavní prostory. Tento typ umění je zdarma a dostupný všem.

Galerie se také snaží přiblížit široké veřejnosti. Některé nabízejí bezplatné vstupy, interaktivní výstavy a programy pro děti. Národní galerie v Praze nedávno otevřela novou expozici, která kombinuje klasická díla s moderními technologiemi — návštěvníci mohou obrazy prozkoumávat pomocí virtuální reality.

Umění nemusí být drahé nebo elitářské. Může nás inspirovat, pobavit a donutit přemýšlet o světě kolem nás. Stačí se jen zastavit a dívat se.`,
    textRussian: `Роль искусства в обществе часто недооценивается. Многие люди считают галереи и музеи скучными местами, не предназначенными для обычных людей. Между тем искусство отражает нашу культуру, историю и эмоции. Без него мы жили бы в сером, однообразном мире.

В последние годы искусство становится более доступным. Стрит-арт, то есть уличное искусство, приносит креативность в повседневную жизнь обычных людей. В Праге и других чешских городах вы найдёте на стенах красочные муралы, которые превращают обычные здания в выставочные пространства. Этот вид искусства бесплатен и доступен всем.

Галереи также стремятся приблизиться к широкой публике. Некоторые предлагают бесплатные входы, интерактивные выставки и программы для детей. Национальная галерея в Праге недавно открыла новую экспозицию, которая сочетает классические произведения с современными технологиями — посетители могут исследовать картины с помощью виртуальной реальности.

Искусство не обязано быть дорогим или элитарным. Оно может вдохновлять, развлекать и заставлять задуматься о мире вокруг нас. Достаточно просто остановиться и смотреть.`,
    vocabulary: [
      { czech: 'podceňovat', russian: 'недооценивать' },
      { czech: 'street art', russian: 'стрит-арт, уличное искусство' },
      { czech: 'murál', russian: 'мурал' },
      { czech: 'elitářský', russian: 'элитарный' },
      { czech: 'expozice', russian: 'экспозиция' },
      { czech: 'virtuální realita', russian: 'виртуальная реальность' },
      { czech: 'inspirovat', russian: 'вдохновлять' },
      { czech: 'jednotvárný', russian: 'однообразный' },
    ],
    questions: [
      {
        id: 'b2-08-q1',
        question: 'Как многие люди относятся к галереям и музеям?',
        options: ['Очень любят', 'Считают скучными местами', 'Ходят туда каждый день', 'Строят их сами'],
        correctAnswer: 1,
      },
      {
        id: 'b2-08-q2',
        question: 'Что такое стрит-арт?',
        options: ['Музыкальный жанр', 'Уличное искусство на стенах', 'Тип танца', 'Киножанр'],
        correctAnswer: 1,
      },
      {
        id: 'b2-08-q3',
        question: 'Что нового сделала Национальная галерея?',
        options: ['Повысила цены', 'Закрылась навсегда', 'Открыла экспозицию с виртуальной реальностью', 'Снесла здание'],
        correctAnswer: 2,
      },
      {
        id: 'b2-08-q4',
        question: 'Что автор считает главной мыслью?',
        options: ['Искусство только для богатых', 'Искусство может вдохновлять и быть доступным всем', 'Искусство устарело', 'Галереи не нужны'],
        correctAnswer: 1,
      },
      {
        id: 'b2-08-q5',
        question: 'Что муралы делают с обычными зданиями?',
        options: ['Разрушают их', 'Превращают в выставочные пространства', 'Красят в белый цвет', 'Закрывают'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 19: Klima ---
  {
    id: 'b2-09',
    level: 'B2',
    title: 'Klima',
    titleRussian: 'Климат',
    text: `Klimatické změny jsou jednou z největších výzev naší doby. Vědci varují, že pokud nepodnikneme okamžité kroky, důsledky budou katastrofální. Teploty na Zemi stoupají, ledovce tají a hladina oceánů se zvyšuje. Extrémní meteorologické jevy — sucha, povodně a hurikány — se stávají častější.

Co můžeme udělat jako jednotlivci? Odpověď je jednoduchá: hodně, ale musíme začít u sebe. Doma můžeme snížit spotřebu energie — vypínat světla, používat LED žárovky a méně topit. Ve výrobě potravin se spotřebovává obrovské množství vody a energie, proto bychom měli omezit plýtvání jídlem a nakupovat lokální produkty.

Doprava je dalším důležitým sektorem. Každá cesta autem znamená emise oxidu uhličitého. Pokud možno, volte MHD, kolo nebo chůzi. Možná to zní jako malý krok, ale když to udělá miliony lidí, výsledek bude viditelný.

Někteří politici stále zpochybňují potřebu bojovat s klimatickými změnami. Tvrdí, že jsou to přirozené cykly. Vědecká data ale jasně ukazují, že lidská činnost urychluje oteplování. Nemůžeme čekat na politiky. Musíme jednat sami.`,
    textRussian: `Изменения климата — один из самых больших вызовов нашего времени. Учёные предупреждают, что если мы не предпримем немедленных шагов, последствия будут катастрофическими. Температуры на Земле растут, ледники тают, и уровень океана повышается. Экстремальные метеорологические явления — засухи, наводнения и ураганы — становятся чаще.

Что мы можем сделать как отдельные люди? Ответ прост: многое, но нужно начать с себя. Дома мы можем снизить потребление энергии — выключать свет, использовать LED-лампы и меньше отапливать. При производстве продуктов питания расходуется огромное количество воды и энергии, поэтому мы должны сократить пищевые отходы и покупать местные продукты.

Транспорт — ещё один важный сектор. Каждая поездка на автомобиле означает выбросы углекислого газа. По возможности выбирайте общественный транспорт, велосипед или ходьбу. Возможно, это звучит как маленький шаг, но если так сделают миллионы людей, результат будет заметен.

Некоторые политики всё ещё ставят под сомнение необходимость борьбы с изменениями климата. Они утверждают, что это естественные циклы. Но научные данные ясно показывают, что человеческая деятельность ускоряет потепление. Мы не можем ждать политиков. Мы должны действовать сами.`,
    vocabulary: [
      { czech: 'klimatická změna', russian: 'изменение климата' },
      { czech: 'ledovec', russian: 'ледник' },
      { czech: 'extrémní jev', russian: 'экстремальное явление' },
      { czech: 'sucha', russian: 'засуха' },
      { czech: 'povodeň', russian: 'наводнение' },
      { czech: 'plýtvání', russian: 'трата впустую, расточительство' },
      { czech: 'oxid uhličitý', russian: 'углекислый газ' },
      { czech: 'zpochybňovat', russian: 'ставить под сомнение' },
    ],
    questions: [
      {
        id: 'b2-09-q1',
        question: 'Что происходит с ледниками из-за изменения климата?',
        options: ['Они растут', 'Они тают', 'Они остаются прежними', 'Они перемещаются'],
        correctAnswer: 1,
      },
      {
        id: 'b2-09-q2',
        question: 'Что рекомендуется делать дома для экономии энергии?',
        options: ['Больше есть', 'Выключать свет, использовать LED-лампы', 'Купаться чаще', 'Смотреть больше телевизора'],
        correctAnswer: 1,
      },
      {
        id: 'b2-09-q3',
        question: 'Что означает каждая поездка на автомобиле?',
        options: ['Чистый воздух', 'Выбросы углекислого газа', 'Никаких последствий', 'Экономию денег'],
        correctAnswer: 1,
      },
      {
        id: 'b2-09-q4',
        question: 'Что некоторые политики утверждают об изменении климата?',
        options: ['Это серьёзная угроза', 'Это естественные циклы', 'Нужно немедленно действовать', 'Это не существует'],
        correctAnswer: 1,
      },
      {
        id: 'b2-09-q5',
        question: 'Какое основное послание автора?',
        options: ['Ждать политиков', 'Не делать ничего', 'Действовать самостоятельно, начиная с себя', 'Только богатые могут помочь'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 20: Identita ---
  {
    id: 'b2-10',
    level: 'B2',
    title: 'Identita',
    titleRussian: 'Идентичность',
    text: `Narodil jsem se v rodině, kde se mluvilo dvěma jazyky. Má matka je Češka a otec je Slovák. V dětství jsem doma mluvil česky i slovensky. Na škole jsem mluvil česky, ale o víkendech, když jsme jezdili za babičkou na Slovensko, jsem přepínal na slovenštinu.

Bilingvismus ovlivnil mou identitu víc, než jsem si kdysi uvědomoval. Často se mě lidé ptají: „Tak co, cítíš se spíš jako Čech nebo jako Slovák?" Odpověď není jednoduchá. Cítím se jako obojí. Čeština je jazyk, ve kterém přemýšlím a sním. Slovenština je jazyk mých vzpomínek, rodinných tradic a emocí.

Jazyk není jen prostředkem komunikace. Je to nosič kultury, historie a způsobu vnímání světa. Když mluvíte jiným jazykem, cítíte se trochu jinak. Slovenština zní měkčeji a laskavěji. Čeština je přesnější a přímočařejší. Obě jazyky tvoří mou osobnost.

Myslím, že být bilingvní je obrovská výhoda. Otevírá to dveře k dalším kulturám a jazykům. Snáze se učím další cizí jazyky, protože rozumím tomu, jak funguje jazykový systém. Můj syn už taky mluví dvěma jazyky, a vidím, jak to obohacuje jeho život.`,
    textRussian: `Я родился в семье, где говорили на двух языках. Моя мама — чешка, а отец — словак. В детстве дома я говорил и по-чешски, и по-словацки. В школе я говорил по-чешски, но по выходным, когда мы ездили к бабушке в Словакию, я переключался на словацкий.

Билингвизм повлиял на мою идентичность больше, чем я когда-то осознавал. Часто люди спрашивают меня: «Ну так что, чувствуешь себя больше чехом или словаком?» Ответ не простой. Я чувствую себя обоими. Чешский — язык, на котором я думаю и мечтаю. Словацкий — язык моих воспоминаний, семейных традиций и эмоций.

Язык — это не только средство общения. Это носитель культуры, истории и способа восприятия мира. Когда вы говорите на другом языке, вы чувствуете себя немного иначе. Словацкий звучит мягче и добрее. Чешский — точнее и прямоточнее. Оба языка формируют мою личность.

Я думаю, что быть билингвом — огромное преимущество. Это открывает двери к другим культурам и языкам. Мне легче учить другие иностранные языки, потому что я понимаю, как работает языковая система. Мой сын уже тоже говорит на двух языках, и я вижу, как это обогащает его жизнь.`,
    vocabulary: [
      { czech: 'bilingvismus', russian: 'билингвизм' },
      { czech: 'identita', russian: 'идентичность' },
      { czech: 'přepínat', russian: 'переключаться' },
      { czech: 'nosič', russian: 'носитель' },
      { czech: 'vnímání světa', russian: 'восприятие мира' },
      { czech: 'přímočařejší', russian: 'более прямой, прямоточный' },
      { czech: 'osobnost', russian: 'личность' },
      { czech: 'obohacovat', russian: 'обогащать' },
    ],
    questions: [
      {
        id: 'b2-10-q1',
        question: 'Какие языки автор знал с детства?',
        options: ['Чешский и английский', 'Чешский и словацкий', 'Словацкий и русский', 'Чешский и немецкий'],
        correctAnswer: 1,
      },
      {
        id: 'b2-10-q2',
        question: 'Какой язык автор использует для размышлений и мечт?',
        options: ['Словацкий', 'Английский', 'Чешский', 'Немецкий'],
        correctAnswer: 2,
      },
      {
        id: 'b2-10-q3',
        question: 'Что автор говорит о чешском языке?',
        options: ['Он мягкий', 'Он точнее и прямее', 'Он трудный', 'Он красивый'],
        correctAnswer: 1,
      },
      {
        id: 'b2-10-q4',
        question: 'Какое преимущество билингвизма упоминает автор?',
        options: ['Больше денег', 'Легче учить другие языки', 'Лучшая память', 'Больше друзей'],
        correctAnswer: 1,
      },
      {
        id: 'b2-10-q5',
        question: 'На скольких языках говорит сын автора?',
        options: ['На одном', 'На двух', 'На трёх', 'На четырёх'],
        correctAnswer: 1,
      },
    ],
  },
];
