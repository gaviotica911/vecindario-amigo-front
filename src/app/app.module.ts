import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoDeInteresModule } from './grupoDeInteres/grupoDeInteres.module';

import { VecinoModule } from './modules/vecino/vecino.module';
import { NavBarModule } from './modules/navBar/navBar.module';
import { HttpClientModule } from '@angular/common/http';
import { VecindariosModule } from './modules/vecindarios/vecindarios.module';
import { ZonaVerdeModule } from './modules/zonaVerde/zonaVerde.module';
import { ComentarioModule } from './modules/comentario/comentario.module';
import { PublicacionModule } from './modules/publicacion/publicacion.module';
import { ZonaVerdeRoutingModule } from './modules/zonaVerde/zonaVerde.routing';
import { NegocioModule } from './modules/negocios/negocios.module';
import { InicioModule } from './inicio/inicio.module';



@NgModule({
  declarations: [		
    AppComponent,
   
   ],
  imports: [
    NavBarModule,
    GrupoDeInteresModule,
    BrowserModule,
    AppRoutingModule,
    GrupoDeInteresModule,
    VecinoModule,
    HttpClientModule,
    VecindariosModule,
    ZonaVerdeModule,
    NegocioModule,
    ComentarioModule, 
    PublicacionModule,
    ComentarioModule,
    ZonaVerdeRoutingModule,
    InicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
