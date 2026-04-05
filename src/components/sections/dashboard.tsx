'use client';

import { useCzechStore } from '@/store/czech-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  Languages,
  GraduationCap,
  ListChecks,
  Trophy,
  Home,
  Flame,
  ArrowRight,
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { vocabularyData } from '@/data/vocabulary';
import { grammarLessons } from '@/data/grammar';

export function Dashboard() {
  const {
    setActiveTab,
    learnedWordIds,
    completedLessonIds,
    quizScores,
    currentStreak,
    incrementStreak,
  } = useCzechStore();

  const totalWords = vocabularyData.reduce((sum, cat) => sum + cat.words.length, 0);
  const learnedCount = learnedWordIds.length;
  const lessonsCompleted = completedLessonIds.length;
  const totalLessons = grammarLessons.length;

  const quizAccuracy =
    quizScores.length > 0
      ? Math.round(
          (quizScores.reduce((s, q) => s + q.score, 0) /
            quizScores.reduce((s, q) => s + q.total, 0)) *
            100
        )
      : 0;

  const overallProgress = Math.round(
    ((learnedCount / totalWords) * 50 + (lessonsCompleted / totalLessons) * 30 + (quizAccuracy / 100) * 20)
  );

  const quickActions = [
    { id: 'alphabet' as const, label: 'Алфавит', description: 'Изучите буквы', icon: <BookOpen className="size-6" />, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950' },
    { id: 'vocabulary' as const, label: 'Словарь', description: 'Учите слова', icon: <Languages className="size-6" />, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950' },
    { id: 'grammar' as const, label: 'Грамматика', description: 'Уроки грамматики', icon: <GraduationCap className="size-6" />, color: 'text-rose-600 bg-rose-50 dark:bg-rose-950' },
    { id: 'exercises' as const, label: 'Упражнения', description: 'Практика', icon: <ListChecks className="size-6" />, color: 'text-violet-600 bg-violet-50 dark:bg-violet-950' },
    { id: 'progress' as const, label: 'Прогресс', description: 'Статистика', icon: <Trophy className="size-6" />, color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950' },
  ];

  const recommendedNext = () => {
    if (learnedCount === 0) return 'alphabet';
    if (lessonsCompleted === 0) return 'grammar';
    return 'exercises';
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Welcome Section */}
      <motion.div variants={item}>
        <Card className="border-emerald-200 dark:border-emerald-800 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30" />
          <CardContent className="relative p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  Добро пожаловать! 🇨🇿
                </h2>
                <p className="text-muted-foreground">
                  Учите чешский язык с нуля. Продолжайте каждый день для лучшего результата!
                </p>
              </div>
              <Button
                onClick={() => {
                  incrementStreak();
                  setActiveTab(recommendedNext());
                }}
                className="bg-emerald-600 hover:bg-emerald-700 whitespace-nowrap"
              >
                Начать учёбу
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div variants={item}>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Languages className="size-4 text-emerald-600" />
              <span className="text-sm text-muted-foreground">Слова</span>
            </div>
            <p className="text-2xl font-bold">{learnedCount}</p>
            <p className="text-xs text-muted-foreground">из {totalWords}</p>
          </Card>
        </motion.div>
        <motion.div variants={item}>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="size-4 text-amber-600" />
              <span className="text-sm text-muted-foreground">Уроки</span>
            </div>
            <p className="text-2xl font-bold">{lessonsCompleted}</p>
            <p className="text-xs text-muted-foreground">из {totalLessons}</p>
          </Card>
        </motion.div>
        <motion.div variants={item}>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Star className="size-4 text-rose-600" />
              <span className="text-sm text-muted-foreground">Точность</span>
            </div>
            <p className="text-2xl font-bold">{quizAccuracy}%</p>
            <p className="text-xs text-muted-foreground">{quizScores.length} тестов</p>
          </Card>
        </motion.div>
        <motion.div variants={item}>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="size-4 text-orange-600" />
              <span className="text-sm text-muted-foreground">Серия</span>
            </div>
            <p className="text-2xl font-bold">{currentStreak}</p>
            <p className="text-xs text-muted-foreground">дней подряд</p>
          </Card>
        </motion.div>
      </div>

      {/* Overall Progress */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="size-5 text-emerald-600" />
              Общий прогресс
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Общий уровень подготовки</span>
                <span className="font-medium">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-3" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Начинающий</span>
                <span>Продвинутый</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={item}>
        <h3 className="text-lg font-semibold mb-3">Быстрый доступ</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {quickActions.map((action) => (
            <Card
              key={action.id}
              className="cursor-pointer hover:shadow-md transition-all hover:scale-[1.02] p-4"
              onClick={() => setActiveTab(action.id)}
            >
              <div className={`inline-flex p-2 rounded-lg mb-3 ${action.color}`}>
                {action.icon}
              </div>
              <p className="font-medium text-sm">{action.label}</p>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Recommended Next */}
      <motion.div variants={item}>
        <Card className="border-dashed border-2 border-emerald-300 dark:border-emerald-700">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                <ArrowRight className="size-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Рекомендуемое</p>
                <p className="text-xs text-muted-foreground">
                  {recommendedNext() === 'alphabet' && 'Начните с изучения чешского алфавита'}
                  {recommendedNext() === 'grammar' && 'Перейдите к урокам грамматики'}
                  {recommendedNext() === 'exercises' && 'Закрепите знания через упражнения'}
                </p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setActiveTab(recommendedNext())}
              className="border-emerald-300 text-emerald-600 hover:bg-emerald-50"
            >
              Перейти
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
