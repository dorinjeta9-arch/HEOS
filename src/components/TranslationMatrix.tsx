import React, { useState } from 'react';
import { Language } from '../types';
import { TRILINGUAL_DICTIONARY } from '../data/heosContent';
import { Globe, Search, Filter, Check } from 'lucide-react';

interface TranslationMatrixProps {
  currentLang: Language;
  onSetGlobalLang: (lang: Language) => void;
}

export const TranslationMatrix: React.FC<TranslationMatrixProps> = ({
  currentLang,
  onSetGlobalLang,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState<string>('all');

  const sections = Array.from(new Set(TRILINGUAL_DICTIONARY.map((item) => item.section)));

  const filteredItems = TRILINGUAL_DICTIONARY.filter((item) => {
    const matchesSection = selectedSection === 'all' || item.section === selectedSection;
    const matchesSearch =
      item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.es.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fr.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSection && matchesSearch;
  });

  return (
    <section className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            Localización & Preparación Trilingüe
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Estructura Trilingüe de HEOS (ES / EN / FR)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Tabla comparativa con los textos clave de navegación, propuestas de valor y llamadas a la acción preparadas para el mercado español, anglosajón y francófono.
          </p>
        </div>

        {/* Global Language Fast Switch */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Globe className="w-4 h-4 text-blue-400" />
            <span>
              Idioma activo en toda la plataforma: <strong className="text-white uppercase">{currentLang}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {(['es', 'en', 'fr'] as Language[]).map((lng) => (
              <button
                key={lng}
                onClick={() => onSetGlobalLang(lng)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors uppercase ${
                  currentLang === lng
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Activar {lng}
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por clave o texto traducido..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">Todas las secciones</option>
              {sections.map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Translation Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 uppercase tracking-wider font-semibold">
                  <th className="py-3.5 px-4 w-40">Clave & Sección</th>
                  <th className="py-3.5 px-4 w-1/3">
                    <span className="flex items-center gap-1.5 text-white">
                      <span>Español (ES - Defecto)</span>
                      {currentLang === 'es' && <span className="text-blue-400">● Activo</span>}
                    </span>
                  </th>
                  <th className="py-3.5 px-4 w-1/3">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span>Inglés (EN)</span>
                      {currentLang === 'en' && <span className="text-blue-400">● Activo</span>}
                    </span>
                  </th>
                  <th className="py-3.5 px-4 w-1/3">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span>Francés (FR)</span>
                      {currentLang === 'fr' && <span className="text-blue-400">● Activo</span>}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                    <td className="py-3 px-4 font-mono text-[11px] text-slate-400 align-top">
                      <div className="font-semibold text-slate-300">{item.key}</div>
                      <div className="text-[10px] text-blue-400 uppercase mt-0.5">{item.section}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-200 leading-relaxed align-top">
                      {item.es}
                    </td>
                    <td className="py-3 px-4 text-slate-300 leading-relaxed align-top">
                      {item.en}
                    </td>
                    <td className="py-3 px-4 text-slate-300 leading-relaxed align-top">
                      {item.fr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
