import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/bell-creek-logo.png"
              alt="Bell Creek Partners"
              className="h-8 w-auto object-contain"
            />
          </a>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('leistungen')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('warum-wir')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Warum wir
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </button>
          </div>

          {/* CTA */}
          <Button 
            variant="hero" 
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => scrollToSection('kontakt')}
          >
            Jetzt Projekt besprechen
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden text-xs px-2 h-8 text-primary hover:text-primary"
            onClick={() => scrollToSection('kontakt')}
          >
            Kontakt
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
