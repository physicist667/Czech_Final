---
Task ID: 1
Agent: Main Agent
Task: Добавить новые типы упражнений для повторения слов в приложение изучения чешского языка

Work Log:
- Проанализировал текущую структуру приложения (Next.js, Zustand, Framer Motion)
- Изучил существующие 4 типа упражнений: Multiple Choice, Fill Blank, Matching, Sentence Building
- Обновил store/czech-store.ts: добавил новые типы упражнений в QuizScore type
- Обновил data/exercises.ts: добавил интерфейс TrueFalseQuestion и 35 вопросов Верно/Неверно
- Полностью переписал components/sections/exercises-section.tsx с 5 новыми компонентами:
  1. FlashcardsQuiz - флеш-карточки с анимацией переворота (20 карточек)
  2. ReverseQuiz - обратный перевод: русский → чешский (15 вопросов)
  3. TrueFalseQuiz - быстрый тест Верно/Неверно (15 вопросов)
  4. WordScrambleQuiz - составление слова из перемешанных букв (15 вопросов)
  5. TypingPracticeQuiz - ввод чешского слова вручную с подсказками (12 вопросов)
- Добавил разделение на странице: «Новые упражнения» с бейджем «Новое» и «Классические упражнения»
- Вынес ResultsCard в общий компонент для переиспользования
- Успешная сборка проекта без ошибок

Stage Summary:
- Добавлено 5 новых типов упражнений для повторения изученных слов
- Все упражнения используют существующие данные из словаря (200 слов)
- Упражнения помечены как «Новые» с визуальным выделением
- Общее количество типов упражнений: 9

---
## Task ID: 2 - exercises-rewriter
### Work Task
Rewrite exercises-section.tsx to add category selection before vocabulary-based exercises, allowing users to practice ALL words from a category or all 200 words instead of a fixed random slice.

### Work Summary
**Problem**: Each vocab-based exercise hardcoded a small slice of words (12-20 random words), limiting practice scope.

**Solution implemented**:

1. **Category Selection Screen** (`CategorySelector` component): Added a new screen that appears before any vocabulary-based exercise. Users can choose:
   - "Все слова" (all 200 words from all categories) — highlighted card at top
   - Individual category from 9 categories (greetings, food, family, numbers, colors, transport, city, time, body) — each showing icon, name, and word count

2. **Props-based word passing**: Changed all 5 vocab-based exercises to accept `words: VocabWord[]` as a prop:
   - `FlashcardsQuiz({ words, onFinish, onBack, onNewRound })`
   - `ReverseQuiz({ words, onFinish, onBack, onNewRound })`
   - `TrueFalseQuiz({ words, onFinish, onBack, onNewRound })`
   - `WordScrambleQuiz({ words, onFinish, onBack, onNewRound })`
   - `TypingPracticeQuiz({ words, onFinish, onBack, onNewRound })`
   - Each component uses ALL passed words without slicing

3. **Dynamic True/False generation**: Replaced static `trueFalseQuestions` import with `generateTrueFalseQuestions(words)` function that dynamically generates True/False questions from any set of vocabulary words. For each word, randomly decides correct/incorrect pairing, picking a random different Russian translation for incorrect ones.

4. **Enhanced ResultsCard**: Added three buttons:
   - "Повторить" (retry same words)
   - "Новый раунд" (go back to category selection)
   - "Назад" (go back to exercise list)

5. **3-step navigation flow**: `ExercisesSection` now has:
   - Step 1: Exercise type selection (grid of cards)
   - Step 2: Category selection (for vocab-based exercises only)
   - Step 3: Playing the exercise
   - Classic exercises (Multiple Choice, Fill Blank, Matching, Sentence Building) skip directly to step 3

6. **Word-scramble filtering**: Multi-word phrases (containing spaces) are automatically filtered out since they can't be scrambled letter-by-letter.

7. **Preserved all existing exercises**: MultipleChoiceQuiz, FillBlankQuiz, MatchingExercise, SentenceBuildingQuiz remain unchanged.

8. **Imports updated**: Removed `trueFalseQuestions` from exercises.ts import; added `vocabularyData` from vocabulary.ts.

**Build status**: Compiled successfully with no errors.

---
Task ID: 1
Agent: Super Z (main)
Task: Добавить 100 новых чешских слов и обновить упражнения

Work Log:
- Прочитал текущие файлы: vocabulary.ts, exercises.ts, exercises-section.tsx, czech-store.ts
- Добавил 5 новых категорий по 20 слов в vocabulary.ts: Животные, Природа и погода, Одежда, Дом и быт, Глаголы и прилагательные
- Добавил 35 новых вопросов multiple-choice (mc41-mc74) для всех новых категорий + body
- Добавил 15 новых вопросов fill-blank (fb23-fb37) для новых категорий
- Добавил 6 новых наборов matching (ms6-ms10) для новых категорий
- Добавил 22 новых вопроса true-false (tf36-tf57) для новых категорий
- Добавил 14 новых упражнений sentence-building (sb15-sb28) для новых категорий
- Обновил czech-store.ts: getTotalWords → 300, добавлены достижения "Полпути!" (200 слов) и "Мастер слов" (300 слов)
- Обновил all-categories achievement с 8 на 14 префиксов
- Обновил exercises-section.tsx: динамический подсчёт слов, увеличено количество MC вопросов с 15 до 25
- Сборка прошла успешно

