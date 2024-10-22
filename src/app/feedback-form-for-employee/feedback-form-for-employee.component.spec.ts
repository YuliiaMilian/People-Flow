import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFormForEmployeeComponent } from './feedback-form-for-employee.component';

describe('FeedbackFormForEmployeeComponent', () => {
  let component: FeedbackFormForEmployeeComponent;
  let fixture: ComponentFixture<FeedbackFormForEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackFormForEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackFormForEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
