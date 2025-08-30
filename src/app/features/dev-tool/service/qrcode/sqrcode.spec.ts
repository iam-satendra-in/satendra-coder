import { TestBed } from '@angular/core/testing';

import { Sqrcode } from './sqrcode';

describe('Sqrcode', () => {
  let service: Sqrcode;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sqrcode);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
