import React from 'react';
import { Language } from '../types';
import { HEOS_IMAGES, UI_TEXTS } from '../data/heosContent';
import { Server, ShieldCheck, Zap, HardDrive, Wifi, Lock, ArrowRight } from 'lucide-react';

interface CpdShowcaseProps {
  currentLang: Language;
  onOpenDiagnostic: () => void;
}

export const CpdShowcase: React.FC<CpdShowcaseProps> = ({ currentLang, onOpenDiagnostic }) => {
  const t = UI_TEXTS[currentLang];

  const specs = [
    {
      icon: ShieldCheck,
      title: currentLang === 'es' ? 'Soberanía RGPD y Seguridad Física' : currentLang === 'en' ? 'GDPR Sovereignty & Physical Security' : 'Souveraineté RGPD & Sécurité Physique',
      desc: currentLang === 'es' ? 'Tus datos no salen de España. Acceso biométrico y videovigilancia perimetral en nuestras instalaciones.' : currentLang === 'en' ? 'Your data never leaves Spain. Biometric access and perimeter surveillance in our facilities.' : 'Vos données restent en Espagne. Contrôle d’accès biométrique et vidéosurveillance.',
    },
    {
      icon: Zap,
      title: currentLang === 'es' ? 'Redundancia Eléctrica Total' : currentLang === 'en' ? 'Full Electrical Redundancy' : 'Redondance Électrique Totale',
      desc: currentLang === 'es' ? 'Sistemas SAI con doble ramal y grupo electrógeno diésel industrial para tolerancia absoluta a cortes de red.' : currentLang === 'en' ? 'Dual-feed UPS systems backed by an industrial diesel generator for zero downtime during grid cuts.' : 'Onduleurs à double alimentation et groupe électrogène de secours.',
    },
    {
      icon: Wifi,
      title: currentLang === 'es' ? 'Conectividad Troncal Simétrica' : currentLang === 'en' ? 'Symmetrical Fiber Trunking' : 'Fibre Optique Symétrique Troncale',
      desc: currentLang === 'es' ? 'Doble acometida de fibra óptica con enrutamiento BGP multihomed y latencias <5ms para la región.' : currentLang === 'en' ? 'Dual optical fiber entrances with multihomed BGP routing and <5ms regional latency.' : 'Double adduction fibre optique et latence régionale < 5 ms.',
    },
    {
      icon: HardDrive,
      title: currentLang === 'es' ? 'Almacenamiento NVMe & Backups Inmutables' : currentLang === 'en' ? 'Enterprise NVMe & Immutable Backups' : 'Stockage NVMe & Sauvegardes Immuables',
      desc: currentLang === 'es' ? 'Matrices de discos SSD NVMe con cifrado de hardware y réplicas desconectadas para mitigación de ransomware.' : currentLang === 'en' ? 'Enterprise NVMe flash arrays with hardware encryption and air-gapped snapshots against ransomware.' : 'Baies SSD NVMe avec chiffrement matériel et instantanés étanches.',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-12 shadow-2xl overflow-hidden relative">
          {/* Background subtle radial glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              <Server className="w-4 h-4" />
              <span>Infraestructura Propia de Nivel Empresarial</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {t.cpdTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {t.cpdSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Specs Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Visual Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg">
                <img
                  src={HEOS_IMAGES.servers}
                  alt="Racks de servidores en el CPD de HEOS"
                  className="w-full h-56 object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>UBICACIÓN: TORRIJOS (TOLEDO)</span>
                    <span className="text-emerald-400 font-semibold">ESTÁNDAR RGPD</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Alojamiento dedicado sin sorpresas de costes por gigabyte transferido ni dependencia de centros de datos en el extranjero.
                  </p>
                  <button
                    onClick={onOpenDiagnostic}
                    className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Migrar servidores a CPD HEOS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
