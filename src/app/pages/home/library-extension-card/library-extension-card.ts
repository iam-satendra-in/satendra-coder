import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-library-extension-card',
  imports: [MateriallistModule],
  templateUrl: './library-extension-card.html',
  styleUrl: './library-extension-card.scss',
})
export class LibraryExtensionCard {}
