import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCompiler } from './angular-compiler';

describe('AngularCompiler', () => {
  let component: AngularCompiler;
  let fixture: ComponentFixture<AngularCompiler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCompiler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCompiler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
