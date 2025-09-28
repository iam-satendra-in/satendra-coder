import { Component, inject } from '@angular/core';
import { MateriallistModule } from '../../../materiallist/materiallist-module';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SAskme } from '../../../../core/service/global/askme/s-askme';
import { SSeo } from '../../../../core/service/other/seo/s-seo';
import { ToastService } from 'sc-angular-toastify';
import { MenuCard } from '../../../../pages/home/menu-card/menu-card';
import { FooterCard } from '../../../../pages/home/footer-card/footer-card';
import { GlobalContact } from '../global-contact/global-contact';
import { TestimonialsComponent } from '../../../../pages/home/testimonials/testimonials.component';

@Component({
  selector: 'app-ask-me-anything',
  imports: [
    MateriallistModule,
    MenuCard,
    FooterCard,
    GlobalContact,
    TestimonialsComponent,
  ],
  templateUrl: './ask-me-anything.html',
  styleUrl: './ask-me-anything.scss',
})
export class AskMeAnything {
  private seo = inject(SSeo);
  private route = inject(Router);
  private toaster = inject(ToastService);
  private sAskapi = inject(SAskme);

  memberData = {
    name: '',
    email: '',
    mobile: '',
    message: '',
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.updateMeta({
      title: 'Contact Satendra Rajput – Connect Personally | Satendra Coder',
      description:
        'Have questions, suggestions, or collaboration ideas? Contact Satendra Rajput directly through this page. Let’s connect personally for tech discussions, feedback, or project ideas.',
      keywords:
        'contact satendra rajput, connect with satendra coder, satendra personal contact, message satendra coder, tech discussion, coding collaboration, feedback, satendracoder.com',
      url: 'https://satendracoder.com/contact-satendra',
      image: 'https://satendracoder.com/assets/cover-image.png',
    });
  }

  submitMemberForm(form: NgForm) {
    if (form.valid) {
      debugger;
      console.log('Contact Submitted:', this.memberData);
      this.sAskapi.sendMessage(this.memberData).subscribe({
        next: (res) => {
          console.log(res);
          this.toaster.show(res?.message, 'success');
          form.resetForm();
        },
        error: () => {
          alert('Failed to send message.');
        },
      });
    }
  }

  closeAndRedirect() {
    this.route.navigate(['/']);
  }
}
