import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoralSidebar } from './tutoral-sidebar';

describe('TutoralSidebar', () => {
  let component: TutoralSidebar;
  let fixture: ComponentFixture<TutoralSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutoralSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoralSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
