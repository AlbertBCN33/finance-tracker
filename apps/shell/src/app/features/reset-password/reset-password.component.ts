import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '@finance-tracker/data-access';
import { ButtonModule } from 'primeng/button';
import { UiInputTextComponent, UiMessageComponent } from '@finance-tracker/ui';

@Component({
  selector: 'shell-reset-password',
  imports: [
    TranslatePipe,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    UiInputTextComponent,
    UiMessageComponent,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {
  private readonly authService = inject(AuthService);
  private readonly fb = new FormBuilder();

  protected readonly form: FormGroup = this.fb.group({
    email: new FormControl(undefined, [Validators.required, Validators.email]),
  });

  protected readonly logoSrc = 'img/logo-icon.svg';
  protected readonly emailSent = signal(true);
  protected readonly showError = signal(false);

  submit(_event: SubmitEvent): void {
    if (this.form.invalid) return;
    this.form.disable();
    this.showError.set(false);
    this.authService
      .resetPassword(this.form.get('email')?.value)
      .then(() => this.emailSent.set(true))
      .catch(() => {
        this.showError.set(true);
        this.form.enable();
      });
  }
}
