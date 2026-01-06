import React, { useState, useEffect } from 'react';
import { Sparkles, Briefcase, Mail, Phone, MapPin, Cake, Heart, Users, Smile } from 'lucide-react';

const QuickBriefSection: React.FC = () => {
  const [phase, setPhase] = useState<'overview' | 'clicking' | 'generating' | 'brief'>('overview');

  useEffect(() => {
    const runAnimation = () => {
      // Start with overview
      setPhase('overview');
      
      // After 2s, show clicking animation
      const clickTimer = setTimeout(() => setPhase('clicking'), 2000);
      
      // After 2.3s, show generating
      const genTimer = setTimeout(() => setPhase('generating'), 2300);
      
      // After 3.5s, show brief
      const briefTimer = setTimeout(() => setPhase('brief'), 3500);
      
      // After 8s, fade back to overview
      const resetTimer = setTimeout(() => setPhase('overview'), 8000);

      return () => {
        clearTimeout(clickTimer);
        clearTimeout(genTimer);
        clearTimeout(briefTimer);
        clearTimeout(resetTimer);
      };
    };

    runAnimation();
    const interval = setInterval(runAnimation, 8500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Briefings</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prepare in <span className="text-gradient">seconds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant AI briefings before every call or meeting
          </p>
        </div>

        {/* Phone mockup with profile */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Phone frame */}
            <div className="bg-card border border-border rounded-3xl p-4 shadow-2xl">
              {/* Profile Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold flex-shrink-0">
                  MT
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-foreground">Marcus Thompson</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>Head of Product · TechCorp</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>m.thompson@techcorp.io</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Palo Alto, USA</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {['product', 'b2b-saas', 'friend'].map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full border border-border text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4" />

              {/* Quick Brief Button */}
              <button 
                className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 mb-4 ${
                  phase === 'clicking' 
                    ? 'bg-primary text-primary-foreground scale-95' 
                    : phase === 'generating' || phase === 'brief'
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                }`}
              >
                <Sparkles className={`w-5 h-5 ${phase === 'generating' ? 'animate-spin' : ''}`} />
                {phase === 'generating' ? 'Generating Brief...' : 'Quick Brief'}
              </button>

              {/* Content area with animation */}
              <div className="relative min-h-[200px]">
                {/* Quick Overview - visible in overview phase */}
                <div className={`transition-all duration-500 ${
                  phase === 'overview' || phase === 'clicking' 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 absolute inset-0'
                }`}>
                  <h4 className="font-semibold text-foreground mb-3">Quick Overview</h4>
                  <div className="space-y-3 bg-background/50 rounded-xl p-4 border border-border">
                    <div className="flex items-start gap-3">
                      <Cake className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Birthday</span>
                        <p className="text-sm text-foreground">1992-03-15</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Family</span>
                        <p className="text-sm text-foreground">Partner Lisa (expecting baby in April), Cat named Pixel</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Smile className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Interests</span>
                        <p className="text-sm text-foreground">Coffee, Product Strategy, Hiking</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Brief - visible in brief phase */}
                <div className={`transition-all duration-500 ${
                  phase === 'brief' 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4 absolute inset-0'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold text-foreground">AI Brief for Marcus</h4>
                  </div>
                  <div className="space-y-4">
                    {/* Summary */}
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 animate-fade-in">
                      <span className="text-xs text-primary uppercase tracking-wider font-medium">Summary</span>
                      <p className="text-sm text-foreground mt-1">
                        "Close friend in product leadership at TechCorp, expecting first child soon and currently focused on a big Q2 launch."
                      </p>
                    </div>
                    
                    {/* Conversation Starter */}
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      <span className="text-xs text-primary uppercase tracking-wider font-medium">Conversation Starter</span>
                      <p className="text-sm text-foreground mt-1">
                        "Ask how Lisa is doing with the pregnancy and how the April launch prep is going."
                      </p>
                    </div>
                    
                    {/* Follow-up */}
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                      <span className="text-xs text-primary uppercase tracking-wider font-medium">Follow-up</span>
                      <p className="text-sm text-foreground mt-1">
                        "Offer to review Marcus's launch deck next week and send that article about onboarding flows."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Generating state - sparkle overlay */}
                {phase === 'generating' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-xl">
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative">
                        <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                        <div className="absolute inset-0 animate-ping">
                          <Sparkles className="w-8 h-8 text-primary/50" />
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">Analyzing your history...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Glow effect behind phone */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickBriefSection;
