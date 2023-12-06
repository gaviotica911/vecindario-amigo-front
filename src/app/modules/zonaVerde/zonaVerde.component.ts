import { Component, OnInit } from '@angular/core';
import { ZonaVerde } from './zonaVerde';
import { ZonaVerdeService } from './zonaVerde.service';

@Component({
  selector: 'app-zona-verde',
  templateUrl: './zonaVerde.component.html',
  styleUrls: ['./zonaVerde.component.css'],
})
export class ZonaVerdeComponent implements OnInit {
  zonaVerdes: ZonaVerde[] = [];
  selectedZonaVerde!: ZonaVerde;
  sortBy: 'id' | 'nombre' = 'id';
  ascendingOrder: boolean = true; // Add this line

  constructor(private zonaVerdeService: ZonaVerdeService) {}

  ngOnInit(): void {
    this.fetchZonaVerdes();
  }

  private fetchZonaVerdes(): void {
    this.zonaVerdeService.getZonaVerdes().subscribe(
      (data: ZonaVerde[]) => {
        this.zonaVerdes = data;
        this.sortZonaVerdes(); // Sort after fetching data
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  verDetalle(zonaVerde: ZonaVerde): void {
    this.selectedZonaVerde = zonaVerde;
    console.log('Zona Verde Details:', this.selectedZonaVerde);
  }

  sortZonaVerdes(): void {
    if (this.sortBy === 'id') {
      this.zonaVerdes.sort((a, b) => (this.ascendingOrder ? a.id - b.id : b.id - a.id));
    } else if (this.sortBy === 'nombre') {
      this.zonaVerdes.sort((a, b) =>
        this.ascendingOrder ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre)
      );
    }
  }

  onSortChange(): void {
    this.ascendingOrder = !this.ascendingOrder; // Toggle the sorting order
    this.sortZonaVerdes();
  }

  getTableStyle() {
    if (this.selectedZonaVerde) {
      return { 'width': '60%', 'margin': '0' };
    } else {
      return { 'width': 'auto', 'margin': '0 auto' };
    }
  }
}
