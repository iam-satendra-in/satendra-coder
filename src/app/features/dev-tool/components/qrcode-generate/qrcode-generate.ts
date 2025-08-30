import { Component } from '@angular/core';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { Sqrcode } from '../../service/qrcode/sqrcode';

@Component({
  selector: 'app-qrcode-generate',
  imports: [MateriallistModule],
  templateUrl: './qrcode-generate.html',
  styleUrl: './qrcode-generate.scss'
})
export class QrcodeGenerate {

 content = 'https://www.satendracoder.com/';
  width = 300;
  color = '#000000';
  backgroundColor = '#ffffff';
  margin = 4;
  logoUrl = '';
  qrDataUrl = '';
  errorMessage = '';

  constructor(private qrService: Sqrcode) {
    this.generateQR();
  }

  async generateQR() {
    if (!this.content) return;
    this.errorMessage = '';

    try {
      this.qrDataUrl = await this.qrService.generateQR(this.content, {
        width: this.width,
        color: this.color,
        backgroundColor: this.backgroundColor,
        margin: this.margin,
        logoUrl: this.logoUrl || undefined
      });
    } catch (error) {
      console.error('Error generating QR code:', error);
      this.errorMessage = error instanceof Error ? error.message : 'Failed to generate QR code';
    }
  }

  async downloadQR(format: 'png' | 'jpg') {
    if (!this.qrDataUrl) return;
    
    const filename = `qr-code-${Date.now()}`;
    await this.qrService.downloadQR(this.qrDataUrl, format, filename);
  }
}