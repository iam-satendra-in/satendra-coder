import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavenLayout } from './maven-layout';

describe('MavenLayout', () => {
  let component: MavenLayout;
  let fixture: ComponentFixture<MavenLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MavenLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MavenLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
