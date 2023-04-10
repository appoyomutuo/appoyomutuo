import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreateEventComponent } from './popup-create-event.component';

describe('PopupCreateEventComponent', () => {
  let component: PopupCreateEventComponent;
  let fixture: ComponentFixture<PopupCreateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCreateEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
