import { Component } from '@angular/core';

@Component({
  selector: 'app-centro-comercial',
  templateUrl: './centro-comercial.component.html',
  styleUrls: ['./centro-comercial.component.css']
})
export class CentroComercialComponent {
  displayCentroComercialList: boolean = false;
  displayCentroComercialDetalle: boolean = false;

  showCentroComercialList() {
    this.displayCentroComercialList = true;
    this.displayCentroComercialDetalle = false;
  }

  hideCentroComercialList() {
    this.displayCentroComercialList = false;
  }

  showCentroComercialDetalle() {
    this.displayCentroComercialDetalle = true;
    this.displayCentroComercialList = false;
  }

  hideCentroComercialDetalle() {
    this.displayCentroComercialDetalle = false;
  }
}
