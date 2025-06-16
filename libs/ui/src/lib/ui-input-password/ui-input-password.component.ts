import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { UiFormFieldAddonComponent } from '../ui-form-field-addon/ui-form-field-addon.component';
import { UiFormFieldComponent } from '../ui-form-field/ui-form-field.component';
import { FormField, FormFieldAddon } from '@finance-tracker/models';

@Component({
  selector: 'lib-ui-input-password',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslatePipe,
    UiFormFieldComponent,
    InputGroupModule,
    InputGroupAddon,
    UiFormFieldAddonComponent,
    PasswordModule,
  ],
  templateUrl: './ui-input-password.component.html',
  styleUrl: './ui-input-password.component.scss',
})
export class UiInputPasswordComponent implements FormField {
  /* Shared  */
  @Input()
  form!: FormGroup;
  @Input() controlName!: string;
  @Input() id = '';
  @Input() label: string | undefined = undefined;
  @Input() placeholder: string | undefined = undefined;
  @Input() leftAddon?: FormFieldAddon;
  @Input() validations = undefined;
  //   disabled = input<boolean>(false);
  @Input() cssClass?: string;

  /* Specific */
  @Input() size: 'small' | 'large' = 'large';
  @Input() toggleMask = false;
  @Input() feedback = false;
  @Input() weakLabel: string | null = null;
  @Input() mediumLabel: string | null = null;
  @Input() strongLabel: string | null = null;
}
