import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-learning-section',
  imports: [MateriallistModule],
  templateUrl: './learning-section.html',
  styleUrl: './learning-section.scss'
})
export class LearningSection {
 
   tabs = [
    { title: 'Learn Tutorials' },
    { title: 'Interview Questions',comingSoon: true },
    { title: 'Free Quizzes' },
    { title: 'Roadmaps' },
    { title: 'Courses', comingSoon: true }
  ];

  activeIndex = 0;

  setActive(index: number) {
    if (this.tabs[index].comingSoon) return; // prevent switching to coming soon
    this.activeIndex = index;
  }
}