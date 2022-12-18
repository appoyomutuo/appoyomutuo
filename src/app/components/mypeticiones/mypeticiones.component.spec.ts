import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypeticionesComponent } from './mypeticiones.component';

describe('MypeticionesComponent', () => {
  let component: MypeticionesComponent;
  let fixture: ComponentFixture<MypeticionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypeticionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
