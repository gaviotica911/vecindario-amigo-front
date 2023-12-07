import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vecindarios',
  templateUrl: './vecindarios.component.html',
  styleUrls: ['./vecindarios.component.css']
})
export class VecindariosComponent implements OnInit {
  displayVecindariosList: boolean = true;
  displayVecindariosDetalle: boolean = false;

  displayVecindariosListOrden: string = "";

  constructor() { }

  showVecindariosList(orden?: string): void {
  this.displayVecindariosListOrden = orden || ""; 
  this.displayVecindariosList = true;
  }

  hideVecindariosList(): void {
    this.displayVecindariosList = false;
  }

  ngOnInit() {
  }

  display : any;
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng!= null)
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
  }
  

}
