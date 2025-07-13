import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalContact } from './global-contact';

describe('GlobalContact', () => {
  let component: GlobalContact;
  let fixture: ComponentFixture<GlobalContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
