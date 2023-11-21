import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyCoursesComponent } from './udemy-courses.component';

describe('UdemyCoursesComponent', () => {
  let component: UdemyCoursesComponent;
  let fixture: ComponentFixture<UdemyCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UdemyCoursesComponent]
    });
    fixture = TestBed.createComponent(UdemyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
