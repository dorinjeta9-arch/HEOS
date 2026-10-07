import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { HEOS_SERVICES, UI_TEXTS } from '../data/heosContent';
import {
  Server,
  ShieldCheck,
  Lock,
  Headphones,
  Mail,
  FileText,
  Cpu,
  Sparkles,
  GraduationCap,
  Compass,
  Check,
  ArrowRight,
  ChevronRight,
  X,
} from 'lucide-react';

interface ServicesGridProps {
  currentLang: Language;
  onSelectServiceForDiagnostic: (serviceName: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Server,
  ShieldCheck,
  Lock,
  Headphones,
  Mail,
  FileText,
  Cpu,
  Sparkles,
  GraduationCap,
  Compass,
};

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  currentLang,
  onSelectServiceForDiagnostic,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'infrastructure' | 'security' | 'modernization'>('all');
  const t = UI_TEXTS[currentLang];

  const categoryMap: Record<string, 'infrastructure' | 'security' | 'modernization'> = {
    'servidores-cpd': 'infrastructure',
    'copias-seguridad': 'security',
    'ciberseguridad': 'security',
    'soporte-it': 'security',
    'm365-workspace': 'modernization',
    'digitalizacion': 'modernization',
    'automatizacion': 'modernization',
    'inteligencia-artificial': 'modernization',
    'formacion': 'security',
    'consultoria-it': 'infrastructure',
  };

  const filteredServices = HEOS_SERVICES.filter((svc) => {
    if (activeCategory === 'all') return true;
    return categoryMap[svc.id] === activeCategory;
  });

  return (
    <section id="servicios-section" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              Alcance Técnico Integral
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {t.servicesTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              {t.servicesSubtitle}
            </p>
          </div>

          {/* Interactive filter controls styled as functional buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {currentLang === 'es' ? 'Todos (10)' : currentLang === 'en' ? 'All (10)' : 'Tous (10)'}
            </button>
            <button
              onClick={() => setActiveCategory('infrastructure')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'infrastructure'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {currentLang === 'es' ? 'Infraestructura & CPD' : currentLang === 'en' ? 'Infrastructure & CPD' : 'Infrastructure & CPD'}
            </button>
            <button
              onClick={() => setActiveCategory('security')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'security'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {currentLang === 'es' ? 'Seguridad & Soporte' : currentLang === 'en' ? 'Security & Support' : 'Sécurité & Support'}
            </button>
            <button
              onClick={() => setActiveCategory('modernization')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'modernization'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {currentLang === 'es' ? 'Digitalización & IA' : currentLang === 'en' ? 'Digitalization & AI' : 'Digitalisation & IA'}
            </button>
          </div>
        </div>

        {/* 10 Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Server;
            const isMarquee = service.id === 'servidores-cpd' || service.id === 'ciberseguridad';

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group relative rounded-xl border p-6 transition-all cursor-pointer flex flex-col justify-between ${
                  isMarquee
                    ? 'border-blue-500/30 bg-slate-900/80 hover:border-blue-500/60 shadow-lg shadow-blue-950/20'
                    : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-slate-500 tabular-nums">
                      {service.number}.
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/80 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.name[currentLang]}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.shortDescription[currentLang]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-blue-400 font-semibold group-hover:text-blue-300">
                  <span>
                    {currentLang === 'es' ? 'Ver ficha y alcance' : currentLang === 'en' ? 'View scope & details' : 'Détails & périmètre'}
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal / Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm font-bold text-blue-400">
                Servicio {selectedService.number}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              {selectedService.name[currentLang]}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {selectedService.fullDescription[currentLang]}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {currentLang === 'es' ? 'Alcance técnico incluido:' : currentLang === 'en' ? 'Included technical scope:' : 'Périmètre technique inclus :'}
              </h4>
              <ul className="space-y-2.5">
                {selectedService.scope[currentLang].map((scopeItem, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{scopeItem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                {currentLang === 'es' ? 'Cerrar ventana' : currentLang === 'en' ? 'Close window' : 'Fermer'}
              </button>
              <button
                onClick={() => {
                  const svcName = selectedService.name[currentLang];
                  setSelectedService(null);
                  onSelectServiceForDiagnostic(svcName);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-sm"
              >
                <span>{currentLang === 'es' ? 'Consultar sobre este servicio' : currentLang === 'en' ? 'Inquire about this service' : 'Consulter ce service'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
