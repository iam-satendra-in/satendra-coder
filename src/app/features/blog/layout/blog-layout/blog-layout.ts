import { Component, inject } from '@angular/core';
import { MenuCard } from "../../../../pages/home/menu-card/menu-card";
import { BlogBanner } from "../../components/blog-banner/blog-banner";
import { FooterCard } from "../../../../pages/home/footer-card/footer-card";
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { Category, Blog } from '../../models/blog.interface';
import { Sblog } from '../../service/sblog';
import { BlogCard } from '../../components/blog-card/blog-card';
import { SSeo } from '../../../../core/service/other/seo/s-seo';

@Component({
  selector: 'app-blog-layout',
  imports: [MenuCard, BlogBanner, FooterCard, MateriallistModule, BlogCard],
  templateUrl: './blog-layout.html',
  styleUrl: './blog-layout.scss'
})
export class BlogLayout {

categories: Category[] = [];
allBlogs: Blog[] = [];
  private seo = inject(SSeo);
  titleSeo:string = "Satendra Coder – Empowering Developers with Tools, Tutorials & Tech Insights (Hindi & English)";
  description:string = "Satendra Coder is a platform by Satendra Rajput offering developer tools, coding tutorials, and tech insights in Hindi & English.";
  keywords:string = "satendra coder, coding tutorials, dev tools, angular, spring boot";

  constructor(private blogService: Sblog) {}

  ngOnInit() {
    this.blogService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    
    this.blogService.getAllBlogs().subscribe(blogs => {
      this.allBlogs = blogs;
    });

     this.seo.updateMeta({
      title:this.titleSeo || this.titleSeo.slice(0,150),
      description:this.description,
      keywords:this.keywords,
      url:'https://satendracoder.com',
      image:'https://satendracoder.com/assets/favicon.ico'
    })
  }

  getBlogsByCategory(categoryName: string): Blog[] {
    return this.allBlogs.filter(blog => blog.category === categoryName);
  }

    ngOnDestroy(): void {
    console.log("ngOnDestroy");
    
  }
}
