import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductComparisonService {
  private _procuctsForComparison: Product[] = [];

  public get comparisonEmpty(): boolean {
    return this._procuctsForComparison.length === 0;
  }

  public get comparisonFull(): boolean {
    return this._procuctsForComparison.length === 3;
  }

  public get productsForComparison(): Product[] {
    return this._procuctsForComparison;
  }

  constructor() { }

  public addProductForComparison(product: Product) {
    if (!this.comparisonFull) {
      this._procuctsForComparison.push(product);
    }
  }

  public removeProductFromComparison(product: Product) {
    const index = this._procuctsForComparison.indexOf(product);
    if (index !== -1) {
      this._procuctsForComparison.splice(index, 1);
    }
  }
}
