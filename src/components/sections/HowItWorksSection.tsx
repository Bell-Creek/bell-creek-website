import React from 'react';
import { UserPlus, Mic, Zap, ArrowRight } from 'lucide-react';

const steps = [
  { 
    number: 1, 
    title: "Add a contact", 
    description: "Import or create a new contact in seconds",
    icon: UserPlus 
  },
  { 
    number: 2, 
    title: "Just talk", 
    description: "Record voice notes after meetings—no typing needed",
    icon: Mic,
    highlight: true
  },
  { 
    number: 3, 
    title: "Get instant briefings", 
    description: "AI prepares you before every interaction",
    icon: Zap 
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="relative py-20 border-y border-border/50 bg-card/30">
      <div className="container px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            How it works
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3">
            Three steps to <span className="text-gradient">never forget</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Connector arrow (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-3 z-10">
                      <ArrowRight className="w-6 h-6 text-primary/40" />
                    </div>
                  )}
                  
                  <div className={`
                    relative p-6 rounded-xl text-center transition-all duration-300
                    ${step.highlight 
                      ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 shadow-lg shadow-primary/10' 
                      : 'bg-card/50 border border-border/50 hover:border-primary/30'
                    }
                  `}>
                    {/* Highlight badge */}
                    {step.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Voice-first
                      </div>
                    )}
                    
                    {/* Icon */}
                    <div className={`
                      inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4
                      ${step.highlight 
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
                        : 'bg-primary/10 text-primary'
                      }
                    `}>
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    
                    {/* Step number */}
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Step {step.number}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                    
                    {/* Animated mic waves for voice step */}
                    {step.highlight && (
                      <div className="flex items-center justify-center gap-0.5 h-4 mt-4">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-primary/60 rounded-full animate-soundwave"
                            style={{
                              animationDelay: `${i * 0.1}s`,
                              height: '100%',
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
