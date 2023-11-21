import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NegociosListComponent } from './negocios-list/negocios-list.component';


const routes: Routes = [{
  path: 'Negocios',
  children: [
    {
      path: 'list',
      component: NegociosListComponent
    },
    
  ]
 }];
 
 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
 export class NegociosRoutingModule { }