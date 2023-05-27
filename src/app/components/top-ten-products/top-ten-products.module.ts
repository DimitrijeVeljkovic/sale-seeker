import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopTenProductsComponent } from './top-ten-products.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    TopTenProductsComponent
  ],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [
    TopTenProductsComponent
  ]
})
export class TopTenProductsModule { }