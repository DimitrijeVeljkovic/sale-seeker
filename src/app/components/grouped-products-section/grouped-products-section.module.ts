import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedProductsSectionComponent } from './grouped-products-section.component';
import { ProductModule } from '../product/product.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    GroupedProductsSectionComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    GroupedProductsSectionComponent
  ]
})
export class GroupedProductsSectionModule { }