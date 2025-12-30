import { Component } from '@angular/core';
import { PasswordGeneratorComponent } from './password-generator/password-generator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordGeneratorComponent],
  template: `
    <app-password-generator></app-password-generator>
  `
})
export class AppComponent {}
