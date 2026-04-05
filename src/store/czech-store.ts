import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TabId = 'dashboard' | 'alphabet' | 'vocabulary' | 'grammar' | 'exercises' | 'progress';

export interface QuizScore {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'sentence-building';
  score: number;
  total: number;
  date: string;
  category?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
}

interface CzechStore {
  // Navigation
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;

  // Vocabulary progress
  learnedWordIds: string[];
  toggleWordLearned: (wordId: string) => void;
  markWordLearned: (wordId: string) => void;

  // Grammar progress
  completedLessonIds: string[];
  toggleLessonCompleted: (lessonId: string) => void;

  // Quiz scores
  quizScores: QuizScore[];
  addQuizScore: (score: QuizScore) => void;

  // Daily streak
  currentStreak: number;
  lastStudyDate: string | null;
  incrementStreak: () => void;

  // Settings
  darkMode: boolean;
  toggleDarkMode: () => void;

  // Alphabet mastery
  masteredLetterIds: number[];
  toggleLetterMastered: (letterId: number) => void;

  // Computed helpers
  getLearnedWordsCount: () => number;
  getLearnedWordsByCategory: (categoryId: string) => number;
  getTotalWords: () => number;
  getQuizAccuracy: () => number;
  getAchievements: () => Achievement[];
}

const defaultAchievements: Achievement[] = [
  { id: 'first-word', title: 'Первые шаги', description: 'Выучите первое слово', icon: '🌱', unlocked: false },
  { id: 'ten-words', title: 'Начинающий', description: 'Выучите 10 слов', icon: '📖', unlocked: false },
  { id: 'fifty-words', title: 'Первые 50 слов', description: 'Выучите 50 слов', icon: '📚', unlocked: false },
  { id: 'hundred-words', title: 'Сто слов', description: 'Выучите 100 слов', icon: '🏆', unlocked: false },
  { id: 'alphabet-master', title: 'Мастер алфавита', description: 'Выучите все буквы алфавита', icon: '🅰️', unlocked: false },
  { id: 'first-lesson', title: 'Студент', description: 'Завершите первый урок грамматики', icon: '✏️', unlocked: false },
  { id: 'grammar-genius', title: 'Грамматический гений', description: 'Завершите все уроки грамматики', icon: '🧠', unlocked: false },
  { id: 'first-quiz', title: 'Тест сдан!', description: 'Пройдите первый тест', icon: '🎯', unlocked: false },
  { id: 'perfect-score', title: 'Безупречно!', description: 'Получите 100% в тесте', icon: '⭐', unlocked: false },
  { id: 'streak-7', title: 'Неделя', description: 'Учитесь 7 дней подряд', icon: '🔥', unlocked: false },
  { id: 'all-categories', title: 'Разносторонний', description: 'Выучите слова из всех категорий', icon: '🌍', unlocked: false },
  { id: 'sentence-builder', title: 'Строитель фраз', description: 'Составьте 5 предложений правильно', icon: '🏗️', unlocked: false },
];

const getTodayString = () => new Date().toISOString().split('T')[0];

