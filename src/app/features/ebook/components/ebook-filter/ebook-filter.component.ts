import { Component, EventEmitter, Output } from '@angular/core';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-ebook-filter',
  imports: [MateriallistModule],
  templateUrl: './ebook-filter.component.html',
  styleUrl: './ebook-filter.component.scss',
})
export class EbookFilterComponent {
  q = '';
  category = '';
  price = '';
  @Output() filter = new EventEmitter<{
    q: string;
    category: string;
    price: string;
  }>();

  emit() {
    this.filter.emit({
      q: this.q.trim(),
      category: this.category,
      price: this.price,
    });
  }
}
