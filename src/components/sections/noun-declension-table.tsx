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
import type { NounDeclension } from '@/data/nounDeclensions';
import { caseLabels } from '@/data/nounDeclensions';
import { AlertTriangle } from 'lucide-react';

interface NounDeclensionTableProps {
  declension: NounDeclension;
}

function getGenderBadge(gender: NounDeclension['gender']): { label: string; className: string } {
  switch (gender) {
    case 'masculine':
      return { label: 'м.р.', className: 'border-blue-300 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30' };
    case 'feminine':
      return { label: 'ж.р.', className: 'border-pink-300 text-pink-700 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/30' };
    case 'neuter':
      return { label: 'ср.р.', className: 'border-purple-300 text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30' };
    case 'adjective':
      return { label: 'прил.', className: 'border-amber-300 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30' };
  }
}

export function NounDeclensionTable({ declension }: NounDeclensionTableProps) {
  const genderBadge = getGenderBadge(declension.gender);
  const isAdjective = declension.gender === 'adjective';
  const isPluralOnly = declension.isPluralOnly;
  const showSingular = !isPluralOnly && !isAdjective;
  const showPlural = !isAdjective;

  return (
    <Card className="overflow-hidden border-emerald-200 dark:border-emerald-800">
      <CardHeader className="pb-2 pt-3 px-4 bg-emerald-50 dark:bg-emerald-950/30">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
            <span className="text-base">{declension.czech}</span>
            <span className="text-muted-foreground font-normal ml-2">
              ({declension.russian})
            </span>
          </CardTitle>
          <div className="flex items-center gap-1.5">
            {declension.isAnimate && (
              <Badge variant="outline" className="text-[10px] border-teal-300 text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/30">
                одуш.
              </Badge>
            )}
            <Badge variant="outline" className={`text-[10px] ${genderBadge.className}`}>
              {genderBadge.label}
            </Badge>
            {isPluralOnly && (
              <Badge variant="outline" className="text-[10px] border-orange-300 text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30">
                т. мн.ч.
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent bg-emerald-50/50 dark:bg-emerald-950/10">
                <TableHead className="text-xs font-semibold text-muted-foreground w-36 py-2 px-3">
                  Падеж
                </TableHead>
                {(showSingular || isAdjective) && (
                  <TableHead className="text-xs font-semibold text-muted-foreground py-2 px-3 text-center">
                    <div>{isAdjective ? 'Мужской род (ед.ч.)' : 'Единственное'}</div>
                    <div className="text-[10px] font-normal text-muted-foreground/70">
                      {isAdjective ? 'Jednotné číslo (mužský rod)' : 'Jednotné číslo'}
                    </div>
                  </TableHead>
                )}
                {showPlural && (
                  <TableHead className="text-xs font-semibold text-muted-foreground py-2 px-3 text-center">
                    <div>Множественное</div>
                    <div className="text-[10px] font-normal text-muted-foreground/70">
                      Množné číslo
                    </div>
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {caseLabels.map((caseLabel, idx) => {
                const sgValue = declension.singular[idx];
                const plValue = declension.plural[idx];
                const sgPron = declension.singularPron[idx];
                const plPron = declension.pluralPron[idx];

                return (
                  <TableRow key={caseLabel.key} className="hover:bg-emerald-50/50 dark:hover:bg-emerald-950/10">
                    <TableCell className="text-xs font-medium py-1.5 px-3">
                      <div className="text-foreground">{caseLabel.russian}</div>
                      <div className="text-[10px] text-muted-foreground">
                        {caseLabel.czech} — {caseLabel.question}
                      </div>
                    </TableCell>
                    {(showSingular || isAdjective) && (
                      <TableCell className="text-xs py-1.5 px-3 text-center">
                        {sgValue ? (
                          <div className="flex flex-col items-center gap-0.5">
                            <span className="font-medium text-emerald-700 dark:text-emerald-400">
                              {sgValue}
                            </span>
                            {sgPron && (
                              <span className="text-[10px] text-amber-600 dark:text-amber-400 italic leading-tight">
                                [{sgPron}]
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-muted-foreground/40">—</span>
                        )}
                      </TableCell>
                    )}
                    {showPlural && (
                      <TableCell className="text-xs py-1.5 px-3 text-center">
                        {plValue ? (
                          <div className="flex flex-col items-center gap-0.5">
                            <span className="font-medium text-emerald-700 dark:text-emerald-400">
                              {plValue}
                            </span>
                            {plPron && (
                              <span className="text-[10px] text-amber-600 dark:text-amber-400 italic leading-tight">
                                [{plPron}]
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-muted-foreground/40">—</span>
                        )}
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {/* Notes */}
        {declension.notes && (
          <div className="px-4 py-2 border-t bg-amber-50/50 dark:bg-amber-950/10">
            <div className="flex items-start gap-1.5">
              <AlertTriangle className="size-3 text-amber-500 mt-0.5 shrink-0" />
              <p className="text-[11px] text-amber-700 dark:text-amber-400 leading-relaxed">
                {declension.notes}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
