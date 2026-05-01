'use client';

import { Navigation } from '@/components/navigation';
import { Dashboard } from '@/components/sections/dashboard';
import { AlphabetSection } from '@/components/sections/alphabet-section';
import { VocabularySection } from '@/components/sections/vocabulary-section';
import { PhrasebookSection } from '@/components/sections/phrasebook-section';
import { StoriesSection } from '@/components/sections/stories-section';
import { GrammarSection } from '@/components/sections/grammar-section';
import { ExercisesSection } from '@/components/sections/exercises-section';
import { SpecializedSection } from '@/components/sections/specialized-section';
import { ProgressSection } from '@/components/sections/progress-section';
import { useCzechStore } from '@/store/czech-store';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function Home() {
  const { activeTab } = useCzechStore();

  const renderSection = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'alphabet':
        return <AlphabetSection />;
      case 'vocabulary':
        return <VocabularySection />;
      case 'phrasebook':
        return <PhrasebookSection />;
      case 'reading':
        return <StoriesSection />;
      case 'grammar':
        return <GrammarSection />;
      case 'exercises':
        return <ExercisesSection />;
      case 'specialized':
        return <SpecializedSection />;
      case 'progress':
        return <ProgressSection />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
