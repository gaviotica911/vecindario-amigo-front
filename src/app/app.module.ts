import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoDeInteresModule } from './grupoDeInteres/grupoDeInteres.module';

import { VecinoModule } from './vecino/vecino.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarModule } from './modules/navBar/navBar.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
