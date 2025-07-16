import { TestBed } from '@angular/core/testing';

import { SAskme } from './s-askme';

describe('SAskme', () => {
  let service: SAskme;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAskme);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
