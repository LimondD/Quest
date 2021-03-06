import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UiModule } from './ui/ui.module';

import { routing } from './app.routing';

import { ConfigService } from './shared/utils/config.service';
import { QuestService } from './shared/services/quest.service';
import { AccountModule } from './account/account.module';
import { QuestModal } from './home/questModal/quest-modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    QuestModal
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NgbModule,
    AccountModule,
    routing,
    UiModule,
  ],
  providers: [ConfigService, {
      provide: XHRBackend,
      useClass: AuthenticateXHRBackend
  }, QuestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
