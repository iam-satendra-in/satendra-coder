import { Component, EventEmitter, Output } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { User } from '../../model/admin.model';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { SSafeStorage } from '../../../core/service/global/safe-storage/s-safe-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  imports: [MateriallistModule, CommonModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss',
})
export class AdminHeaderComponent {
  currentUser!: User;
  userDropdownOpen = false;

  constructor(
    private adminService: AdminService,
    private safestorage: SSafeStorage,
    private route: Router
  ) {
    // this.currentUser = this.adminService.getCurrentUser();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.currentUser = this.safestorage.getItem('userdata');
  }

  toggleSidebar() {
    this.adminService.toggleSidebar();
  }

  toggleUserDropdown() {
    this.userDropdownOpen = !this.userDropdownOpen;
  }

  logout() {
    this.safestorage.removeItem('userdata');
    this.route.navigateByUrl('/');
    this.userDropdownOpen = false;
  }
}
