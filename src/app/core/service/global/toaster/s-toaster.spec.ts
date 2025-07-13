import { TestBed } from '@angular/core/testing';

import { SToaster } from './s-toaster';

describe('SToaster', () => {
  let service: SToaster;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SToaster);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
