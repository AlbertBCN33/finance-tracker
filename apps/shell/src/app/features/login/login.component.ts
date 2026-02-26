import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '@finance-tracker/data-access';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  UiInputPasswordComponent,
  UiInputTextComponent,
  UiMessageComponent,
} from '@finance-tracker/ui';

@Component({
  selector: 'shell-login',
  imports: [
    TranslatePipe,
    ReactiveFormsModule,
    ButtonModule,
    DividerModule,
    UiInputTextComponent,
    UiInputPasswordComponent,
    UiMessageComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly fb = new FormBuilder();

  protected readonly form: FormGroup = this.fb.group({
    email: new FormControl(undefined, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required]),
  });

  protected readonly logoSrc = 'img/logo-icon.svg';
  protected readonly googleIconSrc = 'img/google-icon-logo.svg';
  protected readonly showUserError = signal(false);
  protected readonly showGoogleError = signal(false);

  submit(_event: SubmitEvent): void {
    this.form.disable();
    this.showUserError.set(false);
    this.authService
      .login(this.form.get('email')?.value, this.form.get('password')?.value)
      .then(() => this.router.navigate(['/']))
      .catch(() => this.showUserError.set(true))
      .finally(() => this.form.enable());
  }

  loginWithGoogle(): void {
    this.showGoogleError.set(false);
    this.authService
      .loginWithGoogle()
      .then(() => this.router.navigate(['/']))
      .catch(() => this.showGoogleError.set(true));
  }
}
