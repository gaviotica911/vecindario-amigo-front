import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegocioListComponent } from './negocio-list/negocio-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NegocioListComponent],
  exports: [NegocioListComponent]
})
export class NegocioModule { }
