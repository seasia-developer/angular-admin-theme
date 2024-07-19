import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMessagesComponent } from './text-messages.component';

describe('TextMessagesComponent', () => {
  let component: TextMessagesComponent;
  let fixture: ComponentFixture<TextMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
