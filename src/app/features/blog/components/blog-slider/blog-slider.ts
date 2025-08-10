import { Component, Input } from '@angular/core';
import { Blog } from '../../models/blog.interface';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { BlogCard } from "../blog-card/blog-card";

@Component({
  selector: 'app-blog-slider',
  imports: [MateriallistModule, BlogCard],
  templateUrl: './blog-slider.html',
  styleUrl: './blog-slider.scss'
})
export class BlogSlider {
 @Input() blogs: Blog[] = [];
  @Input() title: string = 'Related Posts';
  @Input() slidesToShow: number = 3;

  currentSlide: number = 0;
  slideWidth: number = 100;
  maxSlides: number = 0;
  dots: number[] = [];

  ngOnInit() {
    this.calculateSlider();
  }

  private calculateSlider() {
    this.slideWidth = 100 / this.slidesToShow;
    this.maxSlides = Math.max(0, this.blogs.length - this.slidesToShow + 1);
    this.dots = Array(this.maxSlides).fill(0).map((_, i) => i);
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlides - 1) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
