import { Component, inject, Input } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [MateriallistModule, CommonModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss',
})
export class AdminSidebarComponent {
  isOpen: { [key: string]: boolean } = {}; // Tracks dropdown open states
  activeMenu: string = ''; // Tracks active main menu
  activeSubmenu: string = ''; // Tracks active submenu
  currentUrl: string = '/dashboard/overview'; // Holds the current URL

  router = inject(Router);

  ngOnInit(): void {
    this.toggleDropdown('dashboard', true);

    // Subscribe to Router events to track the current URL
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects; // Store the current URL
        this.updateActiveMenu();
      }
    });
  }

  toggleDropdown(menuKey: string, hasChildren: boolean): void {
    if (!hasChildren) {
      // If no children, directly set it as active menu
      this.setActiveMenu(menuKey);
      return;
    }

    // Close other dropdowns
    Object.keys(this.isOpen).forEach((key) => {
      if (key !== menuKey) {
        this.isOpen[key] = false;
      }
    });

    // Toggle current dropdown
    this.isOpen[menuKey] = !this.isOpen[menuKey];
    this.setActiveMenu(menuKey);
  }

  setActiveMenu(menuKey: string): void {
    this.activeMenu = menuKey;
    this.activeSubmenu = ''; // Reset active submenu
  }

  setActiveSubmenu(submenuKey: string): void {
    this.activeSubmenu = submenuKey;
  }

  toggleProfileMenu(): void {
    alert('Profile menu clicked!');
  }

  menuItems: any = [
    {
      //heading: 'Dashboard',
      menus: [
        {
          label: 'Dashboard',
          icon: 'dashboard',
          key: 'dashboard',
          url: '/dashboard', // URL for main menu
          children: [
            {
              label: 'Overview Dashboard',
              key: 'overview',
              icon: 'overview',
              url: '/dashboard/overview',
            },
            {
              label: 'Instructor Dashboard',
              key: 'instructor',
              icon: 'developer_guide',
              url: '/dashboard/instructor',
            },
            {
              label: 'Student Dashboard',
              key: 'student',
              icon: 'overview',
              url: '/dashboard/student',
            },
          ],
        },
      ],
    },

    {
      heading: 'All-Programs',
      menus: [
        {
          label: 'Tutorials',
          icon: '📚',
          key: 'tutorial',
          children: [
            {
              label: 'Add Category',
              key: 'addcategory',
              icon: 'add_circle',
              url: '/courses/basic',
            },
            {
              label: 'Create Article',
              key: 'createarticle',
              icon: 'post_add',
              url: '/courses/basic',
            },
            {
              label: 'Articles List',
              key: 'articlelist',
              icon: 'list_alt',
              url: '/courses/advanced',
            },
          ],
        },

        {
          label: 'Quizzes',
          icon: 'quiz',
          key: 'quizzes',
          children: [
            {
              label: 'Add Category',
              key: 'addcategory',
              icon: 'add_circle',
              url: '/courses/basic',
            },
            {
              label: 'Create Quiz',
              key: 'createarticle',
              icon: 'post_add',
              url: '/courses/basic',
            },
            {
              label: 'Quizzes List',
              key: 'articlelist',
              icon: 'list_alt',
              url: '/courses/advanced',
            },
          ],
        },

        {
          label: 'Exercises',
          icon: 'bug_report',
          key: 'exercises',
          children: [
            {
              label: 'Add Category',
              key: 'addcategory',
              icon: 'add_circle',
              url: '/courses/basic',
            },
            {
              label: 'Create Exercise',
              key: 'createarticle',
              icon: 'post_add',
              url: '/courses/basic',
            },
            {
              label: 'Exercises List',
              key: 'articlelist',
              icon: 'list_alt',
              url: '/courses/advanced',
            },
          ],
        },

        {
          label: 'Membership',
          icon: '👤',
          key: 'membership',
          url: '/membership',
        },
        { label: 'Helpdesk', icon: '❓', key: 'helpdesk' },
        { label: 'Invoice', icon: '🧾', key: 'invoice' },
      ],
    },

    {
      heading: 'Widget',
      menus: [
        {
          label: 'Statistics',
          icon: '📈',
          key: 'statistics',
          url: '/statistics',
        },
        { label: 'Data', icon: '📄', key: 'data', url: '/data' },
        { label: 'Chart', icon: '📊', key: 'chart', url: 'https://google.com' },
      ],
    },

    {
      heading: 'Admin Panel',
      menus: [
        {
          label: 'Online Courses',
          icon: '📚',
          key: 'courses',
          children: [
            {
              label: 'Basic',
              key: 'basic',
              icon: 'overview',
              url: '/courses/basic',
            },
            {
              label: 'Advanced',
              key: 'advanced',
              icon: 'overview',
              url: '/courses/advanced',
            },
          ],
        },
        {
          label: 'Membership',
          icon: '👤',
          key: 'membership',
          url: '/membership',
        },
        { label: 'Helpdesk', icon: '❓', key: 'helpdesk' },
        { label: 'Invoice', icon: '🧾', key: 'invoice' },
      ],
    },
  ];

  updateActiveMenu(): void {
    // Match the current URL with the menu or submenu
    this.menuItems.forEach((section: { menus: any[] }) => {
      section.menus.forEach((menu) => {
        if (menu.url === this.currentUrl) {
          this.activeMenu = menu.key;
          this.activeSubmenu = '';
        }
        if (menu.children) {
          menu.children.forEach((child: { url: string; key: string }) => {
            if (child.url === this.currentUrl) {
              this.activeMenu = menu.key; // Set parent menu active
              this.activeSubmenu = child.key; // Set active submenu
              this.isOpen[menu.key] = true; // Expand the parent menu
            }
          });
        }
      });
    });
  }

  navigate(menu: any): void {
    if (menu.url) {
      // Check if it's an external link
      if (menu.url.startsWith('http')) {
        window.open(menu.url, '_blank'); // Open external links in new tab
      } else {
        this.router.navigate([menu.url]); // Navigate to Angular routes
      }
    }
  }
}
