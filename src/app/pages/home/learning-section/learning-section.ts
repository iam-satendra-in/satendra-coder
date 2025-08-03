import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learning-section',
  imports: [MateriallistModule, RouterLink],
  templateUrl: './learning-section.html',
  styleUrl: './learning-section.scss',
})
export class LearningSection {
 categories = [
  {
    title: 'Learn Tutorials',
    description: 'Master programming and development fundamentals with interactive tutorials.',
    icon: '📘',
    link: '/learn'
  },
  {
    title: 'Core Subjects',
    description: 'Strengthen your foundation in Computer Science fundamentals and theory.',
    icon: '📚',
    link: '/core'
  },
  {
    title: 'Interview Questions',
    description: 'Prepare confidently with curated technical interview questions.',
    icon: '💼',
    link: '/interview'
  },
  {
    title: 'Free Quizzes',
    description: 'Test your knowledge with short, topic-based quizzes.',
    icon: '❓',
    link: '/quiz'
  },
  {
    title: 'Roadmaps',
    description: 'Follow step-by-step learning guides for frontend, backend, and more.',
    icon: '🗺️',
    link: '/roadmap'
  },
  {
    title: 'eBooks Library',
    description: 'Access a library of free programming and CS eBooks.',
    icon: '📖',
    link: '/ebook'
  },
  {
    title: 'Blog',
    description: 'Read developer blogs and articles on the latest technologies.',
    icon: '📝',
    link: '/blog'
  },
  {
    title: 'Community',
    description: 'Join discussions, ask questions, and connect with fellow learners.',
    icon: '👥',
    link: '/community'
  },
  {
    title: 'Online Compiler',
    description: 'Write, run, and debug code instantly from your browser.',
    icon: '💻',
    link: '/compiler'
  },
  {
    title: 'Mentorship',
    description: 'Connect with mentors for guidance, advice, and career growth.',
    icon: '🎓',
    link: '/mentorship'
  },
  {
    title: 'VSCode Extension',
    description: 'Install productivity and coding tools directly into VS Code.',
    icon: '🧩',
    link: '/vscode-extension'
  },
  {
    title: 'Browser Extension',
    description: 'Enhance your browsing experience with developer tools.',
    icon: '🌐',
    link: '/browser-extension'
  },
  {
    title: 'NPM Package',
    description: 'Install reusable modules via Node Package Manager.',
    icon: '📦',
    link: '/npm-package'
  },
  {
    title: 'Maven Library',
    description: 'Integrate powerful Java libraries using Maven for seamless dependency management.',
    icon: '☕',
    link: '/maven-library'
  },
  {
    title: 'Dev-Tools',
    description: 'Access essential developer tools like formatters, validators, and converters in one place.',
    icon: '🛠️',
    link: '/dev-tools'
  }
];

}
