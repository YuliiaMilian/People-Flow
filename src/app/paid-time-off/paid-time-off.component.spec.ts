import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidTimeOffComponent } from './paid-time-off.component';

describe('PaidTimeOffComponent', () => {
  let component: PaidTimeOffComponent;
  let fixture: ComponentFixture<PaidTimeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaidTimeOffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidTimeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
