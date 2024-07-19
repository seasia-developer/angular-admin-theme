import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeUserPlanComponent } from './upgrade-user-plan.component';

describe('UpgradeUserPlanComponent', () => {
  let component: UpgradeUserPlanComponent;
  let fixture: ComponentFixture<UpgradeUserPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeUserPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeUserPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
