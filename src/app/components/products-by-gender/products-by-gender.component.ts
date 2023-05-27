import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { GROUP_BY_OPTIONS, NONE } from 'src/app/constants/group-by-options.constants';
import { ProductGroup } from 'src/app/interfaces/product-group.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsGetterService } from 'src/app/services/products-getter.service';

@Component({
  selector: 'app-products-by-gender',
  templateUrl: './products-by-gender.component.html',
  styleUrls: ['./products-by-gender.component.scss']
})
export class ProductsByGenderComponent implements OnInit {
  public gender: string;
  public productsByGender: Product[];
  public groupByOptions = GROUP_BY_OPTIONS;
  public selectedGroupBy: { key: string; label: string };

  public get shouldShowAllProducts(): boolean {
    return !this.selectedGroupBy || this.selectedGroupBy === NONE;
  }

  public get groupedProducts(): ProductGroup[] {
    if (this.shouldShowAllProducts) {
      return [];
    }

    const distinctValues = [...new Set(this.productsByGender.map(product => product[this.selectedGroupBy.key as keyof Product]))]
    const grouped = distinctValues.map(group => {
      const products = this.productsByGender.filter(product => product[this.selectedGroupBy.key as keyof Product] === group);
      return {
        group,
        products
      }
    })

    return grouped;
  }

  constructor(private _route: ActivatedRoute,
              private _productsGetterService: ProductsGetterService) { }

  ngOnInit(): void {
    this._scrollToHeader();

    this._route.data
      .pipe(
        switchMap(data => {
          this.gender = data['gender'];
          return this._productsGetterService.getProductsByGender(this.gender);
        })
      )
      .subscribe(products => {
        this.productsByGender = products;
      });
  }

  private _scrollToHeader() {
    document.getElementById('header')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

}
