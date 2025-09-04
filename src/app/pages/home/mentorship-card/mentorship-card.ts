import { Component, HostListener } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-mentorship-card',
  imports: [MateriallistModule],
  templateUrl: './mentorship-card.html',
  styleUrl: './mentorship-card.scss'
})
export class MentorshipCard {
 trainers = [
    { name: 'Satendra Rajput', role: 'Full Stack Engineer', img: 'assets/images/global/satendra.png' },
    { name: 'Rishi Singh', role: 'Sr. Full Stack Engineer(Dot Net)', img: 'assets/images/global/rishi.png' },
    { name: 'Mutawakkil Shahid', role: 'Sr. UI/UX Engineer', img: 'assets/images/global/mutawakkil.png' },
    { name: 'Govind Singh', role: 'Sr. Full Stack Engineer(Dot Net)', img: 'assets/images/global/govind.png' },
    { name: 'Prashant Yadav', role: 'Accounting and Financials Professional', img: 'assets/images/global/prashant.png' },
    { name: 'Rohan Vishwakarma', role: 'Business & Operations Manager', img: 'assets/images/global/rohan.png' }
  ];

  currentIndex = 0;
  itemsPerView = 4; // default desktop

  ngOnInit() {
    this.updateItemsPerView();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsPerView();
  }

updateItemsPerView() {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    if (width <= 600) {
      this.itemsPerView = 1;
    } else if (width <= 1024) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 4; // or 5
    }
  }
}


  nextSlide() {
    if (this.currentIndex < this.trainers.length - this.itemsPerView) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}