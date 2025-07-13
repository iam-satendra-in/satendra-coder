import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SAuth } from '../service/s-auth';
import { Router } from '@angular/router';
import { SSafeStorage } from '../../core/service/global/safe-storage/s-safe-storage';
import { SToaster } from '../../core/service/global/toaster/s-toaster';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  imports: [MateriallistModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {

  showPassword: boolean = false;
  loginForm!: FormGroup;
  user: any;
  isBrowser: boolean = false;

  constructor(
    private titleService: Title, 
    private metaService: Meta,
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

     this.titleService.setTitle('Login | SatendraCoder - Access Your Developer Dashboard');

    this.metaService.addTags([
      { name: 'description', content: 'Login to SatendraCoder to access developer tools, online courses, coding quizzes, and personalized content. Built for Angular developers, learners, and tech enthusiasts.' },
      { name: 'keywords', content: 'Angular login, developer login, SatendraCoder login, access coding tools, online learning login, frontend developer portal, angular tools, sign in, dashboard access, programming login' },
      { name: 'author', content: 'Satendra Rajput' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }

  ngOnInit(): void { }

  // Google login
  loginWithGoogle() {
    this.authService.loginWithGoogle();
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

          this.router.navigate(['/admin/users']);
        } catch (error) {
          this.toaster.addToast({
            title: 'Login Error',
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
}