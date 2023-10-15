import { TestBed } from '@angular/core/testing';

import { DatafetchService } from './datafetch.service';

describe('DatafetchService', () => {
  let service: DatafetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatafetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
