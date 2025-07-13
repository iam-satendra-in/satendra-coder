import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverlineanimation]'
})
export class Hoverlineanimation {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.addBorderAnimation(); // Initially add border animation
  }

  private addBorderAnimation() {
    const line = this.renderer.createElement('div');
    this.renderer.setStyle(line, 'position', 'absolute');
    this.renderer.setStyle(line, 'top', '0');
    this.renderer.setStyle(line, 'left', '0');
    this.renderer.setStyle(line, 'width', '100%');
    this.renderer.setStyle(line, 'height', '100%');
    this.renderer.setStyle(line, 'border', '2px solid #4a90e2');
    this.renderer.setStyle(line, 'box-sizing', 'border-box');
    this.renderer.setStyle(line, 'animation', 'border-rotate 4s linear infinite');
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.appendChild(this.el.nativeElement, line);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'linear-gradient(90deg, #d43bd4, #3071ab, #00e8b5)');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background 0.5s ease, color 0.5s ease');

    const line = this.el.nativeElement.querySelector('div');
    if (line) {
      this.renderer.setStyle(line, 'animation-play-state', 'paused'); // Stop the border animation
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'transparent');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');

    const line = this.el.nativeElement.querySelector('div');
    if (line) {
      this.renderer.setStyle(line, 'animation-play-state', 'running'); // Resume the border animation
    }
  }

}
