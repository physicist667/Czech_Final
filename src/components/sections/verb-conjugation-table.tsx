'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { VerbConjugation } from '@/data/verbConjugations';
import { personLabels, tenseLabels } from '@/data/verbConjugations';
import { AlertTriangle } from 'lucide-react';

interface VerbConjugationTableProps {
  verb: VerbConjugation;
}

export function VerbConjugationTable({ verb }: VerbConjugationTableProps) {
  return (
    <Card className="overflow-hidden border-emerald-200 dark:border-emerald-800">
      <CardHeader className="pb-2 pt-3 px-4 bg-emerald-50 dark:bg-emerald-950/30">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
            <span className="text-base">{verb.czech}</span>
            <span className="text-muted-foreground font-normal ml-2">
              ({verb.russian})
            </span>
          </CardTitle>
          {verb.isPerfective && (
            <Badge variant="outline" className="text-[10px] border-amber-400 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30">
              соверш. вид
            </Badge>
          )}
          {verb.notes && !verb.isPerfective && (
            <Badge variant="outline" className="text-[10px] border-rose-300 text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30">
              неправильный
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent bg-emerald-50/50 dark:bg-emerald-950/10">
              <TableHead className="text-xs font-semibold text-muted-foreground w-28 py-2 px-3">
                Лицо
              </TableHead>
              {tenseLabels.map((tense) => (
                <TableHead
                  key={tense.key}
                  className="text-xs font-semibold text-muted-foreground py-2 px-3 text-center"
                >
                  <div>{tense.russian}</div>
                  <div className="text-[10px] font-normal text-muted-foreground/70">
                    {tense.czech}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {personLabels.map((person, idx) => (
              <TableRow key={person.russian} className="hover:bg-emerald-50/50 dark:hover:bg-emerald-950/10">
                <TableCell className="text-xs font-medium py-1.5 px-3">
                  <span className="text-foreground">{person.russian}</span>
                  <span className="text-muted-foreground ml-1 text-[10px]">
                    ({person.czech})
                  </span>
                </TableCell>
                {tenseLabels.map((tense) => {
                  const value = verb.conjugations[tense.key][idx];
                  const pron = verb.pronunciations[tense.key][idx];
                  const isNa = verb.isPerfective && tense.key === 'present';
                  return (
                    <TableCell
                      key={tense.key}
                      className={`text-xs py-1.5 px-3 text-center ${
                        isNa
                          ? 'text-muted-foreground/50 italic'
                          : 'text-foreground'
                      }`}
                    >
                      {isNa ? (
                        <span className="text-muted-foreground/40">—</span>
                      ) : (
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="font-medium text-emerald-700 dark:text-emerald-400">
                            {value}
                          </span>
                          {pron && (
                            <span className="text-[10px] text-amber-600 dark:text-amber-400 italic leading-tight">
                              [{pron}]
                            </span>
                          )}
                        </div>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Notes */}
        {verb.notes && (
          <div className="px-4 py-2 border-t bg-amber-50/50 dark:bg-amber-950/10">
            <div className="flex items-start gap-1.5">
              <AlertTriangle className="size-3 text-amber-500 mt-0.5 shrink-0" />
              <p className="text-[11px] text-amber-700 dark:text-amber-400 leading-relaxed">
                {verb.notes}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
