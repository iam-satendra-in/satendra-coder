import { Component } from '@angular/core';
import { MenuCard } from '../menu-card/menu-card';
import { BannerCard } from '../banner-card/banner-card';
import { AboutCard } from '../about-card/about-card';
import { FooterCard } from '../footer-card/footer-card';
import { GlobalContact } from '../../../shared/components/other/global-contact/global-contact';
import { RoadmapCard } from '../roadmap-card/roadmap-card';
import { ReachoutCard } from '../reachout-card/reachout-card';
import { DevToolsCard } from '../dev-tools-card/dev-tools-card';
import { ExtensionsCard } from '../extensions-card/extensions-card';
import { CompilerCard } from '../compiler-card/compiler-card';

@Component({
  selector: 'app-index-page',
  imports: [
    BannerCard,
    AboutCard,
    FooterCard,
    GlobalContact,
    RoadmapCard,
    ReachoutCard,
    MenuCard,
    DevToolsCard,
    ExtensionsCard,
    CompilerCard,
  ],
  templateUrl: './index-page.html',
  styleUrl: './index-page.scss',
})
export class IndexPage {}
