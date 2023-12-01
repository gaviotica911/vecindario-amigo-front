import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VecinoListComponent } from './modules/vecino/vecino-list/vecino-list.component';
import { ZonaVerdeComponent } from './modules/zonaVerde/zonaVerde.component';
import { AppComponent } from './app.component';
import { VecindariosComponent } from './modules/vecindarios/vecindarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { CentroComercialComponent } from './modules/centroComercial/centroComercial.component';
import { GrupoDeInteresListComponent } from './modules/grupoDeInteres/grupoDeInteres-list/grupoDeInteres-list.component';
import { NegociosComponent } from './modules/negocios/negocios.component';
import { AyudaComponent } from './modules/Ayuda/ayuda.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'vecindarios', component: VecindariosComponent },
  {path: 'centrosComerciales',component: CentroComercialComponent},
  { path: 'vecinos', component: VecinoListComponent },
  { path: 'zonasVerdes', component: ZonaVerdeComponent },
  { path: 'gruposDeInteres', component: GrupoDeInteresListComponent},
  { path: 'negocios', component: NegociosComponent},
  {path: 'ayuda',component:AyudaComponent}

  // otras rutas...
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
