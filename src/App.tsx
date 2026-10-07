import React, { useState } from 'react';
import { Language, ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ServicesGrid } from './components/ServicesGrid';
import { CompetitiveAdvantages } from './components/CompetitiveAdvantages';
import { CpdShowcase } from './components/CpdShowcase';
import { TargetSectors } from './components/TargetSectors';
import { AboutSection } from './components/AboutSection';
import { ContactDiagnostic } from './components/ContactDiagnostic';
import { SitemapViewer } from './components/SitemapViewer';
import { TranslationMatrix } from './components/TranslationMatrix';
import { ChatbotWidget } from './components/ChatbotWidget';
import { Footer } from './components/Footer';
import { X, CheckCircle2 } from 'lucide-react';
import { HEOS_SERVICES, UI_TEXTS } from './data/heosContent';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('es');
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isDiagnosticModalOpen, setIsDiagnosticModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [preselectedSector, setPreselectedSector] = useState<string>('');

  const t = UI_TEXTS[currentLang];

  const handleOpenDiagnostic = (serviceName?: string, sectorName?: string) => {
    if (serviceName) setPreselectedService(serviceName);
    if (sectorName) setPreselectedSector(sectorName);
    setIsDiagnosticModalOpen(true);
  };

  const handleNavigateTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeTab={activeTab}
        onTabChange={handleNavigateTab}
        onOpenDiagnostic={() => handleOpenDiagnostic()}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              currentLang={currentLang}
              onExploreServices={() => {
                const el = document.getElementById('servicios-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('services');
              }}
              onOpenDiagnostic={() => handleOpenDiagnostic()}
            />
            <ProblemSolution
              currentLang={currentLang}
              onOpenDiagnostic={() => handleOpenDiagnostic()}
            />
            <ServicesGrid
              currentLang={currentLang}
              onSelectServiceForDiagnostic={(svc) => handleOpenDiagnostic(svc)}
            />
            <CompetitiveAdvantages currentLang={currentLang} />
            <CpdShowcase
              currentLang={currentLang}
              onOpenDiagnostic={() => handleOpenDiagnostic('Servidores y CPD Propio')}
            />
            <TargetSectors
              currentLang={currentLang}
              onSelectSector={(sec) => handleOpenDiagnostic(undefined, sec)}
            />
            <AboutSection
              currentLang={currentLang}
              onOpenDiagnostic={() => handleOpenDiagnostic()}
            />
            <ContactDiagnostic
              currentLang={currentLang}
              preselectedService={preselectedService}
              preselectedSector={preselectedSector}
              onOpenChat={() => setIsChatbotOpen(true)}
            />
          </>
        )}

        {activeTab === 'services' && (
          <div className="pt-6">
            <ServicesGrid
              currentLang={currentLang}
              onSelectServiceForDiagnostic={(svc) => handleOpenDiagnostic(svc)}
            />
            <ContactDiagnostic
              currentLang={currentLang}
              preselectedService={preselectedService}
              onOpenChat={() => setIsChatbotOpen(true)}
            />
          </div>
        )}

        {activeTab === 'cpd' && (
          <div className="pt-6">
            <CpdShowcase
              currentLang={currentLang}
              onOpenDiagnostic={() => handleOpenDiagnostic('Servidores y CPD Propio')}
            />
            <CompetitiveAdvantages currentLang={currentLang} />
            <ContactDiagnostic
              currentLang={currentLang}
              preselectedService="Servidores y CPD Propio"
              onOpenChat={() => setIsChatbotOpen(true)}
            />
          </div>
        )}

        {activeTab === 'sectors' && (
          <div className="pt-6">
            <TargetSectors
              currentLang={currentLang}
              onSelectSector={(sec) => handleOpenDiagnostic(undefined, sec)}
            />
            <ContactDiagnostic
              currentLang={currentLang}
              preselectedSector={preselectedSector}
              onOpenChat={() => setIsChatbotOpen(true)}
            />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-6">
            <AboutSection
              currentLang={currentLang}
              onOpenDiagnostic={() => handleOpenDiagnostic()}
            />
            <CompetitiveAdvantages currentLang={currentLang} />
            <ContactDiagnostic
              currentLang={currentLang}
              onOpenChat={() => setIsChatbotOpen(true)}
            />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-6">
            <ContactDiagnostic
              currentLang={currentLang}
              preselectedService={preselectedService}
              preselectedSector={preselectedSector}
              onOpenChat={() => setIsChatbotOpen(true)}
            />
          </div>
        )}

        {activeTab === 'sitemap' && (
          <div className="pt-6">
            <SitemapViewer
              currentLang={currentLang}
              onNavigateTab={handleNavigateTab}
            />
          </div>
        )}

        {activeTab === 'i18n-matrix' && (
          <div className="pt-6">
            <TranslationMatrix
              currentLang={currentLang}
              onSetGlobalLang={setCurrentLang}
            />
          </div>
        )}
      </main>

      {/* Floating Chatbot Widget with Zero-Hallucinations Grounding */}
      <ChatbotWidget
        currentLang={currentLang}
        onOpenDiagnosticModal={() => handleOpenDiagnostic()}
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
      />

      {/* Corporate B2B Footer */}
      <Footer
        currentLang={currentLang}
        onNavigateTab={handleNavigateTab}
        onOpenDiagnostic={() => handleOpenDiagnostic()}
      />

      {/* Quick Diagnostic Modal */}
      {isDiagnosticModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsDiagnosticModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Sin Coste ni Compromiso</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              {t.diagnosticTitle}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {t.diagnosticSubtitle}
            </p>

            <div className="space-y-4">
              <p className="text-xs text-slate-300">
                Puedes rellenar el formulario completo en la sección de contacto o hablar de inmediato con nuestros técnicos por WhatsApp Business para concertar una fecha:
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://wa.me/34600000000?text=Hola%20HEOS,%20quiero%20solicitar%20un%20diagnóstico%20tecnológico%20gratuito%20para%20mi%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold text-center transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Pedir cita por WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setIsDiagnosticModalOpen(false);
                    const el = document.getElementById('contacto-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setActiveTab('contact');
                    }
                  }}
                  className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold text-center transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Ir al formulario web</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
