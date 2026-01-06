import React from 'react';
import { Mic, Smartphone, MessageSquare, Sparkles } from 'lucide-react';

const VoiceInputSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Phone mockup with voice visualization */}
            <div className="relative flex justify-center order-2 lg:order-1">
              {/* Animated sound waves background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-primary/5 animate-pulse-ring" />
                <div className="absolute w-48 h-48 rounded-full bg-primary/10 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
                <div className="absolute w-32 h-32 rounded-full bg-primary/20 animate-pulse-ring" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Phone frame */}
              <div className="relative z-10 w-64 h-[500px] bg-card/80 backdrop-blur-sm rounded-[2.5rem] border border-border/50 shadow-2xl shadow-primary/10 overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-full" />
                
                {/* Phone content */}
                <div className="absolute inset-4 top-10 bottom-4 rounded-[1.5rem] bg-background/50 border border-border/30 flex flex-col">
                  {/* Header */}
                  <div className="p-4 border-b border-border/30">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Recording note for</div>
                    <div className="text-foreground font-medium mt-1">Sarah Chen</div>
                  </div>
                  
                  {/* Voice visualization */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6">
                    {/* Mic button with animated rings */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                        <Mic className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Sound wave bars */}
                    <div className="flex items-center gap-1 h-12 mb-4">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-primary rounded-full animate-soundwave"
                          style={{
                            animationDelay: `${i * 0.1}s`,
                            height: '100%',
                          }}
                        />
                      ))}
                    </div>
                    
                    <span className="text-sm text-muted-foreground">Listening...</span>
                  </div>
                  
                  {/* Transcription preview */}
                  <div className="p-4 border-t border-border/30 bg-card/30">
                    <p className="text-sm text-foreground/80 italic">
                      "Just met Sarah at the conference. She's launching a new fund focused on climate tech..."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -right-4 top-1/4 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="absolute -left-4 bottom-1/4 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
            </div>
            
            {/* Right: Text content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
                <Mic className="w-4 h-4" />
                Voice-first design
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Just talk.{' '}
                <span className="text-gradient">We'll remember.</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                No typing, no forms, no friction. Simply speak after a meeting or call, and CoLinked captures every detail automatically.
              </p>
              
              {/* Feature bullets */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                    <Smartphone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Voice notes on the go</h4>
                    <p className="text-sm text-muted-foreground">Record insights right after your meeting while they're fresh.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">AI-powered transcription</h4>
                    <p className="text-sm text-muted-foreground">Your voice becomes structured notes, linked to the right person.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Context that sticks</h4>
                    <p className="text-sm text-muted-foreground">Every detail instantly searchable and ready for your next meeting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceInputSection;
