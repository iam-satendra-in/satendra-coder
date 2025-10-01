import { Component } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { MenuCard } from '../../pages/home/menu-card/menu-card';
import { FooterCard } from '../../pages/home/footer-card/footer-card';
import { GlobalContact } from '../../shared/components/other/global-contact/global-contact';

@Component({
  selector: 'app-about-layout',
  imports: [MateriallistModule, MenuCard, FooterCard, GlobalContact],
  templateUrl: './about-layout.html',
  styleUrl: './about-layout.scss',
})
export class AboutLayout {}
