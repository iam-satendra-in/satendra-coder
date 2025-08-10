import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBanner } from './blog-banner';

describe('BlogBanner', () => {
  let component: BlogBanner;
  let fixture: ComponentFixture<BlogBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
