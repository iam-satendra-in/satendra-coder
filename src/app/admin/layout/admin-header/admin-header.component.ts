import { Component, EventEmitter, Output } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-admin-header',
  imports: [MateriallistModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss',
})
export class AdminHeaderComponent {
  dropdownOpen = false;

  @Output() sidebarToggle = new EventEmitter<void>();

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleSidebar() {
    this.sidebarToggle.emit();
  }
}
