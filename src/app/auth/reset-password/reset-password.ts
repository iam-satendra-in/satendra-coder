import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist-module';
import { SQr } from '../../core/service/other/s-qr';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reset-password',
  imports: [MateriallistModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPassword {
@Input() data: string = 'HELLO';
  @Input() textUnder?: string;
  @Input() logoUrl?: string;
  @Input() theme = {
    darkColor: '#111',
    lightColor: '#fff',
    borderRadius: '8px',
    borderColor: '#000',
    cellShape: 'square' as 'square' | 'circle'
  };

  @ViewChild('qrRef') qrRef!: ElementRef;
  @ViewChild('svgRef') svgRef!: ElementRef;
  matrix: number[][] = [];

  constructor(private encoder: SQr) {}

  ngOnInit() {
    this.matrix = this.encoder.generateMatrix(this.data);
  }

  downloadPNG() {
    html2canvas(this.qrRef.nativeElement).then(canvas => {
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  }

  downloadSVG() {
    const svg = this.svgRef.nativeElement as SVGElement;
    const blob = new Blob([svg.outerHTML], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'qr-code.svg';
    link.click();
  }
}