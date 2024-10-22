import { Component } from '@angular/core';
import { FeatureDescriptionComponent } from 'app/feature-description/feature-description.component';
import { FeedbackFormComponent } from 'app/feedback-form/feedback-form.component';
import { FooterComponent } from 'app/footer/footer.component';
import { HeaderComponent } from 'app/header/header.component';

@Component({
  selector: 'ngt-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FeedbackFormComponent,
    FooterComponent,
    FeatureDescriptionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
