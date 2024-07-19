import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedUserComponentComponent } from './subscribed-user-component.component';

describe('SubscribedUserComponentComponent', () => {
  let component: SubscribedUserComponentComponent;
  let fixture: ComponentFixture<SubscribedUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribedUserComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribedUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
