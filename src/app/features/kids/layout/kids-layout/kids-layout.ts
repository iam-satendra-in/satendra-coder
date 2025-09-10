import { Component } from '@angular/core';
import { KidsHome } from "../kids-home/kids-home";
import { FooterCard } from "../../../../pages/home/footer-card/footer-card";
import { MenuCard } from "../../../../pages/home/menu-card/menu-card";

@Component({
  selector: 'app-kids-layout',
  imports: [KidsHome, FooterCard, MenuCard],
  templateUrl: './kids-layout.html',
  styleUrl: './kids-layout.scss'
})
export class KidsLayout {

}
