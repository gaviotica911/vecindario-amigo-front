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

  paginaActual: number = 1;
  negociosPorPagina: number = 10; // Ajusta este número según tus necesidades
  negociosPaginados: Negocio[] = [];

  onSelected(negocio: Negocio): void {
    this.selected = true;
    this.selectedNegocio = negocio;
  }

  constructor(private negociosService: NegociosService) { } // la convención es usar camelCase para nombres de instancias

  actualizarPagina(): void {
    const inicio = (this.paginaActual - 1) * this.negociosPorPagina;
    const fin = inicio + this.negociosPorPagina;
    this.negociosPaginados = this.negocios.slice(inicio, fin);
  }

  getNegocios(): void {
    this.negociosService.getNegocios().subscribe((negocios) => {
      this.negocios = negocios;
      this.actualizarPagina();
    });
  }

  cambiarPagina(cambio: number): void {
    this.paginaActual += cambio;
    this.actualizarPagina();
  }

  maximaPagina(): number {
    return Math.ceil(this.negocios.length / this.negociosPorPagina);
  }

  ordenarAscendente(): void {
    this.negocios.sort((a, b) => a.calificacion - b.calificacion);
    this.actualizarPagina(); 
  }

  ordenarDescendente(): void {
    this.negocios.sort((a, b) => b.calificacion - a.calificacion);
    this.actualizarPagina(); 
  }

  ngOnInit() {
    this.getNegocios();
  }

}
