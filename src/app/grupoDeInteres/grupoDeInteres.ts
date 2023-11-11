export class GrupoDeInteres {
  id: number;
  nombre: string;
  descripcion: string;
  image: string

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    image:string
 
  ) {
    this.id = id;
    this.nombre= nombre;
    this.descripcion= descripcion; 
    this.image = image;
  }
}
