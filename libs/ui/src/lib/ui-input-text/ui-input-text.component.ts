import { FormField, FormFieldAddon } from '@finance-tracker/models';

import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { UiFormFieldComponent } from '../ui-form-field/ui-form-field.component';
import { UiFormFieldAddonComponent } from '../ui-form-field-addon/ui-form-field-addon.component';
import { InputGroupAddon } from 'primeng/inputgroupaddon';

@Component({
  selector: 'lib-ui-input-text',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslatePipe,
    UiFormFieldComponent,
    InputGroupModule,
    InputGroupAddon,
    UiFormFieldAddonComponent,
    InputTextModule,
  ],
  templateUrl: './ui-input-text.component.html',
  styleUrl: './ui-input-text.component.scss',
})
export class UiInputTextComponent implements FormField {
  /* Shared  */
  @Input()
  form!: FormGroup;
  @Input() controlName!: string;
  @Input() id = '';
  @Input() label: string | undefined = undefined;
  @Input() placeholder: string | undefined = undefined;
  @Input() leftAddon?: FormFieldAddon;
  @Input() rightAddon?: FormFieldAddon;
  @Input() validations = undefined;
  disabled = input<boolean>(false);
  @Input() cssClass?: string;

  /* Specific */
  @Input() size: 'small' | 'large' = 'large';
}
