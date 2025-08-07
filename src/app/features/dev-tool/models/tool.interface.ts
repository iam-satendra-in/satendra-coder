export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  icon?: string;
  rating?: number;
  price?: string;
  link?:string
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  count?: number;
}