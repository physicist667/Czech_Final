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

---
Task ID: 4
Agent: verb-conjugation-agent
Task: Fix verb ID mismatches and add conjugations for new verbs

Work Log:
- Read worklog.md, vocabulary.ts and verbConjugations.ts to understand current state
- Identified mismatches: vb16-vb20 in vocabulary were adjectives, vb26-vb35 should be vb16-vb25, v26-v45 should be vb26-vb45
- Confirmed adjectives category already exists with adj1-adj30 (including duplicates of the misplaced vb16-vb20)
- Removed 5 misplaced adjectives (vb16-vb20: Velký, Malý, Nový, Starý, Krásný) from verbs category
- Renamed vb26-vb35 → vb16-vb25 (Bydlet through Otevřít) to match verbConjugations.ts
- Renamed v26-v45 → vb26-vb45 (Vést through Poslouchat) to match verbConjugations.ts
- Updated category name from "Глаголы и прилагательные" to "Глаголы"
- Confirmed cv2-cv20 and fv2-fv14, fv17-fv20 already exist in verbConjugations.ts (added by previous agents)
- Added cv1: Říkat (imperfective, -ám/-áš pattern)
- Added fv1: Uvařit (perfective, -ím/-íš pattern, pairs with vb33 Vařit)
- Added trw18: Fotografovat (imperfective, -uji/-uješ pattern)
- Verified TypeScript compilation: 0 errors in modified files (105 pre-existing errors in pronounDeclensions.ts unchanged)

Stage Summary:
- Fixed 35 verb ID mismatches (10 renamed vb26→vb16 to vb35→vb25, 20 renamed v26→vb26 to v45→vb45, 5 removed)
- Added 3 new verb conjugations (cv1, fv1, trw18)
- Total verb conjugations now: 115
- Verb IDs in vocabulary.ts now correctly match verbConjugations.ts for all 45 verbs (vb1-vb45)
Task ID: 3
Agent: noun-declension-agent
Task: Add missing noun declensions for nature, emotions, clothing, fruits, travel, abstract categories

Work Log:
- Read existing nounDeclensions.ts (7874 lines, 878 entries) and vocabulary.ts
- Generated 44 new noun declension entries using Python script for accuracy
- Added 6 new const arrays: natureNtDeclensions (20), emotionsExtraDeclensions (15), clothingExtraDeclensions (3), fruitsExtraDeclensions (2), travelExtraDeclensions (3), abstractExtraDeclensions (1)
- Modified declensionCategories export to spread new arrays into existing categories: nature, emotions, clothing, fruits, travel, abstract
- Verified TypeScript compilation: zero errors in nounDeclensions.ts (pre-existing errors in pronounDeclensions.ts unchanged)

Stage Summary:
- Added 44 noun declensions across 6 categories
- Total noun declensions now: 922 (was 878)
- Nature (nt1-nt20): 20 entries — Strom, Květina, Tráva, Řeka, Hora, Moře, Les, Slunce, Měsíc, Hvězda, Déšť, Sníh, Vítr, Země, Obloha, Jaro, Léto, Podzim, Zima, Kámen
- Emotions (em21-em40 nouns): 15 entries — lítost, stud, hrdost, opatrnost, odvaha, ticho, nuda, úžas, úlek, rozčílenost, optimista, pesimista, sympatie, antipatie, empatie
- Clothing: 3 entries — snowboardové boty (plural-only), náprsník, zip
- Fruits: 2 entries — Hroznové víno, Brukvová
- Travel: 3 entries — Muzeum, Hraniční přechod, Pamětní předmět
- Abstract: 1 entry — Porce
---
## Task ID: 1 - grammar-exercises
### Work Task
Create grammar exercise data file and grammar exercises component for a Czech language learning app for Russian speakers.

### Work Summary
Created three deliverables:

