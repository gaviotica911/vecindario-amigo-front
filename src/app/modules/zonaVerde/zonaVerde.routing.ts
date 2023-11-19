import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZonaVerdeListComponent } from './zonaVerde-list/zonaVerde-list.component';


const routes: Routes = [{
  path: 'ZonaVerdes',
  children: [
    {
      path: 'list',
      component: ZonaVerdeListComponent
    },
    
  ]
 }];
 
 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
 export class ZonaVerdeRoutingModule { }