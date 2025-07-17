import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';


interface MenuItem {
  label: string;
  icon?: string;
  items?: SubMenuItem[];
  href?: string;
}

interface SubMenuItem {
  label: string;
  description?: string;
  icon?: string;
  href: string;
  badge?: string;
}

interface User {
  name: string;
  email: string;
  avatar?: string;
}
@Component({
  selector: 'app-top-menu',
  imports: [CommonModule, MateriallistModule],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})
export class TopMenu {

  activeMenu = signal<string | null>(null);
  showUserDropdown = signal(false);
  showMobileMenu = signal(false);
  isLoggedIn = signal(false);
  currentUser = signal<User | null>(null);

  menuItems: MenuItem[] = [
    {
      label: 'Products',
      icon: 'grid',
      items: [
        { label: 'Analytics Dashboard', description: 'Real-time insights and reporting', icon: 'chart', href: '#', badge: 'Popular' },
        { label: 'API Gateway', description: 'Secure and scalable API management', icon: 'server', href: '#' },
        { label: 'Database Tools', description: 'Manage your data with ease', icon: 'database', href: '#' },
        { label: 'Monitoring Suite', description: 'Keep track of system health', icon: 'activity', href: '#', badge: 'New' },
        { label: 'Security Scanner', description: 'Automated vulnerability detection', icon: 'shield', href: '#' },
        { label: 'Code Reviews', description: 'Collaborative code quality tools', icon: 'code', href: '#' }
      ]
    },
    {
      label: 'Dev Tools',
      icon: 'tool',
      items: [
        { label: 'Code Editor', description: 'Advanced web-based IDE', icon: 'edit', href: '#' },
        { label: 'Terminal Access', description: 'Secure cloud terminals', icon: 'terminal', href: '#' },
        { label: 'Git Integration', description: 'Seamless version control', icon: 'git-branch', href: '#' },
        { label: 'Package Manager', description: 'Dependency management made easy', icon: 'package', href: '#' },
        { label: 'Testing Suite', description: 'Automated testing tools', icon: 'check-circle', href: '#' },
        { label: 'Deployment Tools', description: 'One-click deployments', icon: 'upload', href: '#' }
      ]
    },
    {
      label: 'Resources',
      icon: 'book',
      items: [
        { label: 'Documentation', description: 'Comprehensive guides and tutorials', icon: 'book-open', href: '#' },
        { label: 'API Reference', description: 'Complete API documentation', icon: 'code', href: '#' },
        { label: 'Video Tutorials', description: 'Step-by-step video guides', icon: 'play-circle', href: '#' },
        { label: 'Community Forum', description: 'Connect with other developers', icon: 'users', href: '#' },
        { label: 'Blog', description: 'Latest updates and insights', icon: 'file-text', href: '#' },
        { label: 'Support Center', description: 'Get help when you need it', icon: 'help-circle', href: '#' }
      ]
    },
    
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoggedIn.set(true);
      this.currentUser.set({
        name: 'John Doe',
        email: 'john.doe@example.com'
      });
    }, 8000);
  }

@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement;

  if (
    !target.closest('.user-menu') &&
    !target.closest('.nav-item') &&
    !target.closest('.mega-menu') // ✅ Add this line
  ) {
    this.showUserDropdown.set(false);
    this.activeMenu.set(null);
  }
}





  toggleMenu(menuName: string) {
    this.activeMenu.update(current => current === menuName ? null : menuName);
  }

  toggleUserMenu() {
    this.showUserDropdown.update(show => !show);
  }

  toggleMobileMenu() {
    this.showMobileMenu.update(show => !show);
  }

  closeMobileMenu() {
    this.showMobileMenu.set(false);
  }

  showLogin() {
    console.log('Show login modal');
  }

  showRegister() {
    console.log('Show register modal');
  }

  logout() {
    this.isLoggedIn.set(false);
    this.currentUser.set(null);
    this.showUserDropdown.set(false);
    this.showMobileMenu.set(false);
    console.log('User logged out');
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  getIconPath(iconName: string): string {
    const icons: { [key: string]: string } = { /* existing icons */ };
    return icons[iconName] || icons['default'];
  }
}