1. **`/src/data/grammarExercises.ts`** — Data file with:
   - `GrammarExerciseQuestion` and `GrammarExerciseSet` interfaces
   - 6 exercise sets with 10 questions each (60 total questions), levels B1–B2:
     * **Падежные окончания** (case-endings, B1) — choose correct case ending for nouns across all 7 cases
     * **Правильный предлог** (correct-preposition, B1) — choose correct preposition for a given case/situation (v/na/do/z/k/s/o/pro)
     * **Склонение прилагательных** (adjective-declension, B1) — choose correct adjective form to agree with noun (Nom/Acc/Gen/Dat/Loc/Ins, sg/pl)
     * **Спряжение глаголов** (verb-conjugation, B1) — choose correct verb form (present/past/future/imperative)
     * **Возвратные глаголы** (reflexive-verbs, B1) — choose between se/si or decide if reflexive needed
     * **Условное наклонение** (conditional-mood, B2) — complete conditional sentences with correct form (by/aby/kdyby)
   - Each question has: id, type, question (Russian), sentence (Czech with blank), correctAnswer, 4 options, hint, explanation, grammarTopic, difficulty
   - Questions progressively harder within each set
   - Detailed Russian-language hints and explanations

2. **`/src/components/sections/grammar-exercises-section.tsx`** — Component with:
   - `SetSelector` — grid of exercise sets grouped by B1/B2 level with emerald/amber color scheme
   - `GrammarQuiz` — quiz flow with question, 4 option buttons, hint toggle, correct/incorrect feedback with explanation
   - `GrammarResultsCard` — final score with retry/new round/back buttons
   - Progress bar, question counter, score counter
   - Framer-motion animations (AnimatePresence, fade/slide)
   - Emerald color scheme matching existing app design
   - 'use client' directive

3. **Modified `/src/components/sections/exercises-section.tsx`**:
   - Added `'grammar-exercises'` to `ExerciseType` union
   - Added `GraduationCap` to lucide-react imports
   - Added import for `GrammarExercisesSection`
   - Added grammar-exercises entry to `exerciseTypes` array with isNew: true
   - Added `{selectedType === 'grammar-exercises' && <GrammarExercisesSection />}` case in playing screen

**Verification**: `npx tsc --noEmit` passes with zero errors in new files (pre-existing errors only in pronounDeclensions.ts).
---
Task ID: 1
Agent: main
Task: Дополнить грамматику до B2, адаптировать упражнения, создать грамматические упражнения

Work Log:
- Исследовал структуру проекта (grammar.ts, exercises.ts, exercises-section.tsx, store)
- Запустил параллельные подзадачи для добавления уроков и создания упражнений
- Добавил 12 новых уроков грамматики B1-B2 (lesson13-lesson24) в grammar.ts
- Создал /src/data/grammarExercises.ts с 6 наборами упражнений (60 вопросов)
- Создал /src/components/sections/grammar-exercises-section.tsx компонент
- Интегрировал грамматические упражнения в exercises-section.tsx
- Адаптировал 4 классических упражнения (multiple-choice, fill-blank, matching, sentence-building) для работы с категориями слов
- Создал 4 новых динамических компонента: VocabMultipleChoiceQuiz, VocabFillBlankQuiz, VocabMatchingQuiz, VocabSentenceBuildingQuiz
- Проверил сборку — нет новых ошибок TypeScript

Stage Summary:
- Грамматика расширена до B2: 24 урока (12 A1-A2 + 12 B1-B2)
- Новые темы: местоимения, предлоги, возвратные глаголы, модальные глаголы, сравнения, условные, страдательный залог, причастия, союзы, числительные, косвенная речь, относительные местоимения
- 6 наборов грамматических упражнений (60 вопросов): падежи, предлоги, прилагательные, глаголы, возвратные, условное наклонение
- Все 9 упражнений теперь поддерживают выбор категории слов

---
Task ID: 1
Agent: main
Task: Add new vocabulary categories and exercises

