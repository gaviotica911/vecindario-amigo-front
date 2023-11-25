import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CentroComercialComponent } from './centroComercial.component';

@NgModule({
  declarations: [
    CentroComercialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CentroComercialComponent]
})
export class AppModule { }
