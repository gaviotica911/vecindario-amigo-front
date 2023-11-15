import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionComponent } from './publicacion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PublicacionComponent, ],
  exports: [PublicacionComponent]
})
export class PublicacionModule { }
