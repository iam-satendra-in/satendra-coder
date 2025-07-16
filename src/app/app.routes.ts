import { Routes } from '@angular/router';
import { IndexPage } from './pages/home/index-page/index-page';

export const routes: Routes = [
    {
        path:'', component:IndexPage
    },


    // Auth Routes is lazy loaded
    {
      path: 'auth',
      loadChildren: () =>
        import('./auth/auth.routes').then((auth) => auth.AUTH_ROUTES),
    },
  

     //Company is lazy loaded
    {
      path: '',
      loadComponent: () =>
        import('./layout/about-layout/about-layout').then(
          (layout) => layout.AboutLayout
        ),
      children: [
        //@_about-us routes
        {
          path: 'about',
          loadComponent: () =>
            import('./pages/about/c-about-us/c-about-us').then(
              (company) => company.CAboutUs
            ),
        },
        //@_contact-us routes
        {
          path: 'contact',
          loadComponent: () =>
            import('./pages/about/c-contact-us/c-contact-us').then(
              (company) => company.CContactUs
            ),
        },
        //@_pricing-policy routes
        {
          path: 'pricing-policy',
          loadComponent: () =>
            import(
              './pages/about/c-pricing-policy/c-pricing-policy'
            ).then((company) => company.CPricingPolicy),
        },
        //@_privacy-policy routes
        {
          path: 'privacy-policy',
          loadComponent: () =>
            import(
              './pages/about/c-privacy-policy/c-privacy-policy'
            ).then((company) => company.CPrivacyPolicy),
        },
        //@_terms-and-conditions routes
        {
          path: 'terms-and-conditions',
          loadComponent: () =>
            import('./pages/about/c-terms/c-terms').then(
              (company) => company.CTerms
            ),
        },
        //@_donate routes
        {
          path: 'donate',
          loadComponent: () =>
            import('./pages/about/c-donate/c-donate').then(
              (company) => company.CDonate
            ),
        },

        
      ],
    },
    //@_ask-me-anything routes
        {
          path: 'ask-me-anything',
          loadComponent: () =>
            import('./pages/about/ask-me-anything/ask-me-anything').then(
              (company) => company.AskMeAnything
            ),
        },
];
