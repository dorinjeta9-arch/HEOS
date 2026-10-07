import React, { useState, useRef, useEffect } from 'react';
import { Language, ChatMessage } from '../types';
import { CHATBOT_SYSTEM_PROMPT, findGroundedAnswer } from '../data/chatbotKnowledge';
import { HEOS_CONTACT_INFO, UI_TEXTS } from '../data/heosContent';
import {
  MessageSquare,
  X,
  Send,
  ShieldAlert,
  ShieldCheck,
  Phone,
  Mail,
  FileCode,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react';

interface ChatbotWidgetProps {
  currentLang: Language;
  onOpenDiagnosticModal: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  currentLang,
  onOpenDiagnosticModal,
  isOpen,
  onToggle,
}) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'prompt-spec'>('chat');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = UI_TEXTS[currentLang];

  // Initialize welcome message when opened
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeText: Record<Language, string> = {
        es: '¡Hola! Soy el asistente oficial de HEOS. Nos encargamos de la tecnología de tu empresa para que tú puedas dedicarte a tu negocio. ¿En qué podemos ayudarte hoy?',
        en: 'Hello! I am the official HEOS assistant. We manage your company’s technology so you can focus entirely on your business. How can we help you today?',
        fr: 'Bonjour ! Je suis l’assistant officiel HEOS. Nous prenons en charge la technologie de votre entreprise. Comment pouvons-nous vous aider aujourd’hui ?',
      };

      setMessages([
        {
          id: 'welcome-1',
          sender: 'assistant',
          text: welcomeText[currentLang],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedActions: [
            { label: currentLang === 'es' ? 'Solicitar diagnóstico gratuito' : 'Free IT diagnostic', actionType: 'diagnostic' },
            { label: 'WhatsApp Business', actionType: 'whatsapp' },
          ],
        },
      ]);
    }
  }, [currentLang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeTab]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Try to call server-side proxy route if configured
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, lang: currentLang }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          const assistantMsg: ChatMessage = {
            id: `assistant-${Date.now()}`,
            sender: 'assistant',
            text: data.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            suggestedActions: [
              { label: 'WhatsApp Business', actionType: 'whatsapp' },
              { label: 'Diagnóstico gratuito', actionType: 'diagnostic' },
            ],
          };
          setMessages((prev) => [...prev, assistantMsg]);
          setIsLoading(false);
          return;
        }
      }
    } catch {
      // Graceful fallback to local grounded zero-hallucination KB
    }

    // Local Grounded Knowledge Engine (Strict Zero-Hallucinations guarantee)
    setTimeout(() => {
      const grounded = findGroundedAnswer(query, currentLang);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: grounded.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: grounded.actions,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsLoading(false);
    }, 400);
  };

  const handleActionClick = (action: { actionType: string; payload?: string }) => {
    if (action.actionType === 'whatsapp') {
      window.open(HEOS_CONTACT_INFO.whatsappUrl, '_blank');
    } else if (action.actionType === 'call') {
      window.location.href = `tel:${HEOS_CONTACT_INFO.phone}`;
    } else if (action.actionType === 'email') {
      window.location.href = `mailto:${HEOS_CONTACT_INFO.email}`;
    } else if (action.actionType === 'diagnostic') {
      onOpenDiagnosticModal();
    }
  };

  const copyPromptToClipboard = () => {
    navigator.clipboard.writeText(CHATBOT_SYSTEM_PROMPT);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const quickQuestions: Record<Language, string[]> = {
    es: [
      '¿Qué incluye el soporte IT de HEOS?',
      '¿Dónde se alojan los servidores y el CPD?',
      '¿Cómo funciona el backup ante ransomware?',
      '¿El diagnóstico tecnológico es gratuito?',
      '¿Tenéis presencia en Torrijos y Toledo?',
    ],
    en: [
      'What is included in HEOS IT support?',
      'Where is your proprietary CPD hosted?',
      'How does immutable backup stop ransomware?',
      'Is the IT diagnostic really free?',
      'Do you support businesses in Toledo?',
    ],
    fr: [
      'Que comprend le support informatique HEOS ?',
      'Où sont situés vos serveurs et votre CPD ?',
      'Comment fonctionne la sauvegarde anti-ransomware ?',
      'Le diagnostic IT est-il vraiment gratuit ?',
      'Intervenez-vous à Torrijos et Tolède ?',
    ],
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="Abrir asistente virtual de HEOS"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <span className="text-xs font-bold tracking-tight">
            {t.openChat}
          </span>
        </button>
      )}

      {/* Floating Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[440px] h-[600px] max-h-[85vh] rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-sm">
                H
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-bold text-white">
                    Asistente HEOS
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                    Cero Alucinaciones
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">
                  Socio tecnológico integral para PYMES
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Tab Selector */}
              <div className="flex items-center bg-slate-800 rounded-lg p-0.5 text-[11px] font-semibold mr-1">
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`px-2 py-1 rounded transition-colors ${
                    activeTab === 'chat'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Chat
                </button>
                <button
                  onClick={() => setActiveTab('prompt-spec')}
                  className={`px-2 py-1 rounded transition-colors ${
                    activeTab === 'prompt-spec'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Ver System Prompt técnico"
                >
                  Prompt & Lógica
                </button>
              </div>

              <button
                onClick={onToggle}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          {activeTab === 'chat' ? (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Trust banner */}
              <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Base de conocimientos explícita HEOS Canvas</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">v2.4</span>
              </div>

              {/* Messages scroll area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-xs'
                          : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-xs'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>

                    {/* Action buttons if assistant */}
                    {msg.sender === 'assistant' && msg.suggestedActions && (
                      <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                        {msg.suggestedActions.map((action, aIdx) => (
                          <button
                            key={aIdx}
                            onClick={() => handleActionClick(action)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-900 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white transition-colors"
                          >
                            <span>{action.label}</span>
                            <ArrowRight className="w-3 h-3 text-blue-400" />
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="text-[10px] text-slate-600 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                    <span>Consultando base de conocimientos HEOS...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick suggestions pills */}
              <div className="p-2 border-t border-slate-800 bg-slate-900/40 overflow-x-auto flex gap-1.5 scrollbar-none">
                {quickQuestions[currentLang].slice(0, 3).map((qq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(qq)}
                    className="shrink-0 px-2.5 py-1 text-[11px] font-medium bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-md transition-colors"
                  >
                    {qq}
                  </button>
                ))}
              </div>

              {/* Input row */}
              <div className="p-3 border-t border-slate-800 bg-slate-950 flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendMessage();
                  }}
                  placeholder={
                    currentLang === 'es'
                      ? 'Escribe tu consulta sobre servidores, backup, soporte...'
                      : 'Ask about servers, backup, IT support...'
                  }
                  className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors disabled:opacity-40"
                  aria-label="Enviar mensaje"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Tab: System Prompt Specification & Architecture Viewer */
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs text-slate-300 bg-slate-950">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h4 className="font-bold text-white text-sm">
                    Especificación Técnica del Chatbot HEOS
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Directiva de Sistema & Principio de Cero Alucinaciones
                  </p>
                </div>
                <button
                  onClick={copyPromptToClipboard}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors"
                >
                  {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPrompt ? 'Copiado' : 'Copiar Prompt'}</span>
                </button>
              </div>

              <div className="rounded-lg bg-slate-900 border border-slate-800 p-3 space-y-2">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">
                  Reglas de Gobernanza y Derivación:
                </span>
                <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
                  <li>Prohibición estricta de invención de precios, clientes o servicios fuera de los 10 oficiales.</li>
                  <li>Canalización preferente hacia WhatsApp Business ({HEOS_CONTACT_INFO.whatsapp}) o llamada telefónica.</li>
                  <li>Oferta prioritaria del Diagnóstico Tecnológico Gratuito como primer paso para PYMES.</li>
                  <li>Respuesta empática, ejecutiva y orientada a la resolución sin jerga innecesaria.</li>
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1.5">
                  System Prompt Oficial Completo:
                </span>
                <pre className="p-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-300 leading-relaxed whitespace-pre-wrap select-all">
                  {CHATBOT_SYSTEM_PROMPT}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
