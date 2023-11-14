import {Vecindario} from '../modules/vecindarios/vecindario';

export class Vecino {
    ID: number;
    nombre: string;
    edad: number;
    profilePic: string;
    descripcion: string;
    vecindario: Vecindario;

    public constructor(ID: number, nombre: string, edad: number, profilePic: string, descripcion: string, vecindario: Vecindario) {
        this.ID = ID;
        this.nombre = nombre;
        this.edad = edad;
        this.profilePic = profilePic;
        this.descripcion = descripcion;
        this.vecindario = vecindario;
    }
   }