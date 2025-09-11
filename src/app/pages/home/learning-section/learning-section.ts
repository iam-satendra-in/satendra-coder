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
    link: '/tutorials'
  },
  {
    title: 'Core Subjects',
    description: 'Strengthen your foundation in Computer Science fundamentals and theory.',
    icon: '📚',
    link: '/subjects'
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
    title: 'Online Compiler',
    description: 'Write, run, and debug code instantly from your browser.',
    icon: '💻',
    link: '/compiler'
  },
  {
    title: 'Kids Corner',
    description: 'Safe, fun learning—coding, maths, reading, and creativity for kids.',
    icon: '👩‍👧‍👦',
    link: '/browser-extension'
  },
  {
    title: 'Communication Skills',
    description: 'Developers ke liye professional English + soft skills.',
    icon: '🗣️',
    link: '/communication-skills'
  }
];

}
