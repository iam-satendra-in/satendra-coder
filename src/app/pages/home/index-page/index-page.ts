import { Component, inject } from '@angular/core';
import { MenuCard } from '../menu-card/menu-card';
import { BannerCard } from '../banner-card/banner-card';
import { FooterCard } from '../footer-card/footer-card';
import { GlobalContact } from '../../../shared/components/other/global-contact/global-contact';
import { MentorshipCard } from '../mentorship-card/mentorship-card';
import { LearningSection } from '../learning-section/learning-section';
import { LatestBlogCard } from '../latest-blog-card/latest-blog-card';
import { FaqCard } from '../faq-card/faq-card';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { SSeo } from '../../../core/service/other/seo/s-seo';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-index-page',
  imports: [
    BannerCard,
    FooterCard,
    GlobalContact,
    MentorshipCard,
    LearningSection,
    LatestBlogCard,
    FaqCard,
    MenuCard,
    MateriallistModule,
    TestimonialsComponent,
  ],
  templateUrl: './index-page.html',
  styleUrl: './index-page.scss',
})
export class IndexPage {
  private seo = inject(SSeo);
  titleSeo: string =
    'Satendra Academy – Learn Coding, AI/ML, DSA, Kids Learning & Communication';
  description: string =
    'Master coding, DSA, AI/ML & communication with Satendra Academy. Interactive tutorials, quizzes, roadmaps, kids coding & free eBooks for learners.';
  keywords: string =
    'Satendra Academy,Coding tutorials for beginners,Java & Angular learning,AI/ML tutorials online,DSA interview preparation,Computer Science fundamentals,Kids coding courses online,Fun maths & coding for kids,Communication skills for developers,Learn English for IT professionals,Online compiler for coding,Programming learning roadmaps';

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
}
