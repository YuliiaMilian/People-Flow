import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { Component, OnInit, Provider, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '@Environment';
import { TranslateService } from '@ngx-translate/core';
import { tokenInterceptor } from './token.interceptor';

@Component({
  selector: 'ngt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useValue: tokenInterceptor,
      multi: true,
    },
  ],
})
export class AppComponent implements OnInit {
  constructor(private readonly translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.setDefaultLang(environment.defaultLanguage);

    this.translateService.use(environment.defaultLanguage);
  }
}
