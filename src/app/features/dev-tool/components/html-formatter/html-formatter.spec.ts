import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFormatter } from './html-formatter';

describe('HtmlFormatter', () => {
  let component: HtmlFormatter;
  let fixture: ComponentFixture<HtmlFormatter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlFormatter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlFormatter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
