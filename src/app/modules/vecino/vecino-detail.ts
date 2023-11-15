
import { Vecino } from './vecino';
import { Publicacion } from '../publicacion/publicacion';
import { Vecindario } from '../vecindarios/vecindario';
import { PublicacionDetail } from '../publicacion/publicacion-detail';

export class VecinoDetail extends Vecino{
    publicaciones: Array<PublicacionDetail>=[];
    constructor(id: number, nombre: string, edad: number, profilePic: string, descripcion: string, vecindario: Vecindario, publicaciones: Array<PublicacionDetail>){
        super(id, nombre, edad, profilePic, descripcion, vecindario)
        this.publicaciones = publicaciones;
    }

    

}
