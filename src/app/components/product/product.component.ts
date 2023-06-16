import { Component, OnInit, Input } from '@angular/core';
import { SHOP_BASE_URLS } from 'src/app/constants/shop-base-urls.constants';
import { SHOP_IMAGES } from 'src/app/constants/shop-images.constants';
import { Product } from 'src/app/interfaces/product.interface';
import { ShopUrls } from 'src/app/interfaces/shop-urls.interface';
import { ProductComparisonService } from 'src/app/services/product-comparison.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  public get shopImageUrl(): string {
    return SHOP_IMAGES[this.product.shop as keyof ShopUrls];
  }

  public get productImageUrl(): string {
    return `${SHOP_BASE_URLS[this.product.shop as keyof ShopUrls]}${this.product.imageUrl}`;
  }

  public get save(): number {
    return +(this.product.oldPrice - this.product.price).toFixed(2);
  }

  public get comparisonFull(): boolean {
    return this._productComparisonService.comparisonFull;
  }

  constructor(
    private _productComparisonService: ProductComparisonService
  ) { }

  ngOnInit(): void {
  }

  public addProductForComparison() {
    this._productComparisonService.addProductForComparison(this.product);
  }

}
