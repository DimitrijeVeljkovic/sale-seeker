import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupByOptionComponent } from './group-by-option.component';
import { GroupedProductsSectionModule } from '../grouped-products-section/grouped-products-section.module';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    GroupByOptionComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    GroupedProductsSectionModule,
  ],
  exports: [
    GroupByOptionComponent
  ]
})
export class GroupByOptionModule { }