Work Log:
- Added "work-career" category (20 words, wc1-wc20) to vocabulary.ts
- Added "restaurant" category (20 words, rst1-rst20) to vocabulary.ts
- Fixed allWords export type annotation to use VocabWord[]
- Added 10 multiple-choice questions (5 per category) to exercises.ts
- Added 10 fill-blank questions (5 per category) to exercises.ts
- Added 2 matching sets (10 pairs each) to exercises.ts
- Added 10 sentence-building exercises (5 per category) to exercises.ts
- Added 10 true-false questions (5 per category) to exercises.ts
- TypeScript compilation verified: zero new errors (pre-existing errors only in pronounDeclensions.ts)

Stage Summary:
- 40 new words added across 2 categories
- 52 new exercise items added
- Build passes without new errors


---
Task ID: phrasebook-ui
Agent: Super Z (main)
Task: Создать отдельный UI-раздел "Разговорник" в приложении

Work Log:
- Обнаружил что /src/data/phrasebook.ts уже существует с 250 фразами в 10 категориях
- Добавил "phrasebook" в TabId в /src/store/czech-store.ts
- Добавил вкладку "Разговорник" с иконкой MessageCircle в /src/components/navigation.tsx
- Создал /src/components/sections/phrasebook-section.tsx с полным UI:
  * Сетка категорий с иконками, уровнем (A1-A2-B1-B2), прогрессом
  * Фильтр по уровню (A1, A2, B1, B2)
  * Поиск по фразам (чешский/русский)
  * Список фраз с произношением, примерами, отметками изучения
  * Карточки (флеш-карточки) для изучения
  * Кнопка копирования фразы
  * Цветовая кодировка уровней (A1=зелёный, A2=синий, B1=жёлтый, B2=фиолетовый)
- Добавил импорт и рендеринг PhrasebookSection в /src/app/page.tsx
- Проверил TypeScript компиляцию — без ошибок в новых файлах

Stage Summary:
- Раздел "Разговорник" полностью интегрирован в приложение
- 250 фраз в 10 категориях (A1: Приветствия, Кафе, Транспорт, Покупки, Экстренные ситуации; A2: Жильё, Работа, Социальное общение; B1: Врач, Документооборот)
- Файлы: phrasebook-section.tsx (новый), navigation.tsx, page.tsx, czech-store.ts

---
Task ID: 1
Agent: main
Task: Create "Чтение" (Reading) section with 20 Czech stories and quizzes

Work Log:
- Analyzed project structure: store (czech-store.ts), navigation.tsx, page.tsx
- Launched parallel subagents: one for stories data file, one for UI component
- Created /src/data/stories.ts: 20 stories (5 per level A1-A2-B1-B2), each with Czech text, Russian translation, 8-15 vocabulary items, and 5 quiz questions (100 questions total)
- Created /src/components/sections/stories-section.tsx: full-featured component with story list, story reader (text/translation toggle), and quiz mode
- Updated /src/store/czech-store.ts: added 'reading' to TabId union type
- Updated /src/components/navigation.tsx: added "Чтение" tab with FileText icon
- Updated /src/app/page.tsx: added StoriesSection import and case in renderSection switch
- Verified TypeScript compilation: no new errors (only pre-existing pronounDeclensions.ts errors)

Stage Summary:
- New section "Чтение" fully integrated into the app
- 20 stories across 4 CEFR levels with reading comprehension quizzes
- UI features: level filter, search, text/translation toggle, vocabulary highlighting, quiz with results review, localStorage persistence for completed stories

---
Task ID: 2
Agent: main
Task: Add clickable word translation feature with pronunciation to stories

Work Log:
- Created /src/data/czechDictionary.ts with 778 Czech word entries, each with Russian translation and pronunciation (Cyrillic letters)
- Updated /src/components/sections/stories-section.tsx with clickable word functionality:
  - Added `lookupWord()` function (checks story vocabulary first, then general dictionary)
  - Added `tokenizeText()` to split text into word/non-word tokens
  - Added `renderClickableText()` that makes words clickable with hover effects
  - Vocabulary words: bold green with dotted underline
  - Dictionary words: subtle dotted underline
  - Added floating popup card showing: word, pronunciation (with Volume2 icon), translation, "Ключевое слово" badge
  - Popup dismissed on click outside, scroll, or X button
