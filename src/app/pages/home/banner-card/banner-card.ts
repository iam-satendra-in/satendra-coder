import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-banner-card',
  imports: [MateriallistModule],
  templateUrl: './banner-card.html',
  styleUrl: './banner-card.scss'
})
export class BannerCard {
  smallImages = [
    { src: '/assets/images/montor/rishi.png', alt: 'Rishi Singh' },
    { src: '/assets/images/montor/mutawakkil.png', alt: 'Mutawakkil' },
    { src: 'assets/images/mentor4.jpg', alt: 'Mentor 4' }
  ];

  texts: string[] = [
    'Mastering JavaScript', 'Mastering Java', 'Mastering Angular',
    'Mastering MySQL', 'Mastering HTML', 'Mastering CSS'
  ];

  colors: string[] = [
    '#3357FF', '#FF5733', '#000000',
    '#FF5733', '#3357FF', '#FF5733'
  ];

  currentText: string = '';
  currentColor: string = '';
  index: number = 0;
  textWidth: string = '0ch';
  stepsCount: string = 'steps(1)';
  UserData: any = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const user = sessionStorage.getItem('user');
      this.UserData = user ? JSON.parse(user) : null;
    }

    this.changeText();

    setInterval(() => {
      this.changeText();
    }, 5000);
  }

  changeText(): void {
    this.currentText = this.texts[this.index];
    this.currentColor = this.colors[this.index];
    this.index = (this.index + 1) % this.texts.length;
    this.textWidth = `${this.currentText.length}ch`;
    this.stepsCount = `steps(${this.currentText.length})`;
    this.cdr.detectChanges(); // Force detect if needed
  }


mostLearning=[
    {
      imgName:"/assets/icons/web/js.svg",
      numberCount:"Mastering JavaScript",
      Para:"ES6+,Promises,Closures,etc.."
    },
  
    {
      imgName:"/assets/icons/web/angular.svg",
      numberCount:"Mastering Angular",
      Para:"Comp,Form,Routing,DI etc.."
    },
  
    {
      imgName:"/assets/icons/program/java.svg",
      numberCount:"Mastering Java",
      Para:"OOP,Streams,Collections etc.."
    },
  
    {
      imgName:"/assets/icons/web/spring-boot.svg",
      numberCount:"Mastering Spring Boot",
      Para:"MVC,JPA,REST etc.."
    },
  ]
}