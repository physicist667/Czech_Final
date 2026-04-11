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

  // --- Story 11: Ekologický život ---
  {
    id: 'b1-11',
    level: 'B1',
    title: 'Ekologický život',
    titleRussian: 'Экологический образ жизни',
    text: `V posledních letech se stále více lidí zajímá o ekologický způsob života. Mnoho Čechů se snaží omezit svou uhlíkovou stopu a žít v souladu s přírodou. Někteří lidé se dokonce rozhodli žít zcela bez plastu, což je v dnešní době velmi obtížné, ale ne nemožné.
V obchodech se často objevují produkty v ekologickém balení. Spotřebitelé mají možnost volit mezi běžným zbožím a výrobky z udržitelných zdrojů. Mnoho firem také začalo vyrábět produkty z recyklovaných materiálů, což je krok správným směrem. Stále však platí, že ekologické produkty bývají dražší než konvenční.
Můj kamarád Martin před rokem založil komunitní zahradu v našem městě. Lidé si tam mohou pronajmout záhonek a pěstovat vlastní zeleninu a byliny. Je to skvělý způsob, jak strávit čas venku, poznat sousedy a snížit dopad na životní prostředí. Zahrada se stala oblíbeným místem pro rodiny s dětmi.
Myslím, že každý z nás může udělat malé změny, které mají velký význam. Třídění odpadu, omezování plástů, nákup místních produktů nebo chození pěšky — to vše jsou kroky, které pomáhají naší planetě. Důležité je začít a nevzdávat se.`,
    textRussian: `В последние годы всё больше людей интересуется экологическим образом жизни. Многие чехи стараются сократить свой углеродный след и жить в гармонии с природой. Некоторые люди даже решили жить полностью без пластика, что в наши дни очень сложно, но не невозможно.
В магазинах часто появляются продукты в экологической упаковке. Потребители имеют возможность выбирать между обычными товарами и изделиями из устойчивых источников. Многие компании также начали производить продукцию из переработанных материалов, что является шагом в правильном направлении. Однако по-прежнему верно, что экологические продукты обычно дороже обычных.
Мой друг Мартин год назад создал общественный сад в нашем городе. Люди могут арендовать там грядку и выращивать собственные овощи и травы. Это отличный способ провести время на свежем воздухе, познакомиться с соседями и снизить воздействие на окружающую среду. Сад стал любимым местом для семей с детьми.
Я думаю, что каждый из нас может сделать небольшие изменения, которые имеют большое значение. Сортировка мусора, сокращение пластика, покупка местных продуктов или ходьба пешком — всё это шаги, которые помогают нашей планете. Важно начать и не сдаваться.`,
    vocabulary: [
      { czech: 'uhlíková stopa', russian: 'углеродный след' },
      { czech: 'udržitelný zdroj', russian: 'устойчивый источник' },
      { czech: 'recyklovaný materiál', russian: 'переработанный материал' },
      { czech: 'komunitní zahrada', russian: 'общественный сад' },
      { czech: 'záhonek', russian: 'грядка' },
      { czech: 'pěstovat', russian: 'выращивать' },
      { czech: 'spotřebitel', russian: 'потребитель' },
      { czech: 'konvenční', russian: 'обычный, традиционный' },
    ],
    questions: [
      {
        id: 'b1-11-q1',
        question: 'Что такое углеродный след по мнению автора?',
        options: ['След от обуви', 'Воздействие человека на окружающую среду', 'Вид топлива', 'Тип продукции'],
        correctAnswer: 1,
      },
      {
        id: 'b1-11-q2',
        question: 'Что Martín создал в городе?',
        options: ['Ресторан', 'Общественный сад', 'Магазин', 'Школу'],
        correctAnswer: 1,
      },
      {
        id: 'b1-11-q3',
        question: 'Какие продукты обычно дороже?',
        options: ['Обычные продукты', 'Экологические продукты', 'Местные продукты', 'Импортные продукты'],
        correctAnswer: 1,
      },
      {
        id: 'b1-11-q4',
        question: 'Какие шаги автор рекомендует делать?',
        options: ['Купить машину', 'Сортировать мусор и ходить пешком', 'Переехать в деревню', 'Купировать продукты'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 12: Na farmě ---
  {
    id: 'b1-12',
    level: 'B1',
    title: 'Na farmě',
    titleRussian: 'На ферме',
    text: `Minulý víkend jsem strávil na farmě svých známých, kteří žijí na jihu Moravy. Jižní Morava je známá svou krásnou krajinou, vinicemi a pohostinností místních obyvatel. Farma se nachází v malé vesnici u hranic se Slovenskem, kde je nádherný výhled na okolní kopce.
Ráno jsem vstával v šest hodin, abych pomáhal s krmením zvířat. Na farmě chovají krávy, kozy, slepice a několik ovcí. Nejvíce mě bavilo dojení koz — ze začátku jsem to nedokázal, ale po několika pokusech se mi to povedlo. Farmař mi vysvětlil, že kozy jsou velmi inteligentní zvířata a každá má svou vlastní povahu.
Odpoledne jsme jeli na pole sbírat jablka. Stromy byly plné červených a žlutých jabek, které voněly na celou farmu. Nasbírali jsme přes padesát kilogramů jabek, které jsme potom používali na mošt a jablečný koláč. Práce na čerstvém vzduchu mě nesmírně bavila a ani jsem si nevšiml, jak rychle utekl den.
Večer jsme seděli na verandě, pili domácí jablečný mošt a povídali si o životě na farmě. Farmař řekl, že práce na farmě je náročná, ale dává mu obrovskou svobodu a spokojenost. Rozhodl jsem se, že se příští rok určitě vrátím.`,
    textRussian: `В прошлые выходные я провёл на ферме своих знакомых, которые живут на юге Моравии. Южная Моравия известна своей красивой природой, виноградниками и гостеприимством местных жителей. Ферма находится в маленькой деревне у границы со Словакией, откуда открывается чудесный вид на окружающие холмы.
Утром я вставал в шесть часов, чтобы помочь с кормлением животных. На ферме разводят коров, коз, кур и несколько овец. Больше всего мне нравилось доить коз — сначала у меня не получалось, но после нескольких попыток у меня вышло. Фермер объяснил мне, что козы — очень умные животные, и у каждой свой характер.
Днём мы поехали на поле собирать яблоки. Деревья были полны красных и жёлтых яблок, аромат которых разносился по всей ферме. Мы собрали более пятидесяти килограммов яблок, которые потом использовали для сока и яблочного пирога. Работа на свежем воздухе безумно нравилась мне, и я даже не заметил, как быстро пролетел день.
Вечером мы сидели на веранде, пили домашний яблочный сок и разговаривали о жизни на ферме. Фермер сказал, что работа на ферме — тяжёлая, но даёт ему огромную свободу и удовлетворение. Я решил, что обязательно вернусь в следующем году.`,
    vocabulary: [
      { czech: 'farma', russian: 'ферма' },
      { czech: 'chovat zvířata', russian: 'разводить животных' },
      { czech: 'dojit', russian: 'доить' },
      { czech: 'sbírat', russian: 'собирать' },
      { czech: 'mošt', russian: 'сок (фруктовый)' },
      { czech: 'pohostinnost', russian: 'гостеприимство' },
      { czech: 'náročný', russian: 'трудоёмкий, сложный' },
      { czech: 'veranda', russian: 'веранда' },
    ],
    questions: [
      {
        id: 'b1-12-q1',
        question: 'Где находится ферма?',
        options: ['На севере Чехии', 'На юге Моравии', 'В Праге', 'У границы с Польшей'],
        correctAnswer: 1,
      },
      {
        id: 'b1-12-q2',
        question: 'Какие животные есть на ферме?',
        options: ['Только коровы', 'Коровы, козы, куры и овцы', 'Лошади и свиньи', 'Только птицы'],
        correctAnswer: 1,
      },
      {
        id: 'b1-12-q3',
        question: 'Что делали днём?',
        options: ['Кормили животных', 'Собирали яблоки', 'Чинили забор', 'Красили дом'],
        correctAnswer: 1,
      },
      {
        id: 'b1-12-q4',
        question: 'Что фермер сказал о работе на ферме?',
        options: ['Это лёгкая работа', 'Это тяжёлая, но даёт свободу', 'Это скучно', 'Он хочет переехать в город'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 13: Můj soused ---
  {
    id: 'b1-13',
    level: 'B1',
    title: 'Můj soused',
    titleRussian: 'Мой сосед',
    text: `Už deset let bydlím ve stejném domě a mám velmi zajímavé sousedy. V domě je celkem dvanáct bytů a každý obyvatel je jiný — mladí studenti, rodiny s dětmi i starší lidé. Nejvíce si rozumím s panem Novákem, který bydlí naproti mně a je mu sedmdesát pět let.
Pan Novák je bývalý učitel dějepisu. Každý večer sedíme na lavičce před domem a povídáme si. Vypráví mi fascinující příběhy z české historie, které jsem nikdy v učebnicích nenašel. Má obrovskou knihovnu a půjčuje mi knihy, které mě inspirují k dalšímu studiu. Je to jako můj vlastní dědeček, i když jsme nijak příbuzní.
Někdy sousedské vztahy nejsou jednoduché. Například paní Dvořáková, která bydlí v prvním patře, si stěžuje na hluk, když má někdo návštěvu. Jednou zavolala policii, protože studenti v pátém patře hráli hudbu příliš hlasitě. Naštěstí se situace vyřešila a studenti si od té doby dávají pozor na hlasitost.
Přesto si myslím, že dobrí sousedé jsou velkou výhodou. Když jsem jednou onemocněl, pan Novák mi přinesl polévku a paní Svobodová mi nakoupila léky. Vzájemná pomoc a respekt jsou základem dobrého sousedského vztahu. Jsem vděčný, že žiju v takovém sousedství.`,
    textRussian: `Уже десять лет я живу в одном и том же доме, и у меня очень интересные соседи. В доме всего двенадцать квартир, и каждый житель разный — молодые студенты, семьи с детьми и пожилые люди. Больше всего я общаюсь с паном Новаком, который живёт напротив меня и которому семьдесят пять лет.
Пан Новак — бывший учитель истории. Каждый вечер мы сидим на скамейке перед домом и разговариваем. Он рассказывает мне увлекательные истории из чешской истории, которых я никогда не находил в учебниках. У него огромная библиотека, и он одалживает мне книги, которые вдохновляют меня на дальнейшую учёбу. Он как мой собственный дедушка, хотя мы не родственники.
Иногда соседские отношения бывают непростыми. Например, пани Дворжакова, которая живёт на первом этаже, жалуется на шум, когда у кого-то есть гости. Однажды она вызвала полицию, потому что студенты на пятом этаже играли музыку слишком громко. К счастью, ситуация разрешилась, и с тех пор студенты следят за громкостью.
Всё же я думаю, что хорошие соседи — это большое преимущество. Когда я однажды заболел, пан Новак принёс мне суп, а пани Свободова купила мне лекарства. Взаимопомощь и уважение — основа хороших соседских отношений. Я благодарен, что живу в таком окружении.`,
    vocabulary: [
      { czech: 'soused', russian: 'сосед' },
      { czech: 'dějepis', russian: 'история (школьный предмет)' },
      { czech: 'bývalý', russian: 'бывший' },
      { czech: 'příbuzný', russian: 'родственник' },
      { czech: 'stěžovat si', russian: 'жаловаться' },
      { czech: 'vzájemná pomoc', russian: 'взаимопомощь' },
      { czech: 'respekt', russian: 'уважение' },
      { czech: 'sousedství', russian: 'соседство, округ' },
    ],
    questions: [
      {
        id: 'b1-13-q1',
        question: 'Сколько лет автор живёт в доме?',
        options: ['Пять лет', 'Десять лет', 'Пятнадцать лет', 'Двадцать лет'],
        correctAnswer: 1,
      },
      {
        id: 'b1-13-q2',
        question: 'Кем работал пан Новак?',
        options: ['Врачом', 'Учителем истории', 'Писателем', 'Полицейским'],
        correctAnswer: 1,
      },
      {
        id: 'b1-13-q3',
        question: 'Почему пани Дворжакова вызвала полицию?',
        options: ['Из-за пожара', 'Из-за громкой музыки', 'Из-за кражи', 'Из-за затопления'],
        correctAnswer: 1,
      },
      {
        id: 'b1-13-q4',
        question: 'Что сделали соседи, когда автор заболел?',
        options: ['Вызвали врача', 'Принесли суп и купили лекарства', 'Уехали', 'Ничего'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 14: Vlaky v Česku ---
  {
    id: 'b1-14',
    level: 'B1',
    title: 'Vlaky v Česku',
    titleRussian: 'Поезда в Чехии',
    text: `České dráhy jsou jedním z nejlepších způsobů, jak cestovat po zemi. Síť železnic pokrývá téměř celou Českou republiku a spojuje velká města s malými vesnicemi. Osobní vlaky jezdí pravidelně a jsou poměrně levné, což je důležité pro studenty a seniory, kteří mají slevy.
Rychlíky a expresy jsou pohodlnější a rychlejší, ale také dražší. Cesta z Prahy do Brna trvá přibližně dvě a půl hodiny rychlíkem, zatímco osobním vlakem to trvá přes čtyři hodiny. V posledních letech České dráhy modernizovaly svůj vozový park a nové vlaky jsou čisté, tiché a mají Wi-Fi připojení.
Nedávno jsem cestoval vlakem z Prahy do Olomouce. Vlaková nádraží v Česku bývají centrem města a často jsou to krásné historické budovy. Nádraží v Olomouci je přímo v centru a je to jedna z nejkrásnějších staveb ve městě. Cesta proběhla bez problémů, ale jednou za čas se stane, že vlak má zpoždění.
Mnoho lidí si stěžuje na zpoždění vlaků, ale podle mého názoru je železniční doprava stále spolehlivější než silniční. V zimě, když jsou silnice zasněžené, vlaky jezdí mnohem spolehlivěji. Navíc můžete během cesty číst, pracovat nebo jen sledovat krajinu z okna.`,
    textRussian: `Чешские железные дороги — один из лучших способов путешествовать по стране. Сеть железных дорог покрывает практически всю Чешскую Республику и соединяет крупные города с маленькими деревнями. Пригородные поезда ходят регулярно и довольно недорогие, что важно для студентов и пенсионеров, у которых есть скидки.
Скорые и экспрессы удобнее и быстрее, но и дороже. Путь из Праги в Брно занимает примерно два с половиной часа на скором поезде, тогда как на пригородном — более четырёх часов. В последние годы Чешские железные дороги модернизировали свой подвижной состав, и новые поезда чистые, тихие и с Wi-Fi.
Недавно я путешествовал на поезде из Праги в Оломоуц. Железнодорожные вокзалы в Чехии обычно находятся в центре города, и часто это красивые исторические здания. Вокзал в Оломоуце прямо в центре — одно из красивейших сооружений города. Поездка прошла без проблем, но иногда случается, что поезд опаздывает.
Многие жалуются на опоздания поездов, но, по моему мнению, железнодорожный транспорт всё ещё надёжнее автомобильного. Зимой, когда дороги заснежены, поезда ходят гораздо надёжнее. Кроме того, во время поездки можно читать, работать или просто любоваться пейзажем из окна.`,
    vocabulary: [
      { czech: 'železnice', russian: 'железная дорога' },
      { czech: 'rychlík', russian: 'скорый поезд' },
      { czech: 'osobní vlak', russian: 'пригородный поезд' },
      { czech: 'modernizovat', russian: 'модернизировать' },
      { czech: 'vozový park', russian: 'подвижной состав' },
      { czech: 'nádraží', russian: 'вокзал, станция' },
      { czech: 'zpoždění', russian: 'опоздание' },
      { czech: 'spolehlivý', russian: 'надёжный' },
    ],
    questions: [
      {
        id: 'b1-14-q1',
        question: 'Сколько занимает путь из Праги в Брно на скором поезде?',
        options: ['Один час', 'Примерно два с половиной часа', 'Четыре часа', 'Шесть часов'],
        correctAnswer: 1,
      },
      {
        id: 'b1-14-q2',
        question: 'Кто имеет скидки на поезда?',
        options: ['Только дети', 'Только туристы', 'Студенты и пенсионеры', 'Все без исключения'],
        correctAnswer: 2,
      },
      {
        id: 'b1-14-q3',
        question: 'Что нового в поездах в последние годы?',
        options: ['Больше мест', 'Wi-Fi и модернизация', 'Бесплатная еда', 'Телевизоры'],
        correctAnswer: 1,
      },
      {
        id: 'b1-14-q4',
        question: 'Почему автор считает поезда надёжнее автомобилей зимой?',
        options: ['Поезда быстрее', 'Дороги заснежены, а поезда ездят надёжнее', 'Поезда дешевле', 'Поезда теплее'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 15: Svatba ---
  {
    id: 'b1-15',
    level: 'B1',
    title: 'Svatba',
    titleRussian: 'Свадьба',
    text: `V Česku se tradičně svatba koná v sobotu a je to velká událost nejen pro snoubence, ale i pro celou rodinu a přátele. Přípravy na svatbu začínají mnoho měsíců předem. Nejdůležitější je vybrat datum, rezervovat restauraci a pozvat hosty. Některé páry si najímají svatební agenturu, která jim pomůže s organizací.
Svatební obřad se většinou koná na radnici nebo v kostele. Civilní obřad na radnici je kratší a formálnější — oddací úředník přečte text a páru se ptá, zda si chtějí vzít. Církevní obřad je delší, zahřívá duchovní a je doplněn modlitbou. Po obřadu následuje svatební hostina, kde je bohatý program.
Na svatební hostině se podává tradiční české jídlo — svatební polévka, pečené maso, saláty a svatební koláč. Zábava trvá až do pozdní noci. Hraje živá hudba, hosté tančí a soutěží. Oblíbenou tradicí je rozbíjení talíře, které má přinést štěstí, a nevěsta si musí zamést střepy.
Svatba v Česku bývá nákladná záležitost. Průměrná svatba stojí sto až dvě stě tisíc korun, ale mnoho párů se snaží ušetřit a uspořádat svatbu podle vlastních představ. Myslím, že nejdůležitější není luxus, ale láskyplná atmosféra a společná radost.`,
    textRussian: `В Чехии свадьба традиционно проходит в субботу — это большое событие не только для жениха и невесты, но и для всей семьи и друзей. Подготовка к свадьбе начинается за много месяцев. Самое важное — выбрать дату, забронировать ресторан и пригласить гостей. Некоторые пары нанимают свадебное агентство, которое помогает с организацией.
Свадебная церемония обычно проходит в мэрии или в церкви. Гражданская церемония в мэрии короче и формальнее — чиновник зачитывает текст и спрашивает пару, хотят ли они пожениться. Церковная церемония длиннее, её проводит священник, и она сопровождается молитвой. После церемонии следует свадебный пир с богатой программой.
На свадебном пиру подают традиционную чешскую еду — свадебный суп, запечённое мясо, салаты и свадебный торт. Веселье длится до поздней ночи. Играет живая музыка, гости танцуют и участвуют в конкурсах. Популярная традиция — разбивание тарелки, которое должно принести счастье, а невеста должна подмести осколки.
Свадьба в Чехии обычно — дорогое мероприятие. Средняя свадьба стоит от ста до двухсот тысяч крон, но многие пары стараются сэкономить и организуют свадьбу по своим представлениям. Я думаю, что самое важное — не роскошь, а атмосфера любви и общая радость.`,
    vocabulary: [
      { czech: 'svatba', russian: 'свадьба' },
      { czech: 'snoubenec', russian: 'жених, наречённый' },
      { czech: 'oddací úředník', russian: 'чиновник ЗАГСа' },
      { czech: 'církevní obřad', russian: 'церковная церемония' },
      { czech: 'svatební hostina', russian: 'свадебный пир' },
      { czech: 'zamést střepy', russian: 'подмести осколки' },
      { czech: 'nákladný', russian: 'дорогой, затратный' },
      { czech: 'svatební agentura', russian: 'свадебное агентство' },
    ],
    questions: [
      {
        id: 'b1-15-q1',
        question: 'В какой день традиционно проходит свадьба в Чехии?',
        options: ['В пятницу', 'В субботу', 'В воскресенье', 'В любой день'],
        correctAnswer: 1,
      },
      {
        id: 'b1-15-q2',
        question: 'Где проходит гражданская церемония?',
        options: ['В церкви', 'В ресторане', 'В мэрии', 'В парке'],
        correctAnswer: 2,
      },
      {
        id: 'b1-15-q3',
        question: 'Что должна сделать невеста после разбивания тарелки?',
        options: ['Заплакать', 'Подмести осколки', 'Танцевать', 'Поцеловать жениха'],
        correctAnswer: 1,
      },
      {
        id: 'b1-15-q4',
        question: 'Что, по мнению автора, самое важное на свадьбе?',
        options: ['Роскошь', 'Атмосфера любви и общая радость', 'Дорогой ресторан', 'Много гостей'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 16: Nemocnice ---
  {
    id: 'b1-16',
    level: 'B1',
    title: 'Nemocnice',
    titleRussian: 'Больница',
    text: `Před třemi týdny jsem měl vážnou nehodu na kole a musel jsem jet do nemocnice. Uklouzl jsem na mokré dlažbě a zlomil jsem si ruku. Záchranka přijela za deset minut a odvezla mě na pohotovost v nemocnici Na Homolce. Byl jsem vyděšený, protože jsem nikdy předtím nebyl v české nemocnici.
Na pohotovosti jsem čekal asi hodinu, než mě vyšetřil lékař. Sestřička mi dala protizánětlivé léky a provedla rentgen. Rentgen ukázal, že je to zlomenina v oblasti zápěstí. Lékař mi vysvětlil, že budu muset nosit sádu po dobu šesti týdnů. Nasadil mi sádu a řekl, abych přišel na kontrolu za dva týdny.
Léčba v České republice je na vysoké úrovni, ale čekací doby mohou být dlouhé, zvláště u specialistů. Například na ortopeda se čeká i několik týdnů. Naštěstí moje situace nevyžadovala operaci. Celkové náklady na léčbu byly asi dva tisíce korun, z čehož většinu hradila zdravotní pojišťovna.
Zkušenost s nemocnicí mě přiměla přemýšlet o zdraví. Uvědomil jsem si, jak snadné je si zranit a jak důležité je nosit chrániče při sportu. Také jsem si uvědomil, že oceňuji české zdravotnictví — personál byl profesionální, laskavý a trpělivý, i když jsem nemluvil perfektně česky.`,
    textRussian: `Три недели назад у меня была серьёзная авария на велосипеде, и мне пришлось поехать в больницу. Я поскользнулся на мокрой плитке и сломал руку. Скорая приехала через десять минут и увезла меня в приёмный покой больницы На Гомолке. Я был напуган, потому что раньше никогда не был в чешской больнице.
В приёмном покое я ждал около часа, прежде чем меня осмотрел врач. Медсестра дала мне противовоспалительные лекарства и сделала рентген. Рентген показал, что это перелом в области запястья. Врач объяснил мне, что мне нужно будет носить гипс в течение шести недель. Он наложил гипс и сказал прийти на осмотр через две недели.
Лечение в Чешской Республике на высоком уровне, но сроки ожидания могут быть долгими, особенно у специалистов. Например, к ортопеду можно ждать несколько недель. К счастью, моя ситуация не требовала операции. Общие расходы на лечение составили около двух тысяч крон, из которых большую часть оплатила страховая компания.
Опыт в больнице заставил меня задуматься о здоровье. Я осознал, как легко получить травму и как важно носить защиту при занятиях спортом. Также я понял, что ценю чешское здравоохранение — персонал был профессиональным, добрым и терпеливым, даже если я говорил не на идеальном чешском.`,
    vocabulary: [
      { czech: 'nemocnice', russian: 'больница' },
      { czech: 'záchranka', russian: 'скорая помощь' },
      { czech: 'pohotovost', russian: 'приёмный покой, скорая' },
      { czech: 'rentgen', russian: 'рентген' },
      { czech: 'zlomenina', russian: 'перелом' },
      { czech: 'sáda', russian: 'гипс' },
      { czech: 'zdravotní pojišťovna', russian: 'медицинская страховая компания' },
      { czech: 'chrániče', russian: 'защита (спортивная)' },
    ],
    questions: [
      {
        id: 'b1-16-q1',
        question: 'Как автор сломал руку?',
        options: ['Падение с лестницы', 'Поскользнулся на мокрой плитке', 'ДТП', 'Спортивная травма'],
        correctAnswer: 1,
      },
      {
        id: 'b1-16-q2',
        question: 'Сколько автор ждал в приёмном покое?',
        options: ['Десять минут', 'Около получаса', 'Около часа', 'Три часа'],
        correctAnswer: 2,
      },
      {
        id: 'b1-16-q3',
        question: 'Как долго автор должен носить гипс?',
        options: ['Две недели', 'Четыре недели', 'Шесть недель', 'Восемь недель'],
        correctAnswer: 2,
      },
      {
        id: 'b1-16-q4',
        question: 'Кто оплатил большую часть лечения?',
        options: ['Автор сам', 'Страховая компания', 'Государство', 'Родители'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 17: Historie Prahy ---
  {
    id: 'b1-17',
    level: 'B1',
    title: 'Historie Prahy',
    titleRussian: 'История Праги',
    text: `Praha je hlavní město České republiky a jedno z nejkrásnějších měst v Evropě. Její historie sahá až do devátého století, kdy byla založena hradem na kopci nad Vltavou. Legenda říká, že zakladatelem Prahy byla kněžna Libuše, která viděla vizi města, jehož sláva se dotkne hvězd.
Během středověku se Praha stala důležitým centrem obchodu a kultury. V čtrnáctém století, za vlády Karla IV., zažila Praha svůj zlatý věk. Karel IV. založil Karlovu univerzitu, postavil Karlův most a nechal přestavět Pražský hrad. V té době byla Praha jedním z největších měst v Evropě a sídlem císaře.
V sedmnáctém století, po bitvě na Bílé hoře, se Praha stala součástí habsburské říše. Barokní architektura, kterou dnes obdivujeme, pochází právě z tohoto období. V devatenáctém století začalo národní obrození — Češi znovuobjevovali svůj jazyk, kulturu a identitu. Byla postavena Národní muzeum a Národní divadlo.
Dnes je Praha moderní metropolí, která spojuje historii s současností. Každý rok ji navštíví miliony turistů z celého světa. Myslím, že Praha je fascinující město, kde se na každém rohu skrývá kus historie.`,
    textRussian: `Прага — столица Чешской Республики и один из красивейших городов Европы. Её история уходит в девятый век, когда она была основана замком на холме над Влтавой. Легенда гласит, что основательницей Праги была княгиня Либуше, которая увидела видение города, слава которого дотянется до звёзд.
В Средние века Прага стала важным центром торговли и культуры. В четырнадцатом веке, во время правления Карла IV, Прага пережила свой золотой век. Карл IV основал Карлов университет, построил Карлов мост и заказал перестройку Пражского замка. В то время Прага была одним из крупнейших городов Европы и резиденцией императора.
В семнадцатом веке, после битвы на Белой горе, Прага стала частью Габсбургской империи. Барочная архитектура, которой мы сегодня восхищаемся, происходит именно из этого периода. В девятнадцатом веке началось национальное возрождение — чехи заново открывали свой язык, культуру и идентичность. Были построены Национальный музей и Национальный театр.
Сегодня Прага — современная столица, которая соединяет историю с современностью. Каждый год её посещают миллионы туристов со всего мира. Я думаю, что Прага — очаровательный город, где за каждым углом скрывается кусочек истории.`,
    vocabulary: [
      { czech: 'zakladatel', russian: 'основатель' },
      { czech: 'zlatý věk', russian: 'золотой век' },
      { czech: 'sídlo císaře', russian: 'резиденция императора' },
      { czech: 'barokní architektura', russian: 'барочная архитектура' },
      { czech: 'národní obrození', russian: 'национальное возрождение' },
      { czech: 'identita', russian: 'идентичность' },
      { czech: 'metropole', russian: 'столица, мегаполис' },
      { czech: 'fascinující', russian: 'очаровательный, увлекательный' },
    ],
    questions: [
      {
        id: 'b1-17-q1',
        question: 'Кто, по легенде, основал Прагу?',
        options: ['Карл IV', 'Княгиня Либуше', 'Император', 'Преподобный Вацлав'],
        correctAnswer: 1,
      },
      {
        id: 'b1-17-q2',
        question: 'В каком веке Прага пережила золотой век?',
        options: ['В тринадцатом', 'В четырнадцатом', 'В пятнадцатом', 'В шестнадцатом'],
        correctAnswer: 1,
      },
      {
        id: 'b1-17-q3',
        question: 'Что НЕ построил Карл IV?',
        options: ['Карлов университет', 'Карлов мост', 'Национальный театр', 'Перестройка Пражского замка'],
        correctAnswer: 2,
      },
      {
        id: 'b1-17-q4',
        question: 'Когда началось чешское национальное возрождение?',
        options: ['В семнадцатом веке', 'В восемнадцатом веке', 'В девятнадцатом веке', 'В двадцатом веке'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 18: Cestování po Evropě ---
  {
    id: 'b1-18',
    level: 'B1',
    title: 'Cestování po Evropě',
    titleRussian: 'Путешествие по Европе',
    text: `Cestování po Evropě je jednou z největších výhod života v České republice. Díky tomu, že Česko leží v srdci Evropy, můžete za pár hodin dojet vlakem nebo autem do Německa, Rakouska, Polska nebo na Slovensko. Všechny tyto země mají bohatou kulturu, krásnou přírodu a lahodné jídlo.
Jednou z nejlepších možností, jak cestovat po Evropě, je Interrail pas. S Interrail pasem můžete jezdit vlaky v celé Evropě za jednu cenu. Je to obzvláště výhodné pro mladé lidi do dvaceti šesti let, kteří mají slevu. Předloni jsem s přáteli cestoval s Interrail pasem a navštívili jsme šest zemí za čtrnáct dní.
Nezapomenutelná byla návštěva Benátek v Itálii. Plavit se po kanálech v gondole, obdivovat gotické paláce a pít italskou kávu na náměstí svatého Marka — to jsou zážitky, které si pamatuji celý život. Také jsme navštívili Vídeň, kde jsme viděli operu a ochutnali tradiční vídeňský štrúdl.
Cestování mě učí být otevřený a tolerantní. Když poznávám jiné kultury, zvyky a jazyky, získávám nový pohled na svět. Myslím, že každý člověk by měl cestovat, protože to obohacuje život a pomáhá porozumět ostatním lidem.`,
    textRussian: `Путешествие по Европе — одно из главных преимуществ жизни в Чешской Республике. Благодаря тому, что Чехия находится в сердце Европы, можно за несколько часов доехать на поезде или машине до Германии, Австрии, Польши или Словакии. Все эти страны богаты культурой, красивой природой и вкусной едой.
Одна из лучших возможностей путешествовать по Европе — билет Interrail. С билетом Interrail можно ездить на поездах по всей Европе за одну цену. Это особенно выгодно для молодых людей до двадцати шести лет, у которых есть скидка. Позапрошлый год я путешествовал с билетом Interrail с друзьями, и мы посетили шесть стран за четырнадцать дней.
Незабываемым было посещение Венеции в Италии. Кататься по каналам на гондоле, восхищаться готическими дворцами и пить итальянский кофе на площади Святого Марка — это впечатления, которые я помню всю жизнь. Мы также посетили Вену, где увидели оперу и попробовали традиционный венский штрудель.
Путешествия учат меня быть открытым и терпимым. Когда я знакомлюсь с другими культурами, обычаями и языками, я приобретаю новый взгляд на мир. Я думаю, что каждый человек должен путешествовать, потому что это обогащает жизнь и помогает понять других людей.`,
    vocabulary: [
      { czech: 'Interrail pas', russian: 'билет Interrail' },
      { czech: 'výhodný', russian: 'выгодный' },
      { czech: 'nezapomenutelný', russian: 'незабываемый' },
      { czech: 'gondola', russian: 'гондола' },
      { czech: 'gotický', russian: 'готический' },
      { czech: 'tolerantní', russian: 'терпимый' },
      { czech: 'obohacovat', russian: 'обогащать' },
      { czech: 'ochutnat', russian: 'попробовать (на вкус)' },
    ],
    questions: [
      {
        id: 'b1-18-q1',
        question: 'Почему путешествовать по Европе удобно из Чехии?',
        options: ['Дешёвые билеты', 'Чехия в центре Европы', 'Много аэропортов', 'Хорошая погода'],
        correctAnswer: 1,
      },
      {
        id: 'b1-18-q2',
        question: 'Сколько стран автор посетил за четырнадцать дней?',
        options: ['Три', 'Четыре', 'Пять', 'Шесть'],
        correctAnswer: 3,
      },
      {
        id: 'b1-18-q3',
        question: 'Где автор катался на гондоле?',
        options: ['В Праге', 'В Венеции', 'В Вене', 'В Париже'],
        correctAnswer: 1,
      },
      {
        id: 'b1-18-q4',
        question: 'Что, по мнению автора, даёт путешествие?',
        options: ['Только усталость', 'Обогащает жизнь и помогает понять других', 'Много фотографий', 'Дорогие воспоминания'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 19: Volný čas ---
  {
    id: 'b1-19',
    level: 'B1',
    title: 'Volný čas',
    titleRussian: 'Свободное время',
    text: `V dnešní uspěchané době je volný čas vzácný a cenný. Mnoho lidí pracuje dlouhé hodiny a má málo času na koníčky a odpočinek. Podle průzkumů tráví Češi průměrně tři hodiny denně volným časem, což je méně než průměr v Evropské unii. Myslím, že je důležité věnovat čas tomu, co nás skutečně dělá šťastnými.
Moje oblíbené činnosti v volném čase se mění podle ročního období. V létě jezdím na kole, plavu a chodím na výlety do přírody. V zimě se věnuji lyžování a čtení knih u krbu. Rád také vařím nové recepty, které najdu na internetu. Vaření je pro mě způsob relaxace — když vařím, zapomínám na starosti.
V poslední době se stále více lidí věnuje kreativním činnostem. Malování, fotografie, hudba a psaní jsou velmi populární. Můj kamarád začal s keramikou a řekl, že mu to nesmírně pomáhá uklidnit mysl. Sociální sítě ukazují, že lidé chtějí sdílet své umělecké výtvory a hledat inspiraci.
Domnívám se, že volný čas by měl být především časem pro sebe. Není důležité, co děláte — důležité je, abyste se cítili dobře. Ať už je to sport, umění, setkávání s přáteli nebo jen ticho a klid.`,
    textRussian: `В сегодняшней суетливой поре свободное время — редкость и ценность. Многие люди работают долгие часы и мало времени уделяют хобби и отдыху. По опросам чехи проводят в среднем три часа в день на досуге, что меньше среднего по Европейскому союзу. Я думаю, что важно уделять время тому, что действительно делает нас счастливыми.
Мои любимые занятия в свободное время меняются в зависимости от времени года. Летом я катаюсь на велосипеде, плаваю и хожу в походы на природу. Зимой занимаюсь лыжами и читаю книги у камина. Я также люблю готовить новые рецепты, которые нахожу в интернете. Готовка для меня — способ расслабиться — когда я готовлю, забываю о заботах.
В последнее время всё больше людей занимаются творчеством. Рисование, фотография, музыка и письмо очень популярны. Мой друг начал заниматься керамикой и сказал, что это невероятно помогает ему успокоить разум. Социальные сети показывают, что люди хотят делиться своими художественными творениями и искать вдохновение.
Я считаю, что свободное время должно быть, прежде всего, временем для себя. Неважно, чем вы занимаетесь — важно, чтобы вам было хорошо. Будь то спорт, искусство, встречи с друзьями или просто тишина и покой.`,
    vocabulary: [
      { czech: 'uspěchaný', russian: 'суетливый, торопливый' },
      { czech: 'koníček', russian: 'хобби' },
      { czech: 'průzkum', russian: 'опрос, исследование' },
      { czech: 'roční období', russian: 'время года' },
      { czech: 'keramika', russian: 'керамика' },
      { czech: 'kreativní', russian: 'творческий' },
      { czech: 'relaxace', russian: 'расслабление' },
      { czech: 'umělecký výtvor', russian: 'художественное творение' },
    ],
    questions: [
      {
        id: 'b1-19-q1',
        question: 'Сколько часов в день чехи проводят на досуге?',
        options: ['Один час', 'Два часа', 'Три часа', 'Пять часов'],
        correctAnswer: 2,
      },
      {
        id: 'b1-19-q2',
        question: 'Что автор делает зимой?',
        options: ['Катается на велосипеде', 'Занимается лыжами и читает', 'Плавает', 'Ходит в походы'],
        correctAnswer: 1,
      },
      {
        id: 'b1-19-q3',
        question: 'Что друг автора начал делать недавно?',
        options: ['Рисовать', 'Керамикой', 'Фотографировать', 'Играть на пианино'],
        correctAnswer: 1,
      },
      {
        id: 'b1-19-q4',
        question: 'Что, по мнению автора, самое важное в свободном времени?',
        options: ['Быть продуктивным', 'Делать то, что приносит радость', 'Много работать', 'Путешествовать'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 20: Domov pro všechny ---
  {
    id: 'b1-20',
    level: 'B1',
    title: 'Domov pro všechny',
    titleRussian: 'Дом для всех',
    text: `Bydlení je v Česku jedno z největších témat, které lidi trápí. Ceny nemovitostí v posledních letech prudce vzrostly a mnoho mladých lidí si nemůže dovolit koupit vlastní byt. V Praze se průměrná cena bytu pohybuje kolem osmi milionů korun, což je pro většinu začínajících rodin nedostupné.
Mnoho lidí se proto spoléhá na nájemní bydlení, ale i nájmy jsou dnes velmi vysoké. V centrech velkých měst se platí i dvacet tisíc korun měsíčně za malý byt. To vede k tomu, že mladí lidé žijí s rodiči déle než v minulosti, nebo bydlí v menších městech a dojíždí do práce.
Situace je obzvláště těžká pro lidi, kteří se ocitli v nouzi. Bezdomovectví je problém, který se týká tisíců lidí v Česku. Na ulici žijí lidé různého věku a původu — někdo ztratil práci, někdo má zdravotní problémy nebo rodinné konflikty. Naštěstí existují organizace, které těmto lidem pomáhají — poskytují ubytování, jídlo a odbornou pomoc.
Myslím, že bydlení je základní lidské právo a společnost by měla udělat více pro to, aby byl domov dostupný pro všechny. Stavba dostupných bytů, podpora nájemního bydlení a pomoc lidem v nouzi — to jsou kroky, které bychom měli podpořit. Každý člověk si zaslouží bezpečné místo, kde může spát a žít.`,
    textRussian: `Жильё в Чехии — одна из главных проблем, беспокоящих людей. Цены на недвижимость в последние годы резко выросли, и многие молодые люди не могут позволить себе купить собственную квартиру. В Праге средняя цена квартиры составляет около восьми миллионов крон, что для большинства начинающих семей недоступно.
Поэтому многие люди полагаются на арендное жильё, но и арендные платы сегодня очень высокие. В центрах крупных городов платят до двадцати тысяч крон в месяц за маленькую квартиру. Это приводит к тому, что молодые люди живут с родителями дольше, чем раньше, или живут в маленьких городах и ездят на работу.
Ситуация особенно тяжёлая для людей, оказавшихся в беде. Бездомность — проблема, затрагивающая тысячи людей в Чехии. На улице живут люди разного возраста и происхождения — кто-то потерял работу, у кого-то проблемы со здоровьем или семейные конфликты. К счастью, существуют организации, которые помогают этим людям — предоставляют жильё, еду и профессиональную помощь.
Я думаю, что жильё — основное право человека, и общество должно сделать больше, чтобы дом был доступен для всех. Строительство доступных квартир, поддержка арендного жилья и помощь людям в беде — это шаги, которые мы должны поддержать. Каждый человек заслуживает безопасного места, где можно спать и жить.`,
    vocabulary: [
      { czech: 'nemovitost', russian: 'недвижимость' },
      { czech: 'nájemní bydlení', russian: 'арендное жильё' },
      { czech: 'bezdomovectví', russian: 'бездомность' },
      { czech: 'nouze', russian: 'беда, нужда' },
      { czech: 'dostupný', russian: 'доступный' },
      { czech: 'společnost', russian: 'общество' },
      { czech: 'základní právo', russian: 'основное право' },
      { czech: 'odborná pomoc', russian: 'профессиональная помощь' },
    ],
    questions: [
      {
        id: 'b1-20-q1',
        question: 'Какова средняя цена квартиры в Праге?',
        options: ['Около трёх миллионов крон', 'Около пяти миллионов крон', 'Около восьми миллионов крон', 'Около пятнадцати миллионов крон'],
        correctAnswer: 2,
      },
      {
        id: 'b1-20-q2',
        question: 'Что делают многие молодые люди из-за высоких цен?',
        options: ['Уезжают из страны', 'Живут с родителями или в пригородах', 'Покупают дом', 'Живут в палатках'],
        correctAnswer: 1,
      },
      {
        id: 'b1-20-q3',
        question: 'Что организации предоставляют бездомным?',
        options: ['Только деньги', 'Жильё, еду и профессиональную помощь', 'Только еду', 'Ничего'],
        correctAnswer: 1,
      },
      {
        id: 'b1-20-q4',
        question: 'Что автор считает основным правом человека?',
        options: ['Образование', 'Жильё', 'Работа', 'Здоровье'],
        correctAnswer: 1,
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

  // --- Story 21: Evropská unie ---
  {
    id: 'b2-11',
    level: 'B2',
    title: 'Evropská unie',
    titleRussian: 'Европейский союз',
    text: `Česká republika je členem Evropské unie od roku 2004. Vstup do EU zásadně změnil naši ekonomiku, politiku i každodenní život. Otevřely se hranice, zrušilo se vízum a Češi získali právo pracovat a studovat v jakékoliv členské zemi. Mnoho mladých lidí využilo této příležitosti a odjelo za prací do Německa, Rakouska nebo Skandinávie.

Přestože EU přináší mnoho výhod,existují i výrazné nevýhody. Někteří lidé pocítují ztrátu národní suverenity a kritizují to, že důležitá rozhodnutí přijímají úředníci v Bruselu, nikoliv volení politici v Praze. Euroskeptici argumentují, že Česko přispívá do rozpočtu EU více, než z něj získává, a že by země měla mít větší kontrolu nad vlastními zákony.

Na druhé straně zastánci EU upozorňují, že bez evropské integrace by Česko jako malá země měla jen omezený vliv na mezinárodní scéně. Členství v uni nám umožňuje podílet se na tvorbě evropského práva, spolupracovat při řešení společných problémů jako je změna klimatu nebo migrace, a těžit z jednotného trhu s více než čtyřmi sty miliony spotřebitelů.

Otázka evropské integrace zůstává jedním z nejdiskutovanějších témat. Myslím, že by obě strany měly naslouchat jedné druhé a hledat kompromis. Evropa není dokonalá, ale společně jsme silnější než samostatně.`,
    textRussian: `Чешская Республика является членом Европейского союза с 2004 года. Вступление в ЕС коренным образом изменило нашу экономику, политику и повседневную жизнь. Открылись границы, отменены визы, и чехи получили право работать и учиться в любой стране-участнице. Многие молодые люди воспользовались этой возможностью и уехали на работу в Германию, Австрию или Скандинавию.

Несмотря на то, что ЕС приносит много преимуществ, существуют и заметные недостатки. Некоторые люди чувствуют потерю национального суверенитета и критикуют то, что важные решения принимают чиновники в Брюсселе, а не избранные политики в Праге. Евроскептики утверждают, что Чехия вносит в бюджет ЕС больше, чем получает, и что страна должна иметь больший контроль над собственными законами.

С другой стороны, сторонники ЕС отмечают, что без европейской интеграции Чехия как небольшая страна имела бы лишь ограниченное влияние на международной арене. Членство в союзе позволяет нам участвовать в формировании европейского права, сотрудничать в решении общих проблем, таких как изменение климата или миграция, и извлекать выгоду из единого рынка с более чем четырьмястами миллионами потребителей.

Вопрос европейской интеграции остаётся одной из самых обсуждаемых тем. Я думаю, что обе стороны должны слушать друг друга и искать компромисс. Европа не совершенна, но вместе мы сильнее, чем по отдельности.`,
    vocabulary: [
      { czech: 'suverenita', russian: 'суверенитет' },
      { czech: 'rozpočet', russian: 'бюджет' },
      { czech: 'integrace', russian: 'интеграция' },
      { czech: 'mezinárodní scéna', russian: 'международная арена' },
      { czech: 'jednotný trh', russian: 'единый рынок' },
      { czech: 'euroskeptik', russian: 'евроскептик' },
      { czech: 'kompromis', russian: 'компромисс' },
      { czech: 'úředník', russian: 'чиновник' },
    ],
    questions: [
      {
        id: 'b2-11-q1',
        question: 'В каком году Чехия вступила в ЕС?',
        options: ['В 2000 году', 'В 2002 году', 'В 2004 году', 'В 2007 году'],
        correctAnswer: 2,
      },
      {
        id: 'b2-11-q2',
        question: 'Что критикуют евроскептики?',
        options: ['Открытые границы', 'Решения, принимаемые в Брюсселе', 'Свободную торговлю', 'Климатические политики'],
        correctAnswer: 1,
      },
      {
        id: 'b2-11-q3',
        question: 'Какое преимущество ЕС для малых стран упоминает автор?',
        options: ['Бесплатное образование', 'Большее влияние на международной арене', 'Сильная армия', 'Дешёвая нефть'],
        correctAnswer: 1,
      },
      {
        id: 'b2-11-q4',
        question: 'Сколько потребителей в едином рынке ЕС?',
        options: ['Более 200 миллионов', 'Более 300 миллионов', 'Более 400 миллионов', 'Более 500 миллионов'],
        correctAnswer: 2,
      },
      {
        id: 'b2-11-q5',
        question: 'Какую позицию занимает автор по вопросу ЕС?',
        options: ['Полностью против', 'Полностью за', 'За диалог и компромисс', 'Не имеет мнения'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 22: Doprava budoucnosti ---
  {
    id: 'b2-12',
    level: 'B2',
    title: 'Doprava budoucnosti',
    titleRussian: 'Транспорт будущего',
    text: `Představte si město, ve kterém se auta pohybují bez řidičů, ulice jsou tiché a čistší a veřejná doprava přijede přesně včas. To není sci-fi — v některých městech už to začíná být realitou. Autonomní vozidla se testují v pilotních projektech v San Francisku, Šanghaji i v německých městech.

Technologie samořiditelných aut je založena na kombinaci senzorů, kamer a umělé inteligence. Automobily dokážou rozpoznat chodce, cyklisty, překážky a dopravní značky. Podle studií by mohlo dojít k výraznému snížení počtu nehod, protože algoritmy nepodléhají únavě ani rozptýlení. Otázkou však zůstává, jak by se systém choval v nečekaných situacích, které nelze naprogramovat předem.

Dalším trendem je elektrifikace letectví. Několik firem vyvíjí malá elektrická letadla pro kratší vzdálenosti, tzv. air taxis. Pokud by se tato technologie prosadila, mohli bychom létat mezi městy za zlomek současné ceny a s mnohem menšími emisemi. Překážkou je zatím kapacita baterií a bezpečnostní regulace.

Přestože budoucnost dopravy zní lákavě, nesmíme zapomínat na sociální dopady. Mnoho lidí pracuje jako řidiči kamionů, taxikáři nebo kurýři. Pokud by jejich profese zmizely, bylo by nutné zajistit jejich přeskolení a nové pracovní příležitosti. Technologie musí sloužit lidem, ne naopak.`,
    textRussian: `Представьте себе город, в котором автомобили движутся без водителей, улицы тихие и чистые, а общественный транспорт приходит точно вовремя. Это не научная фантастика — в некоторых городах это уже начинает становиться реальностью. Автономные транспортные средства тестируются в пилотных проектах в Сан-Франциско, Шанхае и немецких городах.

Технология беспилотных автомобилей основана на комбинации датчиков, камер и искусственного интеллекта. Автомобили способны распознавать пешеходов, велосипедистов, препятствия и дорожные знаки. По данным исследований, количество аварий может значительно сократиться, поскольку алгоритмы не подвержены усталости и отвлечению. Однако остаётся вопрос, как система будет вести себя в непредвиденных ситуациях, которые нельзя запрограммировать заранее.

Ещё одной тенденцией является электрификация авиации. Несколько компаний разрабатывают небольшие электрические самолёты для коротких дистанций, так называемые аэротакси. Если эта технология приживётся, мы могли бы летать между городами за долю нынешней цены и с гораздо меньшими выбросами. Препятствием пока является ёмкость батарей и правила безопасности.

Несмотря на то, что будущее транспорта звучит заманчиво, мы не должны забывать о социальных последствиях. Многие люди работают водителями грузовиков, таксистами или курьерами. Если их профессии исчезнут, необходимо будет обеспечить их переподготовку и новые рабочие возможности. Технология должна служить людям, а не наоборот.`,
    vocabulary: [
      { czech: 'autonomní vozidlo', russian: 'автономное транспортное средство' },
      { czech: 'senzor', russian: 'датчик' },
      { czech: 'rozptýlení', russian: 'отвлечение, рассеянность' },
      { czech: 'elektrifikace', russian: 'электрификация' },
      { czech: 'kapacita baterií', russian: 'ёмкость батарей' },
      { czech: 'přeskolení', russian: 'переподготовка' },
      { czech: 'sociální dopad', russian: 'социальные последствия' },
      { czech: 'regulace', russian: 'регулирование' },
    ],
    questions: [
      {
        id: 'b2-12-q1',
        question: 'На чём основана технология беспилотных автомобилей?',
        options: ['Только на GPS', 'На датчиках, камерах и искусственном интеллекте', 'На радиоуправлении', 'На магнитных дорожках'],
        correctAnswer: 1,
      },
      {
        id: 'b2-12-q2',
        question: 'Почему беспилотные автомобили могут быть безопаснее?',
        options: ['Они быстрее', 'Алгоритмы не устают и не отвлекаются', 'У них мощные тормоза', 'Они меньше'],
        correctAnswer: 1,
      },
      {
        id: 'b2-12-q3',
        question: 'Что такое air taxis?',
        options: ['Вертолёты', 'Маленькие электрические самолёты для коротких дистанций', 'Дроны для доставки', 'Электрические поезда'],
        correctAnswer: 1,
      },
      {
        id: 'b2-12-q4',
        question: 'Какую социальную проблему упоминает автор?',
        options: ['Дорожные пробки', 'Исчезновение профессий водителей', 'Загрязнение воздуха', 'Высокие цены на топливо'],
        correctAnswer: 1,
      },
      {
        id: 'b2-12-q5',
        question: 'Какова основная мысль автора о технологиях?',
        options: ['Технологии — это зло', 'Технологии должны служить людям', 'Технологии решат все проблемы', 'Технологии — это только бизнес'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 23: Sociální sítě ---
  {
    id: 'b2-13',
    level: 'B2',
    title: 'Sociální sítě',
    titleRussian: 'Социальные сети',
    text: `Sociální sítě se staly neodmyslitelnou součástí našeho života. Každý den trávíme průměrně přes dvě hodiny na platformách jako Instagram, TikTok nebo Facebook. Zpočátku to vypadalo jako nevinná zábava, ale postupně se ukázalo, že tyto aplikace mají hluboký vliv na naši psychiku, vztahy i vnímání světa.

Algoritmy sociálních sítí jsou navrženy tak, aby udržely naši pozornost co nejdéle. Ukazují nám obsah, který vyvolává silné emoce — zlobu, pobouření nebo obavy. Studie prokázaly, že čím více času lidé tráví na sociálních sítích, tím více se cítí osamělí a nespokojení se svým životem. Neustálé srovnávání se s ideálními obrázky ostatních vede k pocitům méněcennosti.

Na druhou stranu nelze popřít, že sociální sítě přinesly i pozitivní změny. Umožnily spojení lidí napříč kontinenty, usnadnily organizaci dobrovolnických aktivit a daly hlas menšinám, které dříve neměly možnost se projevit. Během pandemie byly sociální sítě pro mnohé jediným způsobem, jak zůstat v kontaktu s blízkými.

Domnívám se, že klíčem je uvědomělý přístup. Místo toho, abychom sociální sítě zcela odmítli, měli bychom se naučit ovládat svůj čas a kriticky hodnotit informace, které přijímáme. Digitální gramotnost by měla být součástí vzdělávání už od útlého věku.`,
    textRussian: `Социальные сети стали неотъемлемой частью нашей жизни. Каждый день мы в среднем проводим более двух часов на таких платформах, как Instagram, TikTok или Facebook. Поначалу это выглядело как невинное развлечение, но постепенно выяснилось, что эти приложения оказывают глубокое влияние на нашу психику, отношения и восприятие мира.

Алгоритмы социальных сетей созданы так, чтобы удерживать наше внимание как можно дольше. Они показывают нам контент, вызывающий сильные эмоции — гнев, возмущение или тревогу. Исследования доказали, что чем больше времени люди проводят в социальных сетях, тем больше они чувствуют себя одинокими и недовольными своей жизнью. Постоянное сравнение себя с идеальными образами других ведёт к чувству неполноценности.

С другой стороны, нельзя отрицать, что социальные сети принесли и позитивные изменения. Они позволили объединить людей на разных континентах, упростили организацию волонтёрской деятельности и дали голос меньшинствам, которые раньше не имели возможности высказаться. Во время пандемии социальные сети для многих были единственным способом оставаться на связи с близкими.

Я считаю, что ключом является осознанный подход. Вместо того чтобы полностью отвергать социальные сети, мы должны научиться контролировать своё время и критически оценивать информацию, которую получаем. Цифровая грамотность должна быть частью образования с раннего возраста.`,
    vocabulary: [
      { czech: 'algoritmus', russian: 'алгоритм' },
      { czech: 'vnímání světa', russian: 'восприятие мира' },
      { czech: 'pocit méněcennosti', russian: 'чувство неполноценности' },
      { czech: 'digitální gramotnost', russian: 'цифровая грамотность' },
      { czech: 'uvědomělý přístup', russian: 'осознанный подход' },
      { czech: 'odmyslitelný', russian: 'неотделимый' },
      { czech: 'pobouření', russian: 'возмущение, негодование' },
      { czech: 'zpočátku', russian: 'поначалу' },
    ],
    questions: [
      {
        id: 'b2-13-q1',
        question: 'Сколько в среднем времени проводят люди в социальных сетях?',
        options: ['Менее одного часа', 'Более двух часов', 'Более четырёх часов', 'Более шести часов'],
        correctAnswer: 1,
      },
      {
        id: 'b2-13-q2',
        question: 'Для чего предназначены алгоритмы социальных сетей?',
        options: ['Для обучения', 'Для удержания внимания пользователей', 'Для защиты данных', 'Для экономии денег'],
        correctAnswer: 1,
      },
      {
        id: 'b2-13-q3',
        question: 'Что доказали исследования о социальных сетях?',
        options: ['Они делают людей счастливее', 'Они вызывают одиночество и недовольство', 'Они не влияют на психику', 'Они улучшают отношения'],
        correctAnswer: 1,
      },
      {
        id: 'b2-13-q4',
        question: 'Какое позитивное влияние социальных сетей упоминает автор?',
        options: ['Повышение зарплат', 'Связь людей и голос меньшинствам', 'Лучшая еда', 'Больше путешествий'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 24: Láska a vztahy ---
  {
    id: 'b2-14',
    level: 'B2',
    title: 'Láska a vztahy',
    titleRussian: 'Любовь и отношения',
    text: `Moderní způsob seznamování se radikálně liší od toho, co znali naši prarodiče. Dnes je běžné poznat partnera přes seznamovací aplikace, kde se rozhodujeme za pár sekund na základě fotografie a krátkého popisu. Tento způsob sice zvyšuje šanci na seznámení, ale zároveň vytváří iluzi, že ideální partner je jen jedno kliknutí daleko.

Paradoxně máme dnes více možností než kdykoliv předtím, a přesto je mnoho lidí samotnějších. Psychologové to vysvětlují tzv. paradokem výběru — čím více možností máme, tím těžší je se rozhodnout a tím spíše litujeme, že jsme si nevybrali lépe. Lidé často porovnávají své partnery s ideálními představami, které si vytvořili na základě filtrů a upravených fotografií.

Dlouhodobé vztahy vyžadují něco, co aplikace nenabízejí — trpělivost, schopnost kompromisu a ochotu pracovat na problémech. Mladá generace má často zkreslené představy o lásce z filmů a seriálů, kde vše probíhá hladce a romanticky. Ve skutečnosti je každý vztah plný výzev, nedorozumění a každodenní rutiny.

Přesto věřím, že skutečná láska existuje. Nejde ale o ten dramatický pocit z počátku, spíše o hluboké porozumění, důvěru a rozhodnutí být s někým i v těžkých chvílích. Láska není něco, co jen najdeme — je to něco, co společně vytváříme.`,
    textRussian: `Современный способ знакомства кардинально отличается от того, что знали наши бабушки и дедушки. Сегодня обычно познакомиться с партнёром через приложения для знакомств, где мы принимаем решение за несколько секунд на основе фотографии и краткого описания. Этот способ действительно увеличивает шанс на знакомство, но в то же время создаёт иллюзию, что идеальный партнёр всего в одном клике.

Парадоксально, но сегодня у нас больше возможностей, чем когда-либо раньше, и всё же многие люди чувствуют себя одинокими. Психологи объясняют это так называемым парадоксом выбора — чем больше у нас вариантов, тем сложнее принять решение и тем чаще мы сожалеем, что не выбрали лучше. Люди часто сравнивают своих партнёров с идеальными образами, которые создали на основе фильтров и отредактированных фотографий.

Долгосрочные отношения требуют того, что приложения не предлагают — терпения, способности к компромиссу и готовности работать над проблемами. У молодого поколения часто искажённые представления о любви из фильмов и сериалов, где всё идёт гладко и романтично. На деле каждые отношения полны вызовов, недоразумений и повседневной рутины.

Тем не менее я верю, что настоящая любовь существует. Но это не то драматическое чувство в начале, а скорее глубокое понимание, доверие и решение быть с кем-то и в трудные минуты. Любовь — это не то, что мы просто находим, это то, что мы вместе создаём.`,
    vocabulary: [
      { czech: 'seznamovací aplikace', russian: 'приложение для знакомств' },
      { czech: 'paradox výběru', russian: 'парадокс выбора' },
      { czech: 'zkreslená představa', russian: 'искажённое представление' },
      { czech: 'trpělivost', russian: 'терпение' },
      { czech: 'kompromis', russian: 'компромисс' },
      { czech: 'porozumění', russian: 'понимание' },
      { czech: 'důvěra', russian: 'доверие' },
      { czech: 'iluze', russian: 'иллюзия' },
    ],
    questions: [
      {
        id: 'b2-14-q1',
        question: 'Что такое парадокс выбора?',
        options: ['Больше выбора — легче решить', 'Больше выбора — сложнее решить и больше сожалений', 'Меньше выбора — больше счастья', 'Выбор не влияет на чувства'],
        correctAnswer: 1,
      },
      {
        id: 'b2-14-q2',
        question: 'Что создают фильтры и отредактированные фото?',
        options: ['Реалистичные образы', 'Идеальные, нереалистичные образы', 'Исторические документы', 'Художественные произведения'],
        correctAnswer: 1,
      },
      {
        id: 'b2-14-q3',
        question: 'Что необходимо для долгосрочных отношений?',
        options: ['Много денег', 'Терпение, компромисс и готовность работать над проблемами', 'Общие хобби', 'Большой дом'],
        correctAnswer: 1,
      },
      {
        id: 'b2-14-q4',
        question: 'Как автор определяет настоящую любовь?',
        options: ['Драматическое чувство', 'Понимание, доверие и общие усилия', 'Физическое притяжение', 'Общие интересы'],
        correctAnswer: 1,
      },
      {
        id: 'b2-14-q5',
        question: 'Откуда молодое поколение получает искажённые представления о любви?',
        options: ['Из книг', 'Из фильмов и сериалов', 'От родителей', 'Из школы'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 25: Mentální zdraví ---
  {
    id: 'b2-15',
    level: 'B2',
    title: 'Mentální zdraví',
    titleRussian: 'Психическое здоровье',
    text: `Mentální zdraví je stejně důležité jako zdraví fyzické, ale společnost mu dlouho nevěnovala dostatečnou pozornost. Lidé s úzkostmi, depresí nebo jinými psychickými potížemi se často stydí vyhledat pomoc, protože se obávají předsudků okolí. Teprve v posledních letech se začalo mluvit o duševním zdraví otevřeněji.

Stres je přirozenou součástí života, ale dlouhodobý chronický stres může mít devastující dopady na organismus. Zvyšuje riziko srdečních chorob, oslabuje imunitní systém a negativně ovlivňuje spánek i schopnost soustředění. V dnešní uspěchané době se mnoho lidí cítí pod tlakem — musí být výkonní v práci, dokonalí rodiče a aktivní na sociálních sítích.

Psychoterapie se ukazuje jako účinný nástroj pro řešení mnoha psychických obtíží. Na rozdíl od léků, které často jen potlačují příznaky, terapie pomáhá odhalit příčiny problémů a vybudovat zdravější způsoby zvládání náročných situací. Kognitivně-behaviorální terapie učí pacienty rozpoznávat negativní myšlenkové vzorce a nahrazovat je realističtějšími.

Domnívám se, že prevence je klíčová. Dostatečný spánek, pravidelný pohyb, vyvážená strava a čas strávený v přírodě mohou výrazně přispět k duševní pohodě. Neměli bychom se stydět mluvit o svých pocitech a vyhledávat podporu, když ji potřebujeme. Požádat o pomoc není znakem slabosti — je to znak odvahy.`,
    textRussian: `Психическое здоровье не менее важно, чем физическое, но общество долгое время не уделяло ему достаточного внимания. Люди с тревогой, депрессией или другими психологическими проблемами часто стесняются обратиться за помощью, потому что боятся предубеждений окружающих. Только в последние годы стали говорить о душевном здоровье более открыто.

Стресс — естественная часть жизни, но долгосрочный хронический стресс может иметь разрушительные последствия для организма. Он повышает риск сердечных заболеваний, ослабляет иммунную систему и негативно влияет на сон и способность концентрироваться. В сегодняшней суетливой эпохе многие люди чувствуют давление — они должны быть продуктивными на работе, идеальными родителями и активными в социальных сетях.

Психотерапия доказала свою эффективность как инструмент для решения многих психологических проблем. В отличие от лекарств, которые часто лишь подавляют симптомы, терапия помогает выявить причины проблем и выработать более здоровые способы справляться с трудными ситуациями. Когнитивно-поведенческая терапия учит пациентов распознавать негативные мыслительные шаблоны и заменять их более реалистичными.

Я считаю, что профилактика — ключевая. Достаточный сон, регулярная физическая активность, сбалансированное питание и время на природе могут значительно способствовать душевному благополучию. Нам не следует стесняться говорить о своих чувствах и обращаться за поддержкой, когда она нужна. Просить о помощи — не признак слабости, это признак смелости.`,
    vocabulary: [
      { czech: 'mentální zdraví', russian: 'психическое здоровье' },
      { czech: 'úzkost', russian: 'тревога' },
      { czech: 'předsudek', russian: 'предубеждение' },
      { czech: 'chronický stres', russian: 'хронический стресс' },
      { czech: 'psychoterapie', russian: 'психотерапия' },
      { czech: 'kognitivně-behaviorální', russian: 'когнитивно-поведенческий' },
      { czech: 'myšlenkový vzorec', russian: 'мыслительный шаблон' },
      { czech: 'prevence', russian: 'профилактика' },
    ],
    questions: [
      {
        id: 'b2-15-q1',
        question: 'Почему люди часто стесняются обращаться за психологической помощью?',
        options: ['Из-за денег', 'Из-за страха перед предубеждениями окружающих', 'Из-за отсутствия врачей', 'Из-за нехватки времени'],
        correctAnswer: 1,
      },
      {
        id: 'b2-15-q2',
        question: 'На что влияет хронический стресс?',
        options: ['Только на настроение', 'На сердце, иммунитет, сон и концентрацию', 'Только на вес', 'На зрение'],
        correctAnswer: 1,
      },
      {
        id: 'b2-15-q3',
        question: 'В чём преимущество терапии перед лекарствами?',
        options: ['Быстрее действует', 'Выявляет причины и учит здоровым стратегиям', 'Дешевле', 'Не имеет побочных эффектов'],
        correctAnswer: 1,
      },
      {
        id: 'b2-15-q4',
        question: 'Что автор считает ключевым для психического здоровья?',
        options: ['Лекарства', 'Профилактика: сон, движение, питание, природа', 'Путешествия', 'Жёсткий режим'],
        correctAnswer: 1,
      },
      {
        id: 'b2-15-q5',
        question: 'Что, по мнению автора, означает просьба о помощи?',
        options: ['Слабость', 'Глупость', 'Смелость', 'Эгоизм'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 26: Umělá inteligence ---
  {
    id: 'b2-16',
    level: 'B2',
    title: 'Umělá inteligence',
    titleRussian: 'Искусственный интеллект',
    text: `Umělá inteligence proniká do téměř všech oblastí našeho života. Od doporučovacích algoritmů na Netflixu přes automatické překlady až po systémy diagnostikující nemoci — AI už není jen tématem science fiction. Otázka není, zda umělá inteligence změní náš svět, ale jak a za jakou cenu.

Jednou z největších výzev je vliv AI na trh práce. Automatizace ohrožuje nejen manuální, ale stále více i kancelářská povolání. Algoritmy dokážou analyzovat právní dokumenty, psát články a dokonce generovat obrázky, které lze jen stěží odlišit od lidských děl. Odborníci se neshodují, zda AI spíše zničí pracovní místa, nebo vytvoří nová. Pravděpodobně se stane obojí — některé profese zmizí, ale zároveň vzniknou role, které dnes ještě neexistují.

Etičtí filozofové upozorňují na další problémy. Kdo nese odpovědnost, když autonomní vozidlo způsobí nehodu? Jak zajistit, aby rozhodovací algoritmy nebyly založeny na předsudcích? A co práva autorská — patří umělecké dílo vytvořené umělou inteligencí programátorovi, uživateli, nebo nikomu?

Jsme na prahu nové éry a je nezbytné, abychom jako společnost stanovili jasné pravidla. Umělá inteligence by měla sloužit člověku, nikoliv nahrazovat jeho schopnost kriticky myslet a tvořit. Technologie je nástroj, ne cíl sám o sobě.`,
    textRussian: `Искусственный интеллект проникает практически во все сферы нашей жизни. От рекомендательных алгоритмов на Netflix до автоматических переводов и систем диагностики заболеваний — ИИ больше не просто тема научной фантастики. Вопрос не в том, изменит ли искусственный интеллект наш мир, а в том, как и какой ценой.

Одной из главных вызовов является влияние ИИ на рынок труда. Автоматизация угрожает не только ручному, но всё больше и офисному труду. Алгоритмы способны анализировать юридические документы, писать статьи и даже генерировать изображения, которые с трудом можно отличить от человеческих работ. Эксперты расходятся во мнениях, уничтожит ли ИИ рабочие места или создаст новые. Вероятнее всего произойдёт и то, и другое — некоторые профессии исчезнут, но одновременно появятся роли, которых сегодня ещё не существует.

Этики-философы указывают на дополнительные проблемы. Кто несёт ответственность, когда беспилотный автомобиль вызывает аварию? Как обеспечить, чтобы алгоритмы принятия решений не основывались на предубеждениях? И что с авторскими правами — кому принадлежит произведение искусства, созданное искусственным интеллектом: программисту, пользователю или никому?

Мы на пороге новой эры, и необходимо, чтобы мы как общество установили чёткие правила. Искусственный интеллект должен служить человеку, а не заменять его способность критически мыслить и творить. Технология — это инструмент, а не цель сама по себе.`,
    vocabulary: [
      { czech: 'umělá inteligence', russian: 'искусственный интеллект' },
      { czech: 'automatizace', russian: 'автоматизация' },
      { czech: 'diagnostikovat', russian: 'диагностировать' },
      { czech: 'odpovědnost', russian: 'ответственность' },
      { czech: 'předsudek', russian: 'предубеждение' },
      { czech: 'autorské právo', russian: 'авторское право' },
      { czech: 'kriticky myslet', russian: 'критически мыслить' },
      { czech: 'nástroj', russian: 'инструмент' },
    ],
    questions: [
      {
        id: 'b2-16-q1',
        question: 'Какая основная проблема, связанная с ИИ и трудом?',
        options: ['ИИ слишком дорогой', 'Автоматизация угрожает многим профессиям', 'ИИ работает медленно', 'ИИ не умеет читать'],
        correctAnswer: 1,
      },
      {
        id: 'b2-16-q2',
        question: 'Что, по мнению авторов, скорее всего произойдёт с рабочими местами?',
        options: ['Все исчезнут', 'Все будут созданы', 'Некоторые исчезнут, другие появятся', 'Ничего не изменится'],
        correctAnswer: 2,
      },
      {
        id: 'b2-16-q3',
        question: 'Какой этический вопрос поднимается о беспилотных автомобилях?',
        options: ['Кто их производит', 'Кто несёт ответственность за аварии', 'Сколько они стоят', 'Как быстро ездят'],
        correctAnswer: 1,
      },
      {
        id: 'b2-16-q4',
        question: 'Чему, по мнению автора, должна служить технология?',
        options: ['Бизнесу', 'Человеку', 'Правительству', 'Военным'],
        correctAnswer: 1,
      },
      {
        id: 'b2-16-q5',
        question: 'Как автор характеризует технологию?',
        options: ['Как угрозу', 'Как цель', 'Как инструмент', 'Как развлечение'],
        correctAnswer: 2,
      },
    ],
  },

  // --- Story 27: Cestování ---
  {
    id: 'b2-17',
    level: 'B2',
    title: 'Cestování',
    titleRussian: 'Путешествия',
    text: `Rozhodl jsem se vydat na cestu sám. Nešlo o útěk před problémy, ale spíše o touhu poznat sebe sama v neznámém prostředí. Když cestujete s někým, neustále kompromisujete — kde se najíst, co navštívit, kdy vstát. Sólo cestování mi dalo svobodu, kterou jsem dříve nezažil. Bylo to poprvé, co jsem si uvědomil, jak moc ovlivňují nás ostatní lidé.

Mí první zastávkou bylo Portugalsko. Pozdním odpolednem jsem dorazil do Lisabonu, unavený z letu a plný očekávání. Měl jsem jen batoh, mapu v telefonu a rezervaci na první noc. Všechno ostatní jsem nechal náhodě. Ten večer jsem seděl v malé hospůdce v uličkách Alfamy a jedl tradiční sardinky, zatímco kolem mě hrála živá fado hudba. Cítil jsem se naprosto šťastný a přitom svobodný.

Nejvíce mě překvapilo, jak snadno jsem navazoval kontakt s lidmi. Když cestujete sami, jste přístupnější — ostatní cestovatelé vás snáze osloví a místní jsou ochotnější pomoci. V hostelu v Portu jsem potkal skupinu přátel z různých zemí a strávili jsme spolu celý týden objevováním města a jeho okolí.

Cestování samo o sobě nás nezmění, ale odhalí to, co už v nás je. Když jste daleko od domova, odhodíte masky, které nosíte každý den, a ukážete svou skutečnou tvář. To je ta největší hodnota cestování — ne poznávání jiných zemí, ale poznávání sami sebe.`,
    textRussian: `Я решил отправиться в путешествие в одиночку. Это не было бегством от проблем, а скорее стремлением познать себя в незнакомой обстановке. Когда вы путешествуете с кем-то, вы постоянно идёте на компромисс — где поесть, что посетить, когда вставать. Самостоятельное путешествие дало мне свободу, которую я раньше не испытывал. Впервые я осознал, как сильно на нас влияют другие люди.

Моей первой остановкой была Португалия. Поздним днём я прибыл в Лиссабон, уставший после перелёта и полный ожиданий. У меня был только рюкзак, карта в телефоне и бронь на первую ночь. Всё остальное я предоставил случаю. В тот вечер я сидел в маленьком трактире в улочках Алфамы и ел традиционные сардины, а вокруг меня звучала живая музыка фаду. Я чувствовал себя абсолютно счастливым и одновременно свободным.

Больше всего меня удивило, как легко я заводил знакомства с людьми. Когда вы путешествуете одни, вы более открыты — другие путешественники легче к вам подходят, а местные жители охотнее помогают. В хостеле в Порто я познакомился с группой друзей из разных стран, и мы вместе провели целую неделю, исследуя город и его окрестности.

Путешествие само по себе нас не изменит, но оно раскроет то, что уже в нас есть. Когда вы далеко от дома, вы сбрасываете маски, которые носите каждый день, и показываете своё истинное лицо. Это величайшая ценность путешествий — не познание других стран, а познание самих себя.`,
    vocabulary: [
      { czech: 'sólo cestování', russian: 'самостоятельное путешествие' },
      { czech: 'kompromisovat', russian: 'идти на компромисс' },
      { czech: 'odhalit', russian: 'раскрыть' },
      { czech: 'fado', russian: 'фаду (португальская музыка)' },
      { czech: 'oslovit', russian: 'подойти, обратиться' },
      { czech: 'hostel', russian: 'хостел' },
      { czech: 'maska', russian: 'маска' },
      { czech: 'skutečná tvář', russian: 'истинное лицо' },
    ],
    questions: [
      {
        id: 'b2-17-q1',
        question: 'Почему автор решил путешествовать в одиночку?',
        options: ['Убежал от проблем', 'Хотел познать себя в незнакомой обстановке', 'Не нашёл компаньона', 'Так было дешевле'],
        correctAnswer: 1,
      },
      {
        id: 'b2-17-q2',
        question: 'Какая была первая остановка?',
        options: ['Испания', 'Италия', 'Португалия', 'Франция'],
        correctAnswer: 2,
      },
      {
        id: 'b2-17-q3',
        question: 'Что автора больше всего удивило?',
        options: ['Красота природы', 'Лёгкость общения с людьми', 'Цены на еду', 'Качество дорог'],
        correctAnswer: 1,
      },
      {
        id: 'b2-17-q4',
        question: 'Какова, по мнению автора, наибольшая ценность путешествий?',
        options: ['Познание других стран', 'Познание самого себя', 'Дешёвые покупки', 'Красивые фотографии'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 28: Migrace ---
  {
    id: 'b2-18',
    level: 'B2',
    title: 'Migrace',
    titleRussian: 'Миграция',
    text: `Před deseti lety jsem přijel do Česka se dvěma kufry a základními znalostmi češtiny. Moje rozhodnutí opustit rodnou zemi nebylo snadné — znamenalo to opustit rodinu, přátele a všechno, co mi bylo důvěrné. Dnes, když se ohlížím zpět, vidím, že ta cesta mi dala mnohem více, než mi vzala.

První rok byl tou nejtěžší zkouškou. Nepochopení v běžných situacích — v obchodě, u lékaře, na poště — mě frustrovalo a občas i ponižovalo. Lidé mluvili rychle, používali idiomy, které jsem neznal, a občas se zdálo, že se mi posmívají, když jsem se vyjadřoval nepřirozeně. Postupně jsem ale pochopil, že většina lidí nebyla zlá — jen nevěděla, jak s cizincem komunikovat.

Integrace není jednosměrný proces. Vyžaduje úsilí jak od přistěhovalce, tak od přijímající společnosti. Když jsem se naučil jazyk na úrovni, která mi umožnila pracovat, otevřely se mi dveře. Začal jsem rozumět českému humoru, pocítil jsem příslušnost ke komunitě a postupně jsem si vytvořil nový domov.

Migrace je komplexní jev, který nelze redukovat na jednoduchá hesla. Každý migrant má svůj příběh, své důvody a své boje. Místo abychom se obávali odlišností, měli bychom si uvědomit, že rozmanitost je zdrojem síly. Společnost, která dokáže integrovat lidi z různých kultur, je bohatší a odolnější.`,
    textRussian: `Десять лет назад я приехал в Чехию с двумя чемоданами и базовыми знаниями чешского языка. Моё решение покинуть родную страну было непростым — оно означало оставить семью, друзей и всё, что было мне близко. Сегодня, оглядываясь назад, я вижу, что этот путь дал мне гораздо больше, чем забрал.

Первый год был тяжелейшим испытанием. Непонимание в повседневных ситуациях — в магазине, у врача, на почте — расстраивало меня, а иногда и унижало. Люди говорили быстро, использовали идиомы, которых я не знал, и иногда казалось, что они надо мной смеются, когда я выражался неестественно. Постепенно я понял, что большинство людей не были злыми — они просто не знали, как общаться с иностранцем.

Интеграция — это не односторонний процесс. Она требует усилий как от иммигранта, так и от принимающего общества. Когда я выучил язык на уровне, позволившем мне работать, передо мной открылись двери. Я начал понимать чешский юмор, почувствовал принадлежность к сообществу и постепенно создал себе новый дом.

Миграция — сложное явление, которое нельзя свести к простым лозунгам. У каждого мигранта своя история, свои причины и свои борения. Вместо того чтобы бояться отличий, мы должны осознать, что разнообразие — источник силы. Общество, способное интегрировать людей из разных культур, богаче и устойчивее.`,
    vocabulary: [
      { czech: 'migrace', russian: 'миграция' },
      { czech: 'frustrovat', russian: 'расстраивать' },
      { czech: 'ponižovat', russian: 'унижать' },
      { czech: 'integrace', russian: 'интеграция' },
      { czech: 'přijímající společnost', russian: 'принимающее общество' },
      { czech: 'příslušnost', russian: 'принадлежность' },
      { czech: 'komplexní jev', russian: 'сложное явление' },
      { czech: 'rozmanitost', russian: 'разнообразие' },
    ],
    questions: [
      {
        id: 'b2-18-q1',
        question: 'С чем автор приехал в Чехию?',
        options: ['С семьёй', 'С двумя чемоданами и базовым чешским', 'С большим количеством денег', 'С рабочим контрактом'],
        correctAnswer: 1,
      },
      {
        id: 'b2-18-q2',
        question: 'Что было самым трудным в первый год?',
        options: ['Погода', 'Непонимание в повседневных ситуациях', 'Дорогая еда', 'Одиночество'],
        correctAnswer: 1,
      },
      {
        id: 'b2-18-q3',
        question: 'Что, по мнению автора, требует интеграция?',
        options: ['Только усилия мигранта', 'Только усилия общества', 'Усилий обеих сторон', 'Ничего особенного'],
        correctAnswer: 2,
      },
      {
        id: 'b2-18-q4',
        question: 'Что позволило автору работать и найти своё место?',
        options: ['Деньги', 'Высокий уровень чешского языка', 'Помощь друзей', 'Удача'],
        correctAnswer: 1,
      },
      {
        id: 'b2-18-q5',
        question: 'Что автор считает источником силы общества?',
        options: ['Единообразие', 'Разнообразие', 'Традиции', 'Технологии'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 29: Kultura a identita ---
  {
    id: 'b2-19',
    level: 'B2',
    title: 'Kultura a identita',
    titleRussian: 'Культура и идентичность',
    text: `Kultura není jen galerie, muzea a divadla. Je to neviditelná síť norem, hodnot a zvyklostí, které formují to, jakým způsobem vnímáme svět a jak se v něm chováme. Když člověk žije v cizí zemi, začne si tuto síť uvědomovat — věci, které doma považoval za samozřejmé, zde najednou neplatí.

V Česku jsem si musel zvyknout na odlišný styl komunikace. Češi jsou na první pohled zdrženliví a neradi projevují emoce na veřejnosti. Když jsem poprvé pozdravil kolegy na chodbě širokým úsměvem a nadšeným „Dobrý den!", reakce byla spíše překvapená než vřelá. Postupně jsem pochopil, že v češtině je zdvořilost spíše věcí tónu a respektu než výrazných gest.

Globalizace přináší culture mixing — kultury se mísí a ovlivňují. Jíme sushi v Praze, sledujeme americké seriály a posloucháme korejskou hudbu. Na jedné straně to obohacuje naše životy, na druhé straně existuje riziko, že lokální tradice a jazyky postupně vymizí. Malé jazyky jsou obzvláště zranitelné — pokud se jimi nebudou mluvit v každodenním životě, začnou zanikat.

Domnívám se, že kulturní identita by neměla být pevnou zdí, ale spíše propustnou membránou. Můžeme obohacovat svou kulturu o vlivy zvenčí, aniž bychom ztratili to, co nás definuje. Právě schopnost kombinovat tradici s otevřeností je znakem skutečně živé a dynamické společnosti.`,
    textRussian: `Культура — это не только галереи, музеи и театры. Это невидимая сеть норм, ценностей и обычаев, которые формируют то, как мы воспринимаем мир и как себя в нём ведём. Когда человек живёт в чужой стране, он начинает осознавать эту сеть — вещи, которые дома казались само собой разумеющимися, здесь вдруг не действуют.

В Чехии мне пришлось привыкнуть к иному стилю общения. Чехи на первый взгляд сдержанны и не любят проявлять эмоции на публике. Когда я впервые поприветствовал коллег в коридоре широкой улыбкой и восторженным «Добрый день!», реакция была скорее удивлённой, чем тёплой. Постепенно я понял, что в чешском языке вежливость — это скорее вопрос тона и уважения, чем выразительных жестов.

Глобализация приносит смешение культур — культуры смешиваются и влияют друг на друга. Мы едим суши в Праге, смотрим американские сериалы и слушаем корейскую музыку. С одной стороны, это обогащает нашу жизнь, с другой — существует риск, что местные традиции и языки постепенно исчезнут. Малые языки особенно уязвимы — если на них не будут говорить в повседневной жизни, они начнут вымирать.

Я считаю, что культурная идентичность не должна быть крепкой стеной, а скорее проницаемой мембраной. Мы можем обогащать свою культуру внешними влияниями, не теряя при этом того, что нас определяет. Именно способность сочетать традицию с открытостью — признак по-настоящему живого и динамичного общества.`,
    vocabulary: [
      { czech: 'kultura', russian: 'культура' },
      { czech: 'zdrženlivý', russian: 'сдержанный' },
      { czech: 'zdvořilost', russian: 'вежливость' },
      { czech: 'globalizace', russian: 'глобализация' },
      { czech: 'zranitelný', russian: 'уязвимый' },
      { czech: 'zanikat', russian: 'исчезать, вымирать' },
      { czech: 'propustná membrána', russian: 'проницаемая мембрана' },
      { czech: 'dynamický', russian: 'динамичный' },
    ],
    questions: [
      {
        id: 'b2-19-q1',
        question: 'Как автор описывает культуру?',
        options: ['Только музеи и галереи', 'Невидимую сеть норм, ценностей и обычаев', 'Только еду и музыку', 'Только язык'],
        correctAnswer: 1,
      },
      {
        id: 'b2-19-q2',
        question: 'Как автор описывает чехов?',
        options: ['Шумные и эмоциональные', 'Сдержанные и не любящие публичные эмоции', 'Холодные и грубые', 'Очень вежливые и яркие'],
        correctAnswer: 1,
      },
      {
        id: 'b2-19-q3',
        question: 'Какой риск несёт глобализация по мнению автора?',
        options: ['Ничего опасного', 'Исчезновение местных традиций и языков', 'Экономический кризис', 'Политическую нестабильность'],
        correctAnswer: 1,
      },
      {
        id: 'b2-19-q4',
        question: 'С чем автор сравнивает культурную идентичность?',
        options: ['С крепкой стеной', 'С проницаемой мембраной', 'С рекой', 'С книгой'],
        correctAnswer: 1,
      },
      {
        id: 'b2-19-q5',
        question: 'Что является признаком живого общества?',
        options: ['Строгие традиции', 'Способность сочетать традицию с открытостью', 'Изоляция от других культур', 'Отказ от всех традиций'],
        correctAnswer: 1,
      },
    ],
  },

  // --- Story 30: Budoucnost planety ---
  {
    id: 'b2-20',
    level: 'B2',
    title: 'Budoucnost planety',
    titleRussian: 'Будущее планеты',
    text: `Naše planeta se nachází v bodě zlomu. Vědci varují, že pokud neredukujeme emise skleníkových plynů do roku 2030, důsledky změny klimatu mohou být nevratné. Teplota na Zemi stoupla už o více než jeden stupeň od předindustriální éry, a to vedlo k tání ledovců, vzestupu hladiny oceánů a častějším extrémním výkyvům počasí.

Přesto existují důvody k opatrnému optimismu. Obnovitelné zdroje energie, jako je solární a větrná energie, se stávají levnějšími než fosilní paliva. Elektromobily se prodávají v rekordních počtech a země jako Dánsko už získávají většinu elektřiny z obnovitelných zdrojů. Mladá generace — tzv. Greta generation — dává vládám pod tlak a vyžaduje konkrétní kroky.

Problém je, že změna musí přijít na všech úrovních. Individuální úsilí, jako je třídění odpadu nebo omezení spotřeby masa, je důležité, ale nestačí. Potřebujeme systémové změny — transformaci průmyslu, zemědělství a dopravy. To vyžaduje politickou vůli a mezinárodní spolupráci, které se často nedostává kvůli konkurenčním zájmům států.

Nemůžeme si dovolit čekat, až problém vyřeší někdo jiný. Každý z nás má odpovědnost za budoucnost planety, kterou zdědí naše děti. Místo otázky „Co mohu udělat já?" bychom se měli ptát „Co musíme udělat my?". Společná akce začíná uvědomělým rozhodnutím jednotlivce.`,
    textRussian: `Наша планета находится в точке перелома. Учёные предупреждают, что если мы не сократим выбросы парниковых газов к 2030 году, последствия изменения климата могут стать необратимыми. Температура на Земле уже поднялась более чем на один градус с доиндустриальной эпохи, а это привело к таянию ледников, повышению уровня океанов и более частым экстремальным погодным аномалиям.

Тем не менее есть основания для осторожного оптимизма. Возобновляемые источники энергии, такие как солнечная и ветровая, становятся дешевле ископаемого топлива. Электромобили продаются рекордными тиражами, а такие страны, как Дания, уже получают большую часть электроэнергии из возобновляемых источников. Молодое поколение — так называемое поколение Греты — оказывает давление на правительства и требует конкретных действий.

Проблема в том, что изменения должны произойти на всех уровнях. Индивидуальные усилия, такие как сортировка мусора или сокращение потребления мяса, важны, но недостаточны. Нам нужны системные изменения — трансформация промышленности, сельского хозяйства и транспорта. Это требует политической воли и международного сотрудничества, которых часто не хватает из-за конкурирующих интересов государств.

Мы не можем позволить себе ждать, пока кто-то другой решит проблему. Каждый из нас несёт ответственность за будущее планеты, которую унаследуют наши дети. Вместо вопроса «Что могу сделать я?» мы должны спрашивать «Что должны сделать мы?». Совместные действия начинаются с осознанного решения каждого человека.`,
    vocabulary: [
      { czech: 'bod zlomu', russian: 'точка перелома' },
      { czech: 'skleníkový plyn', russian: 'парниковый газ' },
      { czech: 'nevratný', russian: 'необратимый' },
      { czech: 'obnovitelný zdroj', russian: 'возобновляемый источник' },
      { czech: 'fosilní palivo', russian: 'ископаемое топливо' },
      { czech: 'systémová změna', russian: 'системное изменение' },
      { czech: 'transformace', russian: 'трансформация' },
      { czech: 'zdědit', russian: 'унаследовать' },
    ],
    questions: [
      {
        id: 'b2-20-q1',
        question: 'К какому году необходимо сократить выбросы парниковых газов?',
        options: ['К 2025 году', 'К 2030 году', 'К 2040 году', 'К 2050 году'],
        correctAnswer: 1,
      },
      {
        id: 'b2-20-q2',
        question: 'Что уже стало дешевле ископаемого топлива?',
        options: ['Ядерная энергия', 'Солнечная и ветровая энергия', 'Уголь', 'Газ'],
        correctAnswer: 1,
      },
      {
        id: 'b2-20-q3',
        question: 'Чего, по мнению автора, недостаточно для решения проблемы?',
        options: ['Политических решений', 'Только индивидуальных усилий', 'Международных соглашений', 'Технологий'],
        correctAnswer: 1,
      },
      {
        id: 'b2-20-q4',
        question: 'Чего не хватает для системных изменений?',
        options: ['Денег', 'Технологий', 'Политической воли и международного сотрудничества', 'Времени'],
        correctAnswer: 2,
      },
      {
        id: 'b2-20-q5',
        question: 'С чего начинаются совместные действия по мнению автора?',
        options: ['С законов', 'С осознанного решения каждого человека', 'С научных исследований', 'С протестов'],
        correctAnswer: 1,
      },
    ],
  },
];
