import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-c-pricing-policy',
  imports: [],
  templateUrl: './c-pricing-policy.html',
  styleUrl: './c-pricing-policy.scss'
})
export class CPricingPolicy {

private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle('Pricing Policy | SatendraCoder.com');

    this.metaService.updateTag({
      name: 'description',
      content: 'Learn about the pricing model at SatendraCoder.com including free content, premium course fees, subscriptions, payment methods, and refund policies.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Pricing Policy, Satendra Coder Courses, Developer Pricing, Angular Course Cost, Java Subscription, Full Stack Bundles, Refund Policy SatendraCoder, Course Plans, Developer Academy'
    });

    this.metaService.updateTag({ name: 'author', content: 'Satendra Rajput' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
