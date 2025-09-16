import { Component, inject } from '@angular/core';
import { MenuCard } from '../menu-card/menu-card';
import { BannerCard } from '../banner-card/banner-card';
import { FooterCard } from '../footer-card/footer-card';
import { GlobalContact } from '../../../shared/components/other/global-contact/global-contact';
import { DevToolsCard } from '../dev-tools-card/dev-tools-card';
import { MentorshipCard } from '../mentorship-card/mentorship-card';
import { LearningSection } from '../learning-section/learning-section';
import { LatestBlogCard } from '../latest-blog-card/latest-blog-card';
import { FaqCard } from '../faq-card/faq-card';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { SSeo } from '../../../core/service/other/seo/s-seo';
import { LibraryExtensionCard } from '../library-extension-card/library-extension-card';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-index-page',
  imports: [
    BannerCard,
    FooterCard,
    GlobalContact,
    DevToolsCard,
    MentorshipCard,
    LearningSection,
    LatestBlogCard,
    FaqCard,
    MenuCard,
    MateriallistModule,
    LibraryExtensionCard,
    TestimonialsComponent,
  ],
  templateUrl: './index-page.html',
  styleUrl: './index-page.scss',
})
export class IndexPage {
  private seo = inject(SSeo);
  titleSeo: string =
    'Satendra Coder – Empowering Developers with Tools, Tutorials & Tech Insights (Hindi & English)';
  description: string =
    'Satendra Coder is a platform by Satendra Rajput offering developer tools, coding tutorials, and tech insights in Hindi & English.';
  keywords: string =
    'satendra coder, coding tutorials, dev tools, angular, spring boot';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.updateMeta({
      title: this.titleSeo || this.titleSeo.slice(0, 150),
      description: this.description,
      keywords: this.keywords,
      url: 'https://satendracoder.com',
      image: 'https://satendracoder.com/assets/favicon.ico',
    });
  }

  models = [
    {
      name: 'ChatGPT 5',
      role: 'All Rounder Explainer',
      description:
        'Great for questions, brainstorming, and clear step-by-step explanations.',
      side: 'left',
    },
    {
      name: 'Claude Sonnet 4',
      role: 'Co-Writing Master',
      description:
        'Refines polished emails, essays, and scripts while keeping your style.',
      side: 'left',
    },
    {
      name: 'Gemini 2.5 Pro',
      role: 'Long Context Master',
      description:
        'Handles long documents and images, tracking full context and details.',
      side: 'left',
    },
  ];

  modelsright = [
    {
      name: 'Perplexity Sonar Pro',
      role: 'Live Web Researcher',
      description:
        'Delivers fresh answers and news from credible, real-time sources.',
      side: 'right',
    },
    {
      name: 'DeepSeek',
      role: 'Reasoning Specialist',
      description:
        'Excels at logic, math, and coding with clear, detailed solutions.',
      side: 'right',
    },
    {
      name: 'Grok 4',
      role: 'Creative Powerhouse',
      description:
        'Bold, unconventional ideas and punchy copy for trend-focused content.',
      side: 'right',
    },
  ];
}
