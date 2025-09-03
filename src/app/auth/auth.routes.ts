import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login-page/login-page').then(
        (login) => login.LoginPage
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register-page/register-page').then(
        (register) => register.RegisterPage
      ),
  },

  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./forgot-password/forgot-password').then(
        (forgot) => forgot.ForgotPassword
      ),
  },

{
  path: 'auth/reset-password',
  loadComponent: () =>
    import('./reset-password/reset-password').then(
      (reset) => reset.ResetPassword
    ),
},
];