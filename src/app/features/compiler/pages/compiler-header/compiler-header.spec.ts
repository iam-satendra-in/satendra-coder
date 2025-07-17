import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerHeader } from './compiler-header';

describe('CompilerHeader', () => {
  let component: CompilerHeader;
  let fixture: ComponentFixture<CompilerHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilerHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilerHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
