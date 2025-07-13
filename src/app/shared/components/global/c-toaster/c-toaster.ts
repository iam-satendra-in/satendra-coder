import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { SToaster } from '../../../../core/service/global/toaster/s-toaster';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-c-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c-toaster.html',
  styleUrl: './c-toaster.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ]),
  ],
})
export class CToaster {
  constructor(public toastService: SToaster) {}

  getIcon(type: 'success' | 'error' | 'info' | 'warning'): string {
    switch (type) {
      case 'success':
        return '/assets/icons/notifications/done_noti.png';
      case 'error':
        return '/assets/icons/notifications/error-noti.png';
      case 'info':
        return '/assets/icons/notifications/info-noti.png';
      case 'warning':
        return '/assets/icons/notifications/warning-noti.png';
      default:
        return '';
    }
  }
}
