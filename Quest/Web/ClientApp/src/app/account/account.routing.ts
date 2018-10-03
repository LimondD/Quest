import { NgModule } from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { RegistrationFormComponent }    from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';


const accauntRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'registration', component: RegistrationFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(accauntRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
