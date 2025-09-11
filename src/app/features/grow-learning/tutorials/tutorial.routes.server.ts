import { ServerRoute, RenderMode } from '@angular/ssr';

export const TUTORIAL_SERVER_ROUTES: ServerRoute[] = [
  {
    path: 'tutorials',
    renderMode: RenderMode.Server, // SSR only (no prerender)
  },
  {
    path: 'tutorials/:id',
    renderMode: RenderMode.Server, // SSR only (no prerender)
  },
];
