import { Component, HostListener, inject, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CToaster } from './shared/components/global/c-toaster/c-toaster';
import { CLoading } from './shared/components/global/c-loading/c-loading';
import { SSeo } from './core/service/other/seo/s-seo';
import { ToastService, ScAngularToastify, Toast } from 'sc-angular-toastify';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CToaster, CLoading, ScAngularToastify],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'satendra-coder';

  constructor(private toast: ToastService) {}

  // This will catch browser/tab close
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: BeforeUnloadEvent) {
    event.preventDefault();
    event.returnValue = 'Are you sure you want to leave?';
  }
}
