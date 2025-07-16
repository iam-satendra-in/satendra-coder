import { TestBed } from '@angular/core/testing';

import { SLoaders } from './s-loaders';

describe('SLoaders', () => {
  let service: SLoaders;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SLoaders);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
