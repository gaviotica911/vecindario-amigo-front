import { Component, OnInit } from '@angular/core';
import { CentroComercial } from './centroComercial';
import { CentroComercialService } from './centroComercial.service';

@Component({
  selector: 'app-centro-comercial',
  templateUrl: './centroComercial.component.html',
  styleUrls: ['./centroComercial.component.css']
})
export class CentroComercialComponent implements OnInit {

  centroComerciales: CentroComercial[] = [];

  constructor(private centroComercialService: CentroComercialService) { }

  ngOnInit(): void {
    this.fetchCentroComerciales();
  }

  private fetchCentroComerciales() {
    this.centroComercialService.getCentroComerciales().subscribe(
      data => {
        this.centroComerciales = data;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
