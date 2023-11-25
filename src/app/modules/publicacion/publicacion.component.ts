import { Component, OnInit,Input } from '@angular/core';
import {  PublicacionService } from './publicacion.service';
import { Publicacion } from '../publicacion/publicacion';
import { VecinoDetail } from '../vecino/vecino-detail';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private publicacionService :PublicacionService) { }
  posts: Array<Publicacion> = [];
  selectedPost!: Publicacion;
  selected: Boolean = false;
  selectedPostId: number=0;

  onSelected(post: Publicacion): void {
    this.selected = true;
    this.selectedPost = post;
    this.selectedPostId = post.id; // Su
   
  }
  selectedPublicacion(publicacion: Publicacion){
    this.publicacionService.selectPublicacion(publicacion);
  }
  @Input() vecinoDetail!: VecinoDetail;
  

  ngOnInit() {
  }

}
