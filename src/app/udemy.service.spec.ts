import { TestBed } from '@angular/core/testing';

import { UdemyService } from './udemy.service';

describe('UdemyService', () => {
  let service: UdemyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UdemyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
