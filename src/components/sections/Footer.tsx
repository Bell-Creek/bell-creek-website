import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/bell-creek-logo.png"
              alt="Bell Creek Partners"
              className="h-8 w-auto object-contain"
            />
            <span className="font-semibold text-foreground">Bell Creek Partners</span>
          </div>

          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#leistungen" className="hover:text-foreground transition-colors">Leistungen</a>
            <a href="#warum-wir" className="hover:text-foreground transition-colors">Warum wir</a>
            <a href="#kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
            <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
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
