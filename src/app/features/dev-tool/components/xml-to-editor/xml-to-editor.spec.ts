import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlToEditor } from './xml-to-editor';

describe('XmlToEditor', () => {
  let component: XmlToEditor;
  let fixture: ComponentFixture<XmlToEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XmlToEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XmlToEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
