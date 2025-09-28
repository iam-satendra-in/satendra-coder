import { Component } from '@angular/core';
import { EbookFilterComponent } from '../../components/ebook-filter/ebook-filter.component';
import { EbookCardComponent } from '../../components/ebook-card/ebook-card.component';
import { Ebook } from '../../model/ebook.model';
import { EbooksService } from '../../services/ebooks.service';
import { tap } from 'rxjs';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ebook-list',
  imports: [
    MateriallistModule,
    EbookFilterComponent,
    EbookCardComponent,
    CommonModule,
  ],
  templateUrl: './ebook-list.component.html',
  styleUrl: './ebook-list.component.scss',
})
export class EbookListComponent {
  ebooks: Ebook[] = [];
  filtered: Ebook[] = [];

  constructor(private svc: EbooksService) {}

  ngOnInit() {
    this.svc
      .getAll()
      .pipe(
        tap((list: any) => {
          this.ebooks = list;
          this.filtered = [...list];
        })
      )
      .subscribe();
  }

  onFilter(query: { q: string; category: string; price: string }) {
    const q = query.q.toLowerCase();
    this.filtered = this.ebooks.filter((e) => {
      const matchQ =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.author.toLowerCase().includes(q);
      const matchCat = !query.category || e.category === query.category;
      const matchPrice =
        !query.price || (query.price === 'free' ? e.price === 0 : e.price > 0);
      return matchQ && matchCat && matchPrice;
    });
  }

  addToLibrary(ebook: Ebook) {
    this.svc.saveToLibrary(ebook);
    alert(`Added "${ebook.title}" to your library`);
  }

  buyNow(ebook: Ebook) {
    if (ebook.price === 0) {
      this.svc.saveToLibrary(ebook);
      alert('Added to library (free)');
      return;
    }
    // naive buy flow: confirm + add to library
    const ok = confirm(`Pay ₹${ebook.price} to buy "${ebook.title}"? (demo)`);
    if (ok) {
      this.svc.saveToLibrary(ebook);
      alert('Purchase successful — added to library (demo)');
    }
  }
}
