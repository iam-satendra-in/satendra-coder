import { ServerRoute, RenderMode } from '@angular/ssr';

export const NPM_SERVER_ROUTES: ServerRoute[] = [
  {
    path: 'npm-package',
    renderMode: RenderMode.Server // SSR only (no prerender)
  },
  {
    path: 'npm-package/:id',
    renderMode: RenderMode.Server // SSR only (no prerender)
    // Agar prerender karna ho to yahan getPrerenderParams de sakte ho
    // getPrerenderParams: () => [{ id: '1' }, { id: '2' }]
  },

];
