import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoDeInteresModule } from './grupoDeInteres/grupoDeInteres.module';

import { VecinoModule } from './modules/vecino/vecino.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarModule } from './modules/navBar/navBar.module';
import { HttpClientModule } from '@angular/common/http';
import { VecindariosModule } from './modules/vecindarios/vecindarios.module';
import { ZonaVerdeModule } from './modules/zonaVerde/zonaVerde.module';

@NgModule({
  declarations: [		
    AppComponent,
    FooterComponent
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
    ZonaVerdeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
