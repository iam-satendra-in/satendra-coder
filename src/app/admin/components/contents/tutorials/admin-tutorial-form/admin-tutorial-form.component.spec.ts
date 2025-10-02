import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTutorialFormComponent } from './admin-tutorial-form.component';

describe('AdminTutorialFormComponent', () => {
  let component: AdminTutorialFormComponent;
  let fixture: ComponentFixture<AdminTutorialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTutorialFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTutorialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
