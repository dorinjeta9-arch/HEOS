import React from 'react';
import { Language, ActiveTab } from '../types';
import { UI_TEXTS } from '../data/heosContent';
import { Globe, ArrowRight, Menu, X, Shield, Server, Compass, FileCode } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
  onOpenDiagnostic,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const t = UI_TEXTS[currentLang];

  const navLinks = [
    { id: 'home' as ActiveTab, label: t.navHome },
    { id: 'services' as ActiveTab, label: t.navServices },
    { id: 'cpd' as ActiveTab, label: t.navCpd },
    { id: 'sectors' as ActiveTab, label: t.navSectors },
    { id: 'about' as ActiveTab, label: t.navAbout },
    { id: 'sitemap' as ActiveTab, label: t.navSitemap },
    { id: 'i18n-matrix' as ActiveTab, label: t.navMatrix },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Zone - Single clean wordmark in display face */}
        <div className="flex items-center">
          <button
            onClick={() => {
              onTabChange('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-black tracking-wider text-lg shadow-sm group-hover:bg-blue-500 transition-colors">
              H
            </div>
            <span className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
              HEOS
            </span>
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onTabChange(link.id);
                  if (link.id === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`relative py-1 transition-colors whitespace-nowrap hover:text-white ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions (Language Selector + Primary CTA) */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs font-semibold">
            {(['es', 'en', 'fr'] as Language[]).map((lng) => (
              <button
                key={lng}
                onClick={() => onLanguageChange(lng)}
                className={`px-2.5 py-1.5 rounded-md uppercase transition-colors ${
                  currentLang === lng
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title={`Cambiar a ${lng.toUpperCase()}`}
              >
                {lng}
              </button>
            ))}
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenDiagnostic}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap shadow-sm active:translate-y-px"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onTabChange(link.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === link.id
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-400 hover:bg-slate-900/50 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              {t.ctaPrimary}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
