import { Component, OnInit,Input } from '@angular/core';
import { Publicacion } from './publicacion';
import { PublicacionService } from './publicacion.service';
import { PublicacionDetail } from './publicacion-detail';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  Publicacions: Array<PublicacionDetail> = [];
  selectedPublicacion!: PublicacionDetail;
  selected: Boolean = false;

  onSelected(Publicacion: PublicacionDetail): void {
    this.selected = true;
    this.selectedPublicacion = Publicacion;
  }
  @Input() publicacionDetail!: PublicacionDetail;

 
  constructor(private PublicacionService: PublicacionService) { }

  getPublicacions(): void{
    this.PublicacionService.getPublicacions().subscribe((Publicacions) => {
      this.Publicacions = Publicacions;
    });
  }


  ngOnInit() {
    this.getPublicacions();
  }

}
