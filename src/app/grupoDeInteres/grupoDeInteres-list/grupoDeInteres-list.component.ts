import { Component, OnInit } from '@angular/core';
import { GrupoDeInteresDetail } from '../grupoDeInteres-detail';
import { GrupoDeInteresService } from '../grupoDeInteres.service';
import { GrupoDeInteres } from '../grupoDeInteres';

@Component({
  selector: 'app-grupoDeInteres-list',
  templateUrl: './grupoDeInteres-list.component.html',
  styleUrls: ['./grupoDeInteres-list.component.css']
})
export class GrupoDeInteresListComponent implements OnInit {


  
  gruposDeInteres: Array<GrupoDeInteresDetail> = [];
  selected: Boolean = false;
  selectedGrupoDeInteres!: GrupoDeInteresDetail;
  constructor(private grupoDeInteresService: GrupoDeInteresService) { }

  getGruposDeInteres(): void {
    this.grupoDeInteresService.getGruposDeInteres().subscribe((gruposDeInteres) => {
      this.gruposDeInteres = gruposDeInteres;
    });
  }

  onSelected(grupoDeInteres: GrupoDeInteresDetail): void {
    this.selected = true;
    this.selectedGrupoDeInteres = grupoDeInteres;
  }
  ngOnInit() {
    this.getGruposDeInteres();

  }


}
