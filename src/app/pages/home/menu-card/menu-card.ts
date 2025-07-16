import { Component, computed, inject, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { menuData } from '../utils/menu/menu';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { HoverGradient } from '../../../shared/directives/global/hover-gradient/hover-gradient';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu-card',
  imports: [MateriallistModule, HoverGradient],
  templateUrl: './menu-card.html',
  styleUrl: './menu-card.scss',
})
export class MenuCard {
  CloseOpen = false;
  isLoggedIn = false;
  isMobileVisible = false;
  isDropdownOpen = false;
  UserData: any = null;
  MenuDataDropdown = menuData;
  isVisible = true;

  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  // ✅ Define route signal once
  currentUrl = signal(this.router.url);

  // ✅ Signal-based condition — DO NOT reassign in constructor
  hideAskMe = computed(() =>
    ['/login', '/admin', '/dashboard', '/montor'].includes(this.currentUrl())
  );

  constructor(private dialog: MatDialog) {
    // ✅ Update signal value on route change
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set(event.urlAfterRedirects);
      });

    // ✅ Platform check for sessionStorage
    if (isPlatformBrowser(this.platformId)) {
      const userStr = sessionStorage.getItem('user');
      this.UserData = userStr ? JSON.parse(userStr) : null;
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
}