import { Component, Input, OnInit } from '@angular/core';
import { CentroComercial } from '../centroComercial';
import { CentroComercialDetail } from '../centro-comercial-detail';

@Component({
  selector: 'app-centro-comercial-detail',
  templateUrl: './centro-comercial-detail.component.html',
  styleUrls: ['./centro-comercial-detail.component.css']
})
export class CentroComercialDetailComponent implements OnInit {

  @Input() centroComercialDetail!: CentroComercialDetail;

  constructor() { }

  ngOnInit() {
  }
}
