import { GrupoDeInteres } from "./grupoDeInteres";
import { Vecino } from "../vecino/vecino";


export class GrupoDeInteresDetail extends GrupoDeInteres {
  vecinos: Array<Vecino>

    constructor(id: number,
      nombre: string,
      descripcion: string,
      vecinos: Array<Vecino>

      ){
        super(id, nombre, descripcion)
        this.vecinos = vecinos
      }
    }