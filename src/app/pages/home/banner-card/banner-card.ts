import { Component} from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';


@Component({
  selector: 'app-banner-card',
  imports: [MateriallistModule],
  templateUrl:'./banner-card.html',
  styleUrl: './banner-card.scss'
})
export class BannerCard {
 
  smallImages = [
    { src: '/assets/images/montor/rishi.png', alt: 'Rishi Singh' },
    { src: '/assets/images/montor/mutawakkil.png', alt: 'Mutawakkil' },
    { src: 'assets/images/mentor4.jpg', alt: 'Mentor 4' }
  ];

  texts: string[] = [
    'Mastering JavaScript','Mastering Java','Mastering Angular',
    'Mastering MySQL','Mastering HTML','Mastering CSS',
  ];
  colors: string[] = [
    '#3357FF', // Color for 'Web Development'
    '#FF5733', // Color for 'Learn Programming'
    '#00000',  // Color for 'App Development'
    '#08bd59eb',
    '#eb7f04ff', // Color for 'Web Development'
    '#d20960ff', // Color for 'Learn Programming'

];
  currentText: string = '';
  currentColor: string = '';
  index: number = 0;
  textWidth: string = '0ch';
  stepsCount: string = 'steps(1)';
  
  constructor() { }

  ngOnInit(): void {
    this.changeText();

    // Change text every 5 seconds (match with animation timing)
    setInterval(() => {
      this.changeText();
    }, 5000);
  }

  changeText(): void {
    this.currentText = this.texts[this.index];
    this.currentColor = this.colors[this.index];
    this.index = (this.index + 1) % this.texts.length;

    // Calculate the width based on the currentText length
    this.textWidth = `${this.currentText.length}ch`;

     // Set the steps for the animation based on the text length
    this.stepsCount = `steps(${this.currentText.length})`;
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