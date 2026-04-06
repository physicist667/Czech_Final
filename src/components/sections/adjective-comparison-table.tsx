'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { adjectiveComparisons, type AdjectiveComparison } from '@/data/adjectiveComparisons';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, AlertTriangle, Info } from 'lucide-react';

function FormCell({
  czech,
  pronunciation,
  russian,
  isIrregular = false,
}: {
  czech: string;
  pronunciation: string;
  russian: string;
  isIrregular?: boolean;
}) {
  const content = (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-medium text-emerald-700 dark:text-emerald-400">
        {czech}
      </span>
      <span className="text-[10px] text-amber-600 dark:text-amber-400 italic leading-tight">
        [{pronunciation}]
      </span>
      <span className="text-[10px] text-muted-foreground">
        ({russian})
      </span>
    </div>
  );

  return content;
}

export function AdjectiveComparisonTable() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return adjectiveComparisons;
    const q = search.toLowerCase();
    return adjectiveComparisons.filter(
      (a) =>
        a.positive.czech.toLowerCase().includes(q) ||
        a.positive.russian.toLowerCase().includes(q) ||
        a.comparative.czech.toLowerCase().includes(q) ||
        a.comparative.russian.toLowerCase().includes(q) ||
        a.superlative.czech.toLowerCase().includes(q) ||
        a.superlative.russian.toLowerCase().includes(q)
    );
  }, [search]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };

  const row = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-3 pt-4 px-4 bg-emerald-50 dark:bg-emerald-950/30">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
              Сравнение прилагательных
            </CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Поиск прилагательного..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 h-8 text-sm"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Положительная → Сравнительная → Превосходная степени ({filtered.length} из {adjectiveComparisons.length})
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent bg-emerald-50/50 dark:bg-emerald-950/10 sticky top-0 z-10">
                  <TableHead className="text-xs font-semibold text-muted-foreground py-2.5 px-3 min-w-[140px]">
                    Прилагательное
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-muted-foreground py-2.5 px-3 text-center min-w-[140px]">
                    <div>Положительная</div>
                    <div className="text-[10px] font-normal text-muted-foreground/70">
                      Pozitiv
                    </div>
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-muted-foreground py-2.5 px-3 text-center min-w-[140px]">
                    <div>Сравнительная</div>
                    <div className="text-[10px] font-normal text-muted-foreground/70">
                      Komparativ
                    </div>
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-muted-foreground py-2.5 px-3 text-center min-w-[140px]">
                    <div>Превосходная</div>
                    <div className="text-[10px] font-normal text-muted-foreground/70">
                      Superlativ
                    </div>
                  </TableHead>
                  <TableHead className="text-xs font-semibold text-muted-foreground py-2.5 px-3 w-16" />
                </TableRow>
              </TableHeader>
              <TableBody>
                <AnimatePresence mode="popLayout">
                  {filtered.map((adj) => {
                    const isIrregular = !!adj.notes;
                    return (
                      <motion.tr
                        key={adj.id}
                        variants={row}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, x: 10 }}
                        className={`border-t hover:bg-emerald-50/50 dark:hover:bg-emerald-950/10 transition-colors ${
                          isIrregular ? 'bg-amber-50/30 dark:bg-amber-950/10' : ''
                        }`}
                      >
                        <TableCell className="text-xs font-medium py-2 px-3">
                          <div className="flex items-center gap-1.5">
                            <span className="text-foreground font-semibold">
                              {adj.positive.czech}
                            </span>
                            {isIrregular && (
                              <Badge
                                variant="outline"
                                className="text-[9px] border-yellow-400 text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/30 px-1.5 py-0"
                              >
                                неправ.
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-xs py-2 px-3 text-center">
                          <FormCell
                            czech={adj.positive.czech}
                            pronunciation={adj.positive.pronunciation}
                            russian={adj.positive.russian}
                          />
                        </TableCell>
                        <TableCell className="text-xs py-2 px-3 text-center">
                          <FormCell
                            czech={adj.comparative.czech}
                            pronunciation={adj.comparative.pronunciation}
                            russian={adj.comparative.russian}
                          />
                        </TableCell>
                        <TableCell className="text-xs py-2 px-3 text-center">
                          <FormCell
                            czech={adj.superlative.czech}
                            pronunciation={adj.superlative.pronunciation}
                            russian={adj.superlative.russian}
                          />
                        </TableCell>
                        <TableCell className="py-2 px-2">
                          {adj.notes && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="p-1 rounded-md hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors">
                                  <Info className="size-3.5 text-amber-500" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent
                                side="left"
                                className="max-w-[280px] text-xs leading-relaxed"
                              >
                                <div className="flex items-start gap-1.5">
                                  <AlertTriangle className="size-3 text-amber-500 mt-0.5 shrink-0" />
                                  <span>{adj.notes}</span>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </TableCell>
                      </motion.tr>
                    );
                  })}
                </AnimatePresence>
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground text-sm">
                      Ничего не найдено
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Irregular legend */}
          <div className="px-4 py-2 border-t bg-muted/30 flex items-center gap-2">
            <Badge
              variant="outline"
              className="text-[9px] border-yellow-400 text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/30"
            >
              неправ.
            </Badge>
            <span className="text-[10px] text-muted-foreground">
              — неправильная форма (нажмите на иконку {' '}
              <Info className="size-3 inline text-amber-500" /> для подробностей)
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
