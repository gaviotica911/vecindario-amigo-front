import { Component, OnInit } from '@angular/core';
import { CentroComercial } from '../centroComercial';
import { CentroComercialService } from '../centroComercial.service';
import { CentroComercialDetail } from '../centro-comercial-detail';

@Component({
  selector: 'app-centro-comercial-list',
  templateUrl: './centro-comercial-list.component.html',
  styleUrls: ['./centro-comercial-list.component.css']
})
export class CentroComercialListComponent implements OnInit {
  centrosComerciales: Array<CentroComercialDetail> = [];
  selectedCentroComercial!: CentroComercialDetail;
  selected: boolean = false;

  onSelected(centroComercial: CentroComercialDetail): void {
    this.selected = true;
    this.selectedCentroComercial = centroComercial;
  }

  constructor(private centroComercialService: CentroComercialService) { }

  getCentrosComerciales(): void {
    this.centroComercialService.getCentrosComerciales().subscribe((centrosComerciales) => {
      this.centrosComerciales = centrosComerciales;
    });
  }

  ngOnInit() {
    this.getCentrosComerciales();
  }
}
