'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { vocabularyData } from '@/data/vocabulary';
import { grammarLessons } from '@/data/grammar';
import { useCzechStore } from '@/store/czech-store';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  Trophy,
  Target,
  BookOpen,
  GraduationCap,
  Languages,
  Flame,
  Star,
  TrendingUp,
  Clock,
  Award,
} from 'lucide-react';

export function ProgressSection() {
  const {
    learnedWordIds,
    completedLessonIds,
    quizScores,
    currentStreak,
    masteredLetterIds,
    getAchievements,
  } = useCzechStore();

  const achievements = getAchievements();
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  const totalWords = vocabularyData.reduce((s, c) => s + c.words.length, 0);
  const quizAccuracy =
    quizScores.length > 0
      ? Math.round(
          (quizScores.reduce((s, q) => s + q.score, 0) /
            quizScores.reduce((s, q) => s + q.total, 0)) *
            100
        )
      : 0;

  // Simulated study time (based on actions)
  const studyMinutes = learnedWordIds.length * 2 + completedLessonIds.length * 15 + quizScores.length * 10;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  const lastScores = quizScores.slice(-10);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Ваш прогресс</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Отслеживайте свои достижения
        </p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        {/* Overview Stats */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Languages className="size-4 text-emerald-600" />
              <span className="text-xs text-muted-foreground">Слова</span>
            </div>
            <p className="text-2xl font-bold">{learnedWordIds.length}</p>
            <p className="text-xs text-muted-foreground">из {totalWords}</p>
            <Progress value={(learnedWordIds.length / totalWords) * 100} className="h-1.5 mt-2" />
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="size-4 text-amber-600" />
              <span className="text-xs text-muted-foreground">Уроки</span>
            </div>
            <p className="text-2xl font-bold">{completedLessonIds.length}</p>
            <p className="text-xs text-muted-foreground">из {grammarLessons.length}</p>
            <Progress value={(completedLessonIds.length / grammarLessons.length) * 100} className="h-1.5 mt-2" />
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="size-4 text-rose-600" />
              <span className="text-xs text-muted-foreground">Точность</span>
            </div>
            <p className="text-2xl font-bold">{quizAccuracy}%</p>
            <p className="text-xs text-muted-foreground">{quizScores.length} тестов</p>
            <Progress value={quizAccuracy} className="h-1.5 mt-2" />
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="size-4 text-orange-600" />
              <span className="text-xs text-muted-foreground">Серия</span>
            </div>
            <p className="text-2xl font-bold">{currentStreak}</p>
            <p className="text-xs text-muted-foreground">дней подряд</p>
            <Progress value={Math.min((currentStreak / 30) * 100, 100)} className="h-1.5 mt-2" />
          </Card>
        </motion.div>

        {/* Study Time & Alphabet */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="size-4 text-cyan-600" />
                Время обучения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{studyMinutes} мин</div>
              <p className="text-sm text-muted-foreground">Общее примерное время</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-lg font-semibold">{learnedWordIds.length * 2}</p>
                  <p className="text-xs text-muted-foreground">Словарь</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{completedLessonIds.length * 15}</p>
                  <p className="text-xs text-muted-foreground">Грамматика</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{quizScores.length * 10}</p>
                  <p className="text-xs text-muted-foreground">Упражнения</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="size-4 text-emerald-600" />
                Алфавит
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-3xl font-bold">{masteredLetterIds.length}</span>
                <span className="text-sm text-muted-foreground mb-1">из 42 букв</span>
              </div>
              <Progress value={(masteredLetterIds.length / 42) * 100} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">
                {masteredLetterIds.length >= 42
                  ? 'Все буквы изучены! 🎉'
                  : `Осталось изучить ${42 - masteredLetterIds.length} букв`}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Vocabulary by Category */}
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Languages className="size-5 text-emerald-600" />
                Словарный запас по категориям
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {vocabularyData.map((cat) => {
                const learned = cat.words.filter((w) => learnedWordIds.includes(w.id)).length;
                const total = cat.words.length;
                const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
                return (
                  <div key={cat.id} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2">
                        <span>{cat.icon}</span>
                        {cat.name}
                      </span>
                      <span className="text-muted-foreground">
                        {learned}/{total} ({pct}%)
                      </span>
                    </div>
                    <Progress value={pct} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Grammar Lessons */}
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <GraduationCap className="size-5 text-amber-600" />
                Пройденные уроки грамматики
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {grammarLessons.map((lesson) => {
                  const isCompleted = completedLessonIds.includes(lesson.id);
                  return (
                    <div
                      key={lesson.id}
                      className={cn(
                        'flex items-center gap-3 p-3 rounded-lg border',
                        isCompleted
                          ? 'border-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/20'
                          : 'border-muted'
                      )}
                    >
                      <div
                        className={cn(
                          'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold',
                          isCompleted
                            ? 'bg-emerald-600 text-white'
                            : 'bg-muted text-muted-foreground'
                        )}
                      >
                        {isCompleted ? <Star className="size-3" /> : ''}
                      </div>
                      <span className={cn('text-sm flex-1', isCompleted && 'font-medium')}>
                        {lesson.title}
                      </span>
                      {isCompleted && (
                        <Badge className="text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                          ✓
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quiz History */}
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="size-5 text-rose-600" />
                История тестов (последние 10)
              </CardTitle>
            </CardHeader>
            <CardContent>
              {lastScores.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Пока нет результатов тестов. Начните с упражнений!
                </p>
              ) : (
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {lastScores.map((score, i) => {
                    const pct = score.total > 0 ? Math.round((score.score / score.total) * 100) : 0;
                    const typeLabels: Record<string, string> = {
                      'multiple-choice': 'Выбор перевода',
                      'fill-blank': 'Заполнение',
                      'matching': 'Сопоставление',
                      'sentence-building': 'Предложения',
                    };
                    return (
                      <div key={score.id} className="flex items-center gap-3 p-2 rounded-lg border text-sm">
                        <Badge variant="outline" className="text-[10px] shrink-0">
                          {typeLabels[score.type] || score.type}
                        </Badge>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">
                              {score.score}/{score.total}
                            </span>
                            <span
                              className={cn(
                                'text-xs',
                                pct >= 70 ? 'text-emerald-600' : 'text-red-600'
                              )}
                            >
                              {pct}%
                            </span>
                          </div>
                        </div>
                        <Progress value={pct} className="h-1.5 w-16" />
                        <span className="text-xs text-muted-foreground shrink-0">
                          {new Date(score.date).toLocaleDateString('ru-RU', {
                            day: 'numeric',
                            month: 'short',
                          })}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Award className="size-5 text-violet-600" />
                Достижения ({unlockedCount}/{achievements.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={cn(
                      'p-4 rounded-lg border transition-all',
                      achievement.unlocked
                        ? 'border-amber-300 bg-amber-50/50 dark:bg-amber-950/20'
                        : 'border-muted opacity-60 grayscale'
                    )}
                  >
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <h4 className="font-medium text-sm">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                    {achievement.unlocked && (
                      <Badge className="mt-2 text-[10px] bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                        <Trophy className="size-3 mr-0.5" />
                        Получено
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
