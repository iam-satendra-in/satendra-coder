import { TestBed } from '@angular/core/testing';

import { SnpmPackage } from './snpm-package';

describe('SnpmPackage', () => {
  let service: SnpmPackage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnpmPackage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
