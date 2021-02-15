import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { emailValidator } from './validator';

@Directive({
  selector: '[ngModel][appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: EmailValidatorDirective
    }
  ]
})

export class EmailValidatorDirective implements Validator{
  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors {
    return emailValidator(control) 
  }
}
