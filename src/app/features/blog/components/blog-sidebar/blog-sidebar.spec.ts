import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSidebar } from './blog-sidebar';

describe('BlogSidebar', () => {
  let component: BlogSidebar;
  let fixture: ComponentFixture<BlogSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
