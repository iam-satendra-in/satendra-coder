import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { STheme } from '../../../core/service/global/theme/s-theme';

@Component({
  selector: 'app-footer-card',
  imports: [MateriallistModule],
  templateUrl: './footer-card.html',
  styleUrl: './footer-card.scss',
})
export class FooterCard {
  isDarkTheme: boolean = true;

  constructor(private themeService: STheme) {}

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.getCurrentTheme();
  }

  isDarkModeMethod() {
    debugger
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.getCurrentTheme();
  }
}
