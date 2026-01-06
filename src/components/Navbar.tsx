import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-[0_0_20px_hsl(24_95%_53%_/_0.3)]">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-foreground">CoLinked</span>
          </Link>
          
          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <Link 
              to="/pricing" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Button variant="hero" size="sm">
              Get early access
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
