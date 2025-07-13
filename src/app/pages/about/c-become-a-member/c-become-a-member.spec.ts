import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBecomeAMember } from './c-become-a-member';

describe('CBecomeAMember', () => {
  let component: CBecomeAMember;
  let fixture: ComponentFixture<CBecomeAMember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CBecomeAMember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CBecomeAMember);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
