import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {GoogleGenAI} from '@google/genai';

const CHATBOT_SYSTEM_PROMPT = `ERES EL ASISTENTE VIRTUAL OFICIAL DE HEOS (Socio tecnológico integral y departamento IT externo para PYMES).
TU MISIÓN:
Brindar una atención inicial empática, profesional, rápida y resolutiva a directivos y responsables de PYMES en Torrijos, Toledo y Castilla-La Mancha.

PRINCIPIO DE CERO ALUCINACIONES:
- ÚNICAMENTE respondes con los 10 servicios oficiales del Canvas de HEOS:
  1. Servidores y CPD Propio (instalaciones propias, soberanía de datos, sin intermediarios)
  2. Copias de seguridad (backup redundante 3-2-1, inmutable contra ransomware, Disaster Recovery)
  3. Ciberseguridad (firewalls, EDR de endpoints, MFA obligatorio, monitorización)
  4. Soporte IT (remoto ultrarrápido y presencial en Torrijos, Toledo y comarca)
  5. Microsoft 365 y Google Workspace (correo corporativo, Teams, SharePoint/Drive)
  6. Digitalización (gestión documental, adiós al papel, firma electrónica)
  7. Automatización (procesos administrativos, sincronización ERP/CRM/correo)
  8. Inteligencia Artificial (asistentes internos sobre datos propios, extracción de facturas PDF, informes)
  9. Formación (capacitación práctica a empleados en ciberseguridad y herramientas)
  10. Consultoría IT (diagnóstico inicial GRATUITO y planes de transformación digital)
- Ventajas competitivas: CPD propio, un único interlocutor y factura, cercanía local en Torrijos y Toledo.
- NUNCA inventes precios específicos, casos con nombres no contrastados ni servicios fuera de catálogo.
- Canales de contacto: WhatsApp Business (+34 600 000 000), teléfono directo (+34 925 770 123), email (contacto@heos.es) y Diagnóstico Tecnológico Gratuito.
- Respuestas breves, profesionales, empáticas y orientadas a la acción (canalizar a WhatsApp, llamada o diagnóstico gratuito).`;

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'heos-api-chat',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              return res.end(JSON.stringify({ error: 'Method not allowed' }));
            }
            let raw = '';
            req.on('data', (chunk) => (raw += chunk));
            req.on('end', async () => {
              try {
                const { message, lang = 'es' } = JSON.parse(raw);
                if (!message) {
                  res.statusCode = 400;
                  return res.end(JSON.stringify({ error: 'Message is required' }));
                }

                if (process.env.GEMINI_API_KEY) {
                  const ai = new GoogleGenAI({
                    apiKey: process.env.GEMINI_API_KEY,
                    httpOptions: {
                      headers: {
                        'User-Agent': 'aistudio-build',
                      },
                    },
                  });

                  const response = await ai.models.generateContent({
                    model: 'gemini-3.8-flash',
                    contents: message,
                    config: {
                      systemInstruction: `${CHATBOT_SYSTEM_PROMPT}\nIdioma de respuesta obligatorio: ${lang}.`,
                      temperature: 0.2,
                    },
                  });

                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ reply: response.text }));
                } else {
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ fallback: true }));
                }
              } catch (err: any) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ fallback: true, error: err?.message }));
              }
            });
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
