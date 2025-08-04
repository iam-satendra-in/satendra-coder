import { Component, inject } from '@angular/core';
import { SSeo } from '../../../core/service/other/seo/s-seo';

@Component({
  selector: 'app-c-about-us',
  imports: [],
  templateUrl: './c-about-us.html',
  styleUrl: './c-about-us.scss'
})
export class CAboutUs {

  private seo = inject(SSeo);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.updateMeta({
    title: 'Satendra Coder – About Satendra Rajput, the Creator Behind the Platform',
    description: 'Learn about Satendra Rajput, the mind behind Satendra Coder – a platform offering developer tools, coding tutorials, and tech insights in Hindi & English. Discover the mission, story, and vision.',
    keywords: 'about satendra coder, satendra rajput, developer profile, tech creator, hindi coding tutorials, dev tools founder, satendra coder story',
    url: 'https://satendracoder.com/about',
    image: 'https://satendracoder.com/assets/cover-image.png'
  });
  }
}