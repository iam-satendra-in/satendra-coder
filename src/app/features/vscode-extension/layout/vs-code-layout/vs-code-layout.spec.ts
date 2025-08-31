import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsCodeLayout } from './vs-code-layout';

describe('VsCodeLayout', () => {
  let component: VsCodeLayout;
  let fixture: ComponentFixture<VsCodeLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VsCodeLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsCodeLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
