import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerCard } from './compiler-card';

describe('CompilerCard', () => {
  let component: CompilerCard;
  let fixture: ComponentFixture<CompilerCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilerCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilerCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
