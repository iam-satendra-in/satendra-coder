import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2, computed, signal } from '@angular/core';
import { SSafeStorage } from '../safe-storage/s-safe-storage';

@Injectable({
  providedIn: 'root'
})
export class STheme {
  private renderer: Renderer2;
  private _isDarkTheme = signal(false); // main signal

  readonly isDarkTheme = computed(() => this._isDarkTheme());

  constructor(
    rendererFactory: RendererFactory2,
    private storageService: SSafeStorage,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = this.storageService.getItem('isDarkTheme');
      const defaultTheme = savedTheme !== null ? JSON.parse(savedTheme) : false;
      this._isDarkTheme.set(defaultTheme);
      this.storageService.setItem('isDarkTheme', JSON.stringify(defaultTheme));
      this.applyTheme(defaultTheme);
    }
  }

  toggleTheme() {
    const newTheme = !this._isDarkTheme();
    this._isDarkTheme.set(newTheme);
    this.storageService.setItem('isDarkTheme', JSON.stringify(newTheme));
    this.applyTheme(newTheme);
  }

  private applyTheme(isDark: boolean) {
    const body = document.body;
    if (isDark) {
      this.renderer.removeClass(body, 'light-theme');
      this.renderer.addClass(body, 'dark-theme');
    } else {
      this.renderer.removeClass(body, 'dark-theme');
      this.renderer.addClass(body, 'light-theme');
    }
  }
}
