import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Publicacion } from './publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private selectedPublicacion= new BehaviorSubject<Publicacion | null>(null );

  selectedPublicacion$=this.selectedPublicacion.asObservable();

  selectPublicacion(publicacion: Publicacion){
    this.selectedPublicacion.next(publicacion);
  }

constructor() { }

}
