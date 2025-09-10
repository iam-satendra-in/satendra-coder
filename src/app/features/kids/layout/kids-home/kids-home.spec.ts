import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsHome } from './kids-home';

describe('KidsHome', () => {
  let component: KidsHome;
  let fixture: ComponentFixture<KidsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
