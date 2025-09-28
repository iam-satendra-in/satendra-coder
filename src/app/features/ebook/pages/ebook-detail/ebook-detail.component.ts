import { Component } from '@angular/core';
import { Ebook } from '../../model/ebook.model';
import { EbooksService } from '../../services/ebooks.service';
import { ActivatedRoute } from '@angular/router';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { switchMap } from 'rxjs';
import { MenuCard } from '../../../../pages/home/menu-card/menu-card';

@Component({
  selector: 'app-ebook-detail',
  imports: [MateriallistModule, MenuCard],
  templateUrl: './ebook-detail.component.html',
  styleUrl: './ebook-detail.component.scss',
})
export class EbookDetailComponent {
  ebook?: Ebook | undefined;

  constructor(private route: ActivatedRoute, private svc: EbooksService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id') || '';
          return this.svc.getById(id);
        })
      )
      .subscribe((b) => (this.ebook = b));
  }

  addToLibrary() {
    if (this.ebook) {
      this.svc.saveToLibrary(this.ebook);
      alert('Added to library');
    }
  }

  buyNow() {
    if (!this.ebook) return;
    if (this.ebook.price === 0) {
      this.svc.saveToLibrary(this.ebook);
      alert('Added to library (free)');
      return;
    }
    const ok = confirm(
      `Pay ₹${this.ebook.price} to buy "${this.ebook.title}"? (demo)`
    );
    if (ok) {
      this.svc.saveToLibrary(this.ebook);
      alert('Purchase successful — added to library (demo)');
    }
  }
}
