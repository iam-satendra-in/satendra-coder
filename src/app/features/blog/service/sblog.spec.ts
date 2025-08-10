import { TestBed } from '@angular/core/testing';

import { Sblog } from './sblog';

describe('Sblog', () => {
  let service: Sblog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sblog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
