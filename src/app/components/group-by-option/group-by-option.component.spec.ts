import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupByOptionComponent } from './group-by-option.component';

describe('GroupByOptionComponent', () => {
  let component: GroupByOptionComponent;
  let fixture: ComponentFixture<GroupByOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupByOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupByOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
