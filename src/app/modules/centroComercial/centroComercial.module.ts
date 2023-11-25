import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentroComercialListComponent } from './centro-comercial-list/centro-comercial-list.component';
import { CentroComercialDetailComponent } from './centro-comercial-detail/centro-comercial-detail.component';
import { CentroComercialComponent } from './centroComercial.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CentroComercialListComponent,
    CentroComercialDetailComponent,
    CentroComercialComponent
  ],
  exports: [CentroComercialListComponent, CentroComercialComponent]
})
export class CentroComercialModule { }
