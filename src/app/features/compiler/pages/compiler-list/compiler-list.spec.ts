import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerList } from './compiler-list';

describe('CompilerList', () => {
  let component: CompilerList;
  let fixture: ComponentFixture<CompilerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
