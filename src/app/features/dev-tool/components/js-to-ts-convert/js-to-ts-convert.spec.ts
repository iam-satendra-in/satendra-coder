import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsToTsConvert } from './js-to-ts-convert';

describe('JsToTsConvert', () => {
  let component: JsToTsConvert;
  let fixture: ComponentFixture<JsToTsConvert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsToTsConvert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsToTsConvert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
