import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SSeo } from '../../../core/service/other/seo/s-seo';

@Component({
  selector: 'app-c-privacy-policy',
  imports: [],
  templateUrl: './c-privacy-policy.html',
  styleUrl: './c-privacy-policy.scss',
})
export class CPrivacyPolicy {
  private seo = inject(SSeo);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.updateMeta({
      title: 'Privacy Policy – Satendra  Creator',
      description:
        'Read the Privacy Policy of Satendra  Creator to learn how we collect, use, and protect your personal information when you use our tools, tutorials, and services.',
      keywords:
        'privacy policy, Satendra  Creator privacy, data protection, user information, personal data, satendra rajput, satendracoder.com, cookies, user consent, secure developer tools',
      url: 'https://satendracoder.com/privacy-policy',
      image: 'https://satendracoder.com/assets/cover-image.png',
    });
  }
}
