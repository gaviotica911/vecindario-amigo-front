import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoDeInteresListComponent } from './grupoDeInteres-list/grupoDeInteres-list.component';
import { GrupoDeInteresDetailComponent } from './grupoDeInteres-detail/grupoDeInteres-detail.component';


const routes: Routes = [{
  path: 'authors',
  children: [
 
    {
      path: 'list',
      component: GrupoDeInteresListComponent
    },
    {
      path: ':id',
      component: GrupoDeInteresDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoDeInteresRoutingModule { }
