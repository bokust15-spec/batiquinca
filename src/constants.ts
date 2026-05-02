import { Category, Product, Location } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'genie-civil',
    name: 'Génie Civil',
    description: 'Matériel lourd pour chantiers et infrastructures.',
    icon: 'HardHat'
  },
  {
    id: 'outillage',
    name: 'Outillage Professionnel',
    description: 'Outils électriques et manuels de haute précision.',
    icon: 'Hammer'
  },
  {
    id: 'securite',
    name: 'Sécurité & EPI',
    description: 'Équipements de protection individuelle et signalisation.',
    icon: 'ShieldCheck'
  },
  {
    id: 'materiaux',
    name: 'Matériaux de Construction',
    description: 'Béton, acier, et composants structurels.',
    icon: 'Layers'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Marteau Piqueur Industriel 1500W',
    category: 'outillage',
    description: 'Force de frappe exceptionnelle pour béton et roche.',
    image: 'https://images.unsplash.com/photo-1572916118970-fb5c8a1cb3d1?auto=format&fit=crop&q=80&w=800',
    specs: ['Puissance: 1500W', 'Cadence: 1900 bpm', 'Poids: 10kg']
  },
  {
    id: '2',
    name: 'Niveau Laser Rotatif Pro',
    category: 'outillage',
    description: 'Précision millimétrique pour alignement de grandes surfaces.',
    image: 'https://images.unsplash.com/photo-1541888941259-7b9d92186022?auto=format&fit=crop&q=80&w=800',
    specs: ['Portée: 400m', 'Précision: +/- 1mm', 'Autonomie: 40h']
  },
  {
    id: '3',
    name: 'Bétonneuse Électrique 160L',
    category: 'genie-civil',
    description: 'Cuve robuste pour mélange homogène sur petits et moyens chantiers.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    specs: ['Capacité: 160L', 'Moteur: 800W', 'Châssis renforcé']
  },
  {
    id: '4',
    name: 'Pack EPI Premium',
    category: 'securite',
    description: 'Ensemble complet comprenant casque, gants et chaussures S3.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb73a7?auto=format&fit=crop&q=80&w=800',
    specs: ['Protection S3', 'Norme EN397', 'Haute visibilité']
  },
  {
    id: '5',
    name: 'Compacteur à Plaque Vibrante',
    category: 'genie-civil',
    description: 'Idéal pour le compactage de sols et pavages.',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=800',
    specs: ['Moteur Honda GX160', 'Force: 15kN', 'Largeur: 400mm']
  }
];

export const LOCATIONS: Location[] = [
  {
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    address: 'Zone 4C, Rue des Ferronniers, Lot 15',
    phone: '+225 07 00 00 00 00',
    email: 'abidjan@batiquinca.pro'
  },
  {
    country: 'Maroc',
    city: 'Casablanca',
    address: 'Bd Ahl Loghouat, Ain Sebaâ, N° 45',
    phone: '+212 5 22 00 00 00',
    email: 'casa@batiquinca.pro'
  }
];
