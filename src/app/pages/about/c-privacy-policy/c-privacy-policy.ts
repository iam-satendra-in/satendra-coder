import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-c-privacy-policy',
  imports: [],
  templateUrl: './c-privacy-policy.html',
  styleUrl: './c-privacy-policy.scss'
})
export class CPrivacyPolicy {

  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle('Privacy Policy | SatendraCoder.com - Secure & Transparent Usage');

    this.metaService.updateTag({
      name: 'description',
      content: 'Review SatendraCoder.com’s Privacy Policy explaining how we collect, store, use, and protect your personal information while using our developer tools and courses.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Privacy Policy SatendraCoder, Satendra Rajput, Personal Data Policy, Cookie Usage, Data Protection, Angular Website Privacy, Developer Platform Privacy, GDPR Compliance, Secure Web Services'
    });

    this.metaService.updateTag({ name: 'author', content: 'Satendra Rajput' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
