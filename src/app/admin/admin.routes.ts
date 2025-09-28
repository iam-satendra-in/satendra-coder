import { Routes } from '@angular/router';

export const Admin_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/admin-layout/admin-layout').then(
        (admin) => admin.AdminLayout
      ),
    children: [],
  },
];
