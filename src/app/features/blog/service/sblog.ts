import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog, Category, Tool } from '../models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class Sblog {
  
 private blogs: Blog[] = [
  {
  id: 1,
  title: 'Getting Started with Angular 20',
  excerpt: 'Learn the basics of Angular 20 and its new features in this comprehensive guide.',
  content: `
    <h2>Introduction to Angular 20</h2>
    <p>Angular 20 brings exciting new features and improvements that make development more efficient and enjoyable. 
    Whether you're a beginner or an experienced developer, upgrading to Angular 20 will help you build faster, more reliable applications.</p>

    <h3>New Features</h3>
    <ul>
      <li>Enhanced performance optimizations for faster load times.</li>
      <li>Improved developer experience with simplified debugging tools.</li>
      <li>Better TypeScript integration for safer and more maintainable code.</li>
    </ul>

    <h3>Setting Up Your Environment</h3>
    <p>Before diving into Angular 20, ensure you have the latest Node.js and npm installed. 
    You can check your versions using the following commands:</p>
    <pre><code>node -v
npm -v</code></pre>
    <p>Then, install the Angular CLI globally:</p>
    <pre><code>npm install -g @angular/cli</code></pre>

    <h3>Creating a New Angular 20 Project</h3>
    <p>To create a new project, run:</p>
    <pre><code>ng new my-angular20-app</code></pre>
    <p>Follow the prompts to select styling options and routing preferences.</p>

    <h3>Exploring the New Angular 20 CLI Commands</h3>
    <p>Angular 20 introduces new CLI commands like:</p>
    <ul>
      <li><code>ng deploy</code> — Directly deploy your app to supported hosting platforms.</li>
      <li><code>ng test --coverage</code> — Run tests with built-in coverage reports.</li>
    </ul>

    <h3>Best Practices</h3>
    <p>To get the most out of Angular 20:</p>
    <ul>
      <li>Use lazy loading to optimize application performance.</li>
      <li>Adopt strict TypeScript mode for better maintainability.</li>
      <li>Leverage Angular’s built-in state management for cleaner architecture.</li>
    </ul>

    <h3>Conclusion</h3>
    <p>Angular 20 is a significant step forward for modern web development. With improved performance, 
    better tooling, and tighter TypeScript integration, it’s the perfect time to upgrade and explore its new capabilities.</p>
  `,
  author: 'Satendra Rajput',
  publishDate: new Date('2025-01-15'),
  category: 'Technology',
  imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
  tags: ['Angular', 'Web Development', 'Frontend'],
  readTime: 5
}
,
    {
      id: 2,
      title: 'Modern CSS Techniques for 2025',
      excerpt: 'Discover the latest CSS features and techniques that will improve your web design skills.',
      content: `<h2>CSS in 2025</h2>
      <p>CSS continues to evolve with new features that make styling more powerful and intuitive...</p>`,
      author: 'Jane Smith',
      publishDate: new Date('2025-01-14'),
      category: 'Design',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['CSS', 'Design', 'Frontend'],
      readTime: 7
    },
    {
      id: 3,
      title: 'The Future of Web Development',
      excerpt: 'Explore upcoming trends and technologies that will shape web development in the coming years.',
      content: `<h2>Web Development Trends</h2>
      <p>The web development landscape is constantly evolving with new technologies and methodologies...</p>`,
      author: 'Mike Johnson',
      publishDate: new Date('2025-01-13'),
      category: 'Technology',
      imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web Development', 'Future', 'Technology'],
      readTime: 6
    },
    {
      id: 4,
      title: 'UI/UX Design Best Practices',
      excerpt: 'Learn essential design principles that will help you create better user experiences.',
      content: `<h2>Design Principles</h2>
      <p>Good design is not just about aesthetics, it's about creating intuitive and functional user experiences...</p>`,
      author: 'Sarah Wilson',
      publishDate: new Date('2025-01-12'),
      category: 'Design',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['UI', 'UX', 'Design'],
      readTime: 8
    },
    {
      id: 5,
      title: 'JavaScript ES2025 New Features',
      excerpt: 'Discover the latest JavaScript features and how they can improve your development workflow.',
      content: `<h2>JavaScript Evolution</h2>
      <p>JavaScript continues to evolve with new features that make development more efficient...</p>`,
      author: 'Alex Brown',
      publishDate: new Date('2025-01-11'),
      category: 'Technology',
      imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'ES2025', 'Programming'],
      readTime: 5
    },
    {
      id: 6,
      title: 'Creative Design Inspiration',
      excerpt: 'Get inspired with the latest design trends and creative solutions for your projects.',
      content: `<h2>Design Inspiration</h2>
      <p>Finding inspiration for your design projects can be challenging, but these resources will help...</p>`,
      author: 'Emma Davis',
      publishDate: new Date('2025-01-10'),
      category: 'Design',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Design', 'Inspiration', 'Creativity'],
      readTime: 4
    },
     {
      id: 7,
      title: 'Getting Started with Angular 20',
      excerpt: 'Learn the basics of Angular 20 and its new features in this comprehensive guide.',
      content: `<h2>Introduction to Angular 20</h2>
      <p>Angular 20 brings exciting new features and improvements that make development more efficient and enjoyable...</p>
      <h3>New Features</h3>
      <ul>
        <li>Enhanced performance optimizations</li>
        <li>Improved developer experience</li>
        <li>Better TypeScript integration</li>
      </ul>`,
      author: 'John Doe',
      publishDate: new Date('2025-01-15'),
      category: 'Technology',
      imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Angular', 'Web Development', 'Frontend'],
      readTime: 5
    },
    {
      id: 8,
      title: 'Modern CSS Techniques for 2025',
      excerpt: 'Discover the latest CSS features and techniques that will improve your web design skills.',
      content: `<h2>CSS in 2025</h2>
      <p>CSS continues to evolve with new features that make styling more powerful and intuitive...</p>`,
      author: 'Jane Smith',
      publishDate: new Date('2025-01-14'),
      category: 'Design',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['CSS', 'Design', 'Frontend'],
      readTime: 7
    },
    {
      id: 9,
      title: 'The Future of Web Development',
      excerpt: 'Explore upcoming trends and technologies that will shape web development in the coming years.',
      content: `<h2>Web Development Trends</h2>
      <p>The web development landscape is constantly evolving with new technologies and methodologies...</p>`,
      author: 'Mike Johnson',
      publishDate: new Date('2025-01-13'),
      category: 'Technology',
      imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web Development', 'Future', 'Technology'],
      readTime: 6
    },
    {
      id: 10,
      title: 'UI/UX Design Best Practices',
      excerpt: 'Learn essential design principles that will help you create better user experiences.',
      content: `<h2>Design Principles</h2>
      <p>Good design is not just about aesthetics, it's about creating intuitive and functional user experiences...</p>`,
      author: 'Sarah Wilson',
      publishDate: new Date('2025-01-12'),
      category: 'Design',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['UI', 'UX', 'Design'],
      readTime: 8
    },
    {
      id: 11,
      title: 'JavaScript ES2025 New Features',
      excerpt: 'Discover the latest JavaScript features and how they can improve your development workflow.',
      content: `<h2>JavaScript Evolution</h2>
      <p>JavaScript continues to evolve with new features that make development more efficient...</p>`,
      author: 'Alex Brown',
      publishDate: new Date('2025-01-11'),
      category: 'Technology',
      imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'ES2025', 'Programming'],
      readTime: 5
    },
    {
      id: 12,
      title: 'Creative Design Inspiration',
      excerpt: 'Get inspired with the latest design trends and creative solutions for your projects.',
      content: `<h2>Design Inspiration</h2>
      <p>Finding inspiration for your design projects can be challenging, but these resources will help...</p>`,
      author: 'Emma Davis',
      publishDate: new Date('2025-01-10'),
      category: 'Design',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Design', 'Inspiration', 'Creativity'],
      readTime: 4
    }
  ];

  private categories: Category[] = [
    { id: 1, name: 'Technology', slug: 'technology', count: 6 },
    { id: 2, name: 'Design', slug: 'design', count: 6 }
  ];

  private tools: Tool[] = [
    {
      id: 1,
      name: 'Figma',
      description: 'Collaborative design tool',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.8,
      link: 'https://figma.com'
    },
    {
      id: 2,
      name: 'VS Code',
      description: 'Code editor',
      imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.9,
      link: 'https://code.visualstudio.com'
    }
  ];

  getAllBlogs(): Observable<Blog[]> {
    return of(this.blogs);
  }

  getBlogById(id: number): Observable<Blog | undefined> {
    return of(this.blogs.find(blog => blog.id === id));
  }

  getBlogsByCategory(category: string): Observable<Blog[]> {
    return of(this.blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase()));
  }

  searchBlogs(query: string, category?: string): Observable<Blog[]> {
    let filteredBlogs = this.blogs;
    
    if (category && category !== 'all') {
      filteredBlogs = filteredBlogs.filter(blog => 
        blog.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (query) {
      filteredBlogs = filteredBlogs.filter(blog =>
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
    }

    return of(filteredBlogs);
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getTools(): Observable<Tool[]> {
    return of(this.tools);
  }

  getLatestBlogs(limit: number = 3): Observable<Blog[]> {
    return of(this.blogs.slice(0, limit));
  }

  getRelatedBlogs(currentBlogId: number, category: string, limit: number = 3): Observable<Blog[]> {
    const relatedBlogs = this.blogs
      .filter(blog => blog.id !== currentBlogId && blog.category === category)
      .slice(0, limit);
    return of(relatedBlogs);
  }
}
