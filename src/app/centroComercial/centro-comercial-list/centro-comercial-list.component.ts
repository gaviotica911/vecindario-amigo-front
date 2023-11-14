import { Component, OnInit } from '@angular/core';
import { CentroComercial } from '../centroComercial';
import { CentroComercialService } from '../centroComercial.service';

@Component({
  selector: 'app-centroComercial-list', 
  templateUrl: './centro-comercial-list.component.html',
  styleUrls: ['./centro-comercial-list.component.css']
})
export class CentroComercialListComponent implements OnInit {
  centrosComerciales: CentroComercial[] = [];

  constructor(private centroComercialService: CentroComercialService) { }

  getCentrosComerciales(): void {
    this.centroComercialService.getCentrosComerciales().subscribe((centrosComerciales) => {
      // Corrected variable name here
      this.centrosComerciales = centrosComerciales;
    });
  }

  ngOnInit() {
    this.getCentrosComerciales();
  }
}