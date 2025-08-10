import { Component } from '@angular/core';
import { Category } from '../../models/blog.interface';
import { Sblog } from '../../service/sblog';
import { Router } from '@angular/router';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-blog-banner',
  imports: [MateriallistModule],
  templateUrl: './blog-banner.html',
  styleUrl: './blog-banner.scss'
})
export class BlogBanner {

 searchQuery: string = '';
  selectedCategory: string = 'all';
  categories: Category[] = [];

  constructor(
    private blogService: Sblog,
    private router: Router
  ) {}

  ngOnInit() {
    this.blogService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSearch() {
    this.router.navigate(['/search'], {
      queryParams: {
        q: this.searchQuery,
        category: this.selectedCategory
      }
    });
  }
}
