import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceEvaluationComponent } from './performance-evaluation.component';

describe('PerformanceEvaluationComponent', () => {
  let component: PerformanceEvaluationComponent;
  let fixture: ComponentFixture<PerformanceEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
