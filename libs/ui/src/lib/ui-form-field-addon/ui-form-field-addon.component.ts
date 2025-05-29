import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { FormFieldAddon, FormFieldAddonType } from '@finance-tracker/models';

@Component({
  selector: 'lib-ui-form-field-addon',
  imports: [CommonModule, TranslatePipe, ButtonModule],
  templateUrl: './ui-form-field-addon.component.html',
  styleUrl: './ui-form-field-addon.component.scss',
})
export class UiFormFieldAddonComponent {
  @Input() addon!: FormFieldAddon;

  FormFieldAddonType = FormFieldAddonType;
}
