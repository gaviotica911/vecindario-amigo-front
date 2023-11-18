import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionComponent } from './publicacion.component';
import { ComentarioModule } from '../comentario/comentario.module';

@NgModule({
  imports: [
    CommonModule, ComentarioModule
  ],
  declarations: [PublicacionComponent],
  exports: [PublicacionComponent]
})
export class PublicacionModule { }
