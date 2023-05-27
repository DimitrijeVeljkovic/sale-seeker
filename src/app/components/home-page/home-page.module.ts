import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { TopTenProductsModule } from '../top-ten-products/top-ten-products.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    TopTenProductsModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
