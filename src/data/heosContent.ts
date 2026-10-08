import { AdvantageItem, Language, SectorItem, ServiceItem, SitemapNode } from '../types';
import heroDatacenter from '../assets/images/hero_heos_datacenter_1791355129881.jpg';
import servers from '../assets/images/datacenter_facility_servers_1791355142416.jpg';
import technician from '../assets/images/it_support_technician_local_1791355152098.jpg';

export const HEOS_IMAGES = {
  heroDatacenter,
  servers,
  technician,
};

export const HEOS_CONTACT_INFO = {
  phone: '+34 925 770 123',
  whatsapp: '+34 600 000 000',
  whatsappUrl: 'https://wa.me/34600000000?text=Hola%20HEOS,%20deseo%20información%20sobre%20vuestro%20servicio%20de%20departamento%20IT%20externo%20y%20CPD%20propio.',
  email: 'contacto@heos.es',
  supportEmail: 'soporte@heos.es',
  address: 'Calle Mayor s/n, 45500 Torrijos, Toledo, Castilla-La Mancha, España',
  schedule: 'Lunes a Viernes de 8:30 a 19:00 (Soporte crítico 24/7 para incidencias de infraestructura)',
};

export const UI_TEXTS: Record<Language, {
  brandTagline: string;
  heroKicker: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaDiagnostic: string;
  trustBadge1: string;
  trustBadge2: string;
  trustBadge3: string;
  problemTitle: string;
  problemSubtitle: string;
  problemItems: { title: string; desc: string }[];
  solutionTitle: string;
  solutionSubtitle: string;
  solutionItems: { title: string; desc: string }[];
  servicesTitle: string;
  servicesSubtitle: string;
  advantagesTitle: string;
  advantagesSubtitle: string;
  sectorsTitle: string;
  sectorsSubtitle: string;
  cpdTitle: string;
  cpdSubtitle: string;
  cpdFeatures: string[];
  diagnosticTitle: string;
  diagnosticSubtitle: string;
  diagnosticSubmit: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formCompany: string;
  formSector: string;
  formEmployees: string;
  formNeed: string;
  formSuccess: string;
  footerRights: string;
  navHome: string;
  navServices: string;
  navCpd: string;
  navAbout: string;
  navSectors: string;
  navContact: string;
  navSitemap: string;
  navMatrix: string;
  openChat: string;
}> = {
  es: {
    brandTagline: 'Socio tecnológico integral y departamento IT externo para PYMES',
    heroKicker: 'Departamento IT externo · CPD propio · Soporte en Torrijos, Toledo y CLM',
    heroHeadline: 'Nos encargamos de la tecnología de tu empresa para que tú puedas dedicarte a tu negocio.',
    heroSubheadline: 'Un único proveedor tecnológico integral para tu PYME. Infraestructura profesional con Centro de Procesamiento de Datos (CPD) propio, servidores virtuales y dedicados, ciberseguridad avanzada, copias de seguridad redundantes, soporte técnico remoto y presencial, y digitalización integral.',
    ctaPrimary: 'Solicitar diagnóstico gratuito',
    ctaSecondary: 'Conocer nuestros servicios',
    ctaDiagnostic: 'Solicitar auditoría sin compromiso',
    trustBadge1: 'Centro de Datos Propio (CPD)',
    trustBadge2: 'Un Único Proveedor Integral',
    trustBadge3: 'Cercanía Local Torrijos / Toledo',
    problemTitle: 'La realidad tecnológica de muchas PYMES',
    problemSubtitle: 'Dispersión de proveedores, costes imprevisibles y vulnerabilidad operativa que frenan tu negocio.',
    problemItems: [
      {
        title: 'Múltiples proveedores desconectados',
        desc: 'Un proveedor para servidores, otro para correo, otro para soporte puntual. Cuando surge una avería, nadie asume la responsabilidad final.',
      },
      {
        title: 'Vulnerabilidad ante ciberataques y pérdidas',
        desc: 'Copias de seguridad no verificadas, falta de doble factor de autenticación (MFA) y equipos sin monitorización preventiva frente a ransomware.',
      },
      {
        title: 'Falta de personal IT especializado',
        desc: 'Contratar un departamento IT propio completo es inviable económicamente para una PYME, generando apagafuegos continuos.',
      },
    ],
    solutionTitle: 'La solución HEOS: Tu departamento IT externo',
    solutionSubtitle: 'Tranquilidad operativa total bajo una sola cuota mensual predecible y un equipo que responde.',
    solutionItems: [
      {
        title: 'Interlocutor único y responsable',
        desc: 'Centralizamos toda tu infraestructura, desde el cable de red hasta el servidor en la nube, con un único punto de contacto ágil.',
      },
      {
        title: 'Infraestructura robusta con CPD propio',
        desc: 'Tus datos e hipervisores alojados en instalaciones propias con copias redundantes diarias y planes de recuperación ante desastres.',
      },
      {
        title: 'Soporte presencial y remoto inmediato',
        desc: 'Técnicos dedicados en Torrijos, Toledo y comarca que acuden a tu sede cuando hace falta y resuelven en remoto en minutos.',
      },
    ],
    servicesTitle: 'Catálogo de Servicios IT para PYMES',
    servicesSubtitle: '10 áreas clave para blindar, modernizar y escalar los sistemas de tu empresa con garantía profesional.',
    advantagesTitle: '¿Por qué elegir a HEOS como socio tecnológico?',
    advantagesSubtitle: 'Combinamos la potencia técnica de una gran infraestructura con la cercanía humana y el compromiso local.',
    sectorsTitle: 'Sectores a los que nos dirigimos',
    sectorsSubtitle: 'Adaptamos la arquitectura tecnológica y el cumplimiento normativo a las particularidades de cada actividad en Castilla-La Mancha.',
    cpdTitle: 'Infraestructura Soberana en CPD Propio',
    cpdSubtitle: 'Seguridad física, alta disponibilidad y baja latencia para tus datos sin depender de terceros opacos.',
    cpdFeatures: [
      'Alojamiento en racks dedicados con climatización de precisión redundante',
      'Conectividad simétrica de fibra óptica con doble acometida troncal',
      'Sistemas de alimentación ininterrumpida (SAI) y grupo electrógeno diésel',
      'Cumplimiento estricto de RGPD y soberanía territorial de datos en España',
      'Copias de seguridad inmutables fuera de línea para mitigación de ransomware',
      'Monitorización proactiva de hardware y métricas 24/7',
    ],
    diagnosticTitle: 'Diagnóstico Tecnológico Gratuito',
    diagnosticSubtitle: 'Auditamos el estado de tus servidores, copias de seguridad, ciberseguridad y productividad sin ningún coste ni compromiso.',
    diagnosticSubmit: 'Enviar solicitud de diagnóstico',
    formName: 'Nombre y apellidos',
    formEmail: 'Correo electrónico corporativo',
    formPhone: 'Teléfono de contacto',
    formCompany: 'Nombre de la empresa',
    formSector: 'Sector de actividad',
    formEmployees: 'Número de puestos / empleados',
    formNeed: '¿Qué área te preocupa prioritariamente?',
    formSuccess: '¡Solicitud recibida correctamente! Nos pondremos en contacto contigo en menos de 24 horas laborables para coordinar tu diagnóstico.',
    footerRights: 'Todos los derechos reservados. HEOS - Socio tecnológico integral para PYMES.',
    navHome: 'Inicio',
    navServices: 'Servicios IT',
    navCpd: 'CPD Propio',
    navAbout: 'Sobre HEOS',
    navSectors: 'Sectores',
    navContact: 'Contacto',
    navSitemap: 'Mapa del Sitio',
    navMatrix: 'Traducciones (i18n)',
    openChat: 'Asistente HEOS',
  },
  en: {
    brandTagline: 'Comprehensive technology partner and external IT department for SMEs',
    heroKicker: 'External IT Department · Proprietary Data Center · Local Support in Torrijos, Toledo & CLM',
    heroHeadline: 'We manage your company’s technology so you can focus entirely on your business.',
    heroSubheadline: 'A single, end-to-end technology partner for your SME. Professional infrastructure with our proprietary Data Center (CPD), virtualized and dedicated servers, enterprise cybersecurity, automated backup, on-site and remote IT support, and full business digitalization.',
    ctaPrimary: 'Request free IT audit',
    ctaSecondary: 'Explore our services',
    ctaDiagnostic: 'Request zero-commitment assessment',
    trustBadge1: 'Proprietary Data Center (CPD)',
    trustBadge2: 'Single End-to-End Partner',
    trustBadge3: 'Local Proximity in Torrijos / Toledo',
    problemTitle: 'The IT reality faced by SMEs',
    problemSubtitle: 'Vendor fragmentation, unpredictable costs, and operational vulnerabilities that hinder growth.',
    problemItems: [
      {
        title: 'Fragmented vendors with zero accountability',
        desc: 'One provider for servers, another for email, another for ad-hoc repairs. When failure strikes, no one takes ownership.',
      },
      {
        title: 'Vulnerability to ransomware and data loss',
        desc: 'Unverified backups, missing Multi-Factor Authentication (MFA), and unprotected endpoints leaving systems exposed.',
      },
      {
        title: 'Lack of dedicated in-house IT specialists',
        desc: 'Hiring a full internal IT engineering team is economically unviable for an SME, leading to constant firefighting.',
      },
    ],
    solutionTitle: 'The HEOS Solution: Your External IT Department',
    solutionSubtitle: 'Total operational peace of mind with a predictable monthly fee and a team that always delivers.',
    solutionItems: [
      {
        title: 'Single point of technical responsibility',
        desc: 'We centralize your entire infrastructure, from network cabling to private cloud servers, under one reliable partner.',
      },
      {
        title: 'Robust infrastructure with proprietary CPD',
        desc: 'Your data and hypervisors hosted in our own facilities with daily redundant backups and tested disaster recovery.',
      },
      {
        title: 'Immediate on-site and remote support',
        desc: 'Dedicated engineers in Torrijos, Toledo, and surrounding regions who resolve remote issues in minutes and visit on-site when required.',
      },
    ],
    servicesTitle: 'Comprehensive SME IT Services',
    servicesSubtitle: '10 core technological capabilities designed to secure, modernize, and scale your business operations.',
    advantagesTitle: 'Why choose HEOS as your technology partner?',
    advantagesSubtitle: 'We combine enterprise-grade data center infrastructure with personal proximity and local commitment.',
    sectorsTitle: 'Target Business Sectors',
    sectorsSubtitle: 'We tailor infrastructure architecture and regulatory compliance to the unique needs of every industry.',
    cpdTitle: 'Sovereign Infrastructure in our Proprietary CPD',
    cpdSubtitle: 'Physical security, high availability, and ultra-low latency without relying on opaque third-party clouds.',
    cpdFeatures: [
      'Dedicated server racks with redundant precision climate control',
      'Dual-homed symmetrical fiber optic connectivity',
      'Uninterruptible power supplies (UPS) and industrial diesel generator backup',
      'Strict GDPR compliance and sovereign data residency in Spain',
      'Immutable offline backups for advanced ransomware mitigation',
      '24/7 proactive hardware and telemetry monitoring',
    ],
    diagnosticTitle: 'Free Technological Assessment',
    diagnosticSubtitle: 'We audit your servers, backup policies, cybersecurity posture, and workplace productivity at zero cost and with no obligation.',
    diagnosticSubmit: 'Submit diagnostic request',
    formName: 'Full Name',
    formEmail: 'Work Email Address',
    formPhone: 'Contact Phone',
    formCompany: 'Company Name',
    formSector: 'Business Sector',
    formEmployees: 'Number of Workstations / Employees',
    formNeed: 'Primary area of concern',
    formSuccess: 'Request successfully submitted! Our team will contact you within 24 business hours to arrange your assessment.',
    footerRights: 'All rights reserved. HEOS - Comprehensive IT partner for SMEs.',
    navHome: 'Home',
    navServices: 'IT Services',
    navCpd: 'Our Data Center',
    navAbout: 'About HEOS',
    navSectors: 'Sectors',
    navContact: 'Contact',
    navSitemap: 'Sitemap',
    navMatrix: 'i18n Matrix',
    openChat: 'HEOS Assistant',
  },
  fr: {
    brandTagline: 'Partenaire technologique intégral et département informatique externe pour PME',
    heroKicker: 'Département IT externe · Centre de Données (CPD) propre · Support à Torrijos, Tolède et CLM',
    heroHeadline: 'Nous prenons en charge la technologie de votre entreprise afin que vous puissiez vous consacrer à votre activité.',
    heroSubheadline: 'Un interlocuteur technologique unique pour votre PME. Infrastructure professionnelle avec centre de données propre (CPD), serveurs dédiés et virtualisés, cybersécurité avancée, sauvegardes automatiques, support technique sur site et à distance, et digitalisation globale.',
    ctaPrimary: 'Demander un audit gratuit',
    ctaSecondary: 'Découvrir nos services',
    ctaDiagnostic: 'Demander un diagnostic sans engagement',
    trustBadge1: 'Centre de Données Propre (CPD)',
    trustBadge2: 'Fournisseur Unique et Intégral',
    trustBadge3: 'Proximité Locale Torrijos / Tolède',
    problemTitle: 'La réalité informatique vécue par les PME',
    problemSubtitle: 'Dispersion des prestataires, coûts imprévisibles et vulnérabilités opérationnelles qui freinent votre entreprise.',
    problemItems: [
      {
        title: 'Prestataires multiples sans responsabilité globale',
        desc: 'Un prestataire pour les serveurs, un autre pour les courriels, un autre pour le dépannage. En cas de panne, personne n’assume.',
      },
      {
        title: 'Vulnérabilité face aux ransomwares et pertes de données',
        desc: 'Sauvegardes non vérifiées, absence de double authentification (MFA) et postes de travail sans surveillance préventive.',
      },
      {
        title: 'Absence d’équipe informatique dédiée en interne',
        desc: 'Embaucher une équipe IT complète est financièrement impossible pour une PME, provoquant des urgences permanentes.',
      },
    ],
    solutionTitle: 'La solution HEOS : Votre département IT externalisé',
    solutionSubtitle: 'Sérénité opérationnelle complète avec un forfait mensuel prévisible et une équipe réactive.',
    solutionItems: [
      {
        title: 'Interlocuteur technique unique et responsable',
        desc: 'Nous centralisons toute votre infrastructure, du câblage réseau au cloud privé, avec un contact agile et direct.',
      },
      {
        title: 'Infrastructure robuste avec CPD propre',
        desc: 'Vos données et hyperviseurs hébergés dans nos propres installations avec sauvegardes redondantes et reprise après sinistre.',
      },
      {
        title: 'Support immédiat sur site et à distance',
        desc: 'Des techniciens dédiés à Torrijos, Tolède et sa région qui interviennent sur site si nécessaire et dépannent à distance en quelques minutes.',
      },
    ],
    servicesTitle: 'Catalogue des Services IT pour PME',
    servicesSubtitle: '10 domaines essentiels pour sécuriser, moderniser et faire évoluer les systèmes de votre entreprise.',
    advantagesTitle: 'Pourquoi choisir HEOS comme partenaire technologique ?',
    advantagesSubtitle: 'Nous allions la puissance d’une infrastructure de pointe à la proximité humaine et l’engagement local.',
    sectorsTitle: 'Secteurs d’activité ciblés',
    sectorsSubtitle: 'Nous adaptons l’architecture technologique et la conformité légale aux exigences concrètes de chaque métier.',
    cpdTitle: 'Infrastructure Souveraine en Centre de Données Propre',
    cpdSubtitle: 'Sécurité physique, haute disponibilité et faible latence sans dépendre de tiers opaques.',
    cpdFeatures: [
      'Hébergement en baies dédiées avec climatisation de précision redondante',
      'Connectivité symétrique par fibre optique avec double adduction',
      'Onduleurs (ASI) et groupe électrogène diesel industriel de secours',
      'Respect strict du RGPD et souveraineté territoriale des données en Espagne',
      'Sauvegardes immuables hors ligne contre les attaques ransomware',
      'Surveillance proactive du matériel et de la télémétrie 24h/24 et 7j/7',
    ],
    diagnosticTitle: 'Diagnostic Technologique Gratuit',
    diagnosticSubtitle: 'Nous auditons vos serveurs, vos sauvegardes, votre sécurité et vos outils collaboratifs sans aucun frais ni engagement.',
    diagnosticSubmit: 'Envoyer la demande de diagnostic',
    formName: 'Nom et prénom',
    formEmail: 'Adresse e-mail professionnelle',
    formPhone: 'Téléphone de contact',
    formCompany: 'Nom de l’entreprise',
    formSector: 'Secteur d’activité',
    formEmployees: 'Nombre de postes / salariés',
    formNeed: 'Domaine prioritaire de préoccupation',
    formSuccess: 'Demande reçue avec succès ! Notre équipe vous contactera dans les 24 heures ouvrées pour planifier votre diagnostic.',
    footerRights: 'Tous droits réservés. HEOS - Partenaire technologique intégral pour PME.',
    navHome: 'Accueil',
    navServices: 'Services IT',
    navCpd: 'Notre CPD',
    navAbout: 'À propos de HEOS',
    navSectors: 'Secteurs',
    navContact: 'Contact',
    navSitemap: 'Plan du site',
    navMatrix: 'Matrice i18n',
    openChat: 'Assistant HEOS',
  },
};

