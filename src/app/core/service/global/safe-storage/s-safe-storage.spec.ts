import { TestBed } from '@angular/core/testing';

import { SSafeStorage } from './s-safe-storage';

describe('SSafeStorage', () => {
  let service: SSafeStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSafeStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
