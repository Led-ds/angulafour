import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MeuComponente} from './componentizando/meu-componente.component';
import { Componentizando2Component } from './componentizando2/componentizando2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponente,
    Componentizando2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
