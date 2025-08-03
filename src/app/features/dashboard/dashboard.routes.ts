import { Routes } from '@angular/router';

export const Dashboard_ROUTES: Routes = [
    {
        path:'dashboard',
        loadComponent:()=> import('./layout/dashboard-layout/dashboard-layout').then((dash)=>dash.DashboardLayout)
    }
];