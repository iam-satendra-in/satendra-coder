import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerEditor } from './compiler-editor';

describe('CompilerEditor', () => {
  let component: CompilerEditor;
  let fixture: ComponentFixture<CompilerEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilerEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilerEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
