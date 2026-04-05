'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { czechAlphabet, type AlphabetLetter } from '@/data/alphabet';
import { useCzechStore } from '@/store/czech-store';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid3x3, List, Search, Volume2, Check, Eye } from 'lucide-react';
import { russianComparison } from '@/data/alphabet';

export function AlphabetSection() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<AlphabetLetter | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [filter, setFilter] = useState<'all' | 'special' | 'vowel' | 'consonant'>('all');
  const { masteredLetterIds, toggleLetterMastered } = useCzechStore();

  const filteredLetters = czechAlphabet.filter((letter) => {
    const matchesSearch =
      letter.upper.toLowerCase().includes(searchQuery.toLowerCase()) ||
      letter.lower.toLowerCase().includes(searchQuery.toLowerCase()) ||
      letter.exampleCzech.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === 'all' ||
      (filter === 'special' && letter.isSpecial) ||
      (filter === 'vowel' && letter.group === 'vowel') ||
      (filter === 'consonant' && letter.group === 'consonant');
    return matchesSearch && matchesFilter;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Чешский алфавит</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Изучите 42 буквы чешского алфавита
          </p>
        </div>
        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
          {masteredLetterIds.length} / 42 изучено
        </Badge>
      </div>

      {/* Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Поиск по букве или слову..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                <Grid3x3 className="size-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                <List className="size-4" />
              </Button>
              <Button
                variant={showComparison ? 'default' : 'outline'}
                size="sm"
                onClick={() => setShowComparison(!showComparison)}
                className={showComparison ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                <Eye className="size-4 mr-1" />
                Сравнение
              </Button>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {[
              { id: 'all' as const, label: 'Все' },
              { id: 'special' as const, label: 'Особые' },
              { id: 'vowel' as const, label: 'Гласные' },
              { id: 'consonant' as const, label: 'Согласные' },
            ].map((f) => (
              <Button
                key={f.id}
                variant={filter === f.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(f.id)}
                className={filter === f.id ? 'bg-emerald-600 hover:bg-emerald-700' : 'text-xs'}
              >
                {f.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Russian Comparison Table */}
      <AnimatePresence>
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Сравнение с русским алфавитом</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-h-80 overflow-y-auto rounded-md border">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 bg-muted">
                      <tr>
                        <th className="text-left p-3 font-medium">Чешский</th>
                        <th className="text-left p-3 font-medium">Русский</th>
                        <th className="text-left p-3 font-medium">Примечание</th>
                      </tr>
                    </thead>
                    <tbody>
                      {russianComparison.map((row, i) => (
                        <tr key={i} className="border-t">
                          <td className="p-3 font-mono font-bold text-emerald-700">{row.czech}</td>
                          <td className="p-3 font-mono">{row.russian}</td>
                          <td className="p-3 text-muted-foreground text-xs">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Letters Grid */}
      {viewMode === 'grid' ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          {filteredLetters.map((letter) => (
            <motion.div key={letter.id} variants={item}>
              <Card
                className={cn(
                  'cursor-pointer hover:shadow-md transition-all hover:scale-[1.03] p-3 relative',
                  letter.isSpecial && 'border-amber-300 dark:border-amber-700',
                  masteredLetterIds.includes(letter.id) && 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30'
                )}
                onClick={() => setSelectedLetter(letter)}
              >
                {masteredLetterIds.includes(letter.id) && (
                  <div className="absolute top-2 right-2">
                    <Check className="size-4 text-emerald-600" />
                  </div>
                )}
                <div className="text-center space-y-1">
                  <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
                    {letter.upper}
                  </div>
                  <div className="text-lg text-muted-foreground">{letter.lower}</div>
                  <div className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{letter.ipa}</div>
                  {letter.isSpecial && (
                    <Badge variant="outline" className="text-[10px] px-1 py-0 border-amber-400 text-amber-600">
                      особая
                    </Badge>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="space-y-2">
          {filteredLetters.map((letter) => (
            <Card
              key={letter.id}
              className={cn(
                'cursor-pointer hover:shadow-md transition-all',
                masteredLetterIds.includes(letter.id) && 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30'
              )}
              onClick={() => setSelectedLetter(letter)}
            >
              <CardContent className="p-4 flex items-center gap-4">
                <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 min-w-[3rem] text-center">
                  {letter.upper}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{letter.ipa}</span>
                    {letter.isSpecial && (
                      <Badge variant="outline" className="text-[10px] border-amber-400 text-amber-600">
                        особая
                      </Badge>
                    )}
                    {masteredLetterIds.includes(letter.id) && (
                      <Badge className="text-[10px] bg-emerald-100 text-emerald-700">изучено</Badge>
                    )}
                  </div>
                  <p className="text-sm mt-1">
                    <span className="font-medium">{letter.exampleCzech}</span>
                    <span className="text-muted-foreground mx-2">—</span>
                    <span>{letter.exampleRussian}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 truncate">{letter.note}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Letter Detail Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="max-w-md w-full p-6">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-emerald-700 dark:text-emerald-400">
                    {selectedLetter.upper}
                    <span className="text-4xl text-muted-foreground ml-3">{selectedLetter.lower}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Volume2 className="size-4 text-muted-foreground" />
                    <span className="font-mono text-lg bg-muted px-3 py-1 rounded-full">
                      {selectedLetter.ipa}
                    </span>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 text-left space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Пример слова</p>
                      <p className="font-medium text-lg">{selectedLetter.exampleCzech}</p>
                      <p className="text-muted-foreground">{selectedLetter.exampleRussian}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Примечание</p>
                      <p className="text-sm">{selectedLetter.note}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Тип:</span>
                      <Badge variant="outline">
                        {selectedLetter.group === 'vowel' ? 'Гласная' : 'Согласная'}
                      </Badge>
                      {selectedLetter.isSpecial && (
                        <Badge variant="outline" className="border-amber-400 text-amber-600">
                          Специфическая для чешского
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => toggleLetterMastered(selectedLetter.id)}
                      className={cn(
                        'flex-1',
                        masteredLetterIds.includes(selectedLetter.id)
                          ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                          : 'bg-emerald-600 hover:bg-emerald-700'
                      )}
                    >
                      <Check className="size-4 mr-1" />
                      {masteredLetterIds.includes(selectedLetter.id) ? 'Изучено ✓' : 'Отметить как изученное'}
                    </Button>
                    <Button variant="outline" onClick={() => setSelectedLetter(null)}>
                      Закрыть
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
