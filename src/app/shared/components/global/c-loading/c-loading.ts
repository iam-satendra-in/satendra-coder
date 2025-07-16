import { Component, computed, inject } from '@angular/core';
import { SLoaders } from '../../../../core/service/global/loaders/s-loaders';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-c-loading',
  imports: [CommonModule],
  templateUrl: './c-loading.html',
  styleUrl: './c-loading.scss'
})
export class CLoading {
 private loaderService = inject(SLoaders);
  
  // Use signal directly
  isLoading = computed(() => this.loaderService.isLoading());
}
