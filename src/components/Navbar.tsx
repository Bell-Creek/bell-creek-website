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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-[0_0_20px_hsl(24_95%_53%_/_0.3)]">
              <span className="text-primary-foreground font-bold text-sm">BC</span>
            </div>
            <span className="font-semibold text-foreground">Bell Creek Partners</span>
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
            onClick={() => scrollToSection('kontakt')}
          >
            Jetzt Projekt besprechen
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
