import { Component, OnInit } from '@angular/core';
import { Negocio } from '../negocio';
import { NegocioService } from '../negocio.service';

@Component({
  selector: 'app-negocio-list',
  templateUrl: './negocio-list.component.html',
  styleUrls: ['./negocio-list.component.css']
})
export class NegocioListComponent implements OnInit {
 negocios: Array<Negocio> = [];
  constructor(private negocioService: NegocioService) { }

  getNegocios(): void{
    this.negocioService.getNegocios().subscribe((negocios) => {
      this.negocios = negocios;
    });
  }


  ngOnInit() {
    this.getNegocios();
  }

}
