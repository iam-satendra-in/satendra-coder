import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateCard } from './collaborate-card';

describe('CollaborateCard', () => {
  let component: CollaborateCard;
  let fixture: ComponentFixture<CollaborateCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborateCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborateCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
