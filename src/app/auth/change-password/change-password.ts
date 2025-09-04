import { Component } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SAuth } from '../service/s-auth';
import { SToaster } from '../../core/service/global/toaster/s-toaster';

@Component({
  selector: 'app-change-password',
  imports: [MateriallistModule],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss',
})
export class ChangePassword {
  changePasswordForm: FormGroup;
  submitted = false;

  constructor(
    private apiauth: SAuth,
    private toster: SToaster,
    private fb: FormBuilder
  ) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.changePasswordForm.invalid) {
      return;
    }

    if (this.f['newPassword'].value !== this.f['confirmPassword'].value) {
      this.f['confirmPassword'].setErrors({ mismatch: true });
      return;
    }

    this.apiauth
      .changePassword(
        this.f['currentPassword'].value,
        this.f['newPassword'].value
      ).subscribe(
        (response) => {
          this.toster.addToast({
            type: 'success',
            message: response.message || 'Password changed successfully',
          });
          this.changePasswordForm.reset();
          this.submitted = false;
        },
        (error) => {
          this.toster.addToast({
            type: 'error',
            message: error.error?.message || 'Failed to change password',
          });
        }
      );
  }
}