export const HEOS_SERVICES: ServiceItem[] = [
  {
    id: 'servidores-cpd',
    number: '01',
    name: {
      es: 'Servidores y CPD Propio',
      en: 'Servers & Proprietary Data Center',
      fr: 'Serveurs & Centre de Données Propre',
    },
    shortDescription: {
      es: 'Infraestructura virtualizada y dedicada en Centro de Procesamiento de Datos propio con máxima soberanía.',
      en: 'Virtualized and dedicated enterprise infrastructure hosted in our proprietary Data Center.',
      fr: 'Infrastructure virtualisée et dédiée hébergée dans notre propre centre de données.',
    },
    fullDescription: {
      es: 'Alojamiento de servidores empresariales físicos y máquinas virtuales en nuestro propio CPD. Eliminamos la necesidad de tener servidores ruidosos y vulnerables en la oficina, garantizando alta disponibilidad, conectividad simétrica y control total.',
      en: 'Enterprise physical server hosting and virtual machines located in our own CPD facility. We eliminate noisy, vulnerable server closets in your office while ensuring high availability, symmetrical fiber, and total control.',
      fr: 'Hébergement de serveurs physiques et de machines virtuelles dans notre propre centre de données. Nous éliminons les serveurs vulnérables dans vos bureaux tout en garantissant une haute disponibilité et une maîtrise totale.',
    },
    scope: {
      es: [
        'Servidores virtuales (VPS) escalables y servidores dedicados de alto rendimiento',
        'Alojamiento en CPD propio con climatización de precisión y redundancia eléctrica',
        'Acceso remoto seguro mediante VPN corporativa cifrada',
        'Migración transparente desde servidores locales obsoletos',
      ],
      en: [
        'Scalable virtual private servers (VPS) and dedicated high-performance bare-metal',
        'Proprietary CPD facility with precision cooling and redundant power supplies',
        'Secure remote access through enterprise encrypted VPN tunnels',
        'Seamless migration from legacy on-premise hardware closets',
      ],
      fr: [
        'Serveurs virtuels (VPS) évolutifs et serveurs dédiés haute performance',
        'Hébergement en CPD propre avec climatisation de précision et redondance électrique',
        'Accès distant sécurisé via tunnel VPN d’entreprise chiffré',
        'Migration fluide depuis les anciens serveurs physiques locaux',
      ],
    },
    icon: 'Server',
    badge: {
      es: 'Infraestructura Propietaria',
      en: 'Proprietary Facility',
      fr: 'Installation Propriétaire',
    },
  },
  {
    id: 'copias-seguridad',
    number: '02',
    name: {
      es: 'Copias de Seguridad (Backup & DR)',
      en: 'Backups & Disaster Recovery',
      fr: 'Sauvegardes & Reprise après Sinistre',
    },
    shortDescription: {
      es: 'Backup automático, redundante y planes de recuperación inmediata ante desastres o ransomware.',
      en: 'Automated, redundant backups with rapid disaster recovery and ransomware mitigation.',
      fr: 'Sauvegardes automatiques redondantes et plans de reprise immédiate face aux sinistres.',
    },
    fullDescription: {
      es: 'Garantizamos la continuidad de tu negocio protegiendo los datos críticos de tu empresa. Implementamos la regla 3-2-1 con copias locales y réplicas cifradas en nuestro CPD, verificando periódicamente la restaurabilidad de la información.',
      en: 'We guarantee continuous business operations by shielding your critical company data. We enforce the 3-2-1 backup standard with local snapshots and encrypted replicas in our CPD, regularly testing restore integrity.',
      fr: 'Nous garantissons la continuité de votre activité en protégeant les données critiques. Nous appliquons la règle 3-2-1 avec des instantanés locaux et des répliques chiffrées dans notre CPD, en testant régulièrement les restaurations.',
    },
    scope: {
      es: [
        'Copias automáticas diarias y por versiones de servidores, puestos y bases de datos',
        'Réplica cifrada en nuestro CPD con retención inmutable anti-ransomware',
        'Plan de Recuperación ante Desastres (Disaster Recovery Plan) con RTO y RPO mínimos',
        'Simulacros periódicos de restauración de datos',
      ],
      en: [
        'Automated daily versioned snapshots of servers, workstations, and databases',
        'Encrypted replication to our CPD with immutable anti-ransomware retention',
        'Disaster Recovery Plan with optimized RTO and RPO targets',
        'Scheduled real-world restore simulations',
      ],
      fr: [
        'Sauvegardes automatiques quotidiennes versionnées des serveurs, postes et bases de données',
        'Réplication chiffrée dans notre CPD avec rétention immuable anti-ransomware',
        'Plan de reprise après sinistre avec objectifs RTO et RPO optimaux',
        'Simulations périodiques de restauration des données',
      ],
    },
    icon: 'ShieldCheck',
  },
  {
    id: 'ciberseguridad',
    number: '03',
    name: {
      es: 'Ciberseguridad Gestionada',
      en: 'Managed Cybersecurity',
      fr: 'Cybersécurité Managée',
    },
    shortDescription: {
      es: 'Firewalls perimetrales, protección avanzada de endpoints, autenticación MFA y monitorización.',
      en: 'Perimeter firewalls, next-gen endpoint protection, MFA enforcement, and active monitoring.',
      fr: 'Pare-feu périmétrique, protection avancée des terminaux, MFA et surveillance active.',
    },
    fullDescription: {
      es: 'Protección multicapa para blindar la red, los equipos y la identidad de los trabajadores. Monitorizamos alertas proactivamente para neutralizar amenazas antes de que interrumpan la actividad de tu empresa.',
      en: 'Multi-layered defense to shield your network, computers, and employee identities. We monitor security telemetry proactively to neutralize threats before they can disrupt day-to-day business.',
      fr: 'Défense multicouche pour protéger votre réseau, vos terminaux et l’identité de vos collaborateurs. Nous surveillons les alertes de manière proactive pour neutraliser les menaces avant tout blocage.',
    },
    scope: {
      es: [
        'Despliegue y gestión de Firewalls profesionales en sede',
        'Protección de puestos de trabajo y servidores (EDR / Antivirus de nueva generación)',
        'Implantación obligatoria de doble factor de autenticación (MFA) en todos los accesos',
        'Monitorización de amenazas y gestión de parches de seguridad de software',
      ],
      en: [
        'Deployment and configuration of enterprise network firewalls',
        'Endpoint Detection & Response (EDR) across all workstations and servers',
        'Mandatory Multi-Factor Authentication (MFA) across all corporate accounts',
        'Threat monitoring and centralized automated patch management',
      ],
      fr: [
        'Déploiement et gestion de pare-feu d’entreprise sur site',
        'Protection des postes et serveurs avec EDR / antivirus nouvelle génération',
        'Déploiement systématique de l’authentification multifacteur (MFA)',
        'Surveillance des menaces et application automatisée des correctifs de sécurité',
      ],
    },
    icon: 'Lock',
  },
  {
    id: 'soporte-it',
    number: '04',
    name: {
      es: 'Soporte IT (Remoto y Presencial)',
      en: 'IT Support (Remote & On-Site)',
      fr: 'Support IT (À distance & Sur site)',
    },
    shortDescription: {
      es: 'Mantenimiento integral con asistencia remota ultrarrápida y técnicos presenciales en Toledo y comarca.',
      en: 'End-to-end IT maintenance with rapid remote assistance and dedicated on-site technicians.',
      fr: 'Maintenance informatique intégrale avec téléassistance ultra-rapide et techniciens sur site.',
    },
    fullDescription: {
      es: 'Tu equipo de soporte de confianza. Resolvemos el 90% de las incidencias del día a día por control remoto en minutos y enviamos a nuestros técnicos a tus instalaciones en Torrijos, Toledo y Castilla-La Mancha cuando el problema requiere intervención física.',
      en: 'Your trusted technical helpdesk. We resolve 90% of routine workplace incidents remotely within minutes, while dispatching engineers to your premises across Torrijos, Toledo, and surrounding areas whenever hardware needs attention.',
      fr: 'Votre équipe de support dédiée. Nous résolvons 90 % des incidents à distance en quelques minutes et dépêchons nos techniciens dans vos locaux à Torrijos, Tolède et sa région en cas de besoin matériel.',
    },
    scope: {
      es: [
        'Helpdesk telefónico y por portal de tickets con respuesta rápida',
        'Soporte remoto para puestos de trabajo, impresoras de red y software ofimático',
        'Mantenimiento presencial planificado y de emergencia en instalaciones del cliente',
        'Inventario y gestión del ciclo de vida del hardware informático',
      ],
      en: [
        'Phone and ticketing helpdesk with swift guaranteed response times',
        'Remote support for workstations, network printers, and office software',
        'Scheduled and emergency on-site maintenance at client facilities',
        'Hardware lifecycle management and asset inventory tracking',
      ],
      fr: [
        'Assistance téléphonique et portail de tickets à réponse rapide',
        'Support à distance pour postes informatiques, imprimantes réseau et logiciels bureautiques',
        'Maintenance sur site planifiée et interventions d’urgence dans vos locaux',
        'Inventaire et gestion du cycle de vie du parc matériel',
      ],
    },
    icon: 'Headphones',
  },
  {
    id: 'm365-workspace',
    number: '05',
    name: {
      es: 'Microsoft 365 & Google Workspace',
      en: 'Microsoft 365 & Google Workspace',
      fr: 'Microsoft 365 & Google Workspace',
    },
    shortDescription: {
      es: 'Gestión profesional de correo corporativo, almacenamiento en la nube, Teams y colaboración.',
      en: 'Enterprise corporate email, cloud storage, Teams/Meet, and real-time collaboration suites.',
      fr: 'Gestion de la messagerie professionnelle, du stockage cloud, de Teams et de la suite collaborative.',
    },
    fullDescription: {
      es: 'Configuración, licenciamiento, migración y securización de las suites ofimáticas líderes mundiales. Aseguramos tu dominio corporativo con SPF, DKIM y DMARC para evitar suplantaciones y spam.',
      en: 'Deployment, licensing, migration, and hardening for industry-leading productivity suites. We configure your corporate domain with SPF, DKIM, and DMARC to prevent phishing and spoofing.',
      fr: 'Configuration, licences, migration et sécurisation des suites bureautiques de référence. Nous sécurisons votre nom de domaine avec SPF, DKIM et DMARC contre l’usurpation et le spam.',
    },
    scope: {
      es: [
        'Migración de buzones de correo y calendarios sin pérdida de información',
        'Configuración de SharePoint, OneDrive o Google Drive con permisos por departamentos',
        'Securización contra phishing, fuga de información y políticas de retención',
        'Optimización del gasto en licencias por empleado',
      ],
      en: [
        'Zero-downtime mailbox and calendar migrations',
        'Departmental permission architectures in SharePoint, OneDrive, or Google Drive',
        'Anti-phishing security hardening, DLP policies, and compliance retention',
        'Per-seat license audit and operational cost optimization',
      ],
      fr: [
        'Migration de messagerie et d’agendas sans perte de données',
        'Structuration des dossiers et autorisations sur SharePoint, OneDrive ou Google Drive',
        'Protection anti-phishing, politiques de confidentialité et rétention',
        'Optimisation du coût des licences par collaborateur',
      ],
    },
    icon: 'Mail',
  },
  {
    id: 'digitalizacion',
    number: '06',
    name: {
      es: 'Digitalización y Gestión Documental',
      en: 'Digitalization & Document Management',
      fr: 'Digitalisation & Gestion Documentaire',
    },
    shortDescription: {
      es: 'Eliminación progresiva del papel, custodia digital ordenada y acceso seguro a expedientes.',
      en: 'Progressive paperless transition, structured digital archiving, and fast file retrieval.',
      fr: 'Suppression progressive du papier, archivage numérique sécurisé et accès instantané.',
    },
    fullDescription: {
      es: 'Transformamos los procesos basados en carpetas físicas y archivadores en flujos digitales ágiles. Los documentos se indexan, buscan y comparten en segundos con total trazabilidad.',
      en: 'We modernize legacy paper workflows and cluttered filing cabinets into agile digital repositories. Files are indexed, searched, and accessed securely in seconds with full audit trails.',
      fr: 'Nous transformons les classeurs papier en systèmes documentaires numériques fluides. Vos dossiers sont indexés, consultés et partagés en quelques secondes avec traçabilité complète.',
    },
    scope: {
      es: [
        'Plataformas de gestión documental centralizada para la empresa',
        'Digitalización certificada y flujos de aprobación interna',
        'Firma electrónica avanzada de contratos y albaranes',
        'Control estricto de accesos y confidencialidad de expedientes',
      ],
      en: [
        'Centralized corporate document repository platforms',
        'Certified digital scanning and internal document sign-off workflows',
        'Advanced e-signatures for contracts and delivery notes',
        'Role-based confidentiality access controls',
      ],
      fr: [
        'Plateformes centralisées de gestion électronique de documents (GED)',
        'Numérisation certifiée et circuits de validation interne',
        'Signature électronique sécurisée des contrats et devis',
        'Contrôle strict des accès et confidentialité des dossiers',
      ],
    },
    icon: 'FileText',
  },
  {
    id: 'automatizacion',
    number: '07',
    name: {
      es: 'Automatización de Procesos',
      en: 'Business Process Automation',
      fr: 'Automatisation des Processus',
    },
    shortDescription: {
      es: 'Optimización de tareas administrativas repetitivas para ahorrar cientos de horas a tu equipo.',
      en: 'Streamline repetitive administrative tasks to save hundreds of work hours every month.',
      fr: 'Optimisation des tâches administratives répétitives pour libérer du temps à vos équipes.',
    },
    fullDescription: {
      es: 'Conectamos las aplicaciones de tu empresa (facturación, correo, CRM, almacén) para que los datos fluyan solos sin necesidad de picar datos a mano ni cometer errores humanos.',
      en: 'We connect your company applications (invoicing, email, CRM, ERP, logistics) so data syncs automatically, eliminating manual data entry errors and bottlenecks.',
      fr: 'Nous interconnectons les logiciels de votre entreprise (facturation, e-mail, CRM, logistique) pour automatiser la saisie et supprimer les erreurs manuelles.',
    },
    scope: {
      es: [
        'Automatización de flujos entre correo, ERP y hojas de cálculo',
        'Generación y envío automático de facturas, avisos y recordatorios de cobro',
        'Sincronización de catálogos y pedidos entre tiendas online y almacén',
        'Alertas tempranas de anomalías operativas vía WhatsApp o email',
      ],
      en: [
        'Automated workflows connecting email, ERPs, and spreadsheets',
        'Automated dispatch of invoices, alerts, and payment reminders',
        'Catalog and order synchronization between web shops and inventory systems',
        'Instant operational anomaly alerts via WhatsApp or email',
      ],
      fr: [
        'Flux automatisés entre courriels, progiciel de gestion (ERP) et tableurs',
        'Émission et envoi automatiques de factures et relances de paiement',
        'Synchronisation des commandes et stocks entre boutiques en ligne et entrepôts',
        'Alertes automatiques en cas d’anomalie opérationnelle via WhatsApp ou e-mail',
      ],
    },
    icon: 'Cpu',
  },
  {
    id: 'inteligencia-artificial',
    number: '08',
    name: {
      es: 'Inteligencia Artificial para PYMES',
      en: 'Artificial Intelligence for SMEs',
      fr: 'Intelligence Artificielle pour PME',
    },
    shortDescription: {
      es: 'Asistentes internos, extracción automática de datos de facturas, análisis documental y reportes.',
      en: 'Internal AI assistants, automated invoice data extraction, document analysis, and reporting.',
      fr: 'Assistants internes, extraction automatique de factures, analyse documentaire et rapports.',
    },
    fullDescription: {
      es: 'Acercamos la IA práctica y útil al negocio real de la PYME. Automatizamos la lectura de facturas de proveedores en PDF, creamos asistentes sobre los manuales de la empresa y aceleramos la elaboración de informes.',
      en: 'We bring practical, tangible AI to real SME business operations. We automate data capture from PDF vendor invoices, deploy private internal assistants querying company manuals, and accelerate executive reporting.',
      fr: 'Nous rendons l’IA utile et pragmatique pour le quotidien des PME. Nous automatisons l’extraction des factures fournisseurs en PDF, déployons des assistants internes sur vos bases documentaires et générons des synthèses.',
    },
    scope: {
      es: [
        'Extracción inteligente de campos clave en facturas y albaranes en PDF',
        'Asistentes de IA privados entrenados exclusivamente con documentación de tu empresa',
        'Generación automatizada de resúmenes comerciales e informes de gestión',
        'Cumplimiento de privacidad: tus datos empresariales nunca se usan para reentrenar modelos públicos',
      ],
      en: [
        'Intelligent parsing of invoice and packing slip PDF files into ERP fields',
        'Private internal assistants grounded strictly in your proprietary documentation',
        'Automated generation of business summaries and operational reports',
        'Enterprise privacy guarantee: your company data is never used to train public models',
      ],
      fr: [
        'Lecture intelligente des factures d’achats et bons de livraison en PDF',
        'Assistants IA privés formés uniquement sur la documentation interne de votre PME',
        'Production automatisée de comptes-rendus et de rapports de gestion',
        'Garantie de confidentialité : vos données ne sont jamais partagées ni réutilisées pour des modèles publics',
      ],
    },
    icon: 'Sparkles',
  },
  {
    id: 'formacion',
    number: '09',
    name: {
      es: 'Formación y Capacitación a Empleados',
      en: 'Employee Training & Upskilling',
      fr: 'Formation & Montée en Compétences',
    },
    shortDescription: {
      es: 'Capacitación práctica en ciberseguridad, prevención de phishing, herramientas digitales e IA.',
      en: 'Practical coaching on cybersecurity hygiene, phishing prevention, digital tools, and AI.',
      fr: 'Formations pratiques en cybersécurité, détection du phishing, outils collaboratifs et IA.',
    },
    fullDescription: {
      es: 'El eslabón más vulnerable de la seguridad suele ser el factor humano. Formamos a tu personal con talleres sencillos y prácticos para que identifiquen trampas digitales y aprovechen al máximo las herramientas corporativas.',
      en: 'The human factor is often the most targeted link in cybersecurity. We train your staff through practical, straightforward workshops so they spot deception, avoid phishing, and leverage modern digital tools.',
      fr: 'Le facteur humain reste le maillon le plus ciblé en matière de sécurité. Nous formons vos salariés avec des ateliers simples et concrets pour déjouer les pièges et maîtriser les outils modernes.',
    },
    scope: {
      es: [
        'Talleres de concienciación en ciberseguridad y simulaciones controladas de phishing',
        'Buenas prácticas en el uso de contraseñas, gestores y doble factor (MFA)',
        'Capacitación en el uso eficiente de Microsoft 365, Teams y Google Workspace',
        'Adopción práctica de asistentes de IA en tareas administrativas cotidianas',
      ],
      en: [
        'Cybersecurity awareness workshops and controlled phishing simulation campaigns',
        'Best practices for enterprise password managers and MFA adoption',
        'Power-user training for Microsoft 365, Teams, and Google Workspace',
        'Practical adoption of AI productivity tools in daily administrative tasks',
      ],
      fr: [
        'Ateliers de sensibilisation à la cybersécurité et simulations de phishing',
        'Bonnes pratiques pour les mots de passe et l’adoption systématique du MFA',
        'Formations d’usage sur Microsoft 365, Teams et Google Workspace',
        'Utilisation concrète des outils d’IA dans les tâches administratives quotidiennes',
      ],
    },
    icon: 'GraduationCap',
  },
  {
    id: 'consultoria-it',
    number: '10',
    name: {
      es: 'Consultoría IT y Planes de Transformación',
      en: 'IT Consulting & Digital Roadmaps',
      fr: 'Conseil IT & Plans de Transformation',
    },
    shortDescription: {
      es: 'Diagnóstico tecnológico inicial, asesoramiento estratégico y hojas de ruta de modernización.',
      en: 'Initial technological audit, strategic guidance, and actionable modernization roadmaps.',
      fr: 'Diagnostic technologique initial, conseil stratégique et feuilles de route de modernisation.',
    },
    fullDescription: {
      es: 'Actuamos como tu Director de Tecnología (CTO) externo. Analizamos el estado real de tus sistemas informáticos, detectamos cuellos de botella y diseñamos un plan de evolución tecnológica ajustado al presupuesto de tu PYME.',
      en: 'We serve as your fractional Chief Technology Officer (CTO). We evaluate the current state of your IT systems, detect bottlenecks, and design a phased modernization roadmap tailored to your SME budget.',
      fr: 'Nous intervenons comme votre Directeur Technique (CTO) externalisé. Nous analysons l’état réel de vos systèmes, identifions les points de blocage et bâtissons une feuille de route adaptée à votre budget.',
    },
    scope: {
      es: [
        'Diagnóstico tecnológico gratuito y auditoría de vulnerabilidades inicial',
        'Plan director de transformación digital a 1, 2 y 3 años con presupuesto cerrado',
        'Asesoramiento en adquisición e inversión en equipamiento y licencias',
        'Cumplimiento normativo y adecuación a RGPD y directivas de seguridad',
      ],
      en: [
        'Free initial IT audit and vulnerability assessment',
        'Phased digital roadmap (1, 2, and 3-year milestones) with clear budgeting',
        'Independent advisory on hardware procurement and software licensing',
        'Regulatory compliance and GDPR alignment for IT systems',
      ],
      fr: [
        'Diagnostic technologique gratuit et audit initial des vulnérabilités',
        'Schéma directeur de transformation sur 1, 2 et 3 ans avec budget maîtrisé',
        'Conseil indépendant pour l’acquisition d’équipements et de licences',
        'Conformité réglementaire et mise en adéquation RGPD des systèmes IT',
      ],
    },
    icon: 'Compass',
  },
];

