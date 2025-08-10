import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog.interface';
import { Sblog } from '../../service/sblog';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { BlogSlider } from "../../components/blog-slider/blog-slider";
import { BlogSidebar } from "../../components/blog-sidebar/blog-sidebar";
import { MenuCard } from "../../../../pages/home/menu-card/menu-card";
import { GlobalContact } from "../../../../shared/components/other/global-contact/global-contact";
import { FooterCard } from "../../../../pages/home/footer-card/footer-card";

@Component({
  selector: 'app-blog-details',
  imports: [MateriallistModule, BlogSlider, BlogSidebar, MenuCard, GlobalContact, FooterCard],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.scss'
})
export class BlogDetails {

  blog: Blog | undefined;
  relatedBlogs: Blog[] = [];

  constructor(
    private route: ActivatedRoute,
    private blogService: Sblog
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadBlog(id);
    });
  }

  private loadBlog(id: number) {
    this.blogService.getBlogById(id).subscribe(blog => {
      if (blog) {
        this.blog = blog;
        this.loadRelatedBlogs(blog.id, blog.category);
      }
    });
  }

  private loadRelatedBlogs(currentBlogId: number, category: string) {
    this.blogService.getRelatedBlogs(currentBlogId, category, 6).subscribe(blogs => {
      this.relatedBlogs = blogs;
    });
  }
}
