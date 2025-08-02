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
    question: 'Is SatendraCoder free to use?',
    answer: 'Yes, all core utilities like formatters, converters, and compilers are free. We aim to make learning and development tools accessible to everyone.'
  },
  {
    question: 'Do I need to sign up to use the tools?',
    answer: 'No sign-up is required for most tools. However, registering allows you to save your progress, bookmark content, and access premium features.'
  },
  {
    question: 'What programming languages are supported?',
    answer: 'Currently, we support C, C++, Java, JavaScript, TypeScript, Python, HTML, CSS, XML, and more. New languages are added regularly.'
  },
  {
    question: 'Can I use your online compiler for full projects?',
    answer: 'Our compiler is optimized for small to medium code snippets and learning. For larger projects, we recommend using local development environments.'
  },
  {
    question: 'Are your blogs and tutorials beginner friendly?',
    answer: 'Yes. Our content is designed for all levels — from absolute beginners to working professionals — with step-by-step examples and explanations.'
  },
  {
    question: 'Can I suggest a new tool or feature?',
    answer: 'Absolutely! You can reach out via the contact form or connect with us on social platforms. We welcome feedback and ideas.'
  },
  {
    question: 'Is my code or data stored on your servers?',
    answer: 'No, we don’t store your code unless you explicitly save it. All data is processed securely and locally when possible.'
  },
  {
    question: 'Who is behind SatendraCoder?',
    answer: 'This platform is built and maintained by Satendra Rajput, a passionate developer and educator aiming to simplify tech learning.'
  }
];


  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
