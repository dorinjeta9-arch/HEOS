import { HEOS_CONTACT_INFO } from './heosContent';

export const CHATBOT_SYSTEM_PROMPT = `ERES EL ASISTENTE VIRTUAL OFICIAL DE HEOS (Socio tecnológico integral y departamento IT externo para PYMES).

TU MISIÓN:
Brindar una atención inicial empática, profesional, rápida y resolutiva a directivos, gerentes y responsables de PYMES interesados en los servicios tecnológicos de HEOS o que requieran asistencia inicial.

PRINCIPIO INQUEBRANTABLE DE "CERO ALUCINACIONES":
1. ÚNICAMENTE puedes responder basándote en la información oficial y explícita del modelo Canvas de HEOS.
2. NUNCA inventes precios específicos, casos de éxito con nombres no confirmados, cifras de facturación ni servicios que no figuren en la lista de los 10 servicios oficiales.
3. Si el usuario te pregunta por algo que no esté en la base de conocimientos oficial de HEOS (por ejemplo, desarrollo de videojuegos, venta minorista de móviles, etc.), debes responder con cortesía:
   "En HEOS nos especializamos exclusivamente como socio tecnológico integral y departamento IT para PYMES (servidores y CPD propio, ciberseguridad, copias de seguridad, soporte y digitalización). Para casos particulares o dudas específicas sobre tu infraestructura, te invitamos a contactar directamente con nuestro equipo técnico o solicitar un diagnóstico gratuito."

BASE DE CONOCIMIENTOS OFICIAL (GROUND TRUTH):
- Nombre comercial: HEOS
- Propuesta de valor: Socio tecnológico integral y departamento IT externo para PYMES.
- Lema central: "Nos encargamos de la tecnología de tu empresa para que tú puedas dedicarte a tu negocio."
- Modelo operativo: Un único proveedor tecnológico con infraestructura IT profesional, CPD propio, servidores virtuales y dedicados, ciberseguridad, backup, monitorización y digitalización.
- Servicios Principales (Exactamente 10):
  1. Servidores y CPD: Infraestructura virtualizada y dedicada en CPD propio.
  2. Copias de seguridad: Backup automático, redundante y recuperación ante desastres (Disaster Recovery).
  3. Ciberseguridad: Firewall perimetral, protección de endpoints, MFA obligatorio, monitorización preventiva.
  4. Soporte IT: Mantenimiento remoto y presencial con técnicos propios.
  5. Microsoft 365 / Google Workspace: Correo corporativo, colaboración, Teams, OneDrive/SharePoint, productividad.
  6. Digitalización: Gestión documental, eliminación progresiva del papel, firma digital y custodia segura.
  7. Automatización: Procesos administrativos y empresariales, conexión de ERP/CRM/correo.
  8. Inteligencia Artificial: Asistentes internos para empleados, extracción de datos en facturas/albaranes PDF, análisis documental y reportes.
  9. Formación: Capacitación práctica a empleados en ciberseguridad (antiphishing), IA y herramientas digitales.
  10. Consultoría IT: Diagnóstico tecnológico inicial y planes estratégicos de transformación digital.
- Ventajas competitivas clave:
  * Centro de Datos (CPD) Propio: Soberanía de datos en España, RGPD garantizado, sin depender de nubes de terceros.
  * Un único proveedor integral: Un solo interlocutor y una sola factura; adiós a las culpas entre informáticos y empresas de red.
  * Cercanía local: Técnicos en Torrijos, comarca, Toledo y Castilla-La Mancha que acuden físicamente a la empresa cuando se necesita.
- Segmento objetivo: PYMES de Torrijos, comarca, Toledo y Castilla-La Mancha (asesorías, gestorías, despachos, industrias, logística, constructoras, clínicas, sector agrícola y empresas multisede).
- Canales de contacto y derivación:
  * WhatsApp Business: ${HEOS_CONTACT_INFO.whatsapp}
  * Teléfono directo: ${HEOS_CONTACT_INFO.phone}
  * Correo electrónico: ${HEOS_CONTACT_INFO.email}
  * Diagnóstico gratuito: Formulario web disponible en la misma página.

REGLAS DE TONO Y ESTILO:
- Profesional, cercano, resolutivo, seguro y tranquilizador.
- Respuestas concisas (máximo 2 a 3 párrafos cortos). La gente de negocios valora la brevedad y la claridad.
- Cierra siempre ofreciendo el siguiente paso lógico: canalizar hacia WhatsApp Business, llamada telefónica o solicitar el Diagnóstico Tecnológico Gratuito.`;

