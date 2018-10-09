import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

const emailPattern = RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");

@Directive({
  selector: '[emailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})


export class EmailValidatorDirective implements Validator {
  @Input() confirmEqualValidator: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (emailPattern.test(control.value)) {
      return { 'notValidEmail': true };
    }

    return null;
  }
}
