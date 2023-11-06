import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceComponent } from './work-experience.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExperienceComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
