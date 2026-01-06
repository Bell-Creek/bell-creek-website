import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { Clock, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Always know the context",
    description: "Automatic timelines of every interaction, key facts, and open loops per person. Walk into any conversation fully informed.",
  },
  {
    icon: Zap,
    title: "Prepare in seconds",
    description: "AI-generated briefings before calls and meetings. Get the signal without the noise—just what matters.",
  },
  {
    icon: Users,
    title: "Think in people, not spreadsheets",
    description: "Replace messy CRMs with a system built for humans. Your network, organized the way your brain actually works.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your memory, <span className="text-gradient">supercharged</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for ambitious professionals who meet a lot of people and refuse to let relationships slip through the cracks.
          </p>
        </div>
        
        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
