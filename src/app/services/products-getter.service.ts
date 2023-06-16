import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../constants/api.constants';
 
@Injectable({
  providedIn: 'root'
})
export class ProductsGetterService {

  constructor(private _http: HttpClient) { }

  public getTopTenProducts(): Observable<Product[]> {
    return this._http.get(`${API_URLS.TOP_PRODUCTS}/10`) as Observable<Product[]>;
  }

  public getProductsByGender(gender: string): Observable<Product[]> {
    return (this._http.get(API_URLS.ALL_PRODUCTS) as Observable<Product[]>)
      .pipe(
        map(products => products.filter(product => product.gender === gender))
      );
  }
}
