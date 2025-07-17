import { TestBed } from '@angular/core/testing';

import { SCompilers } from './s-compilers';

describe('SCompilers', () => {
  let service: SCompilers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCompilers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
