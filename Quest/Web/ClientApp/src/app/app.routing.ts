import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { ProfileComponent } from './account/profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'profile', component: ProfileComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
