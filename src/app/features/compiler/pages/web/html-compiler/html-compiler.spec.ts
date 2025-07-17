import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCompiler } from './html-compiler';

describe('HtmlCompiler', () => {
  let component: HtmlCompiler;
  let fixture: ComponentFixture<HtmlCompiler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCompiler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCompiler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
