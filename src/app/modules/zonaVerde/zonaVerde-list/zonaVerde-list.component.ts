import { Component, OnInit } from '@angular/core';
import { ZonaVerde } from '../zonaVerde';
import { ZonaVerdeService } from '../zonaVerde.service';



@Component({
  selector: 'app-zonaVerde-list',
  templateUrl: './zonaVerde-list.component.html',
  styleUrls: ['../zonaVerde.component.css']
})
export class ZonaVerdeListComponent implements OnInit {

  zonasVerdes: Array<ZonaVerde>=[];
  p: number = 1;
  searchedZV: any;

  constructor(private zonaVerdeService: ZonaVerdeService) { }

  getZonasVerdes(): void{
    this.zonaVerdeService.getZonaVerdes().subscribe((zonasVerdes) => {
      this.zonasVerdes = zonasVerdes;
     
  });
  }
  

  ngOnInit():void {
    this.getZonasVerdes();
  }

}
