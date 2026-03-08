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
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '@finance-tracker/data-access';
import { FormValidatorsService } from '@finance-tracker/utils';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import {
  UiInputPasswordComponent,
  UiInputTextComponent,
  UiMessageComponent,
} from '@finance-tracker/ui';

@Component({
  selector: 'shell-signup',
  imports: [
    TranslatePipe,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    DividerModule,
    UiInputTextComponent,
    UiInputPasswordComponent,
    UiMessageComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly formValidators = inject(FormValidatorsService);
  private readonly fb = new FormBuilder();

  protected readonly form: FormGroup = this.fb.group(
    {
      name: new FormControl(undefined, [Validators.required]),
      email: new FormControl(undefined, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(undefined, [Validators.required]),
    },
    { validators: this.formValidators.passwordsMatch }
  );

  protected readonly logoSrc = 'img/logo-icon.svg';
  protected readonly googleIconSrc = 'img/google-icon-logo.svg';
  protected readonly showRegisterError = signal(false);

  protected get passwordsMismatch(): boolean {
    return (
      this.form.hasError('passwordsMismatch') &&
      (this.form.get('confirmPassword')?.dirty ||
        this.form.get('confirmPassword')?.touched) === true
    );
  }

  submit(_event: SubmitEvent): void {
    if (this.form.invalid) return;
    this.form.disable();
    this.showRegisterError.set(false);
    this.authService
      .register(
        this.form.get('name')?.value,
        this.form.get('email')?.value,
        this.form.get('password')?.value
      )
      .then(() => this.router.navigate(['/']))
      .catch(() => this.showRegisterError.set(true))
      .finally(() => this.form.enable());
  }
}
