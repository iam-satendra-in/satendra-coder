import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlVideoEditor } from './html-video-editor';

describe('HtmlVideoEditor', () => {
  let component: HtmlVideoEditor;
  let fixture: ComponentFixture<HtmlVideoEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlVideoEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlVideoEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
