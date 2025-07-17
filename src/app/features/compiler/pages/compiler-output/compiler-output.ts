import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-compiler-output',
  imports: [],
  templateUrl: './compiler-output.html',
  styleUrl: './compiler-output.scss'
})
export class CompilerOutput {
@Input() output: string = '';

  isDragging: boolean = false;
  startY = 0;
  startHeightTop = 0;
  startHeightBottom = 0;

  private topPart: HTMLElement | null = null;
  private bottomPart: HTMLElement | null = null;
  private readonly MIN_HEIGHT = 50; // Minimum height for sections

  @ViewChild('divider') divider: ElementRef | undefined;

  ngAfterViewInit(): void {
    // Ensure that `document` exists before accessing it
    if (typeof document !== 'undefined') {
      const dividerElement = this.divider?.nativeElement;

      // Cache the top and bottom parts for reuse
      this.topPart = document.querySelector('.top-part-output') as HTMLElement;
      this.bottomPart = document.querySelector('.bottom-part-output') as HTMLElement;

      if (dividerElement) {
        dividerElement.addEventListener('mousedown', this.onMouseDown.bind(this));
      }
    }
  }

  onMouseDown(event: MouseEvent): void {
    if (typeof document !== 'undefined') {
      this.isDragging = true;
      this.startY = event.clientY;

      if (this.topPart && this.bottomPart) {
        this.startHeightTop = this.topPart.getBoundingClientRect().height;
        this.startHeightBottom = this.bottomPart.getBoundingClientRect().height;
      }

      // Attach mousemove and mouseup listeners to the document
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    }
  }

  onMouseMove = (event: MouseEvent): void => {
    if (!this.isDragging || !this.topPart || !this.bottomPart) return;

    // Calculate new heights for both parts
    const newHeightTop = this.startHeightTop + (event.clientY - this.startY);
    const newHeightBottom = this.startHeightBottom - (event.clientY - this.startY);

    // Ensure the heights don't go below the minimum height
    if (newHeightTop > this.MIN_HEIGHT && newHeightBottom > this.MIN_HEIGHT) {
      this.topPart.style.height = `${newHeightTop}px`;
      this.bottomPart.style.height = `${newHeightBottom}px`;
    }
  };

  onMouseUp = (): void => {
    if (typeof document !== 'undefined') {
      this.isDragging = false;

      // Remove the event listeners to prevent memory leaks
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  };

  ngOnDestroy(): void {
    // Cleanup event listeners if the component is destroyed
    if (typeof document !== 'undefined') {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }
}

