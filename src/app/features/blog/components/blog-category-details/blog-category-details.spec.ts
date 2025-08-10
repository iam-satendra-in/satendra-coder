import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoryDetails } from './blog-category-details';

describe('BlogCategoryDetails', () => {
  let component: BlogCategoryDetails;
  let fixture: ComponentFixture<BlogCategoryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCategoryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCategoryDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
