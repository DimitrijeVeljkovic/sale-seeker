import { TestBed } from '@angular/core/testing';

import { ProductComparisonService } from './product-comparison.service';

describe('ProductComparisonService', () => {
  let service: ProductComparisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductComparisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
