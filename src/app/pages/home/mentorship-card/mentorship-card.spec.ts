import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorshipCard } from './mentorship-card';

describe('MentorshipCard', () => {
  let component: MentorshipCard;
  let fixture: ComponentFixture<MentorshipCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorshipCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorshipCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