export const useCzechStore = create<CzechStore>()(
  persist(
    (set, get) => ({
      // Navigation
      activeTab: 'dashboard',
      setActiveTab: (tab) => set({ activeTab: tab }),

      // Vocabulary
      learnedWordIds: [],
      toggleWordLearned: (wordId) =>
        set((state) => ({
          learnedWordIds: state.learnedWordIds.includes(wordId)
            ? state.learnedWordIds.filter((id) => id !== wordId)
            : [...state.learnedWordIds, wordId],
        })),
      markWordLearned: (wordId) =>
        set((state) => ({
          learnedWordIds: state.learnedWordIds.includes(wordId)
            ? state.learnedWordIds
            : [...state.learnedWordIds, wordId],
        })),

      // Grammar
      completedLessonIds: [],
      toggleLessonCompleted: (lessonId) =>
        set((state) => ({
          completedLessonIds: state.completedLessonIds.includes(lessonId)
            ? state.completedLessonIds.filter((id) => id !== lessonId)
            : [...state.completedLessonIds, lessonId],
        })),

      // Quiz scores
      quizScores: [],
      addQuizScore: (score) =>
        set((state) => ({
          quizScores: [...state.quizScores.slice(-9), score],
        })),

      // Streak
      currentStreak: 0,
      lastStudyDate: null,
      incrementStreak: () => {
        const today = getTodayString();
        const state = get();
        if (state.lastStudyDate === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        const newStreak =
          state.lastStudyDate === yesterdayStr
            ? state.currentStreak + 1
            : state.lastStudyDate === null
              ? 1
              : 1;

        set({
          currentStreak: newStreak,
          lastStudyDate: today,
        });
      },

      // Settings
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

      // Alphabet
      masteredLetterIds: [],
      toggleLetterMastered: (letterId) =>
        set((state) => ({
          masteredLetterIds: state.masteredLetterIds.includes(letterId)
            ? state.masteredLetterIds.filter((id) => id !== letterId)
            : [...state.masteredLetterIds, letterId],
        })),

      // Computed helpers
      getLearnedWordsCount: () => get().learnedWordIds.length,
      getLearnedWordsByCategory: (categoryId: string) => {
        const { learnedWordIds } = get();
        return learnedWordIds.filter((id) => id.startsWith(categoryId[0] === 'g' && categoryId !== 'grammar' ? 'g' : categoryId[0]));
      },
      getTotalWords: () => {
        // Import vocabulary data to get total count
        // We'll compute this from the data
        return 148; // Total words across all categories
      },
      getQuizAccuracy: () => {
        const { quizScores } = get();
        if (quizScores.length === 0) return 0;
        const totalCorrect = quizScores.reduce((sum, s) => sum + s.score, 0);
        const totalQuestions = quizScores.reduce((sum, s) => sum + s.total, 0);
        return totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
      },
      getAchievements: () => {
        const state = get();
        const achievements = defaultAchievements.map((a) => ({ ...a }));

        // Check first-word
        const fi = achievements.find((a) => a.id === 'first-word');
        if (fi && state.learnedWordIds.length >= 1) fi.unlocked = true;

        // Check ten-words
        const tw = achievements.find((a) => a.id === 'ten-words');
        if (tw && state.learnedWordIds.length >= 10) tw.unlocked = true;

        // Check fifty-words
        const fw = achievements.find((a) => a.id === 'fifty-words');
        if (fw && state.learnedWordIds.length >= 50) fw.unlocked = true;

        // Check hundred-words
        const hw = achievements.find((a) => a.id === 'hundred-words');
        if (hw && state.learnedWordIds.length >= 100) hw.unlocked = true;

        // Check alphabet-master
        const am = achievements.find((a) => a.id === 'alphabet-master');
        if (am && state.masteredLetterIds.length >= 42) am.unlocked = true;

        // Check first-lesson
        const fl = achievements.find((a) => a.id === 'first-lesson');
        if (fl && state.completedLessonIds.length >= 1) fl.unlocked = true;

        // Check grammar-genius
        const gg = achievements.find((a) => a.id === 'grammar-genius');
        if (gg && state.completedLessonIds.length >= 6) gg.unlocked = true;

        // Check first-quiz
        const fq = achievements.find((a) => a.id === 'first-quiz');
        if (fq && state.quizScores.length >= 1) fq.unlocked = true;

        // Check perfect-score
        const ps = achievements.find((a) => a.id === 'perfect-score');
        if (ps && state.quizScores.some((s) => s.score === s.total)) ps.unlocked = true;

        // Check streak-7
        const s7 = achievements.find((a) => a.id === 'streak-7');
        if (s7 && state.currentStreak >= 7) s7.unlocked = true;

        // Check all-categories
        const ac = achievements.find((a) => a.id === 'all-categories');
        if (ac) {
          const prefixes = ['g', 'f', 'fm', 'n', 'c', 't', 'ct', 'tm'];
          const covered = prefixes.filter((p) => state.learnedWordIds.some((id) => id.startsWith(p)));
          if (covered.length >= 8) ac.unlocked = true;
        }

        return achievements;
      },
    }),
    {
      name: 'czech-learning-store',
    }
  )
);
