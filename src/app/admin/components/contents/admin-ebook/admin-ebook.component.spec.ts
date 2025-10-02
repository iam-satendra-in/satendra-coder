import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEbookComponent } from './admin-ebook.component';

describe('AdminEbookComponent', () => {
  let component: AdminEbookComponent;
  let fixture: ComponentFixture<AdminEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
