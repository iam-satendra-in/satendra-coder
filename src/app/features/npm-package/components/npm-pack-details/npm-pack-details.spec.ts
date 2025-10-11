import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmPackDetails } from './npm-pack-details';

describe('NpmPackDetails', () => {
  let component: NpmPackDetails;
  let fixture: ComponentFixture<NpmPackDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpmPackDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpmPackDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
