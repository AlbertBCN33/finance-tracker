import { InputSignal } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { FormFieldAddon } from './form-field-addon';

export interface FormField {
  form: FormGroup;
  controlName: string;
  id: string;
  label?: string;
  placeholder?: string;
  disabled?: InputSignal<boolean>;
  leftAddon?: FormFieldAddon;
  rightAddon?: FormFieldAddon;
  validations?: ValidatorFn[];
  cssClass?: string;
}
