import { Component } from '@angular/core';
import { KidsHome } from "../kids-home/kids-home";
import { FooterCard } from "../../../../pages/home/footer-card/footer-card";
import { MenuCard } from "../../../../pages/home/menu-card/menu-card";
import { Router } from '@angular/router';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';


@Component({
  selector: 'app-kids-layout',
  imports: [KidsHome, FooterCard, MenuCard, MateriallistModule],
  templateUrl: './kids-layout.html',
  styleUrl: './kids-layout.scss'
})
export class KidsLayout {

}