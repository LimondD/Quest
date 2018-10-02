import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

import { UserService } from '../shared/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, NavMenuComponent],
  exports: [LayoutComponent],
  providers: [UserService]
})
export class UiModule { }
