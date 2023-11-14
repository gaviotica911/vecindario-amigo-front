import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vecindarios',
  templateUrl: './vecindarios.component.html',
  styleUrls: ['./vecindarios.component.css']
})
export class VecindariosComponent implements OnInit {
  displayVecindariosList: boolean = false;
  displayVecindariosDetalle: boolean = false;

  constructor() { }

  showVecindariosList(): void {
    this.displayVecindariosList = true;
  }

  hideVecindariosList(): void {
    this.displayVecindariosList = false;
  }

  showVecindariosDetalle(): void {
    this.displayVecindariosList = true;
  }

  hideVecindariosDetalle(): void {
    this.displayVecindariosList = false;
  }

  ngOnInit() {
  }

}
