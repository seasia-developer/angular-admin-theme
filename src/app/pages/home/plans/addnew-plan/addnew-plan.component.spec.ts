import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewPlanComponent } from './addnew-plan.component';

describe('AddnewPlanComponent', () => {
  let component: AddnewPlanComponent;
  let fixture: ComponentFixture<AddnewPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
