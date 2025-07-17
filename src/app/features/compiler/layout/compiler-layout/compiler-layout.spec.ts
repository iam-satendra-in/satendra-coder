import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerLayout } from './compiler-layout';

describe('CompilerLayout', () => {
  let component: CompilerLayout;
  let fixture: ComponentFixture<CompilerLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilerLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilerLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
