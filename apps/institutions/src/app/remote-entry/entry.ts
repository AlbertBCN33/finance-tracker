import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [CommonModule, NxWelcome],
  selector: 'institutions-institutions-entry',
  template: `<institutions-nx-welcome></institutions-nx-welcome>`,
})
export class RemoteEntry {}
