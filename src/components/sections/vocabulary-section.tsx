'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { vocabularyData, type VocabCategory, type VocabWord } from '@/data/vocabulary';
import { useCzechStore } from '@/store/czech-store';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { verbConjugations } from '@/data/verbConjugations';
import { VerbConjugationTable } from '@/components/sections/verb-conjugation-table';
import { getDeclensionsForCategory, categoryIdsWithDeclensions } from '@/data/nounDeclensions';
import { NounDeclensionTable } from '@/components/sections/noun-declension-table';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Eye,
  EyeOff,
  BookOpen,
  Check,
  Filter,
  Table,
  ChevronDown,
  GraduationCap,
  Layers,
} from 'lucide-react';

function FlashCard({ word, onLearned, isLearned }: { word: VocabWord; onLearned: () => void; isLearned: boolean }) {
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
          isFlipped ? 'border-emerald-300' : '',
          isLearned && 'border-emerald-400'
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <CardContent className="p-5">
          {!isFlipped ? (
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                {word.czech}
              </div>
              {word.pronunciation && (
                <div className="text-base text-amber-600 dark:text-amber-400 italic">
                  [{word.pronunciation}]
                </div>
              )}
              <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
                <EyeOff className="size-4" />
                Нажмите, чтобы увидеть перевод
              </div>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <div className="text-xl font-bold">{word.russian}</div>
              <div className="text-sm text-muted-foreground border-t pt-3">
                <p className="italic text-emerald-700 dark:text-emerald-400 mb-1">{word.example}</p>
                <p>{word.exampleTranslation}</p>
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

export function VocabularySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [showLearned, setShowLearned] = useState(true);
  const [showConjugations, setShowConjugations] = useState(false);
  const [showDeclensions, setShowDeclensions] = useState(false);

  const hasDeclensions = selectedCategory ? categoryIdsWithDeclensions.has(selectedCategory) : false;
  const currentDeclensions = selectedCategory ? getDeclensionsForCategory(selectedCategory) : [];
  const { learnedWordIds, toggleWordLearned } = useCzechStore();

  // Get unique groups
  const groups = useMemo(() => {
    const groupSet = new Set(vocabularyData.map((c) => c.group));
    return Array.from(groupSet);
  }, []);

  const filteredCategories = useMemo(() => {
    let cats = vocabularyData;
    if (selectedGroup) {
      cats = cats.filter((c) => c.group === selectedGroup);
    }
    if (searchQuery) {
      cats = cats
        .map((cat) => ({
          ...cat,
          words: cat.words.filter(
            (w) =>
              w.czech.toLowerCase().includes(searchQuery.toLowerCase()) ||
              w.russian.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((cat) => cat.words.length > 0);
    }
    return cats;
  }, [searchQuery, selectedGroup]);

  const currentCategory = selectedCategory
    ? vocabularyData.find((c) => c.id === selectedCategory)
    : null;

  const currentWords = currentCategory
    ? showLearned
      ? currentCategory.words
      : currentCategory.words.filter((w) => !learnedWordIds.includes(w.id))
    : [];

  const learnedInCategory = currentCategory
    ? currentCategory.words.filter((w) => learnedWordIds.includes(w.id)).length
    : 0;

  const totalInCategory = currentCategory?.words.length || 0;

  const handleReset = () => {
    setSelectedCategory(null);
    setCurrentIndex(0);
    setFlashcardMode(false);
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
            <h2 className="text-2xl font-bold">Словарь</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Выучено {learnedWordIds.length} из{' '}
              {vocabularyData.reduce((s, c) => s + c.words.length, 0)} слов
            </p>
          </div>

          {/* Group Tabs */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Layers className="size-4" />
              <span>Группы:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedGroup === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedGroup(null)}
                className={cn(
                  'gap-1.5',
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
                      'gap-1.5',
                      selectedGroup === g && 'bg-emerald-600 hover:bg-emerald-700'
                    )}
                  >
                    <span>{GROUP_ICONS[g] || '📋'}</span>
                    <span>{g}</span>
                    <Badge variant="secondary" className="ml-1 text-[10px]">
                      {count}
                    </Badge>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по словам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Category Grid */}
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map((cat) => {
              const learned = cat.words.filter((w) => learnedWordIds.includes(w.id)).length;
              const total = cat.words.length;
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
                          <div>
                            <span className="text-base font-semibold">{cat.name}</span>
                            <div className="text-xs text-muted-foreground">{cat.group}</div>
                          </div>
                        </CardTitle>
                        <div className="flex items-center gap-1.5">
                          {cat.level && (
                            <Badge className={cn(
                              'text-[10px] px-1.5 py-0 font-semibold',
                              cat.level === 'A1' && 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
                              cat.level === 'A2' && 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
                              cat.level === 'B1' && 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
                              cat.level === 'B2' && 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
                            )}>
                              {cat.level}
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {learned}/{total}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Progress value={progress} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {progress === 100 ? '✅ Все слова изучены' : `${Math.round(progress)}% изучено`}
                        </span>
                        <BookOpen className="size-4 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
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
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{currentCategory?.name}</span>
                      {currentCategory?.level && (
                        <Badge className={cn(
                          'text-[10px] px-1.5 py-0 font-semibold',
                          currentCategory.level === 'A1' && 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300',
                          currentCategory.level === 'A2' && 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
                          currentCategory.level === 'B1' && 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
                          currentCategory.level === 'B2' && 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
                        )}>
                          {currentCategory.level}
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{currentCategory?.group}</span>
                  </div>
                </h2>
                <p className="text-sm text-muted-foreground">
                  {learnedInCategory} из {totalInCategory} слов изучено
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={showLearned ? 'default' : 'outline'}
                size="sm"
                onClick={() => setShowLearned(!showLearned)}
                className={showLearned ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                <Filter className="size-4 mr-1" />
                Все
              </Button>
              <Button
                variant={!showLearned ? 'default' : 'outline'}
                size="sm"
                onClick={() => setShowLearned(!showLearned)}
                className={!showLearned ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Новые
              </Button>
              <Button
                variant={flashcardMode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFlashcardMode(!flashcardMode)}
                className={flashcardMode ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
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
                <span>Прогресс категории</span>
                <span className="font-medium">
                  {totalInCategory > 0 ? Math.round((learnedInCategory / totalInCategory) * 100) : 0}%
                </span>
              </div>
              <Progress value={totalInCategory > 0 ? (learnedInCategory / totalInCategory) * 100 : 0} className="h-2" />
            </CardContent>
          </Card>

          {/* Noun Declension Tables — for noun categories */}
          {hasDeclensions && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-between border-emerald-200 dark:border-emerald-800',
                  showDeclensions && 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700'
                )}
                onClick={() => setShowDeclensions(!showDeclensions)}
              >
                <span className="flex items-center gap-2">
                  <GraduationCap className="size-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-medium">Таблицы склонений</span>
                  <Badge variant="secondary" className="text-[10px]">
                    {currentDeclensions.length} слов
                  </Badge>
                </span>
                <motion.div
                  animate={{ rotate: showDeclensions ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="size-4" />
                </motion.div>
              </Button>

              <AnimatePresence>
                {showDeclensions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 max-h-[800px] overflow-y-auto pr-1 space-y-4 custom-scrollbar">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {currentDeclensions.map((decl, idx) => (
                          <motion.div
                            key={decl.wordId}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.04, duration: 0.3 }}
                          >
                            <NounDeclensionTable declension={decl} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Conjugation Tables Toggle — only for verbs category */}
          {selectedCategory === 'verbs' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-between border-emerald-200 dark:border-emerald-800',
                  showConjugations && 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700'
                )}
                onClick={() => setShowConjugations(!showConjugations)}
              >
                <span className="flex items-center gap-2">
                  <Table className="size-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-medium">Таблицы спряжений</span>
                  <Badge variant="secondary" className="text-[10px]">
                    15 глаголов
                  </Badge>
                </span>
                <motion.div
                  animate={{ rotate: showConjugations ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="size-4" />
                </motion.div>
              </Button>

              <AnimatePresence>
                {showConjugations && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 max-h-[800px] overflow-y-auto pr-1 space-y-4 custom-scrollbar">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {verbConjugations.map((verb, idx) => (
                          <motion.div
                            key={verb.verbId}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.04, duration: 0.3 }}
                          >
                            <VerbConjugationTable verb={verb} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Flashcard Mode */}
          {flashcardMode ? (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="max-w-md w-full">
                  {currentWords.length > 0 ? (
                    <AnimatePresence mode="wait">
                      <FlashCard
                        key={currentWords[currentIndex]?.id}
                        word={currentWords[currentIndex]}
                        onLearned={() => toggleWordLearned(currentWords[currentIndex].id)}
                        isLearned={learnedWordIds.includes(currentWords[currentIndex].id)}
                      />
                    </AnimatePresence>
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <p className="text-muted-foreground">
                          Все слова изучены! 🎉
                        </p>
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
                  {currentIndex + 1} / {currentWords.length}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setCurrentIndex(Math.min(currentWords.length - 1, currentIndex + 1))}
                  disabled={currentIndex >= currentWords.length - 1}
                >
                  Далее
                  <ChevronRight className="size-4 ml-1" />
                </Button>
              </div>
            </div>
          ) : (
            /* Word List */
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {currentWords.map((word) => (
                <motion.div
                  key={word.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    className={cn(
                      'transition-all',
                      learnedWordIds.includes(word.id) && 'border-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/20'
                    )}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-emerald-700 dark:text-emerald-400">
                              {word.czech}
                            </span>
                            {word.pronunciation && (
                              <span className="text-sm text-amber-600 dark:text-amber-400 italic bg-amber-50 dark:bg-amber-950/30 px-1.5 py-0.5 rounded">
                                {word.pronunciation}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-muted-foreground">—</span>
                            <span>{word.russian}</span>
                            {learnedWordIds.includes(word.id) && (
                              <Badge className="text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                                <Check className="size-3 mr-0.5" />
                                изучено
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 italic">
                            {word.example}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {word.exampleTranslation}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleWordLearned(word.id)}
                          className={cn(
                            'shrink-0',
                            learnedWordIds.includes(word.id) ? 'text-emerald-600' : ''
                          )}
                        >
                          <Check className="size-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
