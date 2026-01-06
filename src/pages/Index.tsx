import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import VoiceInputSection from '@/components/sections/VoiceInputSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import QuickBriefSection from '@/components/sections/QuickBriefSection';
import ChatDemoSection from '@/components/sections/ChatDemoSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <VoiceInputSection />
      <UseCasesSection />
      <HowItWorksSection />
      <QuickBriefSection />
      <ChatDemoSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
