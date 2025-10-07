import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { User } from '../../../model/admin.model';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { SSafeStorage } from '../../../../core/service/global/safe-storage/s-safe-storage';
import { SAuth } from '../../../../auth/service/s-auth';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-user',
  imports: [MateriallistModule],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss',
})
export class AdminUserComponent {
  user: User;
  OriginalUser!: User;
  isUpdating = false;
  isEditing = false;
  showDeleteConfirmation = false;
  deleteConfirmation = '';
  previewAvatar: string | null = null;

  stats = { tutorials: 0, courses: 0, blogs: 0 };

  constructor(
    private adminService: AdminService,
    private authapi: SAuth,
    private safe: SSafeStorage
  ) {
    const userdata = this.safe.getItem('userdata');
    this.user = userdata;
    this.OriginalUser = { ...userdata };
  }

  ngOnInit() {
    this.loadStats();
    console.log(this.user);
  }

  enableEditing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
    this.user = this.safe.getItem('userdata');
  }

  saveProfile() {
    debugger;

    const name$ = this.authapi.updateName(this.user.name);
    const phone$ = this.authapi.updatePhone(this.user.phone);
    const designation$ = this.authapi.updateDesignation(this.user.designation);

    forkJoin([name$, phone$, designation$]).subscribe(
      ([userResponse, postsResponse, settingsResponse]) => {
        console.log('User:', userResponse);
        console.log('Posts:', postsResponse);
        console.log('Settings:', settingsResponse);
        this.isEditing = false;
      },
      (error) => {
        this.isUpdating = false;
        console.error('Error in API calls', error);
      }
    );
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