export const HEOS_ADVANTAGES: AdvantageItem[] = [
  {
    id: 'cpd-propio',
    number: '01',
    title: {
      es: 'Centro de Datos (CPD) Propio',
      en: 'Proprietary Data Center (CPD)',
      fr: 'Centre de Données (CPD) Propre',
    },
    subtitle: {
      es: 'Control absoluto sobre tus servidores y máxima soberanía de datos.',
      en: 'Absolute control over your servers and complete data sovereignty.',
      fr: 'Contrôle absolu sur vos serveurs et souveraineté totale de vos données.',
    },
    description: {
      es: 'A diferencia de intermediarios que revenden nubes públicas masivas sin saber dónde residen tus archivos, en HEOS operamos nuestras propias instalaciones de Centro de Datos. Sabemos exactamente en qué rack y en qué disco están tus copias de seguridad y tus servidores virtuales.',
      en: 'Unlike brokers who simply resell third-party hyperscaler clouds without knowing where your files reside, HEOS operates its own proprietary data center. We know exactly which physical rack and storage array hosts your servers and backups.',
      fr: 'Contrairement aux intermédiaires qui revendent des clouds publics opaques, HEOS exploite son propre centre de données. Nous savons exactement dans quelle baie physique et sur quel disque résident vos données et serveurs.',
    },
    features: {
      es: [
        'Soberanía y custodia de datos en territorio nacional (RGPD garantizado)',
        'Latencias mínimas para las empresas de Castilla-La Mancha',
        'Línea directa con los ingenieros que administran el hardware físico',
        'Costes fijos transparentes sin sorpresas por consumo de tráfico o I/O',
      ],
      en: [
        'Guaranteed data sovereignty within national territory under GDPR',
        'Ultra-low network latency for businesses in Castilla-La Mancha',
        'Direct contact with the systems engineers managing the physical hardware',
        'Transparent flat rates with zero unexpected bandwidth or I/O surcharges',
      ],
      fr: [
        'Souveraineté des données garantie sur le territoire national (RGPD)',
        'Latence minimale pour les entreprises régionales',
        'Accès direct aux ingénieurs systèmes qui gèrent le matériel physique',
        'Tarification forfaitaire claire, sans surcoûts imprévus de bande passante',
      ],
    },
    imageKey: 'datacenter',
  },
  {
    id: 'proveedor-unico',
    number: '02',
    title: {
      es: 'Un Único Proveedor Integral',
      en: 'Single End-to-End Partner',
      fr: 'Fournisseur Unique et Intégral',
    },
    subtitle: {
      es: 'Se acabó el juego de culpas entre empresas de informática y telefonía.',
      en: 'No more blame games between separate IT, cloud, and telecommunications vendors.',
      fr: 'Fin des renvois de responsabilité entre multiples prestataires informatiques.',
    },
    description: {
      es: 'Asumimos la responsabilidad total del ecosistema digital de tu PYME. Desde el router de la oficina, los puestos de los empleados y los backups, hasta la nube de Microsoft 365 y la IA interna. Si algo falla, solo tienes un número de teléfono al que llamar y nosotros lo resolvemos.',
      en: 'We take complete end-to-end accountability for your SME’s digital ecosystem. From the office router and employee laptops to cloud backups, Microsoft 365, and internal AI workflows. If an issue arises, you dial one single number and we solve it.',
      fr: 'Nous prenons l’entière responsabilité de l’écosystème numérique de votre PME. Du routeur de bureau aux sauvegardes, en passant par Microsoft 365 et les flux d’IA. En cas de dysfonctionnement, un seul numéro suffit et nous réglons le problème.',
    },
    features: {
      es: [
        'Una sola factura mensual comprensible con todos los servicios cubiertos',
        'Coordinación técnica transversal sin excusas ni vacíos de responsabilidad',
        'Visión global del negocio para aconsejarte qué tecnología realmente necesitas',
        'Ahorro demostrado frente a contratar múltiples proveedores dispersos',
      ],
      en: [
        'One straightforward monthly invoice covering your complete technological needs',
        'Unified technical coordination with zero excuses or accountability gaps',
        'Holistic business view to advise you only on technology you genuinely need',
        'Proven cost savings compared to managing multiple fragmented vendors',
      ],
      fr: [
        'Une seule facture mensuelle claire regroupant l’ensemble des besoins',
        'Coordination technique unifiée sans faux-fuyants ni vides de responsabilité',
        'Vision globale de votre métier pour ne vous conseiller que l’essentiel',
        'Économies avérées par rapport à la gestion de prestataires multiples',
      ],
    },
    imageKey: 'servers',
  },
  {
    id: 'cercania-local',
    number: '03',
    title: {
      es: 'Cercanía Local en Torrijos, Toledo y CLM',
      en: 'Local Proximity in Torrijos, Toledo & CLM',
      fr: 'Proximité Locale à Torrijos, Tolède et CLM',
    },
    subtitle: {
      es: 'Técnicos que conocen tu polígono, tu oficina y tu equipo.',
      en: 'Engineers who know your industrial park, your office, and your team.',
      fr: 'Des techniciens qui connaissent votre zone d’activité et vos locaux.',
    },
    description: {
      es: 'No somos un call center anónimo al otro lado del planeta. Somos un equipo radicado en Torrijos (Toledo) que atiende a empresas de la comarca, Toledo capital y toda Castilla-La Mancha. Cuando hace falta cambiar un disco, tirar un cable o revisar un puesto in situ, nuestros técnicos están en tu puerta en poco tiempo.',
      en: 'We are not an anonymous call center located on the other side of the globe. We are an engineering team based in Torrijos (Toledo) serving businesses across the region and Castilla-La Mancha. When hardware needs replacing or an urgent on-site inspection is required, our staff is at your doorstep promptly.',
      fr: 'Nous ne sommes pas une plateforme téléphonique anonyme à l’autre bout du monde. Notre équipe est basée à Torrijos (Tolède) et accompagne les entreprises de la région et de Castilla-La Mancha. Lorsqu’il faut intervenir sur le matériel, nous sommes rapidement dans vos locaux.',
    },
    features: {
      es: [
        'Tiempos de respuesta física inmediatos para emergencias de hardware',
        'Trato personal y directo con técnicos que conocen a tu plantilla por su nombre',
        'Compromiso con el tejido empresarial y las PYMES de la región',
        'Disponibilidad para reuniones estratégicas presenciales periódicas',
      ],
      en: [
        'Fast physical response times for urgent on-site hardware failures',
        'Direct personal relationship with engineers who know your staff by name',
        'Deep commitment to regional SMEs and local economic vitality',
        'Readily available for periodic in-person strategic IT roadmapping sessions',
      ],
      fr: [
        'Délais d’intervention physique rapides en cas de panne matérielle urgente',
        'Relation directe et humaine avec des techniciens qui connaissent votre équipe',
        'Engagement fort envers le tissu économique et les PME de notre région',
        'Disponibilité pour des points stratégiques réguliers en présentiel',
      ],
    },
    imageKey: 'technician',
  },
];

