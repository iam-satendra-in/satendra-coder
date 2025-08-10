import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSlider } from './blog-slider';

describe('BlogSlider', () => {
  let component: BlogSlider;
  let fixture: ComponentFixture<BlogSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
