import { Component, EventEmitter, Input, Output, Signal, inject } from '@angular/core';
import { MateriallistModule } from '../../../materiallist/materiallist-module';

@Component({
  selector: 'app-c-theme-toggle',
  standalone: true,
  imports: [MateriallistModule],
  templateUrl: './c-theme-toggle.html',
  styleUrl: './c-theme-toggle.scss'
})
export class CThemeToggle {
 @Input() selectedTheme: string = 'light'; // 👈 receive from parent
  @Output() themeChanged = new EventEmitter<string>();

  setTheme(theme: string) {
    this.themeChanged.emit(theme); // 👈 only emit, don't assign here
  }
}