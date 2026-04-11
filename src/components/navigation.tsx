'use client';

import { useCzechStore, type TabId } from '@/store/czech-store';
import { BookOpen, GraduationCap, Home, Languages, ListChecks, Trophy, BarChart3, MessageCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'dashboard', label: 'Главная', icon: <Home className="size-4" /> },
  { id: 'alphabet', label: 'Алфавит', icon: <BookOpen className="size-4" /> },
  { id: 'vocabulary', label: 'Словарь', icon: <Languages className="size-4" /> },
  { id: 'phrasebook', label: 'Разговорник', icon: <MessageCircle className="size-4" /> },
  { id: 'reading', label: 'Чтение', icon: <FileText className="size-4" /> },
  { id: 'grammar', label: 'Грамматика', icon: <GraduationCap className="size-4" /> },
  { id: 'exercises', label: 'Упражнения', icon: <ListChecks className="size-4" /> },
  { id: 'progress', label: 'Прогресс', icon: <Trophy className="size-4" /> },
];

export function Navigation() {
  const { activeTab, setActiveTab } = useCzechStore();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="mr-4 flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl">🇨🇿</span>
          <span className="hidden sm:inline bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            Čeština pro Rusky
          </span>
          <span className="sm:hidden bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            Čeština
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'gap-1.5 transition-all',
                activeTab === tab.id
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {tab.icon}
              {tab.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden ml-auto">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🇨🇿</span>
                <span className="font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  Čeština pro Rusky
                </span>
              </div>
              <nav className="flex flex-col gap-2">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? 'default' : 'ghost'}
                    className={cn(
                      'justify-start gap-2 w-full',
                      activeTab === tab.id
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : ''
                    )}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setOpen(false);
                    }}
                  >
                    {tab.icon}
                    {tab.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
