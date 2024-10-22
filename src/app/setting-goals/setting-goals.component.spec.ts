import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingGoalsComponent } from './setting-goals.component';

describe('SettingGoalsComponent', () => {
  let component: SettingGoalsComponent;
  let fixture: ComponentFixture<SettingGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
