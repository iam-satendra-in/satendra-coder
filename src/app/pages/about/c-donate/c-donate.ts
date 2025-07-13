import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-c-donate',
  imports: [],
  templateUrl: './c-donate.html',
  styleUrl: './c-donate.scss'
})
export class CDonate {

  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle('Donate | Support Free Learning on SatendraCoder.com');

    this.metaService.updateTag({
      name: 'description',
      content: 'Support free education on SatendraCoder.com. Your donation helps provide coding resources, tutorials, and tools to students, kids, and underprivileged learners.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Donate SatendraCoder, Support Coding Education, Free Developer Resources, UPI Donation QR, Support Open Education, Satendra Rajput Donation, Help Students Learn Code'
    });

    this.metaService.updateTag({ name: 'author', content: 'Satendra Rajput' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }
}