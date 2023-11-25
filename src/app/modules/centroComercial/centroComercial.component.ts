import { Component, OnInit } from '@angular/core';
import { CentroComercial } from './centroComercial';
import { CentroComercialService } from './centroComercial.service';

@Component({
  selector: 'app-centro-comercial',
  templateUrl: './centroComercial.component.html',
  styleUrls: ['./centroComercial.component.css'],
})
export class CentroComercialComponent implements OnInit {
  centroComerciales: CentroComercial[] = [];
  selectedCentroComercial: CentroComercial | null = null;
  sortBy: 'id' | 'nombre' = 'id'; // Default sorting by ID

  constructor(private centroComercialService: CentroComercialService) {}

  ngOnInit(): void {
    this.fetchCentroComerciales();
  }

  private fetchCentroComerciales() {
    this.centroComercialService.getCentroComerciales().subscribe(
      (data) => {
        this.centroComerciales = data;
        this.sortCentroComerciales(); // Initial sorting
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  verDetalle(centroComercial: CentroComercial): void {
    this.centroComercialService
      .getCentroComercialById(centroComercial.id)
      .subscribe(
        (data) => {
          this.selectedCentroComercial = data;
          console.log('Centro Comercial Details:', this.selectedCentroComercial);
        },
        (error) => {
          console.error('Error fetching centroComercial details:', error);
        }
      );
  }

  sortCentroComerciales(): void {
    if (this.sortBy === 'id') {
      this.centroComerciales.sort((a, b) => a.id - b.id);
    } else if (this.sortBy === 'nombre') {
      this.centroComerciales.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
  }

  // Function to handle sorting change
  onSortChange(): void {
    this.sortCentroComerciales();
  }
}
