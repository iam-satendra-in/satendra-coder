import { ServerRoute, RenderMode } from '@angular/ssr';

export const ADMIN_SERVER_ROUTES: ServerRoute[] = [
  // Tutorials Management Routes
  { path: 'tutorials', renderMode: RenderMode.Server },
  { path: 'tutorials/create', renderMode: RenderMode.Server },
  { path: 'tutorials/edit/:id', renderMode: RenderMode.Server },

  // Courses Management Routes
  { path: 'courses', renderMode: RenderMode.Server },
  { path: 'courses/create', renderMode: RenderMode.Server },
  { path: 'courses/edit/:id', renderMode: RenderMode.Server },
];
