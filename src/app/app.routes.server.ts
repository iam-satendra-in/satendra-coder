import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOG_SERVER_ROUTES } from './features/blog/blog.routes.server';
import { TUTORIAL_SERVER_ROUTES } from './features/grow-learning/tutorials/tutorial.routes.server';
import { EBOOK_SERVER_ROUTES } from './features/ebook/ebook.routes.server';
import { ADMIN_SERVER_ROUTES } from './admin/admin.routes.server';

export const serverRoutes: ServerRoute[] = [
  ...ADMIN_SERVER_ROUTES,
  ...BLOG_SERVER_ROUTES,
  ...TUTORIAL_SERVER_ROUTES,
  ...EBOOK_SERVER_ROUTES,

  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
