import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsGetterService } from 'src/app/services/products-getter.service';

@Component({
  selector: 'app-top-ten-products',
  templateUrl: './top-ten-products.component.html',
  styleUrls: ['./top-ten-products.component.scss']
})
export class TopTenProductsComponent implements OnInit {
  public topTenProducts: Product[];

  constructor(private _productsGetterService: ProductsGetterService) { }

  ngOnInit(): void {
    this._productsGetterService.getTopTenProducts()
      .subscribe(topTenProducts => this.topTenProducts = topTenProducts);
  }

}