- Moved dictionary file to /src/data/czechDictionary.ts for correct import resolution

Stage Summary:
- 778 Czech words in dictionary covering vocabulary from all 20 stories + common function words, verbs, adjectives, adverbs
- Click any word in story text to see Russian translation + pronunciation in Russian letters
- Build passes successfully with no new errors

---
Task ID: 3
Agent: general-purpose
Task: Add more verbs to vocabulary

Work Log:
- Added 20 new A1 verbs to 'verbs' category (vb46-vb65): Mít rád, Platit, Děkovat, Prosit, Zpívat, Tancovat, Smát se, Plakat, Stříhat, Rybařit, Lovit, Ležet, Hrávat si, Šeptat, Slibovat, Zahřívat, Vzít, Dát, Přinést, Odnést
- Added 20 new A2 verbs to 'a2-verbs-daily' category (a2-v-d26-a2-v-d45): Shánět, Vybrat, Rozhodnout se, Domluvit se, Naplánovat, Zorganizovat, Najmout, Propustit, Přihlásit se, Odhlásit se, Zapsat se, Překvapit, Potěšit, Rozzlobit, Uklidnit, Vystrašit, Prominout, Omluvit se, Poradit, Podvést
- Added 20 new B1 verbs to 'b1-verbs-cognitive' category (b1-cog-v26-b1-cog-v45): Komentovat, Hodnotit, Recenzovat, Interpretovat, Reflektovat, Anticipovat, Konstatovat, Debatovat, Argumentovat, Demonstrovat, Ilustrovat, Dokumentovat, Spekulovat, Teoretizovat, Akceptovat, Odmítnout, Kontrolovat, Monitorovat, Identifikovat, Kategorizovat
- Added 20 new B2 verbs to 'b2-verbs-formal' category (b2-form-v26-b2-form-v45): Akumulovat, Dezinterpretovat, Reinterpretovat, Rekonstruovat, Reevaluovat, Transformovat, Modifikovat, Optimalizovat, Standardizovat, Manipulovat, Fluktuovat, Oscilovat, Deteriorovat, Degenerovat, Generovat, Reprodukovat, Exacerbovat, Kompenzovat, Amortizovat, Kapitalizovat
- Skipped duplicates: Stát se (vb39), Chtít (vb17) from A1 list; Vysvětlit (b1-cog-v1), Důvěřovat (b1-cog-v13) from A2 list; Zpochybnit (b1-cog-v12) from B1 list; Verifikovat (b2-form-v21) from B2 list

Stage Summary:
- Total 80 new verbs added across all levels (A1: 20, A2: 20, B1: 20, B2: 20)
- verbs category: 45 → 65 words
- a2-verbs-daily category: 25 → 45 words
- b1-verbs-cognitive category: 25 → 45 words
- b2-verbs-formal category: 25 → 45 words
- File modified: /home/z/my-project/src/data/vocabulary.ts
---
Task ID: 4
Agent: general-purpose
Task: Add more adverbs to vocabulary

Work Log:
- Added 20 new A1 adverbs to 'adverbs' category (ad21-ad40): Sem, Tamhle, Venku, Dovnitř, Nahoru, Dolů, Daleko, Blízko, Vpředu, Vzadu, Vlevo, Vpravo, Uprostřed, Doma, Hned, Občas, Často, Zřídka, Vždycky, Také
- Added 20 new A2 adverbs to 'a2-adverbs-advanced' category (a2-adv26-a2-adv45): Asi, Možná, Skutečně, Úplně, Téměř, Hned, Už dávno, Nedávno, Vlastně, Bohužel, Naštěstí, Prý, Zatím, Poprvé, Naposledy, Nakonec, Konečně, Raději, Spíše, Odtud
- Added 20 new B1 adverbs to 'b1-adverbs-manner' category (b1-adv-m26-b1-adv-m45): Údajně, Patrně, Očividně, Setrvale, Dočasně, Trvale, Postupně, Najednou, Mírně, Značně, Výrazně, Marginálně, Nesmírně, Extrémně, Přiměřeně, Disproporcionálně, Symetricky, Asymetricky, V praxi, V teorii
- Added 20 new B2 adverbs to 'b2-adverbs-academic' category (b2-adv-a26-b2-adv-a45): A priori, A posteriori, Paradigmaticky, Heuristicky, Empiricky, Teoreticky, Hypoteticky, Speculativně, Deduktivně, Induktivně, Analogicky, Komplementárně, Exkluzivně, Inkluzivně, Subjektivně, Objektivně, Selektivně, Diskriminativně, Proporcionálně, Preventivně
- Verified: no duplicates within any category; no new TypeScript errors in vocabulary.ts (pre-existing errors in pronounDeclensions.ts unrelated)

