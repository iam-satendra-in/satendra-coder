import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerOutput } from './compiler-output';

describe('CompilerOutput', () => {
  let component: CompilerOutput;
  let fixture: ComponentFixture<CompilerOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilerOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilerOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
