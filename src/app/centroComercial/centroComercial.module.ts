import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentroComercialListComponent } from './centro-comercial-list/centro-comercial-list.component'; 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CentroComercialListComponent], 
  exports: [CentroComercialListComponent] 
})
export class CentroComercialModule { }