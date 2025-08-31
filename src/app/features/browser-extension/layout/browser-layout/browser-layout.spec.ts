import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserLayout } from './browser-layout';

describe('BrowserLayout', () => {
  let component: BrowserLayout;
  let fixture: ComponentFixture<BrowserLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
