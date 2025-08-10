import { Component } from '@angular/core';
import { BlogSidebar } from "../blog-sidebar/blog-sidebar";
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog.interface';
import { Sblog } from '../../service/sblog';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { BlogCard } from "../blog-card/blog-card";
import { MenuCard } from "../../../../pages/home/menu-card/menu-card";
import { GlobalContact } from "../../../../shared/components/other/global-contact/global-contact";
import { FooterCard } from "../../../../pages/home/footer-card/footer-card";

@Component({
  selector: 'app-blog-category-details',
  imports: [BlogSidebar, MateriallistModule, BlogCard, MenuCard, GlobalContact, FooterCard],
  templateUrl: './blog-category-details.html',
  styleUrl: './blog-category-details.scss'
})
export class BlogCategoryDetails {

categoryName: string = '';
  categorySlug: string = '';
  blogs: Blog[] = [];
  sortedBlogs: Blog[] = [];
  sortBy: string = 'newest';
  displayedBlogs: number = 6;
  hasMoreBlogs: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private blogService: Sblog
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categorySlug = params['slug'];
      this.loadCategoryData();
    });
  }

  private loadCategoryData() {
    // Get category name from slug
    this.blogService.getCategories().subscribe(categories => {
      const category = categories.find(cat => cat.slug === this.categorySlug);
      this.categoryName = category ? category.name : this.capitalizeFirst(this.categorySlug);
    });

    // Get blogs for this category
    this.blogService.getBlogsByCategory(this.capitalizeFirst(this.categorySlug)).subscribe(blogs => {
      this.blogs = blogs;
      this.sortBlogs();
      this.updateDisplayedBlogs();
    });
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  onSortChange() {
    this.sortBlogs();
    this.displayedBlogs = 6;
    this.updateDisplayedBlogs();
  }

  private sortBlogs() {
    switch (this.sortBy) {
      case 'newest':
        this.blogs.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        break;
      case 'oldest':
        this.blogs.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
        break;
      case 'readTime':
        this.blogs.sort((a, b) => a.readTime - b.readTime);
        break;
    }
  }

  private updateDisplayedBlogs() {
    this.sortedBlogs = this.blogs.slice(0, this.displayedBlogs);
    this.hasMoreBlogs = this.displayedBlogs < this.blogs.length;
  }

  loadMoreBlogs() {
    this.displayedBlogs += 6;
    this.updateDisplayedBlogs();
  }

  getTotalReadTime(): number {
    return this.blogs.reduce((total, blog) => total + blog.readTime, 0);
  }
}
