import { Component } from '@angular/core';
import { MenuCard } from "../../../../pages/home/menu-card/menu-card";
import { FooterCard } from "../../../../pages/home/footer-card/footer-card";

@Component({
  selector: 'app-npm-pack-details',
  imports: [MenuCard, FooterCard],
  templateUrl: './npm-pack-details.html',
  styleUrl: './npm-pack-details.scss'
})
export class NpmPackDetails {

}
