import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { MenuCard } from "../../../../pages/home/menu-card/menu-card";
import { CompilerBanner } from "../../pages/compiler-banner/compiler-banner";
import { CompilerList } from "../../pages/compiler-list/compiler-list";
import { GlobalContact } from "../../../../shared/components/other/global-contact/global-contact";
import { FooterCard } from "../../../../pages/home/footer-card/footer-card";
import { TopMenu } from "../../../../pages/home/top-menu/top-menu";


@Component({
  selector: 'app-compiler-layout',
  imports: [RouterOutlet, CompilerBanner, CompilerList, GlobalContact, FooterCard, TopMenu],
  templateUrl: './compiler-layout.html',
  styleUrl: './compiler-layout.scss'
})
export class CompilerLayout {
     constructor(public router: Router) {}
}
