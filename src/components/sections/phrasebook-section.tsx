'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { phrasebookData, type Phrase, type PhraseCategory } from '@/data/phrasebook';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  BookOpen,
  MessageCircle,
  Volume2,
  Copy,
  Check,
  Filter,
} from 'lucide-react';

function PhraseFlashCard({
  phrase,
  isLearned,
  onLearned,
}: {
  phrase: Phrase;
  isLearned: boolean;
  onLearned: () => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="perspective-1000"
    >
      <Card
        className={cn(
          'cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden',
          isFlipped ? 'border-blue-300' : '',
          isLearned && 'border-emerald-400'
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <CardContent className="p-5">
          {!isFlipped ? (
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                {phrase.czech}
              </div>
              {phrase.pronunciation && (
                <div className="text-base text-amber-600 dark:text-amber-400 italic">
                  [{phrase.pronunciation}]
                </div>
              )}
              <Badge variant="outline" className="text-xs">
                {phrase.level}
              </Badge>
              <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mt-2">
                <EyeOff className="size-4" />
                Нажмите, чтобы увидеть перевод
              </div>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <div className="text-xl font-bold">{phrase.russian}</div>
              <div className="text-sm text-muted-foreground border-t pt-3 space-y-1">
                <p className="italic text-blue-700 dark:text-blue-400">
                  {phrase.example}
                </p>
                <p>{phrase.exampleTranslation}</p>
              </div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground text-xs">
                <Eye className="size-3" />
                Нажмите, чтобы скрыть
              </div>
            </div>
          )}
        </CardContent>
        <div className="border-t px-5 py-3 flex justify-between items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onLearned();
            }}
            className={cn(
              'text-xs',
              isLearned ? 'text-emerald-600' : 'text-muted-foreground'
            )}
          >
            <Check className="size-3 mr-1" />
            {isLearned ? 'Изучено' : 'Отметить'}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

const levelColors: Record<string, string> = {
  A1: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  A2: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  B1: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  B2: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
};

export function PhrasebookSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [learnedPhraseIds, setLearnedPhraseIds] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const togglePhraseLearned = (phraseId: string) => {
    setLearnedPhraseIds((prev) =>
      prev.includes(phraseId)
        ? prev.filter((id) => id !== phraseId)
        : [...prev, phraseId]
    );
  };

  const filteredCategories = useMemo(() => {
    let categories = phrasebookData;

    if (selectedLevel) {
      categories = categories.filter((cat) => cat.level === selectedLevel);
    }

    if (!searchQuery) return categories;

    return categories
      .map((cat) => ({
        ...cat,
        phrases: cat.phrases.filter(
          (p) =>
            p.czech.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.russian.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((cat) => cat.phrases.length > 0);
  }, [searchQuery, selectedLevel]);

  const currentCategory = selectedCategory
    ? phrasebookData.find((c) => c.id === selectedCategory)
    : null;

  const currentPhrases = currentCategory ? currentCategory.phrases : [];

  const learnedInCategory = currentCategory
    ? currentCategory.phrases.filter((p) => learnedPhraseIds.includes(p.id)).length
    : 0;

  const totalInCategory = currentCategory?.phrases.length || 0;

  const totalPhrases = phrasebookData.reduce((s, c) => s + c.phrases.length, 0);
  const totalLearned = learnedPhraseIds.length;

  const handleReset = () => {
    setSelectedCategory(null);
    setCurrentIndex(0);
    setFlashcardMode(false);
  };

  const copyToClipboard = (text: string, phraseId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(phraseId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-6">
      {!selectedCategory ? (
        <>
          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MessageCircle className="size-6 text-blue-600 dark:text-blue-400" />
              Разговорник
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              {totalLearned} из {totalPhrases} фраз изучено — {phrasebookData.length} категорий
            </p>
          </div>

          {/* Search + Level filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Поиск по фразам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              {['A1', 'A2', 'B1', 'B2'].map((lvl) => (
                <Button
                  key={lvl}
                  variant={selectedLevel === lvl ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedLevel(selectedLevel === lvl ? null : lvl)}
                  className={cn(
                    selectedLevel === lvl && levelColors[lvl],
                    'font-semibold min-w-[3rem]'
                  )}
                >
                  {lvl}
                </Button>
              ))}
            </div>
          </div>

          {/* Category Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredCategories.map((cat) => {
              const learned = cat.phrases.filter((p) =>
                learnedPhraseIds.includes(p.id)
              ).length;
              const total = cat.phrases.length;
              const progress = total > 0 ? (learned / total) * 100 : 0;

              return (
                <motion.div key={cat.id} variants={item}>
                  <Card
                    className="cursor-pointer hover:shadow-md transition-all hover:scale-[1.02]"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setCurrentIndex(0);
                    }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <span className="text-xl">{cat.icon}</span>
                          {cat.name}
                        </CardTitle>
                        <Badge
                          className={cn(
                            'text-xs',
                            levelColors[cat.level]
                          )}
                        >
                          {cat.level}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>
                          {learned}/{total} фраз
                        </span>
                        <span>{progress === 100 ? '✅' : `${Math.round(progress)}%`}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredCategories.length === 0 && (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">
                  {searchQuery
                    ? 'Ничего не найдено. Попробуйте другой запрос.'
                    : 'Нет категорий для выбранного уровня.'}
                </p>
              </CardContent>
            </Card>
          )}
        </>
      ) : (
        <>
          {/* Category View */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={handleReset}>
                <ChevronLeft className="size-5" />
              </Button>
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="text-2xl">{currentCategory?.icon}</span>
                  {currentCategory?.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {learnedInCategory} из {totalInCategory} фраз изучено
                </p>
              </div>
              <Badge className={cn(levelColors[currentCategory?.level || 'A1'])}>
                {currentCategory?.level}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button
                variant={flashcardMode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFlashcardMode(!flashcardMode)}
                className={flashcardMode ? 'bg-blue-600 hover:bg-blue-700' : ''}
              >
                <BookOpen className="size-4 mr-1" />
                Карточки
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Прогресс</span>
                <span className="font-medium">
                  {totalInCategory > 0
                    ? Math.round((learnedInCategory / totalInCategory) * 100)
                    : 0}
                  %
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      totalInCategory > 0
                        ? (learnedInCategory / totalInCategory) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Flashcard Mode */}
          {flashcardMode ? (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="max-w-md w-full">
                  {currentPhrases.length > 0 ? (
                    <AnimatePresence mode="wait">
                      <PhraseFlashCard
                        key={currentPhrases[currentIndex]?.id}
                        phrase={currentPhrases[currentIndex]}
                        isLearned={learnedPhraseIds.includes(
                          currentPhrases[currentIndex].id
                        )}
                        onLearned={() =>
                          togglePhraseLearned(currentPhrases[currentIndex].id)
                        }
                      />
                    </AnimatePresence>
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <p className="text-muted-foreground">Нет фраз в этой категории.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="size-4 mr-1" />
                  Назад
                </Button>
                <span className="flex items-center text-sm text-muted-foreground">
                  {currentIndex + 1} / {currentPhrases.length}
                </span>
                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentIndex(
                      Math.min(currentPhrases.length - 1, currentIndex + 1)
                    )
                  }
                  disabled={currentIndex >= currentPhrases.length - 1}
                >
                  Далее
                  <ChevronRight className="size-4 ml-1" />
                </Button>
              </div>
            </div>
          ) : (
            /* Phrase List */
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {currentPhrases.map((phrase) => {
                const isLearned = learnedPhraseIds.includes(phrase.id);
                return (
                  <motion.div
                    key={phrase.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card
                      className={cn(
                        'transition-all',
                        isLearned &&
                          'border-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/20'
                      )}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            {/* Czech phrase */}
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-blue-700 dark:text-blue-400 text-base">
                                {phrase.czech}
                              </span>
                              <button
                                onClick={() =>
                                  copyToClipboard(phrase.czech, phrase.id)
                                }
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                title="Копировать фразу"
                              >
                                {copiedId === phrase.id ? (
                                  <Check className="size-3.5 text-emerald-500" />
                                ) : (
                                  <Copy className="size-3.5" />
                                )}
                              </button>
                            </div>

                            {/* Pronunciation */}
                            {phrase.pronunciation && (
                              <div className="text-sm text-amber-600 dark:text-amber-400 italic mt-0.5">
                                [{phrase.pronunciation}]
                              </div>
                            )}

                            {/* Russian translation */}
                            <div className="flex items-center gap-2 mt-1.5">
                              <span className="text-muted-foreground">—</span>
                              <span className="font-medium">{phrase.russian}</span>
                              {isLearned && (
                                <Badge className="text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                                  <Check className="size-3 mr-0.5" />
                                  изучено
                                </Badge>
                              )}
                            </div>

                            {/* Example */}
                            <div className="mt-2 pl-3 border-l-2 border-muted">
                              <p className="text-sm italic text-blue-600 dark:text-blue-400">
                                {phrase.example}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {phrase.exampleTranslation}
                              </p>
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => togglePhraseLearned(phrase.id)}
                            className={cn(
                              'shrink-0',
                              isLearned ? 'text-emerald-600' : ''
                            )}
                            title={isLearned ? 'Снять отметку' : 'Отметить как изученное'}
                          >
                            <Check className="size-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
