import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '@Enums/routes.enum';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { SettingGoalsComponent } from './setting-goals/setting-goals.component';
import { EducationCertificationsComponent } from './education-certifications/education-certifications.component';
import { ReimbursementOfExpensesComponent } from './reimbursement-of-expenses/reimbursement-of-expenses.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { OnboardingPlanComponent } from './onboarding-plan/onboarding-plan.component';
import { PaidTimeOffComponent } from './paid-time-off/paid-time-off.component';
import { PerformanceEvaluationComponent } from './performance-evaluation/performance-evaluation.component';
import { SelfServicePortalComponent } from './self-service-portal/self-service-portal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: AppRoutes.Empty,
    redirectTo: AppRoutes.HomePage,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.HomePage,
    component: HomeComponent,
  },
  {
    path: AppRoutes.Education,
    component: EducationCertificationsComponent,
  },
  {
    path: AppRoutes.Expenses,
    component: ReimbursementOfExpensesComponent,
  },
  {
    path: AppRoutes.FeedbackForm,
    component: FeedbackFormComponent,
  },
  {
    path: AppRoutes.Onboarding,
    component: OnboardingPlanComponent,
  },
  {
    path: AppRoutes.PTO,
    component: PaidTimeOffComponent,
  },
  {
    path: AppRoutes.Performance,
    component: PerformanceEvaluationComponent,
  },
  {
    path: AppRoutes.SelfService,
    component: SelfServicePortalComponent,
  },
  {
    path: AppRoutes.SettingGoals,
    component: SettingGoalsComponent,
  },
  {
    path: AppRoutes.Other,
    redirectTo: AppRoutes.NotFound,
  },
  {
    path: AppRoutes.NotFound,
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
