import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCertificationsComponent } from './education-certifications.component';

describe('EducationCertificationsComponent', () => {
  let component: EducationCertificationsComponent;
  let fixture: ComponentFixture<EducationCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationCertificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
