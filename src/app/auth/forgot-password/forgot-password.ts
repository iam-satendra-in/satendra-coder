import { Component, inject } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { NgForm } from '@angular/forms';
import { SAuth } from '../service/s-auth';
import { SToaster } from '../../core/service/global/toaster/s-toaster';

@Component({
  selector: 'app-forgot-password',
  imports: [MateriallistModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPassword {
  identifier = '';

  private apiUrl = inject(SAuth);
  private toster = inject(SToaster);
  

  sendResetLink(form: NgForm) {
    debugger
    if (form.invalid) return;
    this.apiUrl.forgotPassword(this.identifier).subscribe({
      next: (response) => {
        this.toster.addToast({
          message: 'Reset link sent to your email if it exists in our system.',
          type: 'success'
        })
        console.log('Reset link sent successfully', response);
      },
      error: (error) => {
        this.toster.addToast({
          message: 'Error sending reset link. Please try again later.',
          type: 'error'
        })
        console.error('Error sending reset link', error);
      }
    });
  }
}