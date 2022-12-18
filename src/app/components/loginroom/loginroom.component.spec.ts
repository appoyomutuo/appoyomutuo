import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginroomComponent } from './loginroom.component';

describe('LoginroomComponent', () => {
  let component: LoginroomComponent;
  let fixture: ComponentFixture<LoginroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
