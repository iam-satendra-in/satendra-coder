import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotsGenerate } from './robots-generate';

describe('RobotsGenerate', () => {
  let component: RobotsGenerate;
  let fixture: ComponentFixture<RobotsGenerate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotsGenerate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobotsGenerate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
