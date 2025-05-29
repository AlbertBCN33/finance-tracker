import { InputSignal } from '@angular/core';
import { FormGroup } from '@angular/forms';

export enum FormFieldAddonType {
  TEXT = 'TEXT',
  ICON = 'ICON',
  BUTTON = 'BUTTON',
}

export interface FormField {
  form: FormGroup;
  controlName: string;
  id: string;
  label?: string;
  placeholder?: string;
  disabled?: InputSignal<boolean>;
  leftAddon?: boolean;
  leftAddonType?: FormFieldAddonType;
  rightAddon?: boolean;
  rightAddonType?: FormFieldAddonType;
  validations?: any[];
}
