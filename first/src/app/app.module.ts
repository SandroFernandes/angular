import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.compoment';
import {ServerTesteComponent} from './server-teste/server-teste.component';
import { WarningComponent } from './warning/warning.component';
import { SucessComponent } from './sucess/sucess.component';
import { NameComponent } from './name/name.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerTesteComponent,
    WarningComponent,
    SucessComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
