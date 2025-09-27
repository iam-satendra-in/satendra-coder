import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SSeo } from '../../../core/service/other/seo/s-seo';

@Component({
  selector: 'app-c-terms',
  imports: [],
  templateUrl: './c-terms.html',
  styleUrl: './c-terms.scss',
})
export class CTerms {
  private seo = inject(SSeo);

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.updateMeta({
      title: 'Terms & Conditions – Satendra  Creator',
      description:
        'Review the Terms & Conditions of Satendra  Creator to understand usage policies, intellectual property rights, course access rules, and developer tool guidelines.',
      keywords:
        'terms and conditions, Satendra  Creator terms, usage policy, satendra rajput, course access policy, developer tool terms, intellectual property, user agreement, satendracoder.com',
      url: 'https://satendracoder.com/terms',
      image: 'https://satendracoder.com/assets/cover-image.png',
    });
  }
}
