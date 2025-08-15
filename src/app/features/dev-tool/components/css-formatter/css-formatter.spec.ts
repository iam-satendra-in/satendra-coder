import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFormatter } from './css-formatter';

describe('CssFormatter', () => {
  let component: CssFormatter;
  let fixture: ComponentFixture<CssFormatter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssFormatter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssFormatter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
