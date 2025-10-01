import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { User } from '../../../model/admin.model';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-admin-user',
  imports: [MateriallistModule],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss',
})
export class AdminUserComponent {
  user: User;
  isUpdating = false;
  showDeleteConfirmation = false;
  deleteConfirmation = '';

  stats = {
    tutorials: 0,
    courses: 0,
    blogs: 0,
  };

  constructor(private adminService: AdminService) {
    this.user = { ...this.adminService.getCurrentUser() };
  }

  ngOnInit() {
    this.loadStats();
  }

  updateProfile() {
    this.isUpdating = true;

    this.adminService.updateUser(this.user).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        this.isUpdating = false;
        // Show success message
      },
      error: () => {
        this.isUpdating = false;
        // Show error message
      },
    });
  }

  deleteAccount() {
    if (this.deleteConfirmation === 'DELETE') {
      // In a real app, this would call a delete service
      console.log('Account deleted');
      this.showDeleteConfirmation = false;
    }
  }

  private loadStats() {
    this.adminService.getTutorials().subscribe((tutorials) => {
      this.stats.tutorials = tutorials.length;
    });

    this.adminService.getCourses().subscribe((courses) => {
      this.stats.courses = courses.length;
    });

    this.adminService.getBlogs().subscribe((blogs) => {
      this.stats.blogs = blogs.length;
    });
  }
}
