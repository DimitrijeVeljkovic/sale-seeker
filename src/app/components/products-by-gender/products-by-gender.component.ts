import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { SORTING } from 'src/app/constants/sorting-options.constants';
import { Product } from 'src/app/interfaces/product.interface';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductComparisonService } from 'src/app/services/product-comparison.service';
import { ProductsGetterService } from 'src/app/services/products-getter.service';
import { ProductComparisonComponent } from '../product-comparison/product-comparison.component';

@Component({
  selector: 'app-products-by-gender',
  templateUrl: './products-by-gender.component.html',
  styleUrls: ['./products-by-gender.component.scss']
})
export class ProductsByGenderComponent implements OnInit {
  public gender: string;
  public originalProductsByGender: Product[] = [];
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

  public get isLoading(): boolean {
    return this._loadingService.isLoading;
  }

  public get sortingOptions(): string[] {
    return Object.keys(SORTING).map(key => ((SORTING as any)[key]));
  }

  public get filteredProductsCount(): number {
    return this.filteredProducts.length;
  }

  public get allProductsCount(): number {
    return this.originalProductsByGender.length;
  }

  public get comparisonEmpty(): boolean {
    return this._productComparisonService.comparisonEmpty;
  }

  public get productForComparisonLength(): number {
    return this._productComparisonService.productsForComparison.length;
  }
 
  constructor(private _route: ActivatedRoute,
              private _productsGetterService: ProductsGetterService,
              private _loadingService: LoadingService,
              private _productComparisonService: ProductComparisonService,
              private _matDialog: MatDialog,
              private _viewContainerRef: ViewContainerRef,
              private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._scrollTo('header');
    this._loadingService.startLoading();
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
        this._initFiltersForm();
        this._loadingService.finishLoading();
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
    const searchTerm = formValue.searchTerm.trim().toUpperCase();

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
        && product.name.toUpperCase().includes(searchTerm);
    });

    this._scrollTo('products-or-empty');
  }

  public handleSelectAllChange(event: MatCheckboxChange, type: string) {
    switch(type) {
      case 'CATEGORIES': 
        this.allCategories.forEach(category => this.filtersForm.get('category')?.get(category)?.setValue(event.checked));
        break;
      case 'BRANDS': 
        this.allBrands.forEach(brand => this.filtersForm.get('brand')?.get(brand)?.setValue(event.checked));
        break;
      case 'SHOPS': 
        this.allShops.forEach(shop => this.filtersForm.get('shop')?.get(shop)?.setValue(event.checked));
        break;
      default:
        break;
    }
  }

  public handleSortChange(sortTerm: string) {
    switch(sortTerm) {
      case SORTING.priceAsc:
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case SORTING.priceDesc:
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case SORTING.discountAsc:
        this.filteredProducts.sort((a, b) => a.discount - b.discount);
        break;
      case SORTING.discountDesc:
        this.filteredProducts.sort((a, b) => b.discount - a.discount);
        break;
      case SORTING.saveAsc:
        this.filteredProducts.sort((a, b) => (a.oldPrice - a.price) - (b.oldPrice - b.price));
        break;
      case SORTING.saveDesc:
        this.filteredProducts.sort((a, b) => (b.oldPrice - b.price) - (a.oldPrice - a.price));
        break;
      case SORTING.nameAsc:
        this.filteredProducts.sort((a, b) => (a.name > b.name ? -1 : 1));
        break;
      case SORTING.nameDesc:
        this.filteredProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
    }
  }

  public openComparisonDialog() {
    this._matDialog.open(ProductComparisonComponent, {
      data: this._productComparisonService.productsForComparison,
      viewContainerRef: this._viewContainerRef,
      width: '80vw',
      height: '80vh',
      autoFocus: false
    });
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

  private _initFiltersForm() {
    this.filtersForm = this._fb.group({
      searchTerm: '',
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

}
