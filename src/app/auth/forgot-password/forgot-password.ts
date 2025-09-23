import { Component, inject } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { NgForm } from '@angular/forms';
import { SAuth } from '../service/s-auth';
import { ToastService } from 'sc-angular-toastify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [MateriallistModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  identifier = '';

  private apiUrl = inject(SAuth);
  private toster = inject(ToastService);
  private route = inject(Router);

  sendResetLink(form: NgForm) {
    debugger;
    if (form.invalid) return;
    this.apiUrl.forgotPassword(this.identifier).subscribe({
      next: (response) => {
        debugger;
        this.toster.show(response.message, 'success');
        this.identifier = '';
        this.route.navigate(['/auth/login']);
      },
      error: (error) => {
        this.toster.show(
          'Error sending reset link. Please try again later.',
          'error'
        );
        console.error('Error sending reset link', error);
      },
    });
  }
}
