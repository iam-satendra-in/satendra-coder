import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlogCard } from './latest-blog-card';

describe('LatestBlogCard', () => {
  let component: LatestBlogCard;
  let fixture: ComponentFixture<LatestBlogCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestBlogCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestBlogCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
