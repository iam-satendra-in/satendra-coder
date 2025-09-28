import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookFilterComponent } from './ebook-filter.component';

describe('EbookFilterComponent', () => {
  let component: EbookFilterComponent;
  let fixture: ComponentFixture<EbookFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EbookFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbookFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
