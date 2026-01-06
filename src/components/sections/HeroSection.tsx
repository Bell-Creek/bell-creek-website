import React from 'react';
import { Button } from '@/components/ui/button';
import NeuralNetwork from '@/components/NeuralNetwork';
import { ArrowRight, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <NeuralNetwork />
      
      <div className="container relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 opacity-0 animate-fade-in" style={{
            animationDelay: '100ms',
            animationFillMode: 'forwards'
          }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Die Brücke zwischen Tradition und Tech.
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up" style={{
            animationDelay: '300ms',
            animationFillMode: 'forwards'
          }}>
            Exzellenz in Immobilien.{' '}
            <span className="text-gradient">Intelligenz in Prozessen.</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{
            animationDelay: '500ms',
            animationFillMode: 'forwards'
          }}>
            Neben der professionellen Vermarktung von Immobilien bieten wir Digitalisierungs- und Beratungsdienstleistungen für Bestandshalter und Hausverwaltungen an.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{
            animationDelay: '700ms',
            animationFillMode: 'forwards'
          }}>
            <Button variant="hero" size="lg" className="group" onClick={scrollToContact}>
              Jetzt Projekt besprechen
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="mailto:kontakt@bellcreek.de">
                <Mail className="w-4 h-4 mr-2" />
                Mehr erfahren
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
