import { Component } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [MateriallistModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPassword {
  identifier = '';

  sendResetLink(form: NgForm) {
    if (form.invalid) return;
    alert(`Reset link sent to: ${this.identifier}`);
  }
}