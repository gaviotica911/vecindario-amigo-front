import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ZonaVerdeComponent } from './zonaVerde.component';

@NgModule({
  declarations: [
    ZonaVerdeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ZonaVerdeComponent]
})
export class ZonaVerdeModule { }
