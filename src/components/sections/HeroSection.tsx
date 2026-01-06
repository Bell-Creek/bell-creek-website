import React from 'react';
import { Button } from '@/components/ui/button';
import NeuralNetwork from '@/components/NeuralNetwork';
import AIVisualization from '@/components/AIVisualization';
import { ArrowRight } from 'lucide-react';
const HeroSection: React.FC = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <NeuralNetwork />
      
      <div className="container relative z-10 px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8 opacity-0 animate-fade-in" style={{
            animationDelay: '100ms',
            animationFillMode: 'forwards'
          }}>The most advanced AI Personal Memory Assistant<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Personal memory assistant
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up" style={{
            animationDelay: '200ms',
            animationFillMode: 'forwards'
          }}>
              Remember every person like your{' '}
              <span className="text-gradient">best client.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 opacity-0 animate-fade-in-up" style={{
            animationDelay: '400ms',
            animationFillMode: 'forwards'
          }}>CoLinked turns scattered notes and recent interactions into a living brief for every contact. 
Never ask "what did he tell me" again.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-up" style={{
            animationDelay: '600ms',
            animationFillMode: 'forwards'
          }}>
              <Button variant="hero" size="lg" className="group">
                Get early access
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="lg">
                See how it works
              </Button>
            </div>
          </div>
          
          {/* Right: AI Visualization */}
          <div className="hidden lg:block opacity-0 animate-scale-in" style={{
          animationDelay: '400ms',
          animationFillMode: 'forwards'
        }}>
            <AIVisualization />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default HeroSection;