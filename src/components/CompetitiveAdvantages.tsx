import React from 'react';
import { Language } from '../types';
import { HEOS_ADVANTAGES, HEOS_IMAGES, UI_TEXTS } from '../data/heosContent';
import { Check, Shield, Server, Users } from 'lucide-react';

interface CompetitiveAdvantagesProps {
  currentLang: Language;
}

export const CompetitiveAdvantages: React.FC<CompetitiveAdvantagesProps> = ({ currentLang }) => {
  const t = UI_TEXTS[currentLang];

  const imageMap = {
    datacenter: HEOS_IMAGES.heroDatacenter,
    servers: HEOS_IMAGES.servers,
    technician: HEOS_IMAGES.technician,
  };

  return (
    <section className="py-20 bg-slate-900/30 border-y border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            Diferenciación Real B2B
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.advantagesTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            {t.advantagesSubtitle}
          </p>
        </div>

        <div className="space-y-16">
          {HEOS_ADVANTAGES.map((adv, idx) => {
            const isReversed = idx % 2 !== 0;
            const imgSrc = adv.imageKey ? imageMap[adv.imageKey] : HEOS_IMAGES.servers;

            return (
              <div
                key={adv.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-blue-400 tabular-nums">
                      {adv.number}.
                    </span>
                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      Pilar Competitivo
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {adv.title[currentLang]}
                  </h3>

                  <p className="text-sm font-semibold text-blue-300">
                    {adv.subtitle[currentLang]}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {adv.description[currentLang]}
                  </p>

                  <div className="pt-3">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {adv.features[currentLang].map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Proof Adjacent Asset */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
                    <div className="aspect-4/3 w-full">
                      <img
                        src={imgSrc}
                        alt={adv.title[currentLang]}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 font-medium bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80 backdrop-blur-sm">
                        Garantía técnica verificada · HEOS Torrijos (Toledo)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
