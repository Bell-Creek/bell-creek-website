import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name ist erforderlich').max(100, 'Name ist zu lang'),
  unternehmen: z.string().trim().max(100, 'Unternehmensname ist zu lang').optional(),
  email: z.string().trim().email('Bitte geben Sie eine gültige E-Mail-Adresse ein').max(255, 'E-Mail ist zu lang'),
  telefon: z.string().trim().max(30, 'Telefonnummer ist zu lang').optional(),
  interesse: z.string().min(1, 'Bitte wählen Sie ein Interesse'),
  nachricht: z.string().trim().max(2000, 'Nachricht ist zu lang').optional(),
});

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    unternehmen: '',
    email: '',
    telefon: '',
    interesse: '',
    nachricht: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, interesse: value }));
    if (errors.interesse) {
      setErrors(prev => ({ ...prev, interesse: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    try {
      // Submit to Netlify Forms
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append('form-name', 'contact');
      formDataEncoded.append('name', formData.name);
      formDataEncoded.append('email', formData.email);
      if (formData.telefon) formDataEncoded.append('telefon', formData.telefon);
      if (formData.unternehmen) formDataEncoded.append('unternehmen', formData.unternehmen);
      formDataEncoded.append('interesse', formData.interesse);
      if (formData.nachricht) formDataEncoded.append('nachricht', formData.nachricht);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataEncoded.toString(),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      setFormData({
        name: '',
        unternehmen: '',
        email: '',
        telefon: '',
        interesse: '',
        nachricht: '',
      });
      toast.success('Nachricht gesendet!', {
        description: 'Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen.',
      });
    } catch (error) {
      toast.error('Fehler beim Senden', {
        description: error instanceof Error ? error.message : 'Bitte versuchen Sie es später erneut.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="kontakt" className="relative py-24 overflow-hidden">
      {/* Hidden form for Netlify Forms detection during build */}
      <form name="contact" netlify hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="telefon" />
        <input type="text" name="unternehmen" />
        <input type="text" name="interesse" />
        <textarea name="nachricht"></textarea>
      </form>

      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Jetzt Ihr <span className="text-gradient">Projekt</span> besprechen
            </h2>
                      </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`h-12 bg-card border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  name="unternehmen"
                  placeholder="Unternehmen"
                  value={formData.unternehmen}
                  onChange={handleChange}
                  className="h-12 bg-card border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="E-Mail *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`h-12 bg-card border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Input
                  name="telefon"
                  type="tel"
                  placeholder="Telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className="h-12 bg-card border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            </div>
            
            <div>
              <Select value={formData.interesse} onValueChange={handleSelectChange}>
                <SelectTrigger className={`h-12 bg-card border-border/50 text-foreground focus:border-primary/50 focus:ring-primary/20 ${errors.interesse ? 'border-destructive' : ''}`}>
                  <SelectValue placeholder="Wofür interessieren Sie sich? *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immobilientransaktion">Immobilientransaktion</SelectItem>
                  <SelectItem value="digitalisierung">Digitalisierung & Automatisierung</SelectItem>
                  <SelectItem value="beides">Sonstiges</SelectItem>
                </SelectContent>
              </Select>
              {errors.interesse && <p className="text-sm text-destructive mt-1">{errors.interesse}</p>}
            </div>
            
            <div>
              <Textarea
                name="nachricht"
                placeholder="Wie können wir helfen?"
                value={formData.nachricht}
                onChange={handleChange}
                rows={4}
                className="bg-card border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 resize-none"
              />
            </div>
            
            <Button type="submit" variant="hero" size="lg" disabled={isLoading} className="w-full group">
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <>
                  Jetzt Projekt besprechen
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
