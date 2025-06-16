import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '@finance-tracker/data-access';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-login',
  imports: [CommonModule, TranslatePipe, ButtonModule, DividerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  logoSrc = 'img/logo-horizontal-light.svg';
  googleIconSrc = 'img/google-icon-logo.svg';
}
