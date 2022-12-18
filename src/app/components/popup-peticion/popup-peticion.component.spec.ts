import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPeticionComponent } from './popup-peticion.component';

describe('PopupPeticionComponent', () => {
  let component: PopupPeticionComponent;
  let fixture: ComponentFixture<PopupPeticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupPeticionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
