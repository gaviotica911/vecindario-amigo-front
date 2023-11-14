import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vecino',
  templateUrl: './vecino.component.html',
  styleUrls: ['./vecino.component.css']
})
export class vecinoComponent implements OnInit {
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
