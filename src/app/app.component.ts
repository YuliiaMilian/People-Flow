import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '@Environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private readonly translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.setDefaultLang(environment.defaultLanguage);

    this.translateService.use(environment.defaultLanguage);
  }
}
