import { Component, OnInit } from '@angular/core';
import { Vecindario } from '../vecindario';
import { VecindariosService } from '../vecindarios.service';

@Component({
  selector: 'app-vecindarios-list',
  templateUrl: './vecindarios-list.component.html',
  styleUrls: ['./vecindarios-list.component.css']
})
export class VecindariosListComponent implements OnInit {

  selected: Boolean = false;
  selectedVecindario!: Vecindario;
  vecindarios: Array<Vecindario> = [];
  constructor(private VecindariosService: VecindariosService) { }

  onSelected(vecindario: Vecindario): void {
    this.selected = true;
    this.selectedVecindario = vecindario;
  }

  getVecindarios(): void {
    this.VecindariosService.getVecindarios().subscribe((vecindarios) => {
      this.vecindarios = vecindarios;
    });
  }
  ngOnInit() {
    this.getVecindarios();
  }

}
