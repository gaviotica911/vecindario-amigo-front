import { Component, Input, OnInit } from '@angular/core';
import { Vecino } from '../vecino';
import { VecinoDetail } from '../vecino-detail';

@Component({
  selector: 'app-vecino-detail',
  templateUrl: './vecino-detail.component.html',
  styleUrls: ['./vecino-detail.component.css']
})
export class VecinoDetailComponent implements OnInit {

  
  @Input() vecinoDetail!: VecinoDetail;

  constructor() { }

  ngOnInit() {
  }

}
