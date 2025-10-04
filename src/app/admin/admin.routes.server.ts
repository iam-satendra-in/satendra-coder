import { ServerRoute, RenderMode } from '@angular/ssr';

export const ADMIN_SERVER_ROUTES: ServerRoute[] = [
  // Tutorials Management Routes
  {
    path: 'tutorials',
    renderMode: RenderMode.Server,
  },
  {
    path: 'tutorials/create',
    renderMode: RenderMode.Client,
  },
  {
    path: 'tutorials/edit/*',
    renderMode: RenderMode.Server,
  },

  // Courses Management Routes
  {
    path: 'courses',
    renderMode: RenderMode.Server,
  },
  {
    path: 'courses/create',
    renderMode: RenderMode.Client,
  },
  {
    path: 'courses/edit/*',
    renderMode: RenderMode.Server,
  },
];
