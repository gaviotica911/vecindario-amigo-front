import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonaVerdeListComponent } from './zonaVerde-list/zonaVerde-list.component';
import { zonaVerdeComponent } from './zonaVerde.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ZonaVerdeListComponent, zonaVerdeComponent],
  declarations: [ZonaVerdeListComponent, zonaVerdeComponent]
})
export class ZonaVerdeModule { }
