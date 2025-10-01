import { Routes } from '@angular/router';

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
        loadComponent: () =>
          import(
            './components/dashboard/user-management/user-management.component'
          ).then((m) => m.UserManagementComponent),
      },

      {
        path: '**',
        redirectTo: 'admin',
        pathMatch: 'full',
      },
    ],
  },
];
