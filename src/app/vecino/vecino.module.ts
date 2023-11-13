import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecinoComponent } from './vecino.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VecinoComponent],
  exports: [VecinoComponent]
})
export class VecinoModule { }
