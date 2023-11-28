import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupoDeInteres',
  templateUrl: './grupoDeInteres.component.html',
  styleUrls: ['./grupoDeInteres.component.css']
})
export class GrupoDeInteresComponent implements OnInit {
  displayvecinoList: boolean = false;
  displayvecinoDetalle: boolean = false;

  constructor() { }

  showvecinoList(): void {
    this.displayvecinoList = true;
  }

  hidevecinoList(): void {
    this.displayvecinoList = false;
  }

  showvecinoDetalle(): void {
    this.displayvecinoList = true;
  }

  hidevecinoDetalle(): void {
    this.displayvecinoList = false;
  }

  ngOnInit() {
  }

}
