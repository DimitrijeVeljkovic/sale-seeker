import { TestBed } from '@angular/core/testing';

import { ProductsGetterService } from './products-getter.service';

describe('ProductsGetterService', () => {
  let service: ProductsGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
