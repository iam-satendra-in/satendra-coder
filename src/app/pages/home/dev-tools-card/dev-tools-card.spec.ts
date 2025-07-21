import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevToolsCard } from './dev-tools-card';

describe('DevToolsCard', () => {
  let component: DevToolsCard;
  let fixture: ComponentFixture<DevToolsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevToolsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevToolsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
