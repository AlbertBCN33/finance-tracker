import { FormField } from '@finance-tracker/models';

import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { UiFormFieldComponent } from '../ui-form-field/ui-form-field.component';

@Component({
  selector: 'lib-ui-input-text',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslatePipe,
    UiFormFieldComponent,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
  ],
  templateUrl: './ui-input-text.component.html',
  styleUrl: './ui-input-text.component.scss',
})
export class UiInputTextComponent implements FormField {
  @Input()
  form!: FormGroup;
  @Input() controlName!: string;
  @Input() id = '';
  @Input() label: string | undefined = undefined;
  @Input() placeholder: string | undefined = undefined;
  @Input() validations = undefined;
  disabled = input<boolean>(false);
}
