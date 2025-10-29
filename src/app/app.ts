import { Component, HostListener, inject, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScAngularToastify, ToastService } from 'sc-angular-toastify';
import { ScAngularLoader } from 'sc-angular-loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScAngularToastify, ScAngularLoader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'satendra-coder';
  private test = 'Rahul';
  private arr1 = [1, 2, 3, 4];
  private arr2 = [8, 18, 10, 12];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const result = this.arr1.splice(3, 3, 100, 99, 2);
    console.log(result);
    console.log(this.arr1);
  }
}
