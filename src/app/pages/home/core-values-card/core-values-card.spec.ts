import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreValuesCard } from './core-values-card';

describe('CoreValuesCard', () => {
  let component: CoreValuesCard;
  let fixture: ComponentFixture<CoreValuesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreValuesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreValuesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
