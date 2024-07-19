import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSettingComponent } from './server-setting.component';

describe('ServerSettingComponent', () => {
  let component: ServerSettingComponent;
  let fixture: ComponentFixture<ServerSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
