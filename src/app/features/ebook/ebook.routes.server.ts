import { ServerRoute, RenderMode } from '@angular/ssr';

export const EBOOK_SERVER_ROUTES: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server, // SSR only (no prerender)
  },
  {
    path: ':id',
    renderMode: RenderMode.Server, // SSR only (no prerender)
    // Agar prerender karna ho to yahan getPrerenderParams de sakte ho
    // getPrerenderParams: () => [{ id: '1' }, { id: '2' }]
  },
];
