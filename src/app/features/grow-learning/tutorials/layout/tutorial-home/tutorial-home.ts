import { Component } from '@angular/core';
import { MateriallistModule } from '../../../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-tutorial-home',
  imports: [MateriallistModule],
  templateUrl: './tutorial-home.html',
  styleUrl: './tutorial-home.scss',
})
export class TutorialHome {}
