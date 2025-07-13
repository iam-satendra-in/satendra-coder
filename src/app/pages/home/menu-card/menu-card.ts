import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { menuData } from '../utils/menu/menu';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { HoverGradient } from '../../../shared/directives/global/hover-gradient/hover-gradient';
import { CBecomeAMember } from '../../about/c-become-a-member/c-become-a-member';

@Component({
  selector: 'app-menu-card',
  imports: [MateriallistModule, HoverGradient],
  templateUrl: './menu-card.html',
  styleUrl: './menu-card.scss',
})
export class MenuCard {
  CloseOpen: boolean = false;
  isLoggedIn: boolean = false;
  isMobileVisible: boolean = false;
  isDropdownOpen = false;
  UserData: any = null;
  MenuDataDropdown = menuData;
  isVisible: boolean = true;
  currentUrl: string = '';

  constructor(
    private dialog: MatDialog,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Only access sessionStorage if we're in the browser
    if (isPlatformBrowser(this.platformId)) {
      const userStr = sessionStorage.getItem('user');
      this.UserData = userStr ? JSON.parse(userStr) : null;
    }
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    if (this.currentUrl === '/montor') {
      this.isVisible = false;
    }

    if (isPlatformBrowser(this.platformId)) {
      this.isLoggedIn = !!sessionStorage.getItem('token');
    }
  }

  goToAdmin() {
    this.router.navigate(['/admin/users']);
  }

  mobileClick() {
    this.isMobileVisible = true;
  }

  mobileclose() {
    this.isMobileVisible = false;
  }

  CBecomeAMember() {
    this.dialog.open(CBecomeAMember, {
      width: '500px',
      maxHeight: 'auto',
      autoFocus: false,
      disableClose: false
    });
  }
}
