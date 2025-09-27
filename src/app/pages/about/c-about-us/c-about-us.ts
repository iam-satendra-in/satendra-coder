import { Component, inject } from '@angular/core';
import { SSeo } from '../../../core/service/other/seo/s-seo';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-c-about-us',
  imports: [RouterLink],
  templateUrl: './c-about-us.html',
  styleUrl: './c-about-us.scss',
})
export class CAboutUs {
  private seo = inject(SSeo);
  private route = inject(Router);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.updateMeta({
      title:
        'Satendra  Creator – About Satendra Rajput, the Creator Behind the Platform',
      description:
        'Learn about Satendra Rajput, the mind behind Satendra  Creator – a platform offering developer tools, coding tutorials, and tech insights in Hindi & English. Discover the mission, story, and vision.',
      keywords:
        'about Satendra  Creator, satendra rajput, developer profile, tech creator, hindi coding tutorials, dev tools founder, Satendra  Creator story',
      url: 'https://satendracoder.com/about',
      image: 'https://satendracoder.com/assets/cover-image.png',
    });
  }
}
