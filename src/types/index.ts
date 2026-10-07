export type Language = 'es' | 'en' | 'fr';

export type ActiveTab = 'home' | 'services' | 'cpd' | 'about' | 'sectors' | 'contact' | 'sitemap' | 'i18n-matrix';

export interface ServiceItem {
  id: string;
  number: string;
  name: Record<Language, string>;
  shortDescription: Record<Language, string>;
  fullDescription: Record<Language, string>;
  scope: Record<Language, string[]>;
  icon: string;
  badge?: Record<Language, string>;
}

export interface SectorItem {
  id: string;
  name: Record<Language, string>;
  painPoint: Record<Language, string>;
  heosSolution: Record<Language, string>;
  icon: string;
}

export interface AdvantageItem {
  id: string;
  number: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  features: Record<Language, string[]>;
  imageKey?: 'datacenter' | 'servers' | 'technician';
}

export interface SitemapNode {
  path: string;
  title: Record<Language, string>;
  level: number;
  purpose: Record<Language, string>;
  targetAudience: Record<Language, string>;
  subpages?: SitemapNode[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  suggestedActions?: {
    label: string;
    actionType: 'whatsapp' | 'email' | 'call' | 'diagnostic' | 'service';
    payload?: string;
  }[];
}
