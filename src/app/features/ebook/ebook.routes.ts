import { Routes } from '@angular/router';

export const EBOOK_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/ebook-list/ebook-list.component').then(
        (m) => m.EbookListComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/ebook-detail/ebook-detail.component').then(
        (m) => m.EbookDetailComponent
      ),
  },

  {
    path: 'library',
    loadComponent: () =>
      import('./pages/my-library/my-library.component').then(
        (m) => m.MyLibraryComponent
      ),
  },
];
