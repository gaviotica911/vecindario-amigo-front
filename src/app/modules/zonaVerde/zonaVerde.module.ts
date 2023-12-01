import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonaVerdeComponent } from './zonaVerde.component';

import {  RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  imports: [
    CommonModule,RouterModule, NgxPaginationModule
  ],
  exports: [ZonaVerdeComponent],
  declarations: [ZonaVerdeComponent]
})
export class ZonaVerdeModule { }
