export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: Date;
  category: string;
  imageUrl: string;
  tags: string[];
  readTime: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface Tool {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  link: string;
}