import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegociosListComponent } from './negocios-list/negocios-list.component';
import { NegociosComponent } from './negocios.component';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  exports: [NegociosComponent],
  declarations: [NegociosComponent, NegociosListComponent]
})
export class NegociosModule { }
