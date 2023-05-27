import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedProductsSectionComponent } from './grouped-products-section.component';

describe('GroupedProductsSectionComponent', () => {
  let component: GroupedProductsSectionComponent;
  let fixture: ComponentFixture<GroupedProductsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupedProductsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupedProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
