import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VecinoListComponent } from './modules/vecino/vecino-list/vecino-list.component';
import { ZonaVerdeListComponent } from './modules/zonaVerde/zonaVerde-list/zonaVerde-list.component';
import { AppComponent } from './app.component';
import { VecindariosComponent } from './modules/vecindarios/vecindarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { GrupoDeInteresListComponent } from './grupoDeInteres/grupoDeInteres-list/grupoDeInteres-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'vecinos', component: VecinoListComponent },
  { path: 'zonasVerdes', component: ZonaVerdeListComponent },
  { path: 'gruposDeInteres', component: GrupoDeInteresListComponent},

  // otras rutas...
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