export const HEOS_SECTORS: SectorItem[] = [
  {
    id: 'asesorias-gestorias',
    name: {
      es: 'Asesorías, Gestorías y Despachos',
      en: 'Tax Advisors, Consultancies & Legal Firms',
      fr: 'Cabinets Comptables, Juridiques et Conseils',
    },
    painPoint: {
      es: 'Picos de trabajo críticos en campañas tributarias, miles de expedientes confidenciales y riesgo de sanciones por RGPD.',
      en: 'Critical tax season workload peaks, massive confidential client files, and severe GDPR compliance liabilities.',
      fr: 'Pics d’activité critiques lors des échéances fiscales, dossiers clients confidentiels et exigences strictes RGPD.',
    },
    heosSolution: {
      es: 'Copias de seguridad inmutables de programas de contabilidad y laboral (A3, Sage, etc.), acceso remoto seguro mediante VPN a servidores propios y digitalización documental.',
      en: 'Immutable backups for accounting and payroll software (Sage, A3, etc.), secure encrypted remote access to dedicated CPD servers, and digital document workflows.',
      fr: 'Sauvegardes immuables des logiciels comptables et sociaux, accès distant sécurisé aux serveurs CPD et dématérialisation documentaire.',
    },
    icon: 'Briefcase',
  },
  {
    id: 'industrias-fabricacion',
    name: {
      es: 'Industrias y Empresas de Fabricación',
      en: 'Industrial Plants & Manufacturing',
      fr: 'Industries & Entreprises de Fabrication',
    },
    painPoint: {
      es: 'Líneas de producción paradas por caídas del servidor ERP o problemas de conectividad en naves industriales.',
      en: 'Production lines halted due to ERP server crashes or poor network connectivity in expansive factory plants.',
      fr: 'Lignes de production arrêtées en raison d’une panne serveur ERP ou de défauts de réseau dans les ateliers.',
    },
    heosSolution: {
      es: 'Alta disponibilidad con servidores redundantes en nuestro CPD, cableado estructurado y WiFi industrial robusto, y soporte presencial prioritario en polígonos.',
      en: 'High-availability clustered servers in our CPD, structured industrial network cabling and WiFi, plus expedited on-site support in industrial estates.',
      fr: 'Haute disponibilité avec serveurs redondants dans notre CPD, câblage et WiFi industriels durcis, et interventions sur site prioritaires.',
    },
    icon: 'Factory',
  },
  {
    id: 'logistica-transporte',
    name: {
      es: 'Empresas Logísticas y de Transporte',
      en: 'Logistics & Fleet Transport Companies',
      fr: 'Entreprises de Logistique & Transport',
    },
    painPoint: {
      es: 'Pérdida de trazabilidad de pedidos si falla el sistema, conductores y almaceneros incomunicados.',
      en: 'Loss of order tracking telemetry when servers crash; warehouse staff and drivers disconnected in the field.',
      fr: 'Perte de traçabilité des expéditions en cas d’incident informatique ; déconnexion entre chauffeurs et entrepôt.',
    },
    heosSolution: {
      es: 'Infraestructura cloud 24/7 en CPD con tolerancia a fallos, soporte para terminales de almacén y automatización de albaranes de entrega.',
      en: '24/7 fault-tolerant cloud infrastructure in our CPD, mobile warehouse handheld scanner support, and automated delivery note workflows.',
      fr: 'Infrastructure cloud 24/7 tolérante aux pannes dans notre CPD, maintenance des lecteurs de codes-barres et flux automatisés.',
    },
    icon: 'Truck',
  },
  {
    id: 'constructoras-inmobiliarias',
    name: {
      es: 'Constructoras y Promotoras',
      en: 'Construction & Real Estate Developers',
      fr: 'Entreprises de BTP & Promoteurs',
    },
    painPoint: {
      es: 'Planos pesados dispersos, personal en obra sin acceso a presupuestos actualizados y riesgos de pérdida de mediciones.',
      en: 'Heavy architectural CAD plans scattered across devices, site supervisors lacking synced budget access, and file version conflicts.',
      fr: 'Plans volumineux dispersés, équipes sur chantier sans accès aux métrés actualisés et risque de pertes de fichiers.',
    },
    heosSolution: {
      es: 'Gestión documental en la nube con sincronización ultrarrápida, copia de seguridad centralizada y soporte para puestos de obra móviles.',
      en: 'Cloud document management with rapid synchronization, centralized versioned backups, and ruggedized field workstation support.',
      fr: 'GED cloud avec synchronisation rapide des plans, sauvegardes centralisées et support pour les postes nomades sur chantier.',
    },
    icon: 'Building2',
  },
  {
    id: 'clinicas-centros-salud',
    name: {
      es: 'Clínicas y Centros de Salud',
      en: 'Medical Clinics & Healthcare Centers',
      fr: 'Cliniques & Centres de Santé',
    },
    painPoint: {
      es: 'Historiales médicos de máxima protección según RGPD, sistemas de citación que no pueden fallar y auditorías sanitarias.',
      en: 'Strictly protected medical patient records under GDPR, mission-critical appointment booking systems, and health compliance audits.',
      fr: 'Dossiers médicaux à confidentialité maximale (RGPD), logiciels de prise de rendez-vous critiques et audits réglementaires.',
    },
    heosSolution: {
      es: 'Servidores dedicados con cifrado en reposo y en tránsito en CPD propio, autenticación MFA para todo el personal clínico y planes de contingencia médica.',
      en: 'Dedicated encrypted servers at rest and in transit in our proprietary CPD, mandatory MFA for clinical personnel, and clinical continuity plans.',
      fr: 'Serveurs dédiés avec chiffrement intégral dans notre CPD, authentification MFA pour tout le personnel et plans de secours médical.',
    },
    icon: 'Stethoscope',
  },
  {
    id: 'sector-agricola-agroalimentario',
    name: {
      es: 'Sector Agrícola y Cooperativas',
      en: 'Agricultural & Agri-Food Cooperatives',
      fr: 'Secteur Agricole & Coopératives',
    },
    painPoint: {
      es: 'Sistemas informáticos en cooperativas con conexiones rurales inestables, campañas de recolección intensivas y dispersión de socios.',
      en: 'IT operations in rural cooperatives facing unstable internet lines, intense seasonal harvests, and fragmented member communication.',
      fr: 'Systèmes informatiques dans des coopératives rurales avec connexions instables, pics de récolte intenses et adhérents dispersés.',
    },
    heosSolution: {
      es: 'Servidores centralizados en el CPD de HEOS para que el acceso siempre funcione, copias automáticas y soporte técnico intensivo durante campañas agrícolas.',
      en: 'Centralized servers hosted in HEOS’s CPD ensuring continuous uptime regardless of rural line flickers, with priority campaign support.',
      fr: 'Serveurs centralisés dans le CPD HEOS pour un fonctionnement ininterrompu même en zone rurale, avec support prioritaire en période de campagne.',
    },
    icon: 'Tractor',
  },
  {
    id: 'empresas-multisede',
    name: {
      es: 'Empresas Multisede y Franquicias',
      en: 'Multi-Location Businesses & Franchises',
      fr: 'Entreprises Multisites & Réseaux',
    },
    painPoint: {
      es: 'Dificultad para interconectar tiendas u oficinas, datos desincronizados y disparidad de equipos informáticos en cada sede.',
      en: 'Difficulties securely connecting branches, out-of-sync ERP databases, and inconsistent hardware setups across regional offices.',
      fr: 'Complexité d’interconnexion entre agences, désynchronisation des bases de données et hétérogénéité des parcs informatiques.',
    },
    heosSolution: {
      es: 'Interconexión de sedes mediante túneles VPN gestionados, estandarización de puestos de trabajo y centralización de la gestión en un único panel.',
      en: 'Branch-to-branch SD-WAN / VPN interconnectivity, workstation standardization, and centralized single-pane management.',
      fr: 'Interconnexion des sites par VPN sécurisés, homogénéisation des postes et pilotage centralisé.',
    },
    icon: 'Network',
  },
];