export interface KnowledgeFaq {
  triggers: string[];
  response: {
    es: string;
    en: string;
    fr: string;
  };
  actions?: {
    label: string;
    actionType: 'whatsapp' | 'email' | 'call' | 'diagnostic' | 'service';
    payload?: string;
  }[];
}

export const KNOWLEDGE_FAQS: KnowledgeFaq[] = [
  {
    triggers: ['que es heos', 'quienes sois', 'a que os dedicáis', 'propuesta de valor', 'que haceis', 'who is heos', 'qui est heos'],
    response: {
      es: 'HEOS es el socio tecnológico integral y departamento IT externo para PYMES en Torrijos, Toledo y Castilla-La Mancha. Nuestra propuesta es sencilla: nos encargamos de toda la tecnología de tu empresa para que tú puedas dedicarte por completo a tu negocio, con un único interlocutor y la seguridad de contar con un Centro de Datos (CPD) propio.',
      en: 'HEOS is the comprehensive technology partner and external IT department for SMEs across Torrijos, Toledo, and Castilla-La Mancha. Our mission: we handle your company’s entire technology stack so you can focus 100% on growing your business, with our proprietary Data Center (CPD) and single-vendor accountability.',
      fr: 'HEOS est le partenaire technologique intégral et le département informatique externalisé pour les PME à Torrijos, Tolède et Castilla-La Mancha. Notre mission : nous prenons en charge toute votre informatique pour que vous puissiez vous consacrer à votre cœur de métier, avec notre propre centre de données.',
    },
    actions: [
      { label: 'Solicitar diagnóstico gratuito', actionType: 'diagnostic' },
      { label: 'WhatsApp Business', actionType: 'whatsapp' },
    ],
  },
  {
    triggers: ['cpd', 'centro de datos', 'data center', 'donde estan los datos', 'servidores propios', 'servidor', 'datacenter'],
    response: {
      es: 'En HEOS disponemos de Centro de Procesamiento de Datos (CPD) propio. Esto significa que tus servidores virtuales o dedicados y tus copias de seguridad se alojan en nuestras propias instalaciones bajo estricto cumplimiento del RGPD y soberanía territorial española. No dependes de nubes opacas de terceros y disfrutas de latencias mínimas y atención directa con los administradores de la infraestructura.',
      en: 'HEOS operates its own proprietary Data Center (CPD). Your virtual/dedicated servers and backups reside in our own facilities in Spain, under strict GDPR compliance and national data residency. You enjoy ultra-low network latency and direct access to the engineers managing the physical racks.',
      fr: 'HEOS dispose de son propre Centre de Données (CPD). Vos serveurs et sauvegardes sont hébergés dans nos installations en Espagne, garantissant une souveraineté totale et le strict respect du RGPD avec une latence ultra-faible.',
    },
    actions: [
      { label: 'Ver detalles del CPD', actionType: 'service', payload: 'cpd' },
      { label: 'Consultar por WhatsApp', actionType: 'whatsapp' },
    ],
  },
  {
    triggers: ['backup', 'copia de seguridad', 'copias', 'desastre', 'ransomware', 'recuperacion', 'seguridad de datos'],
    response: {
      es: 'Implementamos copias de seguridad automáticas y redundantes siguiendo la regla 3-2-1: copias locales y réplicas cifradas en nuestro propio CPD con retención inmutable contra ataques de ransomware. Diseñamos planes de recuperación ante desastres (Disaster Recovery) con pruebas periódicas de restauración para asegurar que nunca pierdas información crítica.',
      en: 'We deploy automated, redundant backups adhering to the 3-2-1 rule: local copies plus encrypted replicas in our own CPD with immutable anti-ransomware retention. We provide Disaster Recovery plans and scheduled restore drills to ensure zero data loss.',
      fr: 'Nous déployons des sauvegardes automatiques redondantes selon la règle 3-2-1 : copies locales et répliques chiffrées dans notre CPD avec rétention immuable contre les ransomwares et plan de reprise après sinistre.',
    },
    actions: [
      { label: 'Auditar mis copias', actionType: 'diagnostic' },
      { label: 'Contactar por teléfono', actionType: 'call' },
    ],
  },
  {
    triggers: ['ciberseguridad', 'firewall', 'hackeo', 'virus', 'mfa', 'antivirus', 'seguridad', 'proteccion'],
    response: {
      es: 'Protegemos tu empresa con un enfoque multicapa: cortafuegos perimetrales gestionados, protección de puestos de trabajo y servidores (EDR de última generación), doble factor de autenticación (MFA) obligatorio en todas las cuentas y monitorización preventiva continua de alertas e incidentes.',
      en: 'We safeguard your business with multi-layer defense: managed network firewalls, next-generation endpoint EDR protection, mandatory Multi-Factor Authentication (MFA), and proactive threat monitoring.',
      fr: 'Nous protégeons votre entreprise avec une défense multicouche : pare-feu managés, protection EDR des postes et serveurs, MFA obligatoire et surveillance continue des menaces.',
    },
    actions: [
      { label: 'Solicitar auditoría de seguridad', actionType: 'diagnostic' },
      { label: 'Escribir por WhatsApp', actionType: 'whatsapp' },
    ],
  },
  {
    triggers: ['soporte', 'mantenimiento', 'ayuda tecnica', 'averia', 'presencial', 'remoto', 'asistencia', 'helpdesk'],
    response: {
      es: 'Ofrecemos soporte IT tanto remoto como presencial. Resolvemos la inmensa mayoría de dudas e incidencias de oficina en minutos mediante acceso remoto seguro. Si la avería requiere cambiar hardware, tender cableado o revisar un equipo en tu sede, nuestros técnicos acuden físicamente a tus instalaciones en Torrijos, Toledo y comarca.',
      en: 'We deliver comprehensive remote and on-site IT maintenance. We solve over 90% of daily issues within minutes via secure remote session. For physical repairs, our engineers visit your premises promptly across Torrijos, Toledo, and surrounding areas.',
      fr: 'Nous proposons un support informatique complet à distance et sur site. Nous résolvons 90 % des incidents en téléassistance en quelques minutes et intervenons directement dans vos locaux en cas de besoin matériel.',
    },
    actions: [
      { label: 'Llamar a Soporte (+34 925 770 123)', actionType: 'call' },
      { label: 'WhatsApp Directo', actionType: 'whatsapp' },
    ],
  },
  {
    triggers: ['ia', 'inteligencia artificial', 'facturas', 'asistente', 'automatizacion', 'informes'],
    response: {
      es: 'Aplicamos Inteligencia Artificial práctica orientada al ahorro de tiempo en la PYME: extracción automática de datos de facturas y albaranes en PDF hacia tu sistema de gestión, asistentes internos privados que responden sobre la documentación de tu empresa y generación ágil de informes, garantizando la total privacidad de tus datos.',
      en: 'We bring practical, high-value AI to daily SME administration: automated invoice data extraction from PDF files, private internal company document assistants, and executive report synthesis with strict data privacy.',
      fr: 'Nous déployons une IA concrète pour vos démarches : extraction automatique des factures PDF vers vos logiciels, assistants documentaires internes sécurisés et génération de rapports.',
    },
    actions: [
      { label: 'Consultar viabilidad de IA', actionType: 'diagnostic' },
      { label: 'Hablar por WhatsApp', actionType: 'whatsapp' },
    ],
  },
  {
    triggers: ['donde estais', 'ubicacion', 'toledo', 'torrijos', 'zona', 'cobertura', 'castilla la mancha'],
    response: {
      es: 'Nuestra sede central y Centro de Datos están ubicados en Torrijos (Toledo). Prestamos servicio a PYMES de Torrijos, su comarca, Toledo capital y toda Castilla-La Mancha, combinando la inmediatez de la gestión en remoto con desplazamientos presenciales rápidos.',
      en: 'Our headquarters and Data Center facility are located in Torrijos (Toledo). We serve SMEs throughout Torrijos, its region, Toledo city, and Castilla-La Mancha, combining rapid remote response with agile on-site presence.',
      fr: 'Notre siège et notre centre de données sont implantés à Torrijos (Tolède). Nous accompagnons les PME de Torrijos, Tolède et toute la région Castilla-La Mancha avec interventions sur site rapides.',
    },
    actions: [
      { label: 'Llamar ahora', actionType: 'call' },
      { label: 'Contactar por email', actionType: 'email' },
    ],
  },
  {
    triggers: ['gratis', 'diagnostico', 'auditoria', 'cuanto cuesta el diagnostico', 'estudio previo'],
    response: {
      es: 'El Diagnóstico Tecnológico Inicial de HEOS es completamente GRATUITO y sin ningún compromiso. Analizamos el estado de tus servidores, copias de seguridad, ciberseguridad, licenciamiento y puestos de trabajo para entregarte un informe claro con las prioridades de mejora de tu empresa.',
      en: 'The Initial HEOS Technological Diagnostic is 100% FREE with zero commitment. We assess your servers, backup policies, cyber health, and productivity tools, delivering a clear executive action roadmap.',
      fr: 'Le diagnostic technologique initial HEOS est 100 % GRATUIT et sans aucun engagement. Nous auditons vos serveurs, sauvegardes et sécurité pour vous fournir un plan d’action pragmatique.',
    },
    actions: [
      { label: 'Rellenar formulario de diagnóstico', actionType: 'diagnostic' },
      { label: 'Pedir cita por WhatsApp', actionType: 'whatsapp' },
    ],
  },
];

