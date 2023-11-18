
import { Vecino } from './vecino';
import { Publicacion } from '../publicacion/publicacion';
import { Vecindario } from '../vecindarios/vecindario';


export class VecinoDetail extends Vecino{
    publicaciones: Array<Publicacion>=[];
    constructor(id: number, nombre: string, edad: number, profilePic: string, descripcion: string, vecindario: Vecindario, publicaciones: Array<Publicacion>){
        super(id, nombre, edad, profilePic, descripcion, vecindario)
        this.publicaciones = publicaciones;
    }

    

}
