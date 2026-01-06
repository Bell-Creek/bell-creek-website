import React from 'react';
import { Heart, Briefcase, Gift, Cake, Plane, Coffee, Baby, MapPin } from 'lucide-react';

const personalItems = [
  { icon: Cake, label: "Birthdays", detail: "Never miss a celebration" },
  { icon: Gift, label: "Gift ideas", detail: "Remember what they love" },
  { icon: Plane, label: "Vacation plans", detail: "Know when they're away" },
];

const workItems = [
  { icon: Coffee, label: "Coffee order", detail: "Oat milk latte, extra hot" },
  { icon: Baby, label: "Kids' names", detail: "Ask about Emma's recital" },
  { icon: MapPin, label: "Hometown", detail: "Connect on shared roots" },
];

const UseCasesSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            One brain for <span className="text-gradient">every relationship</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether it's your best friend or your biggest client, CoLinked keeps the details that matter.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Personal Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-rose-500/30 transition-all duration-300">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Personal Life</h3>
                  <p className="text-sm text-muted-foreground">Friends & Family</p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {personalItems.map((item, index) => (
                  <div 
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-rose-500/20 transition-colors duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-rose-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground truncate">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual accent */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-rose-500/10 to-transparent rounded-full blur-2xl" />
            </div>
          </div>

          {/* Work Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-orange-500/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Professional</h3>
                  <p className="text-sm text-muted-foreground">Clients & Colleagues</p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {workItems.map((item, index) => (
                  <div 
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-accent/20 transition-colors duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground truncate">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual accent */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
