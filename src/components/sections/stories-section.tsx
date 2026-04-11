'use client';

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { storiesData, type Story, type StoryVocabulary } from '@/data/stories';
import { czechDictionary, type DictEntry } from '@/data/czechDictionary';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  ChevronLeft,
  ChevronDown,
  Check,
  X,
  RotateCcw,
  Trophy,
  FileText,
  Languages,
  Search,
  Eye,
  BookmarkCheck,
  CircleDot,
  Volume2,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const levelColors: Record<string, string> = {
  A1: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  A2: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  B1: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  B2: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
};

const STORAGE_KEY = 'czech-stories-completed';

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function loadCompleted(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCompleted(ids: string[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/** Check if a word is in the story vocabulary list */
function isVocabWord(word: string, vocabulary: StoryVocabulary[]): boolean {
  return vocabulary.some(
    (v) => v.word.toLowerCase() === word.toLowerCase()
  );
}

/** Look up a word: first check story vocabulary, then general dictionary */
function lookupWord(
  word: string,
  vocabulary: StoryVocabulary[]
): { translation: string; pronunciation: string; isVocab: boolean } | null {
  const lower = word.toLowerCase();
  const vocabEntry = vocabulary.find(
    (v) => v.word.toLowerCase() === lower
  );
  if (vocabEntry) {
    const dictEntry = czechDictionary[lower];
    return {
      translation: vocabEntry.translation,
      pronunciation: dictEntry?.pronunciation || '',
      isVocab: true,
    };
  }
  const dictEntry = czechDictionary[lower];
  if (dictEntry) {
    return {
      translation: dictEntry.translation,
      pronunciation: dictEntry.pronunciation,
      isVocab: false,
    };
  }
  return null;
}

/** Czech word pattern */
const CZECH_WORD_RE = /[a-zA-ZáčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+/g;

/** Split text into alternating [word, nonWord] tokens */
function tokenizeText(text: string): { text: string; isWord: boolean }[] {
  const result: { text: string; isWord: boolean }[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(CZECH_WORD_RE.source, 'g');
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push({ text: text.slice(lastIndex, match.index), isWord: false });
    }
    result.push({ text: match[0], isWord: true });
    lastIndex = re.lastIndex;
  }
  if (lastIndex < text.length) {
    result.push({ text: text.slice(lastIndex), isWord: false });
  }
  return result;
}

type StoryStatus = 'not-started' | 'in-progress' | 'completed';

function getStoryStatus(
  storyId: string,
  completedIds: string[],
  inProgressIds: string[]
): StoryStatus {
  if (completedIds.includes(storyId)) return 'completed';
  if (inProgressIds.includes(storyId)) return 'in-progress';
  return 'not-started';
}

const statusConfig: Record<
  StoryStatus,
  { label: string; className: string; icon: React.ReactNode }
> = {
  'not-started': {
    label: 'Не начато',
    className:
      'bg-muted text-muted-foreground border-muted-foreground/20',
    icon: <FileText className="size-3" />,
  },
  'in-progress': {
    label: 'В процессе',
    className:
      'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-800',
    icon: <Eye className="size-3" />,
  },
  completed: {
    label: 'Прочитано',
    className:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:border-emerald-800',
    icon: <BookmarkCheck className="size-3" />,
  },
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/** Level filter bar shared between Story List and inline usage. */
function LevelFilter({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (level: string | null) => void;
}) {
  return (
    <div className="flex gap-2">
      {['A1', 'A2', 'B1', 'B2'].map((lvl) => (
        <Button
          key={lvl}
          variant={selected === lvl ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelect(selected === lvl ? null : lvl)}
          className={cn(
            selected === lvl && levelColors[lvl],
            'font-semibold min-w-[3rem]'
          )}
        >
          {lvl}
        </Button>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

interface WordPopup {
  word: string;
  translation: string;
  pronunciation: string;
  isVocab: boolean;
  x: number;
  y: number;
}

export function StoriesSection() {
  // --- Core state ---
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [textMode, setTextMode] = useState<'text' | 'translation'>('text');
  const [vocabOpen, setVocabOpen] = useState(false);
  const [wordPopup, setWordPopup] = useState<WordPopup | null>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  // --- Quiz state ---
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [quizChecked, setQuizChecked] = useState(false);

  // --- Filter / search ---
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // --- Persistence ---
  const [completedStoryIds, setCompletedStoryIds] = useState<string[]>([]);
  const [inProgressStoryIds, setInProgressStoryIds] = useState<string[]>([]);

  // Load persisted state on mount
  useEffect(() => {
    setCompletedStoryIds(loadCompleted());
  }, []);

  // Dismiss word popup on scroll
  useEffect(() => {
    if (!wordPopup) return;
    const handleScroll = () => setWordPopup(null);
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [wordPopup]);

  // Derived: current story
  const selectedStory = useMemo(
    () => storiesData.find((s) => s.id === selectedStoryId) ?? null,
    [selectedStoryId]
  );

  // Derived: filtered story list
  const filteredStories = useMemo(() => {
    let list = storiesData;

    if (selectedLevel) {
      list = list.filter((s) => s.level === selectedLevel);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) =>
          s.title.czech.toLowerCase().includes(q) ||
          s.title.russian.toLowerCase().includes(q) ||
          s.text.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedLevel, searchQuery]);

  // Derived: completion stats
  const completedCount = completedStoryIds.length;
  const totalStories = storiesData.length;

  // Derived: quiz results
  const quizScore = useMemo(() => {
    if (!selectedStory || !quizChecked) return { correct: 0, total: 0 };
    let correct = 0;
    selectedStory.quiz.forEach((q) => {
      if (answers[q.id] === q.correctIndex) correct++;
    });
    return { correct, total: selectedStory.quiz.length };
  }, [selectedStory, answers, quizChecked]);

  const quizPercentage =
    quizScore.total > 0 ? Math.round((quizScore.correct / quizScore.total) * 100) : 0;

  // --- Handlers ---

  const openStory = useCallback(
    (storyId: string) => {
      setSelectedStoryId(storyId);
      setTextMode('text');
      setQuizStarted(false);
      setAnswers({});
      setQuizChecked(false);
      setVocabOpen(false);
      setCompletedStoryIds((prev) => {
        if (prev.includes(storyId)) return prev;
        return prev;
      });
      setInProgressStoryIds((prev) => {
        if (prev.includes(storyId)) return prev;
        return [...prev, storyId];
      });
    },
    []
  );

  const goBackToList = useCallback(() => {
    setSelectedStoryId(null);
    setQuizStarted(false);
    setAnswers({});
    setQuizChecked(false);
    setTextMode('text');
    setVocabOpen(false);
  }, []);

  const startQuiz = useCallback(() => {
    setQuizStarted(true);
    setAnswers({});
    setQuizChecked(false);
  }, []);

  const selectAnswer = useCallback((questionId: string, optionIndex: number) => {
    if (quizChecked) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, [quizChecked]);

  const checkQuiz = useCallback(() => {
    setQuizChecked(true);
    if (!selectedStory) return;
    const allCorrect = selectedStory.quiz.every(
      (q) => answers[q.id] === q.correctIndex
    );
    if (allCorrect) {
      setCompletedStoryIds((prev) => {
        if (!prev.includes(selectedStory.id)) {
          const next = [...prev, selectedStory.id];
          saveCompleted(next);
          return next;
        }
        return prev;
      });
      setInProgressStoryIds((prev) => prev.filter((id) => id !== selectedStory.id));
    }
  }, [selectedStory, answers]);

  const retryQuiz = useCallback(() => {
    setAnswers({});
    setQuizChecked(false);
  }, []);

  // --- Word click handler ---
  const handleWordClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>, word: string) => {
      if (!selectedStory) return;
      const info = lookupWord(word, selectedStory.vocabulary);
      if (!info) return;
      const rect = e.currentTarget.getBoundingClientRect();
      setWordPopup({
        word,
        translation: info.translation,
        pronunciation: info.pronunciation,
        isVocab: info.isVocab,
        x: rect.left + rect.width / 2,
        y: rect.top,
      });
    },
    [selectedStory]
  );

  /** Render text with clickable words */
  const renderClickableText = useCallback(
    (text: string, vocabulary: StoryVocabulary[]): React.ReactNode => {
      const tokens = tokenizeText(text);
      return tokens.map((token, i) => {
        if (!token.isWord) {
          return <span key={i}>{token.text}</span>;
        }
        const lower = token.text.toLowerCase();
        const hasDict = !!czechDictionary[lower];
        const isVocab = isVocabWord(token.text, vocabulary);
        if (!hasDict && !isVocab) {
          return <span key={i}>{token.text}</span>;
        }
        return (
          <span
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              handleWordClick(e, token.text);
            }}
            className={cn(
              'cursor-pointer rounded-sm px-px transition-colors duration-150',
              'hover:bg-emerald-200/70 dark:hover:bg-emerald-800/50',
              isVocab &&
                'font-semibold text-emerald-700 dark:text-emerald-400 underline decoration-dotted underline-offset-2',
              !isVocab &&
                'underline decoration-slate-300 dark:decoration-slate-600 underline-offset-4 decoration-dotted'
            )}
          >
            {token.text}
          </span>
        );
      });
    },
    [handleWordClick]
  );

  // =========================================================================
  // VIEW 3 – Quiz Mode
  // =========================================================================

  if (selectedStory && quizStarted) {
    return (
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key="quiz-view"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            exit="exit"
            className="space-y-6"
          >
            {/* Quiz header */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={goBackToList}>
                <ChevronLeft className="size-5" />
              </Button>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold truncate">{selectedStory.title.czech}</h2>
                <p className="text-sm text-muted-foreground">Тест на понимание</p>
              </div>
              <Badge className={cn(levelColors[selectedStory.level])}>
                {selectedStory.level}
              </Badge>
            </div>

            {!quizChecked ? (
              <>
                {/* --- Questions --- */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="space-y-5"
                >
                  {selectedStory.quiz.map((q, qi) => (
                    <motion.div key={q.id} variants={item}>
                      <Card>
                        <CardContent className="p-5 space-y-4">
                          {/* Question header */}
                          <div className="flex items-start gap-3">
                            <span className="flex items-center justify-center size-7 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 text-sm font-bold shrink-0">
                              {qi + 1}
                            </span>
                            <p className="font-medium leading-relaxed pt-0.5">
                              {q.question}
                            </p>
                          </div>

                          {/* Options */}
                          <div className="space-y-2 pl-10">
                            {q.options.map((option, oi) => {
                              const isSelected = answers[q.id] === oi;
                              return (
                                <button
                                  key={oi}
                                  onClick={() => selectAnswer(q.id, oi)}
                                  className={cn(
                                    'w-full text-left rounded-lg border px-4 py-3 text-sm transition-all duration-200',
                                    'hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/30',
                                    isSelected
                                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 shadow-sm ring-1 ring-emerald-500/20'
                                      : 'border-border'
                                  )}
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={cn(
                                        'flex items-center justify-center size-5 rounded-full border-2 shrink-0 transition-colors',
                                        isSelected
                                          ? 'border-emerald-500 bg-emerald-500'
                                          : 'border-muted-foreground/30'
                                      )}
                                    >
                                      {isSelected && (
                                        <div className="size-2 rounded-full bg-white" />
                                      )}
                                    </div>
                                    <span
                                      className={cn(
                                        isSelected && 'font-medium text-emerald-800 dark:text-emerald-200'
                                      )}
                                    >
                                      {option}
                                    </span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Check answers button */}
                <div className="flex justify-center pt-2">
                  <Button
                    size="lg"
                    onClick={checkQuiz}
                    disabled={
                      Object.keys(answers).length < selectedStory.quiz.length
                    }
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                  >
                    <Check className="size-4 mr-2" />
                    Проверить ответы
                  </Button>
                </div>

                {/* Progress indicator */}
                <div className="text-center text-sm text-muted-foreground">
                  Отвечено: {Object.keys(answers).length} из{' '}
                  {selectedStory.quiz.length}
                </div>
              </>
            ) : (
              /* --- Results Screen --- */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Score card */}
                <Card className="overflow-hidden">
                  <div
                    className={cn(
                      'p-6 text-center',
                      quizPercentage >= 80
                        ? 'bg-emerald-50 dark:bg-emerald-950/30'
                        : quizPercentage >= 50
                          ? 'bg-amber-50 dark:bg-amber-950/30'
                          : 'bg-red-50 dark:bg-red-950/30'
                    )}
                  >
                    <Trophy
                      className={cn(
                        'size-12 mx-auto mb-3',
                        quizPercentage >= 80
                          ? 'text-emerald-500'
                          : quizPercentage >= 50
                            ? 'text-amber-500'
                            : 'text-red-500'
                      )}
                    />
                    <div className="text-4xl font-bold mb-1">
                      {quizScore.correct}{' '}
                      <span className="text-lg text-muted-foreground font-normal">из</span>{' '}
                      {quizScore.total}
                    </div>
                    <div
                      className={cn(
                        'text-lg font-semibold',
                        quizPercentage >= 80
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : quizPercentage >= 50
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-red-600 dark:text-red-400'
                      )}
                    >
                      {quizPercentage}%
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {quizPercentage === 100
                        ? 'Отлично! Все ответы верны! 🎉'
                        : quizPercentage >= 80
                          ? 'Отличный результат! Почти идеально!'
                          : quizPercentage >= 50
                            ? 'Хороший результат, но можно лучше!'
                            : 'Попробуйте ещё раз и внимательно перечитайте текст.'}
                    </p>
                  </div>
                  <CardContent className="p-4">
                    <Progress
                      value={quizPercentage}
                      className={cn(
                        'h-3',
                        quizPercentage >= 80
                          ? '[&>div]:bg-emerald-500'
                          : quizPercentage >= 50
                            ? '[&>div]:bg-amber-500'
                            : '[&>div]:bg-red-500'
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Question review */}
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <FileText className="size-4 text-muted-foreground" />
                    Обзор ответов
                  </h3>
                  {selectedStory.quiz.map((q, qi) => {
                    const userAnswer = answers[q.id];
                    const isCorrect = userAnswer === q.correctIndex;

                    return (
                      <motion.div
                        key={q.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: qi * 0.08 }}
                      >
                        <Card
                          className={cn(
                            'overflow-hidden',
                            isCorrect
                              ? 'border-emerald-300 dark:border-emerald-700'
                              : 'border-red-300 dark:border-red-700'
                          )}
                        >
                          <div
                            className={cn(
                              'px-4 py-2 flex items-center gap-2 text-sm font-medium',
                              isCorrect
                                ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300'
                                : 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300'
                            )}
                          >
                            {isCorrect ? (
                              <Check className="size-4" />
                            ) : (
                              <X className="size-4" />
                            )}
                            Вопрос {qi + 1}
                          </div>
                          <CardContent className="p-4 space-y-2">
                            <p className="text-sm font-medium">{q.question}</p>
                            <div className="space-y-1.5">
                              {q.options.map((option, oi) => {
                                const isUserChoice = userAnswer === oi;
                                const isCorrectOption = q.correctIndex === oi;
                                return (
                                  <div
                                    key={oi}
                                    className={cn(
                                      'text-sm px-3 py-1.5 rounded-md',
                                      isCorrectOption &&
                                        'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 font-medium',
                                      !isCorrectOption &&
                                        isUserChoice &&
                                        'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200 line-through',
                                      !isCorrectOption && !isUserChoice && 'text-muted-foreground'
                                    )}
                                  >
                                    <span className="mr-2 inline-flex items-center gap-1">
                                      {isCorrectOption && (
                                        <Check className="size-3" />
                                      )}
                                      {!isCorrectOption && isUserChoice && (
                                        <X className="size-3" />
                                      )}
                                    </span>
                                    {option}
                                  </div>
                                );
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={retryQuiz}
                    className="flex-1"
                  >
                    <RotateCcw className="size-4 mr-2" />
                    Пройти снова
                  </Button>
                  <Button
                    size="lg"
                    onClick={goBackToList}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <BookOpen className="size-4 mr-2" />
                    Назад к списку
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2 – Story Reader
  // =========================================================================

  if (selectedStory) {
    const storyStatus = getStoryStatus(
      selectedStory.id,
      completedStoryIds,
      inProgressStoryIds
    );

    return (
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`story-${selectedStory.id}`}
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            exit="exit"
            className="space-y-5"
          >
            {/* Back button + title */}
            <div className="flex items-start gap-3">
              <Button variant="ghost" size="icon" onClick={goBackToList}>
                <ChevronLeft className="size-5" />
              </Button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                    {selectedStory.title.czech}
                  </h2>
                  <Badge className={cn(levelColors[selectedStory.level])}>
                    {selectedStory.level}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  {selectedStory.title.russian}
                </p>
              </div>
            </div>

            {/* Status badge */}
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={cn(statusConfig[storyStatus].className)}
              >
                {statusConfig[storyStatus].icon}
                {statusConfig[storyStatus].label}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {countWords(selectedStory.text)} слов
              </span>
            </div>

            {/* Text / Translation toggle */}
            <div className="flex items-center rounded-lg border bg-muted/50 p-1 w-fit">
              <button
                onClick={() => setTextMode('text')}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2',
                  textMode === 'text'
                    ? 'bg-white dark:bg-gray-800 shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <FileText className="size-4" />
                Текст
              </button>
              <button
                onClick={() => setTextMode('translation')}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2',
                  textMode === 'translation'
                    ? 'bg-white dark:bg-gray-800 shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Languages className="size-4" />
                Перевод
              </button>
            </div>

            {/* Story text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={textMode}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <div
                      className={cn(
                        'leading-relaxed text-base whitespace-pre-line select-none',
                        textMode === 'text'
                          ? 'text-foreground'
                          : 'text-muted-foreground italic'
                      )}
                    >
                      {textMode === 'text'
                        ? renderClickableText(selectedStory.text, selectedStory.vocabulary)
                        : selectedStory.translation}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Word translation popup */}
            <AnimatePresence>
              {wordPopup && textMode === 'text' && (
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40"
                    onClick={() => setWordPopup(null)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="fixed z-50 w-72"
                    style={{
                      left: wordPopup.x,
                      top: wordPopup.y - 8,
                      transform: 'translate(-50%, -100%)',
                    }}
                  >
                    <div className="flex justify-center">
                      <div className="w-3 h-3 rotate-45 bg-white dark:bg-gray-800 border-b border-r border-border -mt-1.5" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-border p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-blue-700 dark:text-blue-400 text-lg">
                          {wordPopup.word}
                        </span>
                        <button
                          onClick={() => setWordPopup(null)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="size-3.5" />
                        </button>
                      </div>
                      {wordPopup.pronunciation && (
                        <div className="flex items-center gap-1.5 text-sm text-amber-600 dark:text-amber-400">
                          <Volume2 className="size-3.5 shrink-0" />
                          <span className="italic">[{wordPopup.pronunciation}]</span>
                        </div>
                      )}
                      <div className="text-sm font-medium text-foreground pt-0.5">
                        {wordPopup.translation}
                      </div>
                      {wordPopup.isVocab && (
                        <Badge className="text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                          Ключевое слово
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Collapsible vocabulary */}
            {selectedStory.vocabulary.length > 0 && (
              <Collapsible open={vocabOpen} onOpenChange={setVocabOpen}>
                <Card>
                  <CollapsibleTrigger className="w-full text-left">
                    <CardHeader className="pb-3 cursor-pointer hover:bg-muted/50 transition-colors rounded-t-lg">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base flex items-center gap-2">
                          <BookOpen className="size-4 text-emerald-600 dark:text-emerald-400" />
                          Ключевые слова
                          <Badge variant="secondary" className="text-xs">
                            {selectedStory.vocabulary.length}
                          </Badge>
                        </CardTitle>
                        <motion.div
                          animate={{ rotate: vocabOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="size-4 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedStory.vocabulary.map((v, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="flex items-center justify-between rounded-lg border px-3 py-2"
                          >
                            <span className="font-medium text-emerald-700 dark:text-emerald-400 text-sm">
                              {v.word}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              — {v.translation}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            )}

            {/* Quiz CTA */}
            {selectedStory.quiz.length > 0 && (
              <div className="flex justify-center pt-2">
                <Button
                  size="lg"
                  onClick={startQuiz}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                >
                  <CircleDot className="size-4 mr-2" />
                  Начать тест
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // =========================================================================
  // VIEW 1 – Story List (default)
  // =========================================================================

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="size-6 text-emerald-600 dark:text-emerald-400" />
          Чтение
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          {completedCount} из {totalStories} историй прочитано
        </p>
      </div>

      {/* Search + Level filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по историям..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <LevelFilter selected={selectedLevel} onSelect={setSelectedLevel} />
      </div>

      {/* Story cards grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        key={selectedLevel + searchQuery}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredStories.map((story) => {
          const status = getStoryStatus(
            story.id,
            completedStoryIds,
            inProgressStoryIds
          );
          const words = countWords(story.text);
          const cfg = statusConfig[status];

          return (
            <motion.div key={story.id} variants={item}>
              <Card
                className={cn(
                  'cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col',
                  status === 'completed' &&
                    'border-emerald-300 dark:border-emerald-700'
                )}
                onClick={() => openStory(story.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-bold leading-tight">
                      {story.title.czech}
                    </CardTitle>
                    <Badge
                      className={cn(
                        'text-xs shrink-0',
                        levelColors[story.level]
                      )}
                    >
                      {story.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {story.title.russian}
                  </p>
                </CardHeader>
                <CardContent className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      variant="outline"
                      className={cn('text-xs', cfg.className)}
                    >
                      {cfg.icon}
                      {cfg.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <FileText className="size-3" />
                      {words} слов
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Empty state */}
      {filteredStories.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent className="p-8 text-center space-y-2">
              <BookOpen className="size-10 mx-auto text-muted-foreground/50" />
              <p className="text-muted-foreground font-medium">
                {searchQuery
                  ? 'Ничего не найдено. Попробуйте другой запрос.'
                  : 'Нет историй для выбранного уровня.'}
              </p>
              {selectedLevel && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedLevel(null)}
                >
                  Показать все уровни
                </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
