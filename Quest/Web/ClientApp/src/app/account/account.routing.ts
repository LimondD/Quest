import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { RegistrationFormComponent }    from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

//export const routing: ModuleWithProviders = RouterModule.forRoot([
//  { path: 'register', component: RegistrationFormComponent},
//  { path: 'login', component: LoginFormComponent}
//]);



const appRoutes: Routes = [
  { path: 'login', component: LoginFormComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
