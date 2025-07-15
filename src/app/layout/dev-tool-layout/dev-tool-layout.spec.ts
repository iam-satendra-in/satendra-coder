import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevToolLayout } from './dev-tool-layout';

describe('DevToolLayout', () => {
  let component: DevToolLayout;
  let fixture: ComponentFixture<DevToolLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevToolLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevToolLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
