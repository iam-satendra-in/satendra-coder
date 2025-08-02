import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SToaster } from '../../../core/service/global/toaster/s-toaster';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';


@Component({
  selector: 'app-c-contact-us',
  imports: [MateriallistModule],
  templateUrl: './c-contact-us.html',
  styleUrl: './c-contact-us.scss'
})
export class CContactUs {

  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) return;

    console.log('Form submitted:', this.contactForm.value);
  }
}