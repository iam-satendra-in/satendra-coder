import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compiler-card',
  imports: [],
  templateUrl: './compiler-card.html',
  styleUrl: './compiler-card.scss'
})
export class CompilerCard {
  private router = inject(Router);

  openCompiler(lang: string) {
  this.router.navigate(['/compiler', lang]);
}
}
