import { Component, inject, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SAuth } from '../service/s-auth';
import { Router } from '@angular/router';
import { SSafeStorage } from '../../core/service/global/safe-storage/s-safe-storage';
import { SToaster } from '../../core/service/global/toaster/s-toaster';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { MatDialog } from '@angular/material/dialog';
import { RegisterPage } from '../register-page/register-page';

@Component({
  selector: 'app-login-page',
  imports: [MateriallistModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {

  readonly dialog = inject(MatDialog);
  showPassword: boolean = false;
  loginForm!: FormGroup;
  user: any;
  isBrowser: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toaster: SToaster,
    private safeStorage: SSafeStorage,
    private authService: SAuth,
  ) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

  }

  ngOnInit(): void { }

  // Google login
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
  // Github login
  loginWithGitHub(): void {
    this.authService.loginWithGitHub();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.SignInUser(this.loginForm.value).subscribe((response) => {
        try {
          console.log('Parsed Response:', response);
          this.safeStorage.setItem('token', response?.token);
          this.safeStorage.setItem('user', response);

          this.toaster.addToast({
            title: 'Login Success',
            message: 'Welcome back! Access granted.',
            type: 'success',
          });
          this.dialog.closeAll();
          if (response.role === "USER") {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/admin']);
          }

        } catch (error) {
          this.toaster.addToast({
            message: response,
            type: 'warning',
          });
        }
      });
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  regusterCard() {
    this.dialog.closeAll();
    setTimeout(() => {
      const dialogRef = this.dialog.open(RegisterPage, {
        panelClass: 'custom-dialog'
      });
    })
  }

  close() {
    this.dialog.closeAll();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.dialog.closeAll();
  }
}