import { GrupoDeInteres } from "./grupoDeInteres";


export class GrupoDeInteresDetail extends GrupoDeInteres {
  
    constructor(id: number,
      nombre: string,
      descripcion: string,
      image: string
      ){
        super(id, nombre, descripcion, image)
      }
    }