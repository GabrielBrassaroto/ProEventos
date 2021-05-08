import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { NavComponent } from './nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';




@NgModule({
  declarations: [
    AppComponent,
    EventosComponent, /// declara quem arquivo que vai ter os componentes
    PalestrantesComponent,
      NavComponent
   ],
  imports: [
    BrowserModule, /// navegadpr
    AppRoutingModule, /// as rotas do angular
    HttpClientModule,
    BrowserAnimationsModule, ///
    CollapseModule.forRoot() // importação do colapse do angular
  ],
  providers: [],
  bootstrap: [AppComponent]/// bootstrap da aplicacao
})
export class AppModule { }
