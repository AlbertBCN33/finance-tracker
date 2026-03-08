import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormValidatorsService {
  passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return password && confirm && password !== confirm
      ? { passwordsMismatch: true }
      : null;
  }
}
