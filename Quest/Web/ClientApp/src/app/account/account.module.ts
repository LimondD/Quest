import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { routing } from './account.routing';
import { AccountRoutingModule } from './account.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { UserService } from '../shared/services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, AccountRoutingModule
  ],
  declarations: [RegistrationFormComponent, LoginFormComponent, ProfileComponent],
  providers: [UserService]
})
export class AccountModule { }