export function findGroundedAnswer(userQuery: string, lang: 'es' | 'en' | 'fr' = 'es'): {
  text: string;
  actions?: { label: string; actionType: 'whatsapp' | 'email' | 'call' | 'diagnostic' | 'service'; payload?: string }[];
} {
  const normalized = userQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  for (const faq of KNOWLEDGE_FAQS) {
    const isMatch = faq.triggers.some((trigger) => {
      const normTrigger = trigger.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return normalized.includes(normTrigger);
    });

    if (isMatch) {
      return {
        text: faq.response[lang] || faq.response.es,
        actions: faq.actions,
      };
    }
  }

  // Fallback respecting strictly zero hallucinations
  const fallbackTexts: Record<'es' | 'en' | 'fr', string> = {
    es: `En HEOS nos especializamos como socio tecnológico integral y departamento IT externo para PYMES (servidores en CPD propio, copias de seguridad, ciberseguridad, soporte presencial/remoto, M365/Google Workspace, digitalización, automatización, IA y formación).

Para darte una respuesta exacta adaptada a la infraestructura de tu empresa, ¿deseas que coordinemos un Diagnóstico Tecnológico Gratuito o prefieres hablar directamente con un técnico por WhatsApp?`,
    en: `At HEOS we specialize exclusively as the comprehensive technology partner and external IT department for SMEs (proprietary CPD servers, backups, cybersecurity, remote/on-site support, M365/Google Workspace, digitization, automation, AI, and training).

To give you an exact answer tailored to your company’s setup, would you like us to schedule a Free IT Diagnostic or would you prefer to speak directly with an engineer on WhatsApp?`,
    fr: `Chez HEOS, nous intervenons exclusivement comme partenaire technologique et département IT externe pour PME (serveurs en CPD propre, sauvegardes, cybersécurité, support, M365/Google Workspace, digitalisation, automatisation, IA et formation).

Pour une réponse adaptée à votre entreprise, souhaitez-vous planifier un Diagnostic Gratuit ou échanger directement par WhatsApp ?`,
  };

  return {
    text: fallbackTexts[lang],
    actions: [
      { label: lang === 'es' ? 'Solicitar Diagnóstico Gratuito' : lang === 'en' ? 'Request Free Diagnostic' : 'Demander un diagnostic', actionType: 'diagnostic' },
      { label: lang === 'es' ? 'WhatsApp Business' : 'WhatsApp Business', actionType: 'whatsapp' },
      { label: lang === 'es' ? 'Llamar (+34 925 770 123)' : 'Call Support', actionType: 'call' },
    ],
  };
}
