import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { TopTenProductsModule } from '../top-ten-products/top-ten-products.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    TopTenProductsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
