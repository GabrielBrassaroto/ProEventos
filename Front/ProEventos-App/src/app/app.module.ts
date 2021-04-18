import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent, /// declara quem arquivo que vai ter os componentes
    PalestrantesComponent
   ],
  imports: [
    BrowserModule, /// navegadpr
    AppRoutingModule, /// as rotas do angular
    HttpClientModule,
    BrowserAnimationsModule ///
  ],
  providers: [],
  bootstrap: [AppComponent]/// bootstrap da aplicacao
})
export class AppModule { }
