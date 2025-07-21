import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-youtube-card',
  imports: [MateriallistModule],
  templateUrl: './youtube-card.html',
  styleUrl: './youtube-card.scss'
})
export class YoutubeCard {

  videos = [
  {
    title: 'Learn Angular Signals in 10 Minutes',
    author: 'Satendra Rajput',
    date: 'Jul 20, 2025',
    thumbnail: 'https://i.ytimg.com/vi/4kH4GdGz3lE/maxresdefault.jpg'
  },
  {
    title: 'Top 10 Interview Questions in Angular',
    author: 'Satendra Rajput',
    date: 'Jul 15, 2025',
    thumbnail: 'https://i.ytimg.com/vi/3BdVXy8t3pQ/maxresdefault.jpg'
  },
  {
    title: 'Build a Text Editor in Angular',
    author: 'Satendra Rajput',
    date: 'Jul 10, 2025',
    thumbnail: 'https://i.ytimg.com/vi/FzWBLU4YJjE/maxresdefault.jpg'
  }
];

}
