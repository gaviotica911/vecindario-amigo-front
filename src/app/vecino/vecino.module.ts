import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecinoListComponent } from './vecino-list/vecino-list.component';
import { VecinoDetailComponent } from './vecino-detail/vecino-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, RouterModule,ReactiveFormsModule


  ],
  declarations: [VecinoListComponent, VecinoDetailComponent, vecinoComponent],
  exports: [VecinoListComponent, vecinoComponent]
})
export class VecinoModule { }
