import { Component, OnInit } from '@angular/core';
import { CentroComercial } from '../centro-comercial'; // Assuming the correct path to CentroComercial class
import { CentroComercialService } from '../centro-comercial.service'; // Assuming the correct path to CentroComercialService

@Component({
  selector: 'app-centro-comercial-list',
  templateUrl: './centro-comercial-list.component.html',
  styleUrls: ['./centro-comercial-list.component.css']
})
export class CentroComercialListComponent implements OnInit {
  centrosComerciales: CentroComercial[] = [];

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