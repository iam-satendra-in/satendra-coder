import { Component, EventEmitter, Output } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { User } from '../../model/admin.model';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-header',
  imports: [MateriallistModule, CommonModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss',
})
export class AdminHeaderComponent {
  currentUser: User;
  userDropdownOpen = false;

  constructor(private adminService: AdminService) {
    this.currentUser = this.adminService.getCurrentUser();
  }

  toggleSidebar() {
    this.adminService.toggleSidebar();
  }

  toggleUserDropdown() {
    this.userDropdownOpen = !this.userDropdownOpen;
  }
}
