import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  delay = 0,
}) => {
  return (
    <div
      className={cn(
        "group relative p-6 rounded-xl card-gradient border-gradient opacity-0 animate-fade-in-up",
        "hover:bg-card-hover transition-all duration-500",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
