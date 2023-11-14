import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecindariosListComponent } from './vecindarios-list/vecindarios-list.component';
import { VecindariosComponent } from './vecindarios.component';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  exports: [VecindariosComponent],
  declarations: [VecindariosComponent, VecindariosListComponent]
})
export class VecindariosModule { }
