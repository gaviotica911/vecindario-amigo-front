import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Vecindario } from '../vecindario';
import { VecindariosService } from '../vecindarios.service';

@Component({
  selector: 'app-vecindarios-list',
  templateUrl: './vecindarios-list.component.html',
  styleUrls: ['./vecindarios-list.component.css']
})
export class VecindariosListComponent implements OnInit, OnChanges {

  selected: Boolean = false;
  selectedVecindario!: Vecindario;
  vecindarios: Array<Vecindario> = [];

  @Input() orden?: string;

  currentPage: number = 0;
  totalPages: number = 0;
  constructor(private VecindariosService: VecindariosService) { }

  onSelected(vecindario: Vecindario): void {
    this.selected = true;
    this.selectedVecindario = vecindario;
  }

  // getVecindarios(): void {
  //   this.VecindariosService.getVecindarios().subscribe((vecindarios) => {
  //     this.vecindarios = this.ordenarVecindarios(vecindarios, this.orden);
  //   });
  // }

  getVecindarios(): void {
    // Updated to support pagination
    this.VecindariosService.getVecindarios(this.currentPage, 10).subscribe(response => {
      this.vecindarios = this.ordenarVecindarios(response.content, this.orden);
      this.totalPages = response.totalPages;
    });
  }

  ordenarVecindarios(vecindarios: Vecindario[], orden?: string): Vecindario[] {
    if (orden === 'ascendente') {
      return vecindarios.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    else if(orden === 'descendente'){
      return vecindarios.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }
    return vecindarios;
  }

  // Add methods to handle pagination
  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.getVecindarios();
    }
  }
  
  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage += 1;
      this.getVecindarios();
    }
  }

  ngOnInit() {
    this.getVecindarios();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.orden){
      this.getVecindarios();
    }
  }

  }


