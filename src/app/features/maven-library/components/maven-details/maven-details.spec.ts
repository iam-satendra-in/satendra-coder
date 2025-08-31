import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavenDetails } from './maven-details';

describe('MavenDetails', () => {
  let component: MavenDetails;
  let fixture: ComponentFixture<MavenDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MavenDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MavenDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
