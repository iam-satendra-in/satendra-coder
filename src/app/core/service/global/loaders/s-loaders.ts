import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SLoaders {
  
// Signal to hold the loading state
  private _isLoading = signal(false);

  // Public readonly signal (optional for external usage)
  readonly isLoading = this._isLoading.asReadonly();

  constructor() {}

  // Show loader
  show() {
    this._isLoading.set(true);
  }

  // Hide loader
  hide() {
    this._isLoading.set(false);
  }

  // Toggle loader (optional)
  toggle() {
    this._isLoading.update((prev) => !prev);
  }
}
