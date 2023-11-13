import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoDeInteresModule } from './grupoDeInteres/grupoDeInteres.module';

import { VecinoModule } from './vecino/vecino.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GrupoDeInteresModule,
    BrowserModule,
    AppRoutingModule,
    GrupoDeInteresModule,
    VecinoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
