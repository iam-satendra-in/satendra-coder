import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordHashGen } from './password-hash-gen';

describe('PasswordHashGen', () => {
  let component: PasswordHashGen;
  let fixture: ComponentFixture<PasswordHashGen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordHashGen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordHashGen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
