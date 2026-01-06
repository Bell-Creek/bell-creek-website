import React from 'react';
import { Building2, Cpu, BarChart3, FileText, Users, Calculator, Handshake, Workflow, Bot, FileCheck, TrendingUp, Lightbulb } from 'lucide-react';

const maklerboutiqueServices = [
  { icon: BarChart3, text: 'Marktwertanalyse und professionelle Bewertung' },
  { icon: FileText, text: 'Erstellung von Exposés und Organisation der Besichtigungen' },
  { icon: Users, text: 'Käufer- und Mieterfindung als Allround-Service' },
  { icon: Calculator, text: 'Erstellung von Finanzmodellen zur wirtschaftlichen Überprüfung' },
  { icon: Handshake, text: 'Begleitung bis zum Notartermin' },
  { icon: Building2, text: 'Rundum-Service aus einer Hand' },
];

const digitalisierungServices = [
  { icon: Workflow, text: 'Automatisierung interner Workflows' },
  { icon: FileText, text: 'Automatisierte Exposé-Erstellung' },
  { icon: Bot, text: 'KI-gestütztes Mieter-Management für Standardanfragen' },
  { icon: FileCheck, text: 'Digitale Rechnungs- und Dokumentenverwaltung' },
  { icon: TrendingUp, text: 'Produktivitätssteigerung und Kostenersparnis' },
  { icon: Lightbulb, text: 'Beratung und Begleitung bei der Implementierung' },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="leistungen" className="relative py-24 overflow-hidden">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Die Brücke zwischen <span className="text-gradient">Tradition</span> und <span className="text-gradient"> Tech </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Von der klassischen Immobilienvermarktung bis zur digitalen Transformation – wir verbinden beide Welten nahtlos.
          </p>
        </div>
        
        {/* Service cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Maklerboutique */}
          <div className="group relative p-8 rounded-2xl card-gradient border-gradient hover:bg-card-hover transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-6">
                <Building2 className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Maklerboutique
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Wir bringen Käufer, Mieter und Eigentümer zusammen.
              </p>
              
              <ul className="space-y-4">
                {maklerboutiqueServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-1.5 rounded-lg bg-primary/10 text-primary mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-foreground/90 text-sm">{service.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          
          {/* Digitalisierung & Automatisierung */}
          <div className="group relative p-8 rounded-2xl card-gradient border-gradient hover:bg-card-hover transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-6">
                <Cpu className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Digitalisierung & Automatisierung
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Unterstützung von Bestandshaltern und Hausverwaltungen beim Aufbau effizienter, digitaler Prozesse.
              </p>
              
              <ul className="space-y-4">
                {digitalisierungServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-1.5 rounded-lg bg-primary/10 text-primary mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-foreground/90 text-sm">{service.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
