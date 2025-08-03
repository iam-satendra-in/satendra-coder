import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-faq-card',
  imports: [MateriallistModule],
  templateUrl: './faq-card.html',
  styleUrl: './faq-card.scss'
})
export class FaqCard {

  activeIndex: number | null = null;

faqs = [
  {
    question: 'What is SatendraCoder and who is it for?',
    answer: 'SatendraCoder is an all-in-one platform designed for students, developers, and professionals. It provides free tools, learning resources, and extensions to help you code faster, learn better, and stay industry-ready. Whether you’re a beginner or an experienced coder, SatendraCoder has something for you.'
  },
  {
    question: 'What features and tools does SatendraCoder offer?',
    answer: 'SatendraCoder includes a wide range of developer utilities such as JSON viewers, formatters, HTML ↔ JSX converters, QR generators, and more. It also offers browser and VS Code extensions, Maven libraries, compilers, roadmaps, interview questions, eBooks, and core subject tutorials — all under one ecosystem.'
  },
  {
    question: 'Is SatendraCoder just a tools platform or more than that?',
    answer: 'It’s much more than just tools. SatendraCoder is a personal brand turned educational platform that focuses on empowering developers through tutorials, interview prep, coding roadmaps, and curated resources. The platform is evolving into a complete developer education ecosystem with upcoming courses and community engagement.'
  },
  {
    question: 'How can I get started with SatendraCoder?',
    answer: 'Getting started is simple — no sign-up is needed to use most tools. Just visit the site and explore. For enhanced features like saving your work, accessing premium content, or using browser/VS Code extensions, you can optionally register for a free account.'
  }
];



  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
