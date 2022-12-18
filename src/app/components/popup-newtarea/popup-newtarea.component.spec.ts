import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewtareaComponent } from './popup-newtarea.component';

describe('PopupNewtareaComponent', () => {
  let component: PopupNewtareaComponent;
  let fixture: ComponentFixture<PopupNewtareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNewtareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupNewtareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
