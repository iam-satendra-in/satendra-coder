import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SToaster } from '../../../core/service/global/toaster/s-toaster';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { SSeo } from '../../../core/service/other/seo/s-seo';


@Component({
  selector: 'app-c-contact-us',
  imports: [MateriallistModule],
  templateUrl: './c-contact-us.html',
  styleUrl: './c-contact-us.scss'
})
export class CContactUs {

  contactForm: FormGroup;
  submitted = false;
  private seo = inject(SSeo);

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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.updateMeta({
      title:'Contact – Satendra Coder',
      description:'Reach out to Satendra Rajput for support, feedback, and tech collaboration.',
      keywords:'satendra coder, contact satendra, tech support',
      url:'https://satendracoder.com/contact',
    })
  }
}