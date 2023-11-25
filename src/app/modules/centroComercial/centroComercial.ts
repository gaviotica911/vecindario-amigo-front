export class CentroComercial {
  constructor (public id: number,public calificacion: number,public nombre: string,public ubicacion: string,public vecindario: { nombre: string })
    {
      this.id=id;
      this.calificacion=calificacion;
      this.nombre=nombre;
      this.ubicacion=ubicacion;
      this.vecindario=vecindario;
    }
}
