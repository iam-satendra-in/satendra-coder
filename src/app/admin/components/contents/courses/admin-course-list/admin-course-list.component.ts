import { Component } from '@angular/core';
import { Course } from '../../../../model/admin.model';
import { AdminService } from '../../../../services/admin.service';
import { MateriallistModule } from '../../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-admin-course-list',
  imports: [MateriallistModule],
  templateUrl: './admin-course-list.component.html',
  styleUrl: './admin-course-list.component.scss',
})
export class AdminCourseListComponent {
  courses: Course[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  deleteCourse(id: string) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.adminService.deleteCourse(id);
    }
  }
}
