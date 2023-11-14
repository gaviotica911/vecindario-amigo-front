import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoDeInteresListComponent } from './grupoDeInteres-list/grupoDeInteres-list.component';
import { GrupoDeInteresDetailComponent } from './grupoDeInteres-detail/grupoDeInteres-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GrupoDeInteresListComponent],
  declarations: [GrupoDeInteresListComponent, GrupoDeInteresDetailComponent]
})
export class GrupoDeInteresModule { }
