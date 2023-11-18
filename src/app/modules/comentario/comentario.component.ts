import { Component, OnInit,Input } from '@angular/core';
import { ComentarioService } from './comentario.service';
import { Comentario } from './comentario';
import { Publicacion } from '../publicacion/publicacion';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  comentarios: Array<Comentario> = [];
  publicacion2!: Publicacion | null ;
  comentsid: Array<Comentario> = [];

  selectedPublicacion!: Publicacion;
   // Para verificar la selección
  selected: Boolean = false;

  onSelected(publicacion: Publicacion): void {
    this.selected = true;
    this.selectedPublicacion = publicacion;

    console.log('Publicación seleccionada:', this.selectedPublicacion); // Para verificar la selección
  }
  
  @Input() publicacion!: Publicacion;
  
  
  
  constructor(private comentarioService: ComentarioService) { }

  getComentarios(): void {
    this.comentarioService.getComentarios().subscribe((comentarios) => {
      this.comentarios = comentarios;
      console.log('Comentarios cargados comple:', this.comentarios);

      // Verificar si la publicación está disponible antes de llamar a getComentariosPerPublicacion
      if (this.publicacion) {
        this.getComentariosPerPublicacion(this.publicacion.id);
      }
    });
  }

  getComentariosPerPublicacion(idPublicacion:number): Array<Comentario> {
    let comentariosPerPublicacion: Array<Comentario> = [];
    for (let comentario of this.comentarios) {
     
        if (comentario.publicacion && comentario.publicacion.id === idPublicacion) {
            comentariosPerPublicacion.push(comentario);
        }
    }
    console.log('Comentarios cargados:', comentariosPerPublicacion);
    return comentariosPerPublicacion;
}

  ngOnChanges(): void {
    // Llamar a getComentariosPerPublicacion si publicacion está disponible y los comentarios se han cargado
    if (this.publicacion && this.comentarios.length > 0) {
      this.getComentariosPerPublicacion(this.publicacion.id);
    }
  }

  ngOnInit(): void {
    this.getComentarios();
  }
}

