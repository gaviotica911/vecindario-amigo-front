import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonaVerdeListComponent } from './zonaVerde-list/zonaVerde-list.component';
import { zonaVerdeComponent } from './zonaVerde.component';
import {  RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  exports: [ZonaVerdeListComponent, zonaVerdeComponent],
  declarations: [ZonaVerdeListComponent, zonaVerdeComponent]
})
export class ZonaVerdeModule { }
