import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecinoListComponent } from './vecino-list/vecino-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VecinoListComponent],
  exports: [VecinoListComponent]
})
export class VecinoModule { }
