import { Publicacion } from './publicacion';
import { Comentario } from '../comentario/comentario';

export class PublicacionDetail extends Publicacion {
    comentarios: Array<Comentario>=[];
    constructor(id:number, contenido: string, fecha:any, foto:string, video: string, likes:number, compartidos:number, comentarios: Array<Comentario>){
        super(id, contenido, fecha, foto, video, likes, compartidos);
        this.comentarios = comentarios;
    }
}
