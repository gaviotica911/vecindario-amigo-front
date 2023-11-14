import { Component, OnInit } from '@angular/core';
import { Vecino } from '../vecino';
import { VecinoService } from '../vecino.service';
import { VecinoDetail } from '../vecino-detail';

@Component({
  selector: 'app-vecino-list',
  templateUrl: './vecino-list.component.html',
  styleUrls: ['./vecino-list.component.css']
})
export class VecinoListComponent implements OnInit {
  vecinos: Array<Vecino> = [];
  selectedVecino!: VecinoDetail;
  selected: Boolean = false;

  onSelected(vecino: VecinoDetail): void {
    this.selected = true;
    this.selectedVecino = vecino;
  }

 
  constructor(private vecinoService: VecinoService) { }

  getVecinos(): void{
    this.vecinoService.getVecinos().subscribe((vecinos) => {
      this.vecinos = vecinos;
    });
  }


  ngOnInit() {
    this.getVecinos();
  }

}
