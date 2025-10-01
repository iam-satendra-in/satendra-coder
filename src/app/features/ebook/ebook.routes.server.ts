import { ServerRoute, RenderMode } from '@angular/ssr';

export const EBOOK_SERVER_ROUTES: ServerRoute[] = [
  {
    path: 'ebook',
    renderMode: RenderMode.Server, // SSR only (no prerender)
  },
  {
    path: 'ebook/:id',
    renderMode: RenderMode.Server, // SSR only (no prerender)
    // Agar prerender karna ho to yahan getPrerenderParams de sakte ho
  },
];
