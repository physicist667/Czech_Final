'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  multipleChoiceQuestions,
  fillBlankQuestions,
  matchingSets,
  sentenceBuildingExercises,
} from '@/data/exercises';
import type { MatchingSet } from '@/data/exercises';
import { allWords, vocabularyData } from '@/data/vocabulary';
import type { VocabWord, VocabCategory } from '@/data/vocabulary';
import { useCzechStore } from '@/store/czech-store';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  X,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Trophy,
  Target,
  ListChecks,
  PenLine,
  Link,
  ArrowRight,
  Shuffle,
  Layers,
  Repeat,
  CircleCheck,
  CircleX,
  Keyboard,
  Sparkles,
  BookOpen,
  RefreshCw,
  GraduationCap,
  Filter,
} from 'lucide-react';
import { GrammarExercisesSection } from '@/components/sections/grammar-exercises-section';

type ExerciseType = 'multiple-choice' | 'fill-blank' | 'matching' | 'sentence-building' | 'flashcards' | 'reverse-quiz' | 'true-false' | 'word-scramble' | 'typing-practice' | 'grammar-exercises';

type SectionStep = 'select-exercise' | 'select-category' | 'playing';

const vocabBasedExercises: ExerciseType[] = ['flashcards', 'reverse-quiz', 'true-false', 'word-scramble', 'typing-practice', 'multiple-choice', 'fill-blank', 'matching', 'sentence-building'];

const exerciseTypes: { id: ExerciseType; label: string; icon: React.ReactNode; description: string; isNew?: boolean }[] = [
  { id: 'flashcards', label: 'Флеш-карточки', icon: <Layers className="size-5" />, description: 'Перелистывайте карточки для повторения слов', isNew: true },
  { id: 'reverse-quiz', label: 'Обратный перевод', icon: <Repeat className="size-5" />, description: 'Выберите чешское слово по русскому переводу', isNew: true },
  { id: 'true-false', label: 'Верно / Неверно', icon: <CircleCheck className="size-5" />, description: 'Быстрый тест: правильно ли переведено слово?', isNew: true },
  { id: 'word-scramble', label: 'Соберите слово', icon: <Shuffle className="size-5" />, description: 'Составьте чешское слово из перемешанных букв', isNew: true },
  { id: 'typing-practice', label: 'Напишите слово', icon: <Keyboard className="size-5" />, description: 'Введите чешский перевод вручную', isNew: true },
  { id: 'multiple-choice', label: 'Выберите перевод', icon: <Target className="size-5" />, description: 'Выберите правильный перевод из 4 вариантов' },
  { id: 'fill-blank', label: 'Заполните пропуск', icon: <PenLine className="size-5" />, description: 'Вставьте правильное слово' },
  { id: 'matching', label: 'Сопоставьте пары', icon: <Link className="size-5" />, description: 'Соедините чешские слова с русскими' },
  { id: 'sentence-building', label: 'Составьте предложение', icon: <ListChecks className="size-5" />, description: 'Расположите слова в правильном порядке' },
  { id: 'grammar-exercises', label: 'Грамматические упражнения', icon: <GraduationCap className="size-5" />, description: 'Практика грамматических правил чешского языка', isNew: true },
];

// ===================== HELPERS =====================

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleString(str: string): string[] {
  const letters = str.split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  const shuffled = letters.join('');
  if (shuffled === str && str.length > 1) {
    return shuffleString(str);
  }
  return letters;
}

// Helper: get random wrong options for reverse quiz
function getWrongOptions(correctWord: VocabWord, all: VocabWord[], count: number): string[] {
  const sameCategory = all.filter(w => w.czech !== correctWord.czech);
  const shuffled = shuffleArray(sameCategory).slice(0, count);
  return shuffled.map(w => w.czech);
}

// Generate True/False questions dynamically from vocabulary words
interface DynamicTrueFalseQuestion {
  czech: string;
  russian: string;
  isCorrect: boolean;
  correctRussian: string;
}

function generateTrueFalseQuestions(words: VocabWord[]): DynamicTrueFalseQuestion[] {
  const allRussianTranslations = allWords.map(w => w.russian);
  return words.map(word => {
    const isCorrect = Math.random() > 0.5;
    if (isCorrect) {
      return {
        czech: word.czech,
        russian: word.russian,
        isCorrect: true,
        correctRussian: word.russian,
      };
    } else {
      // Pick a different russian translation
      const differentTranslations = allRussianTranslations.filter(r => r !== word.russian);
      const wrongTranslation = differentTranslations.length > 0
        ? differentTranslations[Math.floor(Math.random() * differentTranslations.length)]
        : '—';
      return {
        czech: word.czech,
        russian: wrongTranslation,
        isCorrect: false,
        correctRussian: word.russian,
      };
    }
  });
}

