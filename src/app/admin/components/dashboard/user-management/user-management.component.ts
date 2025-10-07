import { Component } from '@angular/core';
import { User } from '../../../model/admin.model';
import { AuthService } from '../../../services/auth.service';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { SAuth } from '../../../../auth/service/s-auth';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-management',
  imports: [MateriallistModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {
  users: any;
  currentUser: User | null = null;
  showCreateModal = false;
  showEditModal = false;
  editingUser: Partial<User> = {};

  constructor(private authService: AuthService, private authapi: SAuth) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // this.users = this.authService.getAllUsers();
    this.authapi.getAlluser().subscribe((res) => {
      this.users = res?.data;
    });
  }

  switchRole(userId: string) {
    this.authService.switchUser(userId);
  }

  editUser(user: User) {
    this.editingUser = { ...user };
    this.showEditModal = true;
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.authService.deleteUser(userId);
      this.loadUsers();
    }
  }

  saveUser() {
    // if (this.showCreateModal) {
    //   this.authService.createUser({
    //     name: this.editingUser.name!,
    //     email: this.editingUser.email!,
    //     role: this.editingUser.role!,
    //     avatar: this.editingUser.avatar,
    //     isActive: this.editingUser.isActive ?? true,
    //   });
    // } else if (this.showEditModal && this.editingUser.id) {
    //   this.authService.updateUser(this.editingUser.id, {
    //     ...this.editingUser,
    //   });
    // }

    this.loadUsers();
    this.closeModals();
  }

  closeModals() {
    this.showCreateModal = false;
    this.showEditModal = false;
    this.editingUser = {};
  }
}
