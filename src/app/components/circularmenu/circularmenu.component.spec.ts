import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularmenuComponent } from './circularmenu.component';

describe('CircularmenuComponent', () => {
  let component: CircularmenuComponent;
  let fixture: ComponentFixture<CircularmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
