import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CThemeToggle } from './c-theme-toggle';

describe('CThemeToggle', () => {
  let component: CThemeToggle;
  let fixture: ComponentFixture<CThemeToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CThemeToggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CThemeToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
