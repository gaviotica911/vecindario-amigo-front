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
  sortBy: 'id' | 'nombre' = 'id';
  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 10;

  constructor(private centroComercialService: CentroComercialService) {}

  ngOnInit(): void {
    this.fetchCentroComerciales();
  }

  private fetchCentroComerciales(): void {
    this.centroComercialService.getCentroComerciales(this.currentPage, this.pageSize).subscribe(
      (data: any) => {
        this.centroComerciales = data.content;
        this.totalPages = data.totalPages;
        this.sortCentroComerciales(); // Sort after fetching data
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.fetchCentroComerciales();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage += 1;
      this.fetchCentroComerciales();
    }
  }

  verDetalle(centroComercial: CentroComercial): void {
    this.centroComercialService.getCentroComercialById(centroComercial.id).subscribe(
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
  onSortChange(): void {
    this.sortCentroComerciales();
  }
}
