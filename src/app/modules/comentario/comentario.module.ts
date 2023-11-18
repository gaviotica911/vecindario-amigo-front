import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioComponent } from './comentario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComentarioComponent],
  exports: [ComentarioComponent]
})
export class ComentarioModule { }
