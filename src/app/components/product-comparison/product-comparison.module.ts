import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComparisonComponent } from './product-comparison.component';
import { ProductModule } from '../product/product.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductComparisonComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ProductComparisonComponent
  ]
})
export class ProductComparisonModule { }