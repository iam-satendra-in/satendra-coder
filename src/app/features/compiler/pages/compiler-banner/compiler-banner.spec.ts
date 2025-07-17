import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerBanner } from './compiler-banner';

describe('CompilerBanner', () => {
  let component: CompilerBanner;
  let fixture: ComponentFixture<CompilerBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilerBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilerBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
