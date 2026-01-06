import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">BC</span>
            </div>
            <span className="font-semibold text-foreground">Bell Creek Partners</span>
          </div>
          
          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#leistungen" className="hover:text-foreground transition-colors">Leistungen</a>
            <a href="#warum-wir" className="hover:text-foreground transition-colors">Warum wir</a>
            <a href="#kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
            <a href="mailto:kontakt@bellcreek.de" className="hover:text-foreground transition-colors">E-Mail</a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2026 Bell Creek Partners. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