export const HEOS_SITEMAP: SitemapNode[] = [
  {
    path: '/',
    title: { es: 'Inicio (Home)', en: 'Home', fr: 'Accueil' },
    level: 1,
    purpose: {
      es: 'Presentar la propuesta de valor integral de HEOS, generar confianza B2B, transmitir tranquilidad operativa y capturar solicitudes de diagnóstico.',
      en: 'Present HEOS’s full value proposition, establish B2B trust, convey operational peace of mind, and capture audit leads.',
      fr: 'Présenter la proposition de valeur HEOS, inspirer confiance en B2B et capter les demandes de diagnostic.',
    },
    targetAudience: {
      es: 'Gerentes, directores financieros y propietarios de PYMES en Castilla-La Mancha sin departamento IT propio.',
      en: 'Managing directors, CFOs, and SME business owners in Castilla-La Mancha lacking internal IT departments.',
      fr: 'Dirigeants de PME, directeurs administratifs et financiers sans équipe informatique interne.',
    },
    subpages: [
      {
        path: '/servicios',
        title: { es: 'Servicios IT para PYMES', en: 'IT Services for SMEs', fr: 'Services IT pour PME' },
        level: 2,
        purpose: {
          es: 'Desglosar en detalle las 10 áreas de especialización tecnológica con fichas técnicas y alcances concretos.',
          en: 'Detail all 10 technological specialization areas with actionable scope definitions.',
          fr: 'Détailler les 10 domaines de compétences technologiques avec leurs périmètres concrets.',
        },
        targetAudience: {
          es: 'Responsables de operaciones y administración que buscan resolver una carencia concreta (backup, correo, soporte, etc.).',
          en: 'Operations managers seeking to solve a specific pain point (backup, email, helpdesk, cyber).',
          fr: 'Responsables d’exploitation cherchant à résoudre un besoin précis (sauvegarde, support, cloud).',
        },
      },
      {
        path: '/cpd-propio',
        title: { es: 'Centro de Procesamiento de Datos (CPD)', en: 'Proprietary Data Center (CPD)', fr: 'Centre de Données (CPD)' },
        level: 2,
        purpose: {
          es: 'Demostrar la ventaja diferencial de disponer de instalaciones propias: soberanía, seguridad física, conectividad y fiabilidad.',
          en: 'Highlight the unique competitive advantage of owning enterprise facilities: sovereignty, security, low latency.',
          fr: 'Mettre en avant l’avantage concurrentiel d’un centre propre : souveraineté, sécurité physique et latence.',
        },
        targetAudience: {
          es: 'Directivos que valoran la custodia local de sus datos y no quieren depender de nubes multinacionales impersonales.',
          en: 'Executives prioritizing local data residency who refuse opaque hyperscaler lock-in.',
          fr: 'Dirigeants exigeants sur la souveraineté locale des données et la conformité RGPD.',
        },
      },
      {
        path: '/sectores',
        title: { es: 'Sectores y Casos B2B', en: 'Industry Sectors & B2B Solutions', fr: 'Secteurs d’Activité' },
        level: 2,
        purpose: {
          es: 'Conectar directamente con la realidad de asesorías, industrias, logística, clínicas y sector agroalimentario regional.',
          en: 'Directly address the specialized operational realities of advisors, factories, clinics, and agro cooperatives.',
          fr: 'Répondre directement aux enjeux des cabinets, usines, cliniques et coopératives agricoles.',
        },
        targetAudience: {
          es: 'Empresarios de sectores específicos que buscan un socio que entienda sus aplicaciones y normativas de sector.',
          en: 'Business leaders seeking an IT partner that already knows their industry software and regulatory needs.',
          fr: 'Entrepreneurs recherchant un prestataire connaissant déjà leurs logiciels métiers.',
        },
      },
      {
        path: '/sobre-heos',
        title: { es: 'Sobre HEOS (ADN y Cercanía)', en: 'About HEOS (Local Commitment)', fr: 'À propos de HEOS' },
        level: 2,
        purpose: {
          es: 'Explicar la filosofía del socio tecnológico único, el arraigo en Torrijos y Toledo, y el compromiso de tranquilidad operativa.',
          en: 'Explain our single-partner philosophy, local roots in Torrijos/Toledo, and operational peace of mind guarantee.',
          fr: 'Expliquer notre philosophie de partenaire unique, notre ancrage à Torrijos/Tolède et notre engagement.',
        },
        targetAudience: {
          es: 'PYMES que priorizan el trato humano, la cercanía física y un equipo con nombre y apellidos.',
          en: 'SMEs that value genuine human communication, fast physical proximity, and a committed local team.',
          fr: 'PME privilégiant la relation humaine, la proximité géographique et un interlocuteur dédié.',
        },
      },
      {
        path: '/contacto',
        title: { es: 'Contacto y Diagnóstico Gratuito', en: 'Contact & Free Diagnostic', fr: 'Contact & Diagnostic Gratuit' },
        level: 2,
        purpose: {
          es: 'Ofrecer múltiples canales ágiles (formulario, WhatsApp Business, teléfono directo, chatbot) y canalizar la captación de auditorías.',
          en: 'Provide rapid contact channels (web form, WhatsApp Business, phone, chatbot) and convert assessment leads.',
          fr: 'Proposer des canaux de contact directs (formulaire, WhatsApp Business, téléphone, chatbot) et convertir.',
        },
        targetAudience: {
          es: 'Potenciales clientes listos para dar el paso hacia la externalización IT o resolver una incidencia.',
          en: 'Prospective clients ready to outsource their IT or resolve an immediate infrastructure issue.',
          fr: 'Prospects prêts à externaliser leur informatique ou souhaitant un audit.',
        },
      },
    ],
  },
];

