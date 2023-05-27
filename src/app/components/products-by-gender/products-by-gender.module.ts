import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsByGenderComponent } from './products-by-gender.component';

@NgModule({
  declarations: [
    ProductsByGenderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsByGenderComponent
  ]
})
export class ProductsByGenderModule { }