import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADashboard } from './a-dashboard';

describe('ADashboard', () => {
  let component: ADashboard;
  let fixture: ComponentFixture<ADashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
