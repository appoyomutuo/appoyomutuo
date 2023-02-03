import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAcceptpeticionComponent } from './popup-acceptpeticion.component';

describe('PopupAcceptpeticionComponent', () => {
  let component: PopupAcceptpeticionComponent;
  let fixture: ComponentFixture<PopupAcceptpeticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAcceptpeticionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAcceptpeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
