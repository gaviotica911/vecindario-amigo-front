import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VecinoListComponent } from './modules/vecino/vecino-list/vecino-list.component';

const routes: Routes = [


  { path: 'vecinos/list', component: VecinoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
