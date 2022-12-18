import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalsliderComponent } from './principalslider.component';

describe('PrincipalsliderComponent', () => {
  let component: PrincipalsliderComponent;
  let fixture: ComponentFixture<PrincipalsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
