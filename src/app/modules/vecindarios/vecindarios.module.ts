import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecindariosListComponent } from './vecindarios-list/vecindarios-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [VecindariosListComponent],
  declarations: [VecindariosListComponent]
})
export class VecindariosModule { }
