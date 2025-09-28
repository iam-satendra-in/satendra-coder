import { Component } from '@angular/core';
import { EbooksService } from '../../services/ebooks.service';
import { Ebook } from '../../model/ebook.model';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-my-library',
  imports: [MateriallistModule],
  templateUrl: './my-library.component.html',
  styleUrl: './my-library.component.scss',
})
export class MyLibraryComponent {
  library: Ebook[] = [];

  constructor(private svc: EbooksService) {}

  ngOnInit() {
    this.library = this.svc.getLibrary();
  }

  remove(id: string) {
    if (!confirm('Remove from library?')) return;
    this.svc.removeFromLibrary(id);
    this.library = this.svc.getLibrary();
  }
}
