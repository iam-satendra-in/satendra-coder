import { Routes } from '@angular/router';

export const TOOLS_ROUTES: Routes = [
    {
        path:'tools',
        loadComponent: () => import('./layout/tools-home/tools-home').then((mod)=>mod.ToolsHome)
    }
];