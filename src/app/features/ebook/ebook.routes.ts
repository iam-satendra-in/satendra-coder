import { Routes } from '@angular/router';

export const EBOOK_ROUTES: Routes = [
  {
    path: 'ebook',
    loadComponent: () =>
      import('./pages/ebook-list/ebook-list.component').then(
        (m) => m.EbookListComponent
      ),
  },
  {
    path: 'ebook/:id',
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
