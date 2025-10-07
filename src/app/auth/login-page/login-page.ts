import {
  Component,
  inject,
  Inject,
  PLATFORM_ID,
  OnDestroy,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { SAuth } from '../service/s-auth';
import { Router } from '@angular/router';
import { SSafeStorage } from '../../core/service/global/safe-storage/s-safe-storage';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { MatDialog } from '@angular/material/dialog';
import { RegisterPage } from '../register-page/register-page';
import { ToastService } from 'sc-angular-toastify';

@Component({
  selector: 'app-login-page',
  imports: [MateriallistModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
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
    private toaster: ToastService,
    private safeStorage: SSafeStorage,
    private authService: SAuth
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

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
      this.authService.SignInUser(this.loginForm.value).subscribe({
        next: (response) => {
          debugger;
          this.safeStorage.setItem('userdata', response?.data);
          this.toaster.show('Welcome back! Access granted.', 'success');
          this.dialog.closeAll();
          const rolesToNavigate = ['MASTER', 'ADMIN', 'STAFF', 'MENTOR'];
          if (rolesToNavigate.includes(response?.data.role)) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/dashboard']);
          }
        },
        error: (err) => {
          this.toaster.show(err, 'error', 5000);
        },
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
        panelClass: 'custom-dialog',
      });
    });
  }

  close() {
    this.dialog.closeAll();
  }
}
