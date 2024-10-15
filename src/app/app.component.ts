import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '@Environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeatureDescriptionComponent } from './feature-description/feature-description.component';

@Component({
  selector: 'ngt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FeedbackFormComponent,
    FooterComponent,
    AppComponent,
    FeatureDescriptionComponent,
  ],
})
export class AppComponent implements OnInit {
  constructor(private readonly translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.setDefaultLang(environment.defaultLanguage);

    this.translateService.use(environment.defaultLanguage);
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChild(FooterComponent) footerComponent!: FooterComponent;
  @ViewChild(FeedbackFormComponent) feedbackFormComponent!: FeedbackFormComponent;

  ngAfterViewInit() {
    this.headerComponent.changeText('New title header');
    this.footerComponent.changeText('New title footer');
    this.feedbackFormComponent.changeText('New title feedbackForm');
  }
}
