import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewTeamMemberComponent } from './addnew-team-member.component';

describe('AddnewTeamMemberComponent', () => {
  let component: AddnewTeamMemberComponent;
  let fixture: ComponentFixture<AddnewTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewTeamMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
