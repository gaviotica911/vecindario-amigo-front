import { Component, OnInit } from '@angular/core';
import { Negocio } from '../negocios';
import { NegocioDetail } from '../negocios-detail';
import { NegociosService } from '../negocios.service';

@Component({
  selector: 'app-negocios-list',
  templateUrl: './negocios-list.component.html',
  styleUrls: ['./negocios-list.component.css']
})
export class NegociosListComponent implements OnInit {

  negocios: Negocio[] = []; // Array<Negocio> puede ser simplificado a Negocio[]
  selectedNegocio!: Negocio;
  selected: Boolean = false;

  onSelected(negocio: Negocio): void {
    this.selected = true;
    this.selectedNegocio = negocio;
  }

  constructor(private negociosService: NegociosService) { } // la convención es usar camelCase para nombres de instancias

  getNegocios(): void {
    this.negociosService.getNegocios().subscribe((negocios) => {
      this.negocios = negocios;
    });
  }

  ngOnInit() {
    this.getNegocios();
  }

}
