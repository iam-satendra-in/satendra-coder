import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SSeo } from '../../../core/service/other/seo/s-seo';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

interface Testimonial {
  image: string;
  text: string;
  author: string;
}
@Component({
  selector: 'app-testimonials',
  imports: [MateriallistModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  private seoapi = inject(SSeo);

  testimonials: Testimonial[] = [
    {
      image: '/assets/images/global/web-app-manifest-512x512.png',
      text: 'Satendra’s packages saved me hours of work. Easy to use and well-documented!',
      author: 'Software Engineer (Angular + Java)',
    },
    {
      image: '/assets/images/global/rishi.png',
      text: 'These utilities simplified complex tasks in my .NET + Angular projects. Truly a time saver!',
      author: 'Fullstack Developer (Dot Net)',
    },
    {
      image: '/assets/images/global/mutawakkil.png',
      text: 'Clean, reusable, and developer-friendly! The design and documentation are very helpful.',
      author: 'UI/UX Developer',
    },
    {
      image: '/assets/images/global/govind.png',
      text: 'Perfect fit for enterprise applications. The reliability of these packages is outstanding.',
      author: 'Fullstack Developer (Dot Net)',
    },
    {
      image: '/assets/images/global/vishals.jpg',
      text: 'I integrated these packages in my project with zero hassle. Highly recommend for any developer.',
      author: 'Fullstack Developer',
    },
  ];

  showElement = false;
  currentIndex = 0;
  interval: any;

  constructor(private router: Router) {
    this.startAutoSlide();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateShowElement(event.urlAfterRedirects);
      });

    // Also check once at start
    this.updateShowElement(this.router.url);
  }

  private updateShowElement(url: string) {
    const cleanUrl = url.split('?')[0].split('#')[0];

    // Extract base path
    const parts = cleanUrl.split('/');
    const basePath = '/' + (parts[1] || '');

    // Show list if URL has only base path (like /tools, /other-tools)
    this.showElement = parts.length === 2 && basePath.includes('npm-package');
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.next();
    }, 2000); // 4 sec
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
