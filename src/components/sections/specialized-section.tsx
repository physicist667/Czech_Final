'use client';

import { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useCzechStore } from '@/store/czech-store';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowLeft,
  BookOpen,
  MessageCircle,
  Copy,
  Check,
  ChevronDown,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { directions, type SpecializedDirection, type SpecializedWord, type SpecializedPhrase } from '@/data/specialized';

const ITEMS_PER_PAGE = 40;

// ─── Word Card with Flip ────────────────────────────────────────
function WordCard({
  word,
  directionId,
  wordIndex,
  isLearned,
  onToggleLearned,
}: {
  word: SpecializedWord;
  directionId: string;
  wordIndex: number;
  isLearned: boolean;
  onToggleLearned: () => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const wordId = `${directionId}-${wordIndex}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className={cn(
          'cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4',
          isLearned && 'border-l-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20',
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <CardContent className="p-4">
          {!isFlipped ? (
            <div className="space-y-2">
              <div className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                {word.czech}
              </div>
              {word.pronunciation && (
                <div className="text-sm text-amber-600 dark:text-amber-400 italic bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded inline-block">
                  [{word.pronunciation}]
                </div>
              )}
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-muted-foreground">
                  Нажмите, чтобы увидеть перевод
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-lg font-bold">{word.russian}</div>
              <div className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                {word.czech}
              </div>
              {word.example && (
                <div className="text-xs text-muted-foreground border-t pt-2 mt-2">
                  <p className="italic text-emerald-700 dark:text-emerald-400">{word.example}</p>
                  {word.exampleTranslation && <p className="mt-0.5">{word.exampleTranslation}</p>}
                </div>
              )}
            </div>
          )}
        </CardContent>
        <div className="border-t px-4 py-2 flex justify-between items-center bg-muted/30">
          <span className="text-[10px] text-muted-foreground">#{wordIndex + 1}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onToggleLearned();
            }}
            className={cn(
              'text-xs gap-1',
              isLearned ? 'text-emerald-600 hover:text-emerald-700' : 'text-muted-foreground'
            )}
          >
            <Check className="size-3" />
            {isLearned ? 'Изучено' : 'Отметить'}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

// ─── Phrase Card with Expand/Collapse ───────────────────────────
function PhraseCard({ phrase }: { phrase: SpecializedPhrase }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(phrase.czech);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [phrase.czech]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="hover:shadow-md transition-all duration-300">
        <CardContent className="p-4">
          <div
            className="cursor-pointer flex items-start justify-between gap-3"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
                {phrase.czech}
              </div>
              <div className="text-sm">{phrase.russian}</div>
              {phrase.pronunciation && (
                <div className="text-xs text-amber-600 dark:text-amber-400 italic">
                  [{phrase.pronunciation}]
                </div>
              )}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Button
                variant="ghost"
                size="icon"
                className="size-8"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
              >
                {copied ? (
                  <Check className="size-4 text-emerald-600" />
                ) : (
                  <Copy className="size-4" />
                )}
              </Button>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="size-4 text-muted-foreground" />
              </motion.div>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="border-t pt-3 mt-3">
                  {phrase.context && (
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-[10px] shrink-0">
                        Контекст
                      </Badge>
                      <span className="text-sm text-muted-foreground">{phrase.context}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Main Section Component ─────────────────────────────────────
export function SpecializedSection() {
  const [selectedDirection, setSelectedDirection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'new'>('all');
  const [innerTab, setInnerTab] = useState<'dictionary' | 'phrasebook'>('dictionary');
  const [currentPage, setCurrentPage] = useState(1);
  const { specializedLearnedWordIds, toggleSpecializedWordLearned } = useCzechStore();

  const currentDirection = useMemo(
    () => directions.find((d) => d.id === selectedDirection) ?? null,
    [selectedDirection]
  );

  // Filtered vocabulary
  const filteredVocabulary = useMemo(() => {
    if (!currentDirection) return [];
    let words = currentDirection.vocabulary;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      words = words.filter(
        (w) =>
          w.czech.toLowerCase().includes(q) ||
          w.russian.toLowerCase().includes(q) ||
          w.pronunciation.toLowerCase().includes(q)
      );
    }

    if (filter === 'new') {
      words = words.filter(
        (_, idx) => !specializedLearnedWordIds.includes(`${currentDirection.id}-${idx}`)
      );
    }

    return words;
  }, [currentDirection, searchQuery, filter, specializedLearnedWordIds]);

  // Filtered phrases
  const filteredPhrases = useMemo(() => {
    if (!currentDirection) return [];
    let phrases = currentDirection.phrases;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      phrases = phrases.filter(
        (p) =>
          p.czech.toLowerCase().includes(q) ||
          p.russian.toLowerCase().includes(q) ||
          (p.context && p.context.toLowerCase().includes(q))
      );
    }

    return phrases;
  }, [currentDirection, searchQuery]);

  // Pagination for vocabulary
  const totalPages = Math.ceil(filteredVocabulary.length / ITEMS_PER_PAGE);
  const paginatedVocabulary = filteredVocabulary.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Progress
  const learnedCount = currentDirection
    ? currentDirection.vocabulary.filter((_, idx) =>
        specializedLearnedWordIds.includes(`${currentDirection.id}-${idx}`)
      ).length
    : 0;
  const totalWords = currentDirection?.vocabulary.length ?? 0;
  const progressPercent = totalWords > 0 ? Math.round((learnedCount / totalWords) * 100) : 0;

  // Handlers
  const handleSelectDirection = useCallback((id: string) => {
    setSelectedDirection(id);
    setSearchQuery('');
    setFilter('all');
    setInnerTab('dictionary');
    setCurrentPage(1);
  }, []);

  const handleBack = useCallback(() => {
    setSelectedDirection(null);
    setSearchQuery('');
    setFilter('all');
    setCurrentPage(1);
  }, []);

  // Stagger animation
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  // ─── Grid View ────────────────────────────────────────────────
  if (!selectedDirection) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            🧳 Профессиональные направления
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Специализированная лексика для различных профессий
          </p>
        </div>

        {/* Direction Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {directions.map((dir) => {
            const dirLearned = dir.vocabulary.filter((_, idx) =>
              specializedLearnedWordIds.includes(`${dir.id}-${idx}`)
            ).length;
            const dirTotal = dir.vocabulary.length;
            const dirProgress = dirTotal > 0 ? (dirLearned / dirTotal) * 100 : 0;

            return (
              <motion.div key={dir.id} variants={item}>
                <Card
                  className="cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-[1.02] border-l-4"
                  style={{ borderLeftColor: dir.color }}
                  onClick={() => handleSelectDirection(dir.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="text-2xl">{dir.icon}</span>
                        <span className="font-semibold">{dir.title}</span>
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {dirTotal} слов
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{dir.description}</p>
                    <div className="space-y-1.5">
                      <Progress value={dirProgress} className="h-1.5" />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{dirProgress === 100 ? '✅ Все слова изучены' : `${Math.round(dirProgress)}% изучено`}</span>
                        <span>{dirLearned}/{dirTotal}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }

  // ─── Detail View ──────────────────────────────────────────────
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedDirection}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.25 }}
        className="space-y-6"
      >
        {/* Back + Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={handleBack}>
              <ArrowLeft className="size-5" />
            </Button>
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="text-2xl">{currentDirection?.icon}</span>
                <span>{currentDirection?.title}</span>
              </h2>
              <p className="text-sm text-muted-foreground">{currentDirection?.description}</p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="flex items-center gap-2">
                <GraduationCap className="size-4 text-emerald-600 dark:text-emerald-400" />
                Прогресс
              </span>
              <span className="font-medium">
                {learnedCount} / {totalWords} изучено ({progressPercent}%)
              </span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={innerTab} onValueChange={(v) => { setInnerTab(v as 'dictionary' | 'phrasebook'); setCurrentPage(1); }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <TabsList>
              <TabsTrigger value="dictionary" className="gap-1.5">
                <BookOpen className="size-4" />
                Словарь
              </TabsTrigger>
              <TabsTrigger value="phrasebook" className="gap-1.5">
                <MessageCircle className="size-4" />
                Разговорник
              </TabsTrigger>
            </TabsList>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder={innerTab === 'dictionary' ? 'Поиск по словам...' : 'Поиск по фразам...'}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-9"
              />
            </div>
          </div>

          {/* ─── Dictionary Tab ───────────────────────────────── */}
          <TabsContent value="dictionary" className="space-y-4 mt-4">
            {/* Filters */}
            <div className="flex gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => { setFilter('all'); setCurrentPage(1); }}
                className={filter === 'all' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Все
                <Badge variant="secondary" className="ml-1.5 text-[10px]">
                  {currentDirection?.vocabulary.length}
                </Badge>
              </Button>
              <Button
                variant={filter === 'new' ? 'default' : 'outline'}
                size="sm"
                onClick={() => { setFilter('new'); setCurrentPage(1); }}
                className={filter === 'new' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Новые
                <Badge variant="secondary" className="ml-1.5 text-[10px]">
                  {currentDirection ? currentDirection.vocabulary.length - learnedCount : 0}
                </Badge>
              </Button>
            </div>

            {/* Word Grid */}
            {paginatedVocabulary.length > 0 ? (
              <>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  key={`page-${currentPage}-${filter}`}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                >
                  {paginatedVocabulary.map((word) => {
                    // Find the original index in the direction's vocabulary array
                    const origIdx = currentDirection!.vocabulary.indexOf(word);
                    const wordId = `${currentDirection!.id}-${origIdx}`;
                    const isLearned = specializedLearnedWordIds.includes(wordId);

                    return (
                      <motion.div key={wordId} variants={item}>
                        <WordCard
                          word={word}
                          directionId={currentDirection!.id}
                          wordIndex={origIdx}
                          isLearned={isLearned}
                          onToggleLearned={() => toggleSpecializedWordLearned(wordId)}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                    >
                      <ChevronLeft className="size-4 mr-1" />
                      Назад
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      Страница {currentPage} из {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => p + 1)}
                    >
                      Далее
                      <ChevronRight className="size-4 ml-1" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">
                    {searchQuery ? 'Ничего не найдено' : 'Все слова изучены! 🎉'}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* ─── Phrasebook Tab ──────────────────────────────── */}
          <TabsContent value="phrasebook" className="space-y-3 mt-4">
            {filteredPhrases.length > 0 ? (
              <>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  key="phrases"
                  className="space-y-3 max-h-[600px] overflow-y-auto pr-1"
                >
                  {filteredPhrases.map((phrase, idx) => (
                    <motion.div key={idx} variants={item}>
                      <PhraseCard phrase={phrase} />
                    </motion.div>
                  ))}
                </motion.div>
                <p className="text-xs text-muted-foreground text-center pt-2">
                  Всего фраз: {filteredPhrases.length}
                </p>
              </>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">
                    {searchQuery ? 'Ничего не найдено' : 'Нет фраз в этом направлении'}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </motion.div>
    </AnimatePresence>
  );
}
