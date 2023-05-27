import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_TOP_TEN_PRODUCTS } from '../mocks/mock-top-ten-products';
import { Product } from '../interfaces/product.interface';
 
@Injectable({
  providedIn: 'root'
})
export class ProductsGetterService {

  constructor() { }

  public getTopTenProducts(): Observable<Product[]> {
    // toDo: Napravis HTTP request kad BE bude gotov
    return of(MOCK_TOP_TEN_PRODUCTS);
  }
}
