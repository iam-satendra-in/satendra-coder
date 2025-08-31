import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryExtensionCard } from './library-extension-card';

describe('LibraryExtensionCard', () => {
  let component: LibraryExtensionCard;
  let fixture: ComponentFixture<LibraryExtensionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryExtensionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryExtensionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
