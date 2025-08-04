import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SSeo } from '../../../core/service/other/seo/s-seo';

@Component({
  selector: 'app-c-pricing-policy',
  imports: [],
  templateUrl: './c-pricing-policy.html',
  styleUrl: './c-pricing-policy.scss'
})
export class CPricingPolicy {

private seo = inject(SSeo);

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.seo.updateMeta({
  title: 'Pricing Policy – Satendra Coder',
  description: 'Understand the Pricing Policy of Satendra Coder. Learn how our courses, tools, and services are priced, including free and premium features.',
  keywords: 'pricing policy, satendra coder pricing, satendra rajput, course pricing, tool pricing, developer tools cost, subscription policy, free tools, paid features, satendracoder.com',
  url: 'https://satendracoder.com/pricing-policy',
  image: 'https://satendracoder.com/assets/cover-image.png'
});

}
}