// ===================== RESULTS CARD =====================
function ResultsCard({
  score,
  total,
  onRetry,
  onNewRound,
  onBack,
}: {
  score: number;
  total: number;
  onRetry: () => void;
  onNewRound: () => void;
  onBack: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  return (
    <Card className="p-8 text-center">
      <Trophy className={cn('size-16 mx-auto mb-4', pct >= 70 ? 'text-amber-500' : 'text-muted-foreground')} />
      <h3 className="text-2xl font-bold mb-2">
        {pct >= 90 ? 'Отлично! 🎉' : pct >= 70 ? 'Хорошо! 👍' : 'Попробуйте ещё раз 💪'}
      </h3>
      <p className="text-lg mb-4">
        {score} из {total} правильных ответов ({pct}%)
      </p>
      <Progress value={pct} className="h-3 mb-6 max-w-xs mx-auto" />
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={onRetry}>
          <RotateCcw className="size-4 mr-1" />
          Повторить
        </Button>
        <Button variant="outline" onClick={onNewRound}>
          <RefreshCw className="size-4 mr-1" />
          Новый раунд
        </Button>
        <Button variant="ghost" onClick={onBack}>
          <ChevronLeft className="size-4 mr-1" />
          Назад
        </Button>
      </div>
    </Card>
  );
}

// Group icons map
const GROUP_ICONS: Record<string, string> = {
  'Существительные': '📦',
  'Глаголы': '⚡',
  'Прилагательные': '🎨',
  'Наречия': '💫',
  'Числительные': '🔢',
  'Местоимения': '👤',
  'Предлоги': '🔗',
  'Союзы': '➕',
  'Фразы и выражения': '💬',
};

// ===================== CATEGORY SELECTOR =====================
function CategorySelector({
  exerciseType,
  onSelect,
  onBack,
}: {
  exerciseType: ExerciseType;
  onSelect: (words: VocabWord[]) => void;
  onBack: () => void;
}) {
  const typeInfo = exerciseTypes.find(t => t.id === exerciseType);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  // Get unique groups
  const groups = useMemo(() => {
    const groupSet = new Set(vocabularyData.map((c) => c.group));
    return Array.from(groupSet);
  }, []);

  // Filter categories by selected group
  const filteredCategories = useMemo(() => {
    if (!selectedGroup) return vocabularyData;
    return vocabularyData.filter((c) => c.group === selectedGroup);
  }, [selectedGroup]);

  const handleSelectAll = () => {
    const pool = selectedGroup
      ? vocabularyData.filter(c => c.group === selectedGroup)
      : vocabularyData;
    const words = pool.flatMap(c => c.words);
    onSelect(shuffleArray([...words]));
  };

  const handleSelectCategory = (category: VocabCategory) => {
    onSelect(shuffleArray([...category.words]));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ChevronLeft className="size-5" />
        </Button>
        <div>
          <h2 className="text-xl font-bold">{typeInfo?.label}</h2>
          <p className="text-sm text-muted-foreground">{typeInfo?.description}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
          <BookOpen className="size-4 text-emerald-600" />
          Выберите категорию слов
        </h3>

        {/* Group Filter */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Filter className="size-3" />
            <span>Группы:</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedGroup === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedGroup(null)}
              className={cn(
                'gap-1 text-xs',
                selectedGroup === null && 'bg-emerald-600 hover:bg-emerald-700'
              )}
            >
              Все
              <Badge variant="secondary" className="ml-1 text-[10px]">
                {vocabularyData.length}
              </Badge>
            </Button>
            {groups.map((g) => {
              const count = vocabularyData.filter((c) => c.group === g).length;
              return (
                <Button
                  key={g}
                  variant={selectedGroup === g ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedGroup(g)}
                  className={cn(
                    'gap-1 text-xs',
                    selectedGroup === g && 'bg-emerald-600 hover:bg-emerald-700'
                  )}
                >
                  <span>{GROUP_ICONS[g] || '📋'}</span>
                  <span className="hidden sm:inline">{g}</span>
                  <span className="sm:hidden">{g.length > 6 ? g.slice(0, 6) + '..' : g}</span>
                  <Badge variant="secondary" className="ml-1 text-[10px]">
                    {count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </div>

        {/* All words card */}
        <Card
          className="cursor-pointer hover:shadow-md transition-all hover:scale-[1.01] p-5 mb-4 border-emerald-300 dark:border-emerald-700 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30"
          onClick={handleSelectAll}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900 text-emerald-600 text-2xl">
              📚
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">
                Все слова
                {selectedGroup && (
                  <span className="text-sm font-normal text-muted-foreground ml-2">
                    ({selectedGroup})
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground">
                {filteredCategories.reduce((s, c) => s + c.words.length, 0)} слов из {filteredCategories.length} категорий
              </p>
            </div>
            <Badge variant="secondary" className="text-base font-semibold px-3 py-1">
              {filteredCategories.reduce((s, c) => s + c.words.length, 0)}
            </Badge>
            <ArrowRight className="size-5 text-muted-foreground shrink-0" />
          </div>
        </Card>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredCategories.map((category) => (
            <Card
              key={category.id}
              className="cursor-pointer hover:shadow-md transition-all hover:scale-[1.01] p-4"
              onClick={() => handleSelectCategory(category)}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-muted text-2xl">
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-sm truncate">{category.name}</h3>
                    {category.level && (
                      <Badge className={cn(
                        'text-[10px] px-1.5 py-0 font-semibold shrink-0',
                        category.level === 'A1' && 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
                        category.level === 'A2' && 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
                        category.level === 'B1' && 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
                        category.level === 'B2' && 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
                      )}>
                        {category.level}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {category.words.length} слов
                    <span className="ml-1 text-[10px] opacity-60">({category.group})</span>
                  </p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===================== FLASHCARDS =====================
function FlashcardsQuiz({
  words,
  onFinish,
  onBack,
  onNewRound,
}: {
  words: VocabWord[];
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  onNewRound: () => void;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState<number[]>([]);
  const [unknown, setUnknown] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const current = words[currentIdx];
  const isDone = currentIdx >= words.length;

  const handleRate = (knewIt: boolean) => {
    if (knewIt) {
      setKnown(prev => [...prev, currentIdx]);
    } else {
      setUnknown(prev => [...prev, currentIdx]);
    }
    setIsFlipped(false);
    if (currentIdx + 1 >= words.length) {
      const finalKnown = knewIt ? [...known, currentIdx] : known;
      setShowResult(true);
      onFinish(finalKnown.length, words.length);
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  };

  if (showResult) {
    return (
      <ResultsCard
        score={known.length}
        total={words.length}
        onRetry={() => {
          setCurrentIdx(0);
          setIsFlipped(false);
          setKnown([]);
          setUnknown([]);
          setShowResult(false);
        }}
        onNewRound={onNewRound}
        onBack={onBack}
      />
    );
  }

  if (isDone) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">
          Карточка {currentIdx + 1} из {words.length}
        </Badge>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-emerald-600 font-medium">✓ {known.length}</span>
          <span className="text-red-500 font-medium">✗ {unknown.length}</span>
        </div>
      </div>
      <Progress value={(currentIdx / words.length) * 100} className="h-2" />

      <div
        className="perspective-[1000px] cursor-pointer mx-auto max-w-md"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="relative w-full min-h-[280px]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front side */}
          <div
            className="absolute inset-0 backface-hidden rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/50 dark:to-card p-8 flex flex-col items-center justify-center shadow-lg"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="text-sm text-muted-foreground mb-3">Чешское слово</p>
            <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-3">{current.czech}</p>
            <p className="text-sm text-muted-foreground italic">[{current.pronunciation}]</p>
            <p className="text-xs text-muted-foreground mt-4">Нажмите, чтобы перевернуть</p>
          </div>
          {/* Back side */}
          <div
            className="absolute inset-0 backface-hidden rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/50 dark:to-card p-8 flex flex-col items-center justify-center shadow-lg"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-sm text-muted-foreground mb-3">Русский перевод</p>
            <p className="text-3xl font-bold mb-2">{current.russian}</p>
            <p className="text-sm text-muted-foreground italic mt-2">&laquo;{current.example}&raquo;</p>
            <p className="text-xs text-muted-foreground mt-1">{current.exampleTranslation}</p>
          </div>
        </motion.div>
      </div>

      {isFlipped && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3 justify-center"
        >
          <Button
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 min-w-[140px]"
            onClick={() => handleRate(false)}
          >
            <X className="size-4 mr-1" />
            Не знаю
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 min-w-[140px]"
            onClick={() => handleRate(true)}
          >
            <Check className="size-4 mr-1" />
            Знаю
          </Button>
        </motion.div>
      )}
    </div>
  );
}

// ===================== REVERSE QUIZ =====================
function ReverseQuiz({
  words,
  onFinish,
  onBack,
  onNewRound,
}: {
  words: VocabWord[];
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  onNewRound: () => void;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const current = words[currentIdx];
  const wrongOptions = useMemo(() => getWrongOptions(current, allWords, 3), [current]);
  const options = useMemo(() => shuffleArray([current.czech, ...wrongOptions]), [current, wrongOptions]);

  const handleAnswer = (answer: string) => {
    if (answered) return;
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === current.czech) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx >= words.length - 1) {
      setShowResult(true);
      onFinish(score, words.length);
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  if (showResult) {
    return (
      <ResultsCard
        score={score}
        total={words.length}
        onRetry={() => {
          setCurrentIdx(0);
          setSelectedAnswer(null);
          setScore(0);
          setShowResult(false);
          setAnswered(false);
        }}
        onNewRound={onNewRound}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Вопрос {currentIdx + 1} из {words.length}</Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={(currentIdx / words.length) * 100} className="h-2" />

      <Card className="p-6">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-1">Выберите чешский перевод для:</p>
          <p className="text-2xl font-bold">{current.russian}</p>
          <p className="text-sm text-muted-foreground mt-1 italic text-emerald-600 dark:text-emerald-400">[{current.pronunciation}]</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === current.czech;
            let btnClass = 'border hover:bg-muted/50 cursor-pointer';
            if (answered) {
              if (isCorrect) btnClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50';
              else if (isSelected && !isCorrect) btnClass = 'border-red-500 bg-red-50 dark:bg-red-950/50';
              else btnClass = 'border opacity-50';
            }
            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={answered}
                className={cn(
                  'p-4 rounded-lg text-left text-sm font-medium transition-all flex items-center gap-2',
                  btnClass
                )}
              >
                {answered && isCorrect && <Check className="size-4 text-emerald-600 shrink-0" />}
                {answered && isSelected && !isCorrect && <X className="size-4 text-red-600 shrink-0" />}
                {option}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-4 text-center">
            {selectedAnswer === current.czech ? (
              <p className="text-emerald-600 font-medium">Правильно! ✅</p>
            ) : (
              <p className="text-red-600">
                Неправильно. Правильный ответ: <span className="font-bold">{current.czech}</span>
              </p>
            )}
            <Button className="mt-3" onClick={handleNext}>
              {currentIdx >= words.length - 1 ? 'Показать результат' : 'Следующий вопрос'}
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

// ===================== TRUE / FALSE (dynamic) =====================
function TrueFalseQuiz({
  words,
  onFinish,
  onBack,
  onNewRound,
}: {
  words: VocabWord[];
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  onNewRound: () => void;
}) {
  const [questions] = useState<DynamicTrueFalseQuestion[]>(() => generateTrueFalseQuestions(words));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const current = questions[currentIdx];

  const handleAnswer = (answer: boolean) => {
    if (answered) return;
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === current.isCorrect) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx >= questions.length - 1) {
      setShowResult(true);
      onFinish(score, questions.length);
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  if (showResult) {
    return (
      <ResultsCard
        score={score}
        total={questions.length}
        onRetry={() => {
          setCurrentIdx(0);
          setSelectedAnswer(null);
          setScore(0);
          setShowResult(false);
          setAnswered(false);
        }}
        onNewRound={onNewRound}
        onBack={onBack}
      />
    );
  }

  const userIsCorrect = selectedAnswer === current.isCorrect;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Вопрос {currentIdx + 1} из {questions.length}</Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={(currentIdx / questions.length) * 100} className="h-2" />

      <Card className="p-6">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-2">Правильный ли это перевод?</p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{current.czech}</p>
            </div>
            <span className="text-2xl text-muted-foreground">=</span>
            <div className="text-center">
              <p className="text-2xl font-bold">{current.russian}</p>
            </div>
          </div>
        </div>

        {!answered ? (
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 min-w-[140px] h-14 text-lg"
              onClick={() => handleAnswer(true)}
            >
              <CircleCheck className="size-5 mr-2" />
              Верно
            </Button>
            <Button
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 min-w-[140px] h-14 text-lg"
              onClick={() => handleAnswer(false)}
            >
              <CircleX className="size-5 mr-2" />
              Неверно
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-3">
            <div className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium',
              userIsCorrect
                ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400'
                : 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400'
            )}>
              {userIsCorrect ? (
                <><Check className="size-4" /> Правильно!</>
              ) : (
                <><X className="size-4" /> Неправильно! Правильный перевод: {current.correctRussian}</>
              )}
            </div>
            <div>
              <Button onClick={handleNext}>
                {currentIdx >= questions.length - 1 ? 'Показать результат' : 'Следующий вопрос'}
                <ChevronRight className="size-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

// ===================== WORD SCRAMBLE =====================
function WordScrambleQuiz({
  words: rawWords,
  onFinish,
  onBack,
  onNewRound,
}: {
  words: VocabWord[];
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  onNewRound: () => void;
}) {
  // Filter out multi-word phrases that can't be scrambled
  const words = useMemo(() => rawWords.filter(w => !w.czech.includes(' ')), [rawWords]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const current = words[currentIdx];

  useEffect(() => {
    if (current) {
      setShuffledLetters(shuffleString(current.czech));
      setSelectedLetters([]);
      setAnswered(false);
      setIsCorrect(false);
    }
  }, [current, currentIdx]);

  const availableLetters = useMemo(() => {
    const counts: Record<string, number> = {};
    const selCounts: Record<string, number> = {};
    shuffledLetters.forEach(l => { counts[l] = (counts[l] || 0) + 1; });
    selectedLetters.forEach(l => { selCounts[l] = (selCounts[l] || 0) + 1; });
    return shuffledLetters.filter(l => (counts[l] || 0) > (selCounts[l] || 0));
  }, [shuffledLetters, selectedLetters]);

  const handleLetterClick = (letter: string) => {
    if (answered) return;
    setSelectedLetters(prev => [...prev, letter]);
  };

  const handleSelectedLetterClick = (index: number) => {
    if (answered) return;
    setSelectedLetters(prev => prev.filter((_, i) => i !== index));
  };

  const handleCheck = () => {
    if (!current) return;
    const joined = selectedLetters.join('');
    const correct = joined.toLowerCase() === current.czech.toLowerCase();
    setIsCorrect(correct);
    setAnswered(true);
    if (correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIdx >= words.length - 1) {
      setShowResult(true);
      onFinish(score, words.length);
    } else {
      setCurrentIdx(i => i + 1);
    }
  };

  if (showResult) {
    return (
      <ResultsCard
        score={score}
        total={words.length}
        onRetry={() => {
          setCurrentIdx(0);
          setScore(0);
          setShowResult(false);
          setSelectedLetters([]);
          setAnswered(false);
          setIsCorrect(false);
        }}
        onNewRound={onNewRound}
        onBack={onBack}
      />
    );
  }

  if (words.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-lg text-muted-foreground">Нет подходящих слов для этого упражнения в выбранной категории.</p>
        <Button className="mt-4" onClick={onNewRound}>
          <RefreshCw className="size-4 mr-1" />
          Выбрать другую категорию
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Слово {currentIdx + 1} из {words.length}</Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={(currentIdx / words.length) * 100} className="h-2" />

      <Card className="p-6">
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground mb-1">Составьте слово для перевода:</p>
          <p className="text-2xl font-bold">{current.russian}</p>
          <p className="text-sm text-muted-foreground mt-1 italic text-emerald-600 dark:text-emerald-400">[{current.pronunciation}]</p>
        </div>

        {/* Selected letters area */}
        <div className="min-h-[60px] border-2 border-dashed rounded-lg p-3 mb-4 flex flex-wrap gap-2 items-center justify-center">
          {selectedLetters.length === 0 ? (
            <p className="text-sm text-muted-foreground">Нажимайте на буквы ниже, чтобы составить слово</p>
          ) : (
            selectedLetters.map((letter, i) => (
              <button
                key={`sel-${i}`}
                onClick={() => handleSelectedLetterClick(i)}
                className={cn(
                  'w-10 h-10 rounded-lg text-lg font-bold border-2 transition-all flex items-center justify-center',
                  answered
                    ? isCorrect
                      ? 'border-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
                      : 'border-red-400 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'
                    : 'border-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 hover:bg-emerald-200 dark:hover:bg-emerald-800/50 cursor-pointer text-emerald-700 dark:text-emerald-300'
                )}
              >
                {letter}
              </button>
            ))
          )}
        </div>

        {/* Available letters */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {availableLetters.map((letter, i) => (
            <button
              key={`avail-${letter}-${i}`}
              onClick={() => handleLetterClick(letter)}
              disabled={answered}
              className="w-10 h-10 rounded-lg text-lg font-bold border-2 border-muted hover:bg-muted/50 cursor-pointer transition-all flex items-center justify-center"
            >
              {letter}
            </button>
          ))}
        </div>

        {!answered && selectedLetters.length > 0 && (
          <div className="text-center flex gap-3 justify-center">
            <Button variant="outline" onClick={() => setSelectedLetters([])}>
              <RotateCcw className="size-4 mr-1" />
              Сброс
            </Button>
            <Button onClick={handleCheck}>
              <Check className="size-4 mr-1" />
              Проверить
            </Button>
          </div>
        )}

        {answered && (
          <div className="text-center space-y-3">
            {isCorrect ? (
              <p className="text-emerald-600 font-medium">Правильно! ✅</p>
            ) : (
              <p className="text-red-600">
                Неправильно. Правильный ответ:{' '}
                <span className="font-bold text-emerald-700 dark:text-emerald-400">{current.czech}</span>
              </p>
            )}
            <Button onClick={handleNext}>
              {currentIdx >= words.length - 1 ? 'Показать результат' : 'Следующее слово'}
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

// ===================== TYPING PRACTICE =====================
function TypingPracticeQuiz({
  words,
  onFinish,
  onBack,
  onNewRound,
}: {
  words: VocabWord[];
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  onNewRound: () => void;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  const current = words[currentIdx];

  const handleCheck = () => {
    if (!current || answered) return;
    const correct = inputValue.trim().toLowerCase() === current.czech.toLowerCase();
    setIsCorrect(correct);
    setAnswered(true);
    if (!correct) setMistakes(m => m + 1);
    if (correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIdx >= words.length - 1) {
      setShowResult(true);
      onFinish(score, words.length);
    } else {
      setCurrentIdx(i => i + 1);
      setInputValue('');
      setAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
    }
  };

  // Show hint: reveal first and last letter
  const getHint = () => {
    if (!current) return '';
    const word = current.czech;
    if (word.length <= 2) return word[0] + '_';
    return word[0] + '_'.repeat(word.length - 2) + word[word.length - 1];
  };

  if (showResult) {
    return (
      <ResultsCard
        score={score}
        total={words.length}
        onRetry={() => {
          setCurrentIdx(0);
          setInputValue('');
          setScore(0);
          setShowResult(false);
          setAnswered(false);
          setIsCorrect(false);
          setShowHint(false);
          setMistakes(0);
        }}
        onNewRound={onNewRound}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Слово {currentIdx + 1} из {words.length}</Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={(currentIdx / words.length) * 100} className="h-2" />

      <Card className="p-6">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-1">Напишите по-чешски:</p>
          <p className="text-2xl font-bold">{current.russian}</p>
          <p className="text-sm text-muted-foreground mt-1 italic text-emerald-600 dark:text-emerald-400">[{current.pronunciation}]</p>
          {current.example && (
            <p className="text-xs text-muted-foreground mt-2">
              Пример: <span className="italic">&laquo;{current.example}&raquo;</span>
            </p>
          )}
        </div>

        {!answered ? (
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && inputValue.trim()) handleCheck();
                }}
                placeholder="Введите чешское слово..."
                className={cn(
                  'w-full p-4 rounded-lg border-2 text-lg font-medium text-center',
                  'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500',
                  'bg-background placeholder:text-muted-foreground'
                )}
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(!showHint)}
                className="text-muted-foreground"
              >
                💡 Подсказка
              </Button>
              {showHint && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm font-mono tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-4 py-2 rounded-lg"
                >
                  {getHint()}
                </motion.p>
              )}

              <Button
                onClick={handleCheck}
                disabled={!inputValue.trim()}
                className="min-w-[200px]"
              >
                <Check className="size-4 mr-1" />
                Проверить
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-3">
            <div className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium',
              isCorrect
                ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400'
                : 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400'
            )}>
              {isCorrect ? (
                <><Check className="size-4" /> Правильно!</>
              ) : (
                <>
                  <X className="size-4" />
                  Ваш ответ: &laquo;{inputValue.trim()}&raquo; — Правильно: <span className="font-bold">{current.czech}</span>
                </>
              )}
            </div>
            <div>
              <Button onClick={handleNext}>
                {currentIdx >= words.length - 1 ? 'Показать результат' : 'Следующее слово'}
                <ChevronRight className="size-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

// ===================== VOCAB MULTIPLE CHOICE (dynamic) =====================
function VocabMultipleChoiceQuiz({
  words,
  onFinish,
  onBack,
  onNewRound,
}: {
  words: VocabWord[];
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  onNewRound: () => void;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const current = words[currentIdx];

  // Generate 4 options: 1 correct Russian translation + 3 wrong from allWords
  const options = useMemo(() => {
    const correct = current.russian;
    const wrongPool = allWords
      .filter(w => w.russian !== correct && w.czech !== current.czech)
      .map(w => w.russian);
    // Deduplicate
    const uniqueWrong = [...new Set(wrongPool)];
    const wrongOptions = shuffleArray(uniqueWrong).slice(0, 3);
    return shuffleArray([correct, ...wrongOptions]);
  }, [current]);

  const handleAnswer = (answer: string) => {
    if (answered) return;
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === current.russian) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx >= words.length - 1) {
      setShowResult(true);
      onFinish(score, words.length);
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  if (showResult) {
    return (
      <ResultsCard
        score={score}
        total={words.length}
        onRetry={() => {
          setCurrentIdx(0);
          setSelectedAnswer(null);
          setScore(0);
          setShowResult(false);
          setAnswered(false);
        }}
        onNewRound={onNewRound}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Вопрос {currentIdx + 1} из {words.length}</Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={(currentIdx / words.length) * 100} className="h-2" />

      <Card className="p-6">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-1">Переведите на русский:</p>
          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{current.czech}</p>
          <p className="text-sm text-muted-foreground mt-1 italic text-emerald-600 dark:text-emerald-400">[{current.pronunciation}]</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === current.russian;
            let btnClass = 'border hover:bg-muted/50 cursor-pointer';
            if (answered) {
              if (isCorrect) btnClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50';
              else if (isSelected && !isCorrect) btnClass = 'border-red-500 bg-red-50 dark:bg-red-950/50';
              else btnClass = 'border opacity-50';
            }
            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={answered}
                className={cn(
                  'p-4 rounded-lg text-left text-sm font-medium transition-all flex items-center gap-2',
                  btnClass
                )}
              >
                {answered && isCorrect && <Check className="size-4 text-emerald-600 shrink-0" />}
                {answered && isSelected && !isCorrect && <X className="size-4 text-red-600 shrink-0" />}
                {option}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-4 text-center">
            {selectedAnswer === current.russian ? (
              <p className="text-emerald-600 font-medium">Правильно! ✅</p>
            ) : (
              <p className="text-red-600">
                Неправильно. Правильный ответ:{' '}
                <span className="font-bold">{current.russian}</span>
              </p>
            )}
            <Button className="mt-3" onClick={handleNext}>
              {currentIdx >= words.length - 1 ? 'Показать результат' : 'Следующий вопрос'}
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

// ===================== VOCAB FILL BLANK (dynamic) =====================
function VocabFillBlankQuiz({
  words,
  onFinish,
  onBack,
  onNewRound,
}: {
  words: VocabWord[];
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  onNewRound: () => void;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const current = words[currentIdx];

  const handleCheck = () => {
    if (!current || answered) return;
    const correct = inputValue.trim().toLowerCase() === current.czech.toLowerCase();
    setIsCorrect(correct);
    setAnswered(true);
    if (correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIdx >= words.length - 1) {
      setShowResult(true);
      onFinish(score, words.length);
    } else {
      setCurrentIdx(i => i + 1);
      setInputValue('');
      setAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
    }
  };

  // Show hint: reveal first and last letter
  const getHint = () => {
    if (!current) return '';
    const word = current.czech;
    if (word.length <= 2) return word[0] + '_';
    return word[0] + '_'.repeat(word.length - 2) + word[word.length - 1];
  };

  if (showResult) {
    return (
      <ResultsCard
        score={score}
        total={words.length}
        onRetry={() => {
          setCurrentIdx(0);
          setInputValue('');
          setScore(0);
          setShowResult(false);
          setAnswered(false);
          setIsCorrect(false);
          setShowHint(false);
        }}
        onNewRound={onNewRound}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Слово {currentIdx + 1} из {words.length}</Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={(currentIdx / words.length) * 100} className="h-2" />

      <Card className="p-6">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-1">Напишите перевод по-чешски:</p>
          <p className="text-2xl font-bold">{current.russian}</p>
          {current.example && (
            <p className="text-xs text-muted-foreground mt-2">
              Пример: <span className="italic">&laquo;{current.example}&raquo;</span>
            </p>
          )}
        </div>

        {!answered ? (
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && inputValue.trim()) handleCheck();
                }}
                placeholder="Введите чешское слово..."
                className={cn(
                  'w-full p-4 rounded-lg border-2 text-lg font-medium text-center',
                  'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500',
                  'bg-background placeholder:text-muted-foreground'
                )}
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(!showHint)}
                className="text-muted-foreground"
              >
                💡 Подсказка
              </Button>
              {showHint && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm font-mono tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-4 py-2 rounded-lg"
                >
                  {getHint()}
                </motion.p>
              )}

              <Button
                onClick={handleCheck}
                disabled={!inputValue.trim()}
                className="min-w-[200px]"
              >
                <Check className="size-4 mr-1" />
                Проверить
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-3">
            <div className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium',
              isCorrect
                ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400'
                : 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400'
            )}>
              {isCorrect ? (
                <><Check className="size-4" /> Правильно!</>
              ) : (
                <>
                  <X className="size-4" />
                  Ваш ответ: &laquo;{inputValue.trim()}&raquo; — Правильно: <span className="font-bold">{current.czech}</span>
                </>
              )}
            </div>
            <div>
              <Button onClick={handleNext}>
                {currentIdx >= words.length - 1 ? 'Показать результат' : 'Следующее слово'}
                <ChevronRight className="size-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

// ===================== VOCAB MATCHING (dynamic) =====================
function VocabMatchingQuiz({
  words: rawWords,
  onFinish,
  onBack,
  onNewRound,
}: {
  words: VocabWord[];
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  onNewRound: () => void;
}) {
  // Take up to 8 words
  const gameWords = useMemo(() => rawWords.slice(0, 8), [rawWords]);

  const [selectedCzech, setSelectedCzech] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [wrongAttempts, setWrongAttempts] = useState<Set<string>>(new Set());
  const [finished, setFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const shuffledCzech = useMemo(() => shuffleArray(gameWords.map(w => w.czech)), [gameWords]);
  const shuffledRussian = useMemo(() => shuffleArray(gameWords.map(w => w.russian)), [gameWords]);

  const matchedCount = Object.keys(matches).length;

  const handleCzechClick = (czech: string) => {
    if (matches[czech]) return;
    setSelectedCzech(czech === selectedCzech ? null : czech);
  };

  const handleRussianClick = (russian: string) => {
    if (!selectedCzech) return;
    const word = gameWords.find(w => w.czech === selectedCzech);
    if (word && word.russian === russian) {
      const newMatches = { ...matches, [selectedCzech]: russian };
      setMatches(newMatches);
      const newScore = Object.keys(newMatches).length;
      setWrongAttempts(prev => {
        const next = new Set(prev);
        next.delete(selectedCzech);
        return next;
      });
      if (newScore === gameWords.length) {
        setFinalScore(newScore);
        setFinished(true);
        onFinish(newScore, gameWords.length);
      }
    } else {
      setWrongAttempts(prev => new Set(prev).add(selectedCzech));
    }
    setSelectedCzech(null);
  };

  if (finished) {
    return (
      <ResultsCard
        score={finalScore}
        total={gameWords.length}
        onRetry={() => {
          setSelectedCzech(null);
          setMatches({});
          setWrongAttempts(new Set());
          setFinished(false);
          setFinalScore(0);
        }}
        onNewRound={onNewRound}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Сопоставление</Badge>
        <div className="text-sm text-muted-foreground">
          {matchedCount} из {gameWords.length} пар
        </div>
      </div>
      <Progress value={(matchedCount / gameWords.length) * 100} className="h-2" />

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-center mb-2 text-emerald-700 dark:text-emerald-400">Чешский</p>
          {shuffledCzech.map((czech) => {
            const isMatched = !!matches[czech];
            const isSelected = selectedCzech === czech;
            const isWrong = wrongAttempts.has(czech);
            return (
              <button
                key={czech}
                onClick={() => handleCzechClick(czech)}
                disabled={isMatched}
                className={cn(
                  'w-full p-3 rounded-lg text-left text-sm font-medium transition-all border',
                  isMatched && 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 opacity-60',
                  isSelected && 'border-emerald-500 bg-emerald-100 dark:bg-emerald-900/50 ring-2 ring-emerald-500',
                  isWrong && !isMatched && 'border-red-400 bg-red-50 dark:bg-red-950/50',
                  !isMatched && !isSelected && !isWrong && 'hover:bg-muted/50 cursor-pointer'
                )}
              >
                {czech}
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-center mb-2">Русский</p>
          {shuffledRussian.map((russian) => {
            const isUsed = Object.values(matches).includes(russian);
            return (
              <button
                key={russian}
                onClick={() => handleRussianClick(russian)}
                disabled={isUsed || !selectedCzech}
                className={cn(
                  'w-full p-3 rounded-lg text-left text-sm font-medium transition-all border',
                  isUsed && 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 opacity-60',
                  !isUsed && selectedCzech && 'hover:bg-muted/50 cursor-pointer',
                  !selectedCzech && 'opacity-50'
                )}
              >
                {russian}
              </button>
            );
          })}
        </div>
      </div>

      {!selectedCzech && (
        <p className="text-center text-sm text-muted-foreground">
          Выберите чешское слово, затем выберите соответствующий русский перевод
        </p>
      )}
    </div>
  );
}

// ===================== VOCAB SENTENCE BUILDING (dynamic) =====================
interface VocabSentenceQuestion {
  czechSentence: string;
  translation: string;
  shuffledWords: string[];
}

function generateVocabSentenceQuestions(words: VocabWord[]): VocabSentenceQuestion[] {
  // Filter words that have examples
  const wordsWithExamples = words.filter(w => w.example && w.example.length > 0);
  return wordsWithExamples.map(word => ({
    czechSentence: word.example,
    translation: word.exampleTranslation || word.russian,
    // Split example into words and shuffle
    shuffledWords: shuffleArray(word.example.split(' ')),
  }));
}

function VocabSentenceBuildingQuiz({
  words: rawWords,
  onFinish,
  onBack,
  onNewRound,
}: {
  words: VocabWord[];
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  onNewRound: () => void;
}) {
  const questions = useMemo(() => generateVocabSentenceQuestions(rawWords), [rawWords]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const current = questions[currentIdx];

  const getAvailableWords = () => {
    if (!current) return [];
    const counts: Record<string, number> = {};
    const selCounts: Record<string, number> = {};
    current.shuffledWords.forEach(w => { counts[w] = (counts[w] || 0) + 1; });
    selectedWords.forEach(w => { selCounts[w] = (selCounts[w] || 0) + 1; });
    return current.shuffledWords.filter(w => (counts[w] || 0) > (selCounts[w] || 0));
  };

  const availableWords = getAvailableWords();

  const handleWordClick = (word: string) => {
    if (answered) return;
    setSelectedWords(prev => [...prev, word]);
  };

  const handleSelectedWordClick = (index: number) => {
    if (answered) return;
    setSelectedWords(prev => prev.filter((_, i) => i !== index));
  };

  const handleCheck = () => {
    if (!current) return;
    const joined = selectedWords.join(' ').replace(/\s*([.,!?])\s*/g, '$1');
    const correct = current.czechSentence.replace(/\s*([.,!?])\s*/g, '$1');
    const match = joined === correct;
    setIsCorrect(match);
    setAnswered(true);
    if (match) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIdx >= questions.length - 1) {
      setShowResult(true);
      onFinish(score, questions.length);
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedWords([]);
      setAnswered(false);
      setIsCorrect(false);
    }
  };

  if (questions.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-lg text-muted-foreground">Нет слов с примерами предложений в выбранной категории.</p>
        <Button className="mt-4" onClick={onNewRound}>
          <RefreshCw className="size-4 mr-1" />
          Выбрать другую категорию
        </Button>
      </Card>
    );
  }

  if (showResult) {
    return (
      <ResultsCard
        score={score}
        total={questions.length}
        onRetry={() => {
          setCurrentIdx(0);
          setScore(0);
          setShowResult(false);
          setSelectedWords([]);
          setAnswered(false);
          setIsCorrect(false);
        }}
        onNewRound={onNewRound}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Предложение {currentIdx + 1} из {questions.length}</Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={(currentIdx / questions.length) * 100} className="h-2" />

      <Card className="p-6">
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground mb-1">Перевод:</p>
          <p className="text-lg font-medium">{current.translation}</p>
        </div>

        <div className="min-h-[60px] border-2 border-dashed rounded-lg p-3 mb-4 flex flex-wrap gap-2 items-center">
          {selectedWords.length === 0 ? (
            <p className="text-sm text-muted-foreground w-full text-center">
              Нажимайте на слова ниже, чтобы составить предложение
            </p>
          ) : (
            selectedWords.map((word, i) => (
              <button
                key={`sel-${word}-${i}`}
                onClick={() => handleSelectedWordClick(i)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-sm font-medium border transition-all',
                  answered
                    ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-950/50'
                    : 'border-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 hover:bg-emerald-200 dark:hover:bg-emerald-800/50 cursor-pointer'
                )}
              >
                {word}
              </button>
            ))
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {availableWords.map((word, i) => (
            <button
              key={`avail-${word}-${i}`}
              onClick={() => handleWordClick(word)}
              disabled={answered}
              className="px-3 py-1.5 rounded-md text-sm font-medium border border-muted hover:bg-muted/50 cursor-pointer transition-all"
            >
              {word}
            </button>
          ))}
        </div>

        {!answered && selectedWords.length > 0 && (
          <div className="text-center">
            <Button onClick={handleCheck}>
              <Check className="size-4 mr-1" />
              Проверить
            </Button>
          </div>
        )}

        {answered && (
          <div className="text-center space-y-3">
            {isCorrect ? (
              <p className="text-emerald-600 font-medium">Правильно! ✅</p>
            ) : (
              <div>
                <p className="text-red-600 mb-1">Неправильно ❌</p>
                <p className="text-sm">
                  Правильный ответ:{' '}
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">{current.czechSentence}</span>
                </p>
              </div>
            )}
            <Button onClick={handleNext}>
              {currentIdx >= questions.length - 1 ? 'Показать результат' : 'Следующее'}
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

// ===================== MULTIPLE CHOICE (original fallback) =====================
function MultipleChoiceQuiz({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const [questions] = useState(() => shuffleArray(multipleChoiceQuestions).slice(0, 25));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const current = questions[currentIdx];

  const handleAnswer = (answer: string) => {
    if (answered) return;
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === current.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx >= questions.length - 1) {
      setShowResult(true);
      onFinish(score + (selectedAnswer === current.correctAnswer ? 0 : 0), questions.length);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  if (showResult) {
    return (
      <ResultsCard
        score={score}
        total={questions.length}
        onRetry={() => {
          setShowResult(false);
          setCurrentIdx(0);
          setScore(0);
          setSelectedAnswer(null);
          setAnswered(false);
        }}
        onNewRound={() => {
          setShowResult(false);
          setCurrentIdx(0);
          setScore(0);
          setSelectedAnswer(null);
          setAnswered(false);
        }}
        onBack={() => {}}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">
          Вопрос {currentIdx + 1} из {questions.length}
        </Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={((currentIdx) / questions.length) * 100} className="h-2" />

      <Card className="p-6">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-1">Переведите на русский:</p>
          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{current.czech}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {current.options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === current.correctAnswer;
            let btnClass = 'border hover:bg-muted/50 cursor-pointer';
            if (answered) {
              if (isCorrect) btnClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50';
              else if (isSelected && !isCorrect) btnClass = 'border-red-500 bg-red-50 dark:bg-red-950/50';
              else btnClass = 'border opacity-50';
            }
            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={answered}
                className={cn(
                  'p-4 rounded-lg text-left text-sm font-medium transition-all flex items-center gap-2',
                  btnClass
                )}
              >
                {answered && isCorrect && <Check className="size-4 text-emerald-600 shrink-0" />}
                {answered && isSelected && !isCorrect && <X className="size-4 text-red-600 shrink-0" />}
                {option}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-4 text-center">
            {selectedAnswer === current.correctAnswer ? (
              <p className="text-emerald-600 font-medium">Правильно! ✅</p>
            ) : (
              <p className="text-red-600">
                Неправильно. Правильный ответ:{' '}
                <span className="font-bold">{current.correctAnswer}</span>
              </p>
            )}
            <Button className="mt-3" onClick={handleNext}>
              {currentIdx >= questions.length - 1 ? 'Показать результат' : 'Следующий вопрос'}
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

// ===================== FILL IN THE BLANK (original) =====================
function FillBlankQuiz({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const [questions] = useState(() => shuffleArray(fillBlankQuestions).slice(0, 10));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const current = questions[currentIdx];

  const handleAnswer = (answer: string) => {
    if (answered) return;
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === current.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx >= questions.length - 1) {
      setShowResult(true);
      onFinish(score, questions.length);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  if (showResult) {
    return (
      <ResultsCard
        score={score}
        total={questions.length}
        onRetry={() => {
          setShowResult(false);
          setCurrentIdx(0);
          setScore(0);
          setSelectedAnswer(null);
          setAnswered(false);
        }}
        onNewRound={() => {
          setShowResult(false);
          setCurrentIdx(0);
          setScore(0);
          setSelectedAnswer(null);
          setAnswered(false);
        }}
        onBack={() => {}}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Вопрос {currentIdx + 1} из {questions.length}</Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={((currentIdx) / questions.length) * 100} className="h-2" />

      <Card className="p-6">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-1">Вставьте правильное слово:</p>
          <p className="text-xl font-bold">
            {current.sentenceWithBlank.replace('____', (
              <span className="inline-block min-w-[100px] border-b-2 border-emerald-500 mx-1" />
            ) as unknown as string)}
          </p>
          <p className="text-sm text-muted-foreground mt-2 italic">{current.sentence}</p>
          {current.hint && (
            <p className="text-xs text-muted-foreground mt-1">Подсказка: {current.hint}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {current.options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === current.correctAnswer;
            let btnClass = 'border hover:bg-muted/50 cursor-pointer';
            if (answered) {
              if (isCorrect) btnClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50';
              else if (isSelected && !isCorrect) btnClass = 'border-red-500 bg-red-50 dark:bg-red-950/50';
              else btnClass = 'border opacity-50';
            }
            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={answered}
                className={cn(
                  'p-3 rounded-lg text-left text-sm font-medium transition-all flex items-center gap-2',
                  btnClass
                )}
              >
                {answered && isCorrect && <Check className="size-4 text-emerald-600 shrink-0" />}
                {answered && isSelected && !isCorrect && <X className="size-4 text-red-600 shrink-0" />}
                {option}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-4 text-center">
            {selectedAnswer === current.correctAnswer ? (
              <p className="text-emerald-600 font-medium">Правильно! ✅</p>
            ) : (
              <p className="text-red-600">
                Неправильно. Правильный ответ: <span className="font-bold">{current.correctAnswer}</span>
              </p>
            )}
            <Button className="mt-3" onClick={handleNext}>
              {currentIdx >= questions.length - 1 ? 'Показать результат' : 'Следующий вопрос'}
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

// ===================== MATCHING EXERCISE (original) =====================
function MatchingExercise({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const [set] = useState<MatchingSet>(() => matchingSets[Math.floor(Math.random() * matchingSets.length)]);
  const [selectedCzech, setSelectedCzech] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [wrongAttempts, setWrongAttempts] = useState<Set<string>>(new Set());

  const shuffledRussian = useMemo(() => shuffleArray(set.pairs.map((p) => p.russian)), [set]);

  const isCompleted = Object.keys(matches).length === set.pairs.length;

  const handleCzechClick = (czech: string) => {
    if (matches[czech]) return;
    setSelectedCzech(czech === selectedCzech ? null : czech);
  };

  const handleRussianClick = (russian: string) => {
    if (!selectedCzech) return;
    const pair = set.pairs.find((p) => p.czech === selectedCzech);
    if (pair && pair.russian === russian) {
      setMatches((prev) => ({ ...prev, [selectedCzech]: russian }));
      setWrongAttempts((prev) => {
        const next = new Set(prev);
        next.delete(selectedCzech);
        return next;
      });
    } else {
      setWrongAttempts((prev) => new Set(prev).add(selectedCzech));
    }
    setSelectedCzech(null);
  };

  const matchedCount = Object.keys(matches).length;

  useEffect(() => {
    if (isCompleted) {
      const correctCount = set.pairs.filter((p) => matches[p.czech] === p.russian).length;
      onFinish(correctCount, set.pairs.length);
    }
  }, [isCompleted]);

  if (isCompleted) {
    return (
      <Card className="p-8 text-center">
        <Trophy className="size-16 mx-auto mb-4 text-amber-500" />
        <h3 className="text-2xl font-bold mb-2">Все пары найдены! 🎉</h3>
        <p className="text-lg mb-4">Отличная работа!</p>
        <Button onClick={() => {
          setMatches({});
          setSelectedCzech(null);
          setWrongAttempts(new Set());
        }}>
          <RotateCcw className="size-4 mr-1" />
          Новые пары
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">{set.title}</Badge>
        <div className="text-sm text-muted-foreground">
          {matchedCount} из {set.pairs.length} пар
        </div>
      </div>
      <Progress value={(matchedCount / set.pairs.length) * 100} className="h-2" />

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-center mb-2 text-emerald-700 dark:text-emerald-400">Чешский</p>
          {set.pairs.map((pair) => {
            const isMatched = !!matches[pair.czech];
            const isSelected = selectedCzech === pair.czech;
            const isWrong = wrongAttempts.has(pair.czech);
            return (
              <button
                key={pair.czech}
                onClick={() => handleCzechClick(pair.czech)}
                disabled={isMatched}
                className={cn(
                  'w-full p-3 rounded-lg text-left text-sm font-medium transition-all border',
                  isMatched && 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 opacity-60',
                  isSelected && 'border-emerald-500 bg-emerald-100 dark:bg-emerald-900/50 ring-2 ring-emerald-500',
                  isWrong && !isMatched && 'border-red-400 bg-red-50 dark:bg-red-950/50',
                  !isMatched && !isSelected && !isWrong && 'hover:bg-muted/50 cursor-pointer'
                )}
              >
                {pair.czech}
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-center mb-2">Русский</p>
          {shuffledRussian.map((russian) => {
            const isUsed = Object.values(matches).includes(russian);
            return (
              <button
                key={russian}
                onClick={() => handleRussianClick(russian)}
                disabled={isUsed || !selectedCzech}
                className={cn(
                  'w-full p-3 rounded-lg text-left text-sm font-medium transition-all border',
                  isUsed && 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 opacity-60',
                  !isUsed && selectedCzech && 'hover:bg-muted/50 cursor-pointer',
                  !selectedCzech && 'opacity-50'
                )}
              >
                {russian}
              </button>
            );
          })}
        </div>
      </div>

      {!selectedCzech && (
        <p className="text-center text-sm text-muted-foreground">
          Выберите чешское слово, затем выберите соответствующий русский перевод
        </p>
      )}
    </div>
  );
}

// ===================== SENTENCE BUILDING (original) =====================
function SentenceBuildingQuiz({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const [exercises] = useState(() => shuffleArray(sentenceBuildingExercises).slice(0, 8));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const current = exercises[currentIdx];

  const shuffledForCurrent = current ? shuffleArray(current.words) : [];

  const getAvailableWords = () => {
    if (!current) return [];
    const counts: Record<string, number> = {};
    const selCounts: Record<string, number> = {};
    shuffledForCurrent.forEach(w => { counts[w] = (counts[w] || 0) + 1; });
    selectedWords.forEach(w => { selCounts[w] = (selCounts[w] || 0) + 1; });
    return shuffledForCurrent.filter(w => (counts[w] || 0) > (selCounts[w] || 0));
  };

  const availableWords = getAvailableWords();

  const handleWordClick = (word: string) => {
    if (answered) return;
    setSelectedWords((prev) => [...prev, word]);
  };

  const handleSelectedWordClick = (word: string, index: number) => {
    if (answered) return;
    setSelectedWords((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheck = () => {
    if (!current) return;
    const joined = selectedWords.join(' ').replace(/\s*([.,!?])\s*/g, '$1');
    const correct = current.correctSentence.replace(/\s*([.,!?])\s*/g, '$1');
    const correctAnswer = joined === correct;
    setIsCorrect(correctAnswer);
    setAnswered(true);
    if (correctAnswer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentIdx >= exercises.length - 1) {
      setShowResult(true);
      onFinish(score, exercises.length);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedWords([]);
      setAnswered(false);
      setIsCorrect(false);
    }
  };

  if (showResult) {
    return (
      <ResultsCard
        score={score}
        total={exercises.length}
        onRetry={() => {
          setShowResult(false);
          setCurrentIdx(0);
          setScore(0);
          setSelectedWords([]);
          setAnswered(false);
          setIsCorrect(false);
        }}
        onNewRound={() => {
          setShowResult(false);
          setCurrentIdx(0);
          setScore(0);
          setSelectedWords([]);
          setAnswered(false);
          setIsCorrect(false);
        }}
        onBack={() => {}}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">Предложение {currentIdx + 1} из {exercises.length}</Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={(currentIdx / exercises.length) * 100} className="h-2" />

      <Card className="p-6">
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground mb-1">Перевод:</p>
          <p className="text-lg font-medium">{current.translation}</p>
        </div>

        <div className="min-h-[60px] border-2 border-dashed rounded-lg p-3 mb-4 flex flex-wrap gap-2 items-center">
          {selectedWords.length === 0 ? (
            <p className="text-sm text-muted-foreground w-full text-center">
              Нажимайте на слова ниже, чтобы составить предложение
            </p>
          ) : (
            selectedWords.map((word, i) => (
              <button
                key={`sel-${word}-${i}`}
                onClick={() => handleSelectedWordClick(word, i)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-sm font-medium border transition-all',
                  answered
                    ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-950/50'
                    : 'border-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 hover:bg-emerald-200 dark:hover:bg-emerald-800/50 cursor-pointer'
                )}
              >
                {word}
              </button>
            ))
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {availableWords.map((word, i) => (
            <button
              key={`avail-${word}-${i}`}
              onClick={() => handleWordClick(word)}
              disabled={answered}
              className="px-3 py-1.5 rounded-md text-sm font-medium border border-muted hover:bg-muted/50 cursor-pointer transition-all"
            >
              {word}
            </button>
          ))}
        </div>

        {!answered && selectedWords.length > 0 && (
          <div className="text-center">
            <Button onClick={handleCheck}>
              <Check className="size-4 mr-1" />
              Проверить
            </Button>
          </div>
        )}

        {answered && (
          <div className="text-center space-y-3">
            {isCorrect ? (
              <p className="text-emerald-600 font-medium">Правильно! ✅</p>
            ) : (
              <div>
                <p className="text-red-600 mb-1">Неправильно ❌</p>
                <p className="text-sm">
                  Правильный ответ:{' '}
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">{current.correctSentence}</span>
                </p>
              </div>
            )}
            <Button onClick={handleNext}>
              {currentIdx >= exercises.length - 1 ? 'Показать результат' : 'Следующее'}
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

// ===================== MAIN EXERCISES SECTION =====================
export function ExercisesSection() {
  const [step, setStep] = useState<SectionStep>('select-exercise');
  const [selectedType, setSelectedType] = useState<ExerciseType | null>(null);
  const [selectedWords, setSelectedWords] = useState<VocabWord[] | null>(null);
  const { addQuizScore, incrementStreak } = useCzechStore();

  const handleFinish = useCallback(
    (type: ExerciseType) => (score: number, total: number) => {
      addQuizScore({
        id: `${type}-${Date.now()}`,
        type,
        score,
        total,
        date: new Date().toISOString(),
      });
      incrementStreak();
    },
    [addQuizScore, incrementStreak]
  );

  const handleExerciseSelect = (type: ExerciseType) => {
    setSelectedType(type);
    if (vocabBasedExercises.includes(type)) {
      setStep('select-category');
    } else {
      setStep('playing');
    }
  };

  const handleCategorySelect = (words: VocabWord[]) => {
    setSelectedWords(words);
    setStep('playing');
  };

  const handleBackToCategories = useCallback(() => {
    setSelectedWords(null);
    setStep('select-category');
  }, []);

  const handleNewRound = useCallback(() => {
    setSelectedWords(null);
    setStep('select-category');
  }, []);

  const handleBackToExercises = useCallback(() => {
    setSelectedType(null);
    setSelectedWords(null);
    setStep('select-exercise');
  }, []);

  // Category selection screen
  if (step === 'select-category' && selectedType) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="category-select"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <CategorySelector
            exerciseType={selectedType}
            onSelect={handleCategorySelect}
            onBack={handleBackToExercises}
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  // Playing screen
  if (step === 'playing' && selectedType) {
    const typeInfo = exerciseTypes.find((t) => t.id === selectedType);
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={handleBackToExercises}>
            <ChevronLeft className="size-5" />
          </Button>
          <h2 className="text-xl font-bold">{typeInfo?.label}</h2>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {/* Vocab-based exercises */}
            {selectedType === 'flashcards' && selectedWords && (
              <FlashcardsQuiz
                words={selectedWords}
                onFinish={handleFinish('flashcards')}
                onBack={handleBackToCategories}
                onNewRound={handleNewRound}
              />
            )}
            {selectedType === 'reverse-quiz' && selectedWords && (
              <ReverseQuiz
                words={selectedWords}
                onFinish={handleFinish('reverse-quiz')}
                onBack={handleBackToCategories}
                onNewRound={handleNewRound}
              />
            )}
            {selectedType === 'true-false' && selectedWords && (
              <TrueFalseQuiz
                words={selectedWords}
                onFinish={handleFinish('true-false')}
                onBack={handleBackToCategories}
                onNewRound={handleNewRound}
              />
            )}
            {selectedType === 'word-scramble' && selectedWords && (
              <WordScrambleQuiz
                words={selectedWords}
                onFinish={handleFinish('word-scramble')}
                onBack={handleBackToCategories}
                onNewRound={handleNewRound}
              />
            )}
            {selectedType === 'typing-practice' && selectedWords && (
              <TypingPracticeQuiz
                words={selectedWords}
                onFinish={handleFinish('typing-practice')}
                onBack={handleBackToCategories}
                onNewRound={handleNewRound}
              />
            )}

            {/* Dynamic vocab versions for classic exercises (when selectedWords exists) */}
            {selectedType === 'multiple-choice' && selectedWords && (
              <VocabMultipleChoiceQuiz
                words={selectedWords}
                onFinish={handleFinish('multiple-choice')}
                onBack={handleBackToCategories}
                onNewRound={handleNewRound}
              />
            )}
            {selectedType === 'fill-blank' && selectedWords && (
              <VocabFillBlankQuiz
                words={selectedWords}
                onFinish={handleFinish('fill-blank')}
                onBack={handleBackToCategories}
                onNewRound={handleNewRound}
              />
            )}
            {selectedType === 'matching' && selectedWords && (
              <VocabMatchingQuiz
                words={selectedWords}
                onFinish={handleFinish('matching')}
                onBack={handleBackToCategories}
                onNewRound={handleNewRound}
              />
            )}
            {selectedType === 'sentence-building' && selectedWords && (
              <VocabSentenceBuildingQuiz
                words={selectedWords}
                onFinish={handleFinish('sentence-building')}
                onBack={handleBackToCategories}
                onNewRound={handleNewRound}
              />
            )}

            {/* Fallback to static versions when no selectedWords */}
            {selectedType === 'multiple-choice' && !selectedWords && (
              <MultipleChoiceQuiz onFinish={handleFinish('multiple-choice')} />
            )}
            {selectedType === 'fill-blank' && !selectedWords && (
              <FillBlankQuiz onFinish={handleFinish('fill-blank')} />
            )}
            {selectedType === 'matching' && !selectedWords && (
              <MatchingExercise onFinish={handleFinish('matching')} />
            )}
            {selectedType === 'sentence-building' && !selectedWords && (
              <SentenceBuildingQuiz onFinish={handleFinish('sentence-building')} />
            )}

            {/* Grammar exercises (self-contained component) */}
            {selectedType === 'grammar-exercises' && (
              <GrammarExercisesSection />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Exercise type selection screen (default)
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Упражнения</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Выберите тип упражнения для практики
        </p>
      </div>

      {/* New exercises */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
          <Sparkles className="size-4 text-amber-500" />
          Новые упражнения для повторения слов
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {exerciseTypes.filter(t => t.isNew).map((type) => (
            <Card
              key={type.id}
              className="cursor-pointer hover:shadow-md transition-all hover:scale-[1.02] p-6 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-card dark:from-emerald-950/20 dark:to-card"
              onClick={() => handleExerciseSelect(type.id)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-600">
                  {type.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{type.label}</h3>
                    <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 border-0">Новое</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
                <ArrowRight className="size-5 text-muted-foreground mt-1 shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Original exercises */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3">Классические упражнения</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {exerciseTypes.filter(t => !t.isNew).map((type) => (
            <Card
              key={type.id}
              className="cursor-pointer hover:shadow-md transition-all hover:scale-[1.02] p-6"
              onClick={() => handleExerciseSelect(type.id)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-600">
                  {type.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{type.label}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
                <ArrowRight className="size-5 text-muted-foreground mt-1 shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
