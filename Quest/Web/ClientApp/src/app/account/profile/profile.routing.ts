import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { RootComponent } from './root/root.component';
//import { HomeComponent } from './home/home.component';
//import { SettingsComponent } from './settings/settings.component';

import { AuthGuard } from '../../auth.guard';
import { ProfileComponent } from './profile.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile',
    component: ProfileComponent, canActivate: [AuthGuard],

    children: [
      { path: '', component: ProfileComponent },
      //{ path: 'home', component: HomeComponent },
      //{ path: 'settings', component: SettingsComponent },
    ]
  }
]);
