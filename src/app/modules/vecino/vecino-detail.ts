
import { Vecino } from './vecino';
import { Publicacion } from '../publicacion/publicacion';
import { Vecindario } from '../vecindarios/vecindario';
import { GrupoDeInteres} from '../grupoDeInteres/grupoDeInteres';  


export class VecinoDetail extends Vecino{
    publicaciones: Array<Publicacion>=[];
    gruposDeInteres: Array<GrupoDeInteres>=[];
    constructor(id: number, nombre: string, edad: number, profilePic: string, descripcion: string, vecindario: Vecindario, publicaciones: Array<Publicacion>, gruposDeInteres: Array<GrupoDeInteres>){
        super(id, nombre, edad, profilePic, descripcion, vecindario)
        this.publicaciones = publicaciones;
        this.gruposDeInteres = gruposDeInteres;
    }

    

}
