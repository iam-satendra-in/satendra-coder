import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-faq-card',
  imports: [MateriallistModule],
  templateUrl: './faq-card.html',
  styleUrl: './faq-card.scss',
})
export class FaqCard {
  activeIndex: number | null = null;

  faqs = [
    {
      question: 'What is Satendra Academy and who is it for?',
      answer:
        'Satendra Academy is an all-in-one platform built for students, developers, and tech professionals. It offers free learning resources, coding tools, extensions, and guides to help you build skills and stay industry-ready. Whether you’re just starting out or looking to grow, Satendra Academy is for you.',
    },
    {
      question: 'What features and tools does Satendra Academy offer?',
      answer:
        'Satendra Academy provides a wide range of tools including code formatters, JSON viewers, QR code generators, HTML↔JSX converters, and compilers. It also offers tutorials, interview prep, roadmaps, eBooks, and browser/VS Code extensions — all integrated into one developer ecosystem.',
    },
    {
      question: 'Is Satendra Academy just a tools platform or more than that?',
      answer:
        'It’s more than just tools. Satendra Academy is an educational and productivity platform that combines developer utilities with structured learning content, mentorship, and community support. It’s designed to support your full dev journey — from beginner to pro.',
    },
    {
      question: 'How can I get started with Satendra Academy?',
      answer:
        'Just visit the website and start using the tools — no sign-up required. To unlock additional features like saving your work, syncing extensions, or accessing mentorship, you can create a free account.',
    },
    {
      question: 'Do I need to install anything to use Satendra Academy tools?',
      answer:
        'No installation is needed for most features. Everything works directly in your browser. However, optional extensions for VS Code and Chrome are available to bring the tools to your daily workflow.',
    },
    {
      question: 'Is the platform completely free to use?',
      answer:
        'Yes, most tools and learning content are free to use. Some advanced features and mentorship offerings may be part of a future premium plan — but the core platform will always remain free and accessible.',
    },
    {
      question: 'Can I contribute to Satendra Academy or suggest features?',
      answer:
        'Absolutely! Feedback and contributions are welcome. You can reach out via the community section, submit suggestions, or even contribute to open-source tools if published on GitHub.',
    },
    {
      question:
        'What makes Satendra Academy different from other dev platforms?',
      answer:
        'Satendra Academy brings tools, learning, community, and productivity under one roof. Unlike most platforms, it doesn’t just focus on one area — it bridges the gap between coding utilities, real-world learning, and developer career growth.',
    },
  ];

  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
