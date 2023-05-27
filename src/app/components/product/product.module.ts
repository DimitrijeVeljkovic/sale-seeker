import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { PercentageDiscountPipe } from 'src/app/pipes/percentage-discount.pipe';
import { PriceRsdPipe } from 'src/app/pipes/price-rsd.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProductComponent,
    PercentageDiscountPipe,
    PriceRsdPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }