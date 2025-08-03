import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-learning-section',
  imports: [MateriallistModule],
  templateUrl: './learning-section.html',
  styleUrl: './learning-section.scss'
})
export class LearningSection {
 
categories = [
    {
      title: 'Learn Tutorials',
      description: 'Master programming and development fundamentals with interactive tutorials.',
      icon: '📘'
    },
    {
      title: 'Core Subjects',
      description: 'Strengthen your foundation in Computer Science fundamentals and theory.',
      icon: '📚'
    },
    {
      title: 'Interview Questions',
      description: 'Prepare confidently with curated technical interview questions.',
      icon: '💼'
    },
    {
      title: 'Free Quizzes',
      description: 'Test your knowledge with short, topic-based quizzes.',
      icon: '❓'
    },
    {
      title: 'Roadmaps',
      description: 'Follow step-by-step learning guides for frontend, backend, and more.',
      icon: '🗺️'
    },
    {
      title: 'Projects',
      description: 'Build hands-on projects to reinforce your learning and portfolio.',
      icon: '🛠️'
    }
  ];
}