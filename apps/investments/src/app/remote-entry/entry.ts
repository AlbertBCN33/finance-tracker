import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [CommonModule, NxWelcome],
  selector: 'investments-investments-entry',
  template: `<investments-nx-welcome></investments-nx-welcome>`,
})
export class RemoteEntry {}
