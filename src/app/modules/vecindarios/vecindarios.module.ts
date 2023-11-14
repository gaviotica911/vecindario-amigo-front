import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecindariosListComponent } from './vecindarios-list/vecindarios-list.component';
import { VecindariosComponent } from './vecindarios.component';
import { VecindariosDetailComponent } from './vecindarios-detail/vecindarios-detail.component';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  exports: [VecindariosComponent],
  declarations: [VecindariosComponent, VecindariosListComponent, VecindariosDetailComponent]
})
export class VecindariosModule { }
