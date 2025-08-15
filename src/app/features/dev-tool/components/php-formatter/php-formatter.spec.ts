import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpFormatter } from './php-formatter';

describe('PhpFormatter', () => {
  let component: PhpFormatter;
  let fixture: ComponentFixture<PhpFormatter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhpFormatter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhpFormatter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
