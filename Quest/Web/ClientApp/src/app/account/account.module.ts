import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { UserService } from '../shared/services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

import { ConfirmEqualValidatorDirective } from '../shared/directives/confirm-equal-validator.directive';
import { EmailValidatorDirective } from '../shared/directives/email-validator.directive';

@NgModule({
  imports: [
    CommonModule, FormsModule, AccountRoutingModule
  ],
  declarations: [RegistrationFormComponent, LoginFormComponent, ProfileComponent, ConfirmEqualValidatorDirective, EmailValidatorDirective],
  providers: [UserService]
})
export class AccountModule { }
