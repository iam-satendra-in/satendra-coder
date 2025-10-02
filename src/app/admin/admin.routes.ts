import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';

export const Admin_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/admin-layout/admin-layout').then(
        (admin) => admin.AdminLayout
      ),
    children: [
      {
        path: '',
        title: 'Dashboard - Admin | SatendraCoder',
        loadComponent: () =>
          import(
            './components/dashboard/admin-dashboard/admin-dashboard.component'
          ).then((m) => m.AdminDashboardComponent),
      },
      {
        path: 'profile',
        title: 'Profile - Admin | SatendraCoder',
        loadComponent: () =>
          import('./components/profile/admin-user/admin-user.component').then(
            (m) => m.AdminUserComponent
          ),
      },
      {
        path: 'users',
        title: 'User Management - Admin | SatendraCoder',
        canActivate: [adminGuard],
        data: { roles: ['MASTER'] },
        loadComponent: () =>
          import(
            './components/dashboard/user-management/user-management.component'
          ).then((m) => m.UserManagementComponent),
      },
      {
        path: 'settings',
        title: 'Settings - Admin | SatendraCoder',
        loadComponent: () =>
          import('./components/dashboard/setting/setting.component').then(
            (m) => m.SettingComponent
          ),
      },

      // Tutorials Management Routes
      {
        path: 'tutorials',
        title: 'Tutorials - Admin | SatendraCoder',
        loadComponent: () =>
          import(
            './components/contents/tutorials/admin-tutorial-list/admin-tutorial-list.component'
          ).then((m) => m.AdminTutorialListComponent),
      },
      {
        path: 'tutorials/create',
        title: 'Create Tutorial - Admin | SatendraCoder',
        loadComponent: () =>
          import(
            './components/contents/tutorials/admin-tutorial-form/admin-tutorial-form.component'
          ).then((m) => m.AdminTutorialFormComponent),
      },
      {
        path: 'tutorials/edit/:id',
        title: 'Edit Tutorial - Admin | SatendraCoder',
        loadComponent: () =>
          import(
            './components/contents/tutorials/admin-tutorial-form/admin-tutorial-form.component'
          ).then((m) => m.AdminTutorialFormComponent),
      },

      // Courses Management Routes
      {
        path: 'courses',
        title: 'Courses - Admin | SatendraCoder',
        loadComponent: () =>
          import(
            './components/contents/courses/admin-course-list/admin-course-list.component'
          ).then((m) => m.AdminCourseListComponent),
      },
      {
        path: 'courses/create',
        title: 'Create Course - Admin | SatendraCoder',
        loadComponent: () =>
          import(
            './components/contents/courses/admin-course-form/admin-course-form.component'
          ).then((m) => m.AdminCourseFormComponent),
      },
      {
        path: 'courses/edit/:id',
        title: 'Edit Course - Admin | SatendraCoder',
        loadComponent: () =>
          import(
            './components/contents/courses/admin-course-form/admin-course-form.component'
          ).then((m) => m.AdminCourseFormComponent),
      },
      //

      {
        path: '**',
        redirectTo: 'admin',
        pathMatch: 'full',
      },
    ],
  },
];
