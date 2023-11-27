import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {
  displayNegociosList: boolean = true;
  displayNegociosDetalle: boolean = false;

  constructor() { }

  showNegociosList(): void {
    this.displayNegociosList = true;
  }

  hideNegociosList(): void {
    this.displayNegociosList = false;
  }

  NegociosDetalleAscendete(): void {
    this.displayNegociosList = true;
  }

  NegociosDetalleDescendente(): void {
    this.displayNegociosList = false;
  }

  ngOnInit() {
  }

}
