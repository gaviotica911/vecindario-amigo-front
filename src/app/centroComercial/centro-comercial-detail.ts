import { Vecindario } from '../modules/vecindarios/vecindario';

export class CentroComercialDetail {
  id: number;
  nombre: string;
  descripcion: string;
  vecindario: Vecindario;
  calificaion: Array<any> = []; 

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    vecindario: Vecindario,
    publicaciones: Array<any>
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.vecindario = vecindario;
    this.calificaion = publicaciones;
  }
}
