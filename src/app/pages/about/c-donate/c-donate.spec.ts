import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDonate } from './c-donate';

describe('CDonate', () => {
  let component: CDonate;
  let fixture: ComponentFixture<CDonate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CDonate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDonate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
