import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { TopTenProductsModule } from '../top-ten-products/top-ten-products.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    TopTenProductsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
