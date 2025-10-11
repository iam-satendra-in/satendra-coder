import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MenuCard } from '../../../../pages/home/menu-card/menu-card';
import { FooterCard } from '../../../../pages/home/footer-card/footer-card';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { SSeo } from '../../../../core/service/other/seo/s-seo';
import { GlobalContact } from '../../../../shared/components/other/global-contact/global-contact';

@Component({
  selector: 'app-npm-layout',
  imports: [MenuCard, FooterCard, MateriallistModule, GlobalContact],
  templateUrl: './npm-layout.html',
  styleUrl: './npm-layout.scss',
})
export class NpmLayout {
  NPM_packages = [
    {
      name: 'sc-angular-snippets',
      desc: 'Ready-made Angular snippets (components, services, pipes, interceptors).',
      version: '1.0.0',
      downloads: '500+',
      link: 'https://www.npmjs.com/package/sc-angular-snippets',
      linkStatic: '/sc-angular-snippets',
    },
    {
      name: 'sc-angular-forms-helper',
      desc: 'Reactive & template-driven form validators (email, phone, password, OTP).',
      version: '1.0.0',
      downloads: '300+',
      link: 'https://www.npmjs.com/package/sc-angular-forms-helper',
      linkStatic: '/sc-angular-forms-helper',
    },
    {
      name: 'sc-angular-tailwind-ui',
      desc: 'Tailwind + Angular UI components (buttons, modals, cards).',
      version: '1.0.0',
      downloads: '400+',
      link: 'https://www.npmjs.com/package/sc-angular-tailwind-ui',
      linkStatic: '/sc-angular-tailwind-ui',
    },
    {
      name: 'sc-angular-toastify',
      desc: 'Toast/notification service (success, error, warning).',
      version: '1.0.0',
      downloads: '600+',
      link: 'https://www.npmjs.com/package/sc-angular-toastify',
      linkStatic: '/sc-angular-toastify',
    },
    {
      name: 'sc-angular-auth',
      desc: 'JWT-based auth guard, interceptor, role-based access.',
      version: '1.0.0',
      downloads: '700+',
      link: 'https://www.npmjs.com/package/sc-angular-auth',
      linkStatic: '/sc-angular-auth',
    },
    {
      name: 'sc-angular-qr',
      desc: 'Generate + scan QR codes in Angular (PNG, SVG export).',
      version: '1.0.0',
      downloads: '350+',
      link: 'https://www.npmjs.com/package/sc-angular-qr',
      linkStatic: '/sc-angular-qr',
    },
    {
      name: 'sc-angular-utils',
      desc: 'Common utilities (debounce, throttle, clipboard, file download, storage wrapper).',
      version: '1.0.0',
      downloads: '450+',
      link: 'https://www.npmjs.com/package/sc-angular-utils',
      linkStatic: '/sc-angular-utils',
    },
    {
      name: 'sc-angular-logger',
      desc: 'Logging service with levels (info, warn, error).',
      version: '1.0.0',
      downloads: '200+',
      link: 'https://www.npmjs.com/package/sc-angular-logger',
      linkStatic: '/sc-angular-logger',
    },
    {
      name: 'sc-angular-loader',
      desc: 'Prebuilt loaders/spinners (auto start/stop on HTTP requests).',
      version: '1.0.0',
      downloads: '550+',
      link: 'https://www.npmjs.com/package/sc-angular-loader',
      linkStatic: '/sc-angular-loader',
    },
    {
      name: 'sc-angular-pagination',
      desc: 'Ready-made pagination with server + client support.',
      version: '1.0.0',
      downloads: '800+',
      link: 'https://www.npmjs.com/package/sc-angular-pagination',
      linkStatic: '/sc-angular-pagination',
    },
  ];

  private seoapi = inject(SSeo);

  showElement = false;
  interval: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateShowElement(event.urlAfterRedirects);
      });

    // Also check once at start
    this.updateShowElement(this.router.url);

    //SEO for this page
    this.seoapi.updateMeta({
      title:
        'Satendra Coder NPM Packages - Angular Developer Tools & Utilities',
      description:
        'Explore Satendra Coder’s NPM packages for Angular developers. Boost productivity with ready-made components, form validators, auth guards, and more.',
      keywords:
        'satendra coder npm packages, angular developer tools, angular utilities, angular snippets, angular form validators, angular auth guard',
      url: 'https://satendracoder.com/npm-package',
      image: 'https://satendracoder.com/assets/favicon.ico',
    });
  }

  private updateShowElement(url: string) {
    const cleanUrl = url.split('?')[0].split('#')[0];

    // Extract base path
    const parts = cleanUrl.split('/');
    const basePath = '/' + (parts[1] || '');

    // Show list if URL has only base path (like /tools, /other-tools)
    this.showElement = parts.length === 2 && basePath.includes('npm-package');
  }
}
