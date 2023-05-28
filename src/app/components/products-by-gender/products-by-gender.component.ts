import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsGetterService } from 'src/app/services/products-getter.service';

@Component({
  selector: 'app-products-by-gender',
  templateUrl: './products-by-gender.component.html',
  styleUrls: ['./products-by-gender.component.scss']
})
export class ProductsByGenderComponent implements OnInit {
  public gender: string;
  public originalProductsByGender: Product[];
  public filteredProducts: Product[];
  public filtersForm: FormGroup;

  public get allCategories(): string[] {
    return [...new Set(this.originalProductsByGender.map(product => product.category))];
  }

  public get allBrands(): string[] {
    return [...new Set(this.originalProductsByGender.map(product => product.brand))];
  }

  public get allShops(): string[] {
    return [...new Set(this.originalProductsByGender.map(product => product.shop))];
  }

  public get minMaxDiscount(): { minDiscount: number; maxDiscount: number } {
    const allDiscounts = this.originalProductsByGender.map(product => product.discount);
    return {
      minDiscount: Math.min(...allDiscounts),
      maxDiscount: Math.max(...allDiscounts)
    };
  }

  public get minMaxPrice(): { minPrice: number; maxPrice: number } {
    const allPrices = this.originalProductsByGender.map(product => product.price);
    return {
      minPrice: Math.min(...allPrices),
      maxPrice: Math.max(...allPrices)
    };
  }

  public get minMaxSave(): { minSave: number; maxSave: number } {
    const allSaves = this.originalProductsByGender.map(product => +(product.oldPrice - product.price).toFixed(2));
    return {
      minSave: Math.min(...allSaves),
      maxSave: Math.max(...allSaves)
    };
  }

  constructor(private _route: ActivatedRoute,
              private _productsGetterService: ProductsGetterService,
              private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._scrollTo('header');

    this._route.data
      .pipe(
        switchMap(data => {
          this.gender = data['gender'];
          return this._productsGetterService.getProductsByGender(this.gender);
        })
      )
      .subscribe(products => {
        this.originalProductsByGender = products;
        this.filteredProducts = products;
      });

    this.filtersForm = this._fb.group({
      category: this._fb.group(this._objectFromStringArray(this.allCategories)),
      brand: this._fb.group(this._objectFromStringArray(this.allBrands)),
      shop: this._fb.group(this._objectFromStringArray(this.allShops)),
      discount: this._fb.group({
        minDiscount: this.minMaxDiscount.minDiscount,
        maxDiscount: this.minMaxDiscount.maxDiscount,
      }),
      price: this._fb.group({
        minPrice: this.minMaxPrice.minPrice,
        maxPrice: this.minMaxPrice.maxPrice
      }),
      save: this._fb.group({
        minSave: this.minMaxSave.minSave,
        maxSave: this.minMaxSave.maxSave
      })
    });
  }

  public applyFilters() {
    const formValue = this.filtersForm.value;
    const categories = [] as string[];
    const brands = [] as string[];
    const shops = [] as string[];
    const discount = formValue.discount;
    const price = formValue.price;
    const save = formValue.save;

    for (const key in formValue.category) {
      if (formValue.category[key]) {
        categories.push(key);
      }
    }

    for (const key in formValue.brand) {
      if (formValue.brand[key]) {
        brands.push(key);
      }
    }

    for (const key in formValue.shop) {
      if (formValue.shop[key]) {
        shops.push(key);
      }
    }

    this.filteredProducts = this.originalProductsByGender.filter(product => {
      const s = +(product.oldPrice - product.price).toFixed(2);
      return categories.includes(product.category) 
        && brands.includes(product.brand)
        && shops.includes(product.shop)
        && (product.discount >= discount.minDiscount && product.discount <= discount.maxDiscount)
        && (product.price >= price.minPrice && product.price <= price.maxPrice)
        && (s >= save.minSave && s <= save.maxSave)
    });

    this._scrollTo('products-or-empty');
  }

  private _scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  private _objectFromStringArray(array: string[]) {
    const obj = {};
    for (const key of array) {
          (obj as any)[key] = true;
    }
    return obj;
  }

}
