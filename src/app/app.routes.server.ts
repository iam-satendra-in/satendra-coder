import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOG_SERVER_ROUTES } from './features/blog/blog.routes.server';

export const serverRoutes: ServerRoute[] = [
  ...BLOG_SERVER_ROUTES,

  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
