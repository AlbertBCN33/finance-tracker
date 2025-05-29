import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormField } from '@finance-tracker/models';
import { FormGroup } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lib-ui-form-field-error',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './ui-form-field-error.component.html',
  styleUrl: './ui-form-field-error.component.scss',
})
export class UiFormFieldErrorComponent implements Partial<FormField> {
  @Input() form!: FormGroup;
  @Input() controlName!: string;
}
