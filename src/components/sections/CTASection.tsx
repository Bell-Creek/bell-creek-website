import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setEmail('');
    toast.success("You're on the list!", {
      description: "We'll be in touch soon with early access."
    });
  };
  return <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            Join the waitlist
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Future you will thank you for{' '}
            <span className="text-gradient">remembering.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Be first in line when we launch. No spam, just your ticket to never forgetting a face again.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 h-12 bg-card border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20" required />
            <Button type="submit" variant="hero" size="lg" disabled={isLoading} className="group">
              {isLoading ? <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> : <>
                  Join waitlist
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>}
            </Button>
          </form>
          
          <p className="mt-6 text-sm text-muted-foreground">Free early access. No subscription. Opt out anytime. No credit card required.</p>
        </div>
      </div>
    </section>;
};
export default CTASection;