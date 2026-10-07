import React, { useState } from 'react';
import { Language, SectorItem } from '../types';
import { HEOS_SECTORS, UI_TEXTS } from '../data/heosContent';
import {
  Briefcase,
  Factory,
  Truck,
  Building2,
  Stethoscope,
  Tractor,
  Network,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

interface TargetSectorsProps {
  currentLang: Language;
  onSelectSector: (sectorName: string) => void;
}

const SECTOR_ICON_MAP: Record<string, React.ElementType> = {
  Briefcase,
  Factory,
  Truck,
  Building2,
  Stethoscope,
  Tractor,
  Network,
};

export const TargetSectors: React.FC<TargetSectorsProps> = ({ currentLang, onSelectSector }) => {
  const [activeSectorId, setActiveSectorId] = useState<string>(HEOS_SECTORS[0].id);
  const t = UI_TEXTS[currentLang];

  const activeSector = HEOS_SECTORS.find((s) => s.id === activeSectorId) || HEOS_SECTORS[0];
  const ActiveIcon = SECTOR_ICON_MAP[activeSector.icon] || Briefcase;

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            Especialización Sectorial
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.sectorsTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            {t.sectorsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sector Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {HEOS_SECTORS.map((sector) => {
              const Icon = SECTOR_ICON_MAP[sector.icon] || Briefcase;
              const isSelected = sector.id === activeSectorId;

              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSectorId(sector.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-950/30 text-white shadow-md'
                      : 'border-slate-800/80 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:bg-slate-900/80 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold">
                      {sector.name[currentLang]}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Sector Challenge & Solution Showcase */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-blue-400">
                  Sector Seleccionado
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {activeSector.name[currentLang]}
                </h3>
              </div>
            </div>

            {/* Pain Point */}
            <div className="space-y-2 rounded-xl bg-red-950/20 border border-red-500/20 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wide">
                <AlertCircle className="w-4 h-4" />
                <span>Problema Crítico Habitual:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeSector.painPoint[currentLang]}
              </p>
            </div>

            {/* HEOS Solution */}
            <div className="space-y-2 rounded-xl bg-blue-950/20 border border-blue-500/20 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4" />
                <span>Solución y Arquitectura HEOS:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {activeSector.heosSolution[currentLang]}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Presencia local directa en Toledo, Torrijos y comarca
              </span>
              <button
                onClick={() => onSelectSector(activeSector.name[currentLang])}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-sm"
              >
                {currentLang === 'es' ? 'Solicitar propuesta para mi sector' : currentLang === 'en' ? 'Request sector proposal' : 'Demander une proposition métier'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
