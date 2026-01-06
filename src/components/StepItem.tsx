import React from 'react';
import { cn } from '@/lib/utils';

interface StepItemProps {
  number: number;
  title: string;
  isLast?: boolean;
}

const StepItem: React.FC<StepItemProps> = ({ number, title, isLast = false }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
        <span className="text-primary font-semibold text-sm">{number}</span>
      </div>
      <span className="text-foreground font-medium">{title}</span>
      {!isLast && (
        <div className="hidden md:block flex-1 h-px neural-line mx-4" />
      )}
    </div>
  );
};

export default StepItem;
