import { Component, inject } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { NgForm } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SToaster } from '../../../core/service/global/toaster/s-toaster';
import { SAskme } from '../../../core/service/global/askme/s-askme';

@Component({
  selector: 'app-ask-me-anything',
  imports: [MateriallistModule],
  templateUrl: './ask-me-anything.html',
  styleUrl: './ask-me-anything.scss'
})
export class AskMeAnything {

  private title = inject(Title);
  private meta = inject(Meta);
  private route = inject(Router);
  private toaster = inject(SToaster);
  private sAskapi = inject(SAskme);

  memberData = {
    name: '',
    email: '',
    mobile: '',
    message: ''
  };

  constructor() {
    this.title.setTitle('Contact Satendra | SatendraCoder.com');
    this.meta.updateTag({ name: 'description', content: 'Get in touch with Satendra Rajput for queries, suggestions or collaborations.' });
    this.meta.updateTag({ name: 'author', content: 'Satendra Rajput' });
  }

  submitMemberForm(form: NgForm) {
    if (form.valid) {
      console.log('Contact Submitted:', this.memberData);
      this.sAskapi.sendMessage(this.memberData).subscribe({
        next: (res) => {
          console.log(res);
          this.toaster.addToast({
            title: "Contact Submitted",
            type: 'success',
            message: res?.message
          })
          this.route.navigate(['/']);
          form.resetForm();
        },
        error: () => {
          alert('Failed to send message.');
        }
      })

    }
  }

  closeAndRedirect() {
    this.route.navigate(['/']);
  }
}