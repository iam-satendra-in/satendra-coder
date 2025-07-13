import { Injectable, signal } from '@angular/core';

export interface Toast {
  title: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}
@Injectable({
  providedIn: 'root'
})
export class SToaster {
  
 private toasts = signal<Toast[]>([]);

  // Expose signal for components to subscribe to
  public toastsSignal = this.toasts.asReadonly();

  addToast(toast: Toast) {
    this.toasts.update(current => [...current, toast]);

    // Automatically remove after 3 seconds
    setTimeout(() => this.removeToast(toast), 3000);
  }

  removeToast(toast: Toast) {
    this.toasts.update(current => current.filter(t => t !== toast));
  }
}
