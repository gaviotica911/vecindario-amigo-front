export class Publicacion {

    id: number;
    contenido: string;
    fecha: any;
    foto: string;
    video: string;
    likes: number;
    compartidos: number;

    constructor(id: number, contenido: string, fecha: any, foto: string, video: string, likes: number, compartidos: number) {   
        this.id = id;
        this.contenido = contenido;
        this.fecha = fecha;
        this.foto = foto;
        this.video = video;
        this.likes = likes;
        this.compartidos = compartidos;
    }
}
