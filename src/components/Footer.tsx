import React from 'react';
import { Language, ActiveTab } from '../types';
import { HEOS_CONTACT_INFO, UI_TEXTS } from '../data/heosContent';
import { MapPin, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigateTab: (tab: ActiveTab) => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigateTab,
  onOpenDiagnostic,
}) => {
  const t = UI_TEXTS[currentLang];

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-sm">
                H
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                HEOS
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              {t.brandTagline}. Un único proveedor tecnológico con infraestructura profesional, Centro de Datos (CPD) propio, ciberseguridad, copias de seguridad y digitalización.
            </p>

            <div className="pt-2 space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{HEOS_CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${HEOS_CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {HEOS_CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${HEOS_CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {HEOS_CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación Corporativa
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateTab('home')}
                  className="hover:text-white transition-colors"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('services')}
                  className="hover:text-white transition-colors"
                >
                  {t.navServices}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('cpd')}
                  className="hover:text-white transition-colors"
                >
                  {t.navCpd}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('sectors')}
                  className="hover:text-white transition-colors"
                >
                  {t.navSectors}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('about')}
                  className="hover:text-white transition-colors"
                >
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('sitemap')}
                  className="hover:text-white transition-colors text-blue-400"
                >
                  {t.navSitemap}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('i18n-matrix')}
                  className="hover:text-white transition-colors text-blue-400"
                >
                  {t.navMatrix}
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Servicios Destacados
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>01. Servidores y CPD Propio</li>
              <li>02. Copias de Seguridad (Backup & DR)</li>
              <li>03. Ciberseguridad Gestionada & MFA</li>
              <li>04. Soporte IT Remoto y Presencial</li>
              <li>05. Microsoft 365 & Google Workspace</li>
              <li>06. Digitalización y Eliminación del Papel</li>
              <li>07. Automatización de Procesos</li>
              <li>08. Inteligencia Artificial para PYMES</li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenDiagnostic}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600/20 text-blue-400 hover:text-white hover:bg-blue-600 transition-colors font-semibold"
              >
                <span>Solicitar diagnóstico gratuito</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} HEOS. {t.footerRights}</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Aviso Legal</span>
            <span aria-hidden="true">·</span>
            <span>Política de Privacidad RGPD</span>
            <span aria-hidden="true">·</span>
            <span>Política de Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
