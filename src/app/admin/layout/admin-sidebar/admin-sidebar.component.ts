import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-admin-sidebar',
  imports: [MateriallistModule, CommonModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss',
})
export class AdminSidebarComponent {
  sidebarOpen$: Observable<boolean>;
  activeDropdown: string | null = null;

  menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard Overview',
      icon: 'fa-tachometer-alt',
      route: '/admin',
    },
    {
      id: 'content',
      label: 'Content Management',
      icon: 'fa-edit',
      children: [
        {
          id: 'tutorials',
          label: 'Tutorials',
          icon: 'fa-book',
          route: '/admin/tutorials',
        },
        {
          id: 'courses',
          label: 'Courses',
          icon: 'fa-graduation-cap',
          route: '/admin/courses',
        },
        { id: 'blogs', label: 'Blogs', icon: 'fa-blog', route: '/admin/blogs' },
        {
          id: 'ebooks',
          label: 'E-books',
          icon: 'fa-book-open',
          route: '/admin/ebooks',
        },
      ],
    },
    {
      id: 'assessment',
      label: 'Assessments',
      icon: 'fa-question-circle',
      children: [
        {
          id: 'quizzes',
          label: 'Quizzes',
          icon: 'fa-clipboard-check',
          route: '/admin/quizzes',
        },
        {
          id: 'interviews',
          label: 'Interviews',
          icon: 'fa-users',
          route: '/admin/interviews',
        },
      ],
    },
    {
      id: 'learning',
      label: 'Learning Paths',
      icon: 'fa-route',
      children: [
        {
          id: 'roadmaps',
          label: 'Roadmaps',
          icon: 'fa-map',
          route: '/admin/roadmaps',
        },
      ],
    },
    {
      id: 'users',
      label: 'User Management',
      icon: 'fa-users-cog',
      route: '/admin/users',
    },

    {
      id: 'public-access',
      label: 'Public Access',
      icon: 'fa-globe',
      children: [
        {
          id: 'public-tutorials',
          label: 'View Tutorials',
          icon: 'fa-book',
          route: '/public/tutorials',
        },
        {
          id: 'public-quizzes',
          label: 'Take Quizzes',
          icon: 'fa-question-circle',
          route: '/public/quizzes',
        },
        {
          id: 'public-interviews',
          label: 'Interview Questions',
          icon: 'fa-users',
          route: '/public/interviews',
        },
      ],
    },
    {
      id: 'payments',
      label: 'Payments',
      icon: 'fa-credit-card',
      route: '/admin/payments',
    },
    {
      id: 'profile',
      label: 'User Profile',
      icon: 'fa-user-circle',
      route: '/admin/profile',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'fa-cog',
      route: '/admin/settings',
    },
  ];

  constructor(private adminService: AdminService) {
    this.sidebarOpen$ = this.adminService.sidebarOpen$;
  }

  toggleDropdown(itemId: string) {
    this.activeDropdown = this.activeDropdown === itemId ? null : itemId;
  }
}
