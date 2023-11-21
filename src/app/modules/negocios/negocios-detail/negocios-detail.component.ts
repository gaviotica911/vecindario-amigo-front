import { Component, Input, OnInit } from '@angular/core';
import { Negocio } from '../negocios';
import { NegocioDetail } from '../negocios-detail';
import { Publicacion } from '../../publicacion/publicacion';

@Component({
  selector: 'app-negocio-detail',
  templateUrl: './negocios-detail.component.html',
  styleUrls: ['./negocios-detail.component.css']
})
export class NegocioDetailComponent implements OnInit {
  
  negocios: Array<NegocioDetail> = [];
  selectedNegocio!: NegocioDetail;
  selected: Boolean = false;

  onSelected(negocio: NegocioDetail): void {
    this.selected = true;
    this.selectedNegocio = negocio;
    console.log('Negocio seleccionado:', this.selectedNegocio); // Para verificar la selección
  }
  
  @Input() negocioDetail!: NegocioDetail;

  constructor() { }

  ngOnInit() {
  }

}
