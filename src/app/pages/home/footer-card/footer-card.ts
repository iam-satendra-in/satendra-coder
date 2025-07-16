import { Component, effect, Signal } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { STheme } from '../../../core/service/global/theme/s-theme';

@Component({
  selector: 'app-footer-card',
  standalone: true,
  imports: [MateriallistModule],
  templateUrl: './footer-card.html',
  styleUrl: './footer-card.scss',
})
export class FooterCard {
  isDarkTheme!: Signal<boolean>; // declare first

  constructor(public themeService: STheme) {
    this.isDarkTheme = this.themeService.isDarkTheme; // assign after themeService is available

    effect(() => {
      console.log('Theme changed:', this.isDarkTheme());
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
