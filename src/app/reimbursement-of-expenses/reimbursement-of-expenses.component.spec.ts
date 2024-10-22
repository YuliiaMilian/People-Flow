import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementOfExpensesComponent } from './reimbursement-of-expenses.component';

describe('ReimbursementOfExpensesComponent', () => {
  let component: ReimbursementOfExpensesComponent;
  let fixture: ComponentFixture<ReimbursementOfExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReimbursementOfExpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReimbursementOfExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
