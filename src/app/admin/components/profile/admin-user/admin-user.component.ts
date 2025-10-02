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
  isEditing = false;
  showDeleteConfirmation = false;
  deleteConfirmation = '';
  previewAvatar: string | null = null;

  stats = { tutorials: 0, courses: 0, blogs: 0 };

  constructor(private adminService: AdminService) {
    this.user = { ...this.adminService.getCurrentUser() };
  }

  ngOnInit() {
    this.loadStats();
  }

  enableEditing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
    this.user = { ...this.adminService.getCurrentUser() }; // reset changes
  }

  saveProfile() {
    this.isUpdating = true;
    this.adminService.updateUser(this.user).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        this.isUpdating = false;
        this.isEditing = false;
      },
      error: () => {
        this.isUpdating = false;
      },
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewAvatar = reader.result as string;
      };
      reader.readAsDataURL(file);

      // TODO: send `file` to backend API for upload
    }
  }

  deleteAccount() {
    if (this.deleteConfirmation === 'DELETE') {
      console.log('Account deleted');
      this.showDeleteConfirmation = false;
    }
  }

  private loadStats() {
    this.adminService
      .getTutorials()
      .subscribe((t) => (this.stats.tutorials = t.length));
    this.adminService
      .getCourses()
      .subscribe((c) => (this.stats.courses = c.length));
    this.adminService
      .getBlogs()
      .subscribe((b) => (this.stats.blogs = b.length));
  }
}
