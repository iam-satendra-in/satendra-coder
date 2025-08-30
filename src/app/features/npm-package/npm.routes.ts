import { Routes } from '@angular/router';

export const NPM_ROUTES: Routes = [
  {
    path: 'npm-package',
    loadComponent: () =>
      import('./layout/npm-layout/npm-layout').then((m) => m.NpmLayout),
  },
  {
    path: 'npm-package/:id',
    loadComponent: () =>
      import('./components/npm-pack-details/npm-pack-details').then(
        (m) => m.NpmPackDetails
      ),
  },
];
