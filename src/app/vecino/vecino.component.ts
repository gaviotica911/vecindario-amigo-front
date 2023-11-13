import { Component, OnInit } from '@angular/core';
import { Vecino } from './vecino';

@Component({
  selector: 'app-vecino',
  templateUrl: './vecino.component.html',
  styleUrls: ['./vecino.component.css']
})
export class VecinoComponent implements OnInit {


  private vecinos: Array<Vecino> = [];

  constructor() { }

  ngOnInit() {
  }

}