Stage Summary:
- Total 80 new adverbs added across 4 levels (A1: 20, A2: 20, B1: 20, B2: 20)
- File modified: /home/z/my-project/src/data/vocabulary.ts
---
Task ID: 2, 3
Agent: Main Agent
Task: Add comprehensive grammar topics (36 lessons + 18 exercise sets)

Work Log:
- Explored existing grammar system: 24 lessons in grammar.ts, 6 exercise sets in grammarExercises.ts
- Identified 12 missing grammar topics from user's comprehensive list
- Stage 1: Added 6 lessons (25-30) + 6 exercise sets (phonetics, pronouns, adverbs, verb types, negation, agreement)
- Stage 2: Added 6 lessons (31-36) + 6 exercise sets (verb government, word formation, impersonal, modal, particles, sentence types)
- All content in Russian with Czech examples, each lesson has tables, examples, key takeaways
- Each exercise set has 10 questions with hints and explanations

Stage Summary:
- Total lessons: 24 → 36 (added 12 new)
- Total exercise sets: 6 → 18 (added 12 new) 
- Total exercise questions: 60 → 180
- All new topics: Фонетика, Части речи обзор, Наречия, Типы спряжений, Отрицание, Согласование, Управление глаголов, Словообразование, Безличные предложения, Инфинитивные конструкции, Частицы, Междометия
- No new lint errors introduced

## Work Log — Grammar Data Fix & Sort

### Date: $(date -u '+%Y-%m-%d %H:%M UTC')

### Task: Fix and sort grammar lessons in grammar.ts, sort grammarExercises.ts

### Changes Made:

#### 1. grammar.ts — Interface Fix
- Fixed broken `headers` type annotation: `headers: string[\n\n];` → `headers: string[];` (lines 9-11 collapsed to line 9)
- This was valid TypeScript (whitespace-insensitive) but poor formatting

#### 2. grammar.ts — Lesson Sorting & Renumbering
- Parsed all 36 lessons using Python script with brace-depth matching (handles template literals correctly)
- Grouped lessons by CEFR level, maintaining original relative order within each level
- Sorted: A1 first → A2 → B1 → B2
- Renumbered all lessons 1-36 (updated both `id` and `title` fields)
- Level distribution after sorting:
  - A1: 10 lessons (lessons 1-10)
  - A2: 10 lessons (lessons 11-20)
  - B1: 6 lessons (lessons 21-26)
  - B2: 10 lessons (lessons 27-36)
- Verified: no double commas, all IDs sequential, all levels in correct order

#### 3. grammarExercises.ts — Exercise Sorting
- Reviewed the file: contains 18 exercise sets, only B1 and B2 difficulty levels
- The file already has runtime sorting by level at the export (B1 → B2) — confirmed correct
- No changes needed

#### 4. Verification
- `npx tsc --noEmit` — no errors in project `src/` files
- All 36 lesson IDs verified sequential (1-36)
- All lessons verified sorted A1→A2→B1→B2
- Interface headers line verified fixed
- No double commas in file

### Files Modified:
- `/home/z/my-project/src/data/grammar.ts` — interface fix + lesson sort/renumber
- `/home/z/my-project/worklog.md` — this work log

### Files Reviewed (no changes needed):
- `/home/z/my-project/src/data/grammarExercises.ts` — already sorted correctly
