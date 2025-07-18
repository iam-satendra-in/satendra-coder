import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';



@Component({
  selector: 'app-top-menu',
  imports: [CommonModule, MateriallistModule],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})
export class TopMenu {
 isLoggedIn = false; // Replace with AuthService
  username = 'Satendra';

  showMenu:any = {
    learning: false,
    compilers: false,
    user: false
  };

  toggleMenu(menu: string) {
    this.showMenu[menu] = !this.showMenu[menu];
  }

  closeAll() {
    this.showMenu = {
      learning: false,
      compilers: false,
      user: false
    };
  }

  logout() {
    this.isLoggedIn = false;
  }
}