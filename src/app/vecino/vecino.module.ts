import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecinoListComponent } from './vecino-list/vecino-list.component';
import { VecinoDetailComponent } from './vecino-detail/vecino-detail.component';
import { vecinoComponent } from './vecino.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VecinoListComponent, VecinoDetailComponent, vecinoComponent],
  exports: [VecinoListComponent, vecinoComponent]
})
export class VecinoModule { }
