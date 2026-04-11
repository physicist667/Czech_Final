'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { grammarLessonsSorted as grammarLessons, type GrammarLesson } from '@/data/grammar';
import { useCzechStore } from '@/store/czech-store';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { AdjectiveComparisonTable } from '@/components/sections/adjective-comparison-table';
import { PrepositionCaseGuide } from '@/components/sections/preposition-case-guide';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Check,
  GraduationCap,
  List,
  ArrowRight,
} from 'lucide-react';

export function GrammarSection() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [currentTableIdx, setCurrentTableIdx] = useState(0);
  const { completedLessonIds, toggleLessonCompleted } = useCzechStore();

  const lesson = selectedLesson
    ? grammarLessons.find((l) => l.id === selectedLesson)
    : null;

  const handleBack = () => {
    setSelectedLesson(null);
    setCurrentTableIdx(0);
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-6">
      {!selectedLesson ? (
        <>
          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold">Грамматика</h2>
            <p className="text-muted-foreground text-sm mt-1">
              {completedLessonIds.length} из {grammarLessons.length} уроков завершено
            </p>
          </div>

          {/* Progress */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Прогресс по грамматике</span>
                <span className="font-medium">
                  {grammarLessons.length > 0
                    ? Math.round((completedLessonIds.length / grammarLessons.length) * 100)
                    : 0}
                  %
                </span>
              </div>
              <Progress
                value={
                  grammarLessons.length > 0
                    ? (completedLessonIds.length / grammarLessons.length) * 100
                    : 0
                }
                className="h-2"
              />
            </CardContent>
          </Card>

          {/* Lesson Cards */}
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
            {grammarLessons.map((l, idx) => {
              const isCompleted = completedLessonIds.includes(l.id);
              return (
                <motion.div key={l.id} variants={item}>
                  <Card
                    className={cn(
                      'cursor-pointer hover:shadow-md transition-all hover:scale-[1.01]',
                      isCompleted && 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20'
                    )}
                    onClick={() => setSelectedLesson(l.id)}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            'flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold shrink-0',
                            isCompleted
                              ? 'bg-emerald-600 text-white'
                              : 'bg-muted text-muted-foreground'
                          )}
                        >
                          {isCompleted ? <Check className="size-5" /> : idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-lg">{l.title}</h3>
                            {isCompleted && (
                              <Badge className="text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                                Завершено
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{l.subtitle}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <List className="size-3" />
                              {l.tables.length} таблиц
                            </span>
                            <span className="flex items-center gap-1">
                              <BookOpen className="size-3" />
                              {l.examples.length} примеров
                            </span>
                            <span className="flex items-center gap-1">
                              <ArrowRight className="size-3" />
                              {l.keyTakeaways.length} выводов
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="size-5 text-muted-foreground shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Adjective Comparison Table */}
          <div className="pt-4">
            <h2 className="text-xl font-bold mb-3">
              📐 Сравнение прилагательных
            </h2>
            <AdjectiveComparisonTable />
          </div>

          {/* Preposition Case Guide */}
          <div className="pt-4">
            <h2 className="text-xl font-bold mb-3">
              📌 Предлоги и падежи
            </h2>
            <PrepositionCaseGuide />
          </div>
        </>
      ) : lesson ? (
        <>
          {/* Lesson View */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={handleBack}>
              <ChevronLeft className="size-5" />
            </Button>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{lesson.title}</h2>
              <p className="text-sm text-muted-foreground">{lesson.subtitle}</p>
            </div>
            <Button
              onClick={() => toggleLessonCompleted(lesson.id)}
              className={cn(
                completedLessonIds.includes(lesson.id)
                  ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              )}
            >
              <Check className="size-4 mr-1" />
              {completedLessonIds.includes(lesson.id) ? 'Завершено ✓' : 'Завершить'}
            </Button>
          </div>

          {/* Lesson Content */}
          <Card>
            <CardContent className="p-6">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {lesson.content.split('\n').map((paragraph, i) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={i} className="text-lg font-bold mt-4 mb-2">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  if (!paragraph.trim()) return <br key={i} />;
                  return (
                    <p key={i} className="text-sm leading-relaxed mb-2">
                      {paragraph.split('**').map((part, j) =>
                        j % 2 === 1 ? (
                          <strong key={j} className="font-semibold text-emerald-700 dark:text-emerald-400">
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Tables */}
          {lesson.tables.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="size-5 text-emerald-600" />
                  Таблицы
                </CardTitle>
                {lesson.tables.length > 1 && (
                  <div className="flex gap-2 mt-2">
                    {lesson.tables.map((t, i) => (
                      <Button
                        key={i}
                        variant={currentTableIdx === i ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentTableIdx(i)}
                        className={currentTableIdx === i ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
                      >
                        {t.title.length > 20 ? `Таблица ${i + 1}` : t.title}
                      </Button>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTableIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="overflow-x-auto rounded-lg border"
                  >
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr>
                          {lesson.tables[currentTableIdx].headers.map((h, i) => (
                            <th key={i} className="text-left p-3 font-medium whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {lesson.tables[currentTableIdx].rows.map((row, i) => (
                          <tr key={i} className={cn('border-t', i % 2 === 0 && 'bg-muted/20')}>
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className={cn(
                                  'p-3 whitespace-nowrap',
                                  j === 0 && 'font-medium',
                                  j === 1 && 'text-emerald-700 dark:text-emerald-400 font-medium'
                                )}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          )}

          {/* Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="size-5 text-emerald-600" />
                Примеры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                {lesson.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg border bg-muted/20 space-y-1"
                  >
                    {ex.highlight && (
                      <p className="text-xs text-emerald-600 font-medium">{ex.highlight}</p>
                    )}
                    <p className="font-medium text-emerald-700 dark:text-emerald-400">{ex.czech}</p>
                    <p className="text-sm text-muted-foreground">{ex.russian}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="size-5 text-emerald-600" />
                Ключевые выводы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {lesson.keyTakeaways.map((tk, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    {tk}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Navigation between lessons */}
          <div className="flex justify-between">
            {(() => {
              const currentIdx = grammarLessons.findIndex((l) => l.id === lesson.id);
              const prev = currentIdx > 0 ? grammarLessons[currentIdx - 1] : null;
              const next =
                currentIdx < grammarLessons.length - 1 ? grammarLessons[currentIdx + 1] : null;
              return (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      if (prev) {
                        setSelectedLesson(prev.id);
                        setCurrentTableIdx(0);
                      }
                    }}
                    disabled={!prev}
                  >
                    <ChevronLeft className="size-4 mr-1" />
                    Назад
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      if (next) {
                        setSelectedLesson(next.id);
                        setCurrentTableIdx(0);
                      }
                    }}
                    disabled={!next}
                  >
                    Далее
                    <ChevronRight className="size-4 ml-1" />
                  </Button>
                </>
              );
            })()}
          </div>
        </>
      ) : null}
    </div>
  );
}
