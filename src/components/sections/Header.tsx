import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wind" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">ВентКлимат</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('equipment')} className="text-sm font-medium hover:text-primary transition-colors">Оборудование</button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-primary transition-colors">Проекты</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:inline-flex">
              Связаться
            </Button>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col gap-6 mt-8">
                  <button 
                    onClick={() => { scrollToSection('hero'); setIsMenuOpen(false); }} 
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Главная
                  </button>
                  <button 
                    onClick={() => { scrollToSection('services'); setIsMenuOpen(false); }} 
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Услуги
                  </button>
                  <button 
                    onClick={() => { scrollToSection('equipment'); setIsMenuOpen(false); }} 
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Оборудование
                  </button>
                  <button 
                    onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }} 
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Проекты
                  </button>
                  <button 
                    onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} 
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    О компании
                  </button>
                  <button 
                    onClick={() => { scrollToSection('contacts'); setIsMenuOpen(false); }} 
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Контакты
                  </button>
                  <Button 
                    onClick={() => { scrollToSection('contacts'); setIsMenuOpen(false); }} 
                    className="w-full mt-4"
                  >
                    Связаться
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
