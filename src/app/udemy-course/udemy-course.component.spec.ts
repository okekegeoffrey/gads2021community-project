import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyCourseComponent } from './udemy-course.component';

describe('UdemyCourseComponent', () => {
  let component: UdemyCourseComponent;
  let fixture: ComponentFixture<UdemyCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
