import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTutorialListComponent } from './admin-tutorial-list.component';

describe('AdminTutorialListComponent', () => {
  let component: AdminTutorialListComponent;
  let fixture: ComponentFixture<AdminTutorialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTutorialListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTutorialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
