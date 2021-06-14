import { TestBed } from '@angular/core/testing';

import { EOService } from './eo.service';

describe('EOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EOService = TestBed.get(EOService);
    expect(service).toBeTruthy();
  });
});
