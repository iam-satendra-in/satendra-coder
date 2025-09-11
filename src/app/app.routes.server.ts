import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOG_SERVER_ROUTES } from './features/blog/blog.routes.server';
import { NPM_SERVER_ROUTES } from './features/npm-package/npm.routes.server';
import { TUTORIAL_SERVER_ROUTES } from './features/grow-learning/tutorials/tutorial.routes.server';

export const serverRoutes: ServerRoute[] = [
  ...BLOG_SERVER_ROUTES,
  ...NPM_SERVER_ROUTES,
  ...TUTORIAL_SERVER_ROUTES,

  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
