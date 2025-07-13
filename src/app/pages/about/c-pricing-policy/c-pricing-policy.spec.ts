import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPricingPolicy } from './c-pricing-policy';

describe('CPricingPolicy', () => {
  let component: CPricingPolicy;
  let fixture: ComponentFixture<CPricingPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CPricingPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPricingPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
