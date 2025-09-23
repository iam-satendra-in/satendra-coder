import { Component, inject } from '@angular/core';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { Base64Service } from '../../service/base64/base64-service';
import { ToastService } from 'sc-angular-toastify';

@Component({
  selector: 'app-base64-encoder',
  imports: [MateriallistModule],
  templateUrl: './base64-encoder.html',
  styleUrl: './base64-encoder.scss',
})
export class Base64Encoder {
  private toaster = inject(ToastService);
  encodeInput = '';
  decodeInput = '';
  encoded = '';
  decoded = '';

  showCopiedEncode = false;
  showCopiedDecode = false;

  encode() {
    if (!this.encodeInput) {
      this.encoded = '';
      return;
    }
    try {
      this.encoded = btoa(unescape(encodeURIComponent(this.encodeInput))); // Unicode-safe encoding
    } catch (error) {
      this.encoded = 'Invalid input for Base64 encoding.';
    }
  }

  decode() {
    if (!this.decodeInput) {
      this.decoded = '';
      return;
    }
    try {
      this.decoded = decodeURIComponent(escape(atob(this.decodeInput))); // Unicode-safe decoding
    } catch (error) {
      this.decoded = 'Invalid Base64 string.';
    }
  }

  copyToClipboard(text: string, isEncode: boolean = true) {
    navigator.clipboard.writeText(text).then(() => {
      if (isEncode) {
        this.showCopiedEncode = true;
        this.toaster.show('Copied!', 'success');
        setTimeout(() => (this.showCopiedEncode = false), 500);
      } else {
        this.showCopiedDecode = true;
        setTimeout(() => (this.showCopiedDecode = false), 500);
      }
    });
  }
}
