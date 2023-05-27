import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsByGenderComponent } from './products-by-gender.component';
import { ProductModule } from '../product/product.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { GroupByOptionModule } from '../group-by-option/group-by-option.module';

@NgModule({
  declarations: [
    ProductsByGenderComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    GroupByOptionModule
  ],
  exports: [
    ProductsByGenderComponent
  ]
})
export class ProductsByGenderModule { }