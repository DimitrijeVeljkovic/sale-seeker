import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { SHOP_IMAGES } from 'src/app/constants/shop-images.constants';
import { SHOP_BASE_URLS } from 'src/app/constants/shop-base-urls.constants';
import { ShopUrls } from 'src/app/interfaces/shop-urls.interface';
import { ProductComparisonService } from 'src/app/services/product-comparison.service';

@Component({
  selector: 'app-product-comparison',
  templateUrl: './product-comparison.component.html',
  styleUrls: ['./product-comparison.component.scss']
})
export class ProductComparisonComponent implements OnInit {
  public productsForComparison: Product[] = [];

  public get minOldPrice(): number {
    return Math.min(...this.productsForComparison.map(product => product.oldPrice));
  }

  public get minPrice(): number {
    return Math.min(...this.productsForComparison.map(product => product.price));
  }

  public get maxDiscount(): number {
    return Math.max(...this.productsForComparison.map(product => product.discount));
  }

  public get maxSave(): number {
    return Math.max(...this.productsForComparison.map(product => this.save(product)));
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _productComparisonService: ProductComparisonService,
    private _dialogRef: MatDialogRef<ProductComparisonComponent>
  ) {
    this.productsForComparison = data;
  }

  ngOnInit(): void {
  }

  public shopImageUrl(product: Product): string {
    return SHOP_IMAGES[product.shop as keyof ShopUrls];
  }

  public productImageUrl(product: Product): string {
    return `${SHOP_BASE_URLS[product.shop as keyof ShopUrls]}${product.imageUrl}`;
  }

  public save(product: Product): number {
    return +(product.oldPrice - product.price).toFixed(2);
  }

  public removeProductFromComparison(product: Product) {
    this._productComparisonService.removeProductFromComparison(product);
    if (this.productsForComparison.length === 0) {
      this._dialogRef.close();
    }
  }

}
