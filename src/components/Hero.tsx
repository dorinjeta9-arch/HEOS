import React from 'react';
import { Language } from '../types';
import { HEOS_IMAGES, UI_TEXTS } from '../data/heosContent';
import { ArrowRight, ShieldCheck, Server, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onExploreServices: () => void;
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onExploreServices,
  onOpenDiagnostic,
}) => {
  const t = UI_TEXTS[currentLang];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Unboxed editorial kicker with subtle typographic separators */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-wide text-blue-400">
            <span>Torrijos & Toledo</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Centro de Datos Propio</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Departamento IT Integral para PYMES</span>
          </div>

          {/* Marquee Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
            {t.heroHeadline}
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            {t.heroSubheadline}
          </p>

          {/* Primary Action Zone */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:translate-y-px whitespace-nowrap"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-all whitespace-nowrap"
            >
              <span>{t.ctaSecondary}</span>
            </button>
          </div>

          {/* Unboxed trust markers with typographic separators */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustBadge1}</span>
            </div>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">/</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustBadge2}</span>
            </div>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">/</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustBadge3}</span>
            </div>
          </div>
        </div>

        {/* Hero Dominant Visual Anchor (16:9 Cinematic proprietary CPD) */}
        <div className="mt-12 sm:mt-16 relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900 shadow-2xl">
          <div className="aspect-video w-full relative">
            <img
              src={HEOS_IMAGES.heroDatacenter}
              alt="Centro de Procesamiento de Datos propio de HEOS con servidores de alta disponibilidad"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            {/* Scrim overlay for high contrast readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            
            {/* Real facility caption inside the media frame */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-blue-400">
                  Infraestructura Tecnológica Propietaria
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-100">
                  Instalaciones de CPD propio en Torrijos (Toledo) con conectividad troncal y seguridad física
                </p>
              </div>
              <div className="text-xs text-slate-300 font-medium whitespace-nowrap bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-700/60 backdrop-blur-sm">
                Soberanía RGPD · Sin intermediarios
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
