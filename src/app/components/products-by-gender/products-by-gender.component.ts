import { Component, OnInit } from '@angular/core';
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
  public productsByGender: Product[];

  constructor(private _route: ActivatedRoute,
              private _productsGetterService: ProductsGetterService) { }

  ngOnInit(): void {
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

}
