import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex p-3 rounded-full bg-primary/10 mb-8">
            <Quote className="w-6 h-6 text-primary" />
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
            "I used to dread walking into meetings not remembering who I'd spoken to before. CoLinked saves me from those awkward{' '}
            <span className="text-gradient">'remind me who this is'</span>{' '}
            moments—now I show up prepared like they're my best client."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
              <span className="text-primary font-semibold">JK</span>
            </div>
            <div className="text-left">
              <div className="font-medium text-foreground">Jamie K.</div>
              <div className="text-sm text-muted-foreground">Associate at a PE fund</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