Stage Summary:
- Словарь расширен с 200 до 300 слов (14 категорий)
- Все типы упражнений обновлены для покрытия новых категорий
- Достижения обновлены для новых целей
- Файлы: vocabulary.ts, exercises.ts, exercises-section.tsx, czech-store.ts

---
Task ID: 2
Agent: Super Z + subagent
Task: Добавить 200 новых слов (10 категорий) и обновить упражнения

Work Log:
- Добавлены 10 новых категорий по 20 слов в vocabulary.ts:
  1. Работа и профессии (professions) - Lékař, Učitel, Programátor и др.
  2. Спорт и хобби (sports) - Fotbal, Hokej, Tenis и др.
  3. Чувства и эмоции (emotions) - Štěstí, Láska, Strach и др.
  4. Школа и образование (school) - Učebnice, Zkouška, Student и др.
  5. Путешествия (travel) - Pas, Kufr, Hrad и др.
  6. Фрукты и овощи (fruits) - Hruška, Jahoda, Meloun и др.
  7. Предлоги и местоимения (prepositions) - V, Na, Do, Já и др.
  8. Наречия и частые фразы (adverbs) - Dnes, Zítra, Velmi и др.
  9. Мебель и интерьер (furniture) - Skříň, Gauč, Trouba и др.
  10. Технологии (tech) - Telefon, Počítač, Internet и др.
- exercises.ts обновлён: +25 MC, +10 FB, +5 Matching, +20 TF, +10 SB
- czech-store.ts: getTotalWords → 500, новое достижение "Легенда" (500 слов), 24 категории

Stage Summary:
- Словарь расширен с 300 до 500 слов (24 категории)
- Все типы упражнений обновлены для новых категорий
- Общее число слов: 500
- Сборка прошла успешно

---
## Task ID: 1 - verb-conjugation
### Work Task
Implement verb conjugation table feature for the Czech language learning app: data file, table component, and integration into the vocabulary section.

### Work Summary
Created three deliverables:

1. **`/src/data/verbConjugations.ts`** — Data file with:
   - `VerbConjugation` interface and `verbConjugations` array containing all 15 verbs (vb1–vb15)
   - Each verb has present/past/future conjugations for 6 persons (já, ty, on/ona/ono, my, vy, oni)
   - Proper handling of perfective verb Koupit (no present tense, shown as "—")
   - Irregularity notes for Jít, Běžet, Číst, Učit se, Koupit
   - Exported helper arrays: `personLabels` and `tenseLabels`

