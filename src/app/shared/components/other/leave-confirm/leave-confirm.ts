import { Component, HostListener } from '@angular/core';
import { MateriallistModule } from '../../../materiallist/materiallist-module';

@Component({
  selector: 'app-leave-confirm',
  imports: [MateriallistModule],
  templateUrl: './leave-confirm.html',
  styleUrl: './leave-confirm.scss'
})
export class LeaveConfirm {
  formData: string = '';
  isFormDirty: boolean = false; // 🔹 Flag for unsaved changes

  // Track changes in form
  ngOnChanges() {
    this.isFormDirty = true;
  }

  // Simulate save action
  saveData() {
    console.log('Data saved:', this.formData);
    this.isFormDirty = false; // Reset flag after saving
  }

  // Warn only if unsaved changes exist
  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: BeforeUnloadEvent) {
    if (this.isFormDirty) {
      event.preventDefault();
      event.returnValue = ''; // Required for Chrome/Edge/Firefox
    }
  }
}