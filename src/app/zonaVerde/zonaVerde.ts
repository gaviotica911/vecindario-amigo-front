import {Vecindario} from '../modules/vecindarios/vecindario';
export class ZonaVerde {
    id: number;
    nombre: string;
    descripcion: string;
    ubicacion: string;
    preferencias: string;
    calificacion: number;
    vecindario: Vecindario;
    
    constructor(id: number, nombre: string, descripcion: string, ubicacion: string, preferencias: string, calificacion: number, vecindario: Vecindario){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.preferencias = preferencias;
        this.calificacion = calificacion;
        this.vecindario = vecindario;
    }
}