2. **`/src/components/sections/verb-conjugation-table.tsx`** — Reusable table component:
   - Compact Card-based layout using shadcn Table components
   - Emerald color scheme matching the app design
   - Header shows Czech verb name + Russian translation + irregularity/perfective badges
   - Column headers: Лицо, Настоящее (Přítomný), Прошлое (Minulý), Будущее (Budoucí)
   - Row headers with Russian person names and Czech equivalents
   - Special styling for perfective verbs (—" in present column)
   - AlertTriangle icon with notes for irregular verbs
   - Mobile responsive (horizontal scroll via Table container)

3. **Modified `/src/components/sections/vocabulary-section.tsx`**:
   - Added `showConjugations` state
   - Added "Таблицы спряжений" toggle button (only visible when verbs category is selected)
   - Animated expand/collapse with framer-motion (AnimatePresence + height animation)
   - 2-column grid on desktop (lg:grid-cols-2), 1-column on mobile
   - Staggered animation for each table appearing (delay: idx * 0.04)
   - Max height 800px with scrollable overflow for all 15 tables
   - ChevronDown rotation animation on toggle

**Build status**: Compiled successfully with no errors.

---
## Task ID: 1 - noun-declensions
### Work Task
Create noun declension (склонение по падежам) tables for a Czech language learning app for Russian speakers: data file with accurate Czech declensions, table component, and integration into the vocabulary section.

### Work Summary
Created three deliverables:

1. **`/src/data/nounDeclensions.ts`** — Data file with:
   - `NounDeclension` interface with wordId, czech, russian, gender (masculine/feminine/neuter/adjective), isAnimate, singular/plural forms (7 cases), pronunciations, optional notes, isPluralOnly flag
   - `caseLabels` array with 7 Czech cases (Nominativ → Instrumentál) with Russian names and question words
   - `declensionCategories` array grouping declensions by category (8 categories)
   - `categoryIdsWithDeclensions` Set for quick category lookup
   - `getDeclensionsForCategory()` helper function
   - Accurate declension data for **79 words** across 8 categories:
     * Семья (family): 17 words (fm1-fm15, fm20-fm21) — includes plural-only forms for Rodiče, Prarodiče
     * Еда и напитки (food): 20 words (f1-f20) — includes indeclinable Džus, irregular Sůl
     * Транспорт (transport): 14 words (t1-t14, t18-t19) — includes indeclinable Taxi, -í-ending nouns
     * В городе (city): 18 words (ct1, ct3-ct12, ct14-ct20) — includes foreign words Museum, Kino
     * Тело и здоровье (body): 15 words (bd1-bd14, bd16) — includes plural-only Ústa/Vlasy, irregular pairs Oči/Oko, Ucho/Uši
     * Животные (animals): 4 words (an1-an4)
     * Работа и профессии (professions): 7 words (pr1-pr5, pr7, pr10-pr11)
     * Цвета (colors): 9 adjectives (c1-c7, c9-c10) — masculine singular forms only with note about gender agreement

2. **`/src/components/sections/noun-declension-table.tsx`** — Reusable table component:
   - Compact Card-based layout using shadcn Table components
   - Emerald color scheme matching the app design
   - Header shows Czech word + Russian translation + gender badge (м.р./ж.р./ср.р./прил.) + animate badge + plural-only badge
   - Column headers: Падеж (with Czech name + question), Единственное, Множественное
   - Adjectives show only masculine singular column with appropriate header
   - Plural-only words hide singular column
   - Pronunciation in amber italic under each form (matching VerbConjugationTable pattern)
   - AlertTriangle icon with notes for special cases (indeclinable words, adjectives)
   - Mobile responsive (horizontal scroll via overflow-x-auto)

3. **Modified `/src/components/sections/vocabulary-section.tsx`**:
   - Added imports for `getDeclensionsForCategory`, `categoryIdsWithDeclensions`, `NounDeclensionTable`, `GraduationCap` icon
   - Added `showDeclensions` state
   - Added `hasDeclensions` computed boolean (checks Set) and `currentDeclensions` computed array
   - Added "Таблицы склонений" toggle button with GraduationCap icon and word count badge
   - Button appears for all 8 categories with declension data (family, food, transport, city, body, animals, professions, colors)
   - Animated expand/collapse with framer-motion matching verb conjugation pattern
   - 2-column grid on desktop (lg:grid-cols-2), 1-column on mobile
   - Staggered animation for each table (delay: idx * 0.04)
   - Max height 800px with scrollable overflow

**Build status**: Dev server compiles successfully with no errors in new files.
---
Task ID: 2
Agent: noun-declension-agent-1
Task: Add noun declensions for home-daily and furniture-items categories

Work Log:
- Read existing nounDeclensions.ts structure (2937 lines, NounDeclension interface, empty7, 8 existing categories)
- Read vocabulary.ts for home-daily (hd1-hd40) and furniture-items (fi1-fi30) words
- Created homeDailyDeclensions array with 40 entries (hd1-hd40), including 2 plural-only words (hd16 Dveře, hd37 Schody) and 1 indeclinable word (hd38 Podkroví)
- Created furnitureItemsDeclensions array with 30 entries (fi1-fi30), including compound words with adjective+noun patterns
- Fixed fi5 entry (removed erroneous "(wait)" comment from singular instrumental)
- Added both categories to declensionCategories export (home-daily, furniture-items)
- Verified TypeScript compilation: 0 errors in nounDeclensions.ts (pre-existing errors only in pronounDeclensions.ts)

Stage Summary:
- 70 new noun declensions added across 2 categories
- Categories home-daily and furniture-items now have full declension tables with all 7 cases
- Correctly determined genders: 15 masculine, 18 feminine, 7 neuter (home-daily); 20 masculine, 9 feminine, 1 neuter (furniture-items)
- 3 plural-only words: hd16 Dveře, hd37 Schody (home-daily)
- 1 indeclinable neuter noun: hd38 Podkroví (home-daily)
- Compound words declined on the main noun: Obývací pokoj, Myčka nádobí, Konferenční stolek, etc.


---

## Task 4: Add household + media + medicine declensions

**Date:** $(date -u +%Y-%m-%d)

**Files modified:** `src/data/nounDeclensions.ts`

**Summary:** Added complete noun declension tables for three vocabulary categories (70 entries total).

### Categories added:
1. **household** (🧹) — `householdDeclensions[]` — 20 entries (hh1–hh20)
2. **media** (📺) — `mediaDeclensions[]` — 25 entries (md1–md25)
3. **medicine** (🏥) — `medicineDeclensions[]` — 25 entries (med1–med25)

### Entry counts by category:
- **household:** 8 masculine, 4 feminine, 8 neuter; 1 plural-only (hh10 Odpadky)
- **media:** 16 masculine, 6 feminine, 3 neuter; 2 plural-only (md1 Noviny, md3 Zprávy)
- **medicine:** 11 masculine, 10 feminine, 4 neuter; 1 plural-only (med25 Vitamíny)

### Special cases handled:
- **Plural-only words:** hh10 Odpadky, md1 Noviny, md3 Zprávy, med25 Vitamíny — `isPluralOnly: true`
- **Indeclinable foreign words:** md5 Rádio, md6 Internet, md8 Blog, md13 Video, md14 Podcast, md15 Interview — same form in all cases, with notes
- **Multi-word terms:** hh12/hh13 (Pračka/Myčka), md7 Sociální síť, md13 Hudební video, med17 Zdravotní pojištění, med18/19 Zubní/Oční lékař, med20 Krevní tlak, med22 Srdcový infarkt — declined main noun, noted
- **Verbal nouns (neuter -ení/-ání/-utí):** hh1 Uklízení, hh4 Mytí, hh5 Nádobí, med5 Ošetření, med7 Pobléhnutí, med11 Očkování, med13 Zranění, med17 Pojištění, med24 Dávkování
- **Animate beings:** md16 Redaktor, md17 Vydavatel, md20 Zpravodaj, md23 Fotoreportér, md25 Korespondent, med4 Lékař, med18/19 Lékař — `isAnimate: true` with accusative = genitive

### Registration:
- All 3 categories added to `declensionCategories` export array (no duplicates)
- `household`, `media`, `medicine` category IDs match vocabulary.ts

### Verification:
- `npx tsc --noEmit` — zero errors in nounDeclensions.ts (105 pre-existing errors in pronounDeclensions.ts unchanged)

---

## Task 3: Add technology + education declensions

**Date**: $(date -u +%Y-%m-%d)

### What was done:
1. Read and analyzed `nounDeclensions.ts` — understood NounDeclension interface, existing category structure, and how categories are exported via `declensionCategories`.
2. Read `vocabulary.ts` — identified all 40 technology words (tc1-tc40) and 40 education words (ed1-ed40).
3. Created `technologyDeclensions` array with 40 complete NounDeclension entries (tc1-tc40) covering:
   - Regular declinable Czech nouns (Počítač, Telefon, Tablet, Televize, etc.)
   - Indelinable foreign words with notes (Internet, Wi-Fi, Bluetooth, Video, Software, Podcast)
   - Plural-only nouns (Sluchátka)
   - Compound nouns with both parts declining (Webová stránka, Operační systém, Chytrý telefon, Sociální síť, Umělá inteligence, Pevný disk, Domácí úkol, Vědecký článek)
   - All 7 cases in singular and plural (Nominativ, Genitiv, Dativ, Akuzativ, Vokativ, Lokál, Instrumentál)
   - Russian Cyrillic pronunciations for all forms
4. Created `educationDeclensions` array with 40 complete NounDeclension entries (ed1-ed40) covering:
   - Animate nouns (Student, Studentka, Vyučující, Ředitel, Děkan, Rektor, etc.)
   - Neuter nouns ending in -í (Vysvědčení, Cvičení, Vzdělání)
   - Plural-only nouns (Přijímačky)
   - Substantivized participles declining as adjectives (Vyučující, Zkoušející)
   - Academic degree terms (Bakalář, Magistr, Doktorand, Doktorát)
5. Added two new categories to `declensionCategories` export:
   - `{ categoryId: 'technology', categoryName: 'Технологии', categoryIcon: '💻' }`
   - `{ categoryId: 'education', categoryName: 'Школа и образование', categoryIcon: '🎓' }`

### Note on existing `tech` category:
- File already contained `techDeclensions` with categoryId `tech` (19 entries, tc1-tc20 with different word-ID-to-word mappings than vocabulary.ts)
- Created NEW `technology` category with correct vocabulary mappings (tc1-tc40) to avoid conflicts
- Both categories coexist: `tech` (old, 19 entries) and `technology` (new, 40 entries)

### Files modified:
- `/home/z/my-project/src/data/nounDeclensions.ts` — added ~900 lines (technologyDeclensions + educationDeclensions arrays + 2 category entries)

### Verification:
- `npx tsc --noEmit` — zero errors in nounDeclensions.ts (pre-existing errors in pronounDeclensions.ts unrelated)
- Total tc entries in file: 59 (19 existing + 40 new)
- Total ed entries in file: 40
- File grew from ~2937 to ~4792 lines

---

## Task 4-5: Add time + abstract noun declensions

**Date:** $(date -u +%Y-%m-%d)

**Files modified:** `src/data/nounDeclensions.ts`

**Summary:** Added complete noun declension tables for two vocabulary categories (45 entries total).

### Categories added:
1. **time** (📅) — `timeDeclensions[]` — 20 entries (tm1–tm20)
2. **abstract** (💭) — `abstractDeclensions[]` — 25 entries (abs1–abs25)

### TIME category details (tm1-tm20):
- **Days of the week (tm1–tm7):**
  - tm1 Pondělí (neuter, invariable in sg, -í ending)
  - tm2 Úterý (neuter, invariable sg / úterky plural)
  - tm3 Středa (feminine, regular -a pattern)
  - tm4 Čtvrtek (masculine inanimate)
  - tm5 Pátek (masculine inanimate)
  - tm6 Sobota (feminine, regular -a pattern)
  - tm7 Neděle (feminine, irregular gen/acc/dat/loc = -i/-i/-i)
- **Months (tm8–tm19):**
  - tm8-tm13, tm15, tm17-tm19 (masculine inanimate, regular hard/soft masculine)
  - tm14 Červenec (masculine, -ec pattern)
  - tm16 Září (neuter, invariable in sg, -í ending)
- **Other (tm20):** Minuta (feminine, regular -a pattern)

### ABSTRACT category details (abs1-abs25):
- 11 feminine nouns: Svoboda, Válka, Láska, Naděje, Pravda, Lež, Smrt, Příležitost, Odpovědnost, Výzva, Změna, Zkušenost
- 9 masculine nouns: Mír, Čas, Život, Úspěch, Neúspěch, Cíl, Názor, Vývoj, Problém
- 5 neuter nouns: Štěstí, Rozhodnutí, Řešení (invariable -í); Spravedlnost, Příležitost, Odpovědnost, Zkušenost (-ost ending)

### Special cases handled:
- **Invariable -í ending (neuter):** tm1 Pondělí, tm16 Září, abs14 Štěstí, abs18 Rozhodnutí, abs25 Řešení — all singular cases identical, with notes
- **-ost ending (feminine):** abs2 Spravedlnost, abs15 Příležitost, abs16 Odpovědnost, abs20 Zkušenost — gen/acc/dat/loc all = -osti
- **Irregular gen/acc:** abs8 Lež (gen = lži), abs11 Smrt (gen = smrti), abs7 Neděle (gen = neděle, acc = neděli)
- All nouns are inanimate (`isAnimate: false`)

### Registration:
- Both categories added to `declensionCategories` export array
- No duplicates found (confirmed no existing tm* or abs* entries)

### Verification:
- `npx tsc --noEmit` — zero errors in nounDeclensions.ts (pre-existing errors only in pronounDeclensions.ts)

---

## Task 2-b: Add comm verb conjugations
**Agent:** comm-verbs-agent  
**Date:** $(date -Iseconds)  
**Status:** ✅ Completed

### Summary:
Added 19 communication verb conjugation entries (cv2–cv20) to `src/data/verbConjugations.ts`.

### Verbs added:
- **Imperfective (4):** cv2 Vyprávět, cv7 Prosit, cv10 Souhlasit, cv11 Nesouhlasit, cv12 Argumentovat, cv13 Diskutovat
- **Perfective (13):** cv3 Odpovědět, cv4 Zeptat se, cv5 Vysvětlit, cv6 Poradit, cv8 Slíbit, cv9 Dohodnout se, cv14 Pochválit, cv15 Zkritizovat, cv16 Omluvit se, cv17 Poděkovat, cv18 Pozvat, cv19 Navrhnout, cv20 Varovat

### Special cases handled:
- **Reflexive verbs (se):** cv4 (Zeptat se), cv9 (Dohodnout se), cv16 (Omluvit se) — particle included in all conjugation forms
- **Irregular stem changes:** cv3 Odpovědět (odpo-v- in future), cv9 Dohodnout se (dohodn-), cv18 Pozvat (pozv-), cv19 Navrhnout (navrhn-)
- **Perfective -ovat verbs:** cv15, cv17, cv20 — future uses present-tense-like short forms (-uji/-uješ)
- **Nesouhlasit (cv11):** negative future uses nebudu + infinitive pattern

### Transliteration:
- All pronunciations use Russian transliteration following established patterns
- Czech 'ě'→'э', 'á'→'а', 'í'→'и', 'ů'→'у', 'ou'→'оу', 'ch'→'х', 'š'→'ш', 'č'→'ч', 'ř'→'рж', 'ž'→'ж', 'h'→'г'

### Verification:
- `npx tsc --noEmit` — zero errors in verbConjugations.ts (pre-existing errors only in pronounDeclensions.ts)
- All 19 verbId entries (cv2–cv20) confirmed present in the file

---

## Task 2: Add food verb conjugations
**Agent:** food-verbs-agent
**Date:** $(date -Iseconds)
**Status:** ✅ Completed

### Summary:
Added 17 food verb conjugation entries (fv2–fv14, fv17–fv20) to `src/data/verbConjugations.ts`.

### Verbs added:
- **Perfective (11):** fv2 Osmažit, fv3 Upečit, fv4 Nakrájet, fv5 Smíchat, fv6 Zamíchat, fv7 Nalít, fv9 Ochutnat, fv10 Rozehřát, fv11 Ochladit, fv12 Přidat, fv13 Odebrat, fv20 Zmrazit
- **Imperfective (6):** fv8 Sypat, fv14 Podávat, fv17 Mýt, fv18 Sušit, fv19 Konzervovat

### Skipped (not verbs):
- fv1 Uvařit (already covered by existing vb33 Vařit)
- fv15 Porce (noun, not a verb)
- fv16 Stůl (noun, not a verb)

### Conjugation patterns used:
- **Perfective verbs:** present = ['—'×6], future = present-tense-like short forms, past = regular past
- **Imperfective verbs:** present = actual present forms, future = "budu/budeš/bude/budeme/budete/budou + infinitive", past = regular past
- **-it class verbs:** osmažit, upečit, nakrájet, ochladit, zmrazit → -ím/-íš/-í/-íme/-íte/-í
- **-at class verbs:** smíchat, zamíchat, sypat, ochutnat, přidat → -ám/-áš/-á/-áme/-áte/-ají
- **Irregular:** nalít (j-insertion: naliju/naliješ), odebrat (stem alternation: odebere/odebral), rozehřát (hř → hřeju pattern), mýt (j-insertion: myju/myješ)

### Transliteration:
- All pronunciations use Russian transliteration following established file conventions
- Czech 'ř'→'рж', 'ch'→'х', 'š'→'ш', 'č'→'ч', 'ž'→'ж', 'h'→'г', 'j'→'й'
- Long vowels: 'á'→'а', 'é'→'э', 'í'→'и', 'ý'→'и', 'ou'→'оу'

### Files modified:
- `/home/z/my-project/src/data/verbConjugations.ts` — added ~290 lines (17 new verb entries)

### Verification:
- `npx tsc --noEmit` — zero errors in verbConjugations.ts (pre-existing errors only in pronounDeclensions.ts)
- All 17 verbId entries confirmed present in the file

---
Task ID: 3
Agent: nature-declensions-agent
Task: Add noun declension data for 40 nature-related nouns (nat1-nat40)

Work Log:
- Read /src/data/vocabulary.ts and identified all 40 nature words (nat1-nat40) with their Czech forms, Russian translations, and IDs
- Read /src/data/nounDeclensions.ts (4793 lines) and understood the NounDeclension interface, case order (Nom, Gen, Dat, Acc, Voc, Loc, Ins), pronunciation rules, and the existing structure
- Found that natureDeclensions already existed (lines 1377-1541) with 20 entries using old IDs (nt1-nt20)
- Replaced the entire natureDeclensions section with 40 correctly-IDs entries (nat1-nat40)
- Confirmed the export already references natureDeclensions in the declensionCategories array
- Verified all 40 wordIds match the vocabulary.ts IDs exactly
- Applied proper Czech grammar rules: masculine inanimate (Nom=Acc), feminine (Acc=Gen), neuter (Nom=Acc), masculine animate lesník (Acc=Gen)
- Included special declension patterns for: moře (neuter -e), nebe (neuter special), slunce (neuter special), kámen (irregular), země (feminine -ě), jeskyně (feminine -ě), údolí (neuter -í), ovzduší (neuter -í)
- Generated Russian-style pronunciation arrays following the established conversion rules
- Ran TypeScript check: no errors in nounDeclensions.ts (pre-existing errors in pronounDeclensions.ts are unrelated)

Changes Made:
- File: /src/data/nounDeclensions.ts
  - Replaced lines 1377-1541 (old natureDeclensions with nt1-nt20 IDs)
  - New section: ПРИРОДА (Nature) — nat1-nat40 with 40 entries
  - Entry breakdown: 16 masculine (15 inanimate + 1 animate lesník), 17 feminine, 7 neuter
  - No new export needed (natureDeclensions was already referenced in declensionCategories)

Next Actions:
- None required for this task. All 40 nature noun declensions are complete.


---

## Task 7-8: Add Culture + Politics Declension Data
**Agent:** culture-politics-declensions-agent  
**Date:** $(date +%Y-%m-%d)  
**Status:** ✅ Complete  

### Summary
Added noun declension data for two new categories to `/home/z/my-project/src/data/nounDeclensions.ts`:

1. **CULTURE (culture) — cul1-cul25** (25 entries)
   - Includes: Umění, Malířství, Sochařství, Hudba, Divadlo, Opera, Balet, Muzeum, Galerie, Výstava, Koncert, Festival, Filmový festival, Spisovatel, Básník, Skladatel, Režisér, Herec, Písnička, Hudebník, Nástroj, Orchestr, Architektura, Literatura, Tradice
   - Genders: 3 neuter (-ství/-í), 8 feminine, 7 masculine inanimate, 6 masculine animate, 1 compound (Filmový festival)
   - Notes: -ství and -í endings are invariable in singular; -ice ending words follow -e/-í pattern

2. **POLITICS (politics) — pl1-pl25** (25 entries)
   - Includes: Vláda, Prezident, Parlament, Volby, Strana, Zákon, Občan, Společnost, Hlasování, Kandidát, Reforma, Daně, Soud, Soudce, Advokát, Zločin, Policie, Vězení, Demonstrace, Petice, Menšina, Většina, Veřejnost, Politika, Smlouva
   - Genders: 5 masculine animate (Prezident, Kandidát, Občan, Advokát, Soudce), 4 masculine inanimate, 14 feminine, 2 neuter
   - 2 plural-only nouns (Volby, Daně) using `isPluralOnly: true` and `empty7`
   - -í/-ení/-ění endings mostly invariable in singular

### Changes Made
- Added `cultureDeclensions` const array (cul1-cul25) with full 7-case singular/plural + pronunciation
- Added `politicsDeclensions` const array (pl1-pl25) with full 7-case singular/plural + pronunciation  
- Registered both in `declensionCategories` export array with icons 🎭 and ⚖️
- Fixed Vláda (pl1) singularPron/pluralPron from dynamic split to static array
- Fixed Zákon (pl6) plural genitive from `zákony` to `zákonů`
- Fixed Policie (pl17) plural locative pronunciation typo

### Verification
- `npx tsc --noEmit` passes with zero errors in nounDeclensions.ts (pre-existing errors in pronounDeclensions.ts are unrelated)
- All 50 new entries follow the established NounDeclension interface pattern

---

## Task 10: Add Professions Noun Declensions

**Agent:** professions-declensions-agent
**Date:** 2026-04-06
**Status:** ✅ Completed

### Summary
Added 33 missing profession noun declension entries to `src/data/nounDeclensions.ts`, covering IDs pr3, pr6, pr8–pr9, pr12–pr40 from the second professions vocabulary category.

### What was done:
1. Read `vocabulary.ts` — identified two separate professions categories (first: 20 words pr1–pr20; second: 40 words pr1–pr40 with different word-to-ID mappings)
2. Read `nounDeclensions.ts` — found 7 existing pr* entries from the first category (pr1 Lékař, pr2 Učitel, pr4 Advokát, pr5 Kuchař, pr7 Policista, pr10 Ředitel, pr11 Programátor)
3. Determined 33 missing IDs from the second category that needed new entries
4. Added all 33 entries to the `professionsDeclensions` array with full 7-case singular/plural declensions and Russian pronunciations

### Entries added (33):
**Feminine (2):** pr6 (Zdravotní sestra), pr19 (Sekretářka)
**Masculine animate (31):** pr3 (Inženýr), pr8 (Hasič), pr9 (Voják), pr12 (Řidič), pr13 (Pilot), pr14 (Programátor), pr15 (Architekt), pr16 (Účetní), pr17 (Manažer), pr18 (Prodejce), pr20 (Novinář), pr21 (Herec), pr22 (Zpěvák), pr23 (Malíř), pr24 (Hudebník), pr25 (Sportovec), pr26 (Vědec), pr27 (Farmář), pr28 (Elektrikář), pr29 (Truhlář), pr30 (Instalatér), pr31 (Zubní lékař), pr32 (Psycholog), pr33 (Veterinář), pr34 (Soudce), pr35 (Starosta), pr36 (Prezident), pr37 (Diplomat), pr38 (Tlumočník), pr39 (Kurýr), pr40 (Grafický designér)

### Declension patterns used:
- **-ář ending:** novinář, farmář, elektrikář, truhlář, veterinář — sg: -ář/-áře/-áři/-áře/-áři/-áři/-ářem; pl: -áři/-ářů/-ářům/-áře/-áři/-ářích/-áři
- **-ič ending:** hasič, řidič — sg: -ič/-iče/-iči/-iče/-iči/-iči/-ičem; pl: -iči/-ičů/-ičům/-iče/-iči/-ičích/-iči
- **-ec ending:** prodejce, herec, sportovec, vědec — sg: -ec/-ce/-ci/-ce/-ci/-ci/-ci/-cem; pl: -ci/-ců/-cům/-ce/-ci/-cích/-ci
- **-ák ending:** voják, zpěvák — sg: -ák/-áka/-ákovi/-áka/-áku/-ákovi/-ákem; pl: -áci/-áků/-ákům/-áky/-áci/-ácích/-áky
- **-ík ending:** hudebník, tlumočník — sg: -ík/-íka/-íkovi/-íka/-íku/-íkovi/-íkem; pl: -íci/-íků/-íkům/-íky/-ících/-íky
- **-ér ending:** instalatér, kurýr — sg: -ér/-éra/-éroví/-éra/-ére/-éroví/-érem; pl: -éři/-érů/-érům/-éry/-érech/-éry
- **-tel ending:** pilot — sg: -t/-ta/-tovi/-ta/-te/-tovi/-tem; pl: -i/-ů/-ům/-y/-ech/-y
- **Adjective-like:** účetní — sg: -í/-ího/-ímu/-ího/-í/-ím/-ím; pl: -í/-ích/-ím/-í/-ích/-ími
- **Masculine -a:** starosta — sg: -a/-y/-ovi/-u/-o/-ovi/-ou; pl: -ové/-ů/-ům/-y/-ové/-ech/-y
- **Compound:** zubní lékař, grafický designér — declined both parts
- **Irregular:** soudce — gen/acc = nom form; psycholog — long-form pl (psychologové)

### Verification:
- `npx tsc --noEmit` — zero errors in nounDeclensions.ts (pre-existing errors only in pronounDeclensions.ts)
- All 33 entries confirmed present in the file via wordId grep

## Task 6-9: Add travel_words + finance noun declensions
**Agent:** travel-finance-declensions-agent
**Date:** 2025-01-XX
**Status:** ✅ Complete

### Summary
Added noun declension data for two new vocabulary categories to `/src/data/nounDeclensions.ts`:

1. **TRAVEL_WORDS (travel_words)** — `travelWordsDeclensions` array
   - 24 entries: trw1-trw17, trw19-trw25 (skipped trw18 "Fotografovat" — verb, not a noun)
   - Includes masculine (animate/inanimate), feminine, and neuter nouns
   - Special cases: two-word nouns (cestovní pas, celní kontrola, cestovní kancelář) with adjective declension
   - Animate nouns: Turista (trw6), Průvodce (trw7), Obyvatel (trw25) — Acc = Gen in singular

2. **FINANCE (finance)** — `financeDeclensions` array
   - 20 entries: fin1-fin20
   - Includes 2 plural-only nouns: Peníze (fin1), Úspory (fin13) with `isPluralOnly: true`
   - Mix of masculine, feminine, and neuter nouns
   - Various patterns: -ost (hotovost), -eň (daň), -ice (investice, mince, složenka)

### Files Modified
- `src/data/nounDeclensions.ts`: Added ~370 lines of declension data + 2 export entries

### Registration
Both categories registered in `declensionCategories` export array:
- `{ categoryId: 'travel_words', categoryName: 'Путешествия', categoryIcon: '✈️', declensions: travelWordsDeclensions }`
- `{ categoryId: 'finance', categoryName: 'Деньги и финансы', categoryIcon: '💰', declensions: financeDeclensions }`

### Verification
- TypeScript compilation: ✅ No errors in nounDeclensions.ts (pre-existing errors in pronounDeclensions.ts are unrelated)
- Entry counts: 24 travel_words + 20 finance = 44 new entries (total now 768)

---

## Task 10 (Update): Fix Mismatched Profession Declension Entries

**Agent:** professions-declensions-agent
**Date:** 2026-04-06
**Status:** ✅ Completed

### Summary
Updated 4 profession declension entries in `src/data/nounDeclensions.ts` to match the current "Профессии" vocabulary category (second professions category, line 1134). The vocabulary was previously updated with new word-to-ID mappings, but 4 declension entries still had the old words.

### Investigation
1. Read `vocabulary.ts` — found two professions categories with id `professions`:
   - First category (line 447): "Работа и профессии" — pr1–pr20 (old set)
   - Second category (line 1134): "Профессии" — pr1–pr40 (current set, different word-to-ID mappings)
2. Read `nounDeclensions.ts` — all 40 pr* IDs present (pr1–pr40)
3. Compared vocabulary vs declensions: all IDs present, but 4 entries had stale content

### Mismatched entries fixed (4):
| wordId | Old (stale) | New (matching vocabulary) |
|--------|-------------|--------------------------|
| pr4 | Advokát / Адвокат | Právník / Юрист |
| pr5 | Kuchař / Повар | Lékárník / Фармацевт |
| pr10 | Ředitel / Директор | Kuchař / Повар |
| pr11 | Programátor / Программист | Číšník / Официант |

### Declension patterns applied:
- **pr4 Právník** (-ík, masculine animate): sg -ík/-íka/-íkovi/-íka/-íku/-íkovi/-íkem; pl -íci/-íků/-íkům/-íky/-íci/-ících/-íky
- **pr5 Lékárník** (-ík, masculine animate): same -ík pattern
- **pr10 Kuchař** (-ář, masculine animate): sg -ář/-áře/-áři/-áře/-áři/-áři/-ářem; pl -áři/-ářů/-ářům/-áře/-áři/-ářích/-áři
- **pr11 Číšník** (-ík, masculine animate): same -ík pattern

### Additional cleanup:
- Removed "(missing entries)" label from section comment (line 951-953)

### Verification:
- `npx tsc --noEmit` — zero errors in nounDeclensions.ts (pre-existing errors in pronounDeclensions.ts are unrelated)
- All 40 profession entries now match the current vocabulary category
