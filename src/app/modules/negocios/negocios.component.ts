import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {
  displayNegociosList: boolean = false;
  displayNegociosDetalle: boolean = false;

  constructor() { }

  showNegociosList(): void {
    this.displayNegociosList = true;
  }

  hideNegociosList(): void {
    this.displayNegociosList = false;
  }

  showNegociosDetalle(): void {
    this.displayNegociosList = true;
  }

  hideNegociosDetalle(): void {
    this.displayNegociosList = false;
  }

  ngOnInit() {
  }

}
