import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ProductGroup } from 'src/app/interfaces/product-group.interface';

@Component({
  selector: 'app-group-by-option',
  templateUrl: './group-by-option.component.html',
  styleUrls: ['./group-by-option.component.scss']
})
export class GroupByOptionComponent implements OnInit, AfterViewInit {
  @Input() productGroups: ProductGroup[];
  public productGroup: ProductGroup;

  public get productGroupNames(): string[] {
    return this.productGroups.map(pg => `${pg.group}`).sort();
  }

  constructor() { }

  ngOnInit(): void {
    this.productGroup = this.productGroups.find(pg => pg.group === this.productGroupNames[0]) || { group: '', products: [] };
  }

  ngAfterViewInit(): void {
    document.getElementById(this.productGroupNames[0])?.classList.add('selected');
  }

  public handleGroupSelection(group: string) {
    this.productGroup = this.productGroups.find(pg => pg.group === group) || { group: '', products: [] };
    const chip = document.getElementById(group);
    const allChips = [...document.getElementsByClassName('chip')];
    
    allChips.forEach(c => {
      c.classList.remove('selected');
    });
    chip?.classList.add('selected');
  }

}
