import { Component, inject } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { NgForm } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-c-become-a-member',
  imports: [MateriallistModule],
  templateUrl: './c-become-a-member.html',
  styleUrl: './c-become-a-member.scss'
})
export class CBecomeAMember {

 private title = inject(Title);
  private meta = inject(Meta);
  private dialogRef = inject(MatDialogRef);

  memberData = {
    name: '',
    email: '',
    memberType: '',
    link: '',
    message: ''
  };

  constructor() {
    this.title.setTitle('Become a Member | SatendraCoder.com');
    this.meta.updateTag({ name: 'description', content: 'Join SatendraCoder.com as a Learner, Mentor, or Contributor. Empower the coding community.' });
    this.meta.updateTag({ name: 'author', content: 'Satendra Rajput' });
  }

  submitMemberForm(form: NgForm) {
    if (form.valid) {
      console.log('Submitted:', this.memberData);
      alert('Thanks for joining! We’ll reach out to you soon.');
      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}