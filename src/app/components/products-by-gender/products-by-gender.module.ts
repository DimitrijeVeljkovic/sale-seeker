import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsByGenderComponent } from './products-by-gender.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    ProductsByGenderComponent
  ],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports: [
    ProductsByGenderComponent
  ]
})
export class ProductsByGenderModule { }