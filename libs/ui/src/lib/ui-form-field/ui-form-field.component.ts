import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormField } from '@finance-tracker/models';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { UiFormFieldErrorComponent } from '../ui-form-field-error/ui-form-field-error.component';

@Component({
  selector: 'lib-ui-form-field',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslatePipe,
    UiFormFieldErrorComponent,
  ],
  templateUrl: './ui-form-field.component.html',
  styleUrl: './ui-form-field.component.scss',
})
export class UiFormFieldComponent implements Partial<FormField> {
  @Input()
  form!: FormGroup;
  @Input() controlName!: string;
  @Input() id = '';
  @Input() label: string | undefined = undefined;
  @Input() cssClass?: string;
}
