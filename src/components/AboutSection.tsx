import React from 'react';
import { Language } from '../types';
import { HEOS_IMAGES, HEOS_CONTACT_INFO, UI_TEXTS } from '../data/heosContent';
import { ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  onOpenDiagnostic: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onOpenDiagnostic }) => {
  const t = UI_TEXTS[currentLang];

  return (
    <section className="py-20 bg-slate-900/40 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
              <img
                src={HEOS_IMAGES.technician}
                alt="Ingeniero de soporte de HEOS en Torrijos y Toledo"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-blue-400">
                  Cercanía y Compromiso
                </span>
                <p className="text-sm font-semibold">
                  Técnicos cualificados con presencia física en Torrijos, Toledo y comarca
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{HEOS_CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{HEOS_CONTACT_INFO.phone} (Centralita)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{HEOS_CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Sobre Nosotros · ADN HEOS
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                El departamento IT externo de confianza para tu empresa
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              En <strong className="text-white">HEOS</strong> nacimos con una convicción clara: las pequeñas y medianas empresas merecen la misma calidad de infraestructura tecnológica, seguridad y respaldo que las grandes corporaciones, pero sin asumir estructuras de costes desproporcionadas ni lidiar con la frialdad de multinacionales lejanas.
            </p>

            <blockquote className="border-l-2 border-blue-500 pl-4 py-1 text-slate-200 italic font-medium">
              “Nos encargamos de la tecnología de tu empresa para que tú puedas dedicarte a tu negocio.”
            </blockquote>

            <p className="text-sm text-slate-400 leading-relaxed">
              Disponer de nuestro propio <strong className="text-slate-200">Centro de Procesamiento de Datos (CPD)</strong> y de un equipo multidisciplinar con base en Torrijos (Toledo) nos permite ofrecer una respuesta inmediata tanto remota como presencial. Gestionamos desde el mantenimiento diario de equipos hasta la implantación de ciberseguridad avanzada, copias de seguridad inmutables y asistentes de Inteligencia Artificial para el negocio real.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4 space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Soberanía Española</span>
                </div>
                <p className="text-xs text-slate-400">
                  Tus servidores y copias permanecen bajo custodia nacional y cumplimiento riguroso del RGPD.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4 space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Coste Predecible</span>
                </div>
                <p className="text-xs text-slate-400">
                  Una cuota mensual clara y transparente que incluye mantenimiento preventivo y correctivo.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenDiagnostic}
                className="px-6 py-3 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-sm"
              >
                {t.ctaDiagnostic}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
