import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FormFieldAddon, FormFieldAddonType } from '@finance-tracker/models';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
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
})
export class LoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  // Form
  private fb = new FormBuilder();
  form: FormGroup = this.fb.group({
    email: new FormControl(undefined, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required]),
  });

  // Icons
  logoSrc = 'img/logo-horizontal-light.svg';
  googleIconSrc = 'img/google-icon-logo.svg';
  emailAddon: FormFieldAddon = {
    type: FormFieldAddonType.ICON,
    icon: 'pi pi-user',
  };
  passwordAddon: FormFieldAddon = {
    type: FormFieldAddonType.ICON,
    icon: 'pi pi-key',
  };

  // Control vars
  isSubmitting = false;
  showGoogleError = false;
  showUserError = false;

  updateSubmit = (submitting: boolean) => {
    if (submitting) this.form.disable();
    else this.form.enable();
  };

  submit = (event: SubmitEvent) => {
    this.updateSubmit(true);
    this.showUserError = false;
    this.authService
      .login(this.form.get('email')?.value, this.form.get('password')?.value)
      .then((res) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        this.showUserError = true;
      })
      .finally(() => {
        this.updateSubmit(false);
      });
  };

  loginWithGoogle = async () => {
    this.showGoogleError = false;
    this.authService
      .loginWithGoogle()
      .then((res) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        this.showGoogleError = true;
      });
  };
}
