import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmLayout } from './npm-layout';

describe('NpmLayout', () => {
  let component: NpmLayout;
  let fixture: ComponentFixture<NpmLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpmLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpmLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
