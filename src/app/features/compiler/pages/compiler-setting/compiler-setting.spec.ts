import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerSetting } from './compiler-setting';

describe('CompilerSetting', () => {
  let component: CompilerSetting;
  let fixture: ComponentFixture<CompilerSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompilerSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilerSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
