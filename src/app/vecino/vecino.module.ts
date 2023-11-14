import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecinoListComponent } from './vecino-list/vecino-list.component';
import { VecinoDetailComponent } from './vecino-detail/vecino-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VecinoListComponent, VecinoDetailComponent],
  exports: [VecinoListComponent]
})
export class VecinoModule { }
