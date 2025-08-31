import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VscodeDetails } from './vscode-details';

describe('VscodeDetails', () => {
  let component: VscodeDetails;
  let fixture: ComponentFixture<VscodeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VscodeDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VscodeDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
