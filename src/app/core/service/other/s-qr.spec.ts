import { TestBed } from '@angular/core/testing';

import { SQr } from './s-qr';

describe('SQr', () => {
  let service: SQr;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SQr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
