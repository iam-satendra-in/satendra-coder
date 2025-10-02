import { Component } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Course, Lesson } from '../../../../model/admin.model';
import { MateriallistModule } from '../../../../../shared/materiallist/materiallist-module';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-course-form',
  imports: [MateriallistModule, CommonModule],
  templateUrl: './admin-course-form.component.html',
  styleUrl: './admin-course-form.component.scss',
})
export class AdminCourseFormComponent {
  course: Partial<Course> = {
    title: '',
    description: '',
    content: '',
    category: '',
    lessons: [],
    price: 0,
    duration: '',
    level: 'beginner',
  };

  isEdit = false;
  courseId: string | null = null;

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.courseId;
  }

  addLesson() {
    if (!this.course.lessons) {
      this.course.lessons = [];
    }

    const newLesson: Lesson = {
      id: Date.now().toString(),
      title: '',
      content: '',
      duration: 0,
      order: this.course.lessons.length + 1,
      videoUrl: '',
    };

    this.course.lessons.push(newLesson);
  }

  removeLesson(index: number) {
    if (
      this.course.lessons &&
      confirm('Are you sure you want to remove this lesson?')
    ) {
      this.course.lessons.splice(index, 1);
      // Update order for remaining lessons
      this.course.lessons.forEach((lesson, i) => {
        lesson.order = i + 1;
      });
    }
  }

  onSubmit() {
    if (this.isEdit && this.courseId) {
      this.adminService.updateCourse(this.courseId, this.course);
    } else {
      this.adminService.createCourse(
        this.course as Omit<Course, 'id' | 'createdAt'>
      );
    }
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/admin/courses']);
  }
}
