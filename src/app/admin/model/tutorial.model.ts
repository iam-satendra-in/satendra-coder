export interface Category {
  id: number;
  title: string;
  description?: string;
  slug: string;
  tutorials?: Tutorial[]; // relation
}

export interface Tutorial {
  id: number;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnailUrl?: string;
  tags?: string[];
  createdAt: string;

  // relations
  category: Category;
  createdBy: number; // user id
  chapters?: Chapter[];
}

export interface Chapter {
  id: number;
  title: string;
  orderIndex: number;

  // relations
  tutorialId: number;
  lessons?: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  orderIndex: number;
  videoUrl?: string;
  duration?: number;
  content: string; // HTML/Quill editor output

  // relations
  chapterId: number;
}
