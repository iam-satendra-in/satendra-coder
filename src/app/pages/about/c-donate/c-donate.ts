import { Component, inject } from '@angular/core';
import { SSeo } from '../../../core/service/other/seo/s-seo';

@Component({
  selector: 'app-c-donate',
  imports: [],
  templateUrl: './c-donate.html',
  styleUrl: './c-donate.scss',
})
export class CDonate {
  private seo = inject(SSeo);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.updateMeta({
      title: 'Donation Helps – Support Satendra  Creator',
      description:
        'Your donation helps Satendra  Creator grow and continue offering free developer tools, tutorials, and tech resources in Hindi & English. Support independent tech content today.',
      keywords:
        'donate Satendra  Creator, support satendra rajput, donation helps, contribute to coding platform, support developer tools, free coding tutorials support, satendracoder.com donate',
      url: 'https://satendracoder.com/donation-helps',
      image: 'https://satendracoder.com/assets/cover-image.png',
    });
  }
}
