import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CContactUs } from './c-contact-us';

describe('CContactUs', () => {
  let component: CContactUs;
  let fixture: ComponentFixture<CContactUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CContactUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CContactUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
