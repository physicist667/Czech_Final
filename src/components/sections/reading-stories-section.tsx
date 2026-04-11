'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { readingStories } from '@/data/readingStories';
import { readingStoriesB1B2 } from '@/data/readingStoriesB1B2';
import type { ReadingStory } from '@/data/readingStories';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  BookOpen,
  Check,
  X,
  ArrowRight,
  Eye,
  EyeOff,
  Trophy,
  RotateCcw,
  FileText,
  HelpCircle,
} from 'lucide-react';

const allStories: ReadingStory[] = [...readingStories, ...readingStoriesB1B2];

type StoryLevel = 'A1' | 'A2' | 'B1' | 'B2';
type FilterLevel = 'all' | StoryLevel;

const levelColors: Record<StoryLevel, string> = {
  A1: 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-300',
  A2: 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300',
  B1: 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300',
  B2: 'bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300',
};

const levelBorderColors: Record<StoryLevel, string> = {
  A1: 'border-l-green-500',
  A2: 'border-l-blue-500',
  B1: 'border-l-amber-500',
  B2: 'border-l-purple-500',
};

const filterLevels: { key: FilterLevel; label: string }[] = [
  { key: 'all', label: 'Все' },
  { key: 'A1', label: 'A1' },
  { key: 'A2', label: 'A2' },
  { key: 'B1', label: 'B1' },
  { key: 'B2', label: 'B2' },
];

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export function ReadingStoriesSection() {
  const [filterLevel, setFilterLevel] = useState<FilterLevel>('all');
  const [selectedStory, setSelectedStory] = useState<ReadingStory | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const filteredStories = useMemo(() => {
    if (filterLevel === 'all') return allStories;
    return allStories.filter((s) => s.level === filterLevel);
  }, [filterLevel]);

  const handleSelectStory = (story: ReadingStory) => {
    setSelectedStory(story);
    setShowTranslation(false);
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setQuestionsAnswered(0);
    setQuizCompleted(false);
  };

  const handleBackToList = () => {
    setSelectedStory(null);
    setShowTranslation(false);
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setQuestionsAnswered(0);
    setQuizCompleted(false);
  };

  const handleAnswer = (answerIdx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIdx);
    setQuestionsAnswered((prev) => prev + 1);
    const currentQuestion = selectedStory!.questions[currentQuestionIdx];
    if (answerIdx === currentQuestion.correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx + 1 >= selectedStory!.questions.length) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setQuestionsAnswered(0);
    setQuizCompleted(false);
  };

  // ===== Main List View =====
  if (!selectedStory) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="size-6 text-emerald-600" />
            Чтение
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            {allStories.length} текстов для чтения по уровням A1–B2
          </p>
        </div>

        {/* Level Filter */}
        <div className="flex flex-wrap gap-2">
          {filterLevels.map((f) => (
            <Button
              key={f.key}
              variant={filterLevel === f.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterLevel(f.key)}
              className={cn(
                'transition-all',
                filterLevel === f.key
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                  : 'hover:border-emerald-300',
                f.key !== 'all' && filterLevel === f.key && levelColors[f.key as StoryLevel]
              )}
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Stories Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          key={filterLevel}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredStories.map((story) => (
            <motion.div key={story.id} variants={item}>
              <Card
                className={cn(
                  'cursor-pointer hover:shadow-md transition-all hover:scale-[1.02] border-l-4',
                  levelBorderColors[story.level]
                )}
                onClick={() => handleSelectStory(story)}
              >
                <CardHeader className="pb-2 pt-4 px-4">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-semibold leading-tight">
                      {story.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className={cn('text-xs shrink-0', levelColors[story.level])}
                    >
                      {story.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4 space-y-2">
                  <p className="text-sm text-muted-foreground">{story.titleRussian}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <FileText className="size-3" />
                      {countWords(story.text)} слов
                    </span>
                    <span className="flex items-center gap-1">
                      <HelpCircle className="size-3" />
                      {story.questions.length} вопр.
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <BookOpen className="size-10 mx-auto mb-3 opacity-40" />
            <p>Нет текстов для выбранного уровня</p>
          </div>
        )}
      </div>
    );
  }

  // ===== Story Detail View =====
  const currentQuestion = selectedStory.questions[currentQuestionIdx];
  const totalQuestions = selectedStory.questions.length;
  const quizProgress = quizCompleted
    ? 100
    : totalQuestions > 0
      ? Math.round((questionsAnswered / totalQuestions) * 100)
      : 0;

  return (
    <div className="space-y-6">
      {/* Back Button + Title */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={handleBackToList}>
          <ChevronLeft className="size-5" />
        </Button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl font-bold">{selectedStory.title}</h2>
            <Badge
              variant="secondary"
              className={cn('text-xs', levelColors[selectedStory.level])}
            >
              {selectedStory.level}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{selectedStory.titleRussian}</p>
        </div>
      </div>

      {/* Czech Text */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <BookOpen className="size-4 text-emerald-600" />
            Текст на чешском
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm leading-relaxed whitespace-pre-line font-serif">
            {selectedStory.text}
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <FileText className="size-3" />
              {countWords(selectedStory.text)} слов
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Translation Toggle */}
      <Button
        variant="outline"
        onClick={() => setShowTranslation(!showTranslation)}
        className="w-full gap-2"
      >
        {showTranslation ? (
          <>
            <EyeOff className="size-4" />
            Скрыть перевод
          </>
        ) : (
          <>
            <Eye className="size-4" />
            Показать перевод
          </>
        )}
      </Button>

      {/* Russian Translation */}
      <AnimatePresence>
        {showTranslation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base text-blue-600 dark:text-blue-400">
                  <Eye className="size-4" />
                  Перевод на русский
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                  {selectedStory.textRussian}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vocabulary Section */}
      {selectedStory.vocabulary.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <BookOpen className="size-4 text-emerald-600" />
              Словарь
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedStory.vocabulary.map((word, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/40 border"
                >
                  <span className="font-medium text-emerald-700 dark:text-emerald-400 text-sm">
                    {word.czech}
                  </span>
                  <span className="text-muted-foreground text-sm">—</span>
                  <span className="text-muted-foreground text-sm">{word.russian}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Questions Section */}
      {totalQuestions > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <HelpCircle className="size-4 text-emerald-600" />
                Вопросы к тексту
              </CardTitle>
              <Badge variant="secondary" className="text-xs">
                {questionsAnswered} / {totalQuestions}
              </Badge>
            </div>
            <Progress value={quizProgress} className="h-1.5 mt-2" />
          </CardHeader>
          <CardContent>
            {!quizCompleted ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestionIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Question */}
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      Вопрос {currentQuestionIdx + 1} из {totalQuestions}
                    </p>
                    <p className="font-medium text-base">{currentQuestion.question}</p>
                  </div>

                  {/* Options */}
                  <div className="space-y-2">
                    {currentQuestion.options.map((option, optIdx) => {
                      const isCorrect = optIdx === currentQuestion.correctAnswer;
                      const isSelected = selectedAnswer === optIdx;
                      const hasAnswered = selectedAnswer !== null;

                      return (
                        <button
                          key={optIdx}
                          disabled={hasAnswered}
                          onClick={() => handleAnswer(optIdx)}
                          className={cn(
                            'w-full text-left p-3 rounded-lg border text-sm transition-all flex items-center gap-3',
                            'hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20',
                            'disabled:cursor-default',
                            hasAnswered && isCorrect &&
                              'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30',
                            hasAnswered && isSelected && !isCorrect &&
                              'border-red-500 bg-red-50 dark:bg-red-950/30',
                            hasAnswered && !isSelected && !isCorrect &&
                              'opacity-50'
                          )}
                        >
                          <div
                            className={cn(
                              'w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-medium transition-all',
                              hasAnswered && isCorrect &&
                                'border-emerald-500 bg-emerald-500 text-white',
                              hasAnswered && isSelected && !isCorrect &&
                                'border-red-500 bg-red-500 text-white',
                              !hasAnswered &&
                                'border-muted-foreground/30 text-muted-foreground'
                            )}
                          >
                            {hasAnswered && isCorrect ? (
                              <Check className="size-3.5" />
                            ) : hasAnswered && isSelected && !isCorrect ? (
                              <X className="size-3.5" />
                            ) : (
                              String.fromCharCode(65 + optIdx)
                            )}
                          </div>
                          <span className="flex-1">{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  {selectedAnswer !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex justify-end"
                    >
                      <Button
                        onClick={handleNextQuestion}
                        className="bg-emerald-600 hover:bg-emerald-700 gap-1"
                      >
                        {currentQuestionIdx + 1 >= totalQuestions ? 'Результаты' : 'Далее'}
                        <ArrowRight className="size-4" />
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            ) : (
              /* Quiz Completed */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4 py-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 mb-2">
                  <Trophy
                    className={cn(
                      'size-8',
                      correctAnswers === totalQuestions
                        ? 'text-amber-500'
                        : 'text-emerald-600'
                    )}
                  />
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    {correctAnswers} из {totalQuestions}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">правильных ответов</p>
                </div>

                <div className="max-w-xs mx-auto">
                  <Progress
                    value={totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0}
                    className="h-3"
                  />
                  <p className="text-sm font-medium mt-1">
                    {totalQuestions > 0
                      ? Math.round((correctAnswers / totalQuestions) * 100)
                      : 0}
                    %
                  </p>
                </div>

                {correctAnswers === totalQuestions && (
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                    Отлично! Все ответы верны! 🎉
                  </p>
                )}

                {correctAnswers > 0 && correctAnswers < totalQuestions && (
                  <p className="text-amber-600 dark:text-amber-400 font-medium text-sm">
                    Хороший результат! Попробуйте ещё раз для лучшего результата.
                  </p>
                )}

                {correctAnswers === 0 && (
                  <p className="text-red-500 font-medium text-sm">
                    Не расстраивайтесь! Прочитайте текст ещё раз и попробуйте снова.
                  </p>
                )}

                <Button
                  onClick={handleRestartQuiz}
                  variant="outline"
                  className="gap-2"
                >
                  <RotateCcw className="size-4" />
                  Пройти заново
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Back to List Button */}
      <div className="flex justify-center pt-2 pb-4">
        <Button variant="outline" onClick={handleBackToList} className="gap-2">
          <ChevronLeft className="size-4" />
          Назад к списку
        </Button>
      </div>
    </div>
  );
}
