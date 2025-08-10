import { Component } from '@angular/core';
import { Tool, Blog } from '../../models/blog.interface';
import { Sblog } from '../../service/sblog';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-blog-sidebar',
  imports: [MateriallistModule],
  templateUrl: './blog-sidebar.html',
  styleUrl: './blog-sidebar.scss'
})
export class BlogSidebar {
 tools: Tool[] = [];
  latestBlogs: Blog[] = [];

  constructor(private blogService: Sblog) {}

  ngOnInit() {
    this.blogService.getTools().subscribe(tools => {
      this.tools = tools;
    });
    
    this.blogService.getLatestBlogs().subscribe(blogs => {
      this.latestBlogs = blogs;
    });
  }

  getStars(rating: number): number[] {
    return new Array(Math.floor(rating));
  }
}
