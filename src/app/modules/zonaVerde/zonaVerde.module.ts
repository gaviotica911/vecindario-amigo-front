import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonaVerdeListComponent } from './zonaVerde-list/zonaVerde-list.component';

import {  RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  imports: [
    CommonModule,RouterModule, Ng2SearchPipeModule, NgxPaginationModule
  ],
  exports: [ZonaVerdeListComponent],
  declarations: [ZonaVerdeListComponent]
})
export class ZonaVerdeModule { }
