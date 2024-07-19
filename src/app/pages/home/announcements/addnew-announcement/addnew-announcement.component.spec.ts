import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewAnnouncementComponent } from './addnew-announcement.component';

describe('AddnewAnnouncementComponent', () => {
  let component: AddnewAnnouncementComponent;
  let fixture: ComponentFixture<AddnewAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewAnnouncementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
