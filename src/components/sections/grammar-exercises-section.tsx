'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { grammarExerciseSets } from '@/data/grammarExercises';
import type { GrammarExerciseSet, GrammarExerciseQuestion } from '@/data/grammarExercises';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  X,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Trophy,
  ArrowRight,
  RefreshCw,
  Lightbulb,
  GraduationCap,
  BookOpen,
  Target,
} from 'lucide-react';

type Step = 'select-set' | 'playing' | 'results';

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===================== RESULTS CARD =====================
function GrammarResultsCard({
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
          Другой набор
        </Button>
        <Button variant="ghost" onClick={onBack}>
          <ChevronLeft className="size-4 mr-1" />
          Назад
        </Button>
      </div>
    </Card>
  );
}

// ===================== QUIZ =====================
function GrammarQuiz({
  exerciseSet,
  onFinish,
  onBack,
  onNewRound,
}: {
  exerciseSet: GrammarExerciseSet;
  onFinish: (score: number, total: number) => void;
  onBack: () => void;
  onNewRound: () => void;
}) {
  const [questions] = useState<GrammarExerciseQuestion[]>(() => shuffleArray(exerciseSet.questions));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const current = questions[currentIdx];

  const handleAnswer = (answer: string) => {
    if (answered) return;
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === current.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx >= questions.length - 1) {
      setShowResult(true);
      onFinish(score + (selectedAnswer === current.correctAnswer ? 0 : 0), questions.length);
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowHint(false);
    }
  };

  if (showResult) {
    return (
      <GrammarResultsCard
        score={score}
        total={questions.length}
        onRetry={() => {
          setCurrentIdx(0);
          setSelectedAnswer(null);
          setScore(0);
          setShowResult(false);
          setAnswered(false);
          setShowHint(false);
        }}
        onNewRound={onNewRound}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Badge variant="secondary">
          Вопрос {currentIdx + 1} из {questions.length}
        </Badge>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-600 font-medium">{score}</span>
          <span className="text-muted-foreground">правильных</span>
        </div>
      </div>
      <Progress value={((currentIdx + (answered ? 1 : 0)) / questions.length) * 100} className="h-2" />

      {/* Question Card */}
      <Card className="p-6">
        {/* Grammar topic badge */}
        <div className="flex items-center gap-2 mb-3">
          <Badge
            variant="outline"
            className={cn(
              'text-xs',
              current.difficulty === 'B1'
                ? 'border-emerald-300 text-emerald-700 dark:text-emerald-400'
                : 'border-amber-300 text-amber-700 dark:text-amber-400'
            )}
          >
            {current.difficulty}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {current.grammarTopic}
          </Badge>
        </div>

        {/* Question */}
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground mb-1">{current.question}</p>
          <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mt-2">
            {current.sentence}
          </p>
        </div>

        {/* Hint toggle */}
        {!answered && (
          <div className="text-center mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowHint(!showHint)}
              className="text-muted-foreground"
            >
              <Lightbulb className="size-4 mr-1" />
              {showHint ? 'Скрыть подсказку' : 'Показать подсказку'}
            </Button>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-2"
              >
                <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-4 py-2 rounded-lg inline-block">
                  💡 {current.hint}
                </p>
              </motion.div>
            )}
          </div>
        )}

        {/* Options */}
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
                <span className="font-bold text-base">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation after answering */}
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <div className={cn(
              'px-4 py-3 rounded-lg text-sm mb-3',
              selectedAnswer === current.correctAnswer
                ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400'
                : 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400'
            )}>
              {selectedAnswer === current.correctAnswer ? (
                <span className="flex items-center gap-1">
                  <Check className="size-4" /> Правильно!
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <X className="size-4" /> Неправильно. Правильный ответ: <span className="font-bold">{current.correctAnswer}</span>
                </span>
              )}
            </div>
            <div className="bg-muted/50 px-4 py-3 rounded-lg text-sm">
              <p className="font-medium mb-1">📖 Объяснение:</p>
              <p className="text-muted-foreground">{current.explanation}</p>
            </div>
            <div className="mt-3 text-center">
              <Button onClick={handleNext}>
                {currentIdx >= questions.length - 1 ? 'Показать результат' : 'Следующий вопрос'}
                <ChevronRight className="size-4 ml-1" />
              </Button>
            </div>
          </motion.div>
        )}
      </Card>
    </div>
  );
}

// ===================== SET SELECTOR =====================
function SetSelector({
  onSelect,
}: {
  onSelect: (set: GrammarExerciseSet) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Грамматические упражнения</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Практика грамматических правил чешского языка для уровней B1–B2
        </p>
      </div>

      {/* B1 Sets */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
          <BookOpen className="size-4 text-emerald-600" />
          Уровень B1
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {grammarExerciseSets.filter(s => s.difficulty === 'B1').map((set) => (
            <Card
              key={set.id}
              className="cursor-pointer hover:shadow-md transition-all hover:scale-[1.02] p-6 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-card dark:from-emerald-950/20 dark:to-card"
              onClick={() => onSelect(set)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900 text-2xl">
                  {set.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{set.title}</h3>
                    <Badge variant="outline" className="text-xs border-emerald-300 text-emerald-700 dark:text-emerald-400">
                      {set.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{set.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{set.questions.length} вопросов</p>
                </div>
                <ArrowRight className="size-5 text-muted-foreground mt-1 shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* B2 Sets */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
          <Target className="size-4 text-amber-500" />
          Уровень B2
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {grammarExerciseSets.filter(s => s.difficulty === 'B2').map((set) => (
            <Card
              key={set.id}
              className="cursor-pointer hover:shadow-md transition-all hover:scale-[1.02] p-6 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-card dark:from-amber-950/20 dark:to-card"
              onClick={() => onSelect(set)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900 text-2xl">
                  {set.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{set.title}</h3>
                    <Badge variant="outline" className="text-xs border-amber-300 text-amber-700 dark:text-amber-400">
                      {set.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{set.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{set.questions.length} вопросов</p>
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

// ===================== MAIN COMPONENT =====================
export function GrammarExercisesSection() {
  const [step, setStep] = useState<Step>('select-set');
  const [selectedSet, setSelectedSet] = useState<GrammarExerciseSet | null>(null);

  const handleSelectSet = (set: GrammarExerciseSet) => {
    setSelectedSet(set);
    setStep('playing');
  };

  const handleFinish = (score: number, total: number) => {
    // Could integrate with store if needed
    console.log(`Grammar exercise completed: ${score}/${total}`);
  };

  const handleBackToSets = () => {
    setSelectedSet(null);
    setStep('select-set');
  };

  const handleNewRound = () => {
    setSelectedSet(null);
    setStep('select-set');
  };

  return (
    <AnimatePresence mode="wait">
      {step === 'select-set' && (
        <motion.div
          key="select-set"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <SetSelector onSelect={handleSelectSet} />
        </motion.div>
      )}

      {step === 'playing' && selectedSet && (
        <motion.div
          key="playing"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={handleBackToSets}>
              <ChevronLeft className="size-5" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{selectedSet.icon}</span>
              <div>
                <h2 className="text-xl font-bold">{selectedSet.title}</h2>
                <p className="text-sm text-muted-foreground">{selectedSet.topic}</p>
              </div>
            </div>
          </div>
          <GrammarQuiz
            exerciseSet={selectedSet}
            onFinish={handleFinish}
            onBack={handleBackToSets}
            onNewRound={handleNewRound}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
