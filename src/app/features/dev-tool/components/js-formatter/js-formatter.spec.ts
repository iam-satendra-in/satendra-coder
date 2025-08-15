import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFormatter } from './js-formatter';

describe('JsFormatter', () => {
  let component: JsFormatter;
  let fixture: ComponentFixture<JsFormatter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsFormatter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsFormatter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
