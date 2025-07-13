import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { SAuth } from '../service/s-auth';
import { SToaster } from '../../core/service/global/toaster/s-toaster';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-register-page',
  imports: [MateriallistModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage {

  showPassword: boolean = false;
  registerForm!: FormGroup;

  constructor(
    private title: Title,
    private meta: Meta,
    private authService: SAuth,
    private toaster: SToaster,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.title.setTitle('Register | SatendraCoder - Create Your Free Developer Account');

    this.meta.addTags([
      {
        name: 'description',
        content: 'Create your free SatendraCoder account to access developer tools, coding quizzes, online courses, and personalized learning features. Join the growing tech community today.'
      },
      {
        name: 'keywords',
        content: 'developer registration, angular registration, SatendraCoder register, sign up coding, frontend account, full stack developer signup, programming courses register'
      },
      {
        name: 'author',
        content: 'Satendra Rajput'
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ]);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Method to handle form submission
  onSubmit() {
    if (this.registerForm.valid) {
      debugger;
      this.authService
        .register(this.registerForm.value)
        .subscribe((response) => {
          try {
            console.log('Parsed Response:', response);
            this.toaster.addToast({
              title: 'Login Success',
              message: 'Welcome back! Access granted.',
              type: 'success',
            });
            this.router.navigate(['/auth/login']);
          } catch (error) {
            console.log('Response is not JSON:', response);
          }
        });
      console.log('Form Values:', this.registerForm.value); // Console form values

      this.registerForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  // Helper method to check if a field is valid and touched
  get fullName() {
    return this.registerForm.get('fullName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}

