import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeCard } from './youtube-card';

describe('YoutubeCard', () => {
  let component: YoutubeCard;
  let fixture: ComponentFixture<YoutubeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
