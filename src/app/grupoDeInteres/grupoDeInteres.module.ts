import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoDeInteresListComponent } from './grupoDeInteres-list/grupoDeInteres-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GrupoDeInteresListComponent],
  declarations: [GrupoDeInteresListComponent]
})
export class GrupoDeInteresModule { }
