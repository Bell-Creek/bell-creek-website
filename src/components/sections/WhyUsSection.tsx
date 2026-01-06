import React from 'react';
import { Layers, Target, Home } from 'lucide-react';

const differentiators = [
  {
    icon: Layers,
    title: 'Makler',
    description: 'Allround-Serice mit Transaktionsberatung',
  },
  {
    icon: Target,
    title: 'Boutique-Struktur',
    description: 'Kundenservice mit höchstem Qualitätsanspruch',
  },
  {
    icon: Home,
    title: 'Modern und Digital',
    description: 'Prozessautomatisierung und Beratung',
  },
];

const WhyUsSection: React.FC = () => {
  return (
    <section id="warum-wir" className="relative py-24 border-y border-border/50 bg-card/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Warum wir
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Warum <span className="text-gradient">Bell Creek?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drei klare Differenzierungsmerkmale, die uns von anderen unterscheiden.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-8 rounded-xl card-gradient border-gradient text-center hover:bg-card-hover transition-all duration-500 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
