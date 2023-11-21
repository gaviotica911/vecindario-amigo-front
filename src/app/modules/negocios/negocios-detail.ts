
import { Negocio } from './negocios';
import { Publicacion } from '../publicacion/publicacion';
import { Vecindario } from '../vecindarios/vecindario';
import { GrupoDeInteres} from '../../grupoDeInteres/grupoDeInteres';  


export class NegocioDetail extends Negocio{
    publicaciones: Array<Publicacion>=[];
    constructor(id: number, nombre: string, profilePic: string, descripcion: string, vecindario: Vecindario, publicaciones: Array<Publicacion>){
        super(id, nombre, profilePic, descripcion, vecindario);
        this.publicaciones = publicaciones;
    }

    

}
