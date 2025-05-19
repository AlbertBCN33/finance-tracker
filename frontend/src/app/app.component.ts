import { Component } from '@angular/core';
import { LayoutComponentComponent } from './layout/layout.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  imports: [LayoutComponentComponent],
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
