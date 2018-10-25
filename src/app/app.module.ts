import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListaOrdemServicoComponent } from './lista-ordem-servico/lista-ordem-servico.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListaOrdemServicoComponent,
    ModelFormComponent
  ],
 imports: [
   BrowserModule,
   BrowserAnimationsModule,
   HttpClientModule,
   FormsModule,
   TableModule,
   DropdownModule,
   DialogModule,
   InputTextModule,
   InputTextareaModule,
   PanelModule,
   ButtonModule,
   GrowlModule
 ],
 providers: [
  MessageService
 ],
 bootstrap: [AppComponent],
})

export class AppModule { }
