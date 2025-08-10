import { Routes } from '@angular/router';
import { BlogCategoryDetails } from './components/blog-category-details/blog-category-details';

export const BLOG_ROUTES: Routes = [
  {
    path: 'blog',
    loadComponent: () =>
      import('./layout/blog-layout/blog-layout').then((mod) => mod.BlogLayout),
  },

  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./layout/blog-details/blog-details').then(
        (mod) => mod.BlogDetails
      ),
  },
  { path: 'category/:slug', component: BlogCategoryDetails },
];
