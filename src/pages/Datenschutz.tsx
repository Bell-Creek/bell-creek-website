import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Datenschutz: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/bell-creek-logo.png"
                alt="Bell Creek Partners"
                className="h-8 w-auto object-contain"
              />
              <span className="font-semibold text-foreground">Bell Creek Partners</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Button variant="hero" size="sm" asChild>
                <a href="/#kontakt">Kontakt</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-16">
        <div className="container px-6 max-w-4xl">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher für die Datenverarbeitung</h2>
                <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                <p>
                  <strong>Bell Creek – Aron Penn und Benjamin Eschwe (Gesellschaft in Gründung - noch nicht gegründet)</strong>
                </p>
                <p>
                  Pestalozzistr. 28 / Westermühlstr. 13<br />
                  80469 München<br />
                  Deutschland
                </p>
                <p>
                  <strong>E-Mail:</strong>{' '}
                  <a href="mailto:info@bell-creek.com" className="text-primary hover:text-primary/80">
                    info@bell-creek.com
                  </a>
                  <br />
                  <strong>Telefon:</strong>{' '}
                  <a href="tel:+491799303717" className="text-primary hover:text-primary/80">
                    +49 179 9303717
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Hinweis zur Gesellschaftsform:</strong> Bell Creek – Aron Penn und Benjamin Eschwe befindet sich derzeit
                  in der Gründung und ist noch nicht ins Handelsregister eingetragen. Diese Datenschutzerklärung wird bereits während
                  der Gründungsphase bereitgestellt und gilt ab dem Zeitpunkt der Veröffentlichung dieser Website. Nach vollständiger
                  Gründung der GbR werden die Angaben entsprechend aktualisiert.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Informationen zur Datenverarbeitung</h2>
                <p>
                  Wir verarbeiten personenbezogene Daten unserer Website-Besucher und Kontaktpersonen zu den in dieser
                  Datenschutzerklärung beschriebenen Zwecken und auf Basis der dort angegebenen Rechtsgrundlagen. Die Verarbeitung
                  erfolgt dabei stets transparent, fair und unter strikter Einhaltung der geltenden Datenschutzbestimmungen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Erhebung und Verarbeitung von Daten beim Website-Besuch</h2>
                <h3 className="text-xl font-semibold mb-3 mt-4">3.1 Server-Log-Daten</h3>
                <p>Beim Besuch unserer Website werden durch Ihren Webbrowser automatisch technische Daten an unsere Hosting-Server bei Netlify übertragen. Diese Daten werden in Server-Log-Dateien gespeichert:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name der angeforderten Datei/Seite</li>
                  <li>Menge der übertragenen Daten (in Bytes)</li>
                  <li>Webbrowser und Betriebssystem des Zugreifers</li>
                  <li>Referrer-URL (die zuvor besuchte Seite)</li>
                  <li>HTTP-Statuscode</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse: Sicherstellung der Verfügbarkeit und
                  Sicherheit der Website, technische Fehleranalyse)
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Speicherdauer:</strong> Die Log-Daten werden von Netlify regelmäßig automatisch gelöscht und in der Regel nicht
                  länger als 30 Tage gespeichert.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Kontaktformular</h2>
                <h3 className="text-xl font-semibold mb-3 mt-4">4.1 Datenerhebung über das Kontaktformular</h3>
                <p>Wenn Sie unser Kontaktformular ausfüllen, erheben wir folgende personenbezogene Daten:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Name</strong> (Pflichtfeld)</li>
                  <li><strong>E-Mail-Adresse</strong> (Pflichtfeld)</li>
                  <li>Telefonnummer (optional)</li>
                  <li>Unternehmensname (optional)</li>
                </ul>
                <p className="mt-3">Zusätzlich werden folgende Daten automatisch erfasst:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Zeitpunkt der Formularübermittlung</li>
                  <li>IP-Adresse des Absenders</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Direkte Kontaktaufnahme per E-Mail</h2>
                <p>
                  Wenn Sie uns direkt per E-Mail kontaktieren, verarbeiten wir die in Ihrer E-Mail enthaltenen personenbezogenen Daten
                  ausschließlich zur Bearbeitung Ihrer Anfrage.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b oder lit. f DSGVO
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Keine Cookies und kein Tracking</h2>
                <p>
                  Die Website von Bell Creek nutzt derzeit <strong>keine Cookies</strong>, keine Tracking-Technologien (z.B. Google Analytics,
                  Facebook Pixel) und keine Heatmap-Tools.
                </p>
                <p>
                  Es werden daher über unsere Website keine optionalen Cookies oder Tracking-Pixel von Drittanbietern gesetzt. Sollten wir
                  diese Technologien in Zukunft einsetzen, werden wir diese Datenschutzerklärung entsprechend aktualisieren und ein
                  Cookie-Banner anzeigen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Webhosting durch Netlify</h2>
                <p>
                  Diese Website wird gehostet und betrieben von Netlify Inc., 2325 3rd Street, Suite 29, San Francisco, CA 94104, USA.
                </p>
                <p>
                  Netlify verarbeitet Website-Daten im Rahmen der Hosting-Dienste. Die Daten werden in den Vereinigten Staaten gespeichert
                  und verarbeitet.
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  Netlify nutzt zur Gewährleistung der DSGVO-Compliance das EU-US Data Privacy Framework und Standardvertragsklauseln nach
                  Art. 46 DSGVO.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>DPA von Netlify:</strong>{' '}
                  <a href="https://www.netlify.com/pdf/netlify-dpa.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                    https://www.netlify.com/pdf/netlify-dpa.pdf
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Betroffenenrechte</h2>
                <p>Sie haben gegenüber Bell Creek – Aron Penn und Benjamin Eschwe folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, auf Anfrage eine Auskunft über die Sie betreffenden personenbezogenen Daten zu erhalten.</li>
                  <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, unrichtige Daten berichtigen zu lassen.</li>
                  <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben unter bestimmten Voraussetzungen das Recht, die Löschung Ihrer Daten zu verlangen.</li>
                  <li><strong>Recht auf Datenportabilität (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in maschinenlesbarer Form zu erhalten.</li>
                  <li><strong>Recht auf Widerspruch (Art. 21 DSGVO):</strong> Sie haben das Recht, gegen die Verarbeitung Ihrer Daten Widerspruch einzulegen.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Beschwerderecht</h2>
                <p>
                  Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für Bayern zuständige Aufsichtsbehörde ist:
                </p>
                <p>
                  <strong>Bayerisches Landesamt für Datenschutz (BayLfD)</strong><br />
                  Wagmüllerstr. 5<br />
                  80538 München<br />
                  Tel.:{' '}
                  <a href="tel:+498921267200" className="text-primary hover:text-primary/80">
                    +49 89 212672-0
                  </a>
                  <br />
                  E-Mail:{' '}
                  <a href="mailto:poststelle@by.bfdi.bund.de" className="text-primary hover:text-primary/80">
                    poststelle@by.bfdi.bund.de
                  </a>
                  <br />
                  Website:{' '}
                  <a href="https://www.bfdi.bund.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                    https://www.bfdi.bund.de/
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Sicherheit der Daten</h2>
                <p>Wir treffen technische und organisatorische Maßnahmen zur Sicherung Ihrer personenbezogenen Daten:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Verschlüsselte Übertragung (SSL/TLS) bei sensiblen Datenübermittlungen</li>
                  <li>Beschränkter Zugriff auf personenbezogene Daten</li>
                  <li>Regelmäßige Überprüfung unserer Sicherheitsmaßnahmen</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Kontakt für Datenschutzfragen</h2>
                <p>Für Fragen zum Datenschutz oder zur Ausübung Ihrer Betroffenenrechte kontaktieren Sie bitte:</p>
                <p>
                  <strong>Bell Creek – Aron Penn und Benjamin Eschwe</strong><br />
                  E-Mail:{' '}
                  <a href="mailto:info@bell-creek.com" className="text-primary hover:text-primary/80">
                    info@bell-creek.com
                  </a>
                  <br />
                  Telefon:{' '}
                  <a href="tel:+491799303717" className="text-primary hover:text-primary/80">
                    +49 179 9303717
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Zuletzt aktualisiert:</strong> Januar 2026
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img
                src="/bell-creek-logo.png"
                alt="Bell Creek Partners"
                className="h-8 w-auto object-contain"
              />
              <span className="font-semibold text-foreground">Bell Creek Partners</span>
            </div>

            <nav className="flex items-center gap-8 text-sm text-muted-foreground">
              <Link to="/#leistungen" className="hover:text-foreground transition-colors">Leistungen</Link>
              <Link to="/#warum-wir" className="hover:text-foreground transition-colors">Warum wir</Link>
              <Link to="/#kontakt" className="hover:text-foreground transition-colors">Kontakt</Link>
              <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
            </nav>

            <p className="text-sm text-muted-foreground">
              © 2026 Bell Creek Partners. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Datenschutz;
