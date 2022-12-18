import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMapaComponent } from './popup-mapa.component';

describe('PopupMapaComponent', () => {
  let component: PopupMapaComponent;
  let fixture: ComponentFixture<PopupMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
