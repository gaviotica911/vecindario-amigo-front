import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VecinoListComponent } from './vecino-list/vecino-list.component';


const routes: Routes = [{
  path: 'Vecinos',
  children: [
    {
      path: 'list',
      component: VecinoListComponent
    },
    
  ]
 }];
 
 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
 export class VecinoRoutingModule { }

 //hola
 