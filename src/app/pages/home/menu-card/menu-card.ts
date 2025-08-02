import { Component, HostListener, inject } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { TruncateTextPipe } from '../../../shared/pipes/truncate-text/truncate-text-pipe';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginPage } from '../../../auth/login-page/login-page';


interface MenuItem {
  label: string;
  hasDropdown: boolean;
  dropdownItems?: string[];
}

interface User {
  name: string;
  email: string;
  avatar?: string;
}

@Component({
  selector: 'app-menu-card',
  imports: [MateriallistModule, TruncateTextPipe, RouterLink],
  templateUrl: './menu-card.html',
  styleUrl: './menu-card.scss',
})
export class MenuCard {
  activeDropdown: string | null = null;
  isMobileMenuOpen: boolean = false;
  isLoggedIn: boolean = false;
  currentUser: User | null = null;

  readonly dialog = inject(MatDialog);

  menuItems: MenuItem[] = [
    {
      label: 'Features',
      hasDropdown: true,
      dropdownItems: [
        'Learn Tutorials',
        'Interview Questions',
        'Free Quizzes',
        'Roadmaps',
        'Courses(coming soon)'
      ],
    },
    {
      label: 'Resources',
      hasDropdown: true,
      dropdownItems: [
        'Blog', 
        'Community',
        'Quick Compiler', 
        'Core Subjects',
        'VS & Browser Extensions',
        'NPM Libraries', 
        'e-Books'
      ],
    },
    {
      label: 'Dev-Tools',
      hasDropdown: true,
      dropdownItems: ['JSON Tools', 'CSS/HTML/JS Formatters', 'Converters (HTML ↔ JSX)', 'QR Generator','Others'],
    },
    {
      label: 'Mentorship',
      hasDropdown: false,
    },
     
    {
      label: 'About',
      hasDropdown: false,
      dropdownItems: ['Our Story', 'Team', 'Careers', 'Contact'],
    },
  ];

  // Simulate login/logout for demo purposes
  toggleLogin(): void {
    if (this.isLoggedIn) {
      this.logout();
    } else {
      this.login();
    }
  }

  private login(): void {
    const dialogRef = this.dialog.open(LoginPage, {
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    // Simulate user login
    this.isLoggedIn = true;
    this.currentUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: 'JD',
    };
    this.closeDropdowns();
  }

  private logout(): void {
    this.isLoggedIn = false;
    this.currentUser = null;
    this.closeDropdowns();
  }

  toggleDropdown(menuLabel: string): void {
    if (this.isMobileMenuOpen) {
      // Mobile behavior - toggle dropdown
      this.activeDropdown =
        this.activeDropdown === menuLabel ? null : menuLabel;
    } else {
      // Desktop behavior - toggle dropdown
      this.activeDropdown =
        this.activeDropdown === menuLabel ? null : menuLabel;
    }
  }

  closeDropdowns(): void {
    this.activeDropdown = null;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.closeDropdowns();
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.closeDropdowns();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const navItem = target.closest('.nav-item');
    const mobileToggle = target.closest('.mobile-menu-toggle');

    // Don't close dropdown if clicking within the same nav item or mobile toggle
    if (!navItem && !mobileToggle) {
      this.closeDropdowns();
    } else if (navItem && !this.isMobileMenuOpen) {
      // Desktop: close other dropdowns when clicking different nav item
      const clickedItem = navItem
        .querySelector('.nav-link')
        ?.textContent?.trim();
      if (
        clickedItem &&
        this.activeDropdown &&
        this.activeDropdown !== clickedItem
      ) {
        this.activeDropdown = clickedItem;
      }
    }
  }


}
