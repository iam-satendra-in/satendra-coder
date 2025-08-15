import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlEncoder } from './url-encoder';

describe('UrlEncoder', () => {
  let component: UrlEncoder;
  let fixture: ComponentFixture<UrlEncoder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlEncoder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlEncoder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
