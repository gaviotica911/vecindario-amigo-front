export class CentroComercial {
    id: number;
    calificacion: number;
    descripcion: string;
    nombre: string;
    ubicacion: string;
    vecindario_id: number;
  
    constructor(
      id: number,
      calificacion: number,
      descripcion: string,
      nombre: string,
      ubicacion: string,
      vecindario_id: number
    ) {
      this.id = id;
      this.calificacion = calificacion;
      this.descripcion = descripcion;
      this.nombre = nombre;
      this.ubicacion = ubicacion;
      this.vecindario_id = vecindario_id;
    }
  }