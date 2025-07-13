import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SToaster } from '../../../core/service/global/toaster/s-toaster';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-c-contact-us',
  imports: [MateriallistModule],
  templateUrl: './c-contact-us.html',
  styleUrl: './c-contact-us.scss'
})
export class CContactUs {

  private titleService = inject(Title);
  private metaService = inject(Meta);
  contactForm: FormGroup;
  categories = ['Online Courses', 'Quick Compilers', 'Development Tools', 'Problem-Solving'];

  constructor(private fb: FormBuilder, private toasterapi: SToaster) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', Validators.required],
      category: ['', Validators.required],
      message: ['', Validators.required],
    });

    this.titleService.setTitle('Contact Us | SatendraCoder.com - Connect with Satendra Rajput');

    this.metaService.updateTag({
      name: 'description',
      content: 'Contact Satendra Rajput via SatendraCoder.com for feedback, support, collaborations, or any Angular, Java, and full stack development queries.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Contact Satendra Coder, Satendra Rajput, Angular Developer Support, Web Development Help, Connect Full Stack Developer, Contact SatendraCoder.com, Angular Query, Freelance Angular Developer'
    });

    this.metaService.updateTag({
      name: 'author',
      content: 'Satendra Rajput'
    });

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.toasterapi.addToast({
        title: 'Success',
        message: 'Your message has been sent successfully.',
        type: 'success'
      })
    }
    this.contactForm.reset();
  }
}
