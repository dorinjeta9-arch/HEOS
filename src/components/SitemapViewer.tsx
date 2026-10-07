import React from 'react';
import { Language, ActiveTab } from '../types';
import { HEOS_SITEMAP } from '../data/heosContent';
import { Network, FolderTree, ArrowRight, Compass, Layers, CheckCircle2 } from 'lucide-react';

interface SitemapViewerProps {
  currentLang: Language;
  onNavigateTab: (tab: ActiveTab) => void;
}

export const SitemapViewer: React.FC<SitemapViewerProps> = ({ currentLang, onNavigateTab }) => {
  const rootNode = HEOS_SITEMAP[0];

  const pathToTabMap: Record<string, ActiveTab> = {
    '/': 'home',
    '/servicios': 'services',
    '/cpd-propio': 'cpd',
    '/sectores': 'sectors',
    '/sobre-heos': 'about',
    '/contacto': 'contact',
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            Arquitectura de Información B2B
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Mapa del Sitio y Estructura Jerárquica de HEOS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Diseño arquitectónico orientado a la conversión B2B, la claridad de servicio y la transmisión de solidez tecnológica.
          </p>
        </div>

        {/* Tree Container */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10 shadow-2xl space-y-10">
          {/* Level 1: Root Node */}
          <div className="rounded-xl border border-blue-500/40 bg-blue-950/20 p-6 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-blue-500/20">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                  /
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wide">
                    Nivel 1 · Nodo Principal (Raíz)
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {rootNode.title[currentLang]}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => onNavigateTab('home')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors self-start sm:self-auto"
              >
                <span>Navegar a esta página</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div>
                <strong className="text-slate-400 block mb-1">Objetivo de conversión:</strong>
                <p className="leading-relaxed">{rootNode.purpose[currentLang]}</p>
              </div>
              <div>
                <strong className="text-slate-400 block mb-1">Audiencia objetivo:</strong>
                <p className="leading-relaxed">{rootNode.targetAudience[currentLang]}</p>
              </div>
            </div>
          </div>

          {/* Level 2 Subpages Grid */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider pl-2">
              <FolderTree className="w-4 h-4 text-blue-400" />
              <span>Nivel 2 · Páginas de Especialización y Conversión</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rootNode.subpages?.map((subpage, idx) => {
                const targetTab = pathToTabMap[subpage.path] || 'home';

                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs text-blue-400 font-semibold">
                          {subpage.path}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase">
                          L2 Page
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white mb-2">
                        {subpage.title[currentLang]}
                      </h4>

                      <div className="space-y-3 text-xs text-slate-400">
                        <div>
                          <strong className="text-slate-300 block mb-0.5">Propósito:</strong>
                          <p className="leading-relaxed text-slate-300">{subpage.purpose[currentLang]}</p>
                        </div>
                        <div>
                          <strong className="text-slate-300 block mb-0.5">Público:</strong>
                          <p className="leading-relaxed">{subpage.targetAudience[currentLang]}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80">
                      <button
                        onClick={() => onNavigateTab(targetTab)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-blue-400 hover:text-white hover:bg-blue-600/20 rounded-md transition-colors border border-blue-500/20"
                      >
                        <span>Explorar sección</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical specification footer */}
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <strong className="text-slate-200">Estructura SEO y Canonical URLs:</strong> Arquitectura plana de 2 niveles para máxima indexación, rastreabilidad y tiempos de respuesta ultra-bajos.
            </div>
            <span className="text-emerald-400 font-semibold whitespace-nowrap">
              HTTP/3 · SSL TLS 1.3 · Fast SLA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