export const TRILINGUAL_DICTIONARY = [
  {
    key: 'hero_title',
    section: 'Hero',
    es: 'Nos encargamos de la tecnología de tu empresa para que tú puedas dedicarte a tu negocio.',
    en: 'We manage your company’s technology so you can focus entirely on your business.',
    fr: 'Nous prenons en charge la technologie de votre entreprise afin que vous puissiez vous consacrer à votre activité.',
  },
  {
    key: 'hero_sub',
    section: 'Hero',
    es: 'Socio tecnológico integral y departamento IT externo para PYMES en Torrijos, Toledo y Castilla-La Mancha.',
    en: 'Comprehensive technology partner and external IT department for SMEs in Torrijos, Toledo and Castilla-La Mancha.',
    fr: 'Partenaire technologique intégral et département IT externe pour PME à Torrijos, Tolède et Castilla-La Mancha.',
  },
  {
    key: 'cta_diagnostic',
    section: 'Calls to Action',
    es: 'Solicitar diagnóstico tecnológico gratuito',
    en: 'Request free technological assessment',
    fr: 'Demander un diagnostic technologique gratuit',
  },
  {
    key: 'cta_services',
    section: 'Calls to Action',
    es: 'Ver los 10 servicios IT',
    en: 'Explore all 10 IT services',
    fr: 'Découvrir les 10 services IT',
  },
  {
    key: 'cta_whatsapp',
    section: 'Calls to Action',
    es: 'Hablar por WhatsApp Business',
    en: 'Chat on WhatsApp Business',
    fr: 'Échanger sur WhatsApp Business',
  },
  {
    key: 'advantage_cpd',
    section: 'Ventaja Competitiva',
    es: 'Centro de Datos (CPD) Propio con servidores dedicados y virtuales',
    en: 'Proprietary Data Center (CPD) with dedicated and virtual cloud servers',
    fr: 'Centre de Données (CPD) Propre avec serveurs dédiés et virtuels',
  },
  {
    key: 'advantage_single_vendor',
    section: 'Ventaja Competitiva',
    es: 'Un único proveedor tecnológico: fin a la dispersión y los vacíos de responsabilidad',
    en: 'A single technology partner: end vendor fragmentation and accountability gaps',
    fr: 'Un fournisseur technologique unique : fin à la dispersion des prestataires',
  },
  {
    key: 'advantage_local',
    section: 'Ventaja Competitiva',
    es: 'Cercanía local en Torrijos, comarca, Toledo y Castilla-La Mancha',
    en: 'Local physical proximity across Torrijos, Toledo and Castilla-La Mancha',
    fr: 'Proximité locale à Torrijos, Tolède et dans toute la région',
  },
  {
    key: 'chat_welcome',
    section: 'Chatbot',
    es: 'Hola. Soy el asistente de HEOS. ¿En qué podemos ayudarte con la tecnología de tu empresa hoy?',
    en: 'Hello. I am the HEOS assistant. How can we help manage your company’s technology today?',
    fr: 'Bonjour. Je suis l’assistant HEOS. Comment pouvons-nous vous aider avec l’informatique de votre entreprise ?',
  },
  {
    key: 'chat_zero_hallucination_banner',
    section: 'Chatbot',
    es: 'Atención oficial contrastada contra la base de conocimientos de HEOS · Cero alucinaciones',
    en: 'Official assistance strictly grounded in HEOS verified knowledge base · Zero hallucinations',
    fr: 'Assistance officielle strictement vérifiée selon la base de connaissances HEOS · Zéro hallucination',
  },
];
