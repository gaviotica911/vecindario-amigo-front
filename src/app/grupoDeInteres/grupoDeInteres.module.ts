import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoDeInteresListComponent } from './grupoDeInteres-list/grupoDeInteres-list.component';
import { GrupoDeInteresDetailComponent } from './grupoDeInteres-detail/grupoDeInteres-detail.component';
import { GrupoDeInteresRoutingModule } from './grupoDeInteres-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    GrupoDeInteresRoutingModule,
    ReactiveFormsModule
  ],
  exports: [GrupoDeInteresListComponent],
  declarations: [GrupoDeInteresListComponent, GrupoDeInteresDetailComponent]
})
export class GrupoDeInteresModule { }
