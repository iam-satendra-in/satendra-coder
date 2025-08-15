import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvToJsonConvert } from './csv-to-json-convert';

describe('CsvToJsonConvert', () => {
  let component: CsvToJsonConvert;
  let fixture: ComponentFixture<CsvToJsonConvert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsvToJsonConvert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvToJsonConvert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
