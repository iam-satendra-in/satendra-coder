import { Component } from '@angular/core';
import { Roadmap_Data } from '../utils/roadmap/roadmap';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { HoverGradient } from '../../../shared/directives/global/hover-gradient/hover-gradient';

@Component({
  selector: 'app-roadmap-card',
  imports: [MateriallistModule,HoverGradient],
  templateUrl: './roadmap-card.html',
  styleUrl: './roadmap-card.scss'
})
export class RoadmapCard {
All_Roadmap = Roadmap_Data;
}
