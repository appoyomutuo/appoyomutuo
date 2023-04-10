import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioControlDayComponent } from './calendario-control-day.component';

describe('CalendarioControlDayComponent', () => {
  let component: CalendarioControlDayComponent;
  let fixture: ComponentFixture<CalendarioControlDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioControlDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioControlDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
