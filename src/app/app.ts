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

  constructor(private tost: ToastService) {}

  // This will catch browser/tab close
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: BeforeUnloadEvent) {
    event.preventDefault();
    event.returnValue = 'Are you sure you want to leave?';
  }

  show() {
    this.tost.show('Sucessfully login Pages', 'error', 3000);
  }
}
