import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToaster } from './c-toaster';

describe('CToaster', () => {
  let component: CToaster;
  let fixture: ComponentFixture<CToaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CToaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CToaster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
