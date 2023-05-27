import { Component, OnInit, Input } from '@angular/core';
import { ProductGroup } from 'src/app/interfaces/product-group.interface';

@Component({
  selector: 'app-grouped-products-section',
  templateUrl: './grouped-products-section.component.html',
  styleUrls: ['./grouped-products-section.component.scss']
})
export class GroupedProductsSectionComponent implements OnInit {
  @Input() productGroup: ProductGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
