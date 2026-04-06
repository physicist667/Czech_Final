'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { prepositionCaseRules, type PrepositionCaseRule } from '@/data/prepositionCases';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, AlertTriangle } from 'lucide-react';

const caseColors: Record<string, string> = {
  'Nominativ': 'border-gray-300 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/30',
  'Genitiv': 'border-red-300 text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/30',
  'Dativ': 'border-blue-300 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30',
  'Akuzativ': 'border-orange-300 text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30',
  'Vokativ': 'border-purple-300 text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30',
  'Lokál': 'border-green-300 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/30',
  'Instrumentál': 'border-teal-300 text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/30',
};

function getCaseColor(caseName: string): string {
  const key = Object.keys(caseColors).find((k) => caseName.startsWith(k));
  return key ? caseColors[key] : 'border-gray-300 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/30';
}

function groupByPrimaryCase(rules: PrepositionCaseRule[]): Record<string, PrepositionCaseRule[]> {
  const groups: Record<string, PrepositionCaseRule[]> = {};
  for (const rule of rules) {
    const primaryCase = rule.cases[0]?.case ?? 'Без падежа';
    if (!groups[primaryCase]) {
      groups[primaryCase] = [];
    }
    groups[primaryCase].push(rule);
  }
  return groups;
}

const caseGroupLabels: Record<string, string> = {
  'Genitiv (2. pád)': 'Родительный падеж (Genitiv)',
  'Akuzativ (4. pád)': 'Винительный падеж (Akuzativ)',
  'Lokál (6. pád)': 'Местный падеж (Lokál)',
  'Instrumentál (7. pád)': 'Творительный падеж (Instrumentál)',
  'Dativ (3. pád)': 'Дательный падеж (Dativ)',
};

export function PrepositionCaseGuide() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return prepositionCaseRules;
    const q = search.toLowerCase();
    return prepositionCaseRules.filter(
      (r) =>
        r.preposition.toLowerCase().includes(q) ||
        r.russianName.toLowerCase().includes(q) ||
        (r.prepositionAlt && r.prepositionAlt.toLowerCase().includes(q)) ||
        r.cases.some(
          (c) =>
            c.case.toLowerCase().includes(q) ||
            c.usage.toLowerCase().includes(q) ||
            c.example.toLowerCase().includes(q) ||
            c.exampleTranslation.toLowerCase().includes(q)
        )
    );
  }, [search]);

  const grouped = useMemo(() => groupByPrimaryCase(filtered), [filtered]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className="overflow-hidden border-emerald-200 dark:border-emerald-800">
        <CardHeader className="pb-3 pt-4 px-4 bg-emerald-50 dark:bg-emerald-950/30">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
              Предлоги и падежи
            </CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Поиск предлога..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 h-8 text-sm"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {filtered.length} из {prepositionCaseRules.length} предлогов
          </p>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {/* Case Legend */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(caseColors).map(([caseName, colorClass]) => (
              <Badge key={caseName} variant="outline" className={`text-[10px] ${colorClass}`}>
                {caseName}
              </Badge>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={search}
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              {Object.entries(grouped).map(([caseGroup, rules]) => (
                <motion.div key={caseGroup} variants={item}>
                  <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Badge variant="outline" className={`text-[10px] ${getCaseColor(caseGroup)}`}>
                      {caseGroup}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {caseGroupLabels[caseGroup] ?? caseGroup}
                    </span>
                  </h3>
                  <Accordion type="multiple" className="space-y-1">
                    {rules.map((rule) => (
                      <AccordionItem
                        key={rule.id}
                        value={rule.id}
                        className="border rounded-lg px-1 bg-muted/20"
                      >
                        <AccordionTrigger className="text-sm hover:no-underline py-3 px-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-emerald-700 dark:text-emerald-400 text-base">
                              {rule.preposition}
                            </span>
                            {rule.prepositionAlt && (
                              <span className="text-muted-foreground text-sm font-medium">
                                / {rule.prepositionAlt}
                              </span>
                            )}
                            <span className="text-muted-foreground text-sm">
                              ({rule.russianName})
                            </span>
                            <div className="flex gap-1 ml-auto mr-2">
                              {rule.cases.map((c, i) => (
                                <Badge
                                  key={i}
                                  variant="outline"
                                  className={`text-[9px] px-1.5 py-0 ${getCaseColor(c.case)}`}
                                >
                                  {c.case.split(' ')[0]}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-2 pb-3">
                          <div className="space-y-3">
                            {rule.cases.map((caseInfo, i) => (
                              <div
                                key={i}
                                className="rounded-lg border p-3 bg-background space-y-2"
                              >
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant="outline"
                                    className={`text-[10px] ${getCaseColor(caseInfo.case)}`}
                                  >
                                    {caseInfo.case}
                                  </Badge>
                                  <span className="text-[10px] text-muted-foreground">
                                    {caseInfo.caseRussian}
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  {caseInfo.usage}
                                </p>
                                <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-md p-2.5 space-y-1">
                                  <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                                    {caseInfo.example}
                                  </p>
                                  <p className="text-[11px] text-muted-foreground">
                                    {caseInfo.exampleTranslation}
                                  </p>
                                </div>
                              </div>
                            ))}

                            {rule.notes && (
                              <div className="flex items-start gap-1.5 px-1 py-2 bg-amber-50/50 dark:bg-amber-950/10 rounded-md">
                                <AlertTriangle className="size-3 text-amber-500 mt-0.5 shrink-0" />
                                <p className="text-[11px] text-amber-700 dark:text-amber-400 leading-relaxed">
                                  {rule.notes}
                                </p>
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 text-muted-foreground text-sm"
                >
                  Ничего не найдено
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
