import { Vecino } from '../vecino/vecino';

export class Comentario {
    id: number;
    autor: Vecino;
    fecha: any;
    contenido:string;
    constructor(id:number,autor:Vecino,fecha:any,contenido:string){
        this.id=id;
        this.autor=autor;
        this.fecha=fecha;
        this.contenido=contenido;
    }
}
