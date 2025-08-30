import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOG_SERVER_ROUTES } from './features/blog/blog.routes.server';
import { NPM_SERVER_ROUTES } from './features/npm-package/npm.routes.server';

export const serverRoutes: ServerRoute[] = [
  ...BLOG_SERVER_ROUTES,
  ...NPM_SERVER_ROUTES,

  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
