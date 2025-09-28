export interface Ebook {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  price: number; // 0 means free
  category?: string;
}
