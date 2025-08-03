import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-core-values-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './core-values-card.html',
  styleUrl: './core-values-card.scss'
})
export class CoreValuesCard {

coreValues = [
  {
    title: 'Trust & Reliability',
    description:
      'SatendraCoder ensures consistent and secure access to all tools and resources, empowering developers and learners across India.',
    icon: '/assets/icons/core-values/security.svg'
  },
  {
    title: 'Open Access Learning',
    description:
      'We believe in making development and tech education accessible for everyone — from students to professionals — without barriers.',
    icon: '/assets/icons/core-values/open-learning.svg'
  },
  {
    title: 'Quality & Innovation',
    description:
      'Our platform is continuously evolving with high-quality coding tutorials, dev tools, and community resources built for modern learners.',
    icon: '/assets/icons/core-values/quality.svg'
  },
  {
    title: 'Precision Tools',
    description:
      'All our developer tools are built for accuracy and performance — from JSON formatters to code converters — saving time and boosting productivity.',
    icon: '/assets/icons/core-values/tools.svg'
  }
];

}
