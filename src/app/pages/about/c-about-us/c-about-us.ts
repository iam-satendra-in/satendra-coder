import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-c-about-us',
  imports: [],
  templateUrl: './c-about-us.html',
  styleUrl: './c-about-us.scss'
})
export class CAboutUs {

  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle('About SatendraCoder.com | Learn Angular, Java, Full Stack Development');

    this.metaService.updateTag({
      name: 'description',
      content: 'SatendraCoder.com is a developer learning platform built by Angular expert Satendra Rajput. Explore Angular tutorials, Java backend tips, roadmaps, tools, and interview prep for frontend and full stack developers.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Satendra Coder, Satendra Rajput, Angular Developer, Angular Tutorials, Java Developer, Full Stack Roadmap, UI/UX Design, Developer Tools, Learn Angular, Web Development, Frontend Interview'
    });

    this.metaService.updateTag({
      name: 'author',
      content: 'Satendra Rajput'
    });

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}