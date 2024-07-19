import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMessagesComponent } from './group-messages.component';

describe('GroupMessagesComponent', () => {
  let component: GroupMessagesComponent;
  let fixture: ComponentFixture<GroupMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
