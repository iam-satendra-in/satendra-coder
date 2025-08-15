import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakenameGen } from './fakename-gen';

describe('FakenameGen', () => {
  let component: FakenameGen;
  let fixture: ComponentFixture<FakenameGen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakenameGen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakenameGen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
