import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zonaVerde',
  templateUrl: './zonaVerde.component.html',
  styleUrls: ['./zonaVerde.component.css']
})
export class zonaVerdeComponent implements OnInit {
  displayzonaVerdeList: boolean = false;
  displayzonaVerdeDetalle: boolean = false;

  constructor() { }

  showzonaVerdeList(): void {
    this.displayzonaVerdeList = true;
  }

  hidezonaVerdeList(): void {
    this.displayzonaVerdeList = false;
  }

  showzonaVerdeDetalle(): void {
    this.displayzonaVerdeList = true;
  }

  hidezonaVerdeDetalle(): void {
    this.displayzonaVerdeList = false;
  }

  ngOnInit() {
  }

}
