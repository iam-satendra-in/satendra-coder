import { Component } from '@angular/core';
import { MenuCard } from '../menu-card/menu-card';
import { BannerCard } from '../banner-card/banner-card';
import { AboutCard } from '../about-card/about-card';
import { FooterCard } from '../footer-card/footer-card';
import { GlobalContact } from '../../../shared/components/other/global-contact/global-contact';
import { ReachoutCard } from '../reachout-card/reachout-card';
import { DevToolsCard } from '../dev-tools-card/dev-tools-card';
import { ExtensionsCard } from '../extensions-card/extensions-card';
import { MentorshipCard } from "../mentorship-card/mentorship-card";
import { LearningSection } from "../learning-section/learning-section";
import { LatestBlogCard } from "../latest-blog-card/latest-blog-card";
import { YoutubeCard } from "../youtube-card/youtube-card";

@Component({
  selector: 'app-index-page',
  imports: [
    BannerCard,
    FooterCard,
    GlobalContact,
    ReachoutCard,
    MenuCard,
    DevToolsCard,
    ExtensionsCard,
    MentorshipCard,
    LearningSection,
    LatestBlogCard,
],
  templateUrl: './index-page.html',
  styleUrl: './index-page.scss',
})
export class IndexPage {}
