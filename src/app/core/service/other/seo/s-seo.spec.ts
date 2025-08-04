import { TestBed } from '@angular/core/testing';

import { SSeo } from './s-seo';

describe('SSeo', () => {
  let service: SSeo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSeo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
