import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tool-card',
  imports: [RouterLink],
  templateUrl: './tool-card.html',
  styleUrl: './tool-card.scss'
})
export class ToolCard {
   @Input() icon = '';
  @Input() name = '';
  @Input() description = '';
  @Input() route = '';

}
