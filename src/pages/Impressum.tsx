import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Impressum: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-8">Impressum</h1>

            <div className="space-y-6 text-foreground">
              <div>
                <h2 className="text-2xl font-semibold mb-3">Verantwortlich für diese Website</h2>
                <p>
                  Bell Creek – Aron Penn und Benjamin Eschwe (Gesellschaft in Gründung - noch nicht gegründet)
                </p>
                <p>
                  Pestalozzistr. 28 / Westermühlstr. 13
                </p>
                <p>
                  80469 München
                </p>
                <p>
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Kontakt</h2>
                <p>
                  <strong>E-Mail:</strong>{' '}
                  <a href="mailto:info@bell-creek.com" className="text-primary hover:text-primary/80">
                    info@bell-creek.com
                  </a>
                </p>
                <p>
                  <strong>Telefon:</strong>{' '}
                  <a href="tel:+491799303717" className="text-primary hover:text-primary/80">
                    +49 179 9303717
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Geschäftstätigkeit</h2>
                <p>Beratungsleistungen im Immobilienbereich</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Hinweis zur Gesellschaftsform</h2>
                <p>
                  Bell Creek – Aron Penn und Benjamin Eschwe befindet sich derzeit in der Gründung und ist noch nicht ins
                  Handelsregister eingetragen. Die Website wird von den Gründern Aron Penn und Benjamin Eschwe betrieben. Das
                  Unternehmen wird als Gesellschaft bürgerlichen Rechts (GbR) gegründet.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Haftungsausschluss</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>
                    Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
                    Vollständigkeit der bereitgestellten Informationen.
                  </li>
                  <li>
                    Haftungsansprüche gegen den Autor wegen Schäden materieller oder ideeller Art, welche durch den Zugriff
                    oder Nichtmöglichkeit des Zugriffes auf die bereitgestellten Inhalte verursacht wurden, sind ausgeschlossen.
                  </li>
                  <li>
                    Der Autor behält sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung
                    zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Externe Links</h2>
                <p>
                  Die Website enthält Links zu Websites Dritter. Diese Webseite haftet nicht für die Inhalte, Funktionalität
                  oder Sicherheit der verlinkten Seiten und hat keinen Einfluss auf deren Inhalte. Für die Inhalte verlinkter
                  Seiten sind ausschließlich die jeweiligen Betreiber verantwortlich.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Urheberrecht</h2>
                <p>
                  Alle Inhalte dieser Website (Text, Bilder, Grafiken, Layout) unterliegen dem Urheberrecht. Eine Vervielfältigung,
                  Bearbeitung, Verbreitung oder öffentliche Wiedergabe ist ohne ausdrückliche schriftliche Zustimmung nicht gestattet.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Webhosting</h2>
                <p>Diese Website wird gehostet bei:</p>
                <p>
                  <strong>Netlify Inc.</strong><br />
                  2325 3rd Street, Suite 29<br />
                  San Francisco, CA 94104<br />
                  USA<br />
                  <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                    www.netlify.com
                  </a>
                </p>
              </div>
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

export default Impressum;
