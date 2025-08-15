import { Component } from '@angular/core';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-url-encoder',
  imports: [MateriallistModule],
  templateUrl: './url-encoder.html',
  styleUrl: './url-encoder.scss'
})
export class UrlEncoder {
encodeInput: string = '';
  decodeInput: string = '';
  encoded: string = '';
  decoded: string = '';
  showCopiedEncode: boolean = false;
  showCopiedDecode: boolean = false;

  encode() {
    try {
      this.encoded = encodeURIComponent(this.encodeInput || '');
    } catch {
      this.encoded = 'Invalid input for URL encoding.';
    }
  }

  decode() {
    try {
      this.decoded = decodeURIComponent(this.decodeInput || '');
    } catch {
      this.decoded = 'Invalid URL encoded string.';
    }
  }

  copyToClipboard(text: string, isEncode = true) {
    navigator.clipboard.writeText(text).then(() => {
      if (isEncode) {
        this.showCopiedEncode = true;
        setTimeout(() => (this.showCopiedEncode = false), 1500);
      } else {
        this.showCopiedDecode = true;
        setTimeout(() => (this.showCopiedDecode = false), 1500);
      }
    });
  }
}