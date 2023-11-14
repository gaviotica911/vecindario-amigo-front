import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoDeInteresListComponent } from './grupoDeInteres-list/grupoDeInteres-list.component';
import { GrupoDeInteresDetailComponent } from './grupoDeInteres-detail/grupoDeInteres-detail.component';
import { GrupoDeInteresRoutingModule } from './grupoDeInteres-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  exports: [GrupoDeInteresListComponent],
  declarations: [GrupoDeInteresListComponent, GrupoDeInteresDetailComponent]
})
export class GrupoDeInteresModule { }
