
export class ZonaVerde {
    id: number;
    nombre: string;
    descripcion: string;
    ubicacion: string;
    preferencias: string;
    calificacion: number;
    
    constructor(id: number, nombre: string, descripcion: string, ubicacion: string, preferencias: string, calificacion: number){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.preferencias = preferencias;
        this.calificacion = calificacion;
    }
}
