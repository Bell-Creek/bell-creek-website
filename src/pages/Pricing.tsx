import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Star, Shield, Users, Zap, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const tiers = [
    {
      name: 'Rememberer',
      price: 'Free',
      yearlyPrice: 'Free',
      description: 'Perfect for getting started with your personal network',
      popular: false,
      features: [
        { name: '50 contacts', included: true },
        { name: '10 messages/day', included: true },
        { name: '15-second voice notes', included: true },
        { name: '50 AI extractions/month', included: true },
        { name: 'Basic relationship insights', included: true },
        { name: 'Unlimited messages', included: false },
        { name: 'Extended voice notes', included: false },
        { name: 'Priority support', included: false },
      ],
      cta: 'Join waitlist',
      ctaVariant: 'heroOutline' as const,
    },
    {
      name: 'Connector',
      price: '$9.99',
      yearlyPrice: '$99',
      yearlySavings: 'Save 17%',
      description: 'For active networkers who want more from their relationships',
      popular: true,
      features: [
        { name: '500 contacts', included: true },
        { name: 'Unlimited messages/day', included: true },
        { name: '2-minute voice notes', included: true },
        { name: '500 AI extractions/month', included: true },
        { name: 'Advanced relationship insights', included: true },
        { name: 'Quick Brief feature', included: true },
        { name: 'Priority support', included: false },
        { name: 'API access', included: false },
      ],
      cta: 'Join waitlist',
      ctaVariant: 'hero' as const,
    },
    {
      name: 'Architect',
      price: '$29.99',
      yearlyPrice: '$299',
      yearlySavings: 'Save 17%',
      description: 'Unlimited power for relationship architects',
      popular: false,
      features: [
        { name: 'Unlimited contacts', included: true },
        { name: 'Unlimited messages/day', included: true },
        { name: 'Unlimited voice notes', included: true },
        { name: 'Unlimited AI extractions', included: true },
        { name: 'Advanced relationship insights', included: true },
        { name: 'Quick Brief feature', included: true },
        { name: 'Priority support', included: true },
        { name: 'API access', included: true },
      ],
      cta: 'Join waitlist',
      ctaVariant: 'heroOutline' as const,
    },
  ];

  const comparisonFeatures = [
    {
      category: 'Contacts & Storage',
      features: [
        { name: 'Contact limit', rememberer: '50', connector: '500', architect: 'Unlimited' },
        { name: 'Notes per contact', rememberer: '10', connector: '100', architect: 'Unlimited' },
        { name: 'File attachments', rememberer: '—', connector: '5 per contact', architect: 'Unlimited' },
      ],
    },
    {
      category: 'Communication',
      features: [
        { name: 'Messages per day', rememberer: '10', connector: 'Unlimited', architect: 'Unlimited' },
        { name: 'Voice note length', rememberer: '15 sec', connector: '2 min', architect: 'Unlimited' },
        { name: 'Voice transcription', rememberer: '✓', connector: '✓', architect: '✓' },
      ],
    },
    {
      category: 'AI Features',
      features: [
        { name: 'AI extractions/month', rememberer: '50', connector: '500', architect: 'Unlimited' },
        { name: 'Quick Brief', rememberer: '—', connector: '✓', architect: '✓' },
        { name: 'Network memory search', rememberer: 'Basic', connector: 'Advanced', architect: 'Advanced + API' },
        { name: 'Relationship insights', rememberer: 'Basic', connector: 'Advanced', architect: 'Advanced' },
      ],
    },
    {
      category: 'Support',
      features: [
        { name: 'Email support', rememberer: '✓', connector: '✓', architect: '✓' },
        { name: 'Priority support', rememberer: '—', connector: '—', architect: '✓' },
        { name: 'API access', rememberer: '—', connector: '—', architect: '✓' },
      ],
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, you\'ll keep your current features until the end of your billing period.',
    },
    {
      question: 'What happens if I hit my contact limit?',
      answer: 'When you reach your contact limit, you can still access and edit existing contacts. To add new contacts, you\'ll need to either remove some contacts or upgrade to a higher tier with more capacity.',
    },
    {
      question: 'What are AI extractions?',
      answer: 'AI extractions are when CoLinked automatically pulls insights from your voice notes and messages—things like important dates, relationship details, follow-ups, and conversation topics. Each extraction counts as one use.',
    },
    {
      question: 'Is my data private and secure?',
      answer: 'Absolutely. Your relationship data is encrypted end-to-end and never shared with third parties. We take privacy seriously—your personal network stays personal.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 14-day money-back guarantee for all paid plans. If CoLinked isn\'t right for you, just reach out and we\'ll process your refund, no questions asked.',
    },
    {
      question: 'Will my data be used to train AI models?',
      answer: 'Never. Your conversations, contacts, and relationship data are never used to train AI models. Your information is used solely to power your personal CoLinked experience.',
    },
  ];

  const scrollToWaitlist = () => {
    const ctaSection = document.getElementById('pricing-cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-[0_0_20px_hsl(5_45%_42%_/_0.3)]">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-semibold text-foreground">CoLinked</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Button variant="hero" size="sm" onClick={scrollToWaitlist}>
                Get early access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="container px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Relationships,{' '}
              <span className="text-gradient">Intelligently Organized</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the plan that fits how you nurture your network
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>End-to-end encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>1,000+ on waitlist</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>14-day money back</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="pb-8">
        <div className="container px-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 p-1 rounded-full bg-card border border-border">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  billingPeriod === 'yearly'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Yearly
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-6 transition-all duration-300 ${
                  tier.popular
                    ? 'bg-card border-2 border-primary shadow-[0_0_40px_-10px_hsl(5_45%_42%_/_0.3)] scale-105 z-10'
                    : 'bg-card border border-border hover:border-primary/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      {billingPeriod === 'monthly' ? tier.price : tier.yearlyPrice}
                    </span>
                    {tier.price !== 'Free' && (
                      <span className="text-muted-foreground">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    )}
                  </div>
                  {tier.yearlySavings && billingPeriod === 'yearly' && (
                    <p className="text-sm text-primary mt-1">{tier.yearlySavings}</p>
                  )}
                </div>

                <Button
                  variant={tier.ctaVariant}
                  className="w-full mb-6"
                  onClick={scrollToWaitlist}
                >
                  {tier.cta}
                </Button>

                <div className="space-y-3">
                  {tier.features.map((feature) => (
                    <div
                      key={feature.name}
                      className={`flex items-center gap-3 text-sm ${
                        feature.included ? 'text-foreground' : 'text-muted-foreground/50'
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${
                          feature.included ? 'text-primary' : 'text-muted-foreground/30'
                        }`}
                      />
                      <span>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
            
            <Accordion type="multiple" className="space-y-4">
              {comparisonFeatures.map((category, index) => (
                <AccordionItem
                  key={category.category}
                  value={`item-${index}`}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-card-hover">
                    <span className="font-semibold">{category.category}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 text-sm font-medium text-muted-foreground">Feature</th>
                            <th className="text-center py-3 text-sm font-medium text-muted-foreground w-28">Rememberer</th>
                            <th className="text-center py-3 text-sm font-medium text-primary w-28">Connector</th>
                            <th className="text-center py-3 text-sm font-medium text-muted-foreground w-28">Architect</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.features.map((feature) => (
                            <tr key={feature.name} className="border-b border-border/50 last:border-0">
                              <td className="py-3 text-sm">{feature.name}</td>
                              <td className="py-3 text-sm text-center text-muted-foreground">{feature.rememberer}</td>
                              <td className="py-3 text-sm text-center font-medium">{feature.connector}</td>
                              <td className="py-3 text-sm text-center text-muted-foreground">{feature.architect}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card/50">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-card-hover text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="pricing-cta" className="py-20">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to remember everyone who matters?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join the waitlist and be the first to experience CoLinked
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#cta">
                <Button variant="heroOutline" size="lg">
                  Start Free
                </Button>
              </Link>
              <Link to="/#cta">
                <Button variant="hero" size="lg">
                  Try Connector
                </Button>
              </Link>
              <Link to="/#cta">
                <Button variant="heroOutline" size="lg">
                  Try Architect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">C</span>
              </div>
              <span className="font-medium text-sm text-foreground">CoLinked</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © 2024 CoLinked. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Pricing;
