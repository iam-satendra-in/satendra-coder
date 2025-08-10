import { Component, Input } from '@angular/core';
import { Blog } from '../../models/blog.interface';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-blog-card',
  imports: [MateriallistModule],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss'
})
export class BlogCard {
 @Input() blog!: Blog;
}
