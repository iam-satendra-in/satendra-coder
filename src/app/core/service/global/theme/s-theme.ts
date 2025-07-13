import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { SSafeStorage } from '../safe-storage/s-safe-storage';

@Injectable({
  providedIn: 'root'
})
export class STheme {
  
 private renderer: Renderer2;
  private isDarkTheme: boolean = false;


  constructor(
    rendererFactory: RendererFactory2,
    private storageService: SSafeStorage,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = this.storageService.getItem('isDarkTheme');
      if (savedTheme !== null) {
        this.isDarkTheme = JSON.parse(savedTheme);
      } else {
        if (isPlatformBrowser(this.platformId)) {
          this.storageService.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
        }

      }
      this.applyTheme(this.isDarkTheme);
    }


  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.storageService.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
    this.applyTheme(this.isDarkTheme);
  }

  applyTheme(isDark: boolean) {
    const body = document.body;

    if (isDark) {
      this.renderer.removeClass(body, 'light-theme');
      this.renderer.addClass(body, 'dark-theme');
    } else {
      this.renderer.removeClass(body, 'dark-theme');
      this.renderer.addClass(body, 'light-theme');
    }
  }

  getCurrentTheme() {
    return this.isDarkTheme;
  }
}

