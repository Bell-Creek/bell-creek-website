import React from 'react';

const NeuralNetwork: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
      
      {/* Orbiting nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Center node */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_hsl(5_45%_42%_/_0.6)]" />
        
        {/* Orbiting elements */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] animate-orbit">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/60 rounded-full" />
        </div>
        
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] animate-orbit-reverse">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary/40 rounded-full" />
        </div>
        
        {/* Connection lines */}
        <svg className="absolute -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-20" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(5 45% 42%)" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(5 45% 42%)" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default NeuralNetwork;
