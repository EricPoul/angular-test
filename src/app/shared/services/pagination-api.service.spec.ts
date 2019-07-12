import { TestBed } from '@angular/core/testing';

import { PaginationApiService } from './pagination-api.service';

describe('PaginationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginationApiService = TestBed.get(PaginationApiService);
    expect(service).toBeTruthy();
  });
});
