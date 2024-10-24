import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '@Enums/routes.enum';

const routes: Routes = [
  {
    path: AppRoutes.Empty,
    redirectTo: AppRoutes.HomePage,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.HomePage,
    loadComponent: () => import('./home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: AppRoutes.Education,
    loadComponent: () => import('./education-certifications/education-certifications.component').then((x) => x.EducationCertificationsComponent),
  },
  {
    path: AppRoutes.Expenses,
    loadComponent: () => import('./reimbursement-of-expenses/reimbursement-of-expenses.component').then((x) => x.ReimbursementOfExpensesComponent),
  },
  {
    path: AppRoutes.FeedbackForm,
    loadComponent: () => import('./feedback-form/feedback-form.component').then((x) => x.FeedbackFormComponent),
  },
  {
    path: AppRoutes.Onboarding,
    loadComponent: () => import('./onboarding-plan/onboarding-plan.component').then((x) => x.OnboardingPlanComponent),
  },
  {
    path: AppRoutes.PTO,
    loadComponent: () => import('./paid-time-off/paid-time-off.component').then((x) => x.PaidTimeOffComponent),
  },
  {
    path: AppRoutes.Performance,
    loadComponent: () => import('./performance-evaluation/performance-evaluation.component').then((x) => x.PerformanceEvaluationComponent),
  },
  {
    path: AppRoutes.SelfService,
    loadComponent: () => import('./self-service-portal/self-service-portal.component').then((x) => x.SelfServicePortalComponent),
  },
  {
    path: AppRoutes.SettingGoals,
    loadComponent: () => import('./setting-goals/setting-goals.component').then((x) => x.SettingGoalsComponent),
  },
  {
    path: AppRoutes.Other,
    loadComponent: () => import('./shared/pages/not-found/not-found.component').then((x) => x.NotFoundComponent),
  },
  {
    path: AppRoutes.NotFound,
    loadComponent: () => import('./shared/pages/not-found/not-found.component').then((x) => x.NotFoundComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
