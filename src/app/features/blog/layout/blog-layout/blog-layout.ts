import { Component } from '@angular/core';
import { MenuCard } from "../../../../pages/home/menu-card/menu-card";
import { BlogBanner } from "../../components/blog-banner/blog-banner";
import { FooterCard } from "../../../../pages/home/footer-card/footer-card";
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { Category, Blog } from '../../models/blog.interface';
import { Sblog } from '../../service/sblog';
import { BlogCard } from '../../components/blog-card/blog-card';

@Component({
  selector: 'app-blog-layout',
  imports: [MenuCard, BlogBanner, FooterCard, MateriallistModule, BlogCard],
  templateUrl: './blog-layout.html',
  styleUrl: './blog-layout.scss'
})
export class BlogLayout {

categories: Category[] = [];
  allBlogs: Blog[] = [];

  constructor(private blogService: Sblog) {}

  ngOnInit() {
    this.blogService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    
    this.blogService.getAllBlogs().subscribe(blogs => {
      this.allBlogs = blogs;
    });
  }

  getBlogsByCategory(categoryName: string): Blog[] {
    return this.allBlogs.filter(blog => blog.category === categoryName);
  }
}
