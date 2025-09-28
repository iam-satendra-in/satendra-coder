import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ebook } from '../../model/ebook.model';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-ebook-card',
  imports: [MateriallistModule, CommonModule],
  templateUrl: './ebook-card.component.html',
  styleUrl: './ebook-card.component.scss',
})
export class EbookCardComponent {
  @Input() ebook!: Ebook;
  @Output() addToLibrary = new EventEmitter<Ebook>();
  @Output() buyNow = new EventEmitter<Ebook>();

  onAdd() {
    this.addToLibrary.emit(this.ebook);
  }
  onBuy() {
    this.buyNow.emit(this.ebook);
  }
}
