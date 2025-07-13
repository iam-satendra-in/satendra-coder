import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTerms } from './c-terms';

describe('CTerms', () => {
  let component: CTerms;
  let fixture: ComponentFixture<CTerms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTerms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTerms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
