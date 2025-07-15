import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachoutCard } from './reachout-card';

describe('ReachoutCard', () => {
  let component: ReachoutCard;
  let fixture: ComponentFixture<ReachoutCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReachoutCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachoutCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
