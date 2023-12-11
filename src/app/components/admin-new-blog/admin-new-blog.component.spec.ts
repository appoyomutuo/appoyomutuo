import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewBlogComponent } from './admin-new-blog.component';

describe('AdminNewBlogComponent', () => {
  let component: AdminNewBlogComponent;
  let fixture: ComponentFixture<AdminNewBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
