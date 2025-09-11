import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialHome } from './tutorial-home';

describe('TutorialHome', () => {
  let component: TutorialHome;
  let fixture: ComponentFixture<TutorialHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
