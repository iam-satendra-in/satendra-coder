import { Component } from '@angular/core';
import { User } from '../../../model/admin.model';
import { AuthService } from '../../../services/auth.service';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-user-management',
  imports: [MateriallistModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {
  users: User[] = [];
  currentUser: User | null = null;
  showCreateModal = false;
  showEditModal = false;
  editingUser: Partial<User> = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loadUsers();
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  loadUsers() {
    this.users = this.authService.getAllUsers();
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
    if (this.showCreateModal) {
      this.authService.createUser({
        name: this.editingUser.name!,
        email: this.editingUser.email!,
        role: this.editingUser.role!,
        avatar: this.editingUser.avatar,
        isActive: this.editingUser.isActive ?? true,
        permissions: this.getPermissionsByRole(this.editingUser.role!),
      });
    } else if (this.showEditModal && this.editingUser.id) {
      this.authService.updateUser(this.editingUser.id, {
        ...this.editingUser,
        permissions: this.getPermissionsByRole(this.editingUser.role!),
      });
    }

    this.loadUsers();
    this.closeModals();
  }

  closeModals() {
    this.showCreateModal = false;
    this.showEditModal = false;
    this.editingUser = {};
  }

  private getPermissionsByRole(role: string): string[] {
    switch (role) {
      case 'admin':
        return [
          'create',
          'read',
          'update',
          'delete',
          'manage_users',
          'manage_payments',
        ];
      case 'user':
        return ['read', 'attempt_quiz', 'view_tutorials'];
      case 'guest':
        return ['read'];
      default:
        return ['read'];
    }
  }
}
