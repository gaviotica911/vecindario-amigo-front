import { Component,Input, OnInit , OnChanges, SimpleChanges} from '@angular/core';
import { GrupoDeInteresDetail } from '../grupoDeInteres-detail';
import { GrupoDeInteresService } from '../grupoDeInteres.service';
import { GrupoDeInteres } from '../grupoDeInteres';

@Component({
  selector: 'app-grupoDeInteres-list',
  templateUrl: './grupoDeInteres-list.component.html',
  styleUrls: ['./grupoDeInteres-list.component.css']
})
export class GrupoDeInteresListComponent implements OnInit, OnChanges{


  
  gruposDeInteres: Array<GrupoDeInteresDetail> = [];
  selected: Boolean = false;
  selectedGrupoDeInteres!: GrupoDeInteresDetail;
  mostrarListaFlag: boolean = false;

  @Input() orden?: string;

  currentPage: number = 0;
  totalPages: number = 0;

  constructor(private grupoDeInteresService: GrupoDeInteresService) { }

  // getGruposDeInteres(): void {
  //   this.grupoDeInteresService.getGruposDeInteres().subscribe((gruposDeInteres) => {
  //     this.gruposDeInteres = gruposDeInteres;
  //   });
  // }


  getGruposDeInteres(): void {
    // Updated to support pagination
    this.grupoDeInteresService.getGruposDeInteres(this.currentPage, 10).subscribe(response => {
      this.gruposDeInteres = this.ordenarVecindarios(response.content, this.orden);
      this.totalPages = response.totalPages;
    });
  }


  ordenarVecindarios(gruposDeInteres: GrupoDeInteresDetail[], orden?: string): GrupoDeInteres[] {
    if (orden === 'ascendente') {
      return gruposDeInteres.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    else if(orden === 'descendente'){
      return gruposDeInteres.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }
    return gruposDeInteres;
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.getGruposDeInteres();
    }
  }
  
  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage += 1;
      this.getGruposDeInteres();
    }
  }


  mostrarLista() {
    this.mostrarListaFlag = true;
  }

  onSelected(grupoDeInteres: GrupoDeInteresDetail): void {
    this.selected = true;
    this.selectedGrupoDeInteres = grupoDeInteres;
  }
  ngOnInit() {
    this.getGruposDeInteres();

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.orden){
      this.getGruposDeInteres();
    }
  }
}
