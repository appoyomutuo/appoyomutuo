import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFiltersComponent } from './popup-filters.component';

describe('PopupFiltersComponent', () => {
  let component: PopupFiltersComponent;
  let fixture: ComponentFixture<PopupFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
