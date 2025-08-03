import { Component } from '@angular/core';
import { MenuCard } from '../menu-card/menu-card';
import { BannerCard } from '../banner-card/banner-card';
import { FooterCard } from '../footer-card/footer-card';
import { GlobalContact } from '../../../shared/components/other/global-contact/global-contact';
import { DevToolsCard } from '../dev-tools-card/dev-tools-card';
import { MentorshipCard } from "../mentorship-card/mentorship-card";
import { LearningSection } from "../learning-section/learning-section";
import { LatestBlogCard } from "../latest-blog-card/latest-blog-card";
import { FaqCard } from "../faq-card/faq-card";


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
],
  templateUrl: './index-page.html',
  styleUrl: './index-page.scss',
})
export class IndexPage {}
