import { Routes } from '@angular/router';

export const Compiler_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/compiler-layout/compiler-layout').then(
        (cl) => cl.CompilerLayout
      ),
    children: [
      {
        path: 'html-compiler',
        loadComponent: () =>
          import('./pages/web/html-compiler/html-compiler').then(
            (hcom) => hcom.HtmlCompiler
          ),
      },
    ],
  },
];
