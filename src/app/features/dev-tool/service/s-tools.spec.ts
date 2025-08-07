import { TestBed } from '@angular/core/testing';

import { STools } from './s-tools';

describe('STools', () => {
  let service: STools;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STools);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
