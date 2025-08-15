import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToCsvConvert } from './json-to-csv-convert';

describe('JsonToCsvConvert', () => {
  let component: JsonToCsvConvert;
  let fixture: ComponentFixture<JsonToCsvConvert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonToCsvConvert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonToCsvConvert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
