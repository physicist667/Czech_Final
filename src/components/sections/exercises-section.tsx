'use client';

import { useState, useCallback, useMemo } from 'react';
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
} from 'lucide-react';

type ExerciseType = 'multiple-choice' | 'fill-blank' | 'matching' | 'sentence-building';

const exerciseTypes: { id: ExerciseType; label: string; icon: React.ReactNode; description: string }[] = [
  { id: 'multiple-choice', label: 'Выберите перевод', icon: <Target className="size-5" />, description: 'Выберите правильный перевод из 4 вариантов' },
  { id: 'fill-blank', label: 'Заполните пропуск', icon: <PenLine className="size-5" />, description: 'Вставьте правильное слово' },
  { id: 'matching', label: 'Сопоставьте пары', icon: <Link className="size-5" />, description: 'Соедините чешские слова с русскими' },
  { id: 'sentence-building', label: 'Составьте предложение', icon: <ListChecks className="size-5" />, description: 'Расположите слова в правильном порядке' },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Multiple Choice Exercise
function MultipleChoiceQuiz({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const [questions] = useState(() => shuffleArray(multipleChoiceQuestions).slice(0, 15));
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
    const pct = Math.round((score / questions.length) * 100);
    return (
      <Card className="p-8 text-center">
        <Trophy className={cn('size-16 mx-auto mb-4', pct >= 70 ? 'text-amber-500' : 'text-muted-foreground')} />
        <h3 className="text-2xl font-bold mb-2">
          {pct >= 90 ? 'Отлично! 🎉' : pct >= 70 ? 'Хорошо! 👍' : 'Попробуйте ещё раз 💪'}
        </h3>
        <p className="text-lg mb-4">
          {score} из {questions.length} правильных ответов ({pct}%)
        </p>
        <Progress value={pct} className="h-3 mb-4 max-w-xs mx-auto" />
        <Button onClick={() => {
          setShowResult(false);
          setCurrentIdx(0);
          setScore(0);
          setSelectedAnswer(null);
          setAnswered(false);
        }}>
          <RotateCcw className="size-4 mr-1" />
          Попробовать снова
        </Button>
      </Card>
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

// Fill in the Blank Exercise
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
    const pct = Math.round((score / questions.length) * 100);
    return (
      <Card className="p-8 text-center">
        <Trophy className={cn('size-16 mx-auto mb-4', pct >= 70 ? 'text-amber-500' : 'text-muted-foreground')} />
        <h3 className="text-2xl font-bold mb-2">
          {pct >= 90 ? 'Отлично! 🎉' : pct >= 70 ? 'Хорошо! 👍' : 'Попробуйте ещё раз 💪'}
        </h3>
        <p className="text-lg mb-4">
          {score} из {questions.length} правильных ответов ({pct}%)
        </p>
        <Progress value={pct} className="h-3 mb-4 max-w-xs mx-auto" />
        <Button onClick={() => {
          setShowResult(false);
          setCurrentIdx(0);
          setScore(0);
          setSelectedAnswer(null);
          setAnswered(false);
        }}>
          <RotateCcw className="size-4 mr-1" />
          Попробовать снова
        </Button>
      </Card>
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

// Matching Exercise
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
        {/* Czech Column */}
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

        {/* Russian Column */}
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

// Sentence Building Exercise
function SentenceBuildingQuiz({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const [exercises] = useState(() => shuffleArray(sentenceBuildingExercises).slice(0, 8));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const current = exercises[currentIdx];

  // Compute shuffled words for current exercise and filter available
  const shuffledForCurrent = current ? shuffleArray(current.words) : [];

  // Count available words based on how many times each word appears vs selected
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
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <Card className="p-8 text-center">
        <Trophy className={cn('size-16 mx-auto mb-4', pct >= 70 ? 'text-amber-500' : 'text-muted-foreground')} />
        <h3 className="text-2xl font-bold mb-2">
          {pct >= 90 ? 'Отлично! 🎉' : pct >= 70 ? 'Хорошо! 👍' : 'Попробуйте ещё раз 💪'}
        </h3>
        <p className="text-lg mb-4">
          {score} из {exercises.length} правильных ({pct}%)
        </p>
        <Progress value={pct} className="h-3 mb-4 max-w-xs mx-auto" />
        <Button onClick={() => {
          setShowResult(false);
          setCurrentIdx(0);
          setScore(0);
          setSelectedWords([]);
          setAnswered(false);
          setIsCorrect(false);
        }}>
          <RotateCcw className="size-4 mr-1" />
          Попробовать снова
        </Button>
      </Card>
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

        {/* Selected words area */}
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

        {/* Available words */}
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

// Main Exercises Section
export function ExercisesSection() {
  const [selectedType, setSelectedType] = useState<ExerciseType | null>(null);
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

  if (selectedType) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setSelectedType(null)}>
            <ChevronLeft className="size-5" />
          </Button>
          <h2 className="text-xl font-bold">
            {exerciseTypes.find((t) => t.id === selectedType)?.label}
          </h2>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {selectedType === 'multiple-choice' && (
              <MultipleChoiceQuiz onFinish={handleFinish('multiple-choice')} />
            )}
            {selectedType === 'fill-blank' && (
              <FillBlankQuiz onFinish={handleFinish('fill-blank')} />
            )}
            {selectedType === 'matching' && (
              <MatchingExercise onFinish={handleFinish('matching')} />
            )}
            {selectedType === 'sentence-building' && (
              <SentenceBuildingQuiz onFinish={handleFinish('sentence-building')} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Упражнения</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Выберите тип упражнения для практики
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {exerciseTypes.map((type) => (
          <Card
            key={type.id}
            className="cursor-pointer hover:shadow-md transition-all hover:scale-[1.02] p-6"
            onClick={() => setSelectedType(type.id)}
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
  );
}
