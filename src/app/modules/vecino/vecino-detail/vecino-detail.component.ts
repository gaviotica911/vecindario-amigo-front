import { Component, Input, OnInit } from '@angular/core';
import { Vecino } from '../vecino';
import { VecinoDetail } from '../vecino-detail';
import { Publicacion } from '../../publicacion/publicacion';

@Component({
  selector: 'app-vecino-detail',
  templateUrl: './vecino-detail.component.html',
  styleUrls: ['./vecino-detail.component.css']
})
export class VecinoDetailComponent implements OnInit {
  
  vecinos: Array<VecinoDetail> = [];
  selectedVecino!: VecinoDetail;
  selected: Boolean = false;

  onSelected(vecino: VecinoDetail): void {
    this.selected = true;
    this.selectedVecino = vecino;
    console.log('Vecino seleccionado:', this.selectedVecino); // Para verificar la selección
  }
  
  @Input() vecinoDetail!: VecinoDetail;

  constructor() { }

  ngOnInit() {
  }

}
