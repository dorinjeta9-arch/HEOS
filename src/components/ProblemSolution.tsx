import React from 'react';
import { Language } from '../types';
import { UI_TEXTS } from '../data/heosContent';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  currentLang: Language;
  onOpenDiagnostic: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({
  currentLang,
  onOpenDiagnostic,
}) => {
  const t = UI_TEXTS[currentLang];

  return (
    <section className="py-20 border-t border-slate-900 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            El dilema de la PYME frente a la tecnología
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            ¿Por qué externalizar tu departamento IT con HEOS?
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            La mayoría de las pequeñas y medianas empresas no necesitan contratar un equipo interno de cinco ingenieros, pero tampoco pueden permitirse apagafuegos improvisados cuando se cae un servidor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Problem Card */}
          <div className="rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-950/10 to-slate-950 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {t.problemTitle}
                  </h3>
                  <p className="text-xs text-red-400/80">
                    {t.problemSubtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {t.problemItems.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-red-500/30 pl-4 space-y-1">
                    <h4 className="text-sm font-semibold text-slate-200">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-900 text-xs text-slate-500">
              Consecuencia directa: Paradas operativas no planificadas, sobrecostes y estrés continuo para la gerencia.
            </div>
          </div>

          {/* Solution Card (HEOS) */}
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-950/20 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {t.solutionTitle}
                  </h3>
                  <p className="text-xs text-blue-400">
                    {t.solutionSubtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {t.solutionItems.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-blue-500/40 pl-4 space-y-1">
                    <h4 className="text-sm font-semibold text-slate-100">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Resultado: Seguridad, previsibilidad y foco 100% en tu negocio.
              </span>
              <button
                onClick={onOpenDiagnostic}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Solicitar diagnóstico previo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
