import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64Encoder } from './base64-encoder';

describe('Base64Encoder', () => {
  let component: Base64Encoder;
  let fixture: ComponentFixture<Base64Encoder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base64Encoder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Base64Encoder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
