import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecindariosListComponent } from './vecindarios-list/vecindarios-list.component';
import { VecindariosComponent } from './vecindarios.component';
import { VecindariosDetailComponent } from './vecindarios-detail/vecindarios-detail.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from './google-map/google-map.component';


@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule
    
  ],
  exports: [VecindariosComponent],
  declarations: [VecindariosComponent, VecindariosListComponent, VecindariosDetailComponent,GoogleMapComponent ]
})


export class VecindariosModule { }
