import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { STheme } from '../../../../core/service/global/theme/s-theme';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { SearchBox } from "../../../../shared/components/other/search-box/search-box";

@Component({
  selector: 'app-dashboard-header',
  imports: [MateriallistModule, SearchBox],
  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.scss'
})
export class DashboardHeader {

 @ViewChild('myDiv') myDiv!: ElementRef;
  isDarkTheme: boolean = false;
  isDropdownVisible: boolean = false;
    isLoggedIn: boolean = false;
     activeDropdown: string | null = null;
  
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private themeService: STheme
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(70, 80);
      }
    });
  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme();
  }

  ngAfterViewInit(): void {
      window.addEventListener('scroll', this.onScroll.bind(this));
  }

  // This method will handle scroll events
  onScroll() {
    debugger
    console.log("Scrolling... Y Offset:", window.scrollY);
  
    if (this.myDiv && this.myDiv.nativeElement) {
      console.log("Element Found:", this.myDiv.nativeElement);
  
      // If the page is scrolled more than 10px, add a class, else remove it
      if (window.scrollY > 100) {
        this.renderer.addClass(this.myDiv.nativeElement, 'menuscrolled');
      } else {
        this.renderer.removeClass(this.myDiv.nativeElement, 'menuscrolled');
      }
    } else {
      console.log("Element NOT Found");
    }
  }
  

  isDarkModeMethod() {
    this.themeService.isDarkTheme();
  }

  toggleDropdown(visible: boolean): void {
    this.isDropdownVisible = visible;
  }

  showDropdown() {
    this.isDropdownVisible = true;
  }

  hideDropdown() {
    this.isDropdownVisible = false;
  }
}
