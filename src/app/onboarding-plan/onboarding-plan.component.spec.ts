import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPlanComponent } from './onboarding-plan.component';

describe('OnboardingPlanComponent', () => {
  let component: OnboardingPlanComponent;
  let fixture: ComponentFixture<OnboardingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
