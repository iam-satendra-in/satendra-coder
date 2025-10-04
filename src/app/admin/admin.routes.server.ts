import { ServerRoute, RenderMode } from '@angular/ssr';

export const ADMIN_SERVER_ROUTES: ServerRoute[] = [
  // // Dashboard & Profile
  // { path: '', renderMode: RenderMode.Server },
  // { path: 'profile', renderMode: RenderMode.Server },
  // { path: 'users', renderMode: RenderMode.Server },
  // { path: 'settings', renderMode: RenderMode.Server },

  // Tutorials
  { path: 'tutorials', renderMode: RenderMode.Server },
  { path: 'tutorials/create', renderMode: RenderMode.Server },
  { path: 'tutorials/edit/:id', renderMode: RenderMode.Server },

  // Courses
  { path: 'courses', renderMode: RenderMode.Server },
  { path: 'courses/create', renderMode: RenderMode.Server },
  { path: 'courses/edit/:id', renderMode: RenderMode.Server },
];
