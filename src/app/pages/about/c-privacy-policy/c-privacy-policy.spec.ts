import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPrivacyPolicy } from './c-privacy-policy';

describe('CPrivacyPolicy', () => {
  let component: CPrivacyPolicy;
  let fixture: ComponentFixture<CPrivacyPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CPrivacyPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPrivacyPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
