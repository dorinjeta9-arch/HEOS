import React, { useState } from 'react';
import { Language } from '../types';
import { HEOS_CONTACT_INFO, HEOS_SECTORS, HEOS_SERVICES, UI_TEXTS } from '../data/heosContent';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface ContactDiagnosticProps {
  currentLang: Language;
  preselectedService?: string;
  preselectedSector?: string;
  onOpenChat: () => void;
}

export const ContactDiagnostic: React.FC<ContactDiagnosticProps> = ({
  currentLang,
  preselectedService,
  preselectedSector,
  onOpenChat,
}) => {
  const t = UI_TEXTS[currentLang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: preselectedSector || '',
    employees: '5-15',
    priorityNeed: preselectedService || 'Servidores y CPD Propio',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = currentLang === 'es' ? 'El nombre es obligatorio' : 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = currentLang === 'es' ? 'Introduce un correo válido' : 'Valid email required';
    }
    if (!formData.phone.trim()) errs.phone = currentLang === 'es' ? 'Teléfono de contacto requerido' : 'Phone number required';
    if (!formData.company.trim()) errs.company = currentLang === 'es' ? 'Nombre de la empresa requerido' : 'Company name required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contacto-section" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            Sin Coste ni Compromiso
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.diagnosticTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            {t.diagnosticSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white">
                Canales de Atención Directa
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Elige el medio que mejor se adapte a tu día a día. Respondemos con agilidad y criterio técnico.
              </p>

              {/* WhatsApp Button */}
              <a
                href={HEOS_CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/40 text-emerald-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide">
                      WhatsApp Business
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {HEOS_CONTACT_INFO.whatsapp}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Escribir ahora →
                </span>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-800 bg-slate-900/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">
                    Atención Telefónica Directa
                  </div>
                  <a
                    href={`tel:${HEOS_CONTACT_INFO.phone}`}
                    className="text-sm font-bold text-white hover:text-blue-300 transition-colors"
                  >
                    {HEOS_CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-800 bg-slate-900/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">
                    Correo Electrónico
                  </div>
                  <a
                    href={`mailto:${HEOS_CONTACT_INFO.email}`}
                    className="text-sm font-bold text-white hover:text-blue-300 transition-colors"
                  >
                    {HEOS_CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Chatbot Trigger */}
              <button
                onClick={onOpenChat}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-blue-500/30 bg-blue-950/20 hover:bg-blue-950/40 text-blue-300 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide">
                      Asistente Virtual HEOS
                    </div>
                    <div className="text-xs text-slate-300">
                      Preguntas operativas con Cero Alucinaciones
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-400">
                  Abrir chat
                </span>
              </button>
            </div>

            {/* SLA / Assurance badge */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4 flex items-center gap-3 text-xs text-slate-400">
              <Clock className="w-5 h-5 text-blue-400 shrink-0" />
              <span>
                Compromiso de contacto en menos de 24 horas laborables por un ingeniero de sistemas.
              </span>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {currentLang === 'es' ? '¡Solicitud registrada con éxito!' : 'Request registered successfully!'}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {t.formSuccess}
                  </p>
                  <p className="text-xs text-slate-400 pt-2">
                    Empresa: <strong className="text-white">{formData.company}</strong> · Persona de contacto: <strong className="text-white">{formData.name}</strong>
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          sector: '',
                          employees: '5-15',
                          priorityNeed: 'Servidores y CPD Propio',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                    >
                      {currentLang === 'es' ? 'Enviar otra solicitud' : 'Submit another request'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {t.formName} *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Roberto Sánchez"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                          errors.name ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {t.formEmail} *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nombre@empresa.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                          errors.email ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {t.formPhone} *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+34 600 000 000"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                          errors.phone ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {t.formCompany} *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Logística Mancha S.L."
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                          errors.company ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {t.formSector}
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Selecciona tu sector</option>
                        {HEOS_SECTORS.map((s) => (
                          <option key={s.id} value={s.name.es}>
                            {s.name[currentLang]}
                          </option>
                        ))}
                        <option value="Otro">Otro sector</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        {t.formEmployees}
                      </label>
                      <select
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="1-4 puestos">1 a 4 puestos</option>
                        <option value="5-15 puestos">5 a 15 puestos (Recomendado)</option>
                        <option value="16-50 puestos">16 a 50 puestos</option>
                        <option value="Más de 50 puestos">+50 puestos / multisede</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t.formNeed}
                    </label>
                    <select
                      value={formData.priorityNeed}
                      onChange={(e) => setFormData({ ...formData, priorityNeed: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      {HEOS_SERVICES.map((s) => (
                        <option key={s.id} value={s.name.es}>
                          {s.number}. {s.name[currentLang]}
                        </option>
                      ))}
                      <option value="Auditoría Integral Completa">
                        Diagnóstico integral de todos los sistemas
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Detalles o incidencias actuales (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Explícanos brevemente qué ocurre en tus sistemas o qué objetivo deseas alcanzar..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Procesando solicitud...</span>
                      ) : (
                        <>
                          <span>{t.diagnosticSubmit}</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      Garantía de confidencialidad estricta y cumplimiento del RGPD. No compartimos tus datos con terceros.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
