import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsToJsConvert } from './ts-to-js-convert';

describe('TsToJsConvert', () => {
  let component: TsToJsConvert;
  let fixture: ComponentFixture<TsToJsConvert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsToJsConvert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsToJsConvert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
