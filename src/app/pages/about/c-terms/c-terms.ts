import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-c-terms',
  imports: [],
  templateUrl: './c-terms.html',
  styleUrl: './c-terms.scss'
})
export class CTerms {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle('Terms & Conditions | SatendraCoder.com');

    this.metaService.updateTag({
      name: 'description',
      content: 'Read the Terms & Conditions of SatendraCoder.com to understand your rights and responsibilities when using our website, courses, and developer tools.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Terms and Conditions, SatendraCoder, Usage Policy, Tool Terms, Course Access Policy, Satendra Rajput, Developer Tools T&C, Account Terms, Intellectual Property Rules'
    });

    this.metaService.updateTag({ name: 'author', content: 'Satendra Rajput' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
