import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { TabComponent } from './@shared/tab/tab.component';
import {ModalService} from './@shared/modal/modal.service';
import { ModalModule } from './@shared/modal/modal.module';
import { InsertionDirective } from './@shared/modal/insertion.directive';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowcaseComponent,
    TabComponent
  ],
  imports: [
    ModalModule,
    MainModule,
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
