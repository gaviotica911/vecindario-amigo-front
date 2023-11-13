import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonaVerdeListComponent } from './zonaVerde-list/zonaVerde-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ZonaVerdeListComponent],
  declarations: [ZonaVerdeListComponent]
})
export class ZonaVerdeModule { }
