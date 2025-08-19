import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveConfirm } from './leave-confirm';

describe('LeaveConfirm', () => {
  let component: LeaveConfirm;
  let fixture: ComponentFixture<LeaveConfirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveConfirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveConfirm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
