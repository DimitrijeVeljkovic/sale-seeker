import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { HomePageModule } from './components/home-page/home-page.module';
import { ProductsByGenderModule } from './components/products-by-gender/products-by-gender.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    HomePageModule,
    ProductsByGenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
