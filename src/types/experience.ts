export type Category = 'cultura' | 'gastronomia' | 'naturaleza' | 'aventura';

export type DurationType = 'hours' | 'half_day' | 'full_day' | 'multi_day';

export type GroupType = 'individual' | 'parejas' | 'familias' | 'grupos';

export type PriceRange = 'economico' | 'medio' | 'premium';

export interface ItineraryItem {
  time: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface HostStory {
  name: string;
  community: string;
  storyEs: string;
  storyEn: string;
  photoUrl?: string;
  impactEs: string;
  impactEn: string;
}

export interface PhotoCredit {
  author: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
}

export type LocalCategory =
  | 'gastronomia_local'
  | 'cocina_tradicional'
  | 'cafe'
  | 'cacao'
  | 'agricultura'
  | 'artesanias'
  | 'arte'
  | 'tradiciones'
  | 'historia_local'
  | 'experiencias_rurales';

export interface Experience {
  id: string;
  slug: string;
  titleEs: string;
  titleEn: string;
  shortDescriptionEs: string;
  shortDescriptionEn: string;
  descriptionEs: string;
  descriptionEn: string;
  category: Category;
  location: string;
  department: string;
  coordinates: Coordinates;
  meetingPointEs: string;
  meetingPointEn: string;
  price: number;
  currency: 'USD';
  priceRange: PriceRange;
  duration: string;
  durationHours: number;
  durationType: DurationType;
  languages: ('ES' | 'EN')[];
  groupType: GroupType[];
  minPeople: number;
  maxPeople: number;
  images: string[];
  imageCredits?: PhotoCredit[];
  includedEs: string[];
  includedEn: string[];
  notIncludedEs: string[];
  notIncludedEn: string[];
  requirementsEs: string[];
  requirementsEn: string[];
  itinerary: ItineraryItem[];
  featured: boolean;
  active: boolean;
  demoRating?: number;
  demoReviewsCount?: number;
  // Interactive panoramic media
  virtualTour360Url?: string;
  has360?: boolean;
  // Strategic Local Experience extensions
  isLocalExperience?: boolean;
  localCategory?: LocalCategory;
  hostStory?: HostStory;
}


export interface ExperienceFilterState {
  searchQuery: string;
  category: Category | 'all';
  department: string;
  priceRange: PriceRange | 'all';
  durationType: DurationType | 'all';
  groupType: GroupType | 'all';
  sortBy: 'recommended' | 'price_asc' | 'price_desc' | 'duration_asc';
  onlyLocal?: boolean;
  only360?: boolean;
}
