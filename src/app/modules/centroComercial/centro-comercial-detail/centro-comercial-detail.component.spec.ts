import { Component, Input, OnInit } from '@angular/core';
import { CentroComercialDetail } from '../centro-comercial-detail';
import { Vecindario } from '../../modules/vecindarios/vecindario';

@Component({
  selector: 'app-centro-comercial-detail',
  templateUrl: './centro-comercial-detail.component.html',
  styleUrls: ['./centro-comercial-detail.component.css']
})
export class CentroComercialDetailComponent implements OnInit {
  @Input() centroComercialDetail: CentroComercialDetail = new CentroComercialDetail(0, '', '', new Vecindario(0, '', '', ''), []);

  constructor() { }

  ngOnInit() {
  }
}
