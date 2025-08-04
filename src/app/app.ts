import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CToaster } from "./shared/components/global/c-toaster/c-toaster";
import { CLoading } from "./shared/components/global/c-loading/c-loading";
import { SSeo } from './core/service/other/seo/s-seo';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CToaster, CLoading,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'satendra-coder';
  private seo = inject(SSeo);
  titleSeo:string = "Satendra Coder – Empowering Developers with Tools, Tutorials & Tech Insights (Hindi & English)";
  description:string = "Satendra Coder is a platform by Satendra Rajput offering developer tools, coding tutorials, and tech insights in Hindi & English.";
  keywords:string = "satendra coder, coding tutorials, dev tools, angular, spring boot";

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.updateMeta({
      title:this.titleSeo || this.titleSeo.slice(0,150),
      description:this.description,
      keywords:this.keywords,
      url:'https://satendracoder.com',
      image:'https://satendracoder.com/assets/logo.png'
    })
  }
}
