import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAboutUs } from './c-about-us';

describe('CAboutUs', () => {
  let component: CAboutUs;
  let fixture: ComponentFixture<CAboutUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CAboutUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAboutUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
