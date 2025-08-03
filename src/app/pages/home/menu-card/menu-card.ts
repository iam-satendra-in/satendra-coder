import { Component, HostListener, inject } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { TruncateTextPipe } from '../../../shared/pipes/truncate-text/truncate-text-pipe';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginPage } from '../../../auth/login-page/login-page';
import { link } from 'node:fs';


interface MenuItem {
  label: string;
  link?: string;
  hasDropdown: boolean;
  dropdownItems?: any[];
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
        {
          name: "Learn Tutorials",
          link: ""
        },
        {
          name: "Core Subjects",
          link: ""
        },
        {
          name: "Interview Questions",
          link: ""
        },
        {
          name: "Free Quizzes",
          link: ""
        },
        {
          name: "Roadmaps",
          link: ""
        },
      ],
    },
    
    {
      label: 'Resources',
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Blog",
          link: ""
        },
        {
          name: "Community",
          link: ""
        },
        {
          name: "Online Compiler",
          link: ""
        },
        {
          name: "eBooks Library",
          link: ""
        },
        {
          name: "Mentorship",
          link: ""
        }
      ],
    },
    {
      label: 'Dev-Tools',
      hasDropdown: true,
      dropdownItems: [
        {
          name: "JSON Tools",
          link: ""
        },
        {
          name: "Code Formatters",
          link: ""
        },
        {
          name: "Code Converters",
          link: ""
        },
        {
          name: "QR Generator",
          link: ""
        },
        {
          name: "More Tools",
          link: ""
        }],
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
