import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tutoral-sidebar',
  imports: [],
  templateUrl: './tutoral-sidebar.html',
  styleUrl: './tutoral-sidebar.scss',
})
export class TutoralSidebar {
  // Input to control sidebar open state
  @Input() isOpen: boolean = false;

  // Output to notify parent when sidebar is closed
  @Output() closed = new EventEmitter<void>();

  closeSidebar() {
    this.closed.emit(); // send event to parent
  }
}
