import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapCard } from './roadmap-card';

describe('RoadmapCard', () => {
  let component: RoadmapCard;
  let fixture: ComponentFixture<RoadmapCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
