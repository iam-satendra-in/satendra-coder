export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
  lastLogin?: Date;
  isActive?: boolean;
  permissions?: string[];
}

export interface Tutorial {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  price?: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  lessons: Lesson[];
  price: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  createdAt: Date;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  duration: number;
  order: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  category: string;
  timeLimit?: number;
  createdAt: Date;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
}

export interface Interview {
  id: string;
  title: string;
  company: string;
  position: string;
  questions: InterviewQuestion[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  createdAt: Date;
}

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Ebook {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  price: number;
  category: string;
  pages: number;
  downloadUrl?: string;
  createdAt: Date;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  steps: RoadmapStep[];
  category: string;
  estimatedTime: string;
  createdAt: Date;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  resources: string[];
  completed: boolean;
  order: number;
}
