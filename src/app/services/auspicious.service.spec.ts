import { TestBed } from '@angular/core/testing';

import { AuspiciousService } from './auspicious.service';

describe('AuspiciousService', () => {
  let service: AuspiciousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuspiciousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
