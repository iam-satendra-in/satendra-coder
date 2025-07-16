import { Component } from '@angular/core';
import { MenuCard } from "../menu-card/menu-card";
import { BannerCard } from "../banner-card/banner-card";
import { AboutCard } from "../about-card/about-card";
import { FooterCard } from "../footer-card/footer-card";
import { GlobalContact } from "../../../shared/components/other/global-contact/global-contact";

@Component({
  selector: 'app-index-page',
  imports: [MenuCard, BannerCard, AboutCard, FooterCard, GlobalContact],
  templateUrl: './index-page.html',
  styleUrl: './index-page.scss'
})
export class IndexPage {

}
