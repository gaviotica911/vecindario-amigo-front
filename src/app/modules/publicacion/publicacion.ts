import { Vecino } from "../vecino/vecino";

export class Publicacion {

    id: number;
    contenido: string;
    fecha: any;
    foto: string;
    video: string;
    likes: number;
    compartidos: number;
    vecino:Vecino;
    

    constructor(id: number, contenido: string, fecha: any, foto: string, video: string, likes: number, compartidos: number, vecino:Vecino) {   
        this.id = id;
        this.contenido = contenido;
        this.fecha = fecha;
        this.foto = foto;
        this.video = video;
        this.likes = likes;
        this.compartidos = compartidos;
        this.vecino = vecino;
    }
}
