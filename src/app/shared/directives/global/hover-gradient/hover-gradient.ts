import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverGradient]',
   standalone: true // 👈 Important for standalone use
})
export class HoverGradient {

 // Input properties for customizable gradient colors
  @Input() startColor: string = 'rgba(255, 255, 255, 0.5)';
  @Input() midColor?: string; // Optional midColor
  @Input() endColor: string = 'rgba(0, 0, 0, 0.3)';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Track mouse movement over the element
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

    // Generate the gradient string dynamically based on available colors
    let gradient: string;
    if (this.midColor) {
      // Use 3 colors if midColor is provided
      gradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, ${this.startColor}, ${this.midColor}, ${this.endColor} 70%)`;
    } else {
      // Use 2 colors if midColor is not provided
      gradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, ${this.startColor}, ${this.endColor} 70%)`;
    }

    // Apply the gradient as the background style
    this.renderer.setStyle(this.el.nativeElement, 'background', gradient);
  }

  // Remove the gradient when the mouse leaves
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'background');
  }
}
