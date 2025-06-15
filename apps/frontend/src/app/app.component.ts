import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
