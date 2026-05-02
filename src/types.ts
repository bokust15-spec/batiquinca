export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Location {
  country: string;
  city: string;
  address: string;
  phone: string;
  email: string;
}
