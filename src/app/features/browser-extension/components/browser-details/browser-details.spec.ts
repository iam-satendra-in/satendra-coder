import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserDetails } from './browser-details';

describe('BrowserDetails', () => {
  let component: BrowserDetails;
  let fixture: ComponentFixture<BrowserDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
