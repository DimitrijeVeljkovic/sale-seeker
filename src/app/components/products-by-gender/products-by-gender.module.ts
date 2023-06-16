import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsByGenderComponent } from './products-by-gender.component';
import { ProductModule } from '../product/product.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoadingModule } from '../loading/loading.module';
import { StringConverterPipe } from 'src/app/pipes/string-converter.pipe';
import { MatSelectModule } from '@angular/material/select'
import { MatDialogModule } from '@angular/material/dialog';
import { ProductComparisonModule } from '../product-comparison/product-comparison.module';
@NgModule({
  declarations: [
    ProductsByGenderComponent,
    StringConverterPipe
  ],
  imports: [
    CommonModule,
    ProductModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    LoadingModule,
    MatSelectModule,
    MatDialogModule,
    ProductComparisonModule
  ],
  exports: [
    ProductsByGenderComponent
  ]
})
export class ProductsByGenderModule { }