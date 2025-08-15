import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToJsxConvert } from './html-to-jsx-convert';

describe('HtmlToJsxConvert', () => {
  let component: HtmlToJsxConvert;
  let fixture: ComponentFixture<HtmlToJsxConvert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlToJsxConvert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlToJsxConvert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
