import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectFormComponentComponent } from './new-project-form.component';

describe('NewProjectFormComponentComponent', () => {
  let component: NewProjectFormComponentComponent;
  let fixture: ComponentFixture<NewProjectFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProjectFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
