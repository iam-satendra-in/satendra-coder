import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialLayout } from './tutorial-layout';

describe('TutorialLayout', () => {
  let component: TutorialLayout;
  let fixture: ComponentFixture<TutorialLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
