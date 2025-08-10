import { ServerRoute, RenderMode } from '@angular/ssr';

export const BLOG_SERVER_ROUTES: ServerRoute[] = [
  {
    path: 'blog',
    renderMode: RenderMode.Server // SSR only (no prerender)
  },
  {
    path: 'blog/:id',
    renderMode: RenderMode.Server // SSR only (no prerender)
    // Agar prerender karna ho to yahan getPrerenderParams de sakte ho
    // getPrerenderParams: () => [{ id: '1' }, { id: '2' }]
  },
  {
    path: 'category/:slug',
    renderMode: RenderMode.Server
  }
];
