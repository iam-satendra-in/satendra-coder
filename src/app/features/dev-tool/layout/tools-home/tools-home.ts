import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCard } from '../../../../pages/home/menu-card/menu-card';
import { FooterCard } from '../../../../pages/home/footer-card/footer-card';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { FormControl } from '@angular/forms';
import { STools } from '../../service/s-tools';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { Tool } from '../../models/tool.interface';
import { GlobalContact } from "../../../../shared/components/other/global-contact/global-contact";

@Component({
  selector: 'app-tools-home',
  imports: [CommonModule, MenuCard, FooterCard, MateriallistModule, GlobalContact],
  templateUrl: './tools-home.html',
  styleUrl: './tools-home.scss',
})
export class ToolsHome {

  searchControl = new FormControl('');
  isSearchActive = false;

  filteredTools$!: Observable<Tool[]>;

  constructor(private toolsService: STools) {}

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.toolsService.setSearchTerm(searchTerm || '');
      this.isSearchActive = (searchTerm || '').length > 0;
    });

    this.filteredTools$ = this.toolsService.filteredTools$;
  }

  getRatingStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return [
      ...Array(fullStars).fill('★'),
      ...(hasHalfStar ? ['☆'] : []),
      ...Array(emptyStars).fill('☆')
    ];
  }

  clearSearch(): void {
    this.searchControl.setValue('');
    this.isSearchActive = false;
  }

  onFocus(): void {
    this.isSearchActive = true;
  }

  onBlur(): void {
    if (!this.searchControl.value) {
      this.isSearchActive = false;
    }
  }
}
