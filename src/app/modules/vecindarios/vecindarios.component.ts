import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vecindarios',
  templateUrl: './vecindarios.component.html',
  styleUrls: ['./vecindarios.component.css']
})
export class VecindariosComponent implements OnInit {
  displayVecindariosList: boolean = false;
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

}
