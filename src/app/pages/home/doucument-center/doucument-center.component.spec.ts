import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoucumentCenterComponent } from './doucument-center.component';

describe('DoucumentCenterComponent', () => {
  let component: DoucumentCenterComponent;
  let fixture: ComponentFixture<DoucumentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoucumentCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoucumentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
