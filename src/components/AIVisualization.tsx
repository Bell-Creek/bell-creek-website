import React from 'react';

const AIVisualization: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] animate-glow" />
      
      {/* Main circular container */}
      <div className="absolute inset-8 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm">
        {/* Inner rings */}
        <div className="absolute inset-4 rounded-full border border-primary/10" />
        <div className="absolute inset-12 rounded-full border border-primary/20" />
        <div className="absolute inset-20 rounded-full border border-primary/30 bg-primary/5" />
        
        {/* Center AI core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-[0_0_40px_hsl(24_95%_53%_/_0.4)] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary-foreground"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-primary/50 animate-pulse-ring" />
          </div>
        </div>
        
        {/* Orbiting connection nodes */}
        <div className="absolute inset-0">
          {/* Person nodes */}
          {[0, 72, 144, 216, 288].map((rotation, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-0 h-0"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div
                className="absolute w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center shadow-lg"
                style={{ transform: `translateX(${110 + i * 5}px) translateY(-20px) rotate(-${rotation}deg)` }}
              >
                <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Connection lines SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(24 95% 53%)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(24 95% 53%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(24 95% 53%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {[0, 72, 144, 216, 288].map((rotation, i) => {
            const angle = (rotation * Math.PI) / 180;
            const x2 = 50 + Math.cos(angle - Math.PI / 2) * 35;
            const y2 = 50 + Math.sin(angle - Math.PI / 2) * 35;
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke="url(#lineGradient)"
                strokeWidth="0.5"
                className="animate-pulse-slow"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            );
          })}
        </svg>
      </div>
      
      {/* Data streams */}
      <div className="absolute top-4 right-8 text-[10px] font-mono text-primary/40 space-y-1">
        <div className="animate-pulse" style={{ animationDelay: '0s' }}>context.loading...</div>
        <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>memory.sync</div>
        <div className="animate-pulse" style={{ animationDelay: '1s' }}>brief.ready</div>
      </div>
    </div>
  );
};

export default AIVisualization;
