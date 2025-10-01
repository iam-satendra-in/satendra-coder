import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-layout',
  imports: [
    RouterOutlet,
    CommonModule,
    AdminSidebarComponent,
    AdminHeaderComponent,
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {
  sidebarOpen$: Observable<boolean>;

  constructor(private adminService: AdminService) {
    this.sidebarOpen$ = this.adminService.sidebarOpen$;
  }
}
