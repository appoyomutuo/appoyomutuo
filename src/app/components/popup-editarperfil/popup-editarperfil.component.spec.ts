import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditarperfilComponent } from './popup-editarperfil.component';

describe('PopupEditarperfilComponent', () => {
  let component: PopupEditarperfilComponent;
  let fixture: ComponentFixture<PopupEditarperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditarperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupEditarperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
